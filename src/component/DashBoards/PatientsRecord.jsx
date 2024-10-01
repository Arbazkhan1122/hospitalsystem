import React, { useState, useRef, useEffect } from "react";
import ReactToPrint from "react-to-print";
import "./PatientsRecords.css";
import PatientDashboard from "./PatientDashboard";
import { startResizing } from "../TableHeadingResizing/resizableColumns";
import { API_BASE_URL } from "../api/api";

const PatientRecord = () => {
  const [columnWidths, setColumnWidths] = useState({});
  const tableRef = useRef(null);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [showPatientRecordAction, setShowPatientRecordAction] = useState(false);
  const [filterFavourites, setFilterFavourites] = useState(false);
  const [filterPending, setFilterPending] = useState(false);
  const [isPatientOpen, setIsPatientOPEN] = useState(false);
  const componentRef = useRef();
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/admissions/fetch`);
        const data = await response.json();
        console.log(data);
        
        setPatients(data);
      } catch (error) {
        console.error('Error fetching patient data:', error);
      }
    };

    fetchPatients();
  }, []);

  // Filtered patients based on favourite and pending filters
  const filteredPatients = patients
    .filter((patient) => (filterFavourites ? patient.isFavourite : true))
    .filter((patient) => (filterPending ? patient.isPending : true));

  const handlePendingListClick = () => {
    setFilterPending(!filterPending);
    setFilterFavourites(false); // Reset favourites filter if needed
  };

  const handleFavouritesClick = () => {
    setFilterFavourites(!filterFavourites);
    setFilterPending(false); // Reset pending filter if needed
  };

  const handlePatientClick = (patient) => {
    setIsPatientOPEN(!isPatientOpen)
    setSelectedPatient(patient); // Set the selected patient to open the dashboard
  };

  if (isPatientOpen) {
    return (
      <PatientDashboard
        setIsPatientOPEN={setIsPatientOPEN}
        patient={selectedPatient}
      />
    );
  }
  return (
    <div className="patient-record">
      <div className="patient-record-actions">
        {/* <div className="patient-record-actions-subdiv">
          <button
            className="patient-record-favorites"
            onClick={handleFavouritesClick}
          >
            ★ My Favorites
          </button>
          <button
            className="patient-record-pending"
            onClick={handlePendingListClick}
          >
            Pending List
          </button>
        </div> */}
       
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
        <div className="patient-record-sub-div">
          <input
            className="patient-record-select"
            type="text"
            placeholder="Search"
          />
          <button className="patient-record-button">🔍</button>
        </div>
        <div className="patient-record-department-filter">
          <label>Department Filter :</label>
          <select className="patient-record-select">
            <option>ALL</option>
          </select>
        </div>
        <div>
          <span className="patient-record-results">
            Showing {filteredPatients.length} / {patients.length} results
          </span>
          <ReactToPrint
            trigger={() => (
              <button className="patient-record-print">Print</button>
            )}
            content={() => componentRef.current}
          />
        </div>
      </div>

      {/* The content to be printed */}
      <div ref={componentRef} className="table-container">
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
                "Actions",
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
              <td>{patient.patientDTO.hospitalNo}</td>
              <td>{`${patient.patientDTO.firstName} ${patient.patientDTO.lastName}`}</td>
              <td>{ patient.patientDTO.age}/{patient.patientDTO.gender}</td>
              <td>{patient.admissionStatus}</td>
              <td>{patient.admissionDate}</td>
              <td>{patient?.manageBedDTO?.bedNumber}</td>
              <td>{patient?.wardDepartmentDTO?.wardName}</td>
              <td>{patient?.admittedDoctorDTO?.firstName}</td>
              <td>
                <button className='in-patient-button' onClick={() => handlePatientClick(patient)}>👤</button>
                <button className='in-patient-button' >🔔</button>
                <button className='in-patient-button' >🖼</button>
                <button className='in-patient-button' onClick={() => handleOrdersClick(patient)}>📄</button>
                <button className='in-patient-button' >♥</button>
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

      {/* {showPatientRecordAction && (
        <div className="patient-record-action-modal">
          <PatientDashboard patient={selectedPatient} />
          <button onClick={handleClosePatientRecordAction}>Close</button>
        </div>
      )} */}
    </div>
  );
};

export default PatientRecord;
