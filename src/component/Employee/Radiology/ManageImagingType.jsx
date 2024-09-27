import React, { useState, useEffect, useRef } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './ManageImagingType.css';
import { startResizing } from '../../TableHeadingResizing/resizableColumns';

const ManageImagingType = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImagingType, setSelectedImagingType] = useState(null);
  const [role, setRole] = useState('');
  const [description, setDescription] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false); // To track whether the form is in Add or Edit mode
  const [columnWidths, setColumnWidths] = useState({});
  const tableRef = useRef(null);

  const handleEditClick = (type) => {
    setSelectedImagingType(type);
    setRole(type.name);
    setIsActive(type.isActive === 'true');
    setIsEditMode(true); // Set to edit mode
    setShowModal(true);
  };

  const handleAddClick = () => {
    setSelectedImagingType(null);
    setRole('');
    setIsActive(false);
    setIsEditMode(false); // Set to add mode
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedImagingType(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isEditMode) {
      console.log('Updated:', { role, description, isActive });
    } else {
      console.log('Added:', { role, description, isActive });
    }
    handleCloseModal();
  };

  const imagingTypes = [
    { name: 'adaddad', isActive: 'false' },
    { name: 'CT-SCAN', isActive: 'true' },
    { name: 'Dental XRAY', isActive: 'false' },
    { name: 'ECHO', isActive: 'true' },
    { name: 'Ijo', isActive: 'true' },
    { name: 'MRI', isActive: 'true' },
    { name: 'Ultra sound', isActive: 'true' },
    { name: 'USG', isActive: 'true' },
    { name: 'X-RAY', isActive: 'true' },
  ];

  return (
    <div className="manage-imaging-type-container">
      <div>
        <button className="manage-imaging-type-btn" onClick={handleAddClick}>
          + Add Imaging Type
        </button>
      </div>
      <input type="text" className="manage-imaging-type-search-bar" placeholder="Search" />
      <div className='table-container'>
        <table ref={tableRef}>
          <thead>
            <tr>
              {["Type Name", "IsActive", "Action"].map((header, index) => (
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
            {imagingTypes.map((type, index) => (
              <tr key={index}>
                <td>{type.name}</td>
                <td>{type.isActive}</td>
                <td>
                  <button
                    className="manage-imaging-type-edit-button"
                    onClick={() => handleEditClick(type)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal show={showModal} onHide={handleCloseModal} dialogClassName="manage-add-employee-role">
        <div className="manage-modal-dialog">
          <div className="manage-modal-modal-header">
            <div className="manage-modal-modal-title">
              {isEditMode ? 'Update Imaging Type' : 'Add Imaging Type'}
            </div>
            <Button onClick={handleCloseModal} className="manage-modal-employee-role-btn">X</Button>
          </div>
          <div className="manage-modal-modal-body">
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="role">
                <Form.Label className="manage-modal-form-label">
                  Imaging Item Name <span className="manage-modal-text-danger">*</span> :
                </Form.Label>
                <Form.Control
                  type="text"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  placeholder="Imaging Type"
                  required
                  className="manage-modal-form-control"
                />
              </Form.Group>

              <Form.Group controlId="isActive" className='manage-modal-form-group'>
                <Form.Label className="manage-modal-form-label">Is Active :</Form.Label>
                <Form.Check
                  type="checkbox"
                  checked={isActive}
                  onChange={(e) => setIsActive(e.target.checked)}
                  className="manage-modal-form-check-input"
                />
              </Form.Group>

              <Button type="submit" className="manage-modal-employee-btn">
                {isEditMode ? 'Update' : 'Add'}
              </Button>
            </Form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ManageImagingType;
