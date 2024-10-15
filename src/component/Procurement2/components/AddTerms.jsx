import React from 'react';
import './AddTerms.css';

const AddTermsAndConditions = () => {
  return (
    <div className="cons-container">
      <h2>Add Terms & Conditions</h2>
      <form className="cons-terms-form">
        <div className="cons-form-group">
          <label htmlFor="shortName">ShortName<span>*</span>:</label>
          <input type="text" id="shortName" placeholder="Short Name" />
        </div>

        <div className="cons-form-group">
          <label htmlFor="text">Text<span>*</span>:</label>
          <textarea id="text" placeholder="Enter the terms and conditions here"></textarea>
        </div>

        <div className="cons-form-group">
          <label htmlFor="type">Type<span>*</span>:</label>
          <input type="text" id="type" placeholder="Type" />
        </div>

        <div className="cons-form-group">
          <label htmlFor="isActive">Is Active<span>*</span>:</label>
          <input type="checkbox" id="isActive" defaultChecked />
        </div>

        <div className="cons-form-actions">
          <button type="submit" className="cons-save-button">Save</button>
        </div>
      </form>
    </div>
  );
};

export default AddTermsAndConditions;
