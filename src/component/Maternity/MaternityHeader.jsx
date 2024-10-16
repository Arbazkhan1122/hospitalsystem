import React from "react";
<<<<<<< HEAD
<<<<<<< HEAD
import { NavLink, useLocation } from "react-router-dom";
=======
import { Link, useLocation } from "react-router-dom";
>>>>>>> e5850bbfdb9398281441ed2e20586b5375c904eb
=======
import { Link, useLocation } from "react-router-dom";
>>>>>>> e5850bbfdb9398281441ed2e20586b5375c904eb
import './MaternityHeader.css';

const MaternityHeader = () => {
  const location = useLocation(); // Get the current location

  return (
    <div className="maternity-header">
<<<<<<< HEAD
<<<<<<< HEAD
      <NavLink 
=======
      <Link 
>>>>>>> e5850bbfdb9398281441ed2e20586b5375c904eb
=======
      <Link 
>>>>>>> e5850bbfdb9398281441ed2e20586b5375c904eb
        to="/maternity-list" 
        className={`maternity-header-button ${location.pathname === '/maternity-list' ? 'active' : ''}`}
      >
        Maternity List
<<<<<<< HEAD
<<<<<<< HEAD
      </NavLink>
      <NavLink 
=======
      </Link>
      <Link 
>>>>>>> e5850bbfdb9398281441ed2e20586b5375c904eb
=======
      </Link>
      <Link 
>>>>>>> e5850bbfdb9398281441ed2e20586b5375c904eb
        to="/patient-form" 
        className={`maternity-header-button ${location.pathname === '/patient-form' ? 'active' : ''}`}
      >
        Payments
<<<<<<< HEAD
<<<<<<< HEAD
      </NavLink>
      <NavLink 
=======
      </Link>
      <Link 
>>>>>>> e5850bbfdb9398281441ed2e20586b5375c904eb
=======
      </Link>
      <Link 
>>>>>>> e5850bbfdb9398281441ed2e20586b5375c904eb
        to="/reports" 
        className={`maternity-header-button ${location.pathname.startsWith('/reports') ? 'active' : ''}`}
      >
        Reports
<<<<<<< HEAD
<<<<<<< HEAD
      </NavLink>

                        <NavLink to="/AntenatalCare" className={`maternity-header-button ${location.pathname.startsWith('/reports') ? 'active' : ''}`} activeClassName="active">Antenatal Care</NavLink>
                 
                  
                        <NavLink to="/PostnatalCare" className={`maternity-header-button ${location.pathname.startsWith('/reports') ? 'active' : ''}`} activeClassName="active">Postnatal Care</NavLink>
                    
                
                        <NavLink to="/Labourmgnt" className={`maternity-header-button ${location.pathname.startsWith('/reports') ? 'active' : ''}`} activeClassName="active">Labor Room Management</NavLink>
               
                   
                        <NavLink to="/BreastfeedingSupport" className={`maternity-header-button ${location.pathname.startsWith('/reports') ? 'active' : ''}`} activeClassName="active">Breastfeeding Support</NavLink>
               
                        <NavLink to="/FamilyPlanningService" className={`maternity-header-button ${location.pathname.startsWith('/reports') ? 'active' : ''}`} activeClassName="active">Family Planning Service</NavLink>
                  
=======
      </Link>
>>>>>>> e5850bbfdb9398281441ed2e20586b5375c904eb
=======
      </Link>
>>>>>>> e5850bbfdb9398281441ed2e20586b5375c904eb
    </div>
  );
};

export default MaternityHeader;
