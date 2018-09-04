import React from 'react';
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar">
            <br />
            <NavLink exact to="/details">Details</NavLink>
            &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
            <NavLink exact to="/venues">Venues</NavLink>
            &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
            <NavLink exact to="/guests">Guests</NavLink>
            &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
            <NavLink exact to="/supplies">Supplies</NavLink>
            &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
            <NavLink exact to="/inspiration">Inspiration</NavLink>
        </div>
    );
}

export default Navbar;
