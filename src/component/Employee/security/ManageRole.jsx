import React, { useState, useRef } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './ManageUsers.css';
import { startResizing } from '../../TableHeadingResizing/resizableColumns';

const rolesData = [
  {
    roleName: "Accounting",
    rolePriority: null,
    roleDescription: null,
    applicationName: "Accounting",
    defaultRouteName: "Accounting",
    employeeName: "John Doe",
    userName: "jdoe",
    department: "Finance",
    email: "jdoe@example.com"
  },
  {
    roleName: "Amit Doctor",
    rolePriority: null,
    roleDescription: null,
    applicationName: "Doctors",
    defaultRouteName: "Appointment",
    employeeName: "Amit Kumar",
    userName: "amitdoc",
    department: "Healthcare",
    email: "amitdoc@example.com"
  },
  {
    roleName: "Billing",
    rolePriority: 1,
    roleDescription: "Billing",
    applicationName: "Billing",
    defaultRouteName: "Billing",
    employeeName: "Jane Smith",
    userName: "jsmith",
    department: "Billing",
    email: "jsmith@example.com"
  },
  {
    roleName: "Doctor",
    rolePriority: null,
    roleDescription: "Doctor",
    applicationName: "Doctors",
    defaultRouteName: "Doctor",
    employeeName: "Dr. John",
    userName: "drjohn",
    department: "Healthcare",
    email: "drjohn@example.com"
  },
  {
    roleName: "Gynecology",
    rolePriority: 5,
    roleDescription: "Operation Theater",
    applicationName: "Operation Theatre",
    defaultRouteName: "Operation Theatre",
    employeeName: "Dr. Mary",
    userName: "drmary",
    department: "Gynecology",
    email: "drmary@example.com"
  },
  {
    roleName: "Lab Technician",
    rolePriority: 1,
    roleDescription: "Lab Technician",
    applicationName: "Lab",
    defaultRouteName: "Laboratory",
    employeeName: "Tom Williams",
    userName: "tomlab",
    department: "Laboratory",
    email: "tomlab@example.com"
  },
  {
    roleName: "Maternity",
    rolePriority: 3,
    roleDescription: "Maternity",
    applicationName: "ADT Wards",
    defaultRouteName: "ADT",
    employeeName: "Emily Johnson",
    userName: "emilyj",
    department: "Maternity",
    email: "emilyj@example.com"
  },

];

const ManageRole = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);
  const [actionType, setActionType] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [columnWidths, setColumnWidths] = useState({});
  const tableRef = useRef(null);

  const filteredRoles = rolesData.filter(role =>
    role.roleName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    role.employeeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    role.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    role.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
    role.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleShowModal = (role, action) => {
    setSelectedRole(role);
    setActionType(action);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedRole(null);
    setActionType('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log(`${actionType} Role:`, selectedRole);
    handleCloseModal();
  };

  return (
    <div className="manage-users-container">
      <div className="manage-users-header">
        <button
          className="manage-users-add-user-button"
          onClick={() => handleShowModal(null, 'Add Role')}
        >
          + Add Role
        </button>
      </div>
      <input
        type="text"
        placeholder="Search"
        className="manage-users-search-input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="manage-user-span">
        <span>Showing {filteredRoles.length} / {rolesData.length} results</span>
      </div>
      <div className="table-container">
        <table ref={tableRef}>
          <thead>
            <tr>
              {["Role Name", "Employee Name", "User Name", "Department Name", "Email", "Action"].map((header, index) => (
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
            {filteredRoles.map((role, index) => (
              <tr key={index}>
                <td>{role.roleName}</td>
                <td>{role.employeeName}</td>
                <td>{role.userName}</td>
                <td>{role.department}</td>
                <td>{role.email}</td>
                <td className="manage-users-action-buttons">
                  <button className="manage-users-action-button" onClick={() => handleShowModal(role, 'Edit Role')}>Edit</button>
                  <button className="manage-users-action-button">Manage Permission</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal show={showModal} onHide={handleCloseModal} dialogClassName="manage-add-employee-role">
  <div className="manage-modal-dialog">
    <div className="manage-modal-modal-header">
      <div className="manage-modal-modal-title">{actionType} Role</div>
      <Button onClick={handleCloseModal} className="manage-modal-employee-role-btn">X</Button>
    </div>
    <div className="manage-modal-modal-body">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="roleName">
          <Form.Label className="manage-modal-form-label">Role Name*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Role Name"
            required
            className="manage-modal-form-control"
            value={selectedRole?.roleName || ''}
            onChange={(e) => setSelectedRole({ ...selectedRole, roleName: e.target.value })}
          />
        </Form.Group>
        <Form.Group controlId="roleDescription">
          <Form.Label className="manage-modal-form-label">Role Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Role Description"
            className="manage-modal-form-control"
            value={selectedRole?.roleDescription || ''}
            onChange={(e) => setSelectedRole({ ...selectedRole, roleDescription: e.target.value })}
          />
        </Form.Group>
        <Form.Group controlId="applicationName">
          <Form.Label className="manage-modal-form-label">Select Application*</Form.Label>
          <Form.Control as="select" required className="manage-modal-form-control">
            <option value="">Select an application</option>
            <option value="Accounting">Accounting</option>
            <option value="Doctors">Doctors</option>
            {/* Add more applications as needed */}
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="initialPage">
          <Form.Label className="manage-modal-form-label">Select Initial Page</Form.Label>
          <Form.Control type="text" placeholder="Initial Page" className="manage-modal-form-control" />
        </Form.Group>
        <Form.Group controlId="rolePriority">
          <Form.Label className="manage-modal-form-label">Role Priority</Form.Label>
          <Form.Control type="number" placeholder="Role Priority" className="manage-modal-form-control" />
        </Form.Group>
        <Form.Group controlId="isActive">
          <Form.Check type="checkbox" label="Is Active" defaultChecked={selectedRole?.isActive} />
        </Form.Group>
        <Button type="submit" className="manage-modal-employee-btn">
          {actionType === 'Add Role' ? 'Save' : 'Update'}
        </Button>
      </Form>
    </div>
  </div>
</Modal>

    </div>
  );
};

export default ManageRole;
