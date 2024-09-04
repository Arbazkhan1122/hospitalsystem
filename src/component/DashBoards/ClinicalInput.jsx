import React from 'react';
import './ClinicalInput.css';

const ClinicalInputOutput = () => {
  return (
    <div className="input-output-list">
      <h1>Input Output List</h1>
      <div className="controls">
        <div className="date-range">
          <label>From: <input type="date" value="2024-08-18" /></label>
          <label>To: <input type="date" value="2024-08-25" /></label>
        </div>
        <button className="load-btn">Load</button>
        <button className="add-new-btn">Add New</button>
      </div>
      <div className="type-selector">
        <input type="radio" id="intake" name="type" checked />
        <label htmlFor="intake">Intake</label>
        <input type="radio" id="output" name="type" />
        <label htmlFor="output">Output</label>
      </div>
      {/* Add more form elements here as needed */}
    </div>
  );
};

export default ClinicalInputOutput;
