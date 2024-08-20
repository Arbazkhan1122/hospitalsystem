import React from 'react';
import "../LabSetting/reportTemplate.css"

const labTests = [
  { reportTemplateShortName: "Biochemistry", templateName: "Biochemistry", templateType: "normal", displaySequence: "5" },
  { reportTemplateShortName: "Hematology ", templateName: "Hematology ", templateType: "normal", displaySequence: "1" },
  // Add more rows as needed
];

const ReportTemplate = () => {
  return (
    <div className="lab-test-container">
      <button className="add-button">+Add New Lab Template</button>
      <input type="text" className="search-box" placeholder="Search" />
      <table className="lab-test-table">
        <thead>
          <tr>
            <th>Report Template ShortName </th>
            <th>Template Name</th>
            <th>Template Type</th>
            <th>Display Sequence</th>
            
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {labTests.map((test, index) => (
            <tr key={index}>
              <td>{test.reportTemplateShortName}</td>
              <td>{test.templateName}</td>
              <td>{test.templateType}</td>
              <td>{test.displaySequence}</td>
              <td><button className="edit-button">Edit</button>
              <button className="edit-button">Deactivate</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="results-info">Showing 74 / 74 results</div>
      <button className="print-button">Print</button>
    </div>
  );
};

export default ReportTemplate;
