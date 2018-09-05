import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setEventsAction } from '../actions';
import EventTab from '../components/EventTab';

class EventList extends Component {

    componentDidMount() {
        fetch('http://localhost:3000/api/v1/events').then(resp => resp.json()).then(data => this.props.dispatch(setEventsAction(data)))
    }

    renderEventTabs = () => {
        return this.props.events.map(event => <EventTab key={event.id} {...event} />)
    }

    render() {
        return (
            <div className="event-list">
                <div className="create-event">
                    <h4>Add Event +</h4>
                    <hr />
                    <hr />
                </div>
                {this.renderEventTabs()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        events: state.events.events
    }
}

export default connect(mapStateToProps)(EventList);
