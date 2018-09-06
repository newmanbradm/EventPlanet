import React from 'react';

const VenueDetails = (props) => {

    return (
        <div>
            <h1>{props.venue.name}</h1>
            <img src={props.venue.image_url}/>
            <h3>Address</h3>
            {props.venue.address}
        </div>
    );
}

export default VenueDetails;