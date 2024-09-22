import React, { useState, useEffect, useRef } from 'react';
import { Button } from 'react-bootstrap';
import './EmployeeTypeTable.css'; // Assuming your CSS is included here
import AddEmployeeType from './AddEmployeeType'; // Import the AddEmployeeType component
import { startResizing } from '../TableHeadingResizing/resizableColumns';
const EmployeeTypeComponent = () => {
  const [showAddTypeModal, setShowAddTypeModal] = useState(false);
  const [typeData, setTypeData] = useState({ role: '', description: '' });
  const [columnWidths,setColumnWidths] = useState({});
  const tableRef=useRef(null);
    

  const handleOpenAddTypeModal = (role = '', description = '') => {
    setTypeData({ role, description });
    setShowAddTypeModal(true);
  };

  const handleCloseAddTypeModal = () => setShowAddTypeModal(false);

  const roles = [
    { role: 'Full Time', description: '' },
    { role: 'Part Time', description: '' },
    // Other roles
  ];
  // Example JavaScript to toggle the class
function openModal() {
  document.body.classList.add('emp-modal-open');
  // Show modal logic here
}

function closeModal() {
  document.body.classList.remove('emp-modal-open');
  
}


  return (
    <div className="employee-Type-page">
      <div className="employee-Type-table-container">
        <div className="employee-Type-role-manage-section">
          <Button
            variant="primary"
            className="add-employee-Type-role-btn"
            onClick={() => handleOpenAddTypeModal()}
          >
            +Add Type
          </Button>
        </div>
        <input type="text" placeholder="Search" className="emp-search-input" />

       <div className='table-container'>
       <table  ref={tableRef}>
          <thead>
            <tr>
              {[
               "Type", "Description", "Action"
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
                    className='emp-role-btn'
                    variant="secondary"
                    onClick={() => handleOpenAddTypeModal(role.role, role.description)}
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
      {/* <div className="add-employee-pagination">
        <Button>First</Button>
        <Button>Previous</Button>
        <span>Page 1 of 4</span>
        <Button>Next</Button>
        <Button>Last</Button>
      </div> */}

      {/* AddEmployeeType Modal */}
      <AddEmployeeType
        show={showAddTypeModal}
        handleClose={handleCloseAddTypeModal}
        typeData={typeData} // Passing the role data to the modal
      />
    </div>
  );
};

export default EmployeeTypeComponent;
