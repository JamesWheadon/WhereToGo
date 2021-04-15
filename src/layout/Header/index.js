import React from 'react';
import { NavLink } from 'react-router-dom';
import { BackButton } from '../../components'

const Header = () => {
    return (
        <nav>
            <NavLink exact to="/" activeClassName="current">Map</NavLink>
            <NavLink to="/locations" activeClassName="current">All Destinations</NavLink>
            <NavLink to="/Road_Trip" activeClassName="current">Road Trip</NavLink>
            <BackButton />
        </nav>
    );
}

export default Header;