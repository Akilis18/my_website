// src/components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/portfolio" className="nav-link">Portfolio</Link></li>
        <li><Link to="/notes" className="nav-link">Notes</Link></li>
        <li><Link to="/apps" className="nav-link">Apps</Link></li>
        <li><Link to="/contact" className="nav-link">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
