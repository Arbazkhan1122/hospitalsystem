// src/ManageUsers.jsx

import React from 'react';
import './Templates.css';

const templatesData = [
    {
        TemplateTypeCode: 'DST',
        TemplateTypeName: 'Discharge Summary',
        Description: 'This is the discharge summary template type',
        IsActive: true,
        Action: ['Edit', 'Deactivate'] // Added Action for demonstration
    }
];

const TemplateType = () => {
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
                <td>{template.TemplateTypeCode}</td>
                <td>{template.TemplateTypeName}</td>
                <td>{template.Description}</td>
                <td>{template.IsActive ? "Yes" : "No"}</td>
                <td className="template-users-action-buttons">
                  {template.Action && template.Action.map((action, idx) => (
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

export default TemplateType;
