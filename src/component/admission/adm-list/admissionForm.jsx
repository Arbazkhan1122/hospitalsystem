import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './admissionForm.css';

const AdmissionForm = ({ onClose, onSave }) => {
  const location = useLocation();
  const patientData = location.state ? location.state.patientData : null;

  const [formData, setFormData] = useState({
    membership: 'General',
    priceCategory: 'Normal',
    case: '',
    requestingDepartment: '',
    admittingDoctor: '',
    ward: '',
    bedFeature: '',
    bed: '',
    admissionDate: new Date().toISOString().split('T')[0],
    admissionTime: new Date().toTimeString().split(' ')[0].slice(0, 5),
    admissionNotes: '',
    careOfPersonName: '',
    careOfPersonPhone: '',
    careOfPersonRelation: '',
    depositAmount: 0,
    depositRemarks: '',
    paymentOption: 'Cash',
    hospitalNumber: '',
    name: '',
    age: '',
    sex: '',
    phone: '',
    address: '',
    nhifNo: '',
    ...patientData // Prefill with patient data if available
  });

  useEffect(() => {
    if (patientData) {
      setFormData(prevState => ({
        ...prevState,
        ...patientData
      }));
    }
  }, [patientData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="admission-form">
      <h2>Create Admission</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label>
            Membership*:
            <select name="membership" value={formData.membership} onChange={handleChange}>
              <option value="General">General</option>
              {/* Add more options as needed */}
            </select>
          </label>
          <label>
            Price Category:
            <select name="priceCategory" value={formData.priceCategory} onChange={handleChange}>
              <option value="Normal">Normal</option>
              {/* Add more options as needed */}
            </select>
          </label>
        </div>

        <div className="form-row">
          <label>
            Case*:
            <select name="case" value={formData.case} onChange={handleChange}>
              <option value="">--Select--</option>
              {/* Add more options as needed */}
            </select>
          </label>
          <label>
            Admission Date:
            <input type="date" name="admissionDate" value={formData.admissionDate} onChange={handleChange} />
            <input type="time" name="admissionTime" value={formData.admissionTime} onChange={handleChange} />
            <button type="button" onClick={() => {
              const now = new Date();
              setFormData(prevState => ({
                ...prevState,
                admissionDate: now.toISOString().split('T')[0],
                admissionTime: now.toTimeString().split(' ')[0].slice(0, 5)
              }));
            }}>JUST NOW</button>
          </label>
        </div>

        <div className="form-row">
          <label>
            Requesting Department*:
            <input type="text" name="requestingDepartment" placeholder="Enter Department Name" value={formData.requestingDepartment} onChange={handleChange} />
          </label>
          <label>
            Admission Notes:
            <textarea name="admissionNotes" value={formData.admissionNotes} onChange={handleChange}></textarea>
          </label>
        </div>

        <div className="form-row">
          <label>
            Admitting Doctor*:
            <input type="text" name="admittingDoctor" placeholder="Enter Doctor Name" value={formData.admittingDoctor} onChange={handleChange} />
          </label>
          <label>
            Care Of Person Name:
            <input type="text" name="careOfPersonName" placeholder="Care of Person" value={formData.careOfPersonName} onChange={handleChange} />
          </label>
        </div>

        <div className="form-row">
          <label>
            Ward*:
            <select name="ward" value={formData.ward} onChange={handleChange}>
              <option value="">Select Ward</option>
              {/* Add ward options */}
            </select>
          </label>
          <label>
            Care Of Person Phone:
            <input type="text" name="careOfPersonPhone" placeholder="Phone Number" value={formData.careOfPersonPhone} onChange={handleChange} />
          </label>
        </div>

        <div className="form-row">
          <label>
            Bed Feature*:
            <select name="bedFeature" value={formData.bedFeature} onChange={handleChange}>
              <option value="">Select Bed Feature</option>
              {/* Add bed feature options */}
            </select>
          </label>
          <label>
            Care Of Person Relation:
            <select name="careOfPersonRelation" value={formData.careOfPersonRelation} onChange={handleChange}>
              <option value="">Select Relationship</option>
              {/* Add relationship options */}
            </select>
          </label>
        </div>

        <div className="form-row">
          <label>
            Bed*:
            <select name="bed" value={formData.bed} onChange={handleChange}>
              <option value="">Select Bed</option>
              {/* Add bed options */}
            </select>
          </label>
          <label>
            Deposit Amount:
            <input type="number" name="depositAmount" placeholder="Enter Deposit Amount" value={formData.depositAmount} onChange={handleChange} />
          </label>
        </div>

        <div className="form-row">
          <label>
            Payment Option:
            <select name="paymentOption" value={formData.paymentOption} onChange={handleChange}>
              <option value="Cash">Cash</option>
              {/* Add more payment options as needed */}
            </select>
          </label>
          <label>
            Deposit Remarks:
            <textarea name="depositRemarks" value={formData.depositRemarks} onChange={handleChange}></textarea>
          </label>
        </div>

        <div className="form-actions">
          <button type="submit" className="save-button">Save Admission</button>
        </div>
      </form>
    </div>
  );
};

export default AdmissionForm;
