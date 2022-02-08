import React from 'react';
import './navbar.css';

const NavBar = () => {
  return (
    <nav class="navbar">
      <ul class="nav-list">
        <li class="nav-item">
          <a href="#about" class="nav-link">About</a>
        </li>
        <li class="nav-item">
          <a href="#projects" class="nav-link">Projects</a>
        </li>
        <li class="nav-item">
          <a href="#skills" class="nav-link">Skills</a>
        </li>
        <li class="nav-item">
          <a href="#contact" class="nav-link">Contact</a>
        </li>
      </ul>
    </nav>
  )
};

export default NavBar;
