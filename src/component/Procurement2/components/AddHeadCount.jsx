import React, { useState } from 'react';
import axios from 'axios';
import './AddHeadCount.css';

const AddHeadCount = () => {
  const [accountHeadName, setHeadName] = useState('');
  const [description, setDescription] = useState('');
  const [isActive, setIsActive] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    try {
      const response = await axios.post('http://localhost:8080/api/account-heads', {
        accountHeadName,
        description,
        isActive
      });
      
      // Handle success
      setSuccess('Account head added successfully!');
      setHeadName('');
      setDescription('');
      setIsActive(true);
    } catch (error) {
      // Handle error
      setError('Failed to add account head. Please try again.');
      console.error('Error adding account head:', error);
    }
  };

  return (
    <div className="MeasssAddItemSubcategory">
      <h2>Add Account Head</h2>
      <form onSubmit={handleSubmit}>
        <div className="MeasssFormGroup">
          <label>
            Add Head Name<span className="MeasssRequired">*</span>
          </label>
          <input
            type="text"
            placeholder="Add Head Name"
            value={accountHeadName}
            onChange={(e) => setHeadName(e.target.value)}
            required
          />
        </div>
       
        <div className="MeasssFormGroup">
          <label>Description</label>
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
       
        <div className="MeasssFormGroup">
          <label>Is Active</label>
          <input
            type="checkbox"
            checked={isActive}
            onChange={() => setIsActive(!isActive)}
          />
        </div>

        <button type="submit" className="MeasssBtnAdd">
          Add Account Head
        </button>

        {success && <div className="MeasssSuccessMessage">{success}</div>}
        {error && <div className="MeasssErrorMessage">{error}</div>}
      </form>
    </div>
  );
}

export default AddHeadCount;
