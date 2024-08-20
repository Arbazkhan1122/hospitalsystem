// src/DepartmentTable.jsx

import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './ManageWard.css';

const ManageBed = () => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedBed, setSelectedBed] = useState(null);
  const [bedFeatures, setBedFeatures] = useState('');
  const [bedNumber, setBedNumber] = useState('');
  const [bedCode, setBedCode] = useState('');
  const [isActive, setIsActive] = useState(false);

  const handleEditClick = (bed) => {
    setSelectedBed(bed);
    setBedFeatures(bed.bedFeatures);
    setBedNumber(bed.bedNumber);
    setBedCode(bed.bedCode);
    setIsActive(bed.isActive);
    setShowEditModal(true);
  };

  const handleCloseModal = () => {
    setShowEditModal(false);
    setSelectedBed(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic for updating bed details goes here
    console.log('Updated:', { bedFeatures, bedNumber, bedCode, isActive });
    handleCloseModal();
  };

  const data = [ 
    { ward: 'Male Ward', bedFeatures: 'Male Ward', bedNumber: '001', bedCode: 'Male Ward-001', isActive: true, status: 'Available' },
    { ward: 'Male Ward', bedFeatures: 'Male Ward', bedNumber: '002', bedCode: 'Male Ward-002', isActive: true, status: 'Occupied' },
    { ward: 'Male Ward', bedFeatures: 'Male Ward', bedNumber: '003', bedCode: 'Male Ward-003', isActive: true, status: 'Occupied' },
    { ward: 'Male Ward', bedFeatures: 'Male Ward', bedNumber: '004', bedCode: 'Male Ward-004', isActive: true, status: 'Occupied' },
    { ward: 'Male Ward', bedFeatures: 'Male Ward', bedNumber: '005', bedCode: 'Male Ward-005', isActive: true, status: 'Available' },
    { ward: 'Female Ward', bedFeatures: 'FEMALE WARD', bedNumber: '001', bedCode: 'Female Ward-001', isActive: true, status: 'Occupied' },
    { ward: 'Female Ward', bedFeatures: 'FEMALE WARD', bedNumber: '002', bedCode: 'Female Ward-002', isActive: true, status: 'Occupied' },
    { ward: 'Female Ward', bedFeatures: 'Bed 10', bedNumber: '003', bedCode: 'Female Ward-003', isActive: true, status: 'Available' },
    { ward: 'Female Ward', bedFeatures: 'Bed 7', bedNumber: '004', bedCode: 'Female Ward-004', isActive: true, status: 'Occupied' },
    { ward: 'Female Ward', bedFeatures: 'Bed 4', bedNumber: '005', bedCode: 'Female Ward-005', isActive: true, status: 'Occupied' },
    { ward: 'Maternity Ward', bedFeatures: 'Bed 10', bedNumber: '006', bedCode: 'Maternity Ward-006', isActive: true, status: 'Available' },
    { ward: 'Maternity Ward', bedFeatures: 'Bed 10', bedNumber: '002', bedCode: 'Maternity Ward-002', isActive: true, status: 'Available' },
    { ward: 'Maternity Ward', bedFeatures: 'Bed 10', bedNumber: '003', bedCode: 'Maternity Ward-003', isActive: true, status: 'Available' },
    { ward: 'Maternity Ward', bedFeatures: 'Bed 10', bedNumber: '004', bedCode: 'Maternity Ward-004', isActive: true, status: 'Available' },
    { ward: 'Maternity Ward', bedFeatures: 'Bed 4', bedNumber: '005', bedCode: 'Maternity Ward-005', isActive: true, status: 'Occupied' },
    { ward: 'Maternity Ward', bedFeatures: 'Bed 3', bedNumber: '006', bedCode: 'Maternity Ward-006', isActive: true, status: 'Occupied' },
    { ward: 'Maternity Ward', bedFeatures: 'Maternity', bedNumber: 'MAT001', bedCode: 'Maternity-MAT001', isActive: true, status: 'Occupied' },
    { ward: 'Maternity Ward', bedFeatures: 'Maternity', bedNumber: 'MAT002', bedCode: 'Maternity-MAT002', isActive: true, status: 'Available' },
    { ward: 'ICU', bedFeatures: 'Bed 10', bedNumber: '01', bedCode: '006-01', isActive: true, status: 'Available' },
  ];

  return (
    <div className="manage-add-ward-page">
      <div className="manage-add-ward-table-container">
        <div className="manage-add-ward-manage-section">
          <Button className="manage-add-ward-btn">+ Add Bed</Button>
        </div>
        <input type="text" placeholder="Search" className="manage-add-ward-search-input" />
        <div className="manage-add-ward-results-info">Showing {data.length} results</div>

        <table className="manage-add-ward-table">
          <thead>
            <tr>
              <th>Ward</th>
              <th>Bed Features</th>
              <th>Bed Number</th>
              <th>Bed Code</th>
              <th>Is Active</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.ward}</td>
                <td>{item.bedFeatures}</td>
                <td>{item.bedNumber}</td>
                <td>{item.bedCode}</td>
                <td>{item.isActive ? 'true' : 'false'}</td>
                <td>{item.status}</td>
                <td>
                  <Button
                    className="manage-add-ward-edit-btn"
                    onClick={() => handleEditClick(item)}
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

      <Modal show={showEditModal} onHide={handleCloseModal} dialogClassName="manage-add-employee-role">
        <div className="manage-modal-dialog">
          <div className="manage-modal-modal-header">
            <div className="manage-modal-modal-title">Update Bed</div>
            <Button onClick={handleCloseModal} className="manage-modal-employee-role-btn">
              X
            </Button>
          </div>
          <div className="manage-modal-modal-body">
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="bedFeatures">
                <Form.Label className="manage-modal-form-label">
                  Bed Features <span className="manage-modal-text-danger">*</span>:
                </Form.Label>
                <Form.Control
                  type="text"
                  value={bedFeatures}
                  onChange={(e) => setBedFeatures(e.target.value)}
                  placeholder="Bed Features"
                  required
                  className="manage-modal-form-control"
                />
              </Form.Group>

              <Form.Group controlId="bedNumber">
                <Form.Label className="manage-modal-form-label">Bed Number:</Form.Label>
                <Form.Control
                  type="text"
                  value={bedNumber}
                  onChange={(e) => setBedNumber(e.target.value)}
                  placeholder="Bed Number"
                  className="manage-modal-form-control"
                />
              </Form.Group>

              <Form.Group controlId="bedCode">
                <Form.Label className="manage-modal-form-label">Bed Code:</Form.Label>
                <Form.Control
                  type="text"
                  value={bedCode}
                  onChange={(e) => setBedCode(e.target.value)}
                  placeholder="Bed Code"
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

export default ManageBed;
