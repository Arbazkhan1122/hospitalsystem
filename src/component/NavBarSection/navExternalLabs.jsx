import React from 'react';
import "../NavBarSection/navExternalLabs.css"

function NavExternalLabs() {
  return (
    <div className="external-lab-test-list">
      <h1>External Lab Test List</h1>
      <div className="filters">
        <div className="date-range">
          <label>From:</label>
          <input type="date" value="2024-08-12" />
          <label>To:</label>
          <input type="date" value="2024-08-12" />
          <button className="star-btn">☆</button>
          <button className="more-btn">-</button>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search" />
        </div>
        <div className="vendor-select">
          <label>Vendor:</label>
          <select>
            <option>Shadon</option>
          </select>
        </div>
        <div className="hospital-no">
          <label>Hospital No:</label>
          <input type="text" placeholder="Enter Hospital Number..." />
        </div>
        <div className="lab-tests">
          <label>LabTests:</label>
        </div>
        <div className="patient-name">
          <label>PatientName:</label>
          <input type="text" placeholder="Enter Patient Name" />
        </div>
        <div className="external-lab-status">
          <label>External Lab Status:</label>
          <select>
            <option>Sample Collected</option>
          </select>
        </div>
      </div>
      <div className="action-buttons">
        <button className="load-btn">Load</button>
        <button className="print-btn">Print</button>
        <button className="export-btn">Export</button>
      </div>
      <table className="test-table">
        <thead>
          <tr>
            <th>S.N.</th>
            <th>Patient Name</th>
            <th>Hospital No.</th>
            <th>Test Name</th>
            <th>Vendor Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {/* Table rows would be populated here */}
        </tbody>
      </table>
      <div className="pagination">
        <button>« Previous</button>
        <button>Next »</button>
      </div>
    </div>
  );
}

export default NavExternalLabs;