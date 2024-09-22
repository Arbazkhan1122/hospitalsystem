 /* Dhanashree_TriagedPatientsEdit_19/09 */

import React, { useState, useEffect } from 'react';
import './TriagedPatientsEdit.css'; // Make sure the file extension is correct

const TriagedPatientsEdit = ({ onClose, patient }) => {
  const [triageStatus, setTriageStatus] = useState(patient ? patient.triageStatus : '');
  const [hospitalNumber, setHospitalNumber] = useState(patient ? patient.hospitalNumber : '');
  const [name, setName] = useState(patient ? patient.name : '');
  const [age, setAge] = useState(patient ? patient.age : '');
  const [phone, setPhone] = useState(patient ? patient.phone : '');

  useEffect(() => {
    console.log('Editing patient:', patient);
  }, [patient]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      triageStatus,
      hospitalNumber,
      name,
      age,
      phone
    });
    onClose();
  };

  return (
    <div className="TriagedPatientsEdit-edit-patient-container">
      <div className="TriagedPatientsEdit-edit-patient-header">
        <h2>Edit Patient Details</h2>
        <button className="TriagedPatientsEdit-close-btn" onClick={onClose}>✖</button>
      </div>
      <form onSubmit={handleSubmit} className="TriagedPatientsEdit-edit-patient-form">
        <div className="TriagedPatientsEdit-form-group">
          <label>Triage Status</label>
          <input 
            type="text" 
            value={triageStatus}
            onChange={(e) => setTriageStatus(e.target.value)} 
            placeholder="Triage Status" 
          />
        </div>
        <div className="TriagedPatientsEdit-form-group">
          <label>Hospital Number*</label>
          <input 
            type="text" 
            value={hospitalNumber}
            onChange={(e) => setHospitalNumber(e.target.value)} 
            placeholder="Hospital Number" 
            required
          />
        </div>
        <div className="TriagedPatientsEdit-form-group">
          <label>Patient Name*</label>
          <input 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)} 
            placeholder="Patient Name" 
            required
          />
        </div>
        <div className="TriagedPatientsEdit-form-group">
          <label>Age</label>
          <input 
            type="number" 
            value={age}
            onChange={(e) => setAge(e.target.value)} 
            placeholder="Age" 
          />
        </div>
        <div className="TriagedPatientsEdit-form-group">
          <label>Phone Number</label>
          <input 
            type="tel" 
            value={phone}
            onChange={(e) => setPhone(e.target.value)} 
            placeholder="Phone Number" 
          />
        </div>
        <button type="submit" className="TriagedPatientsEdit-save-btn">Save Changes</button>
      </form>
    </div>
  );
};

export default TriagedPatientsEdit;

 /* Dhanashree_TriagedPatientsEdit_19/09 */
