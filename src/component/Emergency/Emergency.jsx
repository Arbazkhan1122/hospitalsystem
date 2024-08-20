import React, { useState } from 'react';
import './Emergency.css';
import { FaHome } from 'react-icons/fa';
import Dashboard from '../Emergency/EmergencyDashboard';
import PatientList from '../Emergency/Patient';
import TriagedPatients from '../Emergency/TriagedPatients';
import FinalizedPatients from '../Emergency/FinalizedPatients';
import WardOccupancy from '../Emergency/BedInfo';

const NavBar = () => {
    const [currentView, setCurrentView] = useState('dashboard');

    const handleViewChange = (view) => {
        setCurrentView(view);
    };

    return (
        <div>
            <NavMenu currentView={currentView} onClick={handleViewChange} />
            {currentView === 'dashboard' && <Dashboard />}
            {currentView === 'newPatients' && <PatientList />}
            {currentView === 'triagedPatients' && <TriagedPatients />}
            {currentView === 'finalizedPatients' && <FinalizedPatients />}
            {currentView === 'bedInfo' && <WardOccupancy />}
        </div>
    );
};

const NavMenu = ({ currentView, onClick }) => {
    return (
        <nav className="nav-menu">
            <a 
                href="#" 
                className={`home-icon ${currentView === 'dashboard' ? 'active' : ''}`} 
                onClick={() => onClick('dashboard')}
            >
                <FaHome />
            </a>
            <a 
                href="#" 
                className={`nav-item ${currentView === 'newPatients' ? 'active' : ''}`} 
                onClick={() => onClick('newPatients')}
            >
                New Patients
            </a>
            <a 
                href="#" 
                className={`nav-item ${currentView === 'triagedPatients' ? 'active' : ''}`} 
                onClick={() => onClick('triagedPatients')}
            >
                Triaged Patients
            </a>
            <a 
                href="#" 
                className={`nav-item ${currentView === 'finalizedPatients' ? 'active' : ''}`} 
                onClick={() => onClick('finalizedPatients')}
            >
                Finalized Patients
            </a>
            <a 
                href="#" 
                className={`nav-item ${currentView === 'bedInfo' ? 'active' : ''}`} 
                onClick={() => onClick('bedInfo')}
            >
                Bed Information
            </a>
        </nav>
    );
};

export default NavBar;
