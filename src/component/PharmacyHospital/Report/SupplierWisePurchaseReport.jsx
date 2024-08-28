import React, { useState } from 'react';
import './SupplierWisePurchaseReport.css';

const SupplierWisePurchaseReport = () => {
  const [fromDate, setFromDate] = useState('23-08-2024');
  const [toDate, setToDate] = useState('23-08-2024');
  const [supplier, setSupplier] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="supplier-wise-purchase-report">
      <h1>⚛ Supplier Wise Purchase Report</h1>
      
      <div className="supplier-wise-purchase-date-range">
        <div>
          <label>From:</label>
          <input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} />
        </div>
        <div>
          <label>To:</label>
          <input type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} />
        </div>
        <button className="supplier-wise-purchase-star-btn">☆</button>
        <button className="supplier-wise-purchase-dash-btn">-</button>
        <div className="supplier-wise-purchase-supplier-selection">
        <label>Supplier Name:</label>
        <select value={supplier} onChange={(e) => setSupplier(e.target.value)}>
          <option value="">--Select Supplier--</option>
        </select>
        <button className="supplier-wise-purchase-show-report-btn">🔍 Show Report</button>
      </div>
      </div>

     

      <div className="supplier-wise-purchase-search-bar">
        <input
      
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)
            
          }
        
        />
        <button>🔍</button>
      </div>

      <div className="supplier-wise-purchase-results-info">
        <span>Showing 0 / 0 results</span>
        <button className="supplier-wise-purchase-export-btn">⬇ Export</button>
        <button className="supplier-wise-purchase-print-btn">Print</button>
      </div>
      <div className='supplier-wise-purchase-com'>
      <table className="supplier-wise-purchase-report-table">
        <thead>
          <tr>
            <th>GoodRe...</th>
            <th>Supplier...</th>
            <th>Bill No</th>
            <th>Item Name</th>
            <th>Generic N...</th>
            <th>BatchNo</th>
            <th>Qu...</th>
            <th>Purchas...</th>
            <th>Su...</th>
            <th>VAT A...</th>
            <th>Total A...</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="12" className="supplier-wise-purchase-no-rows">No Rows To Show</td>
          </tr>
        </tbody>
      </table>

      <div className="supplier-wise-purchase-pagination">
        <span>0 to 0 of 0</span>
        <button>First</button>
        <button>Previous</button>
        <span>Page 0 of 0</span>
        <button>Next</button>
        <button>Last</button>
      </div>
</div>
     
    </div>
  );
};

export default SupplierWisePurchaseReport;