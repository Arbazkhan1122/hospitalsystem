import React, { useState, useEffect, useRef } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './ManageWard.css';
import { startResizing } from '../../TableHeadingResizing/resizableColumns';

const ManageBed = () => {
  const [showModal, setShowModal] = useState(false);  // Unified modal for both Add/Edit
  const [selectedBed, setSelectedBed] = useState(null);
  const [bedFeatures, setBedFeatures] = useState('');
  const [bedNumber, setBedNumber] = useState('');
  const [bedCode, setBedCode] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [columnWidths, setColumnWidths] = useState({});
  const tableRef = useRef(null);

  // Function to handle opening the form for adding a new bed
  const handleAddClick = () => {
    setSelectedBed(null); // Clear selected bed (indicates adding a new bed)
    setBedFeatures('');
    setBedNumber('');
    setBedCode('');
    setIsActive(false);
    setShowModal(true);  // Show the form modal
  };

  // Function to handle opening the form for editing an existing bed
  const handleEditClick = (bed) => {
    setSelectedBed(bed);  // Set the selected bed (indicates editing)
    setBedFeatures(bed.bedFeatures);
    setBedNumber(bed.bedNumber);
    setBedCode(bed.bedCode);
    setIsActive(bed.isActive);
    setShowModal(true);  // Show the form modal
  };

  // Close the modal and clear form fields
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedBed(null);
  };

  // Handle the submission of the form for both adding and editing beds
  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedBed) {
      // Logic for updating bed details goes here
      console.log('Updated:', { bedFeatures, bedNumber, bedCode, isActive });
    } else {
      // Logic for adding a new bed goes here
      console.log('Added new bed:', { bedFeatures, bedNumber, bedCode, isActive });
    }
    handleCloseModal(); // Close the modal after submission
  };

  const data = [  { ward: 'Male Ward', bedFeatures: 'Male Ward', bedNumber: '001', bedCode: 'Male Ward-001', isActive: true, status: 'Available' },
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
    { ward: 'ICU', bedFeatures: 'Bed 10', bedNumber: '01', bedCode: '006-01', isActive: true, status: 'Available' }, ];

  return (
    <div className="manage-add-ward-page">
      <div className="manage-add-ward-table-container">
        <div className="manage-add-ward-manage-section">
          <Button className="manage-add-ward-btn" onClick={handleAddClick}>
            + Add Bed
          </Button>
        </div>
        <input type="text" placeholder="Search" className="manage-add-ward-search-input" />
        <div className="manage-add-ward-results-info">Showing {data.length} results</div>
        
        <div className="table-container">
          <table ref={tableRef}>
            <thead>
              <tr>
                {[
                  "Ward",
                  "Bed Features",
                  "Bed Number",
                  "Bed Code",
                  "Is Active",
                  "Status",
                  "Action"
                ].map((header, index) => (
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
        </div>
      </div>

      {/* Modal for Add/Edit Bed */}
      <Modal show={showModal} onHide={handleCloseModal} dialogClassName="manage-add-employee-role">
        <div className="manage-modal-dialog">
          <div className="manage-modal-modal-header">
            <div className="manage-modal-modal-title">
              {selectedBed ? 'Update Bed' : 'Add New Bed'}
            </div>
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
                {selectedBed ? 'Update' : 'Add'}
              </Button>
            </Form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ManageBed;
