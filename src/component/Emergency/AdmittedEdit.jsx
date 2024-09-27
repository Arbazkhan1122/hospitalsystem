// Dhanashree_AdmittedEdit_19/09

import React, { useState, useEffect } from 'react';
import './AdmittedEdit.css'; // Import the CSS file

const AdmittedEdit = ({ onClose, patient }) => {
  // Initialize state with patient data if available
  const [name, setName] = useState(patient ? patient.name : '');
  const [age, setAge] = useState(patient ? patient.age : '');
  const [gender, setGender] = useState(patient ? patient.gender : '');
  const [visitDateTime, setVisitDateTime] = useState(patient ? patient.visitDateTime : '');
  const [patientStatus, setPatientStatus] = useState(patient ? patient.patientStatus : '');

  useEffect(() => {
    // Log the patient data or perform additional side-effects when patient changes
    if (patient) {
      setName(patient.name);
      setAge(patient.age);
      setGender(patient.gender);
      setVisitDateTime(patient.visitDateTime);
      setPatientStatus(patient.patientStatus);
    }
  }, [patient]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedPatient = {
      name,
      age,
      gender,
      visitDateTime,
      patientStatus
    };

    try {
      const response = await fetch(`http://localhost:3107/api/finalize/update-patient/${patient.hospitalNo}`, {
        method: 'PUT', // or 'PATCH' based on your API
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedPatient),
      });

      if (response.ok) {
        // Handle successful update
        console.log('Patient updated successfully');
        onClose(); // Close the modal after successful save
      } else {
        console.error('Failed to update patient');
      }
    } catch (error) {
      console.error('Error updating patient:', error);
    }
  };

  return (
    <div className="Admitted-edit-patient-container">
      <div className="Admitted-edit-patient-header">
        <h2>Edit Patient Details</h2>
        <button className="Admitted-close-btn" onClick={onClose}>Close</button>
      </div>
      <form onSubmit={handleSubmit} className="Admitted-edit-patient-form">
        <div className="Admitted-form-group">
          <label>Name*</label>
          <input 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)} 
            placeholder="Name" 
            required
          />
        </div>
        <div className="Admitted-form-group">
          <label>Age</label>
          <input 
            type="number" 
            value={age}
            onChange={(e) => setAge(e.target.value)} 
            placeholder="Age" 
          />
        </div>
        <div className="Admitted-form-group">
          <label>Gender</label>
          <input 
            type="text" 
            value={gender}
            onChange={(e) => setGender(e.target.value)} 
            placeholder="Gender" 
          />
        </div>
        <div className="Admitted-form-group">
          <label>Visit Date/Time</label>
          <input 
            type="datetime-local" 
            value={visitDateTime}
            onChange={(e) => setVisitDateTime(e.target.value)} 
          />
        </div>
        <div className="Admitted-form-group">
          <label>Patient Status</label>
          <input 
            type="text" 
            value={patientStatus}
            onChange={(e) => setPatientStatus(e.target.value)} 
            placeholder="Patient Status" 
          />
        </div>
        <button type="submit" className="Admitted-save-btn">Save Changes</button>
      </form>
    </div>
  );
};

export default AdmittedEdit;
// Dhanashree_AdmittedEdit_19/09
