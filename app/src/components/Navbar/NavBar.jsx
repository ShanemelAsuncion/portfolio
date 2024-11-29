import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logos/logo.png';
import './NavBar.scss';

function NavBar() {
  return (
    <div className='navbar'>
      <div className='navbar__logo'>
        <img src={logo} alt="Logo" className='navbar__logo-item' />
      </div>
      <div className='navbar__item'>
        <div className='navbar__link'>
          <Link to="/">Craft</Link>
        </div>
        <div className='navbar__link'>
          <Link to="/about">About</Link>
        </div>
        <div className='navbar__link'>
          <Link to="/play">Playground</Link>
        </div>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
        <button className='navbar__button'>
        
                Resume      
 
        </button>
          </a>
      </div>
    </div>
  );
}

export default NavBar;
