import React, { useState } from 'react';
import axios from 'axios';
// import '../assets/jss/popup.css';

function CreateEventForm() {
    const [eventData, setEventData] = useState({
        summary: '',
        location: '',
        description: '',
        startTime: '',
        endTime: ''
    });

    const handleChange = (e) => {
        setEventData({ ...eventData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/api/createEvent', eventData);
            console.log('Event Created', response.data);
        } catch (error) {
            console.error('Error creating event', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="summary" value={eventData.summary} onChange={handleChange} placeholder="Event Title" />
            <input type="text" name="location" value={eventData.location} onChange={handleChange} placeholder="Location" />
            <textarea name="description" value={eventData.description} onChange={handleChange} placeholder="Description"></textarea>
            <input type="datetime-local" name="startTime" value={eventData.startTime} onChange={handleChange} />
            <input type="datetime-local" name="endTime" value={eventData.endTime} onChange={handleChange} />
            <button type="submit">Create Event</button>
        </form>
    );
}
export default  CreateEventForm;