import React from 'react';
import { NavLink } from 'react-router-dom';
import { RiTeamFill } from "react-icons/ri";
import "../DispensaryPage/dispensaryNav.css"
const DispensaryNavBar = () => {
  return (
    <nav className="dispensary-Navigation-bar">
      <ul>
        <div className='disPrescription-Navbttn-N-act'>
        <li><NavLink to="disPrescription">Prescription</NavLink></li>
        <li><NavLink to="/dispenSales">Sale</NavLink></li>
        <li><NavLink to="/salesStockDetails">Stock</NavLink></li>
        <li><NavLink to="/dispenCouter">Counter</NavLink></li>
        <li><NavLink to="/dispenReportList"> Reports</NavLink></li>
        <li><NavLink to="/dispenPatientConsump">Patient Consumption?</NavLink></li>
        <li><NavLink to="/dispenPatientConsumption">Patient Consumption</NavLink></li>
        </div>
        <div className='dispensary-Activebtn-N-LogOut'>
        <button className='activeDispensary-btn'>Active Dispensary:Main-Dispensary</button>
        <button className='dispensary-LogOut'><i className="fa-solid fa-right-from-bracket"></i>
        </button>
        </div>
      </ul>
    </nav>
  );
}

export default DispensaryNavBar;
