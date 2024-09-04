import React from 'react';
import './ClinicalBloodSugarMonitoring.css';

const ClinicalBloodSugarMonitoring = () => {
  return (
    <div className="blood-sugar-monitoring">
      <div className="header">
        <h2>Blood Sugar Monitoring</h2>
        <button className="add-new">+ Add New</button>
        <h3>Blood Sugar New Entry</h3>
        <button className="close">×</button>
      </div>
      
      <div className="main-content">
        <div className="left-panel">
          <div className="search-bar">
            <input type="text" placeholder="Search" />
            <button>🔍</button>
          </div>
          
          <div className="results">
            <span>Showing 0 / 0 results</span>
            <button className="print">Print</button>
          </div>
          
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th>RBS</th>
                <th>Insulin</th>
                <th>Entered By</th>
                <th>Remarks</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="6" className="no-rows">No Rows To Show</td>
              </tr>
            </tbody>
          </table>
          
          <div className="pagination">
            <span>0 to 0 of 0</span>
            <button>First</button>
            <button>Previous</button>
            <span>Page 0 of 0</span>
            <button>Next</button>
            <button>Last</button>
          </div>
        </div>
        
        <div className="right-panel">
          <div className="patient-info">
            <div>
              <label>Hospital No :</label>
              <input type="text" />
            </div>
            <div>
              <label>Patient :</label>
              <input type="text" />
            </div>
            <div>
              <label>Age/Sex :</label>
              <input type="text" />
            </div>
            <div>
              <label>DOA :</label>
              <input type="text" />
            </div>
            <div>
              <label>Bed No :</label>
              <input type="text" />
            </div>
          </div>
          
          <div className="entry-fields">
            <div>
              <label>RBS :</label>
              <input type="text" placeholder="RBS" />
            </div>
            <div>
              <label>Insulin :</label>
              <input type="text" placeholder="Insulin" />
            </div>
            <div>
              <label>Remarks :</label>
              <input type="text" placeholder="Remarks" />
            </div>
          </div>
          
          <div className="form-buttons">
            <button className="discard">Discard</button>
            <button className="save">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClinicalBloodSugarMonitoring;
