/* Mohini_InsurancePatientReport_WholePage_14/sep/2024 */
import React, { useState } from 'react';
import './InsurancePatientReport.css';

function InsurancePatientReport() {
  const [fromDate, setFromDate] = useState('23-08-2024');
  const [toDate, setToDate] = useState('23-08-2024');
  const [nhif, setNhif] = useState('');
  const [claimCode, setClaimCode] = useState('');
  const [counter, setCounter] = useState('All');
  const [user, setUser] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="insurance-patient-report-container">
      <div className="insurance-patient-report-report-header">
        <h2>⚛ Insurance Patient (BIMA) Report</h2>
        <span className="insurance-patient-report-note">(*Note: Return Sales are not included in this report.)</span>
        
      </div>
      <div className="insurance-patient-report-date-range">
          <label>
            From:
            <input 
              type="date" 
              value={fromDate} 
              onChange={(e) => setFromDate(e.target.value)}
            />
          </label>
          <label>
            To:
            <input 
              type="date" 
              value={toDate} 
              onChange={(e) => setToDate(e.target.value)}
            />
          </label>
          <button className="insurance-patient-report-star-btn">⭐</button>
          <button className="insurance-patient-report-minus-btn">-</button>
        </div>
      <div className="insurance-patient-report-filters">
        <label>
          NHIF:
          <input 
            type="text" 
            value={nhif} 
            onChange={(e) => setNhif(e.target.value)}
          />
        </label>
        <label>
          ClaimCode:
          <input 
            type="text" 
            value={claimCode} 
            onChange={(e) => setClaimCode(e.target.value)}
          />
        </label>
        <label>
          Counter:
          <select value={counter} onChange={(e) => setCounter(e.target.value)}>
            <option value="All">All</option>
          </select>
        </label>
        <label>
          User:
          <select value={user} onChange={(e) => setUser(e.target.value)}>
            <option value="All">All</option>
          </select>
        </label>
        <button className="insurance-patient-report-show-report-btn">Show Report</button>
      </div>
      <input 
          type="text" 
          placeholder="Search" 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      <div className="insurance-patient-report-search-bar">
        
        <span className="insurance-patient-report-results">Showing 0 / 0 results</span>
        <button className="insurance-patient-report-export-btn">Export</button>
        <button className="insurance-patient-report-print-btn">Print</button>
      </div>
<div className='insurance-table-con'>
      <table className='insurance-patient-report-table'>
        <thead>
          <tr>
            <th>Date</th>
            <th>Bill No</th>
            <th>Hospital No</th>
            <th>Patient</th>
            <th>NHIF</th>
            <th>ClaimCode</th>
            <th>SubTotal</th>
            <th>Total</th>
            <th>User</th>
            <th>Counter</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="10" className="insurance-patient-report-no-rows">No Rows To Show</td>
          </tr>
        </tbody>
      </table>

      {/* <div className="insurance-patient-report-pagination">
        <span>0 to 0 of 0</span>
        <button disabled>First</button>
        <button disabled>Previous</button>
        <span>Page 0 of 0</span>
        <button disabled>Next</button>
        <button disabled>Last</button>
      </div> */}
      </div>
      <div className="insurance-patient-report-summary">
        <h3>Summary</h3>
        <p>Total Insurance Sales Value: <span>0</span></p>
      </div>
    </div>
  );
}

export default InsurancePatientReport;
/* Mohini_InsurancePatientReport_WholePage_14/sep/2024 */

