// Dhanashree_Admitted_19/09
import React, { useState, useEffect, useRef } from 'react';
import ReactToPrint from 'react-to-print';
import AdmittedEdit from './AdmittedEdit'; // Import the AdmittedEdit component
import './Admitted.css'; // Import the CSS file
import { startResizing } from '../TableHeadingResizing/resizableColumns';

const Admitted = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');
  const [patients, setPatients] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false); // State to control the edit modal
  const [selectedPatient, setSelectedPatient] = useState(null); // State to store selected patient data
  const printRef = useRef();

  const [columnWidths,setColumnWidths] = useState({});
  const tableRef=useRef(null);

  useEffect(() => {
    // Fetch data from the API
    const fetchPatients = async () => {
      try {
        const response = await fetch('http://localhost:3107/api/finalize/finalize-patient/Admitted');
        const data = await response.json();
        setPatients(data);
      } catch (error) {
        console.error('Error fetching patients:', error);
      }
    };

    fetchPatients();
  }, []);

  const handleEdit = (patient) => {
    setSelectedPatient(patient); // Set the selected patient data
    setShowEditModal(true); // Show the edit modal
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false); // Close the edit modal
  };

  return (
    <div className="EmergencyAdmitted-content">
      <div className="EmergencyAdmitted-search-filter">
        <div className="EmergencyAdmitted-search-bar">
          <input 
            type="text" 
            placeholder="Search" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="EmergencyAdmitted-search-input"
          />
          <button className="EmergencyAdmitted-search-icon">🔍</button>
        </div>
        <select 
          value={filter} 
          onChange={(e) => setFilter(e.target.value)}
          className="EmergencyAdmitted-filter-dropdown"
        >
          <option value="All">All</option>
          <option value="General">General</option>
          <option value="Dog Bite">Dog Bite</option>
          <option value="Snake Bite">Snake Bite</option>
          <option value="Animal Bite">Animal Bite</option>
          <option value="Emergency Labour">Emergency Labour</option>
          <option value="Medico-Legal">Medico-Legal</option>
        </select>
      </div>

      <div className="EmergencyAdmitted-results-info">
        <span>Showing {patients.length} / {patients.length} results</span>
        <ReactToPrint
          trigger={() => <button className="PatientsEmergency-print-btn">Print</button>}
          content={() => printRef.current}
        />
      </div>

      <table  ref={tableRef}>
          <thead>
            <tr>
              {[
  "Hospital Number",
  "Name",
  "Age",
  "Gender",
  "Finalized DateTime",
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
          {patients.length === 0 ? (
            <tr>
              <td colSpan="6" className="EmergencyAdmitted-no-rows">No Rows To Show</td>
            </tr>
          ) : (
            patients.map((patient, index) => (
              <tr key={index}>
                <td>{patient.hospitalNumber}</td>
                <td>{patient.name}</td>
                <td>{patient.age}</td>
                <td>{patient.gender}</td>
                <td>{patient.finalizedDateTime}</td>
                <td>
                  <button 
                    className="EmergencyAdmitted-edit-btn"
                    onClick={() => handleEdit(patient)} // Pass the patient data on edit button click
                  >
                    Edit
                  </button>
                </td>              
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* <div className="EmergencyAdmitted-pagination">
        <span>0 to 0 of 0</span>
        <button className="EmergencyAdmitted-pagination-btn">First</button>
        <button className="EmergencyAdmitted-pagination-btn">Previous</button>
        <span>Page 0 of 0</span>
        <button className="EmergencyAdmitted-pagination-btn">Next</button>
        <button className="EmergencyAdmitted-pagination-btn">Last</button>
      </div> */}

      {showEditModal && (
        <div className="EmergencyAdmitted-modal-overlay">
          <div className="EmergencyAdmitted-modal-content">
            {/* Pass selectedPatient to AdmittedEdit */}
            <AdmittedEdit onClose={handleCloseEditModal} patient={selectedPatient} />
            <button className="EmergencyAdmitted-close-btn" onClick={handleCloseEditModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Admitted;

// Dhanashree_Admitted_19/09
