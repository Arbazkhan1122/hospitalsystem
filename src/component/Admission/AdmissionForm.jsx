import React, { useState, useEffect } from 'react';
import './AdmissionForm.css'; // Custom CSS file
import { API_BASE_URL } from '../api/api';
const AdmissionForm = ({ patient, onClose }) => {
  console.log(patient);
  
  const [formData, setFormData] = useState({
    membership: '',
    priceCategory: '',
    caseType: '',
    admissionDate: '',
    admissionNotes: '',
    
    requestingDepartment:'',
    careOfPersonName: '',
    careOfPersonPhone: '',
    careOfPersonRelation: '',
    depositBalance: 0,
    depositAmount: 0,
    depositRemarks: '',
    paymentOption: '',
    admittedDoctor: '',
    wardDepatment: '',
    wardBedFeature: '',
    manageBed: '',
  });


  const [wards, setWards] = useState([]);
  const [bedFeatures, setBedFeatures] = useState([]);
  const [beds, setBeds] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    // Fetch wards
    const fetchWards = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/ward-department/get-all-ward`);
        const data = await response.json();
        setWards(data);
        console.log(data +"------");
        
      } catch (error) {
        console.error('Error fetching wards:', error);
      }
    };

    const fetchDepartments = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/departments/getAllDepartments`);
        const data = await response.json();
        setDepartments(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching departments:', error);
      }
    };

    // Fetch bed features
    const fetchBedFeatures = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/ward-bedFeature/getAllWardBed`);
        const data = await response.json();
        setBedFeatures(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching bed features:', error);
      }
    };

    // Fetch beds
    const fetchBeds = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/manage-bed/AllManageBed`);
        const data = await response.json();
        setBeds(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching beds:', error);
      }
    };

    // Fetch admitting doctors
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

    fetchDepartments();
    fetchWards();
    fetchBedFeatures();
    fetchBeds();
    fetchDoctors();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const admissionData = {
      ...formData,
      admissionStatus:"Occupied",
      patient:{patientId: patient.patientId}, // Assuming you are passing patient object as prop
      admittedDoctor: {employeeId:formData.admittedDoctor},
      wardDepatment: {wardDepartmentId:formData.wardDepatment},
      wardBedFeature: {wardBedFeatureId:formData.wardBedFeature},
      manageBed: {bedId:formData.manageBed},
      secondaryDoctor:{employeeId:formData.admittedDoctor},
      allocatedNurse:{employeeId:formData.admittedDoctor},
      depositBalance: parseFloat(formData.depositBalance),
      depositAmount: parseFloat(formData.depositAmount),
    };

    try {
      console.log(admissionData);
      
      const response = await fetch(`${API_BASE_URL}/admissions/add-admission-details`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(admissionData),
      });

      if (response.ok) {
        // Handle successful response
        alert('Admission details saved successfully');
        onClose(); // Close form on success
      } else {
        // Handle errors
        const errorData = await response.json();
        alert(`Error: ${errorData.message}`);
      }
    } catch (error) {
      alert('Failed to submit admission details. Please try again later.');
    }
  };

  return (
    <div className="create-admission-form-container">
      <div className='create-admission-form-sub-div'>
        <h1 className="create-admission-form-header">Create Admission</h1>
        <button className="create-admission-close-button" onClick={onClose}>
          Close
        </button>
      </div>
      <form className="create-admission-form-grid" onSubmit={handleSubmit}>
        {/* Left Column */}
        <div>
          <div className="create-admission-form-field">
            <label>Membership<span className="create-admission-required">*</span></label>
            <select name="membership" className="create-admission-form-input" onChange={handleChange}>
              <option value="General">General</option>
              <option value="Premium">Premium</option>
            </select>
          </div>
          <div className="create-admission-form-field">
            <label>Price Category</label>
            <select name="priceCategory" className="create-admission-form-input" onChange={handleChange}>
              <option value="Normal">Normal</option>
              <option value="VIP">VIP</option>
            </select>
          </div>
          <div className="create-admission-form-field">
            <label>Case<span className="create-admission-required">*</span></label>
            <select name="caseType" className="create-admission-form-input" onChange={handleChange}>
              <option value="">Select</option>
              <option value="Case 1">Case 1</option>
              <option value="Case 2">Case 2</option>
            </select>
          </div>
          <div className="create-admission-form-field">
            <label>Requesting Department<span className="create-admission-required">*</span></label>
            <select name="requestingDepartment" className="create-admission-form-input" onChange={handleChange}>
              <option value="">Select Doctor</option>
              {departments.map((doctor) => (
                <option key={doctor.departmentId} value={doctor.departmentId}>{doctor.departmentName}</option>
              ))}
            </select>
          </div>
          <div className="create-admission-form-field">
            <label>Admitting Doctor<span className="create-admission-required">*</span></label>
            <select name="admittedDoctor" className="create-admission-form-input" onChange={handleChange}>
              <option value="">Select Doctor</option>
              {doctors.map((doctor) => (
                <option key={doctor.employeeId} value={doctor.employeeId}>{doctor.firstName}</option>
              ))}
            </select>
          </div>
          <div className="create-admission-form-field">
            <label>Ward<span className="create-admission-required">*</span></label>
            <select name="wardDepatment" className="create-admission-form-input" onChange={handleChange}>
              <option value="">Select Ward</option>
              {wards.map((ward) => (
                <option key={ward.wardDepartmentId} value={ward.wardDepartmentId}>{ward.wardName}</option>
              ))}
            </select>
          </div>
          <div className="create-admission-form-field">
            <label>Bed Feature<span className="create-admission-required">*</span></label>
            <select name="wardBedFeature" className="create-admission-form-input" onChange={handleChange}>
              <option value="">Select Bed Feature</option>
              {bedFeatures.map((feature) => (
                <option key={feature.wardBedFeatureId} value={feature.wardBedFeatureId}>{feature.featureFullName}</option>
              ))}
            </select>
          </div>
          <div className="create-admission-form-field">
            <label>Bed<span className="create-admission-required">*</span></label>
            <select name="manageBed" className="create-admission-form-input" onChange={handleChange}>
              <option value="">Select Bed</option>
              {beds.map((bed) => (
                <option key={bed.manageBedId} value={bed.manageBedId}>{bed?.wardDepatmentDTO?.wardName}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Right Column */}
        <div>
          <div className="create-admission-form-field">
            <label>Admission Date</label>
            <input
              type="datetime-local"
              name="admissionDate"
              className="create-admission-form-input"
              onChange={handleChange}
            />
          </div>
          <div className="create-admission-form-field">
            <label>Admission Notes</label>
            <textarea
              name="admissionNotes"
              className="create-admission-form-input"
              placeholder="Admission Notes"
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="create-admission-form-field">
            <label>Care Of Person Name</label>
            <input
              type="text"
              name="careOfPersonName"
              className="create-admission-form-input"
              placeholder="Care Of Person Name"
              onChange={handleChange}
            />
          </div>
          <div className="create-admission-form-field">
            <label>Care Of Person Phone</label>
            <input
              type="text"
              name="careOfPersonPhone"
              className="create-admission-form-input"
              placeholder="Care Of Person Phone"
              onChange={handleChange}
            />
          </div>
          <div className="create-admission-form-field">
            <label>Care Of Person Relation</label>
            <select name="careOfPersonRelation" className="create-admission-form-input" onChange={handleChange}>
              <option value="">Select Relation</option>
              <option value="Father">Father</option>
              <option value="Mother">Mother</option>
              <option value="Sibling">Sibling</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="create-admission-form-field">
            <label>Deposit Balance</label>
            <input
              type="number"
              name="depositBalance"
              className="create-admission-form-input"
              placeholder="Enter Deposit Balance"
              onChange={handleChange}
            />
          </div>
          <div className="create-admission-form-field">
            <label>Deposit Amount</label>
            <input
              type="number"
              name="depositAmount"
              className="create-admission-form-input"
              placeholder="Enter Deposit Amount"
              onChange={handleChange}
            />
          </div>
          <div className="create-admission-form-field">
            <label>Deposit Remarks</label>
            <textarea
              name="depositRemarks"
              className="create-admission-form-input"
              placeholder="Deposit Remarks"
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
        <div className="create-admission-form-footer">
        <button type="submit" className="create-admission-save-button" onClick={handleSubmit}>Save Admission</button>
      </div>
      </form>
      
    </div>
  );
};

export default AdmissionForm;
