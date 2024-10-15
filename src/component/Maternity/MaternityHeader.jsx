import React from "react";
import { Link, useLocation } from "react-router-dom";
import './MaternityHeader.css';

const MaternityHeader = () => {
  const location = useLocation(); // Get the current location

  return (
    <div className="maternity-header">
      <Link 
        to="/maternity-list" 
        className={`maternity-header-button ${location.pathname === '/maternity-list' ? 'active' : ''}`}
      >
        Maternity List
      </Link>
      <Link 
        to="/patient-form" 
        className={`maternity-header-button ${location.pathname === '/patient-form' ? 'active' : ''}`}
      >
        Payments
      </Link>
      <Link 
        to="/reports" 
        className={`maternity-header-button ${location.pathname.startsWith('/reports') ? 'active' : ''}`}
      >
        Reports
      </Link>
    </div>
  );
};

export default MaternityHeader;
