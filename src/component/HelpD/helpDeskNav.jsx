import React from 'react';
import { NavLink } from 'react-router-dom';
import { RiTeamFill } from "react-icons/ri";
import "../HelpD/helpDeskNav.css"

const HelpDeskNav = () => {
  return (
    <nav className="helpDeskNav-bar">
      <ul>
        <li><NavLink to="/hHEmpInformation">Employee Information</NavLink></li>
        <li><NavLink to="/hHBedInformation">Bed Information</NavLink></li>
        <li><NavLink to="/hHWardInformation">Ward Information</NavLink></li>
        <li><NavLink to="/hHQueueInformation">Queue Information</NavLink></li>
        </ul>
    </nav>
  );
}

export default HelpDeskNav;
