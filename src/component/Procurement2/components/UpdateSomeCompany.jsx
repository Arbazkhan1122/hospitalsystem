import React, { useState, useEffect } from 'react';
import './UpdateSomeCompany.css';
import axios from 'axios';

const UpdateSomeCompany = ({ company, closeModal }) => {
  // Set initial state for the company fields using the passed `company` prop
  const [companyData, setCompanyData] = useState({
    name: company?.companyName || '',
    code: company?.code || '',
    address: company?.address || '',
    email: company?.email || '',
    contact: company?.contactNo || '',
    description: company?.description || ''
  });

  // Update the form fields as the user types
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCompanyData({
      ...companyData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make an API request to update the company data
      await axios.put(`http://localhost:8080/api/company/updateCompany/${company.id}`, companyData);
      alert('Company updated successfully!');
      closeModal(); // Close the modal after successful update
    } catch (error) {
      alert('Failed to update company: ' + error.message);
    }
  };

  return (
    <div className="MeasssAddItemSubcategory">
      <h2>Update Some Company</h2>
      <form onSubmit={handleSubmit}>
        <div className="MeasssFormGroup">
          <label>Company Name<span className="MeasssRequired">*</span></label>
          <input
            type="text"
            name="name"
            value={companyData.name}
            onChange={handleInputChange}
            placeholder="Some Company"
            required
          />
        </div>

        <div className="MeasssFormGroup">
          <label>Code<span className="MeasssRequired">*</span></label>
          <input
            type="text"
            name="code"
            value={companyData.code}
            onChange={handleInputChange}
            placeholder="Code"
            required
          />
        </div>

        <div className="MeasssFormGroup">
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={companyData.address}
            onChange={handleInputChange}
            placeholder="Address"
          />
        </div>

        <div className="MeasssFormGroup">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={companyData.email}
            onChange={handleInputChange}
            placeholder="Email"
          />
        </div>

        <div className="MeasssFormGroup">
          <label>Contact No</label>
          <input
            type="text"
            name="contact"
            value={companyData.contact}
            onChange={handleInputChange}
            placeholder="Contact No"
          />
        </div>

        <div className="MeasssFormGroup">
          <label>Description</label>
          <input
            type="text"
            name="description"
            value={companyData.description}
            onChange={handleInputChange}
            placeholder="Description"
          />
        </div>

        <button type="submit" className="MeasssBtnAdd">Update</button>
      </form>
    </div>
  );
};

export default UpdateSomeCompany;
