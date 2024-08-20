// src/DepartmentTable.jsx

import React, { useState } from 'react'; // Make sure useState is imported
import { Modal, Button } from 'react-bootstrap';
import UpdateDepartmentForm from './UpdateDepartmentForm';
import './ManageDepartment.css';

const ManageDepartment = () => {
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState(null);

  const handleShowUpdateModal = (department) => {
    setSelectedDepartment(department);
    setShowUpdateModal(true);
  };

  const handleCloseUpdateModal = () => {
    setShowUpdateModal(false);
    setSelectedDepartment(null);
  };
  const data = [
    { code: 'ACC', name: 'Account', parent: '', description: '', isActive: true, isAppointment: false },
    { code: 'Admin', name: 'ADMINISTRATION', parent: '', description: 'For hospital admins, etc.', isActive: true, isAppointment: false },
    { code: 'Anes', name: 'Anesthesia', parent: '', description: '', isActive: true, isAppointment: true },
    { code: 'Bill', name: 'Billing', parent: '', description: '', isActive: true, isAppointment: false },
    { code: '1001', name: 'Brain operations', parent: 'Operations Depart...', description: '', isActive: true, isAppointment: false },
    { code: 'CABIN', name: 'Cabin/Deluxe/Suite', parent: '', description: 'Cabin ward, Deluxe ward, ...', isActive: true, isAppointment: true },
    { code: 'Cardio', name: 'Cardiology', parent: '', description: '', isActive: true, isAppointment: true },
    { code: 'Cath Lab', name: 'Cath lab', parent: '', description: '', isActive: true, isAppointment: false },
    { code: 'CLEANING', name: 'Cleaning Department', parent: '', description: 'Cleaning Department', isActive: true, isAppointment: false },
    { code: 'CSSD', name: 'CSSD', parent: '', description: '', isActive: true, isAppointment: false },
    { code: 'CT-MRI', name: 'CT/MRI', parent: 'CT/MRI', description: 'CT Scan and MRI departm...', isActive: true, isAppointment: false },
    { code: 'CARDIO', name: 'CTVS', parent: '', description: '', isActive: true, isAppointment: true },
    { code: 'DENT', name: 'Dental', parent: '', description: '', isActive: true, isAppointment: true },
    { code: 'DERMA', name: 'Dermatology & Cosmetol...', parent: '', description: '', isActive: true, isAppointment: true },
    { code: 'Dys', name: 'Dialysis', parent: '', description: '', isActive: true, isAppointment: true },
    { code: 'Diet', name: 'Dietary', parent: '', description: '', isActive: true, isAppointment: true },
    { code: 'DISP', name: 'Dispensary', parent: '', description: '', isActive: true, isAppointment: false },
    { code: 'ENT', name: 'Ear-Nose- Throat', parent: '', description: '', isActive: true, isAppointment: true },
    { code: 'Emergency', name: 'Emergency', parent: '', description: '', isActive: false, isAppointment: true },
    { code: 'EMER', name: 'EMERGENCY/CASUALTY', parent: '', description: '', isActive: true, isAppointment: true },
  ];

  return (
    <div className="manage-department-page">
      <div className="manage-department-table-container">
        <div className="manage-department-manage-section">
          <Button className="manage-add-department-btn">+ Add Department</Button>
          <div className="manage-department-results-info">Showing 76 / 76 results</div>
        </div>
        <input type="text" placeholder="Search" className="manage-department-search-input" />

        <table className="manage-department-table">
          <thead>
            <tr>
              <th>Code</th>
              <th>Name</th>
              <th>Parent Department</th>
              <th>Description</th>
              <th>Is Active</th>
              <th>Is Appointment</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.code}</td>
                <td>{item.name}</td>
                <td>{item.parent}</td>
                <td>{item.description}</td>
                <td>{item.isActive.toString()}</td>
                <td>{item.isAppointment.toString()}</td>
                <td>
                  <Button
                    className="manage-department-edit-btn"
                    onClick={() => handleShowUpdateModal(item)}
                  >
                    Edit
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="manage-department-pagination">
          <Button className="manage-department-pagination-btn">First</Button>
          <Button className="manage-department-pagination-btn">Previous</Button>
          <span>Page 1 of 4</span>
          <Button className="manage-department-pagination-btn">Next</Button>
          <Button className="manage-department-pagination-btn">Last</Button>
        </div>
      </div>

     {/* Modal for UpdateDepartmentForm */}
     <Modal
        show={showUpdateModal}
        onHide={handleCloseUpdateModal}
        dialogClassName="update-manage-modal-dialog" // Custom class for the dialog
        className="update-manage-modal" // Custom class for the modal
      >
        <Modal.Header>
          {/* Remove the closeButton from the Modal.Header */}
          {/* <h5>Update Department</h5> */}
        </Modal.Header>
        <Modal.Body>
          {selectedDepartment && (
            <UpdateDepartmentForm
              department={selectedDepartment}
              onClose={handleCloseUpdateModal} // Ensure this is passed correctly if used inside UpdateDepartmentForm
            />
          )}
        </Modal.Body>
      </Modal>

    </div>
  );
};

export default ManageDepartment;