import React, { useEffect, useState } from 'react';
import './WardTransfer.css'; // Import the corresponding CSS file
import axios from 'axios'; // Make sure to install axios
import { API_BASE_URL } from '../api/api';

const WardTransfer = ({patient}) => {
    console.log(patient);
    
  const [formData, setFormData] = useState({
    requestingDepartment: '',
    primaryDoctor: 'Prof. Dr. Suresh Singh Singh',
    secondaryDoctor: '',
    ward: '',
    bedFeature: '',
    price: 0,
    bed: '',
    transferDate: '2024-10-01', // Adjusted to match the input type date format
    transferTime: '17:43', // Adjusted to match the input type time format
    transferRemarks: ''
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
      } catch (error) {
        console.error('Error fetching wards:', error);
      }
    };

    const fetchDepartments = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/departments/getAllDepartments`);
        const data = await response.json();
        setDepartments(data);
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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
        console.log(formData);
        
      const response = await axios.put(`${API_BASE_URL}/update-bed/${patient?.admissionId}`, formData);
      console.log(response.data); // Handle the response as needed
      alert("Ward transfer updated successfully!");
    } catch (error) {
      console.error("Error updating admission:", error);
      alert("Failed to update admission. Please try again.");
    }
  };

  return (
    <div className="WardTransfer-container">
      <div className="WardTransfer-header">
        <h2>{patient?.patientDTO?.firstName} {patient?.patientDTO?.lastName} / {patient?.patientDTO?.age} / {patient?.patientDTO?.gender} </h2>
      </div>

      <form className="WardTransfer-form-section" onSubmit={handleSubmit}>
        <div className="WardTransfer-left-column">
          <div className="WardTransfer-form-group">
            <label className='WardTransfer-form-group-label'>Requesting Department *</label>
            <select
              className='WardTransfer-form-group-input'
              name="requestingDepartment"
              value={formData.requestingDepartment}
              onChange={handleChange}
            >
              <option value="">Select Department</option>
              {departments.map((department) => (
                <option key={department.departmentId} value={department.departmentName}>
                  {department.departmentName}
                </option>
              ))}
            </select>
          </div>

          <div className="WardTransfer-form-group">
            <label className='WardTransfer-form-group-label'>Primary Doctor:</label>
            <input className='WardTransfer-form-group-input' type="text" value={formData.primaryDoctor} disabled />
          </div>

          <div className="WardTransfer-form-group">
            <label className='WardTransfer-form-group-label'>Secondary Doctor:</label>
            <select
              className='WardTransfer-form-group-input'
              name="secondaryDoctor"
              value={formData.secondaryDoctor}
              onChange={handleChange}
            >
              <option value="">Select Secondary Doctor</option>
              {doctors.map((doctor) => (
                <option key={doctor.employeeId} value={doctor.employeeId}>
                  {doctor.firstName}
                </option>
              ))}
            </select>
          </div>

          <div className="WardTransfer-form-group">
            <label className='WardTransfer-form-group-label'>Ward *</label>
            <select
              className='WardTransfer-form-group-input'
              name="ward"
              value={formData.ward}
              onChange={handleChange}
            >
              <option value="">Select Ward</option>
              {wards.map((ward) => (
                <option key={ward.wardDepartmentId} value={ward.wardDepartmentId}>
                  {ward.wardName}
                </option>
              ))}
            </select>
          </div>

          <div className="WardTransfer-form-group">
            <label className='WardTransfer-form-group-label'>Select Bed Feature *</label>
            <select
              className='WardTransfer-form-group-input'
              name="bedFeature"
              value={formData.bedFeature}
              onChange={handleChange}
            >
              <option value="">Select Bed Feature</option>
              {bedFeatures.map((feature) => (
                <option key={feature.wardBedFeatureId} value={feature.wardBedFeatureId}>
                  {feature.featureFullName}
                </option>
              ))}
            </select>
          </div>

          <div className="WardTransfer-form-group">
            <label className='WardTransfer-form-group-label'>Price:</label>
            <span className='WardTransfer-form-group-input'>{formData.price}</span>
          </div>

          <div className="WardTransfer-form-group">
            <label className='WardTransfer-form-group-label'>Select Bed *</label>
            <select
              className='WardTransfer-form-group-input'
              name="bed"
              value={formData.bed}
              onChange={handleChange}
            >
              <option value="">Select Bed</option>
              {beds.map((bed) => (
                <option key={bed.manageBedId} value={bed.manageBedId}>
                  {bed?.wardDepatmentDTO?.wardName}
                </option>
              ))}
            </select>
          </div>

          <div className="WardTransfer-form-group">
            <label className='WardTransfer-form-group-label'>Transfer Date:</label>
            <div className='WardTransfer-form-group-two-input'>
              <input className='WardTransfer-form-group-input' type="date" value={formData.transferDate} name="transferDate" onChange={handleChange} />
              <input className='WardTransfer-form-group-input' type="time" value={formData.transferTime} name="transferTime" onChange={handleChange} />
            </div>
          </div>

          <div className="WardTransfer-form-group">
            <label className='WardTransfer-form-group-label'>Transfer Remarks *</label>
            <textarea name="transferRemarks" value={formData.transferRemarks} onChange={handleChange} className='WardTransfer-form-group-input'></textarea>
          </div>

          <button type="submit" className="WardTransfer-transfer-btn">Transfer</button>
        </div>

        <div className="WardTransfer-right-column">
          <h3>Admission records</h3>
          <p>Current Ward/Bed: Male Ward / Male Ward-003</p>
          <hr />
          <h4>Ward History</h4>
          <table className="WardTransfer-table">
            <thead>
              <tr>
                <th>Started on</th>
                <th>Ended on</th>
                <th>Ward Name</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2024-08-01</td>
                <td>2024-09-30</td>
                <td>Male Ward</td>
              </tr>
              <tr>
                <td>2024-07-01</td>
                <td>2024-07-31</td>
                <td>Female Ward</td>
              </tr>
            </tbody>
          </table>
        </div>
      </form>
    </div>
  );
};

export default WardTransfer;
