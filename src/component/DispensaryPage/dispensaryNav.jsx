import React from 'react';
import { NavLink } from 'react-router-dom';
import './dispensaryNav.css';

const DispensaryNavBar = () => {
  return (
    <nav className="dispensary-navigation-bar">
      <ul>
        <li>
          <NavLink to="/disPrescription" className="dispensary-nav-link">
            Prescription
          </NavLink>
        </li>
        <li>
          <NavLink to="/dispenSales" className="dispensary-nav-link">
            Sale
          </NavLink>
        </li>
        <li>
          <NavLink to="/salesStockDetails" className="dispensary-nav-link">
            Stock
          </NavLink>
        </li>
        <li>
          <NavLink to="/dispenCouter" className="dispensary-nav-link">
            Counter
          </NavLink>
        </li>
        <li>
          <NavLink to="/dispenReportList" className="dispensary-nav-link">
            Reports
          </NavLink>
        </li>
        <li>
          <NavLink to="/dispenPatientConsumption" className="dispensary-nav-link">
            Patient Consumption
          </NavLink>
        </li>
        {/* <li>
          <NavLink to="/active-dispensary" className="dispensary-nav-link">
            Active Dispensary
          </NavLink>
        </li> */}
      </ul>
      <div className="dispensary-active-btn">
        Active Dispensary: Main Dispensary
      </div>
    </nav>
  );
};

export default DispensaryNavBar;