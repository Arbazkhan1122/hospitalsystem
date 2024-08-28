// UpdateVaccinationRegister.js
import React, { useState, useEffect } from "react";
import "./UpdateVaccination.css";

const dummyData = {
  vaccRegNo: "VR1001",
  babyName: "Baby John",
  ageSex: "2Y/M",
  hospitalNo: "H1001",
  motherName: "Jane Doe",
  address: "1234 Elm St",
  lastVisDate: "2024-07-10",
  daysPassed: "37",
};

const UpdateVaccinationRegister = ({ patient, onClose }) => {
  const [formData, setFormData] = useState({
    vaccRegNo: "",
    babyName: "",
    ageSex: "",
    hospitalNo: "",
    motherName: "",
    address: "",
    lastVisDate: "",
    daysPassed: "",
  });

  useEffect(() => {
    if (patient) {
      setFormData({
        vaccRegNo: patient.vaccRegNo || "",
        babyName: patient.babyName || "",
        ageSex: patient.ageSex || "",
        hospitalNo: patient.hospitalNo || "",
        motherName: patient.motherName || "",
        address: patient.address || "",
        lastVisDate: patient.lastVisDate || "",
        daysPassed: patient.daysPassed || "",
      });
    } else {
      setFormData(dummyData);
    }
  }, [patient]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="UpdateVaccinationRegister__overlay">
      <div className="UpdateVaccinationRegister__popup">
        <div className="UpdateVaccinationRegister__header">
          <h2>Vaccination Patient Register</h2>
          <button
            onClick={onClose}
            className="UpdateVaccinationRegister__closeButton"
          >
            X
          </button>
        </div>
        <form className="UpdateVaccinationRegister__form">
          <div className="UpdateVaccinationRegister__formGroup">
            <label>Mother Name*</label>
            <input
              type="text"
              placeholder="Mother Name"
              name="motherName"
              value={formData.motherName}
              onChange={handleInputChange}
            />
          </div>
          <div className="UpdateVaccinationRegister__formGroup">
            <label>Baby Name</label>
            <input
              type="text"
              placeholder="Baby Name"
              name="babyName"
              value={formData.babyName}
              onChange={handleInputChange}
            />
          </div>
          <div className="UpdateVaccinationRegister__formGroup">
            <label>Age*</label>
            <div className="UpdateVaccinationRegister__ageInput">
              <input
                type="text"
                name="ageSex"
                value={formData.ageSex}
                onChange={handleInputChange}
                placeholder="1"
              />
              <select>
                <option>Days</option>
                <option>Months</option>
                <option>Years</option>
              </select>
            </div>
          </div>
          <div className="UpdateVaccinationRegister__formGroup">
            <label>Date Of Birth</label>
            <input type="date" />
          </div>
          <div className="UpdateVaccinationRegister__formGroup">
            <label>Gender*</label>
            <select>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div className="UpdateVaccinationRegister__formGroup">
            <label>Country*</label>
            <select>
              <option>Kenya</option>
              {/* Add more countries as needed */}
            </select>
          </div>
          <div className="UpdateVaccinationRegister__formGroup">
            <label>County*</label>
            <input
              type="text"
              placeholder="Juja sub county"
              value={formData.county || ""}
            />
          </div>
          <div className="UpdateVaccinationRegister__formGroup">
            <label>Address</label>
            <input
              type="text"
              placeholder="Address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
            />
          </div>
          <div className="UpdateVaccinationRegister__formGroup">
            <label>Vacc. Regd. No.*</label>
            <input
              type="text"
              placeholder="1"
              name="vaccRegNo"
              value={formData.vaccRegNo}
              onChange={handleInputChange}
            />
          </div>
          <div className="UpdateVaccinationRegister__formGroup">
            <label>Father Name</label>
            <input
              type="text"
              placeholder="Father Name"
              value={formData.motherName || ""}
            />
          </div>
          <div className="UpdateVaccinationRegister__formGroup">
            <label>Phone number</label>
            <input type="tel" placeholder="Phone number" />
          </div>
          <div className="UpdateVaccinationRegister__formGroup">
            <label>Religion</label>
            <select>
              <option>Brahmin/Chhetri</option>
              {/* Add more religions as needed */}
            </select>
          </div>
          <div className="UpdateVaccinationRegister__formActions">
            <button type="button" onClick={onClose}>
              Cancel
            </button>
            <button type="submit">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateVaccinationRegister;
