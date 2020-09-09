import React from 'react';
import './style.css';
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className="container">
            <h1 className="animate__animated animate__fadeIn">
                JAYLAN <br />
                WIENCKOWSKI
        </h1>
                <div className="img-container animate__animated animate__fadeIn">
                    <div className="container-y">
                    <Link to="/Gallery">
                            <h4>PHOTOGRAPHY</h4>
                    </Link>
                    <Link to="/Web">
                         <h4>WEB DESIGN</h4>
                        </Link>
                        <Link to="/Content">
                            <h4>CONTENT</h4>
                        </Link>
                        <Link to="/Contact">
                            <h4>CONTACT</h4>
                        </Link>
                    </div>
                </div>
      </div>
  
    )
}

export default Home;