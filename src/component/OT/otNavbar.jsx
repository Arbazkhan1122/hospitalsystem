// neha-OT-OT-navbar-14-9-24
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './otmain.css';

const Navbar = ({ handleNavigation }) => {
  const location = useLocation(); 

  return (
    <header className="ot_setting-header">
      <nav className="ot_setting-nav-links">
        <Link 
          to="/" 
          className={`ot_setting-header-button ${location.pathname === '/' ? 'active' : ''}`}
          
        >
          Booing List
        </Link>
        <Link 
          to="/Setting" 
          className={`ot_setting-header-button ${location.pathname === '/Setting' ? 'active' : ''}`}
          
        >
          Setting
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
