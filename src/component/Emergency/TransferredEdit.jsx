 /* Dhanashree_TransferredEdit_19/09 */

import React, { useState, useEffect } from 'react';
import './TransferredEdit.css'; // Import the CSS file

const TransferredEdit = ({ patient }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [visitDateTime, setVisitDateTime] = useState('');
  const [patientStatus, setPatientStatus] = useState('');

  useEffect(() => {
    if (patient) {
      setName(patient.name || '');
      setAge(patient.age || '');
      setGender(patient.gender || '');
      setVisitDateTime(patient.visitDateTime || '');
      setPatientStatus(patient.patientStatus || '');
    }
  }, [patient]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedPatient = {
      name,
      age,
      gender,
      visitDateTime,
      patientStatus,
    };

    try {
      const response = await fetch(`http://localhost:3107/api/finalize/update-patient/${patient.hospitalNo}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedPatient),
      });

      if (response.ok) {
        console.log('Patient updated successfully');
      } else {
        console.error('Error updating patient:', response.statusText);
      }
    } catch (error) {
      console.error('Error during the update process:', error);
    }
  };

  return (
    <div className="TransferredEdit-edit-patient-container">
      <div className="TransferredEdit-edit-patient-header">
        <h2>Edit Patient Details</h2>
      </div>
      <form onSubmit={handleSubmit} className="TransferredEdit-edit-patient-form">
        <div className="TransferredEdit-form-group">
          <label>Name *</label>
          <input 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)} 
            placeholder="Name" 
            required
          />
        </div>
        <div className="TransferredEdit-form-group">
          <label>Age</label>
          <input 
            type="number" 
            value={age}
            onChange={(e) => setAge(e.target.value)} 
            placeholder="Age" 
          />
        </div>
        <div className="TransferredEdit-form-group">
          <label>Gender</label>
          <input 
            type="text" 
            value={gender}
            onChange={(e) => setGender(e.target.value)} 
            placeholder="Gender" 
          />
        </div>
        <div className="TransferredEdit-form-group">
          <label>Visit Date/Time</label>
          <input 
            type="datetime-local" 
            value={visitDateTime}
            onChange={(e) => setVisitDateTime(e.target.value)} 
          />
        </div>
        <div className="TransferredEdit-form-group">
          <label>Patient Status</label>
          <input 
            type="text" 
            value={patientStatus}
            onChange={(e) => setPatientStatus(e.target.value)} 
            placeholder="Patient Status" 
          />
        </div>
        <button type="submit" className="TransferredEdit-save-btn">Save Changes</button>
      </form>
    </div>
  );
};

export default TransferredEdit;

 /* Dhanashree_TransferredEdit_19/09 */
