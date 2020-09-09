import React from 'react';
import './style.css'
import Nav from '../Nav'


function Content() {
    return (
    <div className="container">
        <Nav />
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