import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import './SettingSupplier.css'; 

const initialUser = {
  name: '',
  contactNo: '',
  description: '',
  city: '',
  kraPin: '',
  contactAddress: '',
  email: '',
  creditPeriod: '', // Ensure creditPeriod is correctly handled
  dda: '',
  isActive: false,
};

const SettingSupplierComponent = () => {
  const [suppliers, setSuppliers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(initialUser);
  const [isEditMode, setIsEditMode] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleShowEditModal = (user = initialUser) => {
    setSelectedUser(user);
    setIsEditMode(Boolean(user && user.kraPin)); // Use kraPin for edit mode check
    setShowEditModal(true);
  };

  const handleCloseModal = () => {
    setShowEditModal(false);
    setSelectedUser(initialUser);
  };

  const handleInputChange = (e) => {
    const { name, value, checked, type } = e.target;
    const inputValue = type === 'checkbox' ? checked : value;
    setSelectedUser(prevState => ({
      ...prevState,
      [name]: inputValue,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Ensure creditPeriod is a number
    const dataToSend = {
      ...selectedUser,
      creditPeriod: selectedUser.creditPeriod ? Number(selectedUser.creditPeriod) : 0,
    };

    try {
      if (isEditMode) {
        // Update existing supplier
        const response = await axios.put(`http://192.168.1.37:1415/api/suppliers/${selectedUser.kraPin}`, dataToSend);
        console.log('Update Response:', response.data);
      } else {
        // Add new supplier
        const response = await axios.post('http://192.168.1.37:1415/api/suppliers', dataToSend);
        console.log('Add Response:', response.data);
      }

      setShowSuccessMessage(true);
      setTimeout(() => setShowSuccessMessage(false), 3000);
      handleCloseModal();
      // Optionally, refetch the suppliers list
      // fetchSuppliers();
    } catch (error) {
      console.error('Error saving supplier data:', error.response ? error.response.data : error.message);
      alert('Error saving data. Please try again.');
    }
  };

  return (
    <div className="setting-supplier-container">
      <div className="setting-supplier-header">
        <button
          className="setting-supplier-add-user-button"
          onClick={() => handleShowEditModal()}
        >
          + Add Supplier
        </button>
      </div>
      <input
        type="text"
        placeholder="Search"
        className="setting-supplier-manage-users-search-input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className='setting-supplier-span'>
        <span>Showing {suppliers.length} results</span>
      </div>
      <div className='setting-supplier-tab'>
        <table className="setting-suppliers-users-table">
          <thead>
            <tr>
              <th>Supplier Name</th>
              <th>Contact No</th>
              <th>Description</th>
              <th>City</th>
              <th>KRA PIN</th>
              <th>Contact Address</th>
              <th>Email</th>
              <th>Credit Period</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {suppliers.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.contactNo}</td>
                <td>{user.description}</td>
                <td>{user.city}</td>
                <td>{user.kraPin}</td>
                <td>{user.contactAddress}</td>
                <td>{user.email}</td>
                <td>{user.creditPeriod}</td>
                <td className="setting-supplier-action-buttons">
                  <button
                    className="setting-supplier-action-button"
                    onClick={() => handleShowEditModal(user)}
                  >
                    Edit
                  </button>
                  <button className="setting-supplier-action-button">
                    Deactivate
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* <div className="setting-supplier-pagination">
          <div className="setting-supplier-pagination-controls">
            <button>First</button>
            <button>Previous</button>
            <button>1</button>
            <button>Next</button>
            <button>Last</button>
          </div>
        </div> */}
      </div>

      <Modal
        show={showEditModal}
        onHide={handleCloseModal}
        className="supplier-setting-supplier-update-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>{isEditMode ? 'Update Supplier' : 'Add Supplier'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <div className="supplier-setting-form-row">
              <Form.Group controlId="supplierName" className="supplier-setting-form-group col-md-6">
                <Form.Label>Supplier Name<span className="supplier-setting-text-danger">*</span>:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Supplier Name"
                  name="name"
                  required
                  value={selectedUser.name || ''}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group controlId="contact" className="supplier-setting-form-group col-md-6">
                <Form.Label>Contact<span className="supplier-setting-text-danger">*</span>:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Contact Number"
                  name="contactNo"
                  required
                  value={selectedUser.contactNo || ''}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </div>

            <div className="supplier-setting-form-row">
              <Form.Group controlId="description" className="supplier-setting-form-group col-md-6">
                <Form.Label>Description:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Description"
                  name="description"
                  value={selectedUser.description || ''}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group controlId="city" className="supplier-setting-form-group col-md-6">
                <Form.Label>City:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter City"
                  name="city"
                  value={selectedUser.city || ''}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </div>

            <div className="supplier-setting-form-row">
              <Form.Group controlId="creditPeriod" className="supplier-setting-form-group col-md-6">
                <Form.Label>Credit Period:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Credit Period"
                  name="creditPeriod"
                  value={selectedUser.creditPeriod || ''}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group controlId="kraPin" className="supplier-setting-form-group col-md-6">
                <Form.Label>KRA PIN<span className="supplier-setting-text-danger">*</span>:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter KRA PIN"
                  name="kraPin"
                  required
                  value={selectedUser.kraPin || ''}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </div>

            <div className="supplier-setting-form-row">
              <Form.Group controlId="address" className="supplier-setting-form-group col-md-6">
                <Form.Label>Contact Address:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Address"
                  name="contactAddress"
                  value={selectedUser.contactAddress || ''}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group controlId="dda" className="supplier-setting-form-group col-md-6">
                <Form.Label>DDA:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter DDA"
                  name="dda"
                  value={selectedUser.dda || ''}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </div>

            <div className="supplier-setting-form-row">
              <Form.Group controlId="isActive" className="supplier-setting-form-group col-md-6">
                <Form.Label>Status:</Form.Label>
                <Form.Check
                  type="checkbox"
                  label="Active"
                  name="isActive"
                  checked={selectedUser.isActive || false}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </div>

            <div className="supplier-setting-form-actions">
              <Button variant="secondary" onClick={handleCloseModal}>
                Cancel
              </Button> &nbsp; &nbsp;
              <Button variant="primary" type="submit" className='btnAddSupplier'>
                {isEditMode ? 'Update Supplier' : 'Add Supplier'}
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default SettingSupplierComponent;
