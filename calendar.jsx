import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faPlus, faTimes, faCircle } from '@fortawesome/free-solid-svg-icons';
import '../assets/css/calendar.css';

const Calendar = () => {
  // State and references
  const [eventsArr, setEventsArr] = useState([]);
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());
  const [activeDay, setActiveDay] = useState(new Date().getDate());
  const [isAddingEvent, setIsAddingEvent] = useState(false);
  const [addEventTitle, setAddEventTitle] = useState("");
  const [addEventFrom, setAddEventFrom] = useState("");
  const [addEventTo, setAddEventTo] = useState("");
  const daysContainerRef = useRef(null);

  // Months array
  const months = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
  ];

  // Load events from local storage
  useEffect(() => {
    const storedEvents = localStorage.getItem("events");
    if (storedEvents) {
      setEventsArr(JSON.parse(storedEvents));
    }
  }, []);

  // Update local storage with events
  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(eventsArr));
  }, [eventsArr]);

  // Function to generate calendar days
  const generateDays = () => {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const prevLastDay = new Date(year, month, 0);
    const prevDays = prevLastDay.getDate();
    const lastDate = lastDay.getDate();
    const day = firstDay.getDay();
    const nextDays = 7 - lastDay.getDay() - 1;

    let days = [];

    // Previous month days
    for (let x = day; x > 0; x--) {
      days.push(<div key={`prev-${prevDays - x + 1}`} className="day prev-date">{prevDays - x + 1}</div>);
    }

    // Current month days
    for (let i = 1; i <= lastDate; i++) {
      let isEvent = false;
      eventsArr.forEach((eventObj) => {
        if (eventObj.day === i && eventObj.month === month + 1 && eventObj.year === year) {
          isEvent = true;
        }
      });

      let className = "day";
      if (i === activeDay && year === new Date().getFullYear() && month === new Date().getMonth()) {
        className += " today active";
      } else if (i === activeDay) {
        className += " active";
      }

      if (isEvent) {
        className += " event";
      }

      days.push(<div key={i} className={className} onClick={() => handleDayClick(i)}>{i}</div>);
    }

    // Next month days
    for (let j = 1; j <= nextDays; j++) {
      days.push(<div key={`next-${j}`} className="day next-date">{j}</div>);
    }
    return days; // Return the array of days
  };

  // Event handlers
  const handleDayClick = (date) => { 
    setActiveDay(date);
    updateEvents(date);
  };

  const prevMonth = () => {
    setMonth((prevMonth) => (prevMonth === 0 ? 11 : prevMonth - 1));
    if (month === 0) {
      setYear((prevYear) => prevYear - 1);
    }
  };

  const nextMonth = () => {
    setMonth((prevMonth) => (prevMonth === 11 ? 0 : prevMonth + 1));
    if (month === 11) {
      setYear((prevYear) => prevYear + 1);
    }
  };

  const gotoDate = () => {
    const dateArr = document.querySelector(".date-input").value.split("/");
    if (dateArr.length === 2) {
      if (dateArr[0] > 0 && dateArr[0] < 13 && dateArr[1].length === 4) {
        setMonth(parseInt(dateArr[0]) - 1);
        setYear(parseInt(dateArr[1]));
        return;
      }
    }
    alert("Invalid Date");
  };

  const updateEvents = (date) => {
    let events = [];
    eventsArr.forEach((event) => {
      if (date === event.day && month + 1 === event.month && year === event.year) {
        event.events.forEach((event) => {
          events.push(
            <div key={event.title} className="event">
              <div className="title">
                <FontAwesomeIcon icon={faCircle} />
                <h3 className="event-title">{event.title}</h3>
              </div>
              <div className="event-time">
                <span className="event-time">{event.time}</span>
              </div>
            </div>
          );
        });
      }
    });
  
    if (events.length === 0) {
      events.push(
        <div key="no-event" className="no-event">
          <h3>No Events</h3>
        </div>
      );
    }
  
    // Update the state instead of manipulating the DOM directly
    setEventsArr(events); 
  };

  const handleAddEventClick = () => {
    setIsAddingEvent(true);
  };

  const handleAddEventClose = () => {
    setIsAddingEvent(false);
    setAddEventTitle("");
    setAddEventFrom("");
    setAddEventTo("");
  };

  const handleAddEventSubmit = () => {
    const eventTitle = addEventTitle;
    const eventTimeFrom = addEventFrom;
    const eventTimeTo = addEventTo;

    if (eventTitle === "" || eventTimeFrom === "" || eventTimeTo === "") {
      alert("Please fill all the fields");
      return;
    }

    // Check correct time format 24 hours
    const timeFromArr = eventTimeFrom.split(":");
    const timeToArr = eventTimeTo.split(":");
    if (
      timeFromArr.length !== 2 ||
      timeToArr.length !== 2 ||
      timeFromArr[0] > 23 ||
      timeFromArr[1] > 59 ||
      timeToArr[0] > 23 ||
      timeToArr[1] > 59
    ) {
      alert("Invalid Time Format");
      return;
    }

    const timeFrom = convertTime(eventTimeFrom);
    const timeTo = convertTime(eventTimeTo);

    // Check if event is already added
    let eventExist = false;
    eventsArr.forEach((event) => {
      if (event.day === activeDay && event.month === month + 1 && event.year === year) {
        event.events.forEach((event) => {
          if (event.title === eventTitle) {
            eventExist = true;
          }
        });
      }
    });

    if (eventExist) {
      alert("Event already added");
      return;
    }

    const newEvent = {
      title: eventTitle,
      time: timeFrom + " - " + timeTo,
    };

    let eventAdded = false;
    if (eventsArr.length > 0) {
      eventsArr.forEach((item, index) => {
        if (item.day === activeDay && item.month === month + 1 && item.year === year) {
          eventsArr[index].events.push(newEvent);
          eventAdded = true;
        }
      });
    }

    if (!eventAdded) {
      eventsArr.push({
        day: activeDay,
        month: month + 1,
        year: year,
        events: [newEvent],
      });
    }

    setEventsArr([...eventsArr]); // Update state with new events
    handleAddEventClose(); // Close the add event form
    updateEvents(activeDay); // Update events display

    // Select active day and add event class if not added
    const activeDayEl = daysContainerRef.current.querySelector(".day.active");
    if (activeDayEl && !activeDayEl.classList.contains("event")) {
      activeDayEl.classList.add("event");
    }
  };

  const convertTime = (time) => {
    // Convert time to 24 hour format
    let timeArr = time.split(":");
    let timeHour = parseInt(timeArr[0]);
    let timeMin = timeArr[1];
    let timeFormat = timeHour >= 12 ? "PM" : "AM";
    timeHour = timeHour % 12 || 12;
    time = timeHour + ":" + timeMin + " " + timeFormat;
    return time;
  };

  return (
    <div className="body-calendar">
      <div className="container-calendar">
        <div className="left">
          <div className="calendar">
            <div className="month">
              <FontAwesomeIcon icon={faAngleLeft} className="prev" onClick={prevMonth} />
              <div className="date">{months[month]} {year}</div>
              <FontAwesomeIcon icon={faAngleRight} className="next" onClick={nextMonth} />
            </div>
            <div className="weekdays">
              <div>Sun</div>
              <div>Mon</div>
              <div>Tue</div>
              <div>Wed</div>
              <div>Thu</div>
              <div>Fri</div>
              <div>Sat</div>
            </div>
            <div className="days" ref={daysContainerRef}>
              {generateDays()}
            </div>
            <div className="goto-today">
              <div className="goto">
                <input type="text" className="date-input" placeholder="dd/yyyy" />
                <button className="goto-btn" onClick={gotoDate}>
                  Go
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="today-date">
            <div className="event-day">Wed</div>
            <div className="event-date">12th December 2023</div>
          </div>
          <div className="events">
              {eventsArr.map((event, index) => (
                <div key={index} className="event">
                  <div className="title">
                    <FontAwesomeIcon icon={faCircle} />
                    <h3 className="event-title">{event.title}</h3>
                  </div>
                  <div className="event-time">
                    <span className="event-time">{event.time}</span>
                  </div>
                </div>
              ))}
          </div>
          {isAddingEvent && (
            <div className="add-event-wrapper active">
              <div className="add-event-header">
                <div className="title">Add Event</div>
                <FontAwesomeIcon icon={faTimes} className="close" onClick={handleAddEventClose} />
              </div>
              <div className="add-event-body">
                <div className="add-event-input">
                  <input
                    type="text"
                    placeholder="Event Name"
                    value={addEventTitle}
                    onChange={(e) => setAddEventTitle(e.target.value)}
                  />
                </div>
                <div className="add-event-input">
                  <input
                    type="text"
                    placeholder="Event Time From"
                    value={addEventFrom}
                    onChange={(e) => setAddEventFrom(e.target.value)}
                  />
                </div>
                <div className="add-event-input">
                  <input
                    type="text"
                    placeholder="Event Time To"
                    value={addEventTo}
                    onChange={(e) => setAddEventTo(e.target.value)}
                  />
                </div>
              </div>
              <div className="add-event-footer">
                <button className="add-event-btn" onClick={handleAddEventSubmit}>
                  Add Event
                </button>
              </div>
            </div>
          )}
          {!isAddingEvent && (
            <button className="add-event" onClick={handleAddEventClick}>
              <FontAwesomeIcon icon={faPlus} className="plus" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Calendar;