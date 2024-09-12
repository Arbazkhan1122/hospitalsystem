import React from 'react';
import { NavLink } from 'react-router-dom';
import { RiTeamFill } from "react-icons/ri";
import "../NavBarSection/navSetting.css"
// import './hospitalNav.css';

const NavSetting = () => {
  return (
    <nav className="nav-Setting-navbar">
      <ul>
        <li><NavLink to="/labTest">Lab Test</NavLink></li>
        {/* <li><NavLink to="/navHome"><i className="fa-solid fa-house-chimney" ></i></NavLink></li> */}
        <li><NavLink to="/labTestComponent">Lab Test Components</NavLink></li>
        <li><NavLink to="/reportTemplate">Report Template</NavLink></li>
        <li><NavLink to="/defaultSignatories">Default Signatories</NavLink></li>
        <li><NavLink to="/vendorsLab">Vendors</NavLink></li>
        <li><NavLink to="/lookUps">Looks Ups</NavLink></li>
        <li><NavLink to="/labCategories">Lab Categories</NavLink></li>
        <li><NavLink to="/mapGovernmentItemxs">Map Government Items</NavLink></li>
      </ul>
    </nav>
  );
}

export default NavSetting;
