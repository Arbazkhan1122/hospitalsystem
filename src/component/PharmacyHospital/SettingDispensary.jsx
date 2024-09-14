/* Mohini_SettingDispensary_WholePage_14/sep/2024 */
import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './SettingSupplier.css'; 

const SettingDispensary = () => {
  const [suppliers, setSuppliers] = useState([]); // Initialize with empty array to load from API
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);

  // Fetch suppliers from API when the component mounts
  useEffect(() => {
    fetch('http://192.168.1.39:1415/api/dispensaries')
      .then(response => response.json())
      .then(data => setSuppliers(data))
      .catch(error => console.error('Error fetching dispensaries:', error));
  }, []);

  const filteredUsers = suppliers.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleShowModal = (user = null) => {
    if (user) {
      setSelectedUser(user);
      setIsEditMode(true);
    } else {
      setSelectedUser({
        name: '',
        type: 'Normal', // Default value
        contactNo: '',
        description: '',
        label: '',
        kraPin: '',
        address: '',
        email: '',
        defaultPaymentMode: 'Cash',
        isActive: true,
        printInvoiceHeader: false,
        useSeparateInvoiceHeader: false
      });
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
    const formData = {
      name: event.target.name.value,
      type: event.target.type.value,
      description: event.target.description.value,
      isActive: event.target.isActive.checked,
      printInvoiceHeader: event.target.printInvoiceHeader.checked,
      useSeparateInvoiceHeader: event.target.useSeparateInvoiceHeader.checked
    };

    if (isEditMode) {
      // Update existing user via API
      fetch(`http://192.168.1.39:1415/api/dispensaries/${selectedUser.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      .then(response => response.json())
      .then(data => {
        setSuppliers(suppliers.map(user => (user.id === data.id ? data : user)));
        handleCloseModal();
      })
      .catch(error => console.error('Error updating dispensary:', error));
    } else {
      // Add new user via API
      fetch('http://192.168.1.39:1415/api/dispensaries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      .then(response => response.json())
      .then(data => {
        setSuppliers([...suppliers, data]);
        handleCloseModal();
      })
      .catch(error => console.error('Error adding dispensary:', error));
    }
  };

  return (
    <div className="setting-supplier-container">
      <div className="setting-supplier-header">
        <button className="setting-supplier-add-user-button" onClick={() => handleShowModal()}>
          + Add Dispensary
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
              <th>Name</th>
              <th>Type</th>
              <th>Contact No</th>
              <th>Description</th>
              <th>Label</th>
              <th>KRA PIN</th>
              <th>Address</th>
              <th>Email</th>
              <th>Default Payment Mode</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.type}</td>
                <td>{user.contactNo}</td>
                <td>{user.description}</td>
                <td>{user.label}</td>
                <td>{user.kraPin}</td>
                <td>{user.address}</td>
                <td>{user.email}</td>
                <td>{user.defaultPaymentMode}</td>
                <td className="setting-supplier-action-buttons">
                  <button className="setting-supplier-action-button" onClick={() => handleShowModal(user)}>Edit</button>
                  <button className="setting-supplier-action-button">Deactivate</button>
                  <button className="setting-supplier-action-button">Payment Modes</button>
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
          <Modal.Title>{isEditMode ? 'Edit Dispensary Details' : 'Add New Dispensary'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            {/* Dispensary Name Field */}
            <Form.Group controlId="name" className="supplier-setting-form-group">
              <Form.Label className="supplier-setting-form-label">
                <span className="supplier-setting-text-danger">*</span> Dispensary Name:
              </Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter Dispensary Name"
                required
                className="supplier-setting-form-control"
                defaultValue={selectedUser?.name || ''}
              />
            </Form.Group>

            {/* Dispensary Type Field */}
            <Form.Group controlId="type" className="supplier-setting-form-group">
              <Form.Label className="supplier-setting-form-label">
                <span className="supplier-setting-text-danger">*</span> Dispensary Type:
              </Form.Label>
              <Form.Control
                as="select"
                name="type"
                required
                className="supplier-setting-form-control"
                defaultValue={selectedUser?.type || ''}
              >
                <option value="Normal">Normal</option>
                <option value="Special">Special</option>
                {/* Add other options as needed */}
              </Form.Control>
            </Form.Group>

            {/* Description Field */}
            <Form.Group controlId="description" className="supplier-setting-form-group">
              <Form.Label className="supplier-setting-form-label">Description:</Form.Label>
              <Form.Control
                type="text"
                name="description"
                placeholder="Enter Description"
                className="supplier-setting-form-control"
                defaultValue={selectedUser?.description || ''}
              />
            </Form.Group>

            {/* IsActive Checkbox */}
            <Form.Group controlId="isActive" className="supplier-setting-form-group">
              <Form.Check
                type="checkbox"
                name="isActive"
                label="Is Active"
                defaultChecked={selectedUser?.isActive || false}
              />
            </Form.Group>

            {/* Print Invoice Header in DotMatrix Checkbox */}
            <Form.Group controlId="printInvoiceHeader" className="supplier-setting-form-group">
              <Form.Check
                type="checkbox"
                name="printInvoiceHeader"
                label="Print Invoice Header in DotMatrix"
                defaultChecked={selectedUser?.printInvoiceHeader || false}
              />
            </Form.Group>

            {/* Use Separate Invoice Header Checkbox */}
            <Form.Group controlId="useSeparateInvoiceHeader" className="supplier-setting-form-group">
              <Form.Check
                type="checkbox"
                name="useSeparateInvoiceHeader"
                label="Use separate invoice header"
                defaultChecked={selectedUser?.useSeparateInvoiceHeader || false}
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

export default SettingDispensary;
/* Mohini_SettingDispensary_WholePage_14/sep/2024 */
