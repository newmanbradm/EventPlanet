import React, { Component } from 'react';
import { connect } from 'react-redux';
import VenueDetails from '../components/VenueDetails';

class VenueContainer extends Component {

    renderVenueDetails = () => {
        if (this.props.currentEvent.venues.length !== 0) {
            return this.props.currentEvent.venues.map(venue => <VenueDetails key={venue.id} venue={venue}/>)
        } else {
            return <h1>This event does not have any venues at this time.</h1>
        }
    }
    
    render() {
        return (
            this.props.currentEvent.id ?
            <div className="content">
                {this.renderVenueDetails()}
            </div>
            :
            <div className="content">
                <h1>Please Select An Event</h1>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        currentEvent: state.currentEvent.currentEvent
    }
}

export default connect(mapStateToProps)(VenueContainer);
