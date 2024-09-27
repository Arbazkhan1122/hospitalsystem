import React, { useState } from 'react';
import "../LabSetting/labTestComponentsAddNewLTC.css";

const LabTestComponentsAddNewLTC = ({ onClose }) => {
  const [valueType, setValueType] = useState('text');
  const [formData, setFormData] = useState({
    componentName: '',
    unit: '',
    valueType: 'text',
    controlType: 'TextBox',
    rangeDescription: '',
    method: '',
    minValue: '',
    maxValue: '',
    maleRange: '',
    femaleRange: '',
    childRange: '',
    displayName: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleValueTypeChange = (e) => {
    const { value } = e.target;
    setValueType(value);
    setFormData((prevData) => ({
      ...prevData,
      valueType: value,
    }));
  };

  const handleSubmit = async () => {
    const postData = {
      ...formData,
      createdOn: new Date().toISOString().split('T')[0], // Get current date in yyyy-mm-dd format
      componentRange: `${formData.minValue}-${formData.maxValue}`, // Combine min and max values into a range
    };

    try {
      const response = await fetch(`${API_BASE_URL}/lab-components/save-components`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Data successfully submitted:', result);
      } else {
        console.error('Error submitting data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="labTestComponentsAddNewLTC-container">
      <div className="labTestComponentsAddNewLTC-header">
        <h3>Add Components</h3>
        <button className="labTestComponentsAddNewLTC-close-btn" onClick={onClose}>x</button>
      </div>

      <div className="labTestComponentsAddNewLTC-table">
        <div className="labTestComponentsAddNewLTC-fsttable">
          <table>
            <thead>
              <tr>
                <th>Component Name</th>
                <th>Unit</th>
                <th>Value Type</th>
                <th>Control Type</th>
                <th>Range Description</th>
                <th>Method</th>
                <th>Value LookUp</th>
                <th>Display Name</th>
                <th>Value Precision</th>
              </tr>
            </thead>
          </table>
        </div>
        <div className="labTestComponentsAddNewLTC-row">
          <div className="labTestComponentsAddNewLTC-cell labTestComponentsAddNewLTC-component-name">
            <button className="labTestComponentsAddNewLTC-add-button"><i className="fa-solid fa-plus"></i></button>
            <input
              type="text"
              name="componentName"
              placeholder="Component Name"
              value={formData.componentName}
              onChange={handleInputChange}
            />
          </div>
          <div className="labTestComponentsAddNewLTC-cell">
            <input
              type="text"
              name="unit"
              placeholder="Unit"
              value={formData.unit}
              onChange={handleInputChange}
            />
          </div>
          <div className="labTestComponentsAddNewLTC-cell">
            <select value={valueType} onChange={handleValueTypeChange}>
              <option value="text">Text</option>
              <option value="number">Number</option>
              <option value="date">Date</option>
            </select>
          </div>
          <div className="labTestComponentsAddNewLTC-cell">
            <select
              name="controlType"
              value={formData.controlType}
              onChange={handleInputChange}
            >
              <option>TextBox</option>
              <option>Dropdown</option>
              <option>Checkbox</option>
            </select>
          </div>

          {/* Conditionally render Range fields if valueType is 'number' */}
          <div className="labTestComponentsAddNewLTC-cell-sub">
            <div className="labTestComponentsAddNewLTC-cell labTestComponentsAddNewLTC-description">
              <textarea
                name="rangeDescription"
                placeholder="Description"
                value={formData.rangeDescription}
                onChange={handleInputChange}
              />
            </div>
            {valueType === 'number' && (
              <>
                <div className="labTestComponentsAddNewLTC-cell labTestComponentsAddNewLTC-range-buttons">
                  <samp>Gen. Range</samp>
                  <samp>Male Range</samp>
                  <samp>Female Range</samp>
                  <samp>Child Range</samp>
                </div>
                <div className="labTestComponentsAddNewLTC-cell labTestComponentsAddNewLTC-range-buttons">
                  <div>
                    <input
                      type="text"
                      name="minValue"
                      placeholder="Min"
                      value={formData.minValue}
                      onChange={handleInputChange}
                    />
                    <input
                      type="text"
                      name="maxValue"
                      placeholder="Max"
                      value={formData.maxValue}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                  <input
                      type="text"
                      name="minValue"
                      placeholder="Min"
                      value={formData.minValue}
                      onChange={handleInputChange}
                    />
                    <input
                      type="text"
                      name="maxValue"
                      placeholder="Max"
                      value={formData.maxValue}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                  <input
                      type="text"
                      name="minValue"
                      placeholder="Min"
                      value={formData.minValue}
                      onChange={handleInputChange}
                    />
                    <input
                      type="text"
                      name="maxValue"
                      placeholder="Max"
                      value={formData.maxValue}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                  <input
                      type="text"
                      name="minValue"
                      placeholder="Min"
                      value={formData.minValue}
                      onChange={handleInputChange}
                    />
                    <input
                      type="text"
                      name="maxValue"
                      placeholder="Max"
                      value={formData.maxValue}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="labTestComponentsAddNewLTC-cell">
            <input
              type="text"
              name="method"
              placeholder="Method"
              value={formData.method}
              onChange={handleInputChange}
            />
          </div>
          <div className="labTestComponentsAddNewLTC-cell">
            <input
              type="text"
              name="lookupId"
              placeholder="Enter LookUp Name"
              value={formData.lookupId}
              onChange={handleInputChange}
            />
          </div>
          <div className="labTestComponentsAddNewLTC-cell">
            <input
              type="text"
              name="displayName"
              placeholder="Component Display Name"
              value={formData.displayName}
              onChange={handleInputChange}
            />
          </div>
          <div className="labTestComponentsAddNewLTC-cell">
            <input
              type="number"
              name="valuePrecision"
              placeholder="0"
              value={formData.valuePrecision}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="labTestComponentsAddNewLTC-footer">
          <button
            className="labTestComponentsAddNewLTC-add-button labTestComponentsAddNewLTC-add-footer-button"
            onClick={handleSubmit}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default LabTestComponentsAddNewLTC;
