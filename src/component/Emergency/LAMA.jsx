 /* Dhanashree_LAMA_19/09 */

import React, { useState, useEffect, useRef } from 'react';
import ReactToPrint from 'react-to-print';
import './LAMA.css'; 
import LamaEdit from './LamaEdit'; // Import the edit component
import { startResizing } from '../TableHeadingResizing/resizableColumns';


const LAMA = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');
  const [patients, setPatients] = useState([]);
  const [showEditPopup, setShowEditPopup] = useState(false); // Popup visibility state
  const [selectedPatient, setSelectedPatient] = useState(null); // Store selected patient details
  const printRef = useRef();


  const [columnWidths,setColumnWidths] = useState({});
  const tableRef=useRef(null);



  useEffect(() => {
    const fetchPatients = async () => { 
      try {
        const response = await fetch('http://localhost:3107/api/finalize/finalize-patient/LAMA');
        const data = await response.json();
      

        const formattedPatients = data.map((patient, index) => ({
          id: patient.hospitalNo, // Ensure patient ID is fetched
         
          name: patient.name,
          age: patient.age,
          gender: patient.gender,
          finalizedDateTime: new Date().toLocaleString(),
        }));

        setPatients(formattedPatients);
      } catch (error) {
        console.error('Error fetching patients:', error);
      }
    };

    fetchPatients();
  }, []);

  const handleEdit = (patient) => {
    setSelectedPatient(patient); // Set the patient being edited
    setShowEditPopup(true); // Show the edit popup
    console.log(selectedPatient + "helloo....");
    
  };

  const closePopup = () => {
    setShowEditPopup(false); // Close the popup
  };

  // Function to update the patient details in the state after editing
  const handlePatientUpdate = (updatedPatient) => {
    setPatients((prevPatients) => 
      prevPatients.map((patient) => 
        patient.id === updatedPatient.id ? updatedPatient : patient
      )
    );
    setShowEditPopup(false); // Close the popup after updating
  };

  return (
    <div className="Patients-content">
      <div className="Patients-search-filter">
        <div className="Patients-search-bar">
          <input 
            type="text" 
            placeholder="Search" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="Patients-search-input"
          />
          <button className="Patients-search-icon">🔍</button>
        </div>
        <select 
          value={filter} 
          onChange={(e) => setFilter(e.target.value)}
          className="Patients-filter-dropdown"
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

      <div className="Patients-results-info">
        <span>Showing {patients.length} / {patients.length} results</span>
        <ReactToPrint
          trigger={() => <button className="LamaPatients-print-btn">Print</button>}
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
              <td colSpan="6" className="Patients-no-rows">No Rows To Show</td>
            </tr>
          ) : (
            patients.map((patient, index) => (
              <tr key={index}>
                <td>{patient.id}</td>
                <td>{patient.name}</td>
                <td>{patient.age}</td>
                <td>{patient.gender}</td>
                <td>{patient.finalizedDateTime}</td>
                <td>
                  <button 
                    className="Patients-edit-btn" 
                    onClick={() => handleEdit(patient.id)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Popup section for editing */}
      {showEditPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <button className="popup-close-btn" onClick={closePopup}>Close</button>
            <LamaEdit 
              patient={selectedPatient} 
              onUpdate={handlePatientUpdate} // Pass the update function to LamaEdit
            />
          </div>
        </div>
      )}

      {/* 
      <div className="Patients-pagination">
        <span>0 to 0 of 0</span>
        <button className="Patients-pagination-btn">First</button>
        <button className="Patients-pagination-btn">Previous</button>
        <span>Page 1 of 1</span>
        <button className="Patients-pagination-btn">Next</button>
        <button className="Patients-pagination-btn">Last</button>
      </div> */}


    </div>
  );
};

export default LAMA;

 /* Dhanashree_LAMA_19/09 */
