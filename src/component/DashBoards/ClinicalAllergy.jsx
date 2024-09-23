import React, { useRef, useState } from 'react';
import './ClinicalAllergy.css'; // Separate CSS file
import { startResizing } from '../TableHeadingResizing/resizableColumns';

const Allergy = ({patientId,newPatientVisitId}) => {
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
    <div className="allergy-container">
      <div className="allergy-list">
        <div className='allergy-list-subdiv'>
        <h3>Allergy List</h3>
        <button className="allergy-add-new-button" onClick={handleAddNew}>
          + Add New
        </button>
        </div>
        <table className="patientList-table" ref={tableRef}>
          <thead>
            <tr>
              {[
                  "Recorded On",
                  "Allergen",
                  "Severity",
                  "Reaction",
                  "Verified",
                  "Comments",
                  "Edit"
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
            {/* Allergy data rows will go here */}
          </tbody>
        </table>
      </div>

      <div className="allergy-add-new-section">
        {showForm && (
          <div className="add-allergy-form">
            <div className="allergy-form-header">
              <h3>Add Allergy</h3>
              <button className="allergy-close-button" onClick={handleCloseForm}>
                ✖
              </button>
            </div>
            <form>
              <div className="allergy-form-row">
                <label>Type Of Allergy*:</label>
                <div className='allergy-form-row-subdiv'>
                <input type="checkbox" /> Medication
                <input type="checkbox" /> Non Medication
                <input type="checkbox" /> Food
                <input type="checkbox" /> AdvRec
                </div>
              </div>
              <div className="allergy-form-row">
                <label>Severity:</label>
                <div className='allergy-form-row-subdiv'>
                <input type="checkbox" /> Mild
                <input type="checkbox" /> Moderate
                <input type="checkbox" /> Severe
                </div>
              </div>
              <div className="allergy-form-row">
                <label>Verified:</label>
                <div className='allergy-form-row-subdiv'>
                <input type="checkbox" /> Unknown
                <input type="checkbox" /> Yes
                <input type="checkbox" checked /> No
                </div>
              </div>
              <div className="allergy-form-row">
                <label>Reaction*:</label>
                <input type="text" placeholder="Reaction" />
              </div>
              <div className="allergy-form-row">
                <label>Comments:</label>
                <textarea placeholder="Comments"></textarea>
              </div>
              <button type="button" className="allergy-add-button">
                Add
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Allergy;
