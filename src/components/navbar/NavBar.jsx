import React from 'react';
import './navbar.css';
import More from '../../images/more.png'
import Home from '../../images/home.png'

const NavBar = () => {
  return (
    <nav class="navbar">
      <ul className='nav-list hamburger'>
        <li className='nav-link' >
          <img className='nav-icon' src={More} alt="" />
        </li>
      </ul>
      <ul class="nav-list default">
        <a href="#home" className="nav-link">
          {/* <li className="nav-item"> */}
            <img className='nav-icon' src={Home} alt="" />
          {/* </li> */}
        </a>
        <a href="#about" className="nav-link">
          <li className="nav-item">
            About
          </li>
        </a>
        <a href="#projects" className="nav-link">
          <li className="nav-item">
            Projects
          </li>
        </a>
        <a href="#skills" className="nav-link">
          <li className="nav-item">
            Skills
          </li>
        </a>
        <a href="#contact" className="nav-link">
          <li className="nav-item">
            Contact
          </li>
        </a>
        <a href="https://chrisnotthere.github.io/blog-client/" className="nav-link">
          <li className="nav-item">
            Blog
          </li>
        </a>
      </ul>
    </nav>
  )
};

export default NavBar;
