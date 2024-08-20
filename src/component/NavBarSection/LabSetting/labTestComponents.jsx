import React from 'react';
import "../LabSetting/labTestComponents.css"
const labTests = [
  { componentName: "2 hr PP Blood Sugar", displayName: "2 hr PP Blood Sugar", unit: "mg/dl", range: "70-140", controlType: "TextBox", valueType: "number" },
  { componentName: "ALKALINE PHOSPHATASE", displayName: "ALKALINE PHOSPHATASE", unit: "IU/L", range: "30-260", controlType: "TextBox", valueType: "number" },
  // Add more rows as needed
];

const LabTestComponent = () => {
  return (
    <div className="lab-test-container">
      <button className="add-button">+Add New Lab Test Component</button>
      <input type="text" className="search-box" placeholder="Search" />
      <table className="lab-test-table">
        <thead>
          <tr>
            <th>ComponentName</th>
            <th>Display Name</th>
            <th>Unit</th>
            <th>Range</th>
            <th>Range Description</th>
            <th>Method</th>
            <th>ControlType</th>
            <th>ValueType</th>
            <th>Value Lookup</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {labTests.map((test, index) => (
            <tr key={index}>
              <td>{test.componentName}</td>
              <td>{test.displayName}</td>
              <td>{test.unit}</td>
              <td>{test.range}</td>
              <td></td>
              <td></td>
              <td>{test.controlType}</td>
              <td>{test.valueType}</td>
              <td></td>
              <td><button className="edit-button">Edit</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="results-info">Showing 74 / 74 results</div>
      <button className="print-button">Print</button>
    </div>
  );
};

export default LabTestComponent;
