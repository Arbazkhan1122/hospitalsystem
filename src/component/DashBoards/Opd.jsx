import React, { useRef, useState, useEffect } from 'react';
import './Opd.css';
import PatientDashboard from './PatientDashboard';
import OpdRecordMyFavourites from '../DashBoards/OpdRecordMyFavourite'; 
import OpdRecordFollowUpList from '../DashBoards/OpdRecordFollowUpList';
import { startResizing } from '../TableHeadingResizing/resizableColumns';
import { API_BASE_URL } from '../api/api';

const OpdList = () => {
  const [patients, setPatients] = useState([]);  // Define patients state
  const [isLoading, setIsLoading] = useState(false);  // For loading state
  const [error, setError] = useState(null);  // For error handling
  const [columnWidths, setColumnWidths] = useState({});
  const tableRef = useRef(null);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [view, setView] = useState('patients'); // New state to manage view
  const [isPatientOPEN, setIsPatientOPEN] = useState(false);  // Define isPatientOPEN state


  const handlePatientClick = (patient) => {
    setSelectedPatient(patient);
    setIsPatientOPEN(true);  // Open the patient dashboard
  };

  const handleFavouritesClick = () => {
    setView('favourites');
  };

  const handleFollowUpClick = () => {
    setView('followUp');
  };

  useEffect(() => {
   
    const fetchPatientData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${API_BASE_URL}/new-patient-visits`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        console.log(response);
        const data = await response.json();
        setPatients(data); // Store the fetched data in the state
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPatientData();
  }, []);

  console.log(patients);
  

  const printTable = () => {
    const printWindow = window.open('', '', 'height=600,width=800');
    printWindow.document.write('<html><head><title>Print</title>');
    printWindow.document.write('<style>table { width: 100%; border-collapse: collapse; } th, td { border: 1px solid black; padding: 8px; text-align: left; } th { background-color: #f2f2f2; }</style>');
    printWindow.document.write('</head><body>');
    printWindow.document.write(document.querySelector('.patientList-table').innerHTML);  // Correct class name
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  };

  return (
    <div className="opd-patient-list">
      {selectedPatient ? (
        <PatientDashboard isPatientOPEN={isPatientOPEN} setIsPatientOPEN={setIsPatientOPEN} patient={selectedPatient} />
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
                <span className="opd-results">Showing {patients.length} / {patients.length} results</span>
                <button className="opd-print" onClick={printTable}>Print</button>
              </div>

              <table className="patientList-table" ref={tableRef}>
                <thead>
                  <tr>
                    {[
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
                            onMouseDown={startResizing(tableRef, setColumnWidths)(index)}
                          ></div>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                {patients.length > 0 ? (
                patients.map((patient, index) => (
                  <tr key={index}>
                    <td>{`${patient.firstName} ${patient.lastName}`}</td>
                    <td>{patient.age}/{patient.sex}</td>
                    <td>{patient.visitType}</td>
                    <td>{`${patient?.employeeDTO?.salutation} ${patient?.employeeDTO?.firstName} ${patient?.employeeDTO?.lastName}`}</td>
                    <td>
                      <button
                        className="OutPatient-action-button"
                        onClick={() => handlePatientClick(patient)} // Open the PatientDashboard when clicked
                      >
                        👤
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="OutPatient-no-data">
                    No Rows To Show
                  </td>
                </tr>
              )}
                </tbody>
              </table>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default OpdList;
