import React, { Component } from 'react';
import { setCurrentEventAction } from '../actions';
import { connect } from 'react-redux'

class EventTab extends Component {

    render() {
        return (
            <div className="event-tab" onClick={() => this.props.setCurrentEvent(this.props.event)}>
            <h5>{this.props.event.title}</h5>
            <h6>{this.props.event.date}</h6> 
            <hr></hr>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setCurrentEvent: (eventObj) => {
            dispatch(setCurrentEventAction(eventObj))
        }
    }
}

export default connect(null, mapDispatchToProps)(EventTab);
