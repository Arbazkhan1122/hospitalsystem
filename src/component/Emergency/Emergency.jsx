 /* Dhanashree_NavBar_19/09 */

import React, { useState } from 'react';
import './Emergency.css';
import { FaHome } from 'react-icons/fa';
import { NavLink, Routes, Route } from 'react-router-dom'; 
import Dashboard from '../Emergency/EmergencyDashboard';
import PatientList from '../Emergency/Patient';
import TriagedPatients from '../Emergency/TriagedPatients';
import FinalizedPatients from '../Emergency/FinalizedPatients';
import WardOccupancy from '../Emergency/BedInfo';

const NavBar = () => {
    return (
        <div>
            <NavMenu />
            <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/newPatients" element={<PatientList />} />
                <Route path="/triagedPatients" element={<TriagedPatients />} />
                <Route path="/finalizedPatients" element={<FinalizedPatients />} />
                <Route path="/bedInfo" element={<WardOccupancy />} />
            </Routes>
        </div>
    );
};

const NavMenu = () => {
    return (
        <nav className="EmergencyNavBar-nav-menu">
            <NavLink 
                to="/dashboard" 
                className="EmergencyNavBar-button"
                activeClassName="EmergencyNavBar-active"
            >
                <FaHome />
            </NavLink>
            <NavLink 
                to="/newPatients" 
                className="EmergencyNavBar-button"
                activeClassName="EmergencyNavBar-active"
            >
                New Patients
            </NavLink>
            <NavLink 
                to="/triagedPatients" 
                className="EmergencyNavBar-button"
                activeClassName="EmergencyNavBar-active"
            >
                Triaged Patients
            </NavLink>
            <NavLink 
                to="/finalizedPatients" 
                className="EmergencyNavBar-button"
                activeClassName="EmergencyNavBar-active"
            >
                Finalized Patients
            </NavLink>
            <NavLink 
                to="/bedInfo" 
                className="EmergencyNavBar-button"
                activeClassName="EmergencyNavBar-active"
            >
                Bed Information
            </NavLink>
        </nav>
    );
};

export default NavBar;

 /* Dhanashree_NavBar_19/09 */
