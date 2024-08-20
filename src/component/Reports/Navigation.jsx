// src/components/Navigation.js
import React from 'react';
import { NavLink,Route,Routes } from 'react-router-dom';
import './Navigation.css';
import Admission from '../Reports/Admission';
import BillingReports from '../Reports/BillingReports';
import AppointmentReport from '../Reports/AppointmentReport';
import RadiologyReport from '../Reports/RadiologyReports';
import LabReport from '../Reports/LabReport';
import DoctorReport from '../Reports/DoctorsReport';
import PatientReport from '../Reports/PatientReport';
import PoliceCase from '../Reports/PoliceCase';

function Navigation() {
    return (
        <>
        <nav className="reports-tabs-nav">
            <NavLink to="/Admission" className="reports-nav-link">Admission</NavLink>
            <NavLink to="/BillingReports" className="reports-nav-link">Billing Reports</NavLink>
            <NavLink to="/AppointmentReport" className="reports-nav-link">Appointment</NavLink>
            <NavLink to="/RadiologyReport" className="reports-nav-link">Radiology</NavLink>
            <NavLink to="/LabReport" className="reports-nav-link">Lab</NavLink>
            <NavLink to="/DoctorReport" className="reports-nav-link">Doctors</NavLink>
            <NavLink to="/PatientReport" className="reports-nav-link">Patient</NavLink>
            <NavLink to="/PoliceCase" className="reports-nav-link">Police Case</NavLink>
        </nav>


      
      
      
</>
    );
}

export default Navigation;