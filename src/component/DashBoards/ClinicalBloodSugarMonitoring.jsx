import React, { useRef, useState } from "react";
import "./ClinicalBloodSugarMonitoring.css";
import { startResizing } from "../TableHeadingResizing/resizableColumns";
import axios from "axios";

const ClinicalBloodSugarMonitoring = ({patientId,newPatientVisitId}) => {
  const [columnWidths, setColumnWidths] = useState({});
  const tableRef = useRef(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    hospitalNo: "",
    patientName: "",
    ageSex: "",
    doa: "",
    bedNo: "",
    rbs: "",
    insulin: "",
    remarks: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/blood-sugar-monitoring/add",
        formData
      );
      if (response.status === 200) {
        alert("Data saved successfully");
        handleCloseForm(); // Close the form on success
      }
    } catch (error) {
      console.error("Error saving data:", error);
      alert("Error saving data");
    }
  };

  const handleAddNew = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div className="clinical-blood-sugar-monitoring-container">
      <div className="clinical-blood-sugar-monitoring-header">
        <h2 className="clinical-blood-sugar-monitoring-title">
          Blood Sugar Monitoring
        </h2>
        <button
          className="clinical-blood-sugar-monitoring-add-new"
          onClick={handleAddNew}
        >
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
                  "Remarks",
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
                <td
                  colSpan="6"
                  className="clinical-blood-sugar-monitoring-no-rows"
                >
                  No Rows To Show
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Form on the right, only visible when 'Add New' is clicked */}
        {showForm && (
          <div className="clinical-blood-sugar-monitoring-right-panel">
            <div className="clinical-blood-sugar-monitoring-header">
              <h3>Blood Sugar New Entry</h3>
              <button
                className="clinical-blood-sugar-monitoring-close"
                onClick={handleCloseForm}
              >
                ✖
              </button>
            </div>
            <form onSubmit={handleSubmit}>
      <div className="clinical-blood-sugar-monitoring-patient-info">
        <div>
          <label>Hospital No:</label>
          <input
            type="text"
            name="hospitalNo"
            value={formData.hospitalNo}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Patient:</label>
          <input
            type="text"
            name="patientName"
            value={formData.patientName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Age/Sex:</label>
          <input
            type="text"
            name="ageSex"
            value={formData.ageSex}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>DOA:</label>
          <input
            type="text"
            name="doa"
            value={formData.doa}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Bed No:</label>
          <input
            type="text"
            name="bedNo"
            value={formData.bedNo}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="clinical-blood-sugar-monitoring-entry-fields">
        <div>
          <label>RBS:</label>
          <input
            type="text"
            name="rbs"
            placeholder="RBS"
            value={formData.rbs}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Insulin:</label>
          <input
            type="text"
            name="insulin"
            placeholder="Insulin"
            value={formData.insulin}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Remarks:</label>
          <input
            type="text"
            name="remarks"
            placeholder="Remarks"
            value={formData.remarks}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="clinical-blood-sugar-monitoring-form-buttons">
        <button
          type="button"
          className="clinical-blood-sugar-monitoring-discard"
          onClick={handleCloseForm}
        >
          Discard
        </button>
        <button type="submit" className="clinical-blood-sugar-monitoring-save">
          Save
        </button>
      </div>
    </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClinicalBloodSugarMonitoring;
