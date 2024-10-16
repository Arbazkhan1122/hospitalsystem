 /* Dhanashree_DeathEdit_19/09 */

import React, { useState, useEffect } from 'react';
import './DeathEdit.css'; // Import the CSS file

const DeathEdit = ({ onClose, patient }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [visitDateTime, setVisitDateTime] = useState('');
  const [patientStatus, setPatientStatus] = useState('');

  useEffect(() => {
    // Autofill the form with the patient's data when patient changes
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
        method: 'PUT', // Update the patient using PUT or PATCH based on the API design
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedPatient),
      });

      if (response.ok) {
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
    <div className="DeathEditPatients-container">
      <div className="DeathEditPatients-header">
        <h2>Edit Patient Details</h2>
        <button className="DeathEditPatientList-close-btn" onClick={onClose}>Close</button>
      </div>
      <form onSubmit={handleSubmit} className="DeathEditPatients-form">
        <div className="DeathEditPatients-form-group">
          <label>Name*</label>
          <input 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)} 
            placeholder="Name" 
            required
          />
        </div>
        <div className="DeathEditPatients-form-group">
          <label>Age</label>
          <input 
            type="number" 
            value={age}
            onChange={(e) => setAge(e.target.value)} 
            placeholder="Age" 
          />
        </div>
        <div className="DeathEditPatients-form-group">
          <label>Gender</label>
          <input 
            type="text" 
            value={gender}
            onChange={(e) => setGender(e.target.value)} 
            placeholder="Gender" 
          />
        </div>
        <div className="DeathEditPatients-form-group">
          <label>Visit Date/Time</label>
          <input 
            type="datetime-local" 
            value={visitDateTime}
            onChange={(e) => setVisitDateTime(e.target.value)} 
          />
        </div>
        <div className="DeathEditPatients-form-group">
          <label>Patient Status</label>
          <input 
            type="text" 
            value={patientStatus}
            onChange={(e) => setPatientStatus(e.target.value)} 
            placeholder="Patient Status" 
          />
        </div>
        <button type="submit" className="DeathEditPatients-save-btn">Save Changes</button>
      </form>
    </div>
  );
};

export default DeathEdit;

 /* Dhanashree_DeathEdit_19/09 */
