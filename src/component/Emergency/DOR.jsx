 /* Dhanashree_DOR_19/09 */

import React, { useState, useEffect, useRef } from 'react';
import ReactToPrint from 'react-to-print';
import DOREdit from './DOREdit'; // Import the DOREdit component
import './DOR.css'; // Import the CSS file
import { startResizing } from '../TableHeadingResizing/resizableColumns';

const DOR = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');
  const [patients, setPatients] = useState([]);
  const [isEditing, setIsEditing] = useState(false); // State to control the modal visibility
  const [currentPatient, setCurrentPatient] = useState(null); // State to hold the current patient data
  const printRef = useRef();


  const [columnWidths,setColumnWidths] = useState({});
  const tableRef=useRef(null);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await fetch('http://localhost:3107/api/finalize/finalize-patient/DOR');
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
    setCurrentPatient(null); // Reset current patient after closing
  };

  return (
    <div className="DORPatients-content">
      <div className="DORPatients-search-filter">
        <div className="DORPatients-search-bar">
          <input 
            type="text" 
            placeholder="Search" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="DORPatients-search-input"
          />
          <button className="DORPatients-search-icon">🔍</button>
        </div>
        <select 
          value={filter} 
          onChange={(e) => setFilter(e.target.value)}
          className="DORPatients-filter-dropdown"
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

      <div className="DORPatients-results-info">
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
              <td colSpan="6" className="DORPatients-no-rows">No Rows To Show</td>
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
                    className="DORPatients-edit-btn"
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

      {/* <div className="DORPatients-pagination">
        <span>0 to 0 of 0</span>
        <button className="DORPatients-pagination-btn">First</button>
        <button className="DORPatients-pagination-btn">Previous</button>
        <span>Page 0 of 0</span>
        <button className="DORPatients-pagination-btn">Next</button>
        <button className="DORPatients-pagination-btn">Last</button>
      </div> */}

      {/* Render the DOREdit modal with current patient data */}
      {isEditing && (
        <div className="DOR-modal-overlay">
          <div className="DOR-modal-content">
            <DOREdit onClose={handleClose} patient={currentPatient} />
          </div>
        </div>
      )}
    </div>
  );
}

export default DOR;

 /* Dhanashree_DOR_19/09 */
