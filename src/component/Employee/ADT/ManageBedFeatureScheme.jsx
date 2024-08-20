// src/DepartmentTable.jsx

import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

import './ManageWard.css';

const ManageBedFeatureScheme = () => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedImagingType, setSelectedImagingType] = useState(null);
  const [role, setRole] = useState('');
  const [description, setDescription] = useState('');
  const [isActive, setIsActive] = useState(false);

  const handleEditClick = (type) => {
    setSelectedImagingType(type);
    setRole(type.name);
    setDescription(type.feature); // Assuming 'feature' should be the description
    setIsActive(type.isActive);
    setShowEditModal(true);
  };

  const handleCloseModal = () => {
    setShowEditModal(false);
    setSelectedImagingType(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Update logic goes here
    console.log('Updated:', { role, description, isActive });
    handleCloseModal();
  };

  const data = [ 
    { code: 'BF-14', feature: 'Bed 7', name: 'Smooth', isActive: true },
    { code: 'BF-17', feature: 'Bed 10', name: 'Automatic', isActive: true },
    { code: '0010', feature: 'Bed 3', name: 'Recliner', isActive: true },
    { code: '0010', feature: 'Bed 3', name: 'Recliner', isActive: true },
    { code: 'BF-11', feature: 'Bed 4', name: 'Recliner', isActive: true },
    { code: 'BF-11', feature: 'Bed 4', name: 'Recliner', isActive: true },
    { code: 'BF-12', feature: 'Bed 5', name: 'Recliner', isActive: true },
    { code: 'BF-12', feature: 'Bed 5', name: 'Recliner', isActive: true },
    { code: 'BF-13', feature: 'Bed 6', name: 'Smooth', isActive: true },
    { code: 'BF-15', feature: 'Bed 8', name: 'Smooth', isActive: true },
    { code: 'BF-16', feature: 'Bed 9', name: 'Automatic', isActive: true },
    { code: 'BD111', feature: 'Electronic', name: 'Electronic Bed', isActive: true },
    { code: 'BF-8', feature: 'FEMALE WARD', name: '', isActive: true },
    { code: 'BF-8', feature: 'FEMALE WARD', name: '', isActive: true },
    { code: 'BF-1', feature: 'Male Ward', name: '', isActive: true },
    { code: 'BF-9', feature: 'MATERNITY', name: 'MATERNITY WARD', isActive: true },
    { code: 'BF-9', feature: 'MATERNITY', name: 'MATERNITY WARD', isActive: true }
  ];

  return (
    <div className="manage-add-ward-page">
      <div className="manage-add-ward-table-container">
        <div className="manage-add-ward-manage-section">
          <Button className="manage-add-ward-btn">+ Add BedFeature</Button>
        </div>
        <input type="text" placeholder="Search" className="manage-add-ward-search-input" />
        <div className="manage-add-ward-results-info">Showing 17/17 results</div>

        <table className="manage-add-ward-table">
          <thead>
            <tr>
              <th>Code</th>
              <th>Bed Feature</th>
              <th>Full Name</th>
              <th>IsActive</th>
              <th>Action</th>
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
                  <Button
                    className="manage-add-ward-edit-btn"
                    onClick={() => handleEditClick(item)} // Pass the item to handleEditClick
                  >
                    Edit
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="manage-add-ward-pagination">
          <Button className="manage-add-ward-pagination-btn">First</Button>
          <Button className="manage-add-ward-pagination-btn">Previous</Button>
          <span>Page 1 of 4</span>
          <Button className="manage-add-ward-pagination-btn">Next</Button>
          <Button className="manage-add-ward-pagination-btn">Last</Button>
        </div>
      </div>

      <Modal
        show={showEditModal}
        onHide={handleCloseModal}
        dialogClassName="manage-add-employee-role"
      >
        <div className="manage-modal-dialog">
          <div className="manage-modal-modal-header">
            <div className="manage-modal-modal-title">Update Bed Feature</div>
            <Button onClick={handleCloseModal} className="manage-modal-employee-role-btn">
              X
            </Button>
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

              <Form.Group controlId="featureFullName">
                <Form.Label className="manage-modal-form-label">Feature Full Name:</Form.Label>
                <Form.Control
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Feature Full Name"
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
                Update
              </Button>
            </Form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ManageBedFeatureScheme;
