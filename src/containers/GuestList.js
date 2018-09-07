import React, { Component } from 'react';
import { connect } from 'react-redux';
import Guest from '../components/Guest';

class GuestList extends Component {

    renderGuests = () => {
        if (this.props.currentEvent.guests.length !== 0) {
            return this.props.currentEvent.guests.map(guest => <Guest key={guest.id} guest={guest}/>)
        } else {
            return <h1>This event does not have any guests at this time.</h1>
        }
    }
    
    render() {
        return (
            this.props.currentEvent.id ?
            <div className="content">
                <h1>{`Guests for ${this.props.currentEvent.title}`}</h1>
                {this.renderGuests()}
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

export default connect(mapStateToProps)(GuestList);
