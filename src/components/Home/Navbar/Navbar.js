/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './nav.css';
const Navbar = () => {
    return (
<nav class="navbar navbar-expand-lg navbar-light me-5 customCss">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link nav-item ms-5" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-item nav-link ms-5" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ms-5" href="#">Dental Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ms-5" href="#">Reviews</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ms-5" href="#">Blog</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ms-5" href="#">Contact Us</a>
        </li>
        </ul>
    </div>
  </div>
</nav>
    );
};

export default Navbar;