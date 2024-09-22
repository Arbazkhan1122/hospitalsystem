 /* Dhanashree_Discharge_19/09 */

import React, { useState, useEffect, useRef } from 'react';
import ReactToPrint from 'react-to-print';
import './Discharge.css';
import DischargedEdit from '../Emergency/DischargeEdit'; // Import the modal component
import { startResizing } from '../TableHeadingResizing/resizableColumns';

const Discharge = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');
  const [patients, setPatients] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const [selectedPatient, setSelectedPatient] = useState(null); // State for the selected patient
  const printRef = useRef();

  const [columnWidths, setColumnWidths] = useState({});
  const tableRef = useRef(null);

  useEffect(() => {
    // Fetch data from the API
    const fetchPatients = async () => {
      try {
        const response = await fetch('http://localhost:3107/api/finalize/finalize-patient/Discharged');
        const data = await response.json();
        setPatients(data);
      } catch (error) {
        console.error('Error fetching patients:', error);
      }
    };

    fetchPatients();
  }, []);

  const handleEdit = (patient) => {
    setSelectedPatient(patient); 
    setIsModalOpen(true); 
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); 
    setSelectedPatient(null); 
  };

  return (
    <div className="EmergencyPatientDischarge-content">
      <div className="EmergencyPatientDischarge-search-filter">
        <div className="EmergencyPatientDischarge-search-bar">
          <input 
            type="text" 
            placeholder="Search" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="EmergencyPatientDischarge-search-input"
          />
          <button className="EmergencyPatientDischarge-search-icon">🔍</button>
        </div>
        <select 
          value={filter} 
          onChange={(e) => setFilter(e.target.value)}
          className="EmergencyPatientDischarge-filter-dropdown"
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

      <div className="EmergencyPatientDischarge-results-info">
        <span>Showing {patients.length} / {patients.length} results</span>
        <ReactToPrint
          trigger={() => <button className="PatientsEmergency-print-btn">Print</button>}
          content={() => printRef.current}
        />
      </div>

      <table ref={tableRef}>
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
              <td colSpan="6" className="EmergencyPatientDischarge-no-rows">No Rows To Show</td>
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
                    className="EmergencyPatientDischarge-edit-btn"
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
        <div className="EmergencyPatientDischarge-modal">
          <div className="EmergencyPatientDischarge-modal-overlay" onClick={handleCloseModal}></div>
          <div className="EmergencyPatientDischarge-modal-content">
            <button className="EmergencyPatientDischarge-modal-close" onClick={handleCloseModal}>X</button>
            <DischargedEdit patient={selectedPatient} onClose={handleCloseModal} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Discharge;

 /* Dhanashree_Discharge_19/09 */
