import React from 'react';
import './InvoiceBilling.css';

const NarcoticsSalesReport = () => {
  return (
    <div className="invoice-billing-report-container">
      <h1 className="invoice-billing-report-title">⚛ Narcotics Daily Sales Summary Report</h1>
      <div className="invoice-billing-note">*Note: Return Sales are not included in this report.</div>

      <div className="invoice-billing-filters-container">
       
          <label>From:</label>
          <input type="date" value="2024-08-23" />
      
        
      
          <label>To:</label>
          <input type="date" value="2024-08-23" />
       
          <button className="invoice-billing-favorite-btn">★</button>
          <button className="invoice-billing-reset-btn">-</button>
      <div className='sales-invoice-number'>
      <label>Select Item :</label>
          <input type="text" placeholder="Enter Invoice Number" />
       
      </div>
          
        
        <button className="invoice-billing-show-report-button">Show Report</button>
      </div>
      
      
      <div className="invoice-billing-search-export-container">
        <div className="invoice-billing-search-bar">
          <input type="text" placeholder="Search" />
          <button className="invoice-billing-search-button"><i className="fa fa-search"></i></button>
        </div>
        
        <div className="invoice-billing-export-print-buttons">
        <div className="invoice-billing-pagination-info">Showing 0 / 0 results</div>

          <button className="invoice-billing-export-button">Export</button>
          <button className="invoice-billing-print-button">Print</button>
        </div>
      </div>
      <div className='sales-invoice-billing-tab'>
      <table className="invoice-billing-sales-table">
        <thead>
          <tr>
            <th>InvoiceNo</th>
            <th>date</th>
            <th>Generic Name</th>
            <th>MedicineName</th>
            <th>Patient</th>
            <th>Doctor</th>
            <th>NMC No</th>
            <th>Batch No</th>
            <th>Quantity</th>
            <th>SalePrice</th>
            <th>TotalAmount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="12" className="invoice-billing-no-rows">No Rows To Show</td>
          </tr>
        </tbody>
      </table>
      
      <div className="invoice-billing-pagination-container">
        
        <div className="invoice-billing-pagination-buttons">
          <button className="invoice-billing-pagination-button">First</button>
          <button className="invoice-billing-pagination-button">Previous</button>
          <span>Page 0 of 0</span>
          <button className="invoice-billing-pagination-button">Next</button>
          <button className="invoice-billing-pagination-button">Last</button>
        </div>
      </div>
      </div>

    </div>
  );
};

export default NarcoticsSalesReport;
