import React, { Component } from 'react';

class VenueDetails extends Component {

    displayImage = () => {
        if (this.props.venue.image_url.length !== 0) {
            return <img className="uploaded-image" src={this.props.venue.image_url} alt="venue"/>
        } else {
            return <img className="uploaded-image" src="https://vignette.wikia.nocookie.net/sorenova/images/2/22/Your_photo_here-3787d738d74295a33f783015c625c5ae.png/revision/latest?cb=20170630201907" alt="venue"/>
        }
    }

    render() {
        return (
            <div className="venue">
                <h2>{this.props.venue.name}</h2>
                {this.displayImage()}
                <h3>Address</h3>
                {this.props.venue.address}
                <br />
                <br />
                <div className="edit-and-remove-buttons">
                    <button onClick={() => this.props.editVenue(this.props.venue)}>Edit Venue</button>
                    &nbsp;
                    <button onClick={() => this.props.deleteVenue(this.props.venue.id)}>Remove Venue</button>
                </div>
            </div>
        );
    }
}

export default VenueDetails;