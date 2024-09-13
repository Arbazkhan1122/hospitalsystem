import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import './SettingSupplier.css'; 

const SettingUOM = () => {
  const [suppliers, setSuppliers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedUser, setSelectedUser] = useState({ name: '', description: '', isActive: true });

  const apiUrl = 'http://192.168.1.37:1415/api/units-of-measurement';

  useEffect(() => {
    // Fetch data from the API when the component mounts
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setSuppliers(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const filteredUsers = suppliers.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleShowModal = (user = null) => {
    if (user) {
      setSelectedUser(user);
      setIsEditMode(true);
    } else {
      // Reset form for adding a new UOM
      setSelectedUser({ name: '', description: '', isActive: true });
      setIsEditMode(false);
    }
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedUser(null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (isEditMode) {
        // Update existing UOM
        await axios.put(`${apiUrl}/${selectedUser.id}`, selectedUser);
        setSuppliers(suppliers.map(u => (u.id === selectedUser.id ? selectedUser : u)));
      } else {
        // Add new UOM
        const response = await axios.post(apiUrl, selectedUser);
        setSuppliers([...suppliers, response.data]);
      }
      handleCloseModal();
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  return (
    <div className="setting-supplier-container">
      <div className="setting-supplier-header">
        <button className="setting-supplier-add-user-button" onClick={() => handleShowModal()}>+ Add Unit Of Measurement</button>
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
              <th>Unit Name</th>
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
                  <button className="setting-supplier-action-button" onClick={() => handleShowModal(user)}>Edit</button>
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

      <Modal show={showModal} onHide={handleCloseModal} className="supplier-setting-supplier-update-modal">
        <Modal.Header closeButton>
          <Modal.Title>{isEditMode ? 'Update Unit of Measurement' : 'Add Unit of Measurement'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <div className="supplier-setting-form-row">
              <Form.Group controlId="categoryName" className="supplier-setting-form-group col-md-6">
                <Form.Label>Unit of Measurement<span className="supplier-setting-text-danger">*</span>:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Unit of Measurement"
                  required
                  value={selectedUser?.name}
                  onChange={(e) => setSelectedUser({ ...selectedUser, name: e.target.value })}
                />
              </Form.Group>
              <Form.Group controlId="description" className="supplier-setting-form-group col-md-6">
                <Form.Label>Description:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Description"
                  value={selectedUser?.description}
                  onChange={(e) => setSelectedUser({ ...selectedUser, description: e.target.value })}
                />
              </Form.Group>
            </div>
            <Form.Group controlId="isActive" className="supplier-setting-form-group col-md-6">
              <Form.Check
                type="checkbox"
                label="Is Active"
                checked={selectedUser?.isActive}
                onChange={(e) => setSelectedUser({ ...selectedUser, isActive: e.target.checked })}
              />
            </Form.Group>
            <div className="supplier-setting-text-right">
              <Button variant="primary" type="submit">{isEditMode ? 'Update' : 'Add'}</Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default SettingUOM;
