<<<<<<< HEAD
<<<<<<< HEAD
import React from "react";
import { NavLink, useNavigate } from "react-router-dom"; // Import useNavigate
import { RiTeamFill } from "react-icons/ri";
import "./superUserNav.css";
=======
=======
>>>>>>> e5850bbfdb9398281441ed2e20586b5375c904eb
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom'; // Import useNavigate
import { RiTeamFill } from "react-icons/ri";
import "./superUserNav.css"
<<<<<<< HEAD
>>>>>>> e5850bbfdb9398281441ed2e20586b5375c904eb
=======
>>>>>>> e5850bbfdb9398281441ed2e20586b5375c904eb

const SuperUserNavBar = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleLogOut = () => {
<<<<<<< HEAD
<<<<<<< HEAD
    console.log("hellloooooo");
=======
    console.log("hellloooooo")
>>>>>>> e5850bbfdb9398281441ed2e20586b5375c904eb
=======
    console.log("hellloooooo")
>>>>>>> e5850bbfdb9398281441ed2e20586b5375c904eb
    // navigate("/dispenCouter");
  };

  return (
    <nav className="superUserNav-Navigation-bar">
      <ul>
<<<<<<< HEAD
<<<<<<< HEAD
        <div className="superUserNav-Navbttn-N-act">
          <li>
            <NavLink to="/revenuemgnt">Revenue Management</NavLink>
          </li>
          <li>
            <NavLink to="/sUPermission">Permission</NavLink>
          </li>
          <li>
            <NavLink to="/billingNavbar">Billing Discount Approval </NavLink>
          </li>
          <li>
            <NavLink to="/homePage">Message Broadcast</NavLink>
          </li>
          <li>
            <NavLink to="/facilityService">Facility Services</NavLink>
          </li>
          <li>
            <NavLink to="/administration">Administration</NavLink>
          </li>
          <li>
            <NavLink to="/vendorNavba">Vendor and Supply Management</NavLink>
          </li>
          <li>
            <NavLink to="/controlAllDeptRoute">Control All Department</NavLink>
          </li>
          {/* <li>
            <NavLink
              to="/patientmgnt"

            // Note: activeClassName is used for react-router-dom v5. For v6, consider using 'isActive'
            >
              Patient Management
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/patientmgnt"

              activeClassName="active" // Note: activeClassName is used for react-router-dom v5. For v6, consider using 'isActive'
            >
              Patient Management
            </NavLink>

          </li>
          <li>
            <NavLink to="/" >User Account Management</NavLink>

          </li>

          <li>
            <NavLink to="/rolemgnt" >Role Management</NavLink>
          </li> */}
        </div>
        <div className="superUserNav-Navbttn-N-act">
         
          <li>
            <NavLink to="/Superusermodulemain/*">User Account Management</NavLink>
          </li>

          <li>
            <NavLink to="/rolemgnt">Role Management</NavLink>
          </li>
        </div>
        <div className="superUserNav-Activebtn-N-LogOut">
          {/* <button className='activesuperUserNav-btn'>Active Super User: Main-Super User</button> */}
          <button className="superUserNav-LogOut" onClick={handleLogOut}>
=======
=======
>>>>>>> e5850bbfdb9398281441ed2e20586b5375c904eb
        <div className='superUserNav-Navbttn-N-act'>
          <li><NavLink to="/revenuemgnt">Revenue Management</NavLink></li>
          <li><NavLink to="/sUPermission">Permission</NavLink></li>
          <li><NavLink to="/billingNavbar">Billing Discount Approval </NavLink></li>
          <li><NavLink to="/homePage">Message Broadcast</NavLink></li>
          <li><NavLink to="/facilityService">Facility Services</NavLink></li>
          <li><NavLink to="/administration">Administration</NavLink></li>
          <li><NavLink to="/vendorNavba">Vendor and Supply Management</NavLink></li>
          <li><NavLink to="/controlAllDeptRoute">Control All Department</NavLink></li>
        </div>
        <div className='superUserNav-Activebtn-N-LogOut'>
          {/* <button className='activesuperUserNav-btn'>Active Super User: Main-Super User</button> */}
          <button className='superUserNav-LogOut' onClick={handleLogOut}>
<<<<<<< HEAD
>>>>>>> e5850bbfdb9398281441ed2e20586b5375c904eb
=======
>>>>>>> e5850bbfdb9398281441ed2e20586b5375c904eb
            <i className="fa-solid fa-right-from-bracket"></i>
          </button>
        </div>
      </ul>
    </nav>
  );
<<<<<<< HEAD
<<<<<<< HEAD
};
=======
}
>>>>>>> e5850bbfdb9398281441ed2e20586b5375c904eb
=======
}
>>>>>>> e5850bbfdb9398281441ed2e20586b5375c904eb

export default SuperUserNavBar;
