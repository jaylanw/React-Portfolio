import React from 'react';
 import './style.css'
function Navbar () {
    return (
      <nav className="navbar">
      <div className="nav-row">
        <h1>JW</h1>
        <div className="linkContainer">
          <a className="nav-item nav-link" href="index.html">Work</a>
          <a className="nav-item nav-link" href="contact.html">Contact</a>
        </div>
      </div>
    </nav>
   
    )
  }

export default Navbar;