import React from 'react';
import './OpeningStockEvaluation.css';

const OpeningStockValuation = () => {
  return (
    <div className="suppp-container">
    
      <div className="suppp-content">
        <h2 className="suppp-title">
          <span className="suppp-icon">✱</span> Opening Stock Valuation Report
        </h2>
        <div className="suppp-filters">
          <div className="suppp-date-range">
            <label>Opening On Date:</label>
            <input type="date" value="2024-08-23" className="suppp-date-input" />
          </div>
          <select className="suppp-select">
            <option>Select StoreName</option>
          </select>
          <button className="suppp-show-report-btn">Show Report</button>
        </div>
        <div className="suppp-search-bar">
          <input type="text" placeholder="Search" className="suppp-search-input" />
          <div className="suppp-actions">
            <span className="suppp-results">Showing 0 / 0 results</span>
            <button className="suppp-export-btn">Export</button>
            <button className="suppp-print-btn">Print</button>
          </div>
        </div>
        <table className="suppp-table">
          <thead>
            <tr>
              <th>Inventory/SubStore.</th>
              <th>Purchase Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="2" className="suppp-no-rows">No Rows To Show</td>
            </tr>
          </tbody>
        </table>
        <div className="suppp-pagination">
          <span>0 to 0 of 0</span>
          <button className="suppp-page-btn">First</button>
          <button className="suppp-page-btn">Previous</button>
          <span>Page 0 of 0</span>
          <button className="suppp-page-btn">Next</button>
          <button className="suppp-page-btn">Last</button>
        </div>
      </div>
    </div>
  );
};

export default OpeningStockValuation;
