/* Mohini_ReturnFromCustomer_WholePage_14/sep/2024 */
import React, { useState, useEffect, useRef } from 'react';
import './PharmacyExpiryReport.css';
import { startResizing } from '../../TableHeadingResizing/resizableColumns';
const ReturnFromCustomer = () => {
  const [fromDate, setFromDate] = useState('24-08-2024');
  const [toDate, setToDate] = useState('24-08-2024');
  const [genericName, setGenericName] = useState('');
  const [itemName, setItemName] = useState('');
  const [selectStore, setSelectStore] = useState('');
  const [nearlyExpired, setNearlyExpired] = useState(false);
  const [expired, setExpired] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [columnWidths,setColumnWidths] = useState({});
  const tableRef=useRef(null);


  return (
    <div className="pharmacy-expiry-report-container">
      <h1>⚛ Return From Customer Report</h1>
      
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
          <label>Select Dispensary:</label>
          <input type="text" placeholder="--Select Dispensary --" value={genericName} onChange={(e) => setGenericName(e.target.value)} />
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
   <div className='table-container'>
   <table  ref={tableRef}>
          <thead>
            <tr>
              {[
                 "Returned Data",
                 "CRN No",
                 "Reference No",
                 "Hospital No",
                 "Patient",
                 "Generic Name",
                 "Item Name",
                 "Batch No",
                 "Expiry Date",
                 "Ret.Qty",
                 "Sales Price",
                 "Ret.Amount",
                 "Dispensary",
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
            <td colSpan="14" className="pharmacy-expiry-report-no-rows">No Rows To Show</td>
          </tr>
        </tbody>
      </table>
{/* 
      <div className="pharmacy-expiry-report-pagination">
        <span>0 to 0 of 0</span>
        <button>First</button>
        <button>Previous</button>
        <span>Page 0 of 0</span>
        <button>Next</button>
        <button>Last</button>
      </div> */}
      </div>
      <div className="pharmacy-expiry-report-summary">
        <h2>Summary</h2>
        <div>
          <span>Total Returned Amount</span>
         
        </div>
       
      </div>
    </div>
  );
};

export default ReturnFromCustomer;
/* Mohini_ReturnFromCustomer_WholePage_14/sep/2024 */
