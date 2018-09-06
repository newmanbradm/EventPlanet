import React from 'react';
import { connect } from 'react-redux';
import EventDetails from '../components/EventDetails';

const DetailsContainer = (props) => {
    return (
        <div className="content">
            <EventDetails event={props.currentEvent}/>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        currentEvent: state.currentEvent.currentEvent
    }
}

export default connect(mapStateToProps)(DetailsContainer);
