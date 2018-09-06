import React from 'react';
import { setCurrentEventAction } from '../actions';
import { connect } from 'react-redux'

const EventTab = (props) => {
    return (
        <div className="event-tab" onClick={() => props.setCurrentEvent(props.event)}>
           <h5>{props.event.title}</h5>
           <h6>{props.event.date}</h6> 
           <hr></hr>
        </div>
    );
}

function mapDispatchToProps(dispatch) {
    return {
        setCurrentEvent: (eventObj) => {
            dispatch(setCurrentEventAction(eventObj))
        }
    }
}

export default connect(null, mapDispatchToProps)(EventTab);
