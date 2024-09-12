import React, { useState } from 'react';
import './Opd.css';
import OpdRecordApp from './PatientDashboard';
import OpdRecordMyFavourites from '../DashBoards/OpdRecordMyFavourite'; 
import OpdRecordFollowUpList from '../DashBoards/OpdRecordFollowUpList';

const OpdList = () => {
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [showFavourites, setShowFavourites] = useState(false);
  const [showFollowUp, setShowFollowUp] = useState(false);

  const patients = [
    // Your patient data here
  ];

  const handlePatientClick = (patient) => {
    setSelectedPatient(patient);
  };

  const handleFavouritesClick = () => {
    setShowFavourites(true);
    setShowFollowUp(false);
  };

  const handleFollowUpClick = () => {
    setShowFollowUp(true);
    setShowFavourites(false);
  };

  const printTable = () => {
    const printWindow = window.open('', '', 'height=600,width=800');
    printWindow.document.write('<html><head><title>Print</title>');
    printWindow.document.write('<style>table { width: 100%; border-collapse: collapse; } th, td { border: 1px solid black; padding: 8px; text-align: left; } th { background-color: #f2f2f2; }</style>');
    printWindow.document.write('</head><body>');
    printWindow.document.write(document.querySelector('.patient-list').innerHTML);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  };

  if (selectedPatient) {
    return <OpdRecordApp patient={selectedPatient} />;
  }

  if (showFavourites) {
    return <OpdRecordMyFavourites />;
  }

  if (showFollowUp) {
    return <OpdRecordFollowUpList />;
  }

  return (
    <div className="opd-patient-list">
      <div className="opd-top-buttons">
        <button className="opd-favorites" onClick={handleFavouritesClick}>★ My Favorites</button>
        <button className="opd-follow-up" onClick={handleFollowUpClick}>Follow Up List</button>
      </div>

      <div className="opd-filters">
        <select defaultValue="This Month">
          <option>Today</option>
          <option>Last Week</option>
          <option>This Month</option>
          <option>Custom</option>
        </select>
        <div className="opd-search-bar">
          <input type="text" placeholder="Search" />
          <button>🔍</button>
        </div>
        <span className="opd-results">Showing 32 / 32 results</span>
        <button className="opd-print" onClick={printTable}>Print</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Hospital No.</th>
            <th>Name</th>
            <th>Age/Sex</th>
            <th>VisitType</th>
            <th>Performer Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient, index) => (
            <tr key={index}>
              <td>{patient.hospitalNo}</td>
              <td>{patient.name}</td>
              <td>{patient.ageSex}</td>
              <td>{patient.visitType}</td>
              <td>{patient.performerName}</td>
              <td>
                <button onClick={() => handlePatientClick(patient)}>👤</button>
                <button>📄</button>
                <button>♡</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="paginat">
        <span>0 to 0 of 0</span>
        <button>First</button>
        <button>Previous</button>
        <span>Page 0 of 0</span>
        <button>Next</button>
        <button>Last</button>
      </div>
    </div>
  );
};

export default OpdList;
