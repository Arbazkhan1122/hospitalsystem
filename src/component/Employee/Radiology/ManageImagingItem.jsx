import React, { useState, useRef } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './ManageImagingType.css';
import { startResizing } from '../../TableHeadingResizing/resizableColumns';

const ManageImagingItem = () => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [role, setRole] = useState('');
  const [description, setDescription] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [isValidForReporting, setIsValidForReporting] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false); // new state to track mode
  const [columnWidths, setColumnWidths] = useState({});
  const tableRef = useRef(null);

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

  const handleOpenModal = (item = null) => {
    if (item) {
      // Edit Mode
      setCurrentItem(item);
      setRole(item.itemName);
      setDescription(item.description || '');
      setIsActive(item.isActive === 'true');
      setIsValidForReporting(item.isValidForReporting === 'true');
      setIsEditMode(true);  // Editing
    } else {
      // Add Mode
      setCurrentItem(null);
      setRole('');
      setDescription('');
      setIsActive(false);
      setIsValidForReporting(false);
      setIsEditMode(false);  // Adding new
    }
    setShowEditModal(true);
  };

  const handleCloseModal = () => setShowEditModal(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditMode) {
      // Update existing item logic here
      console.log('Updated item:', currentItem);
    } else {
      // Add new item logic here
      console.log('New item added');
    }
    setShowEditModal(false);
  };

  return (
    <div className="manage-imaging-type-container">
      <div>
        <button
          className="manage-imaging-type-btn"
          onClick={() => handleOpenModal()}  // No item passed for adding new
        >
          + Add Item
        </button>
      </div>
      <input type="text" className="manage-imaging-type-search-bar" placeholder="Search" />

      <div className="manage-type">
        <table ref={tableRef}>
          <thead>
            <tr>
              {["Type", "Item Name", "Procedure Code", "Price", "Is Active", "Action"].map(
                (header, index) => (
                  <th key={index} style={{ width: columnWidths[index] }} className="resizable-th">
                    <div className="header-content">
                      <span>{header}</span>
                      <div
                        className="resizer"
                        onMouseDown={startResizing(tableRef, setColumnWidths)(index)}
                      ></div>
                    </div>
                  </th>
                )
              )}
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
                    onClick={() => handleOpenModal(item)}  // Pass the item for editing
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal show={showEditModal} onHide={handleCloseModal} dialogClassName="manage-add-employee-role">
        <div className="manage-modal-dialog">
          <div className="manage-modal-modal-header">
            <div className="manage-modal-modal-title">
              {isEditMode ? 'Update Imaging Item' : 'Add New Imaging Item'}
            </div>
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
                {isEditMode ? 'Update' : 'Add Item'}
              </Button>
            </Form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ManageImagingItem;
