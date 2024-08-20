// src/Navbar.js
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './utilitiesmain.css'

const Navbar = () => {
  return (
    <header className="utlt-header">
      
      <nav className="utlt-nav-links">
        <Link
          to="/schemerefundlist" 
          
        >
          Scheme Refund List
        </Link>
        <Link 
          to="/change_visitscheme" 
          
        >
          Change Visit Scheme
        </Link>
        <Link 
          to="/counterinfo" 
         
        >
          Change Billing Counter
        </Link>
        <Link 
          to="/organizationdeposit" 
          
        >
          Organization Deposit
        </Link>
       
      </nav>
    </header>
  );
};

export default Navbar;
