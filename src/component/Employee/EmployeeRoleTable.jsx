import React, { useState, useEffect, useRef } from 'react';
import { Button } from 'react-bootstrap';
import './EmployeeRoleTable.css';
import { startResizing } from '../TableHeadingResizing/resizableColumns';
// import AddEmployeeForm from './AddEmployeeForm';
import AddEmployeeRoleForm from './AddEmployeeRole';

const EmployeeRoleComponent = () => {
  const [showAddRoleModal, setShowAddRoleModal] = useState(false);
  const [roleData, setRoleData] = useState({ role: '', description: '' });
  const [columnWidths,setColumnWidths] = useState({});
  const tableRef=useRef(null);

  const handleOpenAddRoleModal = (role = '', description = '') => {
    setRoleData({ role, description });
    setShowAddRoleModal(true);
  };

  const handleCloseAddRoleModal = () => setShowAddRoleModal(false);

  const roles = [
    { role: 'Account Manager', description: 'Handles all account-related tasks.' },
    { role: 'Marketing Manager', description: 'Oversees marketing strategies and campaigns.' },
    { role: 'IT Developer', description: 'Develops and maintains IT systems.' },
    { role: 'HR Recruiter', description: 'Responsible for recruitment and HR-related tasks.' },
    { role: 'Finance Analyst', description: 'Analyzes financial data and reports.' },
  ];

  return (
    <div className="employee-role-role-page">
      <div className="employee-role-role-table-container">
        <div className="employee-role-role-manage-section">
          <Button
            variant="primary"
            className="add-employee-role-role-btn"
            onClick={() => handleOpenAddRoleModal()}
          >
            +Add Role
          </Button>
        </div>
        <input type="text" placeholder="Search" className="emp-search-input" />

       <div className='table-container'>
       <table  ref={tableRef}>
          <thead>
            <tr>
              {[
               "Role", "Description", "Action"
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
            {roles.map((role, index) => (
              <tr key={index}>
                <td>{role.role}</td>
                <td>{role.description}</td>
                <td>
                  <Button
                    className="emp-role-btn"
                    variant="secondary"
                    onClick={() => handleOpenAddRoleModal(role.role, role.description)}
                  >
                    Edit
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
       </div>
      </div>
      {/* <div className="employee-pagination">
        <Button>First</Button>
        <Button>Previous</Button>
        <span>Page 1 of 4</span>
        <Button>Next</Button>
        <Button>Last</Button>
      </div> */}

      {/* AddEmployeeRoleForm Modal */}
      <AddEmployeeRoleForm
        show={showAddRoleModal}
        handleClose={handleCloseAddRoleModal}
        roleData={roleData} // Passing the role data to the modal
      />
    </div>
  );
};

export default EmployeeRoleComponent;
