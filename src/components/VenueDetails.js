import React from 'react';

const VenueDetails = (props) => {

    return (
        <div className="venue">
            <h2>{props.venue.name}</h2>
            <img src={props.venue.image_url} alt="venue"/>
            <h3>Address</h3>
            {props.venue.address}
            <br />
            <br />
            <div className="edit-and-remove-buttons">
                <button onClick={() => props.editVenue(props.venue)}>Edit Venue</button>
                &nbsp;
                <button onClick={() => props.deleteVenue(props.venue.id)}>Remove Venue</button>
            </div>
        </div>
    );
}

export default VenueDetails;