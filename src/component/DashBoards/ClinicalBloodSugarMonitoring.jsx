import React from 'react';
import './ClinicalBloodSugarMonitoring.css';

const ClinicalBloodSugarMonitoring = () => {
  return (
    <div className="blood-sugar-monitoring-container">
      <div className="blood-sugar-monitoring-header">
        <h2 className='blood-sugar-monitoring-header'>Blood Sugar Monitoring</h2>
        <button className="blood-sugar-monitoring-add-new">+ Add New</button>
        <h3>Blood Sugar New Entry</h3>
        <button className="blood-sugar-monitoring-close">×</button>
      </div>
      
      <div className="blood-sugar-monitoring-main-content">
        <div className="blood-sugar-monitoring-left-panel">
          <div className="blood-sugar-monitoring-search-bar">
            <input type="text" placeholder="Search" />
            <button>🔍</button>
          </div>
          
          <div className="blood-sugar-monitoring-results">
            <span>Showing 0 / 0 results</span>
            <button className="blood-sugar-monitoring-print">Print</button>
          </div>
          
          <table className='blood-sugar-monitoring'>
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
                <td colSpan="6" className="blood-sugar-monitoring-no-rows">No Rows To Show</td>
              </tr>
            </tbody>
          </table>
          
          {/* <div className="pagination">
            <span>0 to 0 of 0</span>
            <button>First</button>
            <button>Previous</button>
            <span>Page 0 of 0</span>
            <button>Next</button>
            <button>Last</button>
          </div> */}
        </div>
        
        <div className="blood-sugar-monitoring-right-panel">
          <div className="blood-sugar-monitoring-patient-info">
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
          
          <div className="blood-sugar-monitoring-entry-fields">
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
          
          <div className="blood-sugar-monitoring-form-buttons">
            <button className="blood-sugar-monitoring-discard">Discard</button>
            <button className="blood-sugar-monitoring-save">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClinicalBloodSugarMonitoring;
