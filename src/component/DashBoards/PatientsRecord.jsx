import React, { useState, useRef } from 'react';
import ReactToPrint from 'react-to-print';
import PatientRecordAction from './PatientRecordAction'; 
import './PatientsRecords.css';
import PatientDashboard from './PatientDashboard';
import { startResizing } from '../TableHeadingResizing/resizableColumns';

const PatientRecord = () => {
  const [columnWidths,setColumnWidths] = useState({});
  const tableRef = useRef(null);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [showPatientRecordAction, setShowPatientRecordAction] = useState(false);
  const [filterFavourites, setFilterFavourites] = useState(false);
  const [filterPending, setFilterPending] = useState(false);
  const componentRef = useRef();

  // Sample data with favourite and pending status
  const patients = [
    {
      id: '2406003702',
      name: 'Philip Juma',
      ageSex: '34 Y/M',
      hospitalNo: '2406003702',
      wardBed: 'Male Ward-001',
      providerName: 'Mr. COLLINS KIPKEMEI',
      admissionStatus: 'discharged',
      admittedOn: 'June 10th 2024, 12:57:00 pm',
      dept: 'Medicine',
      isFavourite: true,
      isPending: false,
    },
    // Additional patient records with isFavourite and isPending properties...
  ];

  // Filtered patients based on favourite and pending filters
  const filteredPatients = patients
    .filter(patient => (filterFavourites ? patient.isFavourite : true))
    .filter(patient => (filterPending ? patient.isPending : true));

  const handlePendingListClick = () => {
    setFilterPending(!filterPending);
    setFilterFavourites(false); // Reset favourites filter if needed
  };

  const handleFavouritesClick = () => {
    setFilterFavourites(!filterFavourites);
    setFilterPending(false); // Reset pending filter if needed
  };

  const handleViewPatientClick = (patientId) => {
    const patient = patients.find(p => p.id === patientId);
    setSelectedPatient(patient);
    setShowPatientRecordAction(true);
  };

  const handleClosePatientRecordAction = () => {
    setShowPatientRecordAction(false);
  };

  return (
    <div className="patient-record">
      <div className="patient-record-actions">
        <div className='patient-record-actions-subdiv'>
        <button className="patient-record-favorites" onClick={handleFavouritesClick}>★ My Favorites</button>
        <button className="patient-record-pending" onClick={handlePendingListClick}>Pending List</button>
        </div>
        <div className="patient-record-department-filter">
          <label>Department Filter :</label>
          <select className='patient-record-select'>
            <option>ALL</option>
          </select>
        </div>
      </div>
      <div className="patient-record-date-range">
        <div>
          <label>From:</label>
          <input type="date" value="2024-08-11" />
          <label>To:</label>
          <input type="date" value="2024-08-18" />
        </div>
        <div>
        <button className="patient-record-star">☆</button>
        <button className="patient-record-reset">-</button>
        <button className="patient-record-ok">OK</button>
        </div>
      </div>

      

      <div className="patient-record-search-bar">
        <div className='patient-record-sub-div'>
        <input className='patient-record-select' type="text" placeholder="Search" />
        <button>🔍</button>
        </div>
        <div>
        <span className="patient-record-results">Showing {filteredPatients.length} / {patients.length} results</span>
        <ReactToPrint
          trigger={() => <button className="patient-record-print">Print</button>}
          content={() => componentRef.current}
        />
        </div>
      </div>

      {/* The content to be printed */}
      <div ref={componentRef} className='table-container'>
       <table className="patientList-table" ref={tableRef}>
          <thead>
            <tr>
              {[
               "Hospital No.",
  "Name",
  "Age/Sex",
  "Admission Status",
  "Admitted On",
  "Ward-Bed",
  "Dept",
  "Provider Name",
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
            {filteredPatients.map((patient) => (
              <tr key={patient.id}>
                <td>{patient.hospitalNo}</td>
                <td>{patient.name}</td>
                <td>{patient.ageSex}</td>
                <td>{patient.admissionStatus}</td>
                <td>{patient.admittedOn}</td>
                <td>{patient.wardBed}</td>
                <td>{patient.dept}</td>
                <td>{patient.providerName}</td>
                <td>
                  <button className="patient-record-action" onClick={() => handleViewPatientClick(patient.id)}>👤</button>
                  <button className="patient-record-action" >🔔</button>
                  <button className="patient-record-action" >🖼</button>
                  <button className="patient-record-action" >📄</button>
                  <button className="patient-record-action" >♥</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* <div className="pagination">
        <span>1 to {filteredPatients.length} of {filteredPatients.length}</span>
        <button>First</button>
        <button>Previous</button>
        <span>Page 1 of 1</span>
        <button>Next</button>
        <button>Last</button>
      </div> */}

      {showPatientRecordAction && (
        <div className="patient-record-action-modal">
          <PatientDashboard patient={selectedPatient} />
          <button onClick={handleClosePatientRecordAction}>Close</button>
        </div>
      )}
    </div>
  );
};

export default PatientRecord;
