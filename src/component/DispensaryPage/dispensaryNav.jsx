import React from 'react';
import { NavLink } from 'react-router-dom';
import { RiTeamFill } from "react-icons/ri";
import "../DispensaryPage/dispensaryNav.css"
const DispensaryNavBar = () => {
  return (
    <nav className="dispensary-Navigation-bar">
      <ul>
        <li><NavLink to="/disPrescription">Prescription</NavLink></li>
        <li><NavLink to="/dispenSales">Sale</NavLink></li>
        <li><NavLink to="/salesStockDetails">Stock</NavLink></li>
        <li><NavLink to="/dispenCouter">Counter</NavLink></li>
        <li><NavLink to="/dispenReportList"> Reports</NavLink></li>
        <li><NavLink to="/dispenPatientConsump">Patient Consumption?</NavLink></li>
        <li><NavLink to="/dispenPatientConsumption">Patient Consumption</NavLink></li>
        <button className='activeDispensary-btn'>Active Dispensary:Main-Dispensary</button>
      </ul>
    </nav>
  );
}

export default DispensaryNavBar;
