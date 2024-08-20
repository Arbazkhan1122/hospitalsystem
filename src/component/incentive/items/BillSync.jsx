import React, { useState } from 'react';
import './BillSync.css';

const BillSync = () => {
  const [fromDate, setFromDate] = useState('2024-05-08');
  const [toDate, setToDate] = useState('2024-08-12');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSync = () => {
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="bill-sync">
      {/* <nav className="bill-sync__nav">
        <button className="bill-sync__nav-button">Invoice</button>
        <button className="bill-sync__nav-button">Invoice-Items</button>
        <button className="bill-sync__nav-button bill-sync__nav-button--active">Bill Sync</button>
        <button className="bill-sync__nav-button">Payment</button>
      </nav> */}
      
      <h2 className="bill-sync__title">Calculate and Load Incentive from Billing</h2>
      
      <div className="bill-sync__date-range">
        <label className="bill-sync__date-range-label">
          From:
          <input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} className="bill-sync__date-range-input" />
        </label>
        <label className="bill-sync__date-range-label">
          To:
          <input type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} className="bill-sync__date-range-input" />
        </label>
      </div>
      
      <button className="bill-sync__sync-button" onClick={handleSync}>
        Sync Billing to Incentives
      </button>
      
      {showSuccess && (
        <div className="bill-sync__success-message">
          <span className="bill-sync__success-checkmark">✓</span>
          <p className="bill-sync__success-text">Success</p>
          <p className="bill-sync__success-text">Successfully Synced Bills to Incentive.</p>
        </div>
      )}
    </div>
  );
};

export default BillSync;
