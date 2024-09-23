 /* Dhanashree_DischargedEdit_19/09 */

import React, { useState, useEffect } from 'react';
import './DischargeEdit.css'; // Import the CSS file

const DischargedEdit = ({ patient, onClose }) => {
  const [hospitalNumber, setHospitalNumber] = useState(''); // New State for hospitalNumber
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [visitDateTime, setVisitDateTime] = useState('');
  const [patientStatus, setPatientStatus] = useState('');

  useEffect(() => {
    if (patient) {
      setHospitalNumber(patient.hospitalNo || ''); // Ensure hospitalNumber is set correctly
      setName(patient.name || '');
      setAge(patient.age || '');
      setGender(patient.gender || '');
      setVisitDateTime(patient.visitDateTime || '');
      setPatientStatus(patient.patientStatus || '');
    }
  }, [patient]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ensure hospitalNumber is passed and not undefined
    if (!hospitalNumber) {
      console.error('No hospital number provided');
      return;
    }

    const updatedPatient = {
      name,
      age,
      gender,
      visitDateTime,
      patientStatus
    };

    try {
      const response = await fetch(`http://localhost:3107/api/finalize/update-patient/${hospitalNumber}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedPatient)
      });

      if (response.ok) {
        console.log('Patient data updated successfully:', await response.json());
        onClose(); // Close the modal after saving
      } else {
        console.error('Error updating patient data');
      }
    } catch (error) {
      console.error('Error during the update process:', error);
    }
  };

  return (
    <div className="DischargeEdit-container">
      <div className="DischargeEdit-header">
        <h2>Edit Patient Details</h2>
        <button className="DischargeEdit-close-btn" onClick={onClose}>Close</button>
      </div>
      <form onSubmit={handleSubmit} className="DischargeEdit-form">
        <div className="DischargeEdit-form-group">
          <label>Name *</label>
          <input 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)} 
            placeholder="Name" 
            required
          />
        </div>
        <div className="DischargeEdit-form-group">
          <label>Age</label>
          <input 
            type="number" 
            value={age}
            onChange={(e) => setAge(e.target.value)} 
            placeholder="Age" 
          />
        </div>
        <div className="DischargeEdit-form-group">
          <label>Gender</label>
          <input 
            type="text" 
            value={gender}
            onChange={(e) => setGender(e.target.value)} 
            placeholder="Gender" 
          />
        </div>
        <div className="DischargeEdit-form-group">
          <label>Visit Date/Time</label>
          <input 
            type="datetime-local" 
            value={visitDateTime}
            onChange={(e) => setVisitDateTime(e.target.value)} 
          />
        </div>
        <div className="DischargeEdit-form-group">
          <label>Patient Status</label>
          <input 
            type="text" 
            value={patientStatus}
            onChange={(e) => setPatientStatus(e.target.value)} 
            placeholder="Patient Status" 
          />
        </div>
        <button type="submit" className="DischargeEdit-save-btn">Save Changes</button>
      </form>
    </div>
  );
};

export default DischargedEdit;

 /* Dhanashree_DischargedEdit_19/09 */
