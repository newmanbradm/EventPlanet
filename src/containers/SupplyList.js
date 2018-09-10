import React, { Component } from 'react';
import { connect } from 'react-redux';
import Supply from '../components/Supply';
import { withRouter } from 'react-router-dom';

class SupplyList extends Component {

    renderSupplies = () => {
        if (this.props.currentEvent.supplies.length !== 0) {
            let sortedArray = this.props.currentEvent.supplies.sort((a, b) => a.id - b.id)
            return sortedArray.map(supply => <Supply key={supply.id} supply={supply} editSupply={this.editSupply} deleteSupply={this.deleteSupply} />)
        } else {
            return <h1>This event does not have any supplies at this time.</h1>
        }
    }

    findTotal = () => {
        if (this.props.currentEvent.supplies.length !== 0) {
            return this.props.currentEvent.supplies.map(supply => supply.price).reduce((total, num) => total + num).toFixed(2)
        } else {
            return 0
        }
    }

    handleClick = () => {
        this.props.history.push("/add-supply")
    }

    editSupply = (supplyObj) => {

    }

    deleteSupply = (supplyId) => {

    }
    
    render() {
        return (
            this.props.currentEvent.id ?
            <div className="content">
                <h1>{`Supplies for ${this.props.currentEvent.title}`}</h1>
                <button onClick={this.handleClick}>Add Supply</button>
                <br />
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

export default withRouter(connect(mapStateToProps)(SupplyList));
