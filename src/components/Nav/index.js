import React from 'react';
import { NavLink } from 'react-router-dom';
 import './style.css'
function Navbar () {
    return (
      <nav className="navbar">
      <div className="nav-row">
        <h1>JW</h1>
        <div className="linkContainer">
          <NavLink className="nav-item nav-link" to="/Home">Work</NavLink>
          <NavLink className="nav-item nav-link" to="/Contact">Contact</NavLink>
        </div>
      </div>
    </nav>
   
    )
  }

export default Navbar;