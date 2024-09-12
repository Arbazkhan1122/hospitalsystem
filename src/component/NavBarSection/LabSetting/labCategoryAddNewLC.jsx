import React from 'react';
// import './AddLabTest.css';
import "../LabSetting/labCategoryAddNewLC.css"
const LabCategoryAddNewLC = ({ onClose }) => {
  return (
    <div className="labCategoryAddNewLC-container">
      <div className="labCategoryAddNewLC-header">
        <h3>Add Lab Category</h3>
        <button className="labCategoryAddNewLC-close-btn"onClick={onClose}>x</button>
      </div>

      <div className="labCategoryAddNewLC-form">

          <div className="labCategoryAddNewLC-form-group">
            <label>Category Name :<span>*</span></label>
            <input type="text" placeholder="Category Name" />
          </div>
         
          
          
          <div className="labCategoryAddNewLC-form-group">
            <input type="checkbox"  />
            <label>Is Default?</label>
          </div>
        
        </div>
        <div className="labCategoryAddNewLC-form-actions">
        <button className="labCategoryAddNewLC-add-btn">Add </button>
        {/* <button className="labCategoryAddNewLC-close-btn">Close</button> */}
      </div>
    </div>
  );
};

export default LabCategoryAddNewLC;
