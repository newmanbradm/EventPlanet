import React from 'react';

const EventDetails = (props) => {

    return (
        <div>
            <h1>{props.event.title}</h1>
            <br />
            <h2>Date</h2>
            {props.event.date}
            <h2>Rain Date</h2>
            {props.event.rain_date}
            <h2>Description</h2>
            {props.event.description}
            <h2>Contact</h2>
            {props.event.contact_details}
            <br />
            <br />
            <br />
            <div className="edit-and-remove-buttons">
                <button onClick={props.editEvent}>Edit Details</button>
                &nbsp;
                <button onClick={props.deleteEvent}>Delete Event</button>
            </div>
        </div>
    );
}

export default EventDetails;
