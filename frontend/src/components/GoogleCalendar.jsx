// GoogleCalendar.js
import React, { useEffect, useState } from 'react';
import { gapi } from 'gapi-script';

// xoa dong cam

const GoogleCalendar = ({ setEvents }) => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [form, setForm] = useState({
    summary: '',
    start: '',
    end: '',
    timeZone: 'America/Los_Angeles'
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    const initClient = async () => {
      try {
        await gapi.client.init({
          apiKey: API_KEY,
          clientId: CLIENT_ID,
          discoveryDocs: DISCOVERY_DOCS,
          scope: SCOPES,
        });
        const authInstance = gapi.auth2.getAuthInstance();
        setIsSignedIn(authInstance.isSignedIn.get());
        authInstance.isSignedIn.listen(setIsSignedIn);
      } catch (error) {
        console.error("Error initializing Google API client:", error);
      }
    };
    gapi.load('client:auth2', initClient);
  }, []);

  const handleAuthClick = () => {
    gapi.auth2.getAuthInstance().signIn();
  };

  const handleSignOutClick = () => {
    gapi.auth2.getAuthInstance().signOut();
  };

  const listEvents = async () => {
    try {
      const response = await gapi.client.calendar.events.list({
        calendarId: 'primary',
        timeMin: (new Date()).toISOString(),
        showDeleted: false,
        singleEvents: true,
        maxResults: 10,
        orderBy: 'startTime'
      });
      const eventsData = response.result.items.map(event => ({
        id: event.id,
        title: event.summary,
        start: event.start.dateTime || event.start.date,
        end: event.end.dateTime || event.end.date
      }));
      setEvents(eventsData);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
  };

  const createEvent = async (e) => {
    e.preventDefault();
    setError(null);

    // Validate form data
    if (!form.summary || !form.start || !form.end) {
      setError("Please fill out all required fields.");
      return;
    }

    if (new Date(form.start) >= new Date(form.end)) {
      setError("End time must be after start time.");
      return;
    }

    const event = {
      summary: form.summary,
      start: {
        dateTime: new Date(form.start).toISOString(),
        timeZone: form.timeZone
      },
      end: {
        dateTime: new Date(form.end).toISOString(),
        timeZone: form.timeZone
      }
    };

    try {
      const response = await gapi.client.calendar.events.insert({
        calendarId: 'primary',
        resource: event,
      });
      console.log('Event created:', response);
      listEvents(); // Update events list
      setForm({
        summary: '',
        start: '',
        end: '',
        timeZone: 'America/Los_Angeles'
      });
    } catch (error) {
      console.error("Error creating event:", error);
      setError("Error creating event: " + (error.result && error.result.error && error.result.error.message ? error.result.error.message : error.message));
    }
  };

  return (
    <div>
      {isSignedIn ? (
        <div>
          <div className="container">
          <div class="row">
             <button type="button" class="btn btn-outline-primary signoutbtn"  onClick={handleSignOutClick}><i class="bi bi-google"></i> Sign Out</button>
          </div>
            <div className="row popup">
              
                <button type="button" class="btn btn-secondary listev" onClick={listEvents}>List Upcoming Events</button>
                <form onSubmit={createEvent}>
                <div class="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1"><i class="bi bi-pencil-square"></i></span>
                  <input type="text" name="summary" class="form-control" placeholder="Event Summary" aria-label="Event Summary" aria-describedby="basic-addon1"value={form.summary}
                    onChange={handleChange}
                    required />
                </div>
                <div class="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1"><i class="bi bi-calendar-event-fill"></i></span>
                  <input type="datetime-local" name="start" class="form-control" placeholder="Start DateTime" aria-label="Start DateTime" aria-describedby="basic-addon1"value={form.start}
                    onChange={handleChange}
                    required />
                </div>
                <div class="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1"><i class="bi bi-calendar3-range-fill"></i></span>
                  <input type="datetime-local" name="end" class="form-control" placeholder="End DateTime" aria-label="End DateTime" aria-describedby="basic-addon1" value={form.end}
                    onChange={handleChange}
                    required />
                </div>
                  
                  <button type="submit" class="btn btn-secondary createev">Create Event</button>
                </form>
                {error && <p style={{ color: 'red' }}>{error}</p>}
              
            </div>
          </div>
        </div>
      ) : (
        <button type="button" class="btn btn-outline-primary" onClick={handleAuthClick}> <i class="bi bi-google"></i> Sign In with Google</button>
      )}
    </div>
  );
};

export default GoogleCalendar;
