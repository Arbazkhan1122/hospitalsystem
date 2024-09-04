import React, { useState, useRef } from 'react';
import ReactToPrint from 'react-to-print';
import PatientRecordAction from './PatientRecordAction'; 
import './PatientsRecords.css';

const PatientRecord = () => {
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
      <div className="date-range">
        <div>
          <label>From:</label>
          <input type="date" value="2024-08-11" />
        </div>
        <div>
          <label>To:</label>
          <input type="date" value="2024-08-18" />
        </div>
        <button className="star">☆</button>
        <button className="reset">-</button>
        <button className="ok">OK</button>
      </div>

      <div className="actions">
        <button className="favorites" onClick={handleFavouritesClick}>★ My Favorites</button>
        <button className="pending" onClick={handlePendingListClick}>Pending List</button>
        <div className="department-filter">
          <label>Department Filter :</label>
          <select>
            <option>ALL</option>
          </select>
        </div>
      </div>

      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <button>🔍</button>
        <span className="results">Showing {filteredPatients.length} / {patients.length} results</span>
        <ReactToPrint
          trigger={() => <button className="print">Print</button>}
          content={() => componentRef.current}
        />
      </div>

      {/* The content to be printed */}
      <div ref={componentRef}>
        <table>
          <thead>
            <tr>
              <th>Hospital No.</th>
              <th>Name</th>
              <th>Age/Sex</th>
              <th>Admission Status</th>
              <th>Admitted On</th>
              <th>Ward-Bed</th>
              <th>Dept</th>
              <th>Provider Name</th>
              <th>Actions</th>
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
                  <button onClick={() => handleViewPatientClick(patient.id)}>👤</button>
                  <button>🔔</button>
                  <button>🖼</button>
                  <button>📄</button>
                  <button>♥</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pagination">
        <span>1 to {filteredPatients.length} of {filteredPatients.length}</span>
        <button>First</button>
        <button>Previous</button>
        <span>Page 1 of 1</span>
        <button>Next</button>
        <button>Last</button>
      </div>

      {showPatientRecordAction && (
        <div className="patient-record-action-modal">
          <PatientRecordAction patient={selectedPatient} />
          <button onClick={handleClosePatientRecordAction}>Close</button>
        </div>
      )}
    </div>
  );
};

export default PatientRecord;
