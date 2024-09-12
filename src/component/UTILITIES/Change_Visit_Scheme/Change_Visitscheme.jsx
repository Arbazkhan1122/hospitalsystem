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
    <div className="Change_Visitschememain-content">
      <div className="Change_Visitschememain-middleChange_Visitscheme">
        <div className="Change_Visitschememain-headingChange_Visitschememain">
          <h4>Change Scheme / Price Category</h4>
        </div>

        <div className="Change_Visitschememain-label_Change_Visitschememain">
          <label htmlFor="patientsearch">Select Patient :</label>
          <input 
            type="text" 
            placeholder="Search by hospital / patient name" 
            onClick={toggleVisibility} 
          />
        </div>

        {isVisible && (
          <div>
            <div className="Change_Visitschememain-patient-info">
              <div className="Change_Visitschememain-info-row">
                <span className="Change_Visitschememain-label">Patient Name:</span>
                <span className="Change_Visitschememain-value">Arbaz s Pathan</span>
              </div>
              <div className="Change_Visitschememain-info-row">
                <span className="Change_Visitschememain-label">Hospital No:</span>
                <span className="Change_Visitschememain-value">2408003807</span>
              </div>
              <div className="Change_Visitschememain-info-row">
                <span className="Change_Visitschememain-label">Age/Sex:</span>
                <span className="Change_Visitschememain-value">25Y</span>
              </div>
              <div className="Change_Visitschememain-info-row">
                <span className="Change_Visitschememain-label">Contact No:</span>
                <span className="Change_Visitschememain-value">8382883822</span>
              </div>
              <div className="Change_Visitschememain-info-row">
                <span className="Change_Visitschememain-label">Visit Type:</span>
                <span className="Change_Visitschememain-value">Inpatient</span>
              </div>
              <div className="Change_Visitschememain-info-row">
                <span className="Change_Visitschememain-label">Inpatient No:</span>
                <span className="Change_Visitschememain-value">H2400025</span>
              </div>
              <div className="Change_Visitschememain-info-row">
                <span className="Change_Visitschememain-label">Address:</span>
                <span className="Change_Visitschememain-value">Pune, Maharashtra</span>
              </div>
            </div>

            <div className="Change_Visitschememain-scheme-info">
              <span className="Change_Visitschememain-label">Current Scheme:</span>
              <span className="Change_Visitschememain-value">General</span>
              <span className="Change_Visitschememain-label">Current Price Category:</span>
              <span className="Change_Visitschememain-value">Normal</span>
            </div>

            <div className="Change_Visitschememain-change-form">
              <h3>Change To:</h3>
              <div className="Change_Visitschememain-form-row">
                <label>Select New Scheme:</label>
                <select>
                  <option>---Select New Scheme---</option>
                </select>
              </div>
              <div className="Change_Visitschememain-form-row">
                <label>Select New Price Category:</label>
                <select>
                  <option>---Select New Price Category---</option>
                </select>
              </div>
              <div className="Change_Visitschememain-form-row">
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
          <div className="Change_Visitschememain-popup">
            <div className="Change_Visitschememain-popup-content">
              <h2>Confirm!</h2>
              <p>Are you sure you want to save?</p>
              <div className="Change_Visitschememain-popup-buttons">
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
