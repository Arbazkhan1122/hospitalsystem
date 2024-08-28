// VaccinationRegister.js
import React, { useState } from "react";
import "./Vaccinationregister.css";

const VaccinationRegister = ({ onClose }) => {
  return (
    <div className="vaccinationRegister__overlay">
      <div className="vaccinationRegister__popup">
        <div className="vaccinationRegister__header">
          <h2>Vaccination Patient Register</h2>
          <button
            onClick={onClose}
            className="vaccinationRegister__closeButton"
          >
            X
          </button>
        </div>
        <form className="vaccinationRegister__form">
          <div className="vaccinationRegister__formGroup">
            <label>Mother Name*</label>
            <input type="text" placeholder="Mother Name" />
          </div>
          <div className="vaccinationRegister__formGroup">
            <label>Baby Name</label>
            <input type="text" placeholder="Baby Name" />
          </div>
          <div className="vaccinationRegister__formGroup">
            <label>Age*</label>
            <div className="vaccinationRegister__ageInput">
              <input type="number" placeholder="1" />
              <select>
                <option>Days</option>
                <option>Months</option>
                <option>Years</option>
              </select>
            </div>
          </div>
          <div className="vaccinationRegister__formGroup">
            <label>Date Of Birth</label>
            <input type="date" />
          </div>
          <div className="vaccinationRegister__formGroup">
            <label>Gender*</label>
            <select>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div className="vaccinationRegister__formGroup">
            <label>Country*</label>
            <select>
              <option>Kenya</option>
              {/* Add more countries as needed */}
            </select>
          </div>
          <div className="vaccinationRegister__formGroup">
            <label>County*</label>
            <input type="text" placeholder="Juja sub county" />
          </div>
          <div className="vaccinationRegister__formGroup">
            <label>Address</label>
            <input type="text" placeholder="Address" />
          </div>
          <div className="vaccinationRegister__formGroup">
            <label>Vacc. Regd. No.*</label>
            <input type="text" placeholder="1" />
          </div>
          <div className="vaccinationRegister__formGroup">
            <label>Father Name</label>
            <input type="text" placeholder="Father Name" />
          </div>
          <div className="vaccinationRegister__formGroup">
            <label>Phone number</label>
            <input type="tel" placeholder="Phone number" />
          </div>
          <div className="vaccinationRegister__formGroup">
            <label>Religion</label>
            <select>
              <option>Brahmin/Chhetri</option>
              {/* Add more religions as needed */}
            </select>
          </div>
          <div className="vaccinationRegister__formActions">
            <button type="button" onClick={onClose}>
              Cancel
            </button>
            <button type="submit">Register</button>
          </div>
        </form>
        <p className="vaccinationRegister__note">
          Note: 'Register' will also create a new Visit for this patient in
          IMMUNIZATION Department.
        </p>
      </div>
    </div>
  );
};

export default VaccinationRegister;
