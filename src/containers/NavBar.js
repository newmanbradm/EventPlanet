import React from 'react';
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar">
            <br />
            <NavLink exact to="/details" activeStyle={{fontWeight: 'bold',color: 'crimson'}}>Details</NavLink>
            &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
            <NavLink exact to="/venues" activeStyle={{fontWeight: 'bold',color: 'crimson'}}>Venues</NavLink>
            &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
            <NavLink exact to="/guests" activeStyle={{fontWeight: 'bold',color: 'crimson'}}>Guests</NavLink>
            &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
            <NavLink exact to="/supplies" activeStyle={{fontWeight: 'bold',color: 'crimson'}}>Supplies</NavLink>
            &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
            <NavLink exact to="/inspiration" activeStyle={{fontWeight: 'bold',color: 'crimson'}}>Inspiration</NavLink>
            <br /><br />
        </div>
    );
}

export default Navbar;
