import React from 'react';
import './style.css';

function Home() {
    return (
        <div className="container">
            <h1 className="animate__animated animate__fadeIn">
                JAYLAN <br />
                WIENCKOWSKI
        </h1>
                <div className="img-container animate__animated animate__fadeIn">
                    <div className="container-y">
                        <a href="gallery.html">
                            <h4>PHOTOGRAPHY</h4>
                        </a>
                        <a href="web.html">
                            <h4>WEB DESIGN</h4>
                        </a>
                        <a href="content.html">
                            <h4>CONTENT</h4>
                        </a>
                        <a href="contact.html">
                            <h4>CONTACT</h4>
                        </a>
                    </div>
                </div>
      </div>
  
    )
}

export default Home;