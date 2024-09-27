import React, { useState } from 'react';
import './exchangebed.css'; 

const ExchangeBed = () => {
  const [desiredBed, setDesiredBed] = useState('');

  const handleDesiredBedChange = (event) => {
    setDesiredBed(event.target.value);
  };

  const handleSave = () => {
    
    console.log('Saving...', desiredBed);
  };

  const handleDiscard = () => {
    // Discard logic (reset or navigate away)
    setDesiredBed('');
    console.log('Changes discarded');
  };

  return (
    <div className="adt-exchange-bed-page-container">
      <h2>Exchange Bed</h2>
      {/* <label htmlFor="">search patient</label> */}
      <input type="text" defaultValue="" className="adt-exchange-bed-page-input"  />

      <div className="adt-exchange-bed-page-bed-info-container">
        {/* Current Bed Information */}
        <div className="adt-exchange-bed-page-info-section">
          <center><h6>Current Bed Information</h6></center>
          <p><strong>Ward:</strong> Male Ward</p>
          <p><strong>Bed Feature:</strong> Male Ward</p>
          <p><strong>Bed:</strong> Male Ward-001</p>
        </div>

        {/* Desired Bed Information */}
        <div className="adt-exchange-bed-page-info-section">
         <center> <h6>Desired Bed Information</h6></center>
          <p><strong>Ward:</strong> Male Ward</p>
          <p><strong>Bed Feature:</strong> Male Ward</p>
          <div>
            <label><strong>Bed:</strong></label>
            <select value={desiredBed} onChange={handleDesiredBedChange} className="adt-exchange-bed-page-select">
              <option value="">Select desired bed</option>
              <option value="Male Ward-002">Male Ward-002</option>
              <option value="Male Ward-003">Male Ward-003</option>
              {/* Add more options as needed */}
            </select>
          </div>
        </div>
      </div>

      <div className="adt-exchange-bed-page-button-container">
        <button className="adt-exchange-bed-page-discard-button" onClick={handleDiscard}>Discard</button>
        <button className="adt-exchange-bed-page-save-button" onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};

export default ExchangeBed;