 /* Ajhar Tamboli transportNavBar.jsx 25-09-24 */


import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom'; // Import useNavigate
import { RiTeamFill } from "react-icons/ri";
import "./transportNav.css"

const TransportNavBar = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleLogOut = () => {
    console.log("hellloooooo")
    // navigate("/dispenCouter");
  };

  return (
    <nav className="transportNavBar-Navigation-bar">
      <ul>
        <div className='disPrescription-Navbttn-N-act'>
          <li><NavLink to="/transportsystem">Patient Transport </NavLink></li>
          <li><NavLink to="/ambulanceNavbar">Ambulance </NavLink></li>
          <li><NavLink to="/staffTransNavbar">Staff Transport </NavLink></li>
          <li><NavLink to="/transportRequest">Transport Request</NavLink></li>
          <li><NavLink to="/vehicleMaintenance">Vehicle Maintenance</NavLink></li>
          {/* <li><NavLink to="/">Billing and Cost</NavLink></li> */}
          <li><NavLink to="/emergencyTransportTable">Emergency Transport</NavLink></li>
          {/* <li><NavLink to="/">Transport Analytics and Reporting</NavLink></li> */}
        </div>
        <div className='transportNavBar-Activebtn-N-LogOut'>
          {/* <button className='activetransportNavBar-btn'>Active Blood Bank: Main-Blood Bank</button> */}
          <button className='transportNavBar-LogOut' onClick={handleLogOut}>
            <i className="fa-solid fa-right-from-bracket"></i>
          </button>
        </div>
      </ul>
    </nav>
  );
}

export default TransportNavBar;
