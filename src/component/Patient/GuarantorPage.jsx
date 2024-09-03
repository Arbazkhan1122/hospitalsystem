import React, { useEffect, useState } from 'react';
import './GaurantorPage.css';

const GuarantorPage = ({sendguarantordata,guarantorData}) => {
  const [guarantorDataPatient, setGuarantorDataPatient] = useState({
    relationWithPatient: '',
    self: 'No',
    guarantorName: '',
    gender: '',
    phoneNumber: '',
    dateOfBirth: '',
    street1: '',
    street2: '',
    state: '',
    city: '',
    zipCode: ''
  });
  useEffect(()=>{
    setGuarantorDataPatient({
      relationWithPatient: guarantorData?.relationWithPatient || '',
      self: guarantorData?.self || '',
      guarantorName: guarantorData?.PatientName ||'',
      gender:  guarantorData?.gender ||'' ,
      phoneNumber:  guarantorData?.phoneNumber ||'',
      dateOfBirth:  guarantorData?.dateOfBirth ||'',
      street1:  guarantorData?.street1 ||'',
      street2:  guarantorData?.street2 ||'',
      state: guarantorData?.state ||'',
      city:  guarantorData?.city ||'',
      zipCode:  guarantorData?.zipCode ||''
    })
  },[guarantorData])
  
  
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setGuarantorDataPatient(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    sendguarantordata(guarantorDataPatient);
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
                value={guarantorDataPatient?.relationWithPatient} 
                onChange={handleChange} 
                required 
              />
              <span className="guarantor-page-or-text">OR</span>
              <label className="guarantor-page-self-checkbox">
                <input 
                  type="checkbox" 
                  name="self" 
                  value={"Yes"}
                  checked={guarantorDataPatient.self} 
                  onChange={handleChange} 
                />
                SELF
              </label>
            </div>
            <div className="guarantor-page-form-group">
              <label>Name*:</label>
              <input 
                type="text" 
                name="guarantorName" 
                value={guarantorDataPatient.guarantorName} 
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
                    checked={guarantorDataPatient.gender === "Male"} 
                    onChange={handleChange} 
                  /> Male
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="gender" 
                    value="Female" 
                    checked={guarantorDataPatient.gender === "Female"} 
                    onChange={handleChange} 
                  /> Female
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="gender" 
                    value="Other" 
                    checked={guarantorDataPatient.gender === "Other"} 
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
                value={guarantorDataPatient.phoneNumber} 
                onChange={handleChange} 
              />
            </div>
            <div className="guarantor-page-form-group">
              <label>Date of Birth:</label>
              <input 
                type="date" 
                name="dateOfBirth" 
                value={guarantorDataPatient.dateOfBirth} 
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
                value={guarantorDataPatient.street1} 
                onChange={handleChange} 
              />
            </div>
            <div className="guarantor-page-form-group">
              <label>Street 2:</label>
              <input 
                type="text" 
                name="street2" 
                value={guarantorDataPatient.street2} 
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
              <select name="state" value={guarantorDataPatient.state} onChange={handleChange}>
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
                value={guarantorDataPatient.city} 
                onChange={handleChange} 
              />
            </div>
            <div className="guarantor-page-form-group">
              <label>Zip code:</label>
              <input 
                type="text" 
                name="zipCode" 
                value={guarantorDataPatient.zipCode} 
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
