 /* Dhanashree_DOREdit_19/09 */

import React, { useState } from 'react';
import './DOREdit.css'; // Import the CSS file

const DOREdit = ({ onClose }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [visitDateTime, setVisitDateTime] = useState('');
  const [patientStatus, setPatientStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement save changes logic here
    console.log({
      name,
      age,
      gender,
      visitDateTime,
      patientStatus
    });
    // Call onClose or any other logic after saving
  };

  return (
    <div className="DOREEdit-container">
      <div className="DOREEdit-header">
        <h2>Edit Patient Details</h2>
        <button className="DOREEdit-close-btn" onClick={onClose}>Close</button>
      </div>
      <form onSubmit={handleSubmit} className="DOREEdit-form">
        <div className="DOREEdit-form-group">
          <label>Name*</label>
          <input 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)} 
            placeholder="Name" 
            required
          />
        </div>
        <div className="DOREEdit-form-group">
          <label>Age</label>
          <input 
            type="number" 
            value={age}
            onChange={(e) => setAge(e.target.value)} 
            placeholder="Age" 
          />
        </div>
        <div className="DOREEdit-form-group">
          <label>Gender</label>
          <input 
            type="text" 
            value={gender}
            onChange={(e) => setGender(e.target.value)} 
            placeholder="Gender" 
          />
        </div>
        <div className="DOREEdit-form-group">
          <label>Visit Date/Time</label>
          <input 
            type="datetime-local" 
            value={visitDateTime}
            onChange={(e) => setVisitDateTime(e.target.value)} 
          />
        </div>
        <div className="DOREEdit-form-group">
          <label>Patient Status</label>
          <input 
            type="text" 
            value={patientStatus}
            onChange={(e) => setPatientStatus(e.target.value)} 
            placeholder="Patient Status" 
          />
        </div>
        <button type="submit" className="DOREEdit-save-btn">Save Changes</button>
      </form>
    </div>
  );
};

export default DOREdit;

 /* Dhanashree_DOREdit_19/09 */
