import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import './SettingSupplier.css'; 

const initialUserData = {
  name: '',
  contactNumber: '',
  description: '',
  contactAddress: '',
  email: '',
  isActive: false,
};

const SettingCompany = () => {
  const [suppliers, setSuppliers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(initialUserData);
  const [isEditMode, setIsEditMode] = useState(false); 


  useEffect(() => {
    // Fetch initial data from the API
    axios.get('http://192.168.1.37:1415/api/companies')
      .then(response => setSuppliers(response.data))
      .catch(error => console.error('Error fetching suppliers:', error));
  }, []);
const filteredUsers = suppliers.filter(user =>
  (user.name || '').toLowerCase().includes(searchTerm.toLowerCase())
);

  const handleShowEditModal = (user = null) => {
    if (user) {
      setSelectedUser(user);
      setIsEditMode(true);
    } else {
      setSelectedUser(initialUserData);
      setIsEditMode(false);
    }
    setShowEditModal(true);
  };

  const handleCloseModal = () => {
    setShowEditModal(false);
    setSelectedUser(initialUserData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const apiUrl = 'http://192.168.1.37:1415/api/companies';
    const apiMethod = isEditMode ? axios.put : axios.post;
    const apiData = {
      companyName: selectedUser.name,
      contactNumber: selectedUser.contactNo,
      description: selectedUser.description,
      contactAddress: selectedUser.contactAddress,
      email: selectedUser.email,
      isActive: selectedUser.isActive,
    };

    apiMethod(apiUrl, apiData)
      .then(response => {
        const updatedSuppliers = isEditMode
          ? suppliers.map(supplier =>
              supplier.id === response.data.id ? response.data : supplier
            )
          : [...suppliers, response.data];

        setSuppliers(updatedSuppliers);
        handleCloseModal();
      })
      .catch(error => console.error('Error submitting supplier data:', error));
  };

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const inputValue = type === 'checkbox' ? checked : value;
    setSelectedUser(prevState => ({
      ...prevState,
      [name]: inputValue,
    }));
  };

  return (
    <div className="setting-supplier-container">
      <div className="setting-supplier-header">
        <button
          className="setting-supplier-add-user-button"
          onClick={() => handleShowEditModal()}
        >
          + Add Company
        </button>
      </div>
      <input
        type="text"
        placeholder="Search"
        className="manage-users-search-input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className='setting-supplier-span'>
        <span>Showing {filteredUsers.length} / {suppliers.length} results</span>
      </div>
      <div className='setting-supplier-tab'>
        <table className="setting-suppliers-users-table">
          <thead>
            <tr>
              <th>Supplier Name</th>
              <th>Contact No</th>
              <th>Description</th>
              <th>Contact Address</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.contactNumber}</td>
                <td>{user.description}</td>
                <td>{user.contactAddress}</td>
                <td>{user.email}</td>
                <td className="setting-supplier-action-buttons">
                  <button
                    className="setting-supplier-action-button"
                    onClick={() => handleShowEditModal(user)}
                  >
                    Edit
                  </button>
                  <button className="setting-supplier-action-button">Deactivate</button>
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

      <Modal show={showEditModal} onHide={handleCloseModal} className="supplier-setting-supplier-update-modal">
        <Modal.Header closeButton>
          <Modal.Title>{isEditMode ? 'Update Company' : 'Add Company'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <div className="supplier-setting-form-row">
              <Form.Group controlId="companyName" className="supplier-setting-form-group col-md-6">
                <Form.Label>Company Name<span className="supplier-setting-text-danger">*</span>:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Company Name"
                  name="name"
                  required
                  value={selectedUser.name}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group controlId="contactNumber" className="supplier-setting-form-group col-md-6">
                <Form.Label>Contact Number<span className="supplier-setting-text-danger">*</span>:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Contact Number"
                  name="contactNo"
                  required
                  value={selectedUser.contactNo}
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
                  value={selectedUser.description}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group controlId="contactAddress" className="supplier-setting-form-group col-md-6">
                <Form.Label>Contact Address:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Contact Address"
                  name="contactAddress"
                  value={selectedUser.contactAddress}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </div>

            <div className="supplier-setting-form-row">
              <Form.Group controlId="email" className="supplier-setting-form-group col-md-6">
                <Form.Label>Email:</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                  value={selectedUser.email}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group controlId="isActive" className="supplier-setting-form-group col-md-6">
                <Form.Check
                  type="checkbox"
                  label="Is Active"
                  name="isActive"
                  checked={selectedUser.isActive}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </div>

            <div className="supplier-setting-text-right">
              <Button variant="primary" type="submit" className=''>
                {isEditMode ? 'Update' : 'Add'}
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default SettingCompany;
