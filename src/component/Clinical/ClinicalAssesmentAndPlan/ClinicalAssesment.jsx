import React, { useState } from "react";
import "./clinicalAssesment.css";

function ClinicalAssessment() {
  const [activeTab, setActiveTab] = useState("Lab");

  return (
    <div className="ClinicalAssessment">
      <div className="ClinicalAssessment-patientInfo">
        <label>
          Select Patient :
          <input
            className="ClinicalAssessment-searchInput"
            type="text"
            placeholder="Search By Hospital No/Patient Name"
          />
        </label>
        <div className="ClinicalAssessment-patientDetails">
          <p>Patient Name:</p>
          <p>Age/Sex:</p>
          <p>Address:</p>
          <p>Hospital No:</p>
          <p>Contact No:</p>
        </div>
      </div>

      <div className="ClinicalAssessment-mainsection">
        <div className="ClinicalAssessment-displayName">
          <textarea rows={10} placeholder="Display Name" />
        </div>

        <div className="ClinicalAssesment-tablesection">
          <div className="ClinicalAssessment-investigation">
            <h2>Investigation</h2>
            <div className="ClinicalAssessment-tabs">
              <button
                className={`ClinicalAssessment-tab ${
                  activeTab === "Lab" ? "active" : ""
                }`}
                onClick={() => setActiveTab("Lab")}
              >
                Lab
              </button>
              <button
                className={`ClinicalAssessment-tab ${
                  activeTab === "Imaging" ? "active" : ""
                }`}
                onClick={() => setActiveTab("Imaging")}
              >
                Imaging
              </button>
              <button
                className={`ClinicalAssessment-tab ${
                  activeTab === "Requested" ? "active" : ""
                }`}
                onClick={() => setActiveTab("Requested")}
              >
                Requested
              </button>
            </div>
            <table className="ClinicalAssessment-table">
              <thead>
                <tr>
                  <th>Investigation Name</th>
                  {activeTab === "Requested" && <th>Type</th>}
                  <th>Result</th>
                </tr>
              </thead>
              <tbody>{/* Add table rows here */}</tbody>
            </table>
          </div>

          <div className="ClinicalAssessment-medication">
            <h2>Medication</h2>
            <table className="ClinicalAssessment-table">
              <thead>
                <tr>
                  <th>Generic Name</th>
                  <th>Brand</th>
                  <th>Frequency</th>
                  <th>Dose</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>{/* Add table rows here */}</tbody>
            </table>
          </div>

          <div className="ClinicalAssessment-followUp">
            <label>Follow Up Date:</label>
            <input type="date" defaultValue="2024-08-19" />
          </div>

          <div className="ClinicalAssessment-actions">
            <button className="ClinicalAssessment-button ClinicalAssessment-bookAdmission">
              Book Admission
            </button>
            <button className="ClinicalAssessment-button ClinicalAssessment-saveData">
              Save Data
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClinicalAssessment;
