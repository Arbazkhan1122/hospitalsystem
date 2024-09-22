import React, { useState, useEffect, useRef } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './ManageUsers.css'; 
import { startResizing } from '../../TableHeadingResizing/resizableColumns';

const usersData = [
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
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [columnWidths,setColumnWidths] = useState({});
  const tableRef=useRef(null);
  
  const filteredRoles = usersData.filter(role =>
    role.roleName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    role.employeeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    role.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    role.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
    role.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleShowEditModal = (role) => {
    setSelectedRole(role);
    setShowEditModal(true);
  };

  const handleCloseModal = () => {
    setShowEditModal(false);
    setSelectedRole(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Updated Role:', selectedRole);
    handleCloseModal();
  };

  return (
    <div className="manage-users-container">
      <div className="manage-users-header">
        <button className="manage-users-add-user-button">+ Add Role</button>
      </div>
      <input
        type="text"
        placeholder="Search"
        className="manage-users-search-input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="manage-user-span">
        <span>Showing {filteredRoles.length} / {usersData.length} results</span>
      </div>
      <div className="table-container">
      <table  ref={tableRef}>
          <thead>
            <tr>
              {[
                  "Role Name",
                  "Employee Name",
                  "User Name",
                  "Department Name",
                  "Email",
                  "Action"
              ].map((header, index) => (
                <th
                  key={index}
                  style={{ width: columnWidths[index] }}
                  className="resizable-th"
                >
                  <div className="header-content">
                    <span>{header}</span>
                    <div
                      className="resizer"
                      onMouseDown={startResizing(
                        tableRef,
                        setColumnWidths
                      )(index)}
                    ></div>
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
                  <button className="manage-users-action-button" onClick={() => handleShowEditModal(role)}>Edit</button>
                  <button className="manage-users-action-button">Manage Permission</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* <div className="manage-users-pagination">
          <div className="manage-users-pagination-controls">
            <button>First</button>
            <button>Previous</button>
            <button>1</button>
            <button>Next</button>
            <button>Last</button>
          </div>
        </div> */}
      </div>
      
    </div>
  );
};

export default ManageRole;
