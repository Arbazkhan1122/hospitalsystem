/* Ajhar Tamboli radiologyNav.css 19-09-24 */

import React from "react";
import { NavLink } from "react-router-dom";
import { RiTeamFill } from "react-icons/ri";
import "./RadiologyNavBar.css";
// import './hospitalNav.css';

const RadiologyNavBar = () => {
  return (
    <nav className="radiologyNav-bar">
      <ul>
        <li>
          <NavLink to="/rDLListRequest">List Requests</NavLink>
        </li>
        <li>
          <NavLink to="/rDLListReports">List Reports</NavLink>
        </li>
        <li>
          <NavLink to="/rDLEditDoctors">Edit Doctors</NavLink>
        </li>
        <li>
          <NavLink to="/rDOpdbilling">OPD Billing</NavLink>
        </li>
        {/* <li><NavLink to="/rDLWardBilling">Ward Billing</NavLink></li> */}
      </ul>
    </nav>
  );
};

export default RadiologyNavBar;
