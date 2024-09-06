import React from 'react';
import '../NavLIS/labLISAddNewMapping.css';

function LabLISAddNewMapping({ onClose }) {
  return (
    <div className="mapping-overlay">
    <div className="mapping-container">
      <div className="mapping-header">
        <h2>Add Mapping for Lab Component to Machine Component</h2>
        <button className="close-btn" onClick={onClose}>×</button>
      </div>
      <div className="mapping-content">
        {/* Content can be added here */}
      </div>
      <div className="mapping-actions">
        <button className="cancel-btn" onClick={onClose}>Cancel</button>
        <button className="save-btn">Save</button>
      </div>
    </div>
  </div>
  );
}

export default LabLISAddNewMapping;
