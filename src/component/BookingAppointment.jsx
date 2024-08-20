import React, { useState } from 'react';
import './BookingAppointment.css';

const BookingAppointment = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [patients, setPatients] = useState([
    { hospitalNumber: '2408003811', name: 'Sasi Rajavu', ageSex: '42Y / M', address: '', phone: '8745965215' },
    { hospitalNumber: '2408003810', name: 'hamza waheed', ageSex: '21Y / M', address: '', phone: '3207642712' },
    { hospitalNumber: '2408003809', name: 'Hassan Abukar Adam', ageSex: '0Y / M', address: '', phone: '612242225' },
    // ... add more patient data here
  ]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredPatients = patients.filter(patient =>
    Object.values(patient).some(value =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="book-appointment">
      <button className="new-patient-btn">+ New Patient</button>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search (Minimum 3 Character)"
          value={searchTerm}
          onChange={handleSearch}
        />
        <button className="search-btn">🔍</button>
      </div>
      <div className="results-info">
        <span>Showing {filteredPatients.length} / {patients.length} results</span>
        <button className="print-btn">Print</button>
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
          {filteredPatients.map((patient, index) => (
            <tr key={index}>
              <td>{patient.hospitalNumber}</td>
              <td>{patient.name}</td>
              <td>{patient.ageSex}</td>
              <td>{patient.address}</td>
              <td>{patient.phone}</td>
              <td>
                <button className="create-appointment-btn">Create Appointment</button>
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
    </div>
  );
};

export default BookingAppointment;