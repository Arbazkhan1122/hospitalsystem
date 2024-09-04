// src/Navbar.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navbar.css'; // Add your CSS styles here

const Navbar = ({ handleNavigation }) => {
  const location = useLocation(); // Access the current route

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">🏠</Link>
      </div>
      <nav className="nav-links">
        <Link 
          to="/search-patient" 
          className={`adt-header-button ${location.pathname === '/search-patient' ? 'active' : ''}`}
         
        >
          Search Patient
        </Link>
        <Link 
          to="/admitted-patient" 
          className={`adt-header-button ${location.pathname === '/admitted-patient' ? 'active' : ''}`}
         
        >
          Admitted Patients
        </Link>
        <Link 
          to="/discharged-patient" 
          className={`adt-header-button ${location.pathname === '/discharged-patient' ? 'active' : ''}`}
         
        >
          Discharged Patients
        </Link>
        <Link 
          to="/exchange-bed" 
          className={`adt-header-button ${location.pathname === '/exchange-bed' ? 'active' : ''}`}
          
        >
          Exchange Bed
        </Link>
        <Link 
          to="/cancel-reservation" 
          className={`adt-header-button ${location.pathname === '/cancel-reservation' ? 'active' : ''}`}
          
        >
          Cancel Bed Reservation
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
