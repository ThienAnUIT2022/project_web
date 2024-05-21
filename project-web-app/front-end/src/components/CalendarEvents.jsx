import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import '../assets/jss/popup.css';

function CalendarEvents() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/api/listEvents')
            .then(response => {
                setEvents(response.data.items); // Giả sử API trả về đối tượng có mảng các items
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            <h1>Upcoming Events</h1>
            <ul>
                {events.map(event => (
                    <li key={event.id}>
                        {event.start.dateTime} - {event.summary}
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default CalendarEvents;