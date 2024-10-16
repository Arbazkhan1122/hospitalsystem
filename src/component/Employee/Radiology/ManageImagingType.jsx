import React, { useState, useEffect, useRef } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './ManageImagingType.css';
import { startResizing } from '../../TableHeadingResizing/resizableColumns';
import axios from 'axios';
import { API_BASE_URL } from '../../api/api';

const ManageImagingType = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImagingType, setSelectedImagingType] = useState(null);
  const [role, setRole] = useState('');
  const [description, setDescription] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [createdDate, setCreatedDate] = useState(''); // New state for created date
  const [createdTime, setCreatedTime] = useState(''); // New state for created time
  const [isEditMode, setIsEditMode] = useState(false);
  const [imagingTypes, setImagingTypes] = useState([]);
  const [columnWidths, setColumnWidths] = useState({});
  const tableRef = useRef(null);
  useEffect(() => {
    const fetchImagingTypes = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/radiology-settings/imaging-types`);
        setImagingTypes(response.data);
      } catch (error) {
        console.error('Error fetching imaging types:', error);
      }
    };
    fetchImagingTypes();
  }, []);

  const handleEditClick = (type) => {
    setSelectedImagingType(type);
    setRole(type.imagingTypeName); // Ensure the correct field name is used
    setIsActive(type.isActive === 'true'); // Convert string 'true'/'false' to boolean
    setCreatedDate(type.createdDate); // Autofill created date
    setCreatedTime(type.createdTime); // Autofill created time
    setIsEditMode(true);
    setShowModal(true);
  };
  

  const handleAddClick = () => {
    setSelectedImagingType(null);
    setRole('');
    setIsActive(false);
    setCreatedDate(''); // Clear date for new entries
    setCreatedTime(''); // Clear time for new entries
    setIsEditMode(false);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedImagingType(null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const imagingTypeData = {
      imagingTypeName: role,
      isActive: isActive ? 'true' : 'false',
      createdDate, 
      createdTime,
    };

    try {
      if (isEditMode && selectedImagingType) {
        await axios.put(
          `${API_BASE_URL}/radiology-settings/imaging-types/${selectedImagingType.imagingTypeId}`,
          imagingTypeData
        );
        console.log('Updated:', imagingTypeData);
      } else {
        console.log('Added:', imagingTypeData);
        // Add new imaging type
        await axios.post(`${API_BASE_URL}/radiology-settings/imaging-types`, imagingTypeData);
        console.log('Added:', imagingTypeData);
      }
      // Refresh imaging types after update/add
      const response = await axios.get(`${API_BASE_URL}/radiology-settings/imaging-types`);
      setImagingTypes(response.data);
      handleCloseModal();
    } catch (error) {
      console.error('Error submitting imaging type:', error);
    }
  };

  return (
    <div className="manage-imaging-type-container">
      <div>
        <button className="manage-imaging-type-btn" onClick={handleAddClick}>
          + Add Imaging Type
        </button>
      </div>
      <input type="text" className="manage-imaging-type-search-bar" placeholder="Search" />
      <div className="table-container">
        <table ref={tableRef}>
          <thead>
            <tr>
              {['Type Name', 'IsActive', 'Action'].map((header, index) => (
                <th key={index} style={{ width: columnWidths[index] }} className="resizable-th">
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
            {imagingTypes.map((type, index) => (
              <tr key={index}>
                <td>{type.imagingTypeName}</td>
                <td>{type.isActive}</td>
                {/* <td>{type.createdDate}</td>
                <td>{type.createdTime}</td> */}
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
      </div>

      <Modal show={showModal} onHide={handleCloseModal} dialogClassName="manage-add-employee-role">
        <div className="manage-modal-dialog">
          <div className="manage-modal-modal-header">
            <div className="manage-modal-modal-title">
              {isEditMode ? 'Update Imaging Type' : 'Add Imaging Type'}
            </div>
            <Button onClick={handleCloseModal} className="manage-modal-employee-role-btn">
              X
            </Button>
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
                  placeholder="Imaging Type"
                  required
                  className="manage-modal-form-control"
                />
              </Form.Group>

              <Form.Group controlId="isActive" className="manage-modal-form-group">
                <Form.Label className="manage-modal-form-label">Is Active :</Form.Label>
                <Form.Check
                  type="checkbox"
                  checked={isActive}
                  onChange={(e) => setIsActive(e.target.checked)}
                  className="manage-modal-form-check-input"
                />
              </Form.Group>

              <Form.Group controlId="createdDate">
                <Form.Label className="manage-modal-form-label">Created Date:</Form.Label>
                <Form.Control
                  type="date"
                  value={createdDate}
                  onChange={(e) => setCreatedDate(e.target.value)}
                  className="manage-modal-form-control"
                />
              </Form.Group>

              <Form.Group controlId="createdTime">
                <Form.Label className="manage-modal-form-label">Created Time:</Form.Label>
                <Form.Control
                  type="time"
                  value={createdTime}
                  onChange={(e) => setCreatedTime(e.target.value)}
                  className="manage-modal-form-control"
                />
              </Form.Group>

              <Button type="submit" className="manage-modal-employee-btn">
                {isEditMode ? 'Update' : 'Add'}
              </Button>
            </Form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ManageImagingType;
