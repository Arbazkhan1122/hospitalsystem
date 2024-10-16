 //prachi parab search Patient 13/9

import React, { useState, useEffect,useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './SearchPatient.css';
import { startResizing } from '../TableHeadingResizing/resizableColumns';
import { API_BASE_URL } from '../api/api';

function SearchPatient() {
  const [searchTerm, setSearchTerm] = useState('');
  const [patients, setPatients] = useState([]);
  const [filteredPatients, setFilteredPatients] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const patientsPerPage = 5;
  const navigate = useNavigate();
  const [columnWidths, setColumnWidths] = useState({});
  const tableRef = useRef(null);

  useEffect(() => {
    // Fetch patients from the API when the component mounts
    axios.get(`${API_BASE_URL}/patients/getAllPatients`)
      .then(response => {
        setPatients(response.data);
        console.log(response.data);
        
      })
      .catch(error => {
        console.error('There was an error fetching the patient data!', error);
      });
  }, []);

  useEffect(() => {
    // Filter patients based on the search term
    const filtered = patients.filter(patient =>
      `${patient.firstName} ${patient.lastName}`.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPatients(filtered);
    setCurrentPage(1); // Reset to first page when search term changes
  }, [searchTerm, patients]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handlePageChange = (newPage) => {
    if (newPage < 1) newPage = 1;
    if (newPage > Math.ceil(filteredPatients.length / patientsPerPage)) newPage = Math.ceil(filteredPatients.length / patientsPerPage);
    setCurrentPage(newPage);
  };

  const startIndex = (currentPage - 1) * patientsPerPage;
  const endIndex = startIndex + patientsPerPage;
  const displayedPatients = filteredPatients.slice(startIndex, endIndex);

  const handlePrint = () => {
    window.print();
  };

  const handleEdit = (patient) => {    
    navigate(`/RegisterPatient#basic-info/${patient?.patientId}`, { state: { patient } });
  };

  return (
    <div className="search-patient">
      <div className="search-print-container">
        <div className="search-inputs">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={handleSearch}
            />
            <i className="fas fa-search"></i>
          </div>
        </div>
        <div className="results-and-print">
          <span className="results-text">Showing {displayedPatients.length} / {filteredPatients.length} results</span>
          <button className="handle-print-button" onClick={handlePrint}>Print</button>
        </div>
      </div>

      <table className="patientList-table" ref={tableRef}>
          <thead>
            <tr>
              {[
                "Serial No",
                "Patient Name",
                "Age/Sex",
                "Address",
                "Phone",
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
          {displayedPatients.map((patient, index) => (
            <tr key={index}>
              <td>{startIndex + index + 1}</td>
              <td>{patient.firstName} {patient.lastName}</td>
              <td>{patient.age} / {patient.gender}</td>
              <td>{patient.address}</td>
              <td>{patient.phoneNumber}</td>
              <td>
                <button onClick={() => handleEdit(patient)} className="action-btn edit">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <div className="pagination">
        <button onClick={() => handlePageChange(1)} disabled={currentPage === 1}>First</button>
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
        <span>Page {currentPage} of {Math.ceil(filteredPatients.length / patientsPerPage)}</span>
        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === Math.ceil(filteredPatients.length / patientsPerPage)}>Next</button>
        <button onClick={() => handlePageChange(Math.ceil(filteredPatients.length / patientsPerPage))} disabled={currentPage === Math.ceil(filteredPatients.length / patientsPerPage)}>Last</button>
      </div> */}
    </div>
  );
}

export default SearchPatient;
