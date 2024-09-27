 /* Dhanashree_TriagedPatients_19/09 */

import React, { useState, useEffect,useRef } from 'react';
import './TriagedPatient.css';
import { startResizing } from '../TableHeadingResizing/resizableColumns';

const TriagedPatients = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');
  const [patients, setPatients] = useState([]);

  const [columnWidths,setColumnWidths] = useState({});
  const tableRef=useRef(null);

  
  // Fetch data from the API when the component mounts
  useEffect(() => {
    fetch('http://localhost:3107/api/patients?status=Triage')
      .then(response => response.json())
      .then(data => {
        // We are assuming that the 'status' filtering is already handled by the API
        setPatients(data);
      })
      .catch(error => console.error('Error fetching triaged patients:', error));
  }, []);

  return (
    <div className="TriagedPatients-triaged-patients">
      <div className="TriagedPatients-content">
        <div className="TriagedPatients-search-filter">
          <div className="TriagedPatients-search-bar">
            <input 
              type="text" 
              placeholder="Search" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="TriagedPatients-search-icon">🔍</button>
          </div>
          <select 
            value={filter} 
            onChange={(e) => setFilter(e.target.value)}
            className="TriagedPatients-filter-dropdown"
          >
            <option value="All">All</option>
            <option value="Emergency">Emergency</option>
            <option value="Dog Bite">Dog Bite</option>
            <option value="Snake Bite">Snake Bite</option>
            <option value="Animal Bite">Animal Bite</option>
            <option value="Emergency Labour">Emergency Labour</option>
            <option value="Medico-Legal">Medico-Legal</option>
          </select>
        </div>


        <table ref={tableRef}>
          <thead>
            <tr>
              {  
           ["S.N.",
  "First Name",
  "Last Name",
  "Age/Sex",
  "Phone No.",
  "Case Type",
  "Status"]
              .map((header, index) => (
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
            {patients
              .filter(patient => {
                // Safeguard: Check if firstName, lastName and caseType exist before filtering
                const nameExists = patient.firstName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                  patient.lastName?.toLowerCase().includes(searchTerm.toLowerCase());
                const caseTypeMatches = filter === 'All' || patient.caseType === filter;

                return nameExists && caseTypeMatches;
              })
              .map((patient, index) => (
                <tr key={patient.id}>
                  <td>{index + 1}</td>
                  <td>{patient.firstName}</td>
                  <td>{patient.lastName}</td>
                  <td>{patient.age}/{patient.gender}</td>
                  <td>{patient.contactNumber}</td>
                  <td>{patient.caseType}</td>
                  <td>{patient.status}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TriagedPatients;

 /* Dhanashree_TriagedPatients_19/09 */
