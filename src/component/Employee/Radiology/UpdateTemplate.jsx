import React from 'react';
import './UpdateTemplate.css';

const UpdateTemplate = ({ onClose }) => {
  return (
    <div className="update-template-modal-container">
      <div className="update-template-modal-header">
        <h2>Update Template</h2>
        <button className="update-template-close-button" onClick={onClose}>X</button>
      </div>
      <form className="update-template-template-form">
        <div className="update-template-form-group">
          <label>Module Name*</label>
          <input type="text" value="Radiology" readOnly />
        </div>
        <div className="update-template-form-group">
          <label>Template Code*</label>
          <input type="text" value="CT-SCAN" readOnly />
        </div>
        <div className="update-template-form-group">
          <label>Template Name*</label>
          <input type="text" value="CT-SCAN" readOnly />
        </div>
        <div className="update-template-form-group">
          <label>Active</label>
          <input type="checkbox" checked readOnly />
        </div>
        <div className="update-template-form-group">
          <label>Template Content:</label>
          <textarea className="update-template-text-editor" rows="10" value="testing" readOnly></textarea>
        </div>
        <div className="update-template-form-group footer-note">
          <label>Footer Note:</label>
          <input type="text" value="additional information" />
        </div>
        <button type="button" className="update-template-update-button">Update</button>
      </form>
    </div>
  );
};

export default UpdateTemplate;
