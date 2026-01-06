import React, { useState } from 'react';
import logo from '../assets/siddhartha_logo.png';
import './Navbar.css';

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Siddhartha Institute" />
      </div>

      <div className={`menu-toggle ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <ul className={`menu ${open ? 'active' : ''}`}>
        {['about', 'academics', 'campuslife', 'placements', 'contact'].map((item) => (
          <li key={item}>
            <a href={`#${item}`} onClick={() => setOpen(false)}>
              {item.replace('-', ' ').toUpperCase()}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
