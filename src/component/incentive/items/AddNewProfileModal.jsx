import React, { useState } from 'react';
import './AddNewProfileModal.css';

function AddNewProfileModal({ onSave, onClose }) {
  const [profileName, setProfileName] = useState('');
  const [description, setDescription] = useState('');
  const [priceCategory, setPriceCategory] = useState('');

  const handleSave = () => {
    if (profileName && priceCategory) {
      onSave({
        name: profileName,
        description,
        priceCategory,
        isActive: true
      });
      onClose(); // Close the modal after saving
    } else {
      alert('Please fill in all required fields.');
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Add New INCENTIVE Profile</h3>
        <div className="form-group">
          <label>PriceCategory:</label>
          <select
            value={priceCategory}
            onChange={(e) => setPriceCategory(e.target.value)}
          >
            <option value="">--Select PriceCategory--</option>
            <option value="Basic">Basic</option>
            <option value="Standard">Standard</option>
            <option value="Premium">Premium</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="form-group">
          <label>Profile Name:</label>
          <input
            type="text"
            value={profileName}
            onChange={(e) => setProfileName(e.target.value)}
            placeholder="Enter Profile Name"
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter Description"
          />
        </div>
        <div className="modal-actions">
          <button className="save-btn" onClick={handleSave}>Save</button>
          <button className="cancel-btn" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default AddNewProfileModal;
