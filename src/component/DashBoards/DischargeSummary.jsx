import React from "react";
import "./DischargeSummary.css";

const PatientDischargeForm = () => {
  return (
    <div className="pat-container">
      <div className="pat-header">
        <h2>ANGEL VARGAS MONTERO</h2>
        <p><strong>Address:</strong> quinarayan, narvacan, ilocos sur</p>
        <p><strong>Hospital No:</strong> 2407007399</p>
        <p><strong>Admitted On:</strong> 2024-07-30 11:06 AD</p>
        <p><strong>Discharged On:</strong> 2024-08-28 10:57 AD</p>
        <p><strong>Contact No:</strong> 0926641813</p>
        <p><strong>InPatient No:</strong> H2400023</p>
        <p><strong>Ward:</strong> ICU</p>
        <p><strong>Guardian:</strong> S I | Father-in-law</p>
        <p><strong>Bed Number:</strong> 02</p>
      </div>

      <div className="pat-form-section">
        <div className="pat-form-group">
          <label>Discharge Type *</label>
          <input type="text" placeholder="Discharge Type" />
        </div>

        <div className="pat-form-group">
          <label>Consultant *</label>
          <input type="text" placeholder="Consultant: name" />
          <span className="pat-required-text">Consultant is required</span>
        </div>

        <div className="pat-form-group">
          <label>Doctor Incharge *</label>
          <input type="text" placeholder="Doctor Incharge: name" />
        </div>

        <div className="pat-form-group">
          <label>Anaesthetists *</label>
          <input type="text" placeholder="Anaesthetists: name" />
        </div>

        <div className="pat-form-group">
          <label>Resident Dr</label>
          <input type="text" placeholder="Resident Dr name" />
        </div>

        <div className="pat-form-group">
          <label>Diagnosis</label>
          <input type="text" placeholder="Diagnosis" />
        </div>

        <div className="pat-form-group">
          <label>Select Diagnosis</label>
          <input type="text" placeholder="Select ICD-11(s) for Select Diagnosis" />
        </div>

        <div className="pat-form-group">
          <label>Provisional Diagnosis</label>
          <input type="text" placeholder="Select ICD-11(s) for Provisional Diagnosis" />
        </div>

        <div className="pat-form-group">
          <label>Other Diagnosis</label>
          <input type="text" placeholder="Enter Other Diagnosis" />
        </div>

        <div className="pat-form-group">
          <label>Clinical Findings</label>
          <textarea placeholder="Clinical Findings"></textarea>
        </div>

        <div className="pat-form-group">
          <label>Chief Complaint</label>
          <textarea placeholder="Chief Complaint"></textarea>
        </div>

        <div className="pat-form-group">
          <label>History Of Presenting Illness</label>
          <textarea placeholder="History Of Presenting Illness"></textarea>
        </div>

        <div className="pat-form-group">
          <label>Treatment During Hospital Stay</label>
          <textarea placeholder="Treatment During Hospital Stay"></textarea>
        </div>

        <div className="pat-form-group">
          <label>Condition On Discharge</label>
          <textarea placeholder="Condition On Discharge"></textarea>
        </div>

        <div className="pat-form-group">
          <label>Pending Reports</label>
          <textarea placeholder="Pending Reports"></textarea>
        </div>

        <div className="pat-form-group">
          <label>Special Notes</label>
          <textarea placeholder="Special Notes"></textarea>
        </div>

        <div className="pat-form-group">
          <label>Allergies</label>
          <textarea placeholder="Allergies"></textarea>
        </div>

        <div className="pat-form-group">
          <label>Discharge Order</label>
          <textarea placeholder="Discharge Order"></textarea>
        </div>

        <div className="pat-form-group">
          <label>Rest Days</label>
          <textarea placeholder="Rest Days"></textarea>
        </div>

        <div className="pat-form-group">
          <label>Follow UP</label>
          <textarea placeholder="Follow UP"></textarea>
        </div>

        <div className="pat-form-group pat-investigations">
          <h3>Investigations</h3>
          <label>Show Result on Report: </label>
          <label><input type="radio" name="result" value="yes" /> Yes</label>
          <label><input type="radio" name="result" value="no" /> No</label>

          <div className="pat-lab-tests">
            <label>Lab Tests</label>
            <ul>
              <li>COVID 19 AG <input type="checkbox" /></li>
            </ul>
            <input type="text" placeholder="Add New Test" />
          </div>

          <div className="pat-imaging">
            <label>Imaging</label>
            <input type="text" placeholder="Dental" />
          </div>

          <div className="pat-medications">
            <h3>Medications</h3>
            <input type="text" placeholder="Enter Medicines" />
            <button className="pat-btn pat-add">+</button>
            <button className="pat-btn pat-remove">x</button>
          </div>
        </div>

        <button className="pat-btn pat-save">Save</button>
      </div>
    </div>
  );
};

export default PatientDischargeForm;