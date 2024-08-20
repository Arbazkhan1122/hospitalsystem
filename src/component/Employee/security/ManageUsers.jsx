import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './ManageUsers.css'; 

const usersData = [
  { employeeName: "Mr. Accounting Module", userName: "jacqueline", department: "Account", email: "jaqueline@istl.com" },
  { employeeName: "Dr. Amit Shah", userName: "francis", department: "Medicine", email: "francis@istl.com" },
  { employeeName: "Dr. ANN NJOKI THIONGO", userName: "mohsalah", department: "Radiology", email: "mohmmed229@gmail.com" },
  { employeeName: "Mrs. Billing Madam", userName: "tobias", department: "Billing", email: "tobias@istl.com" },
  // Add the rest of the users here...
];

const ManageUsers = () => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredUsers = usersData.filter(user =>
    user.employeeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleShowEditModal = (user) => {
    setSelectedUser(user);
    setShowEditModal(true);
  };

  const handleCloseModal = () => {
    setShowEditModal(false);
    setSelectedUser(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Password reset for:', selectedUser);
    handleCloseModal();
  };

  return (
    <div className="manage-users-container">
      <div className="manage-users-header">
        <button className="manage-users-add-user-button">+ Add User</button>
      </div>
      <input
        type="text"
        placeholder="Search"
        className="manage-users-search-input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className='manage-user-span'>
        <span>Showing {filteredUsers.length} / {usersData.length} results</span>
      </div>
      <div className='manage-user-tab'>
        <table className="manage-users-users-table">
          <thead>
            <tr>
              <th>Employee Name</th>
              <th>User Name</th>
              <th>Department Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, index) => (
              <tr key={index}>
                <td>{user.employeeName}</td>
                <td>{user.userName}</td>
                <td>{user.department}</td>
                <td>{user.email}</td>
                <td className="manage-users-action-buttons">
                  <button className="manage-users-action-button" onClick={() => handleShowEditModal(user)}>Reset Password</button>
                  <button className="manage-users-action-button">Manage Role</button>
                  <button className="manage-users-action-button">Deactivate</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="manage-users-pagination">
          <div className="manage-users-pagination-controls">
            <button>First</button>
            <button>Previous</button>
            <button>1</button>
            <button>Next</button>
            <button>Last</button>
          </div>
        </div>
      </div>

      <Modal show={showEditModal} onHide={handleCloseModal} dialogClassName="manage-add-employee-role">
        <div className="manage-modal-dialog">
          <div className="manage-modal-modal-header">
            <div className="manage-modal-modal-title">Reset Password For {selectedUser?.userName}</div>
            <Button onClick={handleCloseModal} className="manage-modal-employee-role-btn">X</Button>
          </div>
          <div className="manage-modal-modal-body">
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="newPassword">
                <Form.Label className="manage-modal-form-label">
                  New Password <span className="manage-modal-text-danger">*</span>:
                </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="New Password"
                  required
                  className="manage-modal-form-control"
                />
              </Form.Group>

              <Form.Group controlId="confirmPassword">
                <Form.Label className="manage-modal-form-label">Confirm Password:</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  required
                  className="manage-modal-form-control"
                />
              </Form.Group>

              <Button type="submit" className="manage-modal-employee-btn">Save</Button>
              <Button type="button" onClick={handleCloseModal} className="manage-modal-employee-btn">Cancel</Button>
            </Form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ManageUsers;
