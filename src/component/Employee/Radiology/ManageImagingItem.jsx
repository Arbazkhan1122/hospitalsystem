import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './ManageImagingType.css';

const ManageImagingItem = () => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [role, setRole] = useState('');
  const [description, setDescription] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [isValidForReporting, setIsValidForReporting] = useState(false);


  const imagingTypes = [
    { type: 'CT-SCAN', itemName: 'Brain', procedureCode: 'Bra000010', price: '', isActive: 'true' },
    { type: 'CT-SCAN', itemName: 'Chest', procedureCode: 'Che000011', price: '', isActive: 'true' },
    { type: 'CT-SCAN', itemName: 'CT-Neck', procedureCode: 'CTN000012', price: '', isActive: 'true' },
    { type: 'CT-SCAN', itemName: 'test', procedureCode: '', price: '', isActive: 'true' },
    { type: 'Dental XRAY', itemName: 'Dental Xray', procedureCode: '', price: '', isActive: 'true' },
    { type: 'MRI', itemName: 'Brain', procedureCode: '', price: '', isActive: 'true' },
    { type: 'MRI', itemName: 'Liver and bile ducts', procedureCode: '', price: '', isActive: 'true' },
    { type: 'MRI', itemName: 'MRI Abdomen', procedureCode: '', price: '', isActive: 'true' },
    { type: 'X-RAY', itemName: 'Dental', procedureCode: '', price: '', isActive: 'true' },
    { type: 'X-RAY', itemName: 'USG Chest', procedureCode: '', price: '', isActive: 'true' },
  ];

  const handleOpenModal = (item) => {
    setCurrentItem(item);
    setRole(item.itemName);
    setDescription(item.description || '');
    setIsActive(item.isActive === 'true');
    setIsValidForReporting(item.isValidForReporting === 'true');
    setShowEditModal(true);
  };

  const handleCloseModal = () => setShowEditModal(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update logic here
    setShowEditModal(false);
  };


  return (
    <div className="manage-imaging-type-container">
    <div>
      <button className="manage-imaging-type-btn">+ Add Item</button>
    </div>
    <input type="text" className="manage-imaging-type-search-bar" placeholder="Search" />

    <div className="manage-type">
      <table className="manage-imaging-type-table">
        <thead>
          <tr>
            <th>Type</th>
            <th>Item Name</th>
            <th>Procedure Code</th>
            <th>Price</th>
            <th>Is Active</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {imagingTypes.map((item, index) => (
            <tr key={index}>
              <td>{item.type}</td>
              <td>{item.itemName}</td>
              <td>{item.procedureCode}</td>
              <td>{item.price}</td>
              <td>{item.isActive}</td>
              <td>
                <button
                  className="manage-imaging-type-edit-button"
                  onClick={() => handleOpenModal(item)}
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

    <Modal
      show={showEditModal}
      onHide={handleCloseModal}
      dialogClassName="manage-add-employee-role"
    >
      <div className="manage-modal-dialog">
        <div className="manage-modal-modal-header">
          <div className="manage-modal-modal-title">Update Imaging Item</div>
          <Button onClick={handleCloseModal} className="manage-modal-employee-role-btn">
            X
          </Button>
        </div>
        <div className="manage-modal-modal-body">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="role">
              <Form.Label className="manage-modal-form-label">
                Imaging Type <span className="manage-modal-text-danger">*</span>:
              </Form.Label>
              <Form.Control
                type="text"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                placeholder="Imaging Item Name"
                required
                className="manage-modal-form-control"
              />
            </Form.Group>

            <Form.Group controlId="description">
              <Form.Label className="manage-modal-form-label">Description:</Form.Label>
              <Form.Control
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
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

            <Form.Group controlId="isValidForReporting" className="manage-modal-form-group">
              <Form.Label className="manage-modal-form-label">Is Valid For Reporting:</Form.Label>
              <Form.Check
                type="checkbox"
                checked={isValidForReporting}
                onChange={(e) => setIsValidForReporting(e.target.checked)}
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

export default ManageImagingItem;
