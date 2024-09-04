import React, { useState } from 'react';
import axios from 'axios';
import './UnitOfMeasurement.css';

const UnitOfMeasurement = ({onClose}) => {
  // State management for form inputs
  const [unitOfMeasurementName, setUnitOfMeasurementName] = useState('');
  const [description, setDescription] = useState('');
  const [isActive, setIsActive] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the data to be sent to the backend
    const data = {
      unitOfMeasurementName,
      description,
      isActive,
    };

    try {
      // Send a POST request to the backend
      await axios.post('http://192.168.1.39:8080/api/unitofmeasurement/add', data);
      setSuccess('Unit of Measurement added successfully!');
      setError('');
    } catch (err) {
      setError('Failed to add Unit of Measurement. Please try again.');
      setSuccess('');
    }
  };

  return (
    <div className="unit-of-measssAddItemSubcategory">
      <h2>Add Unit of Measurement</h2>
      <button className="unit-of-vendddCloseButton" onClick={onClose}>
          &times;
        </button>
      <form onSubmit={handleSubmit}>
        <div className="unit-of-MeasssFormGroup">
          <label>Unit of Measurement Name<span className="unit-of-MeasssRequired">*</span></label>
          <input
            type="text"
            placeholder="Unit of Measurement Name"
            value={unitOfMeasurementName}
            onChange={(e) => setUnitOfMeasurementName(e.target.value)}
            required
          />
        </div>
       
        <div className="unit-of-MeasssFormGroup">
          <label>Description</label>
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
       
        <div className="unit-of-MeasssFormGroup">
          <label>Is Active</label>
          <input
            type="checkbox"
            checked={isActive}
            onChange={(e) => setIsActive(e.target.checked)}
          />
        </div>
        
        <button type="submit" className="unit-of-MeasssBtnAdd">Add Unit of Measurement</button>
        
        {error && <p className="unit-of-error-message">{error}</p>}
        {success && <p className="unit-of-success-message">{success}</p>}
      </form>
    </div>
  );
}

export default UnitOfMeasurement;
