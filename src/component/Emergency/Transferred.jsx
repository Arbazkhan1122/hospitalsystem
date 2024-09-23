 /* Dhanashree_Transferred_19/09 */

import React, { useState, useEffect, useRef } from 'react';
import ReactToPrint from 'react-to-print';
import './Transferred.css';
import TransferredEdit from './TransferredEdit'; // Import the modal component
import { startResizing } from '../TableHeadingResizing/resizableColumns';

const Transferred = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');
  const [patients, setPatients] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const [selectedPatient, setSelectedPatient] = useState(null); // State for the selected patient
  const printRef = useRef();

  const [columnWidths,setColumnWidths] = useState({});
  const tableRef=useRef(null);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await fetch('http://localhost:3107/api/finalize/finalize-patient/Transferred');
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
    setIsModalOpen(true); // Open the modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
    setSelectedPatient(null); // Clear selected patient data
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
          trigger={() => <button className="PatientsEmergency-print-btn">Print</button>}
          content={() => printRef.current}
        />
      </div>

      <table  ref={tableRef}>
          <thead>
            <tr>
              { [
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
                <td>{patient.hospitalNumber}</td>
                <td>{patient.name}</td>
                <td>{patient.age}</td>
                <td>{patient.gender}</td>
                <td>{patient.finalizedDateTime}</td>
                <td>
                  <button 
                    className="Patients-edit-btn"
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

      {/* Modal for editing */}
      {isModalOpen && (
        <div className="Patients-modal">
          <div className="Patients-modal-overlay" onClick={handleCloseModal}></div>
          <div className="Patients-modal-content">
            <button className="Patients-modal-close" onClick={handleCloseModal}>X</button>
            <TransferredEdit patient={selectedPatient} onClose={handleCloseModal} />
          </div>
        </div>
      )}

      {/* <div className="Patients-pagination">
        <span>0 to 0 of 0</span>
        <button className="Patients-pagination-btn">First</button>
        <button className="Patients-pagination-btn">Previous</button>
        <span>Page 0 of 0</span>
        <button className="Patients-pagination-btn">Next</button>
        <button className="Patients-pagination-btn">Last</button>
      </div> */}
    </div>
  );
};

export default Transferred;


 /* Dhanashree_Transferred_19/09 */
