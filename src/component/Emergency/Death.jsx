 /* Dhanashree_Death_19/09 */

import React, { useState, useEffect, useRef } from 'react';
import ReactToPrint from 'react-to-print';
import DeathEdit from './DeathEdit'; // Import the DeathEdit component
import './Death.css'; // Import the CSS file 
import { startResizing } from '../TableHeadingResizing/resizableColumns';

const Death = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');
  const [patients, setPatients] = useState([]);
  const [isEditing, setIsEditing] = useState(false); // State to control the modal visibility
  const [currentPatient, setCurrentPatient] = useState(null); // State to hold the current patient data
  const printRef = useRef();


  const [columnWidths,setColumnWidths] = useState({});
  const tableRef=useRef(null);

  useEffect(() => {
    // Fetch data from the API
    const fetchPatients = async () => {
      try {
        const response = await fetch('http://localhost:3107/api/finalize/finalize-patient/Death');
        const data = await response.json();
        setPatients(data);
      } catch (error) {
        console.error('Error fetching patients:', error);
      }
    };

    fetchPatients();
  }, []);

  const handleEdit = (patient) => {
    setCurrentPatient(patient); // Set the current patient data
    setIsEditing(true); // Open the modal
  };

  const handleClose = () => {
    setIsEditing(false); // Close the modal
  };

  return (
    <div className="EmergencyPatientsDeath-content">
      <div className="EmergencyPatientsDeath-search-filter">
        <div className="EmergencyPatientsDeath-search-bar">
          <input 
            type="text" 
            placeholder="Search" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="EmergencyPatientsDeath-search-input"
          />
          <button className="EmergencyPatientsDeath-search-icon">🔍</button>
        </div>
        <select 
          value={filter} 
          onChange={(e) => setFilter(e.target.value)}
          className="EmergencyPatientsDeath-filter-dropdown"
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

      <div className="EmergencyPatientsDeath-results-info">
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
              <td colSpan="6" className="EmergencyPatientsDeath-no-rows">No Rows To Show</td>
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
                    className="EmergencyPatientsDeath-edit-btn"
                    onClick={() => handleEdit(patient)}
                  >
                    Edit
                  </button>
                </td>          
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* <div className="EmergencyPatientsDeath-pagination">
        <span>0 to 0 of 0</span>
        <button className="EmergencyPatientsDeath-pagination-btn">First</button>
        <button className="EmergencyPatientsDeath-pagination-btn">Previous</button>
        <span>Page 0 of 0</span>
        <button className="EmergencyPatientsDeath-pagination-btn">Next</button>
        <button className="EmergencyPatientsDeath-pagination-btn">Last</button>
      </div> */}

      {/* Render the DeathEdit modal */}
      {isEditing && (
        <div className="EmergencyPatientsDeath-modal-overlay">
          <div className="EmergencyPatientsDeath-modal-content">
            <DeathEdit onClose={handleClose} patient={currentPatient} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Death;

 /* Dhanashree_Death_19/09 */
