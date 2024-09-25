import React, { useState, useRef } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './ManageUsers.css'; 
import { startResizing } from '../../TableHeadingResizing/resizableColumns';

const usersData = [
  { employeeName: "Mr. Accounting Module", userName: "jacqueline", department: "Account", email: "jaqueline@istl.com" },
  { employeeName: "Dr. Amit Shah", userName: "francis", department: "Medicine", email: "francis@istl.com" },
  { employeeName: "Dr. ANN NJOKI THIONGO", userName: "mohsalah", department: "Radiology", email: "mohmmed229@gmail.com" },
  { employeeName: "Mrs. Billing Madam", userName: "tobias", department: "Billing", email: "tobias@istl.com" },
];

const ManageUsers = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [actionType, setActionType] = useState('');
  const [columnWidths, setColumnWidths] = useState({});
  const tableRef = useRef(null);
  
  const filteredUsers = usersData.filter(user =>
    user.employeeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleShowModal = (user, action) => {
    setSelectedUser(user);
    setActionType(action);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedUser(null);
    setActionType('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`${actionType} for:`, selectedUser);
    handleCloseModal();
  };

  return (
    <div className="manage-users-container">
      <div className="manage-users-header">
        <button className="manage-users-add-user-button" onClick={() => handleShowModal(null, 'Add User')}>+ Add User</button>
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
      <div className='table-container'>
        <table ref={tableRef}>
          <thead>
            <tr>
              {["Employee Name", "User Name", "Department Name", "Email", "Action"].map((header, index) => (
                <th key={index} style={{ width: columnWidths[index] }} className="resizable-th">
                  <div className="header-content">
                    <span>{header}</span>
                    <div className="resizer" onMouseDown={startResizing(tableRef, setColumnWidths)(index)}></div>
                  </div>
                </th>
              ))}
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
                  <button className="manage-users-action-button" onClick={() => handleShowModal(user, 'Reset Password')}>Reset Password</button>
                  <button className="manage-users-action-button">Manage Role</button>
                  <button className="manage-users-action-button">Deactivate</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal show={showModal} onHide={handleCloseModal} dialogClassName="manage-add-employee-role">
        <div className="manage-modal-dialog">
          <div className="manage-modal-modal-header">
            <div className="manage-modal-modal-title">{actionType} {selectedUser?.userName}</div>
            <Button onClick={handleCloseModal} className="manage-modal-employee-role-btn">X</Button>
          </div>
          <div className="manage-modal-modal-body">
            <Form onSubmit={handleSubmit}>
              {actionType === 'Add User' && (
                <>
                  <Form.Group controlId="selectEmployee">
                    <Form.Label className="manage-modal-form-label">Select Employee*</Form.Label>
                    <Form.Control as="select" required className="manage-modal-form-control">
                      <option value="">Select an employee</option>
                      {usersData.map((user, index) => (
                        <option key={index} value={user.userName}>{user.employeeName}</option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                  <Form.Group controlId="newUserName">
                    <Form.Label className="manage-modal-form-label">User Name*</Form.Label>
                    <Form.Control type="text" placeholder="User Name" required className="manage-modal-form-control" />
                  </Form.Group>
                  <Form.Group controlId="email">
                    <Form.Label className="manage-modal-form-label">Email ID*</Form.Label>
                    <Form.Control type="email" placeholder="Email ID" required className="manage-modal-form-control" />
                  </Form.Group>
                  <Form.Group controlId="newPassword">
                    <Form.Label className="manage-modal-form-label">Password*</Form.Label>
                    <Form.Control type="password" placeholder="Password" required className="manage-modal-form-control" />
                  </Form.Group>
                  <Form.Group controlId="isActive">
                    <Form.Check type="checkbox" label="Is Active" />
                  </Form.Group>
                </>
              )}
              {actionType === 'Reset Password' && (
                <>
                  <Form.Group controlId="newPassword">
                    <Form.Label className="manage-modal-form-label">New Password <span className="manage-modal-text-danger">*</span>:</Form.Label>
                    <Form.Control type="password" placeholder="New Password" required className="manage-modal-form-control" />
                  </Form.Group>
                  <Form.Group controlId="confirmPassword">
                    <Form.Label className="manage-modal-form-label">Confirm Password:</Form.Label>
                    <Form.Control type="password" placeholder="Confirm Password" required className="manage-modal-form-control" />
                  </Form.Group>
                </>
              )}
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
