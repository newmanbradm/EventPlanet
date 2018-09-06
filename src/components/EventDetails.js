import React from 'react';

const EventDetails = (props) => {

    return (
        props.event.id ?
        <div>
            <h1>{props.event.title}</h1>
            <h3>Date</h3>
            {props.event.date}
            <h3>Rain Date</h3>
            {props.event.rain_date}
            <h3>Description</h3>
            {props.event.description}
            <h3>Contact</h3>
            {props.event.contact_details}
        </div>
        :
        <div>
            <h1>Please Select An Event</h1>
        </div>
    );
}

export default EventDetails;
