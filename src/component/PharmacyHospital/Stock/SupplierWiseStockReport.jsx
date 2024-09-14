import React, { useState } from 'react';
import './PharmacyExpiryReport.css';

const SupplierWiseStockReport = () => {
  const [fromDate, setFromDate] = useState('24-08-2024');
  const [toDate, setToDate] = useState('24-08-2024');
  const [genericName, setGenericName] = useState('');
  const [itemName, setItemName] = useState('');
  const [selectStore, setSelectStore] = useState('');
  const [nearlyExpired, setNearlyExpired] = useState(false);
  const [expired, setExpired] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="pharmacy-expiry-report-container">
      <h1>⚛ Supplier Wise Stock Report</h1>
      
      <div className="pharmacy-expiry-report-date-range">
        <div>
          <label>From:</label>
          <input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} />
        </div>
        <div>
          <label>To:</label>
          <input type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} />
        </div>
        <button className="pharmacy-expiry-report-star-btn">★</button>
        <button className="pharmacy-expiry-report-dash-btn">-</button>
      </div>

      <div className="pharmacy-expiry-report-filters">
        <div>
          <label>Supplier Name:</label>
          <input type="text" placeholder="--Select Supplier--" value={genericName} onChange={(e) => setGenericName(e.target.value)} />
        </div>
        <div>
          <label>Store Name:</label>
          <input type="text" placeholder="--Select Store--" value={itemName} onChange={(e) => setItemName(e.target.value)} />
        </div>
        <div>
          <label>Item Name:</label>
          <input type="text" placeholder="--Select Item--" value={selectStore} onChange={(e) => setSelectStore(e.target.value)} />
        </div>
        <button className="pharmacy-expiry-report-show-report-btn">🔍 Show Report</button>
      </div>

    

      <div className="pharmacy-expiry-report-search-bar">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button>🔍</button>
      </div>

      <div className="pharmacy-expiry-report-results-info">
        <span>Showing 0 / 0 results</span>
        <button className="pharmacy-expiry-report-export-btn">⬇ Export</button>
        <button className="pharmacy-expiry-report-print-btn">Print</button>
      </div>
   <div className='pharmacy-expiry-report-ta'>
      <table className="pharmacy-expiry-report-expiry-table">
        <thead>
          <tr>
            <th>Opening Stk</th>
            <th>Supplier Name</th>
            <th>Batch No</th>
            <th>ExpiryData</th>
            <th>Generic Name</th>
            <th>Item Name</th>
            <th>Purchase Qty</th>
            <th>Sales Qty</th>
            <th>Return Qty</th>
            <th>Closing Stk</th>
            <th>Store Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="12" className="pharmacy-expiry-report-no-rows">No Rows To Show</td>
          </tr>
        </tbody>
      </table>

      {/* <div className="pharmacy-expiry-report-pagination">
        <span>0 to 0 of 0</span>
        <button>First</button>
        <button>Previous</button>
        <span>Page 0 of 0</span>
        <button>Next</button>
        <button>Last</button>
      </div> */}
      </div>
      {/* <div className="pharmacy-expiry-report-summary">
        <h2>Summary</h2>
        <div>
          <span>Total Cost Value</span>
          <span>0</span>
        </div>
        <div>
          <span>Total Sales Value</span>
          <span>0</span>
        </div>
      </div> */}
    </div>
  );
};

export default SupplierWiseStockReport;