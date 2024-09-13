import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css'; 
import './SettingSupplier.css';

const usersData = [
  {
    name: 'gfhjk',
    text: '<p>xcv bnm,.</p>',
    isActive: false
  }
];

const SettingTerms = () => {
  const [suppliers, setSuppliers] = useState(usersData);
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState({
    name: '',
    text: '',
    isActive: true
  });
  const [isEditMode, setIsEditMode] = useState(false);

  // Filtering users based on the search term
  const filteredUsers = suppliers.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleShowModal = (user = null) => {
    if (user) {
      setSelectedUser(user);
      setIsEditMode(true);
    } else {
      setSelectedUser({ name: '', text: '', isActive: true });
      setIsEditMode(false);
    }
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedUser({
      name: '',
      text: '',
      isActive: true
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isEditMode) {
      // Update the existing item
      setSuppliers(suppliers.map(supplier => 
        supplier.name === selectedUser.name ? selectedUser : supplier
      ));
    } else {
      // Add a new item
      setSuppliers([...suppliers, selectedUser]);
    }
    handleCloseModal();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedUser({
      ...selectedUser,
      [name]: value
    });
  };

  const handleTextChange = (value) => {
    setSelectedUser({
      ...selectedUser,
      text: value
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
              <th> Name</th>
              <th>Text</th>
              <th>isActive</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td dangerouslySetInnerHTML={{ __html: user.text }}></td>
                <td>{user.isActive ? 'Yes' : 'No'}</td>
                <td className="setting-supplier-action-buttons">
                  <button className="setting-supplier-action-button" onClick={() => handleShowModal(user)}>Edit</button>
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
          <Modal.Title>{isEditMode ? `Edit Tax for ${selectedUser.name}` : 'Add New Tax'}</Modal.Title>
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
                value={selectedUser.name}
                onChange={handleInputChange}
                placeholder="Enter Tax Name"
                required
                className="supplier-setting-form-control"
              />
            </Form.Group>

            {/* <Form.Group controlId="taxText" className="supplier-setting-form-group">
              <Form.Label className="supplier-setting-form-label">Text:</Form.Label>
              <ReactQuill
                value={selectedUser.text}
                onChange={handleTextChange}
                placeholder="Enter Text"
                className="supplier-setting-quill"
              />
            </Form.Group> */}
            <Form.Group controlId="taxText" className="supplier-setting-form-group">
              <Form.Label className="supplier-setting-form-label">Type:</Form.Label>
              <Form.Control
                type="text"
                name="text"
                value={selectedUser.text}
                onChange={handleInputChange}
                placeholder="Enter Text"
                className="supplier-setting-form-control"
              />
            </Form.Group>


            <Form.Group controlId="isActive" className="supplier-setting-form-group">
              <Form.Check
                type="checkbox"
                name="isActive"
                checked={selectedUser.isActive}
                onChange={(e) => setSelectedUser({ ...selectedUser, isActive: e.target.checked })}
                label="Active"
                className="supplier-setting-form-check"
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

export default SettingTerms;
