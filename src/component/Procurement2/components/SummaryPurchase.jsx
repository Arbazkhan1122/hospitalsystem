import React, { useState } from 'react';
import './SummaryPurchase.css';

const PurchaseSummaryReport = () => {
  const [fromDate, setFromDate] = useState('14-08-2024');
  const [toDate, setToDate] = useState('21-08-2024');
  const [vendorName, setVendorName] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="PurchaseSummaryReport-container summ">
      <h1 className="PurchaseSummaryReport-header summ">📊 Purchase Summary Report</h1>
      
      <div className="PurchaseSummaryReport-date-container summ">
        <label>From:</label>
        <input
          type="date"
          value={fromDate}
          onChange={(e) => setFromDate(e.target.value)}
          className="PurchaseSummaryReport-input summ"
        />
        <label>To:</label>
        <input
          type="date"
          value={toDate}
          onChange={(e) => setToDate(e.target.value)}
          className="PurchaseSummaryReport-input summ"
        />
        <span>☆</span>
        <span>-</span>
        <label>Vendor:</label>
        <input
          type="text"
          value={vendorName}
          onChange={(e) => setVendorName(e.target.value)}
          placeholder="Vendor Name"
          className="PurchaseSummaryReport-input summ"
        />
        <button className="PurchaseSummaryReport-button PurchaseSummaryReport-load-button summ">🔍 Load</button>
      </div>

      <div className="PurchaseSummaryReport-search-container summ">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search"
          className="PurchaseSummaryReport-input summ"
        />
        <span>Showing 0 / 0 results</span>
        <button className="PurchaseSummaryReport-button summ">Export</button>
        <button className="PurchaseSummaryReport-button summ">Print</button>
      </div>

      <table className="PurchaseSummaryReport-table summ">
        <thead>
          <tr>
            <th>G...</th>
            <th>GR...</th>
            <th>Ven...</th>
            <th>Vendor Na...</th>
            <th>Vendor ...</th>
            <th>Bill No</th>
            <th>SubTotal</th>
            <th>Discount</th>
            <th>VAT</th>
            <th>Other ...</th>
            <th>Total A...</th>
            <th>Pay ...</th>
            <th>Remarks</th>
            <th>A...</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="14" className="PurchaseSummaryReport-no-rows summ">No Rows To Show</td>
          </tr>
        </tbody>
      </table>

      <div className="PurchaseSummaryReport-pagination summ">
        <span>0 to 0 of 0</span>
        <button className="PurchaseSummaryReport-pagination-button summ">First</button>
        <button className="PurchaseSummaryReport-pagination-button summ">Previous</button>
        <span>Page 0 of 0</span>
        <button className="PurchaseSummaryReport-pagination-button summ">Next</button>
        <button className="PurchaseSummaryReport-pagination-button summ">Last</button>
      </div>

      <div className="PurchaseSummaryReport-summary summ">
        <h2 className="PurchaseSummaryReport-summary-header summ">Purchase Summary</h2>
        <table className="PurchaseSummaryReport-summary-table summ">
          <thead>
            <tr>
              <th>Sub Total</th>
              <th>Discount</th>
              <th>VAT</th>
              <th>Other Charges</th>
              <th>Total Amount</th>
            </tr>
          </thead>
          <tbody>
            {/* Add summary data rows here */}
          </tbody>
        </table>
      </div>

      <button className="PurchaseSummaryReport-button PurchaseSummaryReport-print-button summ">🖨 Print</button>
    </div>
  );
};

export default PurchaseSummaryReport;
