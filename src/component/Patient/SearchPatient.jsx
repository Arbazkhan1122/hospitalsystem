import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SearchPatient.css';

function SearchPatient() {
  const [searchTerm, setSearchTerm] = useState('');
  const [hospitalNo, setHospitalNo] = useState('');
  const [patients, setPatients] = useState([]);
  const [filteredPatients, setFilteredPatients] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const patientsPerPage = 5;

  useEffect(() => {
    // Fetch patients from the API when the component mounts
    axios.get('http://localhost:8989/api/patients/getAllPatients')
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

  const handleEdit = (hospitalNo) => {
    // Use navigate or history for redirection
    // navigate(`/register-patient/${hospitalNo}`);
  };

  return (
    <div className="search-patient">
      <div className="search-print-container">
        <div className="search-inputs">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Search by Patient Name"
              value={searchTerm}
              onChange={handleSearch}
            />
            <i className="fas fa-search"></i>
          </div>
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Enter Hospital No"
              value={hospitalNo}
              onChange={(e) => setHospitalNo(e.target.value)}
            />
            <i className="fas fa-search"></i>
          </div>
        </div>
        <div className="results-and-print">
          <span className="results-text">Showing {displayedPatients.length} / {filteredPatients.length} results</span>
          <button className="print-button" onClick={handlePrint}>Print</button>
        </div>
      </div>

      <table className="patients-table">
        <thead>
          <tr>
            <th>Hospital Number</th>
            <th>Patient Name</th>
            <th>Age/Sex</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient, index) => (
            <tr key={index}>
              <td>{patient.hospitalNo}</td>
              <td>{patient.firstName} {patient.lastName}</td>
              <td>{patient.age} / {patient.gender}</td>
              <td>{patient.address}</td>
              <td>{patient.phoneNumber}</td>
              <td>
                <button onClick={() => handleEdit(patient.hospitalNo)} className="action-btn edit">Edit</button>
                <button className="action-btn history">History</button>
                <button className="action-btn more">More</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={() => handlePageChange(1)} disabled={currentPage === 1}>First</button>
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
        <span>Page {currentPage} of {Math.ceil(filteredPatients.length / patientsPerPage)}</span>
        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === Math.ceil(filteredPatients.length / patientsPerPage)}>Next</button>
        <button onClick={() => handlePageChange(Math.ceil(filteredPatients.length / patientsPerPage))} disabled={currentPage === Math.ceil(filteredPatients.length / patientsPerPage)}>Last</button>
      </div>
    </div>
  );
}

export default SearchPatient;
