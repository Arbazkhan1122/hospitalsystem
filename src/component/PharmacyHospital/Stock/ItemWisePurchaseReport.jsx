import React, { useState } from 'react';
import './PharmacyExpiryReport.css';

const ItemWisePurchaseReport = () => {
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
      <h1>⚛ Item Wise Purchase Report</h1>
      
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
          <label>Ward:</label>
          <input type="text" placeholder="--Select Ward--" value={genericName} onChange={(e) => setGenericName(e.target.value)} />
        </div>
        <div>
          <label>Item:</label>
          <input type="text" placeholder="--Select Item--" value={itemName} onChange={(e) => setItemName(e.target.value)} />
        </div>
       
        <button className="pharmacy-expiry-report-show-report-btn">🔍 Show Report</button>
      </div>

      {/* <div className="pharmacy-expiry-report-checkboxes">
        <label>
          <input type="checkbox" checked={nearlyExpired} onChange={(e) => setNearlyExpired(e.target.checked)} />
          Nearly Expired Item
        </label>
        <label>
          <input type="checkbox" checked={expired} onChange={(e) => setExpired(e.target.checked)} />
          Expired Item
        </label>
      </div> */}

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
   <div className='pharmacy-expiry-report-table-container'>
    <table className="pharmacy-expiry-report-expiry-table">
      <thead>
        <tr>
          <th>Ward Name</th>
          
          <th>Issue No</th>
          <th>Req No</th>
          <th>Item Code</th>
          <th>Item Name</th>
          <th>Exp Date</th>
          <th>Batch</th>
          <th>Qty</th>
          <th>C.P</th>
          <th>Dispatch Value</th>
          <th>Supply Value</th>
          <th>Received By</th>
          <th>Consumed Qty</th>
          <th>Consumed Value</th>
          <th>Balance Qty</th>
          <th>Balance Value</th>


        </tr>
      </thead>
      <tbody>
        <tr>
          <td colSpan="16" className="pharmacy-expiry-report-no-rows">No Rows To Show</td>
        </tr>
      </tbody>
    </table>
  </div>
      <div className="pharmacy-expiry-report-pagination">
        <span>0 to 0 of 0</span>
        <button>First</button>
        <button>Previous</button>
        <span>Page 0 of 0</span>
        <button>Next</button>
        <button>Last</button>
      </div>
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

export default ItemWisePurchaseReport;