import React from 'react';
import './style.css'
import { NavLink } from 'react-router-dom';

function Web() {
    return(
        <div className="webContainer">
        <nav className="navbar">
      <div className="nav-row">
        <h1 className="navHead">JW</h1>
        <div className="linkContainer">
          <NavLink className="nav-item nav-link" to="/Home">Work</NavLink>
          <NavLink className="nav-item nav-link" to="/Contact">Contact</NavLink>
        </div>
      </div>
    </nav>
            <div className="row">
                <div className="column-l">
                    <h2>time</h2>
                    <p>
                        Something easy for the eyes.
                    </p>
                </div>
                <div className="column-r">
                    <div className="web-container">
                        <a href="https://jaylanw.github.io/time/" target="blank">
                            <img
                                src= "../assets/images/time.png"
                                className="imgR"
                                alt="time"
                            />
                        </ a>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="column-l">
                    <a href="https://shrouded-chamber-97830.herokuapp.com/" target="blank">
                        <img
                            src="../assets/images/moodifiScreen.png"
                            className="imgL"
                            alt="moodifi"
                        />
                    </a>
                </div>
                <div className="column-r">
                    <div className="web-container">
                        <h2>moodifi</h2>
                        <p>
                            Curated playlist for whatever you do, and your moods. <br />
                Discover new music based on your activities and feelings! <br />
                Browse, rate and listen all within one app!
              </p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="column-l">
                    <h2>coffee run</h2>
                    <p>Want coffee? <br />
                        Locate nearby coffee shops with coffee run!</p>
                </div>
                <div className="column-r">
                    <div className="web-container">
                        <a href="https://shmoesolid.github.io/Coffee-Run/" target="blank">
                            <img
                                src="../assets/images/coffeerun.png"
                                className="imgR"
                                alt="coffeerun"
                            />
                        </a>
                    </div>
                </div>
            </div>
        <div className="row">
            <div className="column-l">
                <a href="https://jaylanw.github.io/Weekly-Weather/" target="blank">
                    <img
                        src="../assets/images/weeklyweather.jpeg"
                        className="imgL"
                        alt="weeklyweather"
                    />
                </a>
            </div>
            <div className="column-r">
                <div className="web-container">
                    <h2>Weekly <br /> Weather </h2>
                        <p>
                            Check the forecast in your city! <br />
                  Traveling? Check other city's forecast at the click of a button.
              </p>
                </div>
            </div>
            </div>
            <div className="row">
                <div className="column-l">
                    <h2>Note <br />
                  Taker</h2>
                    <p>
                        Take, view, and delete notes all in one app!
              </p>
                </div>
                <div className="column-r">
                    <div className="web-container">
                        <a href="https://jaylannotes.herokuapp.com/" target="blank">
                            <img
                                src="../assets/images/noteTaker.png"
                                className="imgR"
                                alt="noteTaker"
                            />
                        </a>
                    </div>
                </div>
            </div>
            <div className="ghRow">
                <a href="https://github.com/jaylanw" id="ghA" target="blank">
                    <i className="fa fa-github logo" />
                    </a>
            </div>
          </div>  
    )
}

export default Web;