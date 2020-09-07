import React from 'react';
 import './style.css'
function Contact () {
    return (
      <div className="contactBody">
      <div className="container">
        <h2 id="ch2">
          WHERE PASSION
          <br />
          MEETS PURPOSE
        </h2>
        <p>
          Jaylan Wienckowski is a San Antonio native who's driven by creation.
          <br />
          Her passion lies within the heart of serving those through stylish, user
          friendly content.
          <br />
          Ready to offer you the skills and knowledge she obtains, Jaylan is eager
          to begin her journey with you.
        </p>
        <address>
          <a id="email" href="mailto:jaylanwienckowski@gmail.com"
            >jaylanwienckowski@gmail.com</a
          >
        </address>
          <a id="resumeL" href="https://docs.google.com/document/d/e/2PACX-1vQhxjlNFQbgGDM3IbqZex3e6pfox_XrQDWk5g3OHiUYZmGOOcJZu5pZtJRYZRQg26JThe_9uuvsbRlg/pub">
          <p>Resume</p>
          </a>
        </div>

        <div
          className="bottomRow"
        >
          <a
            target="blank"
            href="http://vsco.co/jxylnw?utm_source=user_grid&utm_medium=user_website&utm_campaign=link_to_grid"
            id="vLogo"
          >
            <img
              src="http://assets.vsco.co/assets/images/assets/Logo_black_24.png"
              alt="VSCO Logo"
              className="logo"
              id="vImg"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/jaylan-wienckowski-14a019143"
            target="blank"
          >
            <i
              className="fa fa-linkedin-square logo"
            ></i>
          </a>
          <a href="https://github.com/jaylanw" target="blank">
            <i className="fa fa-github logo"></i>
          </a>
          <a href="https://www.instagram.com/jxyln.w/" target="blank">
            <i className="fa fa-instagram logo" ></i>
          </a>
        </div>
      </div>
    )
  }

export default Contact;