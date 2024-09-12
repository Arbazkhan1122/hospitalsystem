import React from 'react';
// import './AddLabTest.css';
import "../LabSetting/labLookUpAddNewLUp.css"
const LabLookUpAddNewLUp = ({ onClose }) => {
  return (
    <div className="labVenderAddNewLV-container">
      <div className="labVenderAddNewLV-header">
        <h3>Add Lookup</h3>
        <button className="labVenderAddNewLV-close-btn"onClick={onClose}>x</button>
      </div>

      <div className="labVenderAddNewLV-form">
        <div className="labVenderAddNewLV-form-row">

          <div className="labVenderAddNewLV-form-group-1row">
          <div className="labVenderAddNewLV-form-group">
            <label>Module Name :<span>*</span></label>
            <input type="text" placeholder="Lab" />
          </div>
         
          </div>
          
          <div className="labVenderAddNewLV-form-group-1row">
          <div className="labVenderAddNewLV-form-group">
            <label>Look Up Name :</label>
            <input type="text" placeholder="Look Up Name" />
          </div>
         
          </div>
          <div className="labVenderAddNewLV-form-group-1row">
          <div className="labVenderAddNewLV-form-group">
            <label>Description:</label>
            <input type="text" placeholder="Description:" />
          </div>
         
          </div>
           
        
          
        </div>
        <div className="labVenderAddNewLV-header">

       <h3>Look Up Data</h3>
      </div>
       <div className="labVenderAddNewLV-form-group labVenderAddNewLV-full-width">
        
       <button className="labVenderAddNewLV-plus-btn"> <i class="fa-solid fa-plus"></i> </button>

          <input type="text" placeholder='Add Data' />            
          </div>
      </div>



      <div className="labVenderAddNewLV-form-actions">
        <button className="labVenderAddNewLV-add-btn">Add </button>
        {/* <button className="labVenderAddNewLV-close-btn">Close</button> */}
      </div>
    </div>
  );
};

export default LabLookUpAddNewLUp;
