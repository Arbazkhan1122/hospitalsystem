import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './NewVisitedList.css';
import AddNewPateint from './AddNewPateint';
import { useNavigate } from 'react-router-dom';
import { startResizing } from '../TableHeadingResizing/resizableColumns';

const NewVisitedList = () => {
  const [patients, setPatients] = useState([]);
  const [search, setSearch] = useState('');
  const [showPatientVisitForm, setShowPatientVisitForm] = useState(false);
  const navigate = useNavigate();
  const [columnWidths, setColumnWidths] = useState({});
  const tableRef = useRef(null);

  useEffect(() => {
    // Fetch data from the API when the component mounts
    const fetchPatients = async () => {
      try {
        const response = await axios.get('http://localhost:1415/api/new-patient-visits');
        // Transform API data to fit the table structure
        const formattedData = response.data.map(patient => ({
          patientNo: patient.newPatientVisitId,
          name: `${patient.firstName} ${patient.middleName} ${patient.lastName}`,
          age: `${patient.age} / ${patient.gender}`,
          address: patient.address,
          phone: patient.phoneNumber
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
      <div className="newPatient-visit-form-modal">
        <div className="newPatient-visit-form-container">
          <button className="newPatient-close-btn" onClick={handleClosePatientVisitForm}>X</button>
          <AddNewPateint />
        </div>
      </div>
    );
  }

  return (
    <div className="newPatient-list">
      <div className="newPatient-header">
        <h5>Patient List</h5>
        <button className="newPatient-new-patient" onClick={handleNewPatient}>+ New Patient</button>
      </div>
      <div className="newPatient-search-bar">
        <input 
          type="text" 
          placeholder="Search (Atleast 3 characters)" 
          value={search}
          onChange={handleSearchChange} 
        />
      </div>
      <table className="newPatient-table" ref={tableRef}>
        <thead>
          <tr>
            {[
              "Patient Number",
              "Patient Name",
              "Age/Sex",
              "Address",
              "Phone",
              "Actions"
            ].map((header, index) => (
              <th
                key={index}
                style={{ width: columnWidths[index] }}
                className="newPatient-resizable-th"
              >
                <div className="newPatient-header-content">
                  <span>{header}</span>
                  <div
                    className="newPatient-resizer"
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
                  <button className="newPatient-action-button" onClick={handleNewPatient}>Check In</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <div className="newPatient-footer-buttons">
        <button>Print</button>
      </div>
    </div>
  );
};

export default NewVisitedList;
