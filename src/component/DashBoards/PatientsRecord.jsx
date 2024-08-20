import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import { useNavigate } from 'react-router-dom';
import './PatientsRecords.css';

const PatientRecord = () => {
  const componentRef = useRef();
  const navigate = useNavigate();

  const handlePendingListClick = () => {
    navigate('/pending-list');  // Assuming '/pending-list' is the route for the pending list
  };

  return (
    <div className="patient-record">
      <div className="date-range">
        <div>
          <label>From:</label>
          <input type="date" value="2024-08-11" />
        </div>
        <div>
          <label>To:</label>
          <input type="date" value="2024-08-18" />
        </div>
        <button className="star">☆</button>
        <button className="reset">-</button>
        <button className="ok">OK</button>
      </div>

      <div className="actions">
        <button className="favorites">★ My Favorites</button>
        <button className="pending" onClick={handlePendingListClick}>Pending List</button>
        <div className="department-filter">
          <label>Department Filter :</label>
          <select>
            <option>ALL</option>
          </select>
        </div>
      </div>

      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <button>🔍</button>
        <span className="results">Showing 1 / 1 results</span>
        <ReactToPrint
          trigger={() => <button className="print">Print</button>}
          content={() => componentRef.current}
        />
      </div>

      {/* The content to be printed */}
      <div ref={componentRef}>
        <table>
          <thead>
            <tr>
              <th>Hospital No.</th>
              <th>Name</th>
              <th>Age/Sex</th>
              <th>Admission Status</th>
              <th>Admitted On</th>
              <th>Ward-Bed</th>
              <th>Dept</th>
              <th>Provider Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2406003702</td>
              <td>Philip Juma</td>
              <td>34 Y/M</td>
              <td>discharged</td>
              <td>June 10th 2024, 12:57:00 pm</td>
              <td>Male Ward-001</td>
              <td>Medicine</td>
              <td>Mr. COLLINS KIPKEMEI</td>
              <td>
                <button>👤</button>
                <button>🔔</button>
                <button>🖼</button>
                <button>📄</button>
                <button>♥</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="pagination">
        <span>1 to 1 of 1</span>
        <button>First</button>
        <button>Previous</button>
        <span>Page 1 of 1</span>
        <button>Next</button>
        <button>Last</button>
      </div>
    </div>
  );
};

export default PatientRecord;
