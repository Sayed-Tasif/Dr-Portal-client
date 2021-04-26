/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './nav.css';
const Navbar = () => {
    return (
<nav className="navbar navbar-expand-lg navbar-light me-5 customCss">
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link nav-item ms-5" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-item nav-link ms-5" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link ms-5" href="#">Dental Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link ms-5" href="#">Reviews</a>
        </li>
        <li className="nav-item">
          <a className="nav-link ms-5" href="#">Blog</a>
        </li>
        <li className="nav-item">
          <a className="nav-link ms-5" href="#">Contact Us</a>
        </li>
        </ul>
    </div>
  </div>
</nav>
    );
};

export default Navbar;