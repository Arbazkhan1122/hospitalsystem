import React, { useState } from 'react';
import './Change_Visitschememain.css';

function Change_Visitscheme() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleSaveClick = () => {
    setIsPopupVisible(true);
  };

  const handleConfirm = () => {
    setIsPopupVisible(false);
    alert('Data has been saved successfully!');
    // Add your save logic here
  };

  const handleCancel = () => {
    setIsPopupVisible(false);
  };

  return (
    <div className="Change_Visitschememain">
      <div className="middleChange_Visitscheme">
        <div className="headingChange_Visitschememain">
          <h4>Change Scheme / Price Category</h4>
        </div>

        <div className="label_Change_Visitschememain">
          <label htmlFor="patientsearch">Select Patient :</label>
          <input 
            type="text" 
            placeholder="Search by hospital / patient name" 
            onClick={toggleVisibility} 
          />
        </div>

        {isVisible && (
          <div>
            <div className="patient-info">
              <div className="info-row">
                <span className="label">Patient Name:</span>
                <span className="value">Arbaz s Pathan</span>
              </div>
              <div className="info-row">
                <span className="label">Hospital No:</span>
                <span className="value">2408003807</span>
              </div>
              <div className="info-row">
                <span className="label">Age/Sex:</span>
                <span className="value">25Y</span>
              </div>
              <div className="info-row">
                <span className="label">Contact No:</span>
                <span className="value">8382883822</span>
              </div>
              <div className="info-row">
                <span className="label">Visit Type:</span>
                <span className="value">Inpatient</span>
              </div>
              <div className="info-row">
                <span className="label">Inpatient No:</span>
                <span className="value">H2400025</span>
              </div>
              <div className="info-row">
                <span className="label">Address:</span>
                <span className="value">Pune, Maharashtra</span>
              </div>
            </div>

            <div className="scheme-info">
              <span className="label">Current Scheme:</span>
              <span className="value">General</span>
              <span className="label">Current Price Category:</span>
              <span className="value">Normal</span>
            </div>

            <div className="change-form">
              <h3>Change To:</h3>
              <div className="form-row">
                <label>Select New Scheme:</label>
                <select>
                  <option>---Select New Scheme---</option>
                </select>
              </div>
              <div className="form-row">
                <label>Select New Price Category:</label>
                <select>
                  <option>---Select New Price Category---</option>
                </select>
              </div>
              <div className="form-row">
                <label>Remarks:</label>
                <textarea></textarea>
              </div>
            </div>
          </div>
        )}

        <div className="btn_Change_Visitschememain">
          <button className="btn_Change_Visitschememainsave btn btn-success"  onClick={handleSaveClick}>Save</button>

          
          <button className="btn_Change_Visitschememaindiscard">Discard</button>
        </div>

        {/* Popup Modal */}
        {isPopupVisible && (
          <div className="popup">
            <div className="popup-content">
              <h2>Confirm!</h2>
              <p>Are you sure you want to save?</p>
              <div className="popup-buttons">
                <button className="changevisitscheme-btn-confirm " onClick={handleConfirm}>Confirm</button>
                <button className="changevisitscheme-btn-cancel" onClick={handleCancel}>Cancel</button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default Change_Visitscheme;
