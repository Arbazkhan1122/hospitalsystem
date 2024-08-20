// src/ManageUsers.jsx

import React from 'react';
import './Templates.css';

const templatesData = [
  {
    "Template Type": "Discharge Summary",
    "Template Code": "DSCH-DEF",
    "Template Name": "Default",
    "Description": "Sample template",
    "IsActive": true,
    "Action": [
      "Field Mapping",
      "Edit",
      "Deactivate"
    ]
  },
  {
    "Template Type": "Discharge Summary",
    "Template Code": "DSCH-BIH",
    "Template Name": "Kenyatta National Hospital",
    "Description": "This template is designed As per KNH requirements",
    "IsActive": true,
    "Action": [
      "Field Mapping",
      "Edit",
      "Deactivate"
    ]
  },
  {
    "Template Type": "Discharge Summary",
    "Template Code": "DSCH-FHRC",
    "Template Name": "Nairobi Womens Hospital",
    "Description": "This template is designed As per NWH requirements",
    "IsActive": true,
    "Action": [
      "Field Mapping",
      "Edit",
      "Deactivate"
    ]
  },
  {
    "Template Type": "Discharge Summary",
    "Template Code": "DSCH-APE",
    "Template Name": "Mbagathi Hospital",
    "Description": "This template is designed As per Mbagathi Hospital requirements",
    "IsActive": true,
    "Action": [
      "Field Mapping",
      "Edit",
      "Deactivate"
    ]
  }
];

const Templates = () => {
  return (
    <div className="template-users-container">
      <div className="template-users-header">
        <button className="template-users-add-user-button">+ Add Template</button>
      </div>
      <input type="text" placeholder="Search" className="manage-users-search-input" />
      <div className='template-user-span'>
        <span>Showing {templatesData.length} / {templatesData.length} results</span>
      </div>
      <div className='template-user-tab'>
        <table className="template-users-users-table">
          <thead>
            <tr>
              <th>Template Code</th>
              <th>Template Name</th>
              <th>Description</th>
              <th>Is Active</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {templatesData.map((template, index) => (
              <tr key={index}>
                <td>{template["Template Code"]}</td>
                <td>{template["Template Name"]}</td>
                <td>{template.Description}</td>
                <td>{template.IsActive ? "Yes" : "No"}</td>
                <td className="template-users-action-buttons">
                  {template.Action.map((action, idx) => (
                    <button key={idx} className="template-users-action-button">
                      {action}
                    </button>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="template-users-pagination">
          <div className="template-users-pagination-controls">
            <button>First</button>
            <button>Previous</button>
            <button>Next</button>
            <button>Last</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Templates;
