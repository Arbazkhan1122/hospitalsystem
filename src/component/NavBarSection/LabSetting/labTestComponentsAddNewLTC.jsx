import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import "../LabSetting/labTestComponentsAddNewLTC.css";

const FormInput = ({
  name,
  value,
  placeholder,
  onChange,
  type = "text",
  disabled = false,
}) => (
  <input
    type={type}
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className="labTestInput"
    disabled={disabled}
  />
);

const FormTextarea = ({ name, value, placeholder, onChange }) => (
  <textarea
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className="labTestTextarea"
  />
);

const LabTestComponentsAddNewLTC = ({ onClose }) => {
  const [lookupData, setLookupData] = useState([]);
  const [componentsArray, setComponentsArray] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const [formData, setFormData] = useState({
    componentName: "",
    unit: "",
    valueType: "text",
    controlType: "TextBox",
    rangeDescription: "",
    method: "",
    componentRange: "",
    lookupId: null,
    displayName: "",
    valuePrecision: "",
    maleRange: "",
    femaleRange: "",
    childRange: "",
    minValue: "",
    maxValue: "",
    createdOn: new Date().toISOString(),
  });

  useEffect(() => {
    const fetchLookupData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:1415/api/lab-lookups/getAll-lookup"
        );
        setLookupData(response.data);
      } catch (error) {
        console.error("Error fetching lookup data:", error);
      }
    };

    fetchLookupData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: name === "lookupId" ? parseInt(value) : value,
    }));
  };

  const handleAddComponent = () => {
    const newComponent = { ...formData };

    // Remove range-related fields if not a number
    if (newComponent.valueType !== "number") {
      delete newComponent.maleRange;
      delete newComponent.femaleRange;
      delete newComponent.childRange;
      delete newComponent.minValue;
      delete newComponent.maxValue;
    }

    if (isEditing) {
      const updatedArray = componentsArray.map((component, index) =>
        index === editIndex ? newComponent : component
      );
      setComponentsArray(updatedArray);
      resetForm();
    } else {
      setComponentsArray((prevArray) => [...prevArray, newComponent]);
      resetForm();
    }
  };

  const resetForm = () => {
    setFormData({
      componentName: "",
      unit: "",
      valueType: "text",
      controlType: "TextBox",
      rangeDescription: "",
      method: "",
      componentRange: "",
      lookupId: null,
      displayName: "",
      valuePrecision: "",
      maleRange: "",
      femaleRange: "",
      childRange: "",
      minValue: "",
      maxValue: "",
      createdOn: new Date().toISOString(),
    });
    setIsEditing(false);
    setEditIndex(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (componentsArray.length === 0) {
      alert("Add Component First");
      return;
    }

    try {
      await axios.post(
        "http://localhost:1415/api/lab-components/save-components",
        componentsArray
      );
      onClose();
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  const handleEdit = (index) => {
    const componentToEdit = componentsArray[index];
    setFormData(componentToEdit);
    setIsEditing(true);
    setEditIndex(index);
  };

  return (
    <div className="labTestComponentsAddNewLTC-container">
      <div className="labTestComponentsAddNewLTC-header">
        <h3>{isEditing ? "Edit Component" : "Add Components"}</h3>
        <button
          className="labTestComponentsAddNewLTC-close-btn"
          onClick={onClose}
        >
          x
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <table className="labTestComponentsAddNewLTC-table">
          <thead>
            <tr>
              <th></th>
              <th>Component Name</th>
              <th>Unit</th>
              <th>Value Type</th>
              <th>Control Type</th>
              <th>Component Range</th>
              <th>Range Description</th>
              <th>Method</th>
              <th>Value Lookup</th>
              <th>Display Name</th>
              <th>Value Precision</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <button
                  type="button"
                  className="labTestComponentsAddNewLTC-add-button"
                  onClick={handleAddComponent}
                >
                  {isEditing ? "Update" : <i className="fa-solid fa-plus"></i>}
                </button>
              </td>
              <td>
                <FormInput
                  name="componentName"
                  value={formData.componentName}
                  placeholder="Component Name"
                  onChange={handleChange}
                />
              </td>
              <td>
                <FormInput
                  name="unit"
                  value={formData.unit}
                  placeholder="Unit"
                  onChange={handleChange}
                />
              </td>
              <td>
                <select
                  name="valueType"
                  value={formData.valueType}
                  onChange={handleChange}
                  className="labTestSelect"
                >
                  <option value="text">Text</option>
                  <option value="number">Number</option>
                </select>
              </td>
              <td>
                <select
                  name="controlType"
                  value={formData.controlType}
                  onChange={handleChange}
                  className="labTestSelect"
                >
                  <option value="TextBox">TextBox</option>
                  <option value="Dropdown">Dropdown</option>
                  <option value="Checkbox">Checkbox</option>
                </select>
              </td>
              <td>
                <FormTextarea
                  name="componentRange"
                  value={formData.componentRange}
                  placeholder="Component Range"
                  onChange={handleChange}
                />
              </td>
              <td>
                <FormTextarea
                  name="rangeDescription"
                  value={formData.rangeDescription}
                  placeholder="Range Description"
                  onChange={handleChange}
                />
              </td>
              <td>
                <FormInput
                  name="method"
                  value={formData.method}
                  placeholder="Method"
                  onChange={handleChange}
                />
              </td>
              <td>
                <select
                  name="lookupId"
                  value={formData.lookupId}
                  onChange={handleChange}
                  className="labTestSelect"
                >
                  <option value="">Select Lookup</option>
                  {lookupData.map((lookup) => (
                    <option key={lookup.labLookupId} value={lookup.labLookupId}>
                      {lookup.lookupName}
                    </option>
                  ))}
                </select>
              </td>
              <td>
                <FormInput
                  name="displayName"
                  value={formData.displayName}
                  placeholder="Display Name"
                  onChange={handleChange}
                />
              </td>
              <td>
                <FormInput
                  name="valuePrecision"
                  value={formData.valuePrecision}
                  placeholder="Value Precision"
                  onChange={handleChange}
                />
              </td>
            </tr>
            {formData.valueType === "number" && (
              <>
                <tr>
                  <td colSpan="2">Male Range</td>
                  <td colSpan="3">
                    <FormInput
                      name="maleRange"
                      value={formData.maleRange}
                      placeholder="Male Range"
                      onChange={handleChange}
                    />
                  </td>
                  <td colSpan="2">Female Range</td>
                  <td colSpan="4">
                    <FormInput
                      name="femaleRange"
                      value={formData.femaleRange}
                      placeholder="Female Range"
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">Child Range</td>
                  <td colSpan="3">
                    <FormInput
                      name="childRange"
                      value={formData.childRange}
                      placeholder="Child Range"
                      onChange={handleChange}
                    />
                  </td>
                  <td colSpan="2">Min Value</td>
                  <td colSpan="4">
                    <FormInput
                      name="minValue"
                      value={formData.minValue}
                      placeholder="Min Value"
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">Max Value</td>
                  <td colSpan="3">
                    <FormInput
                      name="maxValue"
                      value={formData.maxValue}
                      placeholder="Max Value"
                      onChange={handleChange}
                    />
                  </td>
                </tr>
              </>
            )}
          </tbody>
        </table>

        <div className="labTestComponentsAddNewLTC-footer">
          <button
            type="submit"
            className="labTestComponentsAddNewLTC-add-footer-button"
          >
            Submit
          </button>
        </div>
      </form>

      <div className="labTestComponentAddedComponentContainer">
        <h4>Added Components:</h4>
        <ul>
          {componentsArray.map((component, index) => (
            <li key={index}>
              {component.componentName} - {component.unit} -{" "}
              {component.valueType} - {component.controlType}-{" "}
              {component.rangeDescription} - {component.componentRange} -{" "}
              {component.rangeDescription} - {component.method} -{" "}
              {component.lookupId} - {component.displayName} -{" "}
              {component.valuePrecision}
              <button
                className="labTestComponentAddedUpdateBTN"
                onClick={() => handleEdit(index)}
              >
                Edit
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

LabTestComponentsAddNewLTC.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default LabTestComponentsAddNewLTC;
