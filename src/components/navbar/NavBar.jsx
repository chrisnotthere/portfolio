import React from 'react';
import './navbar.css';
import More from '../../images/more.png'

const NavBar = () => {
  return (
    <nav class="navbar">
      <ul className='nav-list hamburger'>
        <li className='nav-item' >
          <img className='nav-icon' src={More} alt="" />
        </li>
      </ul>
      <ul class="nav-list default">
        <li className="nav-item">
          <a href="#home" className="nav-link">Home</a>
        </li>
        <li className="nav-item">
          <a href="#about" className="nav-link">About</a>
        </li>
        <li className="nav-item">
          <a href="#projects" className="nav-link">Projects</a>
        </li>
        <li className="nav-item">
          <a href="#skills" className="nav-link">Skills</a>
        </li>
        <li className="nav-item">
          <a href="#contact" className="nav-link">Contact</a>
        </li>
      </ul>
    </nav>
  )
};

export default NavBar;
