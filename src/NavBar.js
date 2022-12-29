import { NavLink } from 'react-router-dom';
import React from 'react';
import './Navbar.css';


const NavBar = () => {
    return (
        <div className="navbar">
            <ul><li className="nav-item"><NavLink to='/' >Home</NavLink></li>
                <li className="nav-item" ><NavLink to='/animals' >Animals</NavLink></li>
                <li className="nav-item" ><NavLink to='/birds' >Birds</NavLink></li>
                <li className="nav-item"><NavLink to='/about' >About</NavLink></li>
            </ul>
        </div >
    );
};

export default NavBar;