import React from 'react';
// import './AddLabTest.css';
import "../LabSetting/labLookUpAddNewLUp.css"
const LabLookUpAddNewLUp = ({ onClose }) => {
  return (
    <div className="labLookUpAddNewLUp-container">
      <div className="labLookUpAddNewLUp-header">
        <h3>Add Lookup</h3>
        <button className="labLookUpAddNewLUp-close-btn"onClick={onClose}>x</button>
      </div>

      <div className="labLookUpAddNewLUp-form">
        <div className="labLookUpAddNewLUp-form-row">

          <div className="labLookUpAddNewLUp-form-group-1row">
          <div className="labLookUpAddNewLUp-form-group">
            <label>Module Name :<span>*</span></label>
            <input type="text" placeholder="Lab" />
          </div>
         
          </div>
          
          <div className="labLookUpAddNewLUp-form-group-1row">
          <div className="labLookUpAddNewLUp-form-group">
            <label>Look Up Name :</label>
            <input type="text" placeholder="Look Up Name" />
          </div>
         
          </div>
          <div className="labLookUpAddNewLUp-form-group-1row">
          <div className="labLookUpAddNewLUp-form-group">
            <label>Description:</label>
            <input type="text" placeholder="Description:" />
          </div>
         
          </div>
           
        
          
        </div>
        <div className="labLookUpAddNewLUp-header">

       <h3>Look Up Data</h3>
      </div>
       <div className="labLookUpAddNewLUp-form-group labLookUpAddNewLUp-full-width">
        
       <button className="labLookUpAddNewLUp-plus-btn"> <i class="fa-solid fa-plus"></i> </button>

          <input type="text" placeholder='Add Data' />            
          </div>
      </div>



      <div className="labLookUpAddNewLUp-form-actions">
        <button className="labLookUpAddNewLUp-add-btn">Add </button>
        {/* <button className="labLookUpAddNewLUp-close-btn">Close</button> */}
      </div>
    </div>
  );
};

export default LabLookUpAddNewLUp;
