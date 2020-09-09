import React from 'react';
import './style.css'
import { NavLink } from 'react-router-dom';

function Gallery() {
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
            <img  src="../assets/images/eli1.jpg" alt="grad" />
            <img  src="../assets/images/eli2.jpg" alt="grad" />
            <img  src="../assets/images/eli3.JPG" alt="grad" />
            <img  src="../assets/images/eli4.JPG" alt="grad"  />
            <img className="lazy" data-src="../assets/images/a1.jpg" alt="grad" />
            <img className="lazy" data-src="../assets/images/a2.jpg" alt="grad" />
            <img className="lazy" data-src="../assets/images/a3.jpg" alt="grad" />
            <img className="lazy" data-src="../assets/images/a4.jpg" alt="grad" />
          </div>
          <div className="col-sm-6 col-md-3">
            <img src="../assets/images/d1.jpg" alt="couple" />
            <img  src="../assets/images/d2.jpg" alt="couple" />
            <img  src="../assets/images/d4.jpg" alt="couple" />
            <img src="../assets/images/d3.jpg"  alt="couple" />
            <img className="lazy" data-src="../assets/images/gq.jpg"  alt="grad"/>
            <img className="lazy" data-src="../assets/images/gq2.jpg" alt="grad" />
            <img className="lazy" data-src="../assets/images/gq3.jpg" alt="grad" />
            <img className="lazy" data-src="../assets/images/wed3.jpg" alt="wedding" />
            <img className="lazy" data-src="../assets/images/wed2.jpg" alt="wedding" />
          </div>
          <div className="col-sm-6 col-md-3">
            <img src="../assets/images/o1.jpg"  alt="couple" />
            <img  src="../assets/images/o2.jpg" alt="couple" />
            <img  src="../assets/images/o3.jpg" alt="couple" />
            <img src="../assets/images/04.jpg" alt="couple" />
            <img className="lazy" data-src="../assets/images/os.jpg" alt="couple" />
            <img className="lazy" data-src="../assets/images/os3.jpg" alt="couple" />
            <img className="lazy" data-src="../assets/images/0s4.jpg" alt="couple"  />
            <img className="lazy" data-src="../assets/images/os2.jpg" alt="couple" />
            <img className="lazy" data-src="../assets/images/g1.jpg" alt="couple" />
            <img className="lazy" data-src="../assets/images/g2.jpg" alt="couple" />
            <img className="lazy" data-src="../assets/images/wed1.jpg" alt="couple" />
          </div>
          <div className="col-sm-6 col-md-3">
            <img src="../assets/images/vf.jpg" alt="family" />
            <img src="../assets/images/vf2.jpg" alt="family" />
            <img src="../assets/images/vf3.jpg" alt="family" />
            <img src="../assets/images/vf4.jpg" alt="family" />
            <img className="lazy" data-src="../assets/images/L1.jpg" alt="wedding" />
            <img className="lazy" data-src="../assets/images/L2.jpg" alt="wedding" />
            <img className="lazy" data-src="../assets/images/led1.jpg"alt="wedding"  />
            <img className="lazy" data-src="../assets/images/led2.jpg" alt="wedding" />
            <img className="lazy" data-src="../assets/images/wed5.jpg" alt="wedding" />
            <img className="lazy" data-src="../assets/images/wed4.jpg" alt="wedding" />
          </div>
          </div>
        </main>
  </div>
    )
}

document.addEventListener("DOMContentLoaded", function() {
  var lazyloadImages = document.querySelectorAll("img.lazy");    
  var lazyloadThrottleTimeout;
  
  function lazyload () {
    if(lazyloadThrottleTimeout) {
      clearTimeout(lazyloadThrottleTimeout);
    }    
    
    lazyloadThrottleTimeout = setTimeout(function() {
        var scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function(img) {
            if(img.offsetTop < (window.innerHeight + scrollTop)) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
            }
        });
        if(lazyloadImages.length === 0) { 
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
    }, 20);
  }
  
  document.addEventListener("scroll", lazyload);
  window.addEventListener("resize", lazyload);
  window.addEventListener("orientationChange", lazyload);
});

export default Gallery;