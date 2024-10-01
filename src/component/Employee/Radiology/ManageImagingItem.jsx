import React, { useState, useEffect, useRef } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './ManageImagingType.css';
import { startResizing } from '../../TableHeadingResizing/resizableColumns';
import { API_BASE_URL } from '../../api/api';

const ManageImagingItem = () => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [role, setRole] = useState('');
  const [description, setDescription] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [isValidForReporting, setIsValidForReporting] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [imagingTypes, setImagingTypes] = useState([]);
  const [imagingTypeList, setImagingTypeList] = useState([]);
  const [selectedImagingType, setSelectedImagingType] = useState('');
  const [procedureCode, setProcedureCode] = useState('');
  const [itemPrice, setItemPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [columnWidths, setColumnWidths] = useState({});
  const tableRef = useRef(null);

  // Fetch imaging items and imaging types from the API when component mounts
  useEffect(() => {
    fetchImagingItems();
    fetchImagingTypes();
  }, []);

  const fetchImagingItems = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/radiology-settings/imaging-items`);
      const data = await response.json();
      setImagingTypes(data);
    } catch (error) {
      console.error('Error fetching imaging items:', error);
    }
  };

  const fetchImagingTypes = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/radiology-settings/imaging-types`);
      const data = await response.json();
      setImagingTypeList(data);
    } catch (error) {
      console.error('Error fetching imaging types:', error);
    }
  };

  const handleOpenModal = (item = null) => {
    if (item) {
      setCurrentItem(item);
      setRole(item.imagingItemName);
      setIsActive(item.isActive === 'true');
      setIsValidForReporting(item.isValidForReporting === 'true');
      setSelectedImagingType(item.imagingType.imagingTypeId); // Set selected imaging type
      setProcedureCode(item.procedureCode || '');
      setItemPrice(item.itemPrice || 0);
      setDiscount(item.discount || 0);
      setTotalPrice(item.totalPrice || 0);
      setIsEditMode(true);
    } else {
      setCurrentItem(null);
      setRole('');
      setIsActive(false);
      setIsValidForReporting(false);
      setSelectedImagingType('');
      setProcedureCode('');
      setItemPrice(0);
      setDiscount(0);
      setTotalPrice(0);
      setIsEditMode(false);
    }
    setShowEditModal(true);
  };

  const handleCloseModal = () => setShowEditModal(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const now = new Date();
  const date = now.toISOString().split('T')[0]; // Format: YYYY-MM-DD
  const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const newItem = {
      imagingItemName: role,
      isActive: isActive ? 'true' : 'false',
      isValidForReporting: isValidForReporting ? 'true' : 'false',
      imagingType:{
        imagingTypeId:selectedImagingType
      },
      createdDate:date,
      createdTime:time,
      procedureCode,
      itemPrice,
      discount,
      totalPrice: itemPrice - (itemPrice * (discount / 100)), // Calculate total price
    };

    try {
      if (isEditMode) {
        await fetch(`${API_BASE_URL}/radiology-settings/imaging-items/${currentItem.imagingItemId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newItem),
        });
        console.log('Updated item:', newItem);
      } else {
        console.log(newItem);
        
        await fetch(`${API_BASE_URL}/radiology-settings/imaging-items`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newItem),
        });
        console.log('New item added');
      }
      fetchImagingItems();
    } catch (error) {
      console.error('Error submitting form:', error);
    }
    setShowEditModal(false);
  };

  return (
    <div className="manage-imaging-item-container">
      <div className='manage-imaging-sub-item-container'>
        <button
          className="manage-imaging-item-btn"
          onClick={() => handleOpenModal()}
        >
          + Add Item
        </button>
      </div>
      <input type="text" className="manage-imaging-item-search-bar" placeholder="Search" />

      <div className="manage-item">
        <table ref={tableRef}>
          <thead>
            <tr>
              {["Type", "Item Name", "Procedure Code", "Price", "Discount", "Total Price", "Is Active", "Action"].map(
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
                <td>{item.imagingType?.imagingTypeName || ''}</td>
                <td>{item.imagingItemName}</td>
                <td>{item.procedureCode}</td>
                <td>{item.itemPrice}</td>
                <td>{item.discount}</td>
                <td>{item.totalPrice}</td>
                <td>{item.isActive}</td>
                <td>
                  <button
                    className="manage-imaging-item-edit-button"
                    onClick={() => handleOpenModal(item)}
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
    {/* Section 1: Imaging Type and Item Details */}
    <div className="manage-modal-section">
      <h3 className="manage-modal-section-title">Imaging Details</h3>
      <Form.Group controlId="imagingType">
        <Form.Label className="manage-modal-form-label">
          Imaging Type <span className="manage-modal-text-danger">*</span>:
        </Form.Label>
        <Form.Control
          as="select"
          value={selectedImagingType}
          onChange={(e) => setSelectedImagingType(e.target.value)}
          required
          className="manage-modal-form-control"
        >
          <option value="">Select Imaging Type</option>
          {imagingTypeList.map((type) => (
            <option key={type.imagingTypeId} value={type.imagingTypeId}>
              {type.imagingTypeName}
            </option>
          ))}
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="role">
        <Form.Label className="manage-modal-form-label">
          Imaging Item Name <span className="manage-modal-text-danger">*</span>:
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

      <Form.Group controlId="procedureCode">
        <Form.Label className="manage-modal-form-label">
          Procedure Code <span className="manage-modal-text-danger">*</span>:
        </Form.Label>
        <Form.Control
          type="text"
          value={procedureCode}
          onChange={(e) => setProcedureCode(e.target.value)}
          placeholder="Procedure Code"
          required
          className="manage-modal-form-control"
        />
      </Form.Group>
    </div>

    {/* Section 2: Pricing and Description */}
    <div className="manage-modal-section">
      <h3 className="manage-modal-section-title">Pricing and Additional Details</h3>
      <Form.Group controlId="itemPrice">
        <Form.Label className="manage-modal-form-label">
          Item Price <span className="manage-modal-text-danger">*</span>:
        </Form.Label>
        <Form.Control
          type="number"
          value={itemPrice}
          onChange={(e) => setItemPrice(parseFloat(e.target.value))}
          placeholder="Item Price"
          required
          className="manage-modal-form-control"
        />
      </Form.Group>

      <Form.Group controlId="discount">
        <Form.Label className="manage-modal-form-label">Discount:</Form.Label>
        <Form.Control
          type="number"
          value={discount}
          onChange={(e) => setDiscount(parseFloat(e.target.value))}
          placeholder="Discount (%)"
          className="manage-modal-form-control"
        />
      </Form.Group>

      <Form.Group controlId="totalPrice">
        <Form.Label className="manage-modal-form-label">Total Price:</Form.Label>
        <Form.Control
          type="number"
          value={itemPrice - (itemPrice * (discount / 100))}
          readOnly
          className="manage-modal-form-control"
        />
      </Form.Group>

      <Form.Group controlId="description">
        <Form.Label className="manage-modal-form-label">Description:</Form.Label>
        <Form.Control
          as="textarea"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="manage-modal-form-control"
        />
      </Form.Group>
    </div>

    {/* Active Status */}
    <Form.Group controlId="isActive">
      <Form.Check
        type="checkbox"
        label="Is Active"
        checked={isActive}
        onChange={(e) => setIsActive(e.target.checked)}
      />
    </Form.Group>

    <Form.Group controlId="isValidForReporting">
      <Form.Check
        type="checkbox"
        label="Is Valid For Reporting"
        checked={isValidForReporting}
        onChange={(e) => setIsValidForReporting(e.target.checked)}
      />
    </Form.Group>

    <Button type="submit" className="manage-modal-submit-btn">
      {isEditMode ? 'Update' : 'Add'}
    </Button>
  </Form>
</div>

        </div>
      </Modal>
    </div>
  );
};

export default ManageImagingItem;
