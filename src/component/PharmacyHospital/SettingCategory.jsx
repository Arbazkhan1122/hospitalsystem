import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import './SettingSupplier.css';

const SettingCategory = () => {
  const [suppliers, setSuppliers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false); // Track if it's edit or add mode

  useEffect(() => {
    // Fetch initial data
    axios.get('http://192.168.1.37:1415/api/categories')
      .then(response => {
        setSuppliers(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  const filteredUsers = (suppliers || []).filter(user =>
  user.name && user.name.toLowerCase().includes(searchTerm.toLowerCase())
);

  const handleShowEditModal = (user = null) => {
    if (user) {
      setSelectedUser(user);
      setIsEditMode(true); // Set to edit mode
    } else {
      setSelectedUser({ categoryName: '', description: '', isActive: true }); // Empty fields for new category
      setIsEditMode(false); // Set to add mode
    }
    setShowEditModal(true);
  };

  const handleCloseModal = () => {
    setShowEditModal(false);
    setSelectedUser(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const apiUrl = isEditMode
      ? `http://192.168.1.37:1415/api/categories/${selectedUser.id}` // Assuming `id` is part of the user object for updates
      : 'http://192.168.1.37:1415/api/categories';
    const method = isEditMode ? 'put' : 'post';

    axios({
      method,
      url: apiUrl,
      data: selectedUser
    })
      .then(response => {
        if (isEditMode) {
          setSuppliers(suppliers.map(supplier =>
            supplier.id === selectedUser.id ? response.data : supplier
          ));
        } else {
          setSuppliers([...suppliers, response.data]);
        }
        handleCloseModal();
      })
      .catch(error => {
        console.error('There was an error with the submission!', error);
      });
  };

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const inputValue = type === 'checkbox' ? checked : value;
    setSelectedUser((prevState) => ({
      ...prevState,
      [name]: inputValue,
    }));
  };

  return (
    <div className="setting-supplier-container">
      <div className="setting-supplier-header">
        <button
          className="setting-supplier-add-user-button"
          onClick={() => handleShowEditModal()} // Open the form for adding a new category
        >
          + Add Company Category
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
              <th>Category Name</th>
              <th>Description</th>
              <th>Is Active</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.description}</td>
                <td>{user.isActive ? 'Yes' : 'No'}</td>
                <td className="setting-supplier-action-buttons">
                  <button
                    className="setting-supplier-action-button"
                    onClick={() => handleShowEditModal(user)} // Open the form for editing the selected category
                  >
                    Edit
                  </button>
                  <button
                    className="setting-supplier-action-button"
                    onClick={() => {
                      // Handle deactivate action
                      axios.delete(`http://192.168.1.37:1415/api/categories/${user.id}`)
                        .then(() => {
                          setSuppliers(suppliers.filter(supplier => supplier.id !== user.id));
                        })
                        .catch(error => {
                          console.error('There was an error deactivating the category!', error);
                        });
                    }}
                  >
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
      <Modal show={showEditModal} onHide={handleCloseModal} className="supplier-setting-supplier-update-modal">
        <Modal.Header closeButton>
          <Modal.Title>{isEditMode ? 'Update Company Category' : 'Add Company Category'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <div className="supplier-setting-form-row">
              <Form.Group controlId="categoryName" className="supplier-setting-form-group col-md-6">
                <Form.Label>Category Name<span className="supplier-setting-text-danger">*</span>:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Category Name"
                  name="name"
                  required
                  value={selectedUser?.name || ''}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group controlId="description" className="supplier-setting-form-group col-md-6">
                <Form.Label>Description:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Description"
                  name="description"
                  value={selectedUser?.description || ''}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </div>
            <Form.Group controlId="isActive" className="supplier-setting-form-group col-md-6">
              <Form.Check
                type="checkbox"
                label="Is Active"
                name="isActive"
                checked={selectedUser?.isActive || false}
                onChange={handleInputChange}
              />
            </Form.Group>
            <div className="supplier-setting-text-right">
              <Button variant="primary" type="submit">
                {isEditMode ? 'Update' : 'Add'}
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default SettingCategory;
