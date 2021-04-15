import React from 'react';
import { NavLink } from 'react-router-dom';
import { BackButton } from '../../components'

const Header = () => {
    return (
        <nav>
            <NavLink exact to="/" activeClassName="current">Map</NavLink>
            <NavLink to="/locations" activeClassName="current">All Destinations</NavLink>
            <BackButton />
        </nav>
    );
}

export default Header;