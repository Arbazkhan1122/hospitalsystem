/* Mohini_InvoiceBilling_WholePage_14/sep/2024 */
import React, { useState, useEffect, useRef } from 'react';
import './InvoiceBilling.css';
import { startResizing } from '../../TableHeadingResizing/resizableColumns';
const InvoiceBilling = () => {
  const [columnWidths,setColumnWidths] = useState({});
  const tableRef=useRef(null);
  return (
    <div className="invoice-billing-report-container">
      <h1 className="invoice-billing-report-title">⚛ Bill-wise Sales Report</h1>
      <div className="invoice-billing-note">*Note: Return Sales are not included in this report.</div>

      <div className='invoice-billing-from-to'>
      <div className="invoice-billing-filters-container">
       
       <label>From:</label>
       <input type="date" value="2024-08-23" />
   
     
   
       <label>To:</label>
       <input type="date" value="2024-08-23" />
    
       <button className="invoice-billing-favorite-btn">★</button>
       <button className="invoice-billing-reset-btn">-</button>
   </div>
   <div className='sales-invoice-number'>
   <label>Invoice Number :</label>
       <input type="text" placeholder="Enter Invoice Number" />
       <button className="invoice-billing-show-report-button">Show Report</button>

   </div>
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
      <div className='invpoice-sale-ta'>
  {/* <div className='invoice-billing-table-container'> */}
  <table  ref={tableRef}>
          <thead>
            <tr>
              {[
                  "Invoice Date",
                  "Invoice Number",
                  "Hospital No.",
                  "Patient Name",
                  "SubTotal",
                  "Discount Amount",
                  "Total Amount",
                  "Received Amount",
                  "Credit Amount",
                  "Payment Mode",
                  "Store",
                  "User"          
              ].map((header, index) => (
                <th
                  key={index}
                  style={{ width: columnWidths[index] }}
                  className="resizable-th"
                >
                  <div className="header-content">
                    <span>{header}</span>
                    <div
                      className="resizer"
                      onMouseDown={startResizing(
                        tableRef,
                        setColumnWidths
                      )(index)}
                    ></div>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
      <tbody>
        <tr>
          <td colSpan="12" className="invoice-billing-no-rows">No Rows To Show</td>
        </tr>
      </tbody>
    </table>
  {/* </div> */}
</div>

      {/* <div className="invoice-billing-pagination-container">
        
        <div className="invoice-billing-pagination-buttons">
          <button className="invoice-billing-pagination-button">First</button>
          <button className="invoice-billing-pagination-button">Previous</button>
          <span>Page 0 of 0</span>
          <button className="invoice-billing-pagination-button">Next</button>
          <button className="invoice-billing-pagination-button">Last</button>
        </div>
      </div> */}
      </div>

    </div>
  );
};

export default InvoiceBilling;
/* Mohini_InvoiceBilling_WholePage_14/sep/2024 */
