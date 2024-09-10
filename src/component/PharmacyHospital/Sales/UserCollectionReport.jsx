import React from 'react';
import './UserCollectionReport.css';

const UserCollectionReport = () => {
  return (
    <div className="user-collection-report-container">
      <h2 className='user-collection-header'> ⚛ User Collection Report (Detailed)</h2>
      <div className="user-collection-filter-section">
        <div className="user-collection-date-range">
          <label>From: </label>
          <input className='user-collection-input' type="date" />
          <label>To: </label>
          <input type="date" className="user-collection-date-input" />
          <button className="user-collection-filter-btn">★</button>
        </div>
        <div className="user-collection-input-group">
          <label>Select Dispensary:</label>
          <input type="text" placeholder="Enter Dispensary Name" />
        </div>
        <div className="user-collection-select-group">
          <label>Counter: </label>
          <select>
            <option>All</option>
          </select>
          <label>User: </label>
          <select>
            <option>All</option>
          </select>
        </div>
        <button className="user-collection-show-report-btn">Show Report</button>
      </div>
      <div className="user-collection-table-actions">
        <div className="-user-collectionsearch-container">
        <input type="text" className="user-collection-search-input" placeholder="Search" />
        <button className="user-collection-search-btn">🔍</button>
        </div>
        <div className="user-collection-export-buttons">
          <button className="user-collection-export-btn">Export</button>
          <button className="user-collection-print-btn">Print</button>
        </div>
      </div>
      <div className='user-collection-ta'>
      <table className="user-collection-report-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Type</th>
            <th>Receipt No</th>
            <th>Hospital</th>
            <th>Patient Name</th>
            <th>SubTotal</th>
            <th>Discount</th>
            <th>Net Total</th>
            <th>Cash Collected</th>
            <th>User</th>
            <th>Remarks</th>
            <th>Counter</th>
            <th>Store</th>
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
