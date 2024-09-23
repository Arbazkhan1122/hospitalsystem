 /* Dhanashree_LamaEdit_19/09 */

import React, { useState, useEffect } from 'react';
import './LamaEdit.css';

const LamaEdit = ({ patient, onUpdate }) => {
  console.log(patient);
  
  
  // Set up state to manage form fields
  const [formData, setFormData] = useState({ // Ensure the id is initialized
    id: patient.hospitalNo,
    name: patient?.name || '',
    age: patient?.age || '',
    gender: patient?.gender || '',
    visitDateTime: patient?.visitDateTime || '',
    patientStatus: patient?.patientStatus || ''
  });

  useEffect(() => {
    // Set form data when the patient prop changes
    if (patient) {
      setFormData({
        id: patient.hospitalNo,
        name: patient.name || '',
        age: patient.age || '',
        gender: patient.gender || '',
        visitDateTime: patient.visitDateTime || '',
        patientStatus: patient.patientStatus || ''
      });
    }
  }, [patient]);

  // Function to handle form inputs change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Function to handle form submission and API call
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
        console.log('====================================');
        console.log(formData);
        console.log('====================================');
      const response = await fetch(`http://localhost:3107/api/finalize/update-patient/${patient}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          age: formData.age,
          gender: formData.gender,
          visitDateTime: formData.visitDateTime,
          patientStatus: formData.patientStatus
        }),
      });
  
      if (response.ok) {
        alert('Patient details updated successfully!');
        const updatedPatient = await response.json();
        onUpdate(updatedPatient); // Update the patient in the parent component
      } else {
        alert('Failed to update patient details.');
      }
    } catch (error) {
      console.error('Error updating patient:', error);
      alert('An error occurred while updating patient details.');
    }
  };
  
  return (
    <div className="LamaEditContainer">
      <h2>Edit Patient Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="LamaEditFormGroup">
          <label>
            Name<span className="LamaEditRequired">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Name"
            required
          />
        </div>

        <div className="LamaEditFormGroup">
          <label>Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            placeholder="Age"
          />
        </div>

        <div className="LamaEditFormGroup">
          <label>Gender</label>
          <input
            type="text"
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            placeholder="Gender"
          />
        </div>

        <div className="LamaEditFormGroup">
          <label>Visit Date/Time</label>
          <input
            type="date"
            name="visitDateTime"
            value={formData.visitDateTime}
            onChange={handleInputChange}
          />
        </div>

        <div className="LamaEditFormGroup">
          <label>Patient Status</label>
          <input
            type="text"
            name="patientStatus"
            value={formData.patientStatus}
            onChange={handleInputChange}
            placeholder="Patient Status"
          />
        </div>

        <button type="submit" className="LamaEditSaveButton">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default LamaEdit;


 /* Dhanashree_LamaEdit_19/09 */
