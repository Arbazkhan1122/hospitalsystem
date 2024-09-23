import React, { useRef, useState } from 'react';
import './ClinicalBloodSugarMonitoring.css';
import { startResizing } from '../TableHeadingResizing/resizableColumns';

const ClinicalBloodSugarMonitoring = () => {
  const [columnWidths,setColumnWidths] = useState({});
  const tableRef = useRef(null);
  const [showForm, setShowForm] = useState(false);

  const handleAddNew = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div className="clinical-blood-sugar-monitoring-container">
      <div className="clinical-blood-sugar-monitoring-header">
        <h2 className='clinical-blood-sugar-monitoring-title'>Blood Sugar Monitoring</h2>
        <button className="clinical-blood-sugar-monitoring-add-new" onClick={handleAddNew}>
          + Add New
        </button>
      </div>
      
      <div className="clinical-blood-sugar-monitoring-main-content">
        {/* Left Panel with Table */}
        <div className="clinical-blood-sugar-monitoring-left-panel">
        <table className="patientList-table" ref={tableRef}>
          <thead>
            <tr>
              {[
                 "Date",
  "Time",
  "RBS",
  "Insulin",
  "Entered By",
  "Remarks"
              ].map((header, index) => (
                <th
                  key={index}
                  style={{ width: columnWidths[index] }}
                  className="resizable-th"
                >
                  <div className="header-content">
                    <span>{header}</span>
                    <div
                      className="resizer"
                      onMouseDown={startResizing(
                        tableRef,
                        setColumnWidths
                      )(index)}
                    ></div>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
            <tbody>
              <tr>
                <td colSpan="6" className="clinical-blood-sugar-monitoring-no-rows">No Rows To Show</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        {/* Form on the right, only visible when 'Add New' is clicked */}
        {showForm && (
          <div className="clinical-blood-sugar-monitoring-right-panel">
            <div className="clinical-blood-sugar-monitoring-header">
              <h3>Blood Sugar New Entry</h3>
              <button className="clinical-blood-sugar-monitoring-close" onClick={handleCloseForm}>
                ✖
              </button>
            </div>
            
            <div className="clinical-blood-sugar-monitoring-patient-info">
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
            
            <div className="clinical-blood-sugar-monitoring-entry-fields">
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
            
            <div className="clinical-blood-sugar-monitoring-form-buttons">
              <button className="clinical-blood-sugar-monitoring-discard" onClick={handleCloseForm}>
                Discard
              </button>
              <button className="clinical-blood-sugar-monitoring-save">Save</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClinicalBloodSugarMonitoring;
