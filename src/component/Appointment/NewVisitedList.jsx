import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './NewVisitedList.css';
import AddNewPateint from './AddNewPateint';
import { useNavigate } from 'react-router-dom';

const NewVisitedList = () => {
  const [patients, setPatients] = useState([]);
  const [search, setSearch] = useState('');
  const [showPatientVisitForm, setShowPatientVisitForm] = useState(false);
  const navigate = useNavigate();
  

  useEffect(() => {
    // Fetch data from the API when the component mounts
    const fetchPatients = async () => {
      try {
        const response = await axios.get('http://localhost:1415/api/new-patient-visits');
        // Transform API data to fit the table structure
        const formattedData = response.data.map(patient => ({
          patientNo: patient.newPatientVisitId, // Assuming `id` is used as hospital number
          name: `${patient.firstName} ${patient.middleName} ${patient.lastName}`, // Combine names
          age: `${patient.age} / ${patient.gender}`, // Combine age and age unit
          address: patient.address, // Use `reason` as address (if applicable)
          phone: patient.phoneNumber // Use `contactNumber`
        }));
        setPatients(formattedData);
        console.log(formattedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchPatients();
  }, []);

  const handleNewPatient = () => {
    navigate('/checkIn');
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleClosePatientVisitForm = () => {
    setShowPatientVisitForm(false);
  };

  if (showPatientVisitForm) {
    return (
      <div className="new-patient-visit-form-modal">
        <div className="new-patient-visit-form-container">
          <button className="close-btn" onClick={handleClosePatientVisitForm}>X</button>
          <AddNewPateint />
        </div>
      </div>
    );
  }

  return (
    <div className="new-patient-list">
      <div className="new-header">
        <h3>Patient List</h3>
        <button className="new-patient" onClick={handleNewPatient}>+ New Patient</button>
      </div>
      <div className="new-search-bar">
        <input 
          type="text" 
          placeholder="Search (Atleast 3 characters)" 
          value={search}
          onChange={handleSearchChange} 
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>Patient Number</th>
            <th>Patient Name</th>
            <th>Age/Sex</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {patients
             .filter((patient) => 
              patient.name.toLowerCase().includes(search.toLowerCase()) || 
              patient.patientNo.toString().includes(search) 
            )
            .map((patient, index) => (
              <tr key={index}>
                <td>{patient.patientNo}</td>
                <td>{patient.name}</td>
                <td>{patient.age}</td>
                <td>{patient.address}</td>
                <td>{patient.phone}</td>
                <td>
                  <button className="new-action-button" onClick={handleNewPatient}>Check In</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <div className="new-pagination">
        <span>1 to 20 of 200</span>
        <button>First</button>
        <button>Previous</button>
        <span>Page 1 of 10</span>
        <button>Next</button>
        <button>Last</button>
      </div>
      <div className="new-footer-buttons">
        <button>Print</button>
      </div>
    </div>
  );
};

export default NewVisitedList;
