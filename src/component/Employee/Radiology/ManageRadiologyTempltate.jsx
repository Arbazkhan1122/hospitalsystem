import React, { useState } from 'react';
import './ManageImagingType.css';
import UpdateTemplate from './UpdateTemplate';

const ManageRadiologyTemplate = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const templateData = [
    { moduleName: 'Radiology', templateCode: 'CT-SCAN', templateName: 'CT-SCAN' },
    { moduleName: 'Radiology', templateCode: 'Dental X RAY', templateName: 'DENTAL X-RAY' },
    { moduleName: 'Radiology', templateCode: 'MRI', templateName: 'MRI' },
    { moduleName: 'Radiology', templateCode: 'USG Chest', templateName: 'USG Chest' },
  ];

  const handleEditClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="manage-imaging-type-container">
      <div>
        <button className="manage-imaging-type-btn">+Add Template</button>
      </div>
      <input type="text" className="manage-imaging-type-search-bar" placeholder="Search" />

      <div className='manage-type'>
        <table className="manage-imaging-type-table">
          <thead>
            <tr>
              <th>Module Name</th>
              <th>Template Code</th>
              <th>Template Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {templateData.map((item, index) => (
              <tr key={index}>
                <td>{item.moduleName}</td>
                <td>{item.templateCode}</td>
                <td>{item.templateName}</td>
                <td>
                  <button className="manage-imaging-type-edit-button" onClick={handleEditClick}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="manage-imaging-type-pagination">
          <span>1 to 4 of 4</span>
          <div className="manage-imaging-type-pagination-buttons">
            <button>First</button>
            <button>Previous</button>
            <span>Page 1 of 1</span>
            <button>Next</button>
            <button>Last</button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="update-template-modal-overlay">
          <UpdateTemplate onClose={handleCloseModal} />
        </div>
      )}
    </div>
  );
};

export default ManageRadiologyTemplate;
