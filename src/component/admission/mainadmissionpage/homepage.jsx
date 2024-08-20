import React, { useState } from 'react';
import './homePage.css';
import SearchPatient from '../adm-list/admissionList';

const HomePage = () => {
  const [currentView, setCurrentView] = useState('home');

  const tableData = [
    { wardName: 'Brain Ward', occupied: 0, vacant: 1, reserved: 0, total: 1 },
    { wardName: 'Female Ward', occupied: 4, vacant: 2, reserved: 0, total: 6 },
    { wardName: 'ICU', occupied: 1, vacant: 5, reserved: 0, total: 6 },
    { wardName: 'Male Ward', occupied: 5, vacant: 0, reserved: 0, total: 5 },
    { wardName: 'MATERNITY WARD', occupied: 3, vacant: 5, reserved: 0, total: 8 },
    { wardName: 'Private Ward', occupied: 1, vacant: 4, reserved: 0, total: 5 },
    { wardName: 'Total', occupied: 14, vacant: 17, reserved: 0, total: 31 },
  ];

  const handleNavigation = (view) => {
    setCurrentView(view);
  };

  return (
    <div className="homepage">
      <header className="header">
        <div className="logo">
          <a href="/">🏠</a>
        </div>
        <nav className="nav-links">
          <a 
            href="#" 
            className={currentView === 'SearchPatient' ? 'active' : ''} 
            onClick={() => handleNavigation('SearchPatient')}
          >
            Search Patient
          </a>
          <a 
            href="#" 
            className={currentView === 'AdmittedPatients' ? 'active' : ''} 
            onClick={() => handleNavigation('AdmittedPatients')}
          >
            Admitted Patients
          </a>
          <a 
            href="#" 
            className={currentView === 'DischargedPatients' ? 'active' : ''} 
            onClick={() => handleNavigation('DischargedPatients')}
          >
            Discharged Patients
          </a>
          <a 
            href="#" 
            className={currentView === 'ExchangeBed' ? 'active' : ''} 
            onClick={() => handleNavigation('ExchangeBed')}
          >
            Exchange Bed
          </a>
          <a 
            href="#" 
            className={currentView === 'CancelBedReservation' ? 'active' : ''} 
            onClick={() => handleNavigation('CancelBedReservation')}
          >
            Cancel Bed Reservation
          </a>
        </nav>

        <div className="content">
          {currentView === 'home' && <div>Home Page Content</div>}
          {currentView === 'SearchPatient' && <SearchPatient />}
          {/* Add other components for different views here */}
        </div>
      </header>

      <div className="dashboard-cards">
        <div className="dashboard-card" style={{ backgroundColor: '#007bff' }}>
          <div className="card-content">
            <span className="card-icon">🛏️</span>
            <div className="card-text">
              <h3>Total No. of Beds</h3>
              <h2>31</h2>
            </div>
          </div>
        </div>
        <div className="dashboard-card" style={{ backgroundColor: '#20c997' }}>
          <div className="card-content">
            <span className="card-icon">🛏️</span>
            <div className="card-text">
              <h3>Available No. of Beds</h3>
              <h2>17</h2>
            </div>
          </div>
        </div>
        <div className="dashboard-card" style={{ backgroundColor: '#fd7e14' }}>
          <div className="card-content">
            <span className="card-icon">🛏️</span>
            <div className="card-text">
              <h3>Occupied No. of Beds</h3>
              <h2>14</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="bed-feature-table">
        <div className="table-header">
          <h2>Bed Feature Details</h2>
          <div className="table-actions">
            <button>Print</button>
            <button>Export</button>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>Ward Name</th>
              <th>Occupied</th>
              <th>Vacant</th>
              <th>Reserved</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index}>
                <td>{row.wardName}</td>
                <td>{row.occupied}</td>
                <td>{row.vacant}</td>
                <td>{row.reserved}</td>
                <td>{row.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HomePage;
