import React from 'react';
import './style.css'
import { NavLink } from 'react-router-dom';

function Content() {
    return (
    <div className="container">
                <nav className="navbar">
      <div className="nav-row">
        <h1 className="navHead">JW</h1>
        <div className="linkContainer">
          <NavLink className="nav-item nav-link" to="/Home">Work</NavLink>
          <NavLink className="nav-item nav-link" to="/Contact">Contact</NavLink>
        </div>
      </div>
    </nav>
<main className="site-content">
    <div className="row">
      <div className="col-sm-6 col-md-3">
        <img src="assets/content/AML1.jpg" alt="content creation" />
      </div>
      <div className="col-sm-6 col-md-3">
        <img src="assets/content/content1.jpeg" alt="content creation"  />
        <img src="assets/content/daughters1.jpg" alt="content creation" />
      </div>
      <div className="col-sm-6 col-md-3">
        <img src="assets/content/praise.jpg" alt="content creation" />
        <img src="assets/content/content2.jpeg" alt="content creation" />
      </div>
      <div className="col-sm-6 col-md-3">
        <img src="assets/content/OpenDoor.jpg" alt="content creation" />
      </div>
    </div>
</main>
</div>

    )
}

export default Content;