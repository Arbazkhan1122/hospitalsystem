// src/components/Navigation.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
    return (
        <nav className="nursing-tabs-nav">
            <NavLink to="/Outpatient" className="nursing-nav-link">Out Patient</NavLink>
            <NavLink to="/Inpatient" className="nursing-nav-link">In Patient</NavLink>
            <NavLink to="/Nephrology" className="nursing-nav-link">Nephrology</NavLink>
            <NavLink to="/RequisitionList" className="nursing-nav-link">Requisition List</NavLink>
            <NavLink to="/DischargeSummary" className="nursing-nav-link">Discharge Summary</NavLink>
        </nav>


    );
}

export default Navigation;