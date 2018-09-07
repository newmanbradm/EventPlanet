import React from 'react';

const VenueDetails = (props) => {

    return (
        <div>
            <h2>{props.venue.name}</h2>
            <img src={props.venue.image_url} alt="venue"/>
            <h3>Address</h3>
            {props.venue.address}
        </div>
    );
}

export default VenueDetails;