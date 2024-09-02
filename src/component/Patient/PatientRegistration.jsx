import React, { useState } from 'react';
import './PatientRegistration.css';

const PatientRegistration = ({sendpatientdata}) => {
  const [formData, setFormData] = useState({
    salutation: '',
    firstName: '',
    middleName: '',
    lastName: '',
    dateOfBirth: '',
    age: '',
    phoneNumber: '',
    landlineNumber: '',
    country: 'Kenya',
    passportNumber: '',
    county: 'Juja sub county',
    address: '',
    bloodGroup: '',
    gender: '',
    religion: '',
    maritalStatus: '',
    notifications: '',
    employerInfo: '',
    previousLastName: '',
    occupation: '',
    email: '',
    race: '',
    kraPin: '',
    dialysisPatient: ''
  });


  const handleChange = (e) => {
  const { name, value } = e.target;

  // Convert "yes"/"no" to true/false for Boolean fields
  const booleanFields = ['notifications', 'dialysisPatient'];
  let newValue = value;

  if (booleanFields.includes(name)) {
    newValue = value === 'yes' ? true : false;
  }

  setFormData(prevState => ({
    ...prevState,
    [name]: newValue
  }));
};



  const handleSubmit = async (e) => {
    e.preventDefault();
    sendpatientdata(formData)
    alert("Basic Information Saved Successfully ")
  };

  return (
    <div className="patient-registration">
      <h2>Basic Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>Salutation:</label>
            <div>
              <input type="radio" name="salutation" value="Mr" onChange={handleChange} /> Mr
              <input type="radio" name="salutation" value="Ms" onChange={handleChange} /> Ms
              <input type="radio" name="salutation" value="Mrs" onChange={handleChange} /> Mrs
            </div>
          </div>
          <div className="form-group">
            <label>Gender <span className="mandatory">*</span>:</label>
            <select name="gender" onChange={handleChange} required>
              <option value="">--select--</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>First Name<span className="mandatory">*</span>:</label>
            <input type="text" name="firstName" onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Religion:</label>
            <select name="religion" onChange={handleChange}>
              <option value="">--select--</option>
              <option>Hindu</option>
              <option>Muslim</option>
              {/* Add more religion options */}
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Middle Name:</label>
            <input type="text" name="middleName" onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Marital Status:</label>
            <div>
              <input type="radio" name="maritalStatus" value="Married" onChange={handleChange} /> Married
              <input type="radio" name="maritalStatus" value="Unmarried" onChange={handleChange} /> Unmarried
            </div>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Last Name<span className="mandatory">*</span>:</label>
            <input type="text" name="lastName" onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Notifications?:</label>
            <input type="text" name="notifications" onChange={handleChange} />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Date of Birth:</label>
            <input type="date" name="dateOfBirth" onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Employer Info:</label>
            <input type="text" name="employerInfo" onChange={handleChange} />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Age<span className="mandatory">*</span>:</label>
            <input type="number" name="age" onChange={handleChange} required />
            <select name="ageUnit" onChange={handleChange}>
              <option value="years">Years</option>
              <option value="months">Months</option>
            </select>
          </div>
          <div className="form-group">
            <label>Previous Last Name:</label>
            <input type="text" name="previousLastName" onChange={handleChange} />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Phone Number<span className="mandatory">*</span>:</label>
            <input type="tel" name="phoneNumber" onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Occupation:</label>
            <input type="text" name="occupation" onChange={handleChange} />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Landline Number:</label>
            <input type="tel" name="landlineNumber" onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" name="email" onChange={handleChange} />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Country<span className="mandatory">*</span>:</label>
            <select name="country" onChange={handleChange} required>
              <option value="Kenya">Kenya</option>
              {/* Add more country options */}
            </select>
          </div>
          <div className="form-group">
            <label>Race:</label>
            <input type="text" name="race" onChange={handleChange} />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Passport Number:</label>
            <input type="text" name="passportNumber" onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>KRA PIN:</label>
            <input type="text" name="kraPin" onChange={handleChange} />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>County<span className="mandatory">*</span>:</label>
            <input type="text" name="county" value="Juja sub county" onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Dialysis Patient:</label>
            <select name="dialysisPatient" onChange={handleChange}>
              <option value="">--select--</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Address:</label>
            <input type="text" name="address" onChange={handleChange} />
          </div>
          <div className="form-group"></div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Blood Group:</label>
            <select name="bloodGroup" onChange={handleChange}>
              <option value="">--select--</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>
          <div className="form-group"></div>
        </div>
       
        <button type="submit" className="register-button" style={{textAlign:'center'}} >Save</button>
      </form>
    </div>
  );
};

export default PatientRegistration;
