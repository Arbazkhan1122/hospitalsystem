import React, { useState } from 'react';
import './GaurantorPage.css';

const GuarantorPage = ({sendguarantordata}) => {
  const [guarantorData, setGuarantorData] = useState({
    relationWithPatient: '',
    Self: false,
    PatientName: '',
    gender: '',
    phoneNumber: '',
    dateOfBirth: '',
    street1: '',
    street2: '',
    // country: '',
    county: '',
    city: '',
    zipCode: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setGuarantorData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    sendguarantordata(guarantorData);
    alert("Guarantor Data Saved Successfully ")
  };

  return (
    <div className="guarantor-page">
      <h2>Guarantor Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="guarantor-page-form-columns">
          <div className="guarantor-page-left-column">
            <div className="guarantor-page-relationpatient">
              <label>Relationship with Patient*:</label>
              <input 
                type="text" 
                name="relationWithPatient" 
                value={guarantorData.relationWithPatient} 
                onChange={handleChange} 
                required 
              />
              <span className="guarantor-page-or-text">OR</span>
              <label className="guarantor-page-self-checkbox">
                <input 
                  type="checkbox" 
                  name="Self" 
                  checked={guarantorData.Self} 
                  onChange={handleChange} 
                />
                SELF
              </label>
            </div>
            <div className="guarantor-page-form-group">
              <label>Name*:</label>
              <input 
                type="text" 
                name="PatientName" 
                value={guarantorData.PatientName} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="guarantor-page-form-group">
              <label>Gender:</label>
              <div className="guarantor-page-radio-group">
                <label>
                  <input 
                    type="radio" 
                    name="gender" 
                    value="Male" 
                    checked={guarantorData.gender === "Male"} 
                    onChange={handleChange} 
                  /> Male
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="gender" 
                    value="Female" 
                    checked={guarantorData.gender === "Female"} 
                    onChange={handleChange} 
                  /> Female
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="gender" 
                    value="Other" 
                    checked={guarantorData.gender === "Other"} 
                    onChange={handleChange} 
                  /> Other
                </label>
              </div>
            </div>
            <div className="guarantor-page-form-group">
              <label>Phone number:</label>
              <input 
                type="tel" 
                name="phoneNumber" 
                value={guarantorData.phoneNumber} 
                onChange={handleChange} 
              />
            </div>
            <div className="guarantor-page-form-group">
              <label>Date of Birth:</label>
              <input 
                type="date" 
                name="dateOfBirth" 
                value={guarantorData.dateOfBirth} 
                onChange={handleChange} 
              />
            </div>
            <button type="submit" className="guarantor-page-save-button">Save</button>
          </div>
          <div className="guarantor-page-right-column">
            <div className="guarantor-page-form-group">
              <label>Street 1:</label>
              <input 
                type="text" 
                name="street1" 
                value={guarantorData.street1} 
                onChange={handleChange} 
              />
            </div>
            <div className="guarantor-page-form-group">
              <label>Street 2:</label>
              <input 
                type="text" 
                name="street2" 
                value={guarantorData.street2} 
                onChange={handleChange} 
              />
            </div>
            {/* <div className="guarantor-page-form-group">
              <label>Country:</label>
              <select name="country" value={guarantorData.country} onChange={handleChange}>
                <option value="">Select country</option>
              </select>
            </div> */}
            <div className="guarantor-page-form-group">
              <label>Country:</label>
              <select name="county" value={guarantorData.county} onChange={handleChange}>
                <option value="">Select Country</option>
                <option value="India">India</option>
                <option value="Kenya">Kenya</option>
                <option value="Japan">Japan</option>
                <option value="France">France</option>
              </select>
            </div>
            <div className="guarantor-page-form-group">
              <label>City:</label>
              <input 
                type="text" 
                name="city" 
                value={guarantorData.city} 
                onChange={handleChange} 
              />
            </div>
            <div className="guarantor-page-form-group">
              <label>Zip code:</label>
              <input 
                type="text" 
                name="zipCode" 
                value={guarantorData.zipCode} 
                onChange={handleChange} 
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default GuarantorPage;
