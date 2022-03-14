import React, { useState, useEffect } from 'react';
import './navbar.css';
import More from '../../images/more.png';
import Home from '../../images/home.png';
import Close from '../../images/close.png';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  });

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  }

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 576 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen])

  return (
    <nav className='navbar' >
      <ul className='nav-list hamburger'>
        <li className='nav-link' >
          <img className='nav-icon' src={!menuOpen ? More : Close} alt="" onClick={menuToggleHandler} />
        </li>
      </ul>
      <ul className={`nav-list default ${menuOpen && size.width < 576 ? 'isMenu' : ''}`}>
        <a href="#home" className="nav-link" onClick={menuToggleHandler} >
          <img className='nav-icon' src={Home} alt="" />
        </a>
        <a href="#about" className="nav-link" onClick={menuToggleHandler} >
          <li className="nav-item">
            About
          </li>
        </a>
        <a href="#projects" className="nav-link" onClick={menuToggleHandler} >
          <li className="nav-item">
            Projects
          </li>
        </a>
        <a href="#skills" className="nav-link" onClick={menuToggleHandler} >
          <li className="nav-item">
            Skills
          </li>
        </a>
        <a href="#contact" className="nav-link" onClick={menuToggleHandler} >
          <li className="nav-item">
            Contact
          </li>
        </a>
        <a href="https://chrisnotthere.github.io/blog-client/" className="nav-link" onClick={menuToggleHandler} >
          <li className="nav-item">
            Blog
          </li>
        </a>
      </ul>
    </nav>
  )
};

export default NavBar;
