// src/DepartmentTable.jsx

import React, { useState, useEffect, useRef } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { startResizing } from '../../TableHeadingResizing/resizableColumns';
import './ManageWard.css';

const ManageWard = () => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedWard, setSelectedWard] = useState(null);
  const [wardName, setWardName] = useState('');
  const [wardCode, setWardCode] = useState('');
  const [wardLocation, setWardLocation] = useState('');
  const [subStore, setSubStore] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [columnWidths,setColumnWidths] = useState({});
  const tableRef=useRef(null);

  const handleEditClick = (ward) => {
    setSelectedWard(ward);
    setWardName(ward.name);
    setWardCode(ward.code);
    setWardLocation(ward.address);
    setSubStore(ward.parent);
    setIsActive(ward.isActive);
    setShowEditModal(true);
  };

  const handleCloseModal = () => {
    setShowEditModal(false);
    setSelectedWard(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic for updating ward details goes here
    console.log('Updated:', { wardName, wardCode, wardLocation, subStore, isActive });
    handleCloseModal();
  };


  const wardsData = [
    {
        name: 'Brain Ward',
        code: 'BW',
        parent: 'Ward',
        email: 'brainward@example.com',
        phone: '123-456-7890',
        address: '123 Brain St, City, State',
        label: 'Ward Code',
        verification: 'Ward Location',
        isActive: true,
      },
      {
        name: 'Female Ward',
        code: 'Female Ward',
        parent: 'Ward',
        email: 'femaleward@example.com',
        phone: '987-654-3210',
        address: '456 Female St, City, State',
        label: '006',
        verification: 'MATERNITY',
        isActive: true,
      },
      {
        name: 'ICU',
        code: '006',
        parent: 'Ward',
        email: 'icu@example.com',
        phone: '456-123-7890',
        address: '789 ICU St, City, State',
        label: 'Male Ward',
        verification: 'MATERNITY',
        isActive: true,
      },
      {
        name: 'Male Ward',
        code: 'Male Ward',
        parent: 'Ward',
        email: 'maleward@example.com',
        phone: '321-654-9870',
        address: '321 Male St, City, State',
        label: 'MATERNITY',
        verification: 'MATERNITY',
        isActive: true,
      },
      {
        name: 'MATERNITY WARD',
        code: 'MATERNITY',
        parent: 'Ward',
        email: 'maternityward@example.com',
        phone: '654-321-0987',
        address: '654 Maternity St, City, State',
        label: '003',
        verification: 'MATERNITY',
        isActive: true,
      },
      {
        name: 'NICU',
        code: '003',
        parent: 'Ward',
        email: 'nicu@example.com',
        phone: '789-456-1230',
        address: '789 NICU St, City, State',
        label: '007',
        verification: 'MATERNITY',
        isActive: true,
      },
      {
        name: 'Private Ward',
        code: '007',
        parent: 'Ward',
        email: 'privateward@example.com',
        phone: '432-123-5678',
        address: '234 Private St, City, State',
        label: 'Ward Location',
        verification: 'MATERNITY',
        isActive: true,
      },
    ];
  
  

  return (
    <div className="manage-add-ward-page">
      <div className="manage-add-ward-table-container">
        <div className="manage-add-ward-manage-section">
          <Button className="manage-add-ward-btn">+ Add Ward</Button>
        </div>
        <input type="text" placeholder="Search" className="manage-add-ward-search-input" />
        <div className="manage-add-ward-results-info">Showing {wardsData.length} results</div>

        <div className='table-container'>
        <table  ref={tableRef}>
          <thead>
            <tr>
              {[
                "Name",
                "Code",
                "Parent Substore",
                "Email",
                "Phone",
                "Address",
                "Label",
                "Verification",
                "Is Active",
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
                      onMouseDown={startResizing(
                        tableRef,
                        setColumnWidths
                      )(index)}
                    ></div>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {wardsData.map((ward, index) => (
              <tr key={index}>
                <td>{ward.name}</td>
                <td>{ward.code}</td>
                <td>{ward.parent}</td>
                <td>{ward.email}</td>
                <td>{ward.phone}</td>
                <td>{ward.address}</td>
                <td>{ward.label}</td>
                <td>{ward.verification}</td>
                <td>{ward.isActive.toString()}</td>
                <td>
                  <Button
                    className="manage-add-ward-edit-btn"
                    onClick={() => handleEditClick(ward)}
                  >
                    Edit
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>

        {/* <div className="manage-add-ward-pagination">
          <Button className="manage-add-ward-pagination-btn">First</Button>
          <Button className="manage-add-ward-pagination-btn">Previous</Button>
          <span>Page 1 of 1</span>
          <Button className="manage-add-ward-pagination-btn">Next</Button>
          <Button className="manage-add-ward-pagination-btn">Last</Button>
        </div> */}
      </div>

      <Modal show={showEditModal} onHide={handleCloseModal} dialogClassName="manage-add-employee-role">
        <div className="manage-modal-dialog">
          <div className="manage-modal-modal-header">
            <div className="manage-modal-modal-title">Update Ward Department</div>
            <Button onClick={handleCloseModal} className="manage-modal-employee-role-btn">
              X
            </Button>
          </div>
          <div className="manage-modal-modal-body">
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="wardName">
                <Form.Label className="manage-modal-form-label">
                  Ward Name <span className="manage-modal-text-danger">*</span>:
                </Form.Label>
                <Form.Control
                  type="text"
                  value={wardName}
                  onChange={(e) => setWardName(e.target.value)}
                  placeholder="Ward Name"
                  required
                  className="manage-modal-form-control"
                />
              </Form.Group>

              <Form.Group controlId="wardCode">
                <Form.Label className="manage-modal-form-label">Ward Code:</Form.Label>
                <Form.Control
                  type="text"
                  value={wardCode}
                  onChange={(e) => setWardCode(e.target.value)}
                  placeholder="Ward Code"
                  className="manage-modal-form-control"
                />
              </Form.Group>

              <Form.Group controlId="wardLocation">
                <Form.Label className="manage-modal-form-label">Ward Location:</Form.Label>
                <Form.Control
                  type="text"
                  value={wardLocation}
                  onChange={(e) => setWardLocation(e.target.value)}
                  placeholder="Ward Location"
                  className="manage-modal-form-control"
                />
              </Form.Group>

              <Form.Group controlId="subStore">
                <Form.Label className="manage-modal-form-label">Sub Store:</Form.Label>
                <Form.Control
                  type="text"
                  value={subStore}
                  onChange={(e) => setSubStore(e.target.value)}
                  placeholder="Sub Store"
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

export default ManageWard;