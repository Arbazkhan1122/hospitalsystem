// export default AddressPage;

import React, { useState } from 'react';
import './AddressPage.css';

const AddressPage = ({sendaddressdata}) => {
  const [addressData, setAddressData] = useState({
    addressType: 'Temporary',
    street1: '',
    street2: '',
    birthCountry: 'Kenya',
    county: 'juja sub county',
    city: '',
    zipCode: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddressData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    sendaddressdata(addressData);
    alert("Address Information Saved Successfully ")
  };

  return (
    <div className="address-page-container">
     
      <div className="address-page-main-content">
      <h2>Address Information</h2>
        <form onSubmit={handleSubmit}>
          <div className="address-page-form-row">
            <div className="address-page-form-group">
              <label htmlFor="addressType">Address Type*:</label>
              <select id="addressType" name="addressType" value={addressData.addressType} onChange={handleChange} required>
                <option value="Temporary">Temporary</option>
                <option value="Permanent">Permanent</option>
              </select>
            </div>
            <div className="address-page-form-group">
              <label htmlFor="street1">Street 1*:</label>
              <input type="text" id="street1" name="street1" value={addressData.street1} onChange={handleChange} required />
            </div>
          </div>
          <div className="address-page-form-row">
            <div className="address-page-form-group">
              <label htmlFor="street2">Street 2:</label>
              <input type="text" id="street2" name="street2" value={addressData.street2} onChange={handleChange} />
            </div>
            <div className="address-page-form-group">
              <label htmlFor="birthCountry">Birth Country*:</label>
              <select id="birthCountry" name="birthCountry" value={addressData.birthCountry} onChange={handleChange} required>
              <option value="sub county"> Birth County</option>
                <option value="India">India</option>
                <option value="Kenya">Kenya</option>
                <option value="Japan">Japan</option>
                <option value="France">France</option>
                {/* Add more country options */}
              </select>
            </div>
          </div>
          <div className="address-page-form-row">
            <div className="address-page-form-group">
              <label htmlFor="county">County*:</label>
              <select id="county" name="county" value={addressData.county} onChange={handleChange} required>
                <option value="sub county"> Current County</option>
                <option value="India">India</option>
                <option value="Kenya">Kenya</option>
                <option value="Japan">Japan</option>
                <option value="France">France</option>
                {/* Add more country options */}
                {/* Add more county options */}
              </select>
            </div>
            <div className="address-page-form-group">
              <label htmlFor="city">City*:</label>
              <input type="text" id="city" name="city" value={addressData.city} onChange={handleChange} required />
            </div>
          </div>
          <div className="address-page-form-row">
            <div className="address-page-form-group">
              <label htmlFor="zipCode">Zip Code:</label>
              <input type="text" id="zipCode" name="zipCode" value={addressData.zipCode} onChange={handleChange} />
            </div>
            <div className="address-page-form-group"></div>
          </div>
          <button type="submit" className="address-page-add-address">Add Address</button>
        </form>
      </div>
    </div>
  );
};

export default AddressPage;
