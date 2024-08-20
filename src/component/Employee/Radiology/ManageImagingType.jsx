import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './ManageImagingType.css';
// import './AddEmployeeRole.css';

const ManageImagingType = () => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedImagingType, setSelectedImagingType] = useState(null);
  const [role, setRole] = useState('');
  const [description, setDescription] = useState('');
  const [isActive, setIsActive] = useState(false);

  const handleEditClick = (type) => {
    setSelectedImagingType(type);
    setRole(type.name);
    setIsActive(type.isActive === 'true');
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
        <button className="manage-imaging-type-btn">+Add Imaging Type</button>
      </div>
      <input type="text" className="manage-imaging-type-search-bar" placeholder="Search" />
      <div className='manage-type'>
        <table className="manage-imaging-type-table">
          <thead>
            <tr>
              <th>Type Name</th>
              <th>IsActive</th>
              <th>Action</th>
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
        <div className="manage-imaging-type-pagination">
          <span>1 to 9 of 9</span>
          <div className="manage-imaging-type-pagination-buttons">
            <button>First</button>
            <button>Previous</button>
            <span>Page 1 of 1</span>
            <button>Next</button>
            <button>Last</button>
          </div>
        </div>
      </div>

      <Modal show={showEditModal} onHide={handleCloseModal} dialogClassName="manage-add-employee-role">
        <div className="manage-modal-dialog">
          <div className="manage-modal-modal-header">
            <div className="manage-modal-modal-title">Update Imaging Type</div>
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
                  placeholder="Role"
                  required
                  className="manage-modal-form-control"
                />
              </Form.Group>
              {/* <Form.Group controlId="description">
                <Form.Label className="emp-form-labels">Description :</Form.Label>
                <Form.Control
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Description"
                  className="emp-form-control"
                />
              </Form.Group> */}
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
                Update
              </Button>
            </Form>
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default ManageImagingType;
