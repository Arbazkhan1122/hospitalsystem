// src/ManageUsers.jsx

import React, { useState, useRef } from 'react';
import './Templates.css';
import { startResizing } from '../../TableHeadingResizing/resizableColumns';
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
  const [columnWidths, setColumnWidths] = useState({});
  const tableRef = useRef(null);
  return (
    <div className="template-users-container">
      <div className="template-users-header">
        <button className="template-users-add-user-button">+ Add Template</button>
      </div>
      <input type="text" placeholder="Search" className="manage-users-search-input" />
      <div className='template-user-span'>
        <span>Showing {templatesData.length} / {templatesData.length} results</span>
      </div>
      <div className='table-container'>
      <table ref={tableRef}>
          <thead>
            <tr>
              {[ "Template Code",
  "Template Name",
  "Description",
  "Is Active",
  "Action"
    ]
  .map((header, index) => (
                <th key={index} style={{ width: columnWidths[index] }} className="resizable-th">
                  <div className="header-content">
                    <span>{header}</span>
                    <div className="resizer" onMouseDown={startResizing(tableRef, setColumnWidths)(index)}></div>
                  </div>
                </th>
              ))}
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
        {/* <div className="template-users-pagination">
          <div className="template-users-pagination-controls">
            <button>First</button>
            <button>Previous</button>
            <button>Next</button>
            <button>Last</button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Templates;
