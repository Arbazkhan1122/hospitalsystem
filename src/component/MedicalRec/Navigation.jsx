// src/components/Navigation.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
    return (
        <nav className="reports-tabs-nav">
            <NavLink to="/MROutpatientList" className="reports-nav-link">MR Outpatient List</NavLink>
            <NavLink to="/MRInpatientList" className="reports-nav-link">MR Inpatient List</NavLink>
            <NavLink to="/BirthList" className="reports-nav-link">Birth List</NavLink>
            <NavLink to="/DeathList" className="reports-nav-link">Death List</NavLink>
            <NavLink to="/MedicalRecordReport" className="reports-nav-link">Reports</NavLink>
           
            <NavLink to="/EmergencyPatientList" className="reports-nav-link">Emergency Patient List</NavLink>
          
        </nav>


    );
}

export default Navigation;