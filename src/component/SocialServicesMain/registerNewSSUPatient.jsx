import React from 'react';
import "../SocialServicesMain/registerNewSSUPatient.css"

function RegisterNewSSUPatient() {
  return (
    <div className="patient-registration">
      <h2>New SSU Patient Registration</h2>
      <form>
        <div className="section">
          <h3>Patient Information</h3>
          <div className="form-row">
            <label>First Name*: <input type="text" placeholder="First Name" /></label>
            <label>Father Name: <input type="text" /></label>
          </div>
          <div className="form-row">
            <label>Middle Name: <input type="text" placeholder="Middle Name" /></label>
            <label>Mother Name: <input type="text" /></label>
          </div>
          <div className="form-row">
            <label>Last Name*: <input type="text" placeholder="Last Name" /></label>
            <label>Country*:
              <select defaultValue="Kenya">
                <option value="Kenya">Kenya</option>
              </select>
            </label>
          </div>
          <div className="form-row">
            <label>Age*: 
              <input type="text" placeholder="Age" className="age-input" />
              <select>
                <option>Years</option>
              </select>
            </label>
            <label>Address: <input type="text" placeholder="Address" /></label>
          </div>
          <div className="form-row">
            <label>Gender*:
              <select>
                <option value="">--select--</option>
              </select>
            </label>
            <label>Religion:
              <select>
                <option value="">--select--</option>
              </select>
            </label>
          </div>
          <div className="form-row">
            <label>Phone number: <input type="text" placeholder="phone number" /></label>
            <label>Race: <input type="text" placeholder="race" /></label>
          </div>
          <div className="form-row">
            <label>Marital status:
              <select>
                <option value="">--select--</option>
              </select>
            </label>
          </div>
        </div>

        <div className="section">
          <h3>SSU Information</h3>
          <div className="form-row">
            <label>Target Group*:
              <select>
                <option>Choose Target Group</option>
              </select>
            </label>
            <label>Community*:
              <select>
                <option value="">--select--</option>
              </select>
            </label>
            <label>Membership*:
              <select>
                <option value="">--select--</option>
              </select>
            </label>
          </div>
          <div className="form-row">
            <label>Has Target Group Certificate?
              <select>
                <option value="">--select--</option>
              </select>
            </label>
          </div>
          <p className="mandatory-note">Membership Scheme(s) is Mandatory.</p>
          <div className="form-row">
            <label>Income Source:
              <select>
                <option>--Select Income Source--</option>
              </select>
            </label>
          </div>
          <div className="form-row">
            <label>Financial Status:
              <select>
                <option>--Select Status--</option>
              </select>
            </label>
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="register-btn">Register</button>
          <button type="button" className="close-btn">Close</button>
        </div>
      </form>
    </div>
  );
}

export default RegisterNewSSUPatient;