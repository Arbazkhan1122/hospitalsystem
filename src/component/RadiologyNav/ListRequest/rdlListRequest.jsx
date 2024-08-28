
import React, { useState } from 'react';
import "../ListRequest/rdlListRequest.css";
import AddReportForm from './rdlAddReport';
import RDLAddScanDoneDetails from './rdlScanDone';

function RDLListRequest() {
  const [showAddReport, setShowAddReport] = useState(false);
  const [showScanDone, setShowScanDone] = useState(false);

  const handleAddReportClick = () => {
    setShowAddReport(true);
  };

  const handleScanDoneClick = () => {
    setShowScanDone(true);
  };

  const closePopups = () => {
    setShowAddReport(false);
    setShowScanDone(false);
  };

  return (
    <div className="rDLListRequest-active-imaging-request">
      <header>
        <h4>* ACTIVE IMAGING REQUEST</h4>
        <div className="rDLListRequest-filter">
          <label>
            Filter
            <select defaultValue="--All--">
              <option>--All--</option>
              <option>CT-SCAN</option>
              <option>USG</option>
              <option>X-RAY</option>
              <option>ECHO</option>
            </select>
          </label>
        </div>
      </header>
      <div className="rDLListRequest-controls">
        <div className="rDLListRequest-date-range">
          <label>
            From:
            <input type="date" defaultValue="2024-08-09" />
          </label>
          <label>
            To:
            <input type="date" defaultValue="2024-08-16" />
          </label>
          <button className="rDLListRequest-star-button">☆</button>
          <button className="rDLListRequest-ok-button">OK</button>
        </div>
      </div>
      <div className="rDLListRequest-search-N-results">
        <div className="rDLListRequest-search-bar">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="Search" />
        </div>
        <div className="rDLListRequest-results-info">
          Showing 2 / 2 results
        </div>
      </div>
      <div className="rDLListRequest-table-N-paginat">
        <table>
          <thead>
            <tr>
              <th>Requested On ↓</th>
              <th>Hospital Number</th>
              <th>Patient Name</th>
              <th>Age/Sex</th>
              <th>Prescriber</th>
              <th>Type</th>
              <th>Imaging Name</th>
              <th>Insurance</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2024-08-16</td>
              <td>2408003817</td>
              <td>Sachin Ramesh</td>
              <td>50Y / M</td>
              <td>Dr. Pooja Mishra</td>
              <td>X-RAY</td>
              <td>USG Chest</td>
              <td></td>
              <td>
                <button
                  className="action-button add-report"
                  onClick={handleAddReportClick}
                >
                  Add Report
                </button>
              </td>
            </tr>
            <tr>
              <td>2024-08-16</td>
              <td>2408003817</td>
              <td>Sachin Ramesh</td>
              <td>50Y / M</td>
              <td>Dr. Pooja Mishra</td>
              <td>CT-SCAN</td>
              <td>CT-Neck</td>
              <td></td>
              <td>
                <button
                  className="action-button scan-done"
                  onClick={handleScanDoneClick}
                >
                  Scan Done
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="rDLListRequest-pagination">
          <span>0 to 0 of 0</span>
          <button>First</button>
          <button>Previous</button>
          <span>Page 0 of 0</span>
          <button>Next</button>
          <button>Last</button>
        </div>
      </div>

      {showAddReport && <AddReportForm />}
      {showScanDone && <RDLAddScanDoneDetails onClose={closePopups} />}
    </div>
  );
}

export default RDLListRequest;
