import React, { useEffect, useState } from "react";
import "./DischargeSummary.css";
import { API_BASE_URL } from "../api/api";
import axios from "axios";

const PatientDischargeForm = ({ patient }) => {
  console.log(patient);
  
  const dischargedDate = new Date().toLocaleDateString();
  console.log(dischargedDate);
  const [doctors, setDoctors] = useState([]);

  const [formData, setFormData] = useState({
    dischargeDate: dischargedDate,
    dischargedType: "",
    consultant: "",
    doctorIncharge: "",
    anesthetists: "",
    residentDr: "",
    selectDiagnosis: "",
    provisonalDiagnosis: "",
    otherDiagnosis: "",
    clinicalFindings: "",
    cheifComplain: "",
    historyOfPresentingIllness: "",
    treatmentDuringHospitalStay: "",
    conditionOnDischarge: "",
    pendingReport: "",
    specialNotes: "",
    allergies: "",
    dischargeOrder: "",
    restDay: "",
    followUp: "",
    showResult: "",
    labTests: "",
    imaging: "",
    medications: "",
  });

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/employees/get-all-employee`);
        const data = await response.json();
        setDoctors(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching admitting doctors:', error);
      }
    };

    fetchDoctors();
  }, []); // Empty dependency array to run only on mount
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        ...formData,
        patientDTO:{patientId:patient?.patientDTO?.patientId},
      };
      console.log(data);
      
      const response = await axios.post(
        `${API_BASE_URL}/discharge-summaries/save`,
        data
      );

      if (response.status === 200) {
        alert("Discharge summary saved successfully");
      } else {
        alert("Failed to save the discharge summary");
      }
    } catch (error) {
      console.error("Error saving discharge summary:", error);
      alert("An error occurred while saving the discharge summary");
    }
  };
  return (
    <div className="pat-container">
      <div className="pat-header">
        <div>
          <h2>{`${patient?.firstName || patient?.patientDTO?.firstName} ${
            patient?.lastName || patient?.patientDTO?.lastName
          }`}</h2>
          <p>
            <strong>Address:</strong> {patient?.patientDTO?.address}
          </p>
          <p>
            <strong>Admitted On:</strong> {patient?.admissionDate}
          </p>
          <p>
            <strong>Discharged On:</strong>
            {dischargedDate}
          </p>
        </div>
        <div>
          <p>
            <strong>Contact No:</strong>
            {patient?.patientDTO?.phoneNumber}
          </p>
          <p>
            <strong>InPatient No:</strong> {patient?.admissionId}
          </p>
          <p>
            <strong>Ward:</strong> {patient.wardDepartmentDTO.wardName}
          </p>
          <p>
            <strong>Bed Number:</strong> {patient?.wardBedFeatureDTO?.bedId}
          </p>
        </div>
      </div>

      <div className="pat-form-section">
        <div className="pat-form-group">
          <label>Discharge Type *</label>
          <select name="dischargedType" onChange={handleChange}>
            <option value="">Choose Option</option>
            <option value="DOR">DOR</option>
            <option value="Recovered">Recovered</option>
            <option value="Not Imporoved">Not Imporoved</option>
            <option value="LAMA">LAMA</option>
            <option value="Death">Death</option>
            <option value="Absconded">Absconded</option>
            <option value="Referred">Referred</option>
            <option value="Discharged On Request">Discharged On Request</option>
            <option value="Stable">Stable</option>
          </select>
        </div>

        <div className="pat-form-group">
          <label>Consultant *</label>
          <select name="consultant" onChange={handleChange}>
            <option value="">Select Doctor</option>
            {doctors.map((doctor) => (
              <option key={doctor.employeeId} value={`${doctor.salutation} ${doctor.firstName} ${doctor.lastName}`}>
                {doctor.salutation} {doctor.firstName} {doctor.lastName}
              </option>
            ))}
          </select>
        </div>

        <div className="pat-form-group">
          <label>Doctor Incharge *</label>
          <select name="doctorIncharge" onChange={handleChange}>
            <option value="">Select Doctor</option>
            {doctors.map((doctor) => (
              <option key={doctor.employeeId} value={`${doctor.salutation} ${doctor.firstName} ${doctor.lastName}`}>
                {doctor.salutation} {doctor.firstName} {doctor.lastName}
              </option>
            ))}
          </select>
        </div>

        <div className="pat-form-group">
          <label>Anaesthetists *</label>
          <select name="anesthetists" onChange={handleChange}>
            <option value="">Select Doctor</option>
            {doctors.map((doctor) => (
              <option key={doctor.employeeId} value={`${doctor.salutation} ${doctor.firstName} ${doctor.lastName}`}>
                {doctor.salutation} {doctor.firstName} {doctor.lastName}
              </option>
            ))}
          </select>
        </div>

        <div className="pat-form-group">
          <label>Resident Dr</label>
          <select name="residentDr" onChange={handleChange}>
            <option value="">Select Doctor</option>
            {doctors.map((doctor) => (
              <option key={doctor.employeeId} value={`${doctor.salutation} ${doctor.firstName} ${doctor.lastName}`}>
                {doctor.salutation} {doctor.firstName} {doctor.lastName}
              </option>
            ))}
          </select>
        </div>
        <div className="pat-form-group">
          <label>Select Diagnosis</label>
          <input
          name="selectDiagnosis"
            type="text"
            placeholder="Select ICD-11(s) for Select Diagnosis"
            onChange={handleChange}
          />
        </div>

        <div className="pat-form-group">
          <label>Provisional Diagnosis</label>
          <input
            type="text"
            name="provisonalDiagnosis"
            placeholder="Select ICD-11(s) for Provisional Diagnosis"
            onChange={handleChange}
          />
        </div>

        <div className="pat-form-group">
          <label>Other Diagnosis</label>
          <input type="text" name="otherDiagnosis" n placeholder="Enter Other Diagnosis" onChange={handleChange} />
        </div>

        <div className="pat-form-group">
          <label>Clinical Findings</label>
          <textarea name="clinicalFindings" placeholder="Clinical Findings" onChange={handleChange}></textarea>
        </div>

        <div className="pat-form-group">
          <label>Chief Complaint</label>
          <textarea name="cheifComplain" placeholder="Chief Complaint" onChange={handleChange}></textarea>
        </div>

        <div className="pat-form-group">
          <label>History Of Presenting Illness</label>
          <textarea name="historyOfPresentingIllness" placeholder="History Of Presenting Illness" onChange={handleChange}></textarea>
        </div>

        <div className="pat-form-group">
          <label>Treatment During Hospital Stay</label>
          <textarea name="treatmentDuringHospitalStay" placeholder="Treatment During Hospital Stay" onChange={handleChange}></textarea>
        </div>

        <div className="pat-form-group">
          <label>Condition On Discharge</label>
          <textarea name="conditionOnDischarge" placeholder="Condition On Discharge" onChange={handleChange}></textarea>
        </div>

        <div className="pat-form-group">
          <label>Pending Reports</label>
          <textarea name="pendingReport" placeholder="Pending Reports" onChange={handleChange}></textarea>
        </div>

        <div className="pat-form-group">
          <label>Special Notes</label>
          <textarea name="specialNotes" placeholder="Special Notes" onChange={handleChange}></textarea>
        </div>

        <div className="pat-form-group">
          <label>Allergies</label>
          <textarea name="allergies" placeholder="Allergies" onChange={handleChange}></textarea>
        </div>

        <div className="pat-form-group">
          <label>Discharge Order</label>
          <textarea name="dischargeOrder" placeholder="Discharge Order" onChange={handleChange}></textarea>
        </div>

        <div className="pat-form-group">
          <label>Rest Days</label>
          <textarea name="restDay" placeholder="Rest Days" onChange={handleChange}></textarea>
        </div>

        <div className="pat-form-group">
          <label>Follow UP</label>
          <textarea name="followUp" placeholder="Follow UP" onChange={handleChange}></textarea>
        </div>

        <div className="pat-form-group pat-investigations">
          <h3>Investigations</h3>
          <div className="pat-form-group-radio-container">
            <label>Show Result on Report: </label>
            <label className="pat-form-group-radio-container-label">
              <input type="radio" name="result" value="yes" /> Yes
            </label>
            <label className="pat-form-group-radio-container-label">
              <input type="radio" name="result" value="no" /> No
            </label>
          </div>

          <div className="pat-lab-tests">
            <label>Lab Tests</label>
            <input type="text" placeholder="Add New Test" />
            <label>Imaging</label>
            <input type="text" placeholder="Dental" />
          </div>
          <div className="pat-medications">
            <label>Medications</label>
            <input type="text" placeholder="Enter Medicines" />
          </div>
        </div>
        <button className="pat-save" onClick={handleSubmit}>Save</button>
      </div>
    </div>
  );
};

export default PatientDischargeForm;
