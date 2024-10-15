import React, { useState, useEffect, useRef } from 'react';
import { Button } from 'react-bootstrap';
import './EmployeeTypeTable.css'; // Assuming your CSS is included here
import AddEmployeeType from './AddEmployeeType'; // Import the AddEmployeeType component
import { startResizing } from '../TableHeadingResizing/resizableColumns';
import { API_BASE_URL } from '../api/api'; // Ensure the correct API_BASE_URL is imported

const EmployeeTypeComponent = () => {
  const [showAddTypeModal, setShowAddTypeModal] = useState(false);
  const [typeData, setTypeData] = useState({});
  const [columnWidths, setColumnWidths] = useState({});
  const [employeeTypes, setEmployeeTypes] = useState([]); // State for fetched employee types
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const tableRef = useRef(null);

  // Fetch employee types when the component mounts
  useEffect(() => {
    const fetchEmployeeTypes = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/employeeTypes/getAll`);
        if (response.ok) {
          const data = await response.json();
          setEmployeeTypes(data); // Update state with fetched employee types
          setIsLoading(false);
        } else {
          console.error('Failed to fetch employee types:', response.statusText);
          setIsLoading(false);
        }
      } catch (error) {
        console.error('Error fetching employee types:', error);
        setIsLoading(false);
      }
    };

    fetchEmployeeTypes();
  }, []); // Empty dependency array means this runs once when the component mounts

  const handleOpenAddTypeModal = (type) => {
    setTypeData(type);
    setShowAddTypeModal(true);
  };

  const handleCloseAddTypeModal = () => setShowAddTypeModal(false);

  // Example functions to handle modal classes for toggling
  function openModal() {
    document.body.classList.add('emp-modal-open');
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

        <div className="table-container">
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <table ref={tableRef}>
              <thead>
                <tr>
                  {['Type', 'Description', 'Action'].map((header, index) => (
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
                {employeeTypes.length > 0 ? (
                  employeeTypes.map((type, index) => (
                    <tr key={index}>
                      <td>{type.employeeType}</td>
                      <td>{type.description}</td>
                      <td>
                        <Button
                          className="emp-role-btn"
                          variant="secondary"
                          onClick={() =>
                            handleOpenAddTypeModal(type)
                          }
                        >
                          Edit
                        </Button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3">No employee types found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>

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
