import React, { useState } from 'react';
import axios from 'axios'; // Import axios for API requests
import './AddCompany.css';

const AddCompany = ({ closeModal }) => { // Accept closeModal as a prop
  const [companyName, setCompanyName] = useState('');
  const [code, setCode] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newCompany = {
      companyName,
      code,
      address,
      email,
      contactNo,
      description,
    };

    try {
      const response = await axios.post('http://localhost:8080/api/company/saveCompany', newCompany);
      console.log('Company saved:', response.data);
      closeModal(); // Close the modal after successful submission
    } catch (error) {
      console.error('Error saving company:', error);
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <div className="MeasssAddItemSubcategory">
      <h2>Add Company</h2>
      <form onSubmit={handleSubmit}>
        <div className="MeasssFormGroup">
          <label>Company Name<span className="MeasssRequired">*</span></label>
          <input
            type="text"
            placeholder="Company Name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            required
          />
        </div>

        <div className="MeasssFormGroup">
          <label>Code<span className="MeasssRequired">*</span></label>
          <input
            type="text"
            placeholder="Code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            required
          />
        </div>

        <div className="MeasssFormGroup">
          <label>Address</label>
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <div className="MeasssFormGroup">
          <label>Email</label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="MeasssFormGroup">
          <label>Contact No</label>
          <input
            type="text"
            placeholder="Contact No"
            value={contactNo}
            onChange={(e) => setContactNo(e.target.value)}
          />
        </div>

        <div className="MeasssFormGroup">
          <label>Description</label>
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <button type="submit" className="MeasssBtnAdd">Add Company</button>
      </form>
    </div>
  );
};

export default AddCompany;
