import React from 'react';
import './InPatientReport.css';

const InpatientCensus = () => {
  return (
    <div className="inpatient-census-report-range-container">
        <h3 className="user-collection-report-title">⚛ Inpatient Census Report</h3>

      <div className="inpatient-census-report-range-date-range-container">
        <label>From: </label>
        <input type="date" defaultValue="2024-09-01" />
        <label>To: </label>
        <input type="date" defaultValue="2024-09-01" />
        <button className="inpatient-census-report-range-show-report-button">Show Report</button>
      </div>

      <div className="inpatient-census-report-range-totals-container">
  <div className="inpatient-census-report-range-totals">
    Total Admitted: 0  Total Discharged: 0
  </div>
</div>


      <div className="inpatient-census-report-range-census-header">
        <h3>Inpatient Census (All Wards) for the selected dates</h3>
      </div>

      <table className="inpatient-census-report-range-census-table">
        <thead>
          <tr>
            <th>Ward Name</th>
            <th>In Bed <i className="inpatient-census-report-range-info-icon">i</i></th>
            <th>New Admission</th>
            <th>Trans IN</th>
            <th>Trans OUT</th>
            <th>Discharged</th>
            <th>Total Pt. <i className="inpatient-census-report-range-info-icon">i</i></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Brain Ward</td>
            <td>1</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>1</td>
          </tr>
          <tr>
            <td>Female Ward</td>
            <td>3</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>3</td>
          </tr>
          <tr>
            <td>ICU</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>Male Ward</td>
            <td>4</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>4</td>
          </tr>
          <tr>
            <td>Maternity Ward</td>
            <td>1</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>1</td>
          </tr>
          <tr>
            <td>Private Ward</td>
            <td>1</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>1</td>
          </tr>
          <tr className="inpatient-census-report-range-totals-row">
            <td>All Wards</td>
            <td>10</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>10</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default InpatientCensus;
