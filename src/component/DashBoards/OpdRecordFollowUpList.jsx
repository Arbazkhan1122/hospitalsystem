import React, { useState } from 'react';
import './OpdRecordFollowUpList.css'; // Ensure correct styling
import OpdRecordApp from '../DashBoards/OpdRecordAction';

const OpdRecordFollowUpList = () => {
  const [selectedPatient, setSelectedPatient] = useState(null);

  const patients = [
    { hospitalNo: "2408003819", name: "S Suresh", ageSex: "45 Y/M", visitType: "OUTPATIENT", admittedOn: "today 05:50 AM", performerName: "Mrs. BRENDA MWANIA WANJIRU" },
  ];

  const handlePatientClick = (patient) => {
    setSelectedPatient(patient);
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

  return (
    <div className="patient-list">
      <div className="top-buttons">
        <button className="favorites">★ My Favorites</button>
        <button className="follow-up">Follow Up List</button>
      </div>

      <div className="filters">
        <select defaultValue="This Month">
          <option>This Month</option>
        </select>
        <div className="search-bar">
          <input type="text" placeholder="Search" />
          <button>🔍</button>
        </div>
        <span className="results">Showing 32 / 32 results</span>
        <button className="print" onClick={printTable}>Print</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Hospital No.</th>
            <th>Name</th>
            <th>Age/Sex</th>
            <th>VisitType</th>
            <th>Admitted On</th>
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
              <td>{patient.admittedOn}</td>
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

export default OpdRecordFollowUpList;
