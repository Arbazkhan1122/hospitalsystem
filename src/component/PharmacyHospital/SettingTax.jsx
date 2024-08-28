import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import './SettingSupplier.css'; 

const SettingTax = () => {
  const [suppliers, setSuppliers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    // Fetch data from API
    axios.get('http://localhost:1415/api/taxes')
      .then(response => {
        setSuppliers(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  // Filtering users based on the search term
  const filteredUsers = suppliers.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleShowModal = (user = null) => {
    if (user) {
      setSelectedUser(user);
      setIsEditMode(true);
    } else {
      setSelectedUser({ name: '', percentage: '', description: '', isActive: true });
      setIsEditMode(false);
    }
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedUser(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isEditMode) {
      // Update the existing item
      axios.put(`http://localhost:1415/api/taxes/${selectedUser.id}`, selectedUser)
        .then(response => {
          setSuppliers(suppliers.map(supplier =>
            supplier.id === selectedUser.id ? response.data : supplier
          ));
          handleCloseModal();
        })
        .catch(error => {
          console.error("There was an error updating the data!", error);
        });
    } else {
      // Add a new item
      axios.post('http://localhost:1415/api/taxes', selectedUser)
        .then(response => {
          setSuppliers([...suppliers, response.data]);
          handleCloseModal();
        })
        .catch(error => {
          console.error("There was an error adding the data!", error);
        });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedUser({
      ...selectedUser,
      [name]: value
    });
  };

  return (
    <div className="setting-supplier-container">
      <div className="setting-supplier-header">
        <button className="setting-supplier-add-user-button" onClick={() => handleShowModal()}>
          + Add Tax
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
              <th>Tax Name</th>
              <th>Tax Percentage</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.percentage}</td>
                <td>{user.description}</td>
                <td className="setting-supplier-action-buttons">
                  <button className="setting-supplier-action-button" onClick={() => handleShowModal(user)}>Edit</button>
                  <button className="setting-supplier-action-button">Deactivate</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="setting-supplier-pagination">
          <div className="setting-supplier-pagination-controls">
            <button>First</button>
            <button>Previous</button>
            <button>1</button>
            <button>Next</button>
            <button>Last</button>
          </div>
        </div>
      </div>

      <Modal show={showModal} onHide={handleCloseModal} className="supplier-setting-supplier-update-modal">
        <Modal.Header closeButton>
          <Modal.Title>{isEditMode ? `Edit Tax for ${selectedUser?.name}` : 'Add New Tax'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="taxName" className="supplier-setting-form-group">
              <Form.Label className="supplier-setting-form-label">
                <span className="supplier-setting-text-danger">*</span> Tax Name:
              </Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={selectedUser?.name || ''}
                onChange={handleInputChange}
                placeholder="Enter Tax Name"
                required
                className="supplier-setting-form-control"
              />
            </Form.Group>

            <Form.Group controlId="taxPercentage" className="supplier-setting-form-group">
              <Form.Label className="supplier-setting-form-label">Tax Percentage:</Form.Label>
              <Form.Control
                type="text"
                name="percentage"
                value={selectedUser?.percentage || ''}
                onChange={handleInputChange}
                placeholder="Enter Tax Percentage"
                className="supplier-setting-form-control"
              />
            </Form.Group>

            <Form.Group controlId="description" className="supplier-setting-form-group">
              <Form.Label className="supplier-setting-form-label">Description:</Form.Label>
              <Form.Control
                type="text"
                name="description"
                value={selectedUser?.description || ''}
                onChange={handleInputChange}
                placeholder="Enter Description"
                className="supplier-setting-form-control"
              />
            </Form.Group>

            <div className="supplier-setting-text-right">
              <Button variant="primary" type="submit">Save</Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default SettingTax;
