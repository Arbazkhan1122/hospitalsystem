import React from 'react';
import "../NavBarSection/pendingReports.css"
const PendingReports = () => (
  <div className="work-list">
    <h2>Pending Reports</h2>
    <div className="header">
      <div className="date-filter">
        <label>From: <input type="date" /></label>
        <label>To: <input type="date" /></label>
      </div>
      <div className="category-dropdown">
        <label>Category: 
          <select>
            <option value="">--Select Lab Category--</option>
            {/* Add options here */}
          </select>
        </label>
        <button className="load-button">Load</button>
      </div>
    </div>

    <input type="text" placeholder="Search..." className="search-bar" />

    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Hospital</th>
            <th>Patient Name</th>
            <th>Age/Sex</th>
            <th>Phone Number</th>
            <th>Test Name</th>
            <th>Request</th>
            <th>Run</th>
            <th>Bar Code</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="9" className="loading">Loading...</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="pagination">
      <button>First</button>
      <button>Previous</button>
      <span>Page 0 of 0</span>
      <button>Next</button>
      <button>Last</button>
    </div>

    <button className="print-button">Print</button>
  </div>
);

export default PendingReports;
