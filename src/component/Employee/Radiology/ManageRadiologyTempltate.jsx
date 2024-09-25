import React, { useState, useRef } from 'react';
import './ManageImagingType.css';
import UpdateTemplate from './UpdateTemplate';
import { startResizing } from '../../TableHeadingResizing/resizableColumns';

const ManageRadiologyTemplate = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editData, setEditData] = useState(null); // To manage edit state
  const [columnWidths, setColumnWidths] = useState({});
  const tableRef = useRef(null);

  const templateData = [
    { moduleName: 'Radiology', templateCode: 'CT-SCAN', templateName: 'CT-SCAN' },
    { moduleName: 'Radiology', templateCode: 'Dental X RAY', templateName: 'DENTAL X-RAY' },
    { moduleName: 'Radiology', templateCode: 'MRI', templateName: 'MRI' },
    { moduleName: 'Radiology', templateCode: 'USG Chest', templateName: 'USG Chest' },
  ];

  const handleEditClick = (data) => {
    setEditData(data); // Set the template data to be edited
    setIsModalOpen(true);
  };

  const handleAddClick = () => {
    setEditData(null); // Clear data for adding a new template
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditData(null); // Clear data when modal is closed
  };

  return (
    <div className="manage-imaging-type-container">
      <div>
        <button className="manage-imaging-type-btn" onClick={handleAddClick}>+Add Template</button>
      </div>
      <input type="text" className="manage-imaging-type-search-bar" placeholder="Search" />

      <div className='table-container'>
        <table ref={tableRef}>
          <thead>
            <tr>
              {["Module Name", "Template Code", "Template Name", "Action"].map((header, index) => (
                <th
                  key={index}
                  style={{ width: columnWidths[index] }}
                  className="resizable-th"
                >
                  <div className="header-content">
                    <span>{header}</span>
                    <div
                      className="resizer"
                      onMouseDown={startResizing(tableRef, setColumnWidths)(index)}
                    ></div>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {templateData.map((item, index) => (
              <tr key={index}>
                <td>{item.moduleName}</td>
                <td>{item.templateCode}</td>
                <td>{item.templateName}</td>
                <td>
                  <button className="manage-imaging-type-edit-button" onClick={() => handleEditClick(item)}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="update-template-modal-overlay">
          <UpdateTemplate onClose={handleCloseModal} templateData={editData} />
        </div>
      )}
    </div>
  );
};

export default ManageRadiologyTemplate;
