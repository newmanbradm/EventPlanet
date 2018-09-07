import React, { Component } from 'react';
import { connect } from 'react-redux';
import Supply from '../components/Supply';

class SupplyList extends Component {

    renderSupplies = () => {
        if (this.props.currentEvent.supplies.length !== 0) {
            return this.props.currentEvent.supplies.map(supply => <Supply key={supply.id} supply={supply}/>)
        } else {
            return <h1>This event does not have any supplies at this time.</h1>
        }
    }

    findTotal = () => {
        if (this.props.currentEvent.supplies.length !== 0) {
            return this.props.currentEvent.supplies.map(supply => supply.price).reduce((total, num) => total + num)
        } else {
            return 0
        }
    }
    
    render() {
        return (
            this.props.currentEvent.id ?
            <div className="content">
                <h1>{`Supplies for ${this.props.currentEvent.title}`}</h1>
                {this.renderSupplies()}
                <div className="budget">
                    <h4>Event Budget: {`$${this.props.currentEvent.budget}`}</h4>
                    <h4>Total of Supplies: {`$${this.findTotal()}`}</h4>
                    <h4>Remaining: {`$${this.props.currentEvent.budget - this.findTotal()}`}</h4>
                </div>
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

export default connect(mapStateToProps)(SupplyList);
