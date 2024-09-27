/* Mohini_UserCollectionReport_WholePage_14/sep/2024 */
import React, { useState, useEffect, useRef } from 'react';
import './UserCollectionReport.css';
import { startResizing } from '../../TableHeadingResizing/resizableColumns';
const UserCollectionReport = () => {
  const [columnWidths,setColumnWidths] = useState({});
  const tableRef=useRef(null);

  return (
    <div className="user-collection-report-container">
      <h2 className='user-collection-header'> ⚛ User Collection Report (Detailed)</h2>
      <div className="user-collection-filter-section">
        <div className="user-collection-date-range">
          <label>From: </label>
          <input className="user-collection-date-input" type="date" />
          <label>To: </label>
          <input type="date" className="user-collection-date-input" />
          <button className="user-collection-filter-btn">★</button>
        </div>
       
      </div>
                    <div className="item-wise-sales-filter-groups">
                    <label>Select Dispensary:</label>
                    <input type="text" placeholder="Enter Dispensary Name" />

                    
                    <label>Counter: </label>
                  <select>
                 <option>All</option>
                 </select>
                 <label>User: </label>
               <select>
             <option>All</option>
              </select>
              <button className="item-wise-sales-btn">Show Report</button>

                </div>


      <div className="user-collection-table-actions">
        <div className="user-collectionsearch-container">
        <input type="text" className="user-collection-search-input" placeholder="Search" />
        <button className="user-collection-search-btn">🔍</button>
        </div>
        <div className="user-collection-export-buttons">
          <button className="item-wise-sales-btn">Export</button>
          <button className="item-wise-sales-btn">Print</button>
        </div>
      </div>
      <div className='table-container'>
      <table  ref={tableRef}>
          <thead>
            <tr>
              {[
                 "Date",
                 "Type",
                 "Receipt No",
                 "Hospital",
                 "Patient Name",
                 "SubTotal",
                 "Discount",
                 "Net Total",
                 "Cash Collected",
                 "User",
                 "Remarks",
                 "Counter",
                 "Store"
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
            <td colSpan="13" className="user-collectionno-rows">No Rows To Show</td>
          </tr>
        </tbody>
      </table>
      {/* <div className="user-collection-pagination">
        <span>0 to 0 of 0</span>
        <button>First</button>
        <button>Previous</button>
        <span>Page 0 of 0</span>
        <button>Next</button>
        <button>Last</button>
      </div> */}
      </div>
    </div>
  );
};

export default UserCollectionReport;
/* Mohini_UserCollectionReport_WholePage_14/sep/2024 */

