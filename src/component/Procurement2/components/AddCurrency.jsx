import React, { useState } from 'react';
import axios from 'axios';
import './AddCurrency.css';

const AddCurrency = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    currencyCode: '',
    description: '',
    active: true,
  });

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:8080/api/currency-codes', formData);
      console.log('Currency added successfully:', response.data);
      // Clear form or show success message if needed
      setFormData({ currencyCode: '', description: '', active: true });
    } catch (error) {
      console.error('Error adding currency:', error);
    }
  };

  return (
    <div className="MeasssAddItemSubcategory">
      <h2>Add Currency</h2>
      <form onSubmit={handleSubmit}>
        <div className="MeasssFormGroup">
          <label>Currency Code<span className="MeasssRequired">*</span></label>
          <input
            type="text"
            name="currencyCode"
            value={formData.currencyCode}
            onChange={handleInputChange}
            placeholder="NPR"
            required
          />
        </div>

        <div className="MeasssFormGroup">
          <label>Description</label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Description"
          />
        </div>

        <div className="MeasssFormGroup">
          <label>Is Active</label>
          <input
            type="checkbox"
            name="active"
            checked={formData.active}
            onChange={handleInputChange}
          />
        </div>
        
        <button type="submit" className="MeasssBtnAdd">Add</button>
      </form>
    </div>
  );
};

export default AddCurrency;
