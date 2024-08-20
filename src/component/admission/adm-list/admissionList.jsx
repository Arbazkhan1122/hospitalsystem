import React, { useState, useEffect } from 'react';
import './admissionList.css';

const SearchPatient = () => {
  const [patients, setPatients] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [patientsPerPage] = useState(20);

  useEffect(() => {
    // Fetch patient data from your API
    // For now, we'll use dummy data
    const dummyData = [
      { hospitalNumber: '2408003811', name: 'Sasi Rajavu', age: '42', sex: 'M', phone: '8745965215', address: '', nhifNo: '', status: 'Admit' },
      // ... add more dummy data
    ];
    setPatients(dummyData);
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.hospitalNumber.includes(searchTerm)
  );

  const indexOfLastPatient = currentPage * patientsPerPage;
  const indexOfFirstPatient = indexOfLastPatient - patientsPerPage;
  const currentPatients = filteredPatients.slice(indexOfFirstPatient, indexOfLastPatient);

  const totalPatients = filteredPatients.length;
  const totalPages = Math.ceil(totalPatients / patientsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="search-patient">
      {/* Uncomment and adjust tab navigation if needed */}
      {/* 
      <nav className="tab-nav">
        <a href="#" className="active">Search Patient</a>
        <a href="#">Admitted Patients</a>
        <a href="#">Discharged Patients</a>
        <a href="#">Exchanged/Bed Cancel/Bed Reservation</a>
      </nav>
      */}

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search (Minimum 3 Characters)"
          value={searchTerm}
          onChange={handleSearch}
        />
        <button>Search</button>
        <button className="print-btn">Print</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Hospital Number</th>
            <th>Name</th>
            <th>Age/Sex</th>
            <th>Phone</th>
            <th>Address</th>
            <th>NHIF NO</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentPatients.map((patient, index) => (
            <tr key={index}>
              <td>{patient.hospitalNumber}</td>
              <td>{patient.name}</td>
              <td>{`${patient.age}/${patient.sex}`}</td>
              <td>{patient.phone}</td>
              <td>{patient.address}</td>
              <td>{patient.nhifNo}</td>
              <td>
                <button className={patient.status === 'Admitted' ? 'admitted' : 'admit'}>
                  {patient.status}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <span>{indexOfFirstPatient + 1} to {indexOfLastPatient > totalPatients ? totalPatients : indexOfLastPatient} of {totalPatients}</span>
        <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
        <span>Page {currentPage} of {totalPages}</span>
        <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
        <button onClick={() => paginate(1)} disabled={currentPage === 1}>First</button>
        <button onClick={() => paginate(totalPages)} disabled={currentPage === totalPages}>Last</button>
      </div>
    </div>
  );
};

export default SearchPatient;
