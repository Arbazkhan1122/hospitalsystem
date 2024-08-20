import React, { useState } from 'react';
import './NewVisitedList.css';

const NewVisitedList = () => {
  const [search, setSearch] = useState('');

  const patients = [
    // Populate this array with the patient data shown in the image
    { hospitalNo: '2408003811', name: 'Sasi Rajavu', age: '42 Y/M', address: '', phone: '8745965215' },
    { hospitalNo: '2408003810', name: 'hamza waheed', age: '21 Y/M', address: '', phone: '3207642712' },
    { hospitalNo: '2408003809', name: 'Hassan Abukar Adam', age: '3 D/M', address: '', phone: '612242225' },
    // Add more data here...
  ];

  return (
    <div className="patient-list">
      <div className="header">
        <h3>Patient List</h3>
        <button className="new-patient">+ New Patient</button>
      </div>
      <div className="search-bar">
        <input 
          type="text" 
          placeholder="Search (Minimum 3 Character)" 
          onChange={(e) => setSearch(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="Enter Hospital No" 
        />
      </div>
      <table>
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
          {patients
            .filter((patient) => patient.name.includes(search) || patient.hospitalNo.includes(search))
            .map((patient, index) => (
              <tr key={index}>
                <td>{patient.hospitalNo}</td>
                <td>{patient.name}</td>
                <td>{patient.age}</td>
                <td>{patient.address}</td>
                <td>{patient.phone}</td>
                <td>
                  <button className="action-button">Check In</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <div className="pagination">
        <span>1 to 20 of 200</span>
        <button>First</button>
        <button>Previous</button>
        <span>Page 1 of 10</span>
        <button>Next</button>
        <button>Last</button>
      </div>
      <div className="footer-buttons">
        <button>Print</button>
      </div>
      
    </div>
  );
};

export default NewVisitedList;
