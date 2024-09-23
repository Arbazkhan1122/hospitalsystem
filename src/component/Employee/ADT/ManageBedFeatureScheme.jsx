import React, { useState, useEffect, useRef } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { startResizing } from '../../TableHeadingResizing/resizableColumns';
import './ManageWard.css';

const ManageBedFeatureScheme = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('add'); // Track whether adding or editing
  const [selectedBedFeature, setSelectedBedFeature] = useState(null);
  const [role, setRole] = useState('');
  const [description, setDescription] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [columnWidths, setColumnWidths] = useState({});
  const tableRef = useRef(null);

  // Handle opening the modal for editing a bed feature
  const handleEditClick = (type) => {
    setSelectedBedFeature(type);
    setRole(type.name);
    setDescription(type.feature); // Assuming 'feature' is the description
    setIsActive(type.isActive);
    setModalType('edit'); // Set mode to edit
    setShowModal(true);
  };

  // Handle opening the modal for adding a new bed feature
  const handleAddClick = () => {
    setSelectedBedFeature(null);
    setRole('');
    setDescription('');
    setIsActive(false);
    setModalType('add'); // Set mode to add
    setShowModal(true);
  };

  // Close modal
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedBedFeature(null);
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    if (modalType === 'edit') {
      // Logic for updating the bed feature goes here
      console.log('Updated:', { role, description, isActive });
    } else {
      // Logic for adding a new bed feature goes here
      console.log('Added:', { role, description, isActive });
    }
    handleCloseModal();
  };

  const data = [ 
    { code: 'BF-14', feature: 'Bed 7', name: 'Smooth', isActive: true },
    { code: 'BF-17', feature: 'Bed 10', name: 'Automatic', isActive: true },
    { code: '0010', feature: 'Bed 3', name: 'Recliner', isActive: true },
    { code: 'BF-11', feature: 'Bed 4', name: 'Recliner', isActive: true },
    { code: 'BF-12', feature: 'Bed 5', name: 'Recliner', isActive: true },
    { code: 'BF-13', feature: 'Bed 6', name: 'Smooth', isActive: true },
    { code: 'BF-15', feature: 'Bed 8', name: 'Smooth', isActive: true },
    { code: 'BF-16', feature: 'Bed 9', name: 'Automatic', isActive: true },
    { code: 'BD111', feature: 'Electronic', name: 'Electronic Bed', isActive: true },
    { code: 'BF-8', feature: 'FEMALE WARD', name: '', isActive: true },
    { code: 'BF-9', feature: 'MATERNITY', name: 'MATERNITY WARD', isActive: true }
  ];

  return (
    <div className="manage-add-ward-page">
      <div className="manage-add-ward-table-container">
        <div className="manage-add-ward-manage-section">
          <Button onClick={handleAddClick} className="manage-add-ward-btn">
            + Add Bed Feature
          </Button>
        </div>
        <input type="text" placeholder="Search" className="manage-add-ward-search-input" />
        <div className="manage-add-ward-results-info">Showing 17/17 results</div>

        <div className='table-container'>
          <table ref={tableRef}>
            <thead>
              <tr>
                {["Code", "Bed Feature", "Full Name", "IsActive", "Action"].map((header, index) => (
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
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.code}</td>
                  <td>{item.feature}</td>
                  <td>{item.name}</td>
                  <td>{item.isActive.toString()}</td>
                  <td>
                    <Button className="manage-add-ward-edit-btn" onClick={() => handleEditClick(item)}>
                      Edit
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="manage-add-ward-pagination">
          <Button className="manage-add-ward-pagination-btn">First</Button>
          <Button className="manage-add-ward-pagination-btn">Previous</Button>
          <span>Page 1 of 4</span>
          <Button className="manage-add-ward-pagination-btn">Next</Button>
          <Button className="manage-add-ward-pagination-btn">Last</Button>
        </div>
      </div>

      {/* Modal for both Add and Edit */}
      <Modal show={showModal} onHide={handleCloseModal} dialogClassName="manage-add-employee-role">
        <div className="manage-modal-dialog">
          <div className="manage-modal-modal-header">
            <div className="manage-modal-modal-title">
              {modalType === 'edit' ? 'Update Bed Feature' : 'Add Bed Feature'}
            </div>
            <Button onClick={handleCloseModal} className="manage-modal-employee-role-btn">X</Button>
          </div>
          <div className="manage-modal-modal-body">
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="role">
                <Form.Label className="manage-modal-form-label">
                  Bed Feature Code <span className="manage-modal-text-danger">*</span>:
                </Form.Label>
                <Form.Control
                  type="text"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  placeholder="Bed Feature Code"
                  required
                  className="manage-modal-form-control"
                />
              </Form.Group>

              <Form.Group controlId="description">
                <Form.Label className="manage-modal-form-label">Feature Name:</Form.Label>
                <Form.Control
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Feature Name"
                  className="manage-modal-form-control"
                />
              </Form.Group>

              <Form.Group controlId="isActive" className="manage-modal-form-group">
                <Form.Label className="manage-modal-form-label">Is Active:</Form.Label>
                <Form.Check
                  type="checkbox"
                  checked={isActive}
                  onChange={(e) => setIsActive(e.target.checked)}
                  className="manage-modal-form-check-input"
                />
              </Form.Group>

              <Button type="submit" className="manage-modal-employee-btn">
                {modalType === 'edit' ? 'Update' : 'Add'}
              </Button>
            </Form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ManageBedFeatureScheme;
