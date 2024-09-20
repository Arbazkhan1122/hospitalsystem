import React, { useRef, useState } from 'react';
import './Opd.css';
import OpdRecordApp from './PatientDashboard';
import OpdRecordMyFavourites from '../DashBoards/OpdRecordMyFavourite'; 
import OpdRecordFollowUpList from '../DashBoards/OpdRecordFollowUpList';
import { startResizing } from '../TableHeadingResizing/resizableColumns';

const OpdList = () => {
  const [columnWidths, setColumnWidths] = useState({});
  const tableRef = useRef(null);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [view, setView] = useState('patients'); // New state to manage view

  const patients = [
    // Your patient data here
  ];

  const handlePatientClick = (patient) => {
    setSelectedPatient(patient);
  };

  const handleFavouritesClick = () => {
    setView('favourites');
  };

  const handleFollowUpClick = () => {
    setView('followUp');
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

  return (
    <div className="opd-patient-list">
      <div className="opd-top-buttons">
        <button className="opd-favorites" onClick={handleFavouritesClick}>★ My Favorites</button>
        <button className="opd-follow-up" onClick={handleFollowUpClick}>Follow Up List</button>
      </div>

      {selectedPatient ? (
        <OpdRecordApp patient={selectedPatient} />
      ) : (
        <>
        {view === 'patients' && (
          <>
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

          
            <table className="opd-results-table" ref={tableRef}>
              <thead>
                <tr>
                  {[
                    "Hospital No.",
                    "Name",
                    "Age/Sex",
                    "VisitType",
                    "Performer Name",
                    "Actions"
                  ].map((header, index) => (
                    <th
                      key={index}
                      style={{ width: columnWidths[index] }}
                      className="resizable-th"
                    >
                      <div className="header-content">
                        <span>{header}</span>
                        <div
                          className="resizer"
                          onMouseDown={startResizing(
                            tableRef,
                            setColumnWidths
                          )(index)}
                        ></div>
                      </div>
                    </th>
                  ))}
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
            </>
          )}

          {view === 'favourites' && <OpdRecordMyFavourites />}

          {view === 'followUp' && <OpdRecordFollowUpList />}
        </>
      )}
    </div>
  );
};

export default OpdList;
