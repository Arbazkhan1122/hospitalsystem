import React from 'react';
import './ReturnToSupplier.css';

const ReturnToSupplier = () => {
  return (
    <div className="return-purchase-order-container">
      <div className="return-purchase-report-header">
        <h2> ⚛ Return To Supplier Report</h2>
      </div>

      <div className="return-purchase-filters-container">
        <div className="return-purchase-date-range">
          <label>From:</label>
          <input type="date" />
          <label>To:</label>
          <input type="date" />
          <button className="return-purchase-favorite-btn">★</button>
          <button className="return-purchase-reset-btn">-</button>
        </div>
        <div className="return-purchase-status-container">
          <label>Status Name:</label>
          <select>
            <option>All</option>
            {/* Add more options here */}
          </select>
        </div>
        <button className="return-purchase-show-report-btn">🔍 Show Report</button>
      </div>

      <div className="return-purchase-search-and-actions">
        <input type="text" placeholder="Search" />
        <button className="return-purchase-export-btn">Export</button>
        <button className="return-purchase-print-btn">Print</button>
      </div>

     <div className='return-purchase-order-purchase'>
     <table className="return-purchase-report-table">
        <thead>
          <tr>
            <th>SN</th>
            <th></th>
            <th>Supplier Name</th>
            <th>Generic Name</th>
            <th>Item Name</th>
            <th>Return Data</th>
            <th>Qty</th>
            <th>Sub Total</th>
            <th>Dis Amt</th>
            <th>VAT Amt</th>
            <th>Total Amt</th>
            <th>Supplier CreditNote Num</th>


          </tr>
        </thead>
        <tbody>
          <tr className="return-purchase-no-rows">
            <td colSpan="10">No Rows To Show</td>
          </tr>
        </tbody>
      </table>

      <div className="return-purchase-pagination">
        <span>0 to 0 of 0 results</span>
        <div className="return-purchase-pagination-controls">
          <button>First</button>
          <button>Previous</button>
          <span>Page 0 of 0</span>
          <button>Next</button>
          <button>Last</button>
        </div>
      </div>
     </div>
    </div>
  );
};

export default ReturnToSupplier;
