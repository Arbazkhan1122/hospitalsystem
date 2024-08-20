import React from 'react';
import "../NavBarSection/navReportDispatch.css"

function NavReportDispatch() {
  return (
    <div className="report-dispatch">
      <h1>Report Dispatch</h1>
      <div className="filters">
        <div className="date-range">
          <label>Request Date:</label>
          <label>From:</label>
          <input type="date" value="2024-08-05" />
          <label>To:</label>
          <input type="date" value="2024-08-12" />
          <button className="star-btn">☆</button>
          <button className="more-btn">-</button>
        </div>
        <div className="category-select">
          <label>Category:</label>
          <select>
            <option>--Select Lab Category--</option>
          </select>
        </div>
        <button className="load-btn">Load</button>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search by Hospital No. Or Patient Name" />
        <button className="search-btn">🔍</button>
      </div>
      <table className="patient-table">
        <thead>
          <tr>
            <th>S.N.</th>
            <th>Hospital No.</th>
            <th>Patient Name</th>
            <th>Age/Sex</th>
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

export default NavReportDispatch
;