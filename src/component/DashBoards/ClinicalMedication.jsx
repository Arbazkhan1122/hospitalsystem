import React, { useRef, useState } from "react";
import "./ClinicalMedication.css"; // Separate CSS file for uniqueness
import { startResizing } from "../TableHeadingResizing/resizableColumns";

const ClinicalMedication = () => {
  const [columnWidths, setColumnWidths] = useState({});
  const tableRef = useRef(null);
  const [showForm, setShowForm] = useState(false);

  const handleAddClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div className="clinical-medication-container">
      <div className="clinical-medication-list">
        <div className="clinical-medication-list-header">
          <h3>Medication List</h3>
          <button
            className="clinical-medication-add-new-button"
            onClick={handleAddClick}
          >
            + Add New
          </button>
        </div>
        <table className="patientList-table" ref={tableRef}>
          <thead>
            <tr>
              {[
                "Medication Name",
                "Type",
                "Dose",
                "Route",
                "Last Taken",
                "Frequency",
                "Comments",
                "Edit",
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
          <tbody>{/* Medication data rows will go here */}</tbody>
        </table>
      </div>

      <div className="clinical-medication-add-new-section">
        {showForm && (
          <div className="clinical-add-medication-form">
            <div className="clinical-medication-form-header">
              <h3>Add Medication</h3>
              <button
                className="clinical-medication-close-button"
                onClick={handleCloseForm}
              >
                ✖
              </button>
            </div>
            <form>
              <div className="clinical-medication-form-row">
                <label>Type*:</label>
                <div className="clinical-medication-form-row-subdiv">
                  <input type="checkbox" /> Current
                  <input type="checkbox" /> Home
                </div>
              </div>
              <div className="clinical-medication-form-row">
                <label>Name*:</label>
                <input type="text" placeholder="Medication Name" required />
              </div>
              <div className="clinical-medication-form-row">
                <label>Dose*:</label>
                <input type="text" placeholder="Dose" required />
              </div>
              <div className="clinical-medication-form-row">
                <label>Route*:</label>
                <select required>
                  <option value="">Select Route</option>
                  <option value="oral">Oral</option>
                  <option value="iv">IV</option>
                </select>
              </div>
              <div className="clinical-medication-form-row">
                <label>Frequency*:</label>
                <input type="text" placeholder="Frequency" required />
              </div>
              <div className="clinical-medication-form-row">
                <label>Last Taken*:</label>
                <input type="date" required />
              </div>
              <div className="clinical-medication-form-row">
                <label>Comments:</label>
                <textarea placeholder="Comments"></textarea>
              </div>
              <button type="submit" className="clinical-medication-add-button">
                Add
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClinicalMedication;
