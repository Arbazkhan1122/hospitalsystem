import React from 'react';
import '../NavBarSection/finalReports.css';

const FinalReports = () => (
  <div className="final-reports">
    <h2>Final Reports</h2>
    <div className="header">
      <div className="date-filter">
        <label>Reporting Date:</label>
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
            <th>Age</th>
            <th>Phone Number</th>
            <th>Test Name</th>
            <th>Report Generated</th>
            <th>Request</th>
            <th>Run</th>
            <th>Bar Code</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="10" className="loading">Loading...</td>
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

export default FinalReports;
