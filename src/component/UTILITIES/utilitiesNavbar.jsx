// /* // neha-utilities-navbar-19-9-24*/
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './utilitiesmain.css';

const UtilitiesNavbar = ({ handleNavigation }) => {
  const location = useLocation(); 
  return (
    <header className="utlt-header">
      <nav className="utlt-nav-links">
        <Link 
          to="/" 
          className={`utlt-header-button ${location.pathname === '/' ? 'active' : ''}`}
        >
          Scheme Refund List
        </Link>
        <Link 
          to="/Change_Visitscheme" 
          className={`utlt-header-button ${location.pathname === '/Change_Visitscheme' ? 'active' : ''}`}
        >
          Change Visit Scheme
        </Link>
        <Link 
          to="/CounterInfo" 
          className={`utlt-header-button ${location.pathname === '/CounterInfo' ? 'active' : ''}`}
        >
          Change Billing Counter
        </Link>
        <Link 
          to="/OrganizationDeposit" 
          className={`utlt-header-button ${location.pathname === '/OrganizationDeposit' ? 'active' : ''}`}
        >
          Organization Deposit
        </Link>
      </nav>
    </header>
  );
};

export default UtilitiesNavbar;
