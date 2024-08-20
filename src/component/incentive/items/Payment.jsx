import React, { useState } from 'react';
import './Payment.css';

const Payment = () => {
  const [fromDate, setFromDate] = useState('2024-05-08');
  const [toDate, setToDate] = useState('2024-08-12');
  const [doctorName, setDoctorName] = useState('');

  const handleSearch = () => {
    // Implement search functionality here
    console.log('Searching for doctor:', doctorName);
  };

  return (
    <div className="payment">
      {/* <nav className="payment__nav">
        <button className="payment__nav-button">Invoice</button>
        <button className="payment__nav-button">Invoice-Items</button>
        <button className="payment__nav-button">Bill Sync</button>
        <button className="payment__nav-button payment__nav-button--active">Payment</button>
      </nav> */}
      
      <h2 className="payment__title">
        <span className="payment__icon">*</span> Payment Detail
      </h2>
      
      <div className="payment__content">
        <div className="payment__date-range">
          <label className="payment__label">
            From:
            <input 
              type="date" 
              value={fromDate} 
              onChange={(e) => setFromDate(e.target.value)} 
              className="payment__input"
            />
          </label>
          <label className="payment__label">
            To:
            <input 
              type="date" 
              value={toDate} 
              onChange={(e) => setToDate(e.target.value)} 
              className="payment__input"
            />
          </label>
        </div>
        
        <div className="payment__doctor-search">
          <label className="payment__label">
            Select Doctor * :
            <input 
              type="text" 
              placeholder="Search Doctor Name"
              value={doctorName}
              onChange={(e) => setDoctorName(e.target.value)}
              className="payment__input"
            />
          </label>
          <button onClick={handleSearch} className="payment__search-button">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
