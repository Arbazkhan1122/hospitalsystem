/* Mohini_SettingRack_WholePage_14/sep/2024 */
import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './SettingSupplier.css';

const API_URL = 'http://localhost:1415/api/racks';

const SettingRack = () => {
  const [suppliers, setSuppliers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setSuppliers(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

 const filteredUsers = suppliers.filter(user =>
  (user.rackNo || '').toLowerCase().includes(searchTerm.toLowerCase())
);


  const handleShowModal = (user = null) => {
    if (user) {
      setSelectedUser(user);
      setIsEditMode(true);
    } else {
      setSelectedUser({
        store: '',
        rackNo: '',
        parentRack: '',
        description: ''
      });
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
    const formData = {
      store: event.target.store.value,
      rackNo: event.target.rackNo.value,
      parentRack: event.target.parentRack.value,
      description: event.target.description.value
    };

    try {
      if (isEditMode) {
        // Update existing user
        await fetch(`${API_URL}/${selectedUser.rackNo}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
        setSuppliers(suppliers.map(user =>
          user.rackNo === selectedUser.rackNo ? formData : user
        ));
      } else {
        // Add new user
        await fetch(API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
        setSuppliers([...suppliers, formData]);
      }
    } catch (error) {
      console.error('Error saving data:', error);
    }

    handleCloseModal();
  };

  return (
    <div className="setting-supplier-container">
      <div className="setting-supplier-header">
        <Button className="setting-supplier-add-user-button" onClick={() => handleShowModal()}>
          + Add Rack
        </Button>
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
              <th>Rack No</th>
              <th>Parent Rack No</th>
              <th>Description</th>
              <th>Store</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, index) => (
              <tr key={index}>
                <td>{user.rackNo}</td>
                <td>{user.parentRack || 'N/A'}</td>
                <td>{user.description || 'N/A'}</td>
                <td>{user.store || 'N/A'}</td>
                <td className="setting-supplier-action-buttons">
                  <Button
                    className="setting-supplier-action-button"
                    onClick={() => handleShowModal(user)}
                  >
                    Edit
                  </Button>
                  <Button
                    className="setting-supplier-action-button"
                    onClick={async () => {
                      // Deactivate action
                      try {
                        await fetch(`${API_URL}/${user.rackNo}`, {
                          method: 'DELETE'
                        });
                        setSuppliers(suppliers.filter(u => u.rackNo !== user.rackNo));
                      } catch (error) {
                        console.error('Error deleting data:', error);
                      }
                    }}
                  >
                    Deactivate
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* <div className="setting-supplier-pagination">
          <div className="setting-supplier-pagination-controls">
            <Button>First</Button>
            <Button>Previous</Button>
            <Button>1</Button>
            <Button>Next</Button>
            <Button>Last</Button>
          </div>
        </div> */}
      </div>

      <Modal show={showModal} onHide={handleCloseModal} className="supplier-setting-supplier-update-modal">
        <Modal.Header closeButton>
          <Modal.Title>{isEditMode ? 'Update Rack Details' : 'Add New Rack'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <div className="supplier-setting-form-row">
              <Form.Group controlId="store" className="supplier-setting-form-group col-md-6">
                <Form.Label>Store<span className="supplier-setting-text-danger">*</span>:</Form.Label>
                <Form.Control
                  type="text"
                  name="store"
                  placeholder="Enter Store"
                  required
                  defaultValue={selectedUser?.store || ''}
                />
              </Form.Group>
              <Form.Group controlId="rackNo" className="supplier-setting-form-group col-md-6">
                <Form.Label>Rack No<span className="supplier-setting-text-danger">*</span>:</Form.Label>
                <Form.Control
                  type="text"
                  name="rackNo"
                  placeholder="Enter Rack No"
                  required
                  defaultValue={selectedUser?.rackNo || ''}
                />
              </Form.Group>
            </div>

            <div className="supplier-setting-form-row">
              <Form.Group controlId="parentRack" className="supplier-setting-form-group col-md-6">
                <Form.Label>Parent Rack No:</Form.Label>
                <Form.Control
                  type="text"
                  name="parentRack"
                  placeholder="Enter Parent Rack No"
                  defaultValue={selectedUser?.parentRack || ''}
                />
              </Form.Group>
              <Form.Group controlId="description" className="supplier-setting-form-group col-md-6">
                <Form.Label>Description:</Form.Label>
                <Form.Control
                  type="text"
                  name="description"
                  placeholder="Enter Description"
                  defaultValue={selectedUser?.description || ''}
                />
              </Form.Group>
            </div>

            <div className="supplier-setting-text-right">
              <Button variant="primary" onClick={handleCloseModal} >Cancel</Button>&nbsp; &nbsp;
              <Button variant="primary" type="submit">{isEditMode ? 'Update' : 'Add'}</Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default SettingRack;
/* Mohini_SettingRack_WholePage_14/sep/2024 */
