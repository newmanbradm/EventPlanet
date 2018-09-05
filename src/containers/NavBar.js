import React from 'react';
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar">
            <NavLink exact to="/details" activeStyle={{fontWeight: 'bold',color: 'crimson'}}>Details</NavLink>
            
            <NavLink exact to="/venues" activeStyle={{fontWeight: 'bold',color: 'crimson'}}>Venues</NavLink>
            
            <NavLink exact to="/guests" activeStyle={{fontWeight: 'bold',color: 'crimson'}}>Guests</NavLink>
            
            <NavLink exact to="/supplies" activeStyle={{fontWeight: 'bold',color: 'crimson'}}>Supplies</NavLink>
            
            <NavLink exact to="/inspiration" activeStyle={{fontWeight: 'bold',color: 'crimson'}}>Inspiration</NavLink>
        </div>
    );
}

export default Navbar;
