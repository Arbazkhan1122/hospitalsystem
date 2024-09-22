import React, { useState, useEffect, useRef } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './ManageMunicipality.css'; 
import { startResizing } from '../../TableHeadingResizing/resizableColumns';


const usersData = [
  // The data for municipalities
  { municipality: 'Brihanmumbai Municipal Corporation', country: 'India', subDivision: 'Maharashtra', type: 'Mahanagarpalika', isActive: true },
  { municipality: 'Pune Municipal Corporation', country: 'India', subDivision: 'Maharashtra', type: 'Mahanagarpalika', isActive: true },
  { municipality: 'Nagpur Municipal Corporation', country: 'India', subDivision: 'Maharashtra', type: 'Mahanagarpalika', isActive: true },
  { municipality: 'Solapur Municipal Corporation', country: 'India', subDivision: 'Maharashtra', type: 'Mahanagarpalika', isActive: true },
  { municipality: 'Kolhapur Municipal Corporation', country: 'India', subDivision: 'Maharashtra', type: 'Mahanagarpalika', isActive: true },
  // More municipalities...
];

const ManageMunicipalityCom = () => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [columnWidths,setColumnWidths] = useState({});
  const tableRef=useRef(null);

  const handleCloseModal = () => setShowEditModal(false);

  // Function to show the edit modal for a specific subdivision
  const handleShowModal = (subDivision) => {
    setSelectedItem(subDivision);
    setShowEditModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(selectedItem); // Display updated data
    handleCloseModal();
  };

  return (
    <div className="manage-municipality-container">
      <div className="manage-municipality-header">
        <button className="manage-municipality-add-button">+ Add Sub County</button>
      </div>
      
      <input type="text" placeholder="Search" className="manage-municipality-search-input" />
      <div className="manage-municipality-span">
        <span>Showing {usersData.length} / {usersData.length} results</span>
      </div>

      <div className="table-container">
      <table  ref={tableRef}>
          <thead>
            <tr>
              {[
               'Municipality', 'Country', 'Sub Division', 'Type', 'Is Active', 'Action'
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
            {usersData.map((subDivision, index) => (
              <tr key={index}>
                <td>{subDivision.municipality}</td>
            <td>{subDivision.country}</td>
            <td>{subDivision.subDivision}</td>
            <td>{subDivision.type}</td>
            <td>{subDivision.isActive ? 'Yes' : 'No'}</td>
                <td className="manage-municipality-action-buttons">
                  <button 
                    className="manage-municipality-action-button" 
                    onClick={() => handleShowModal(subDivision)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* <div className="manage-municipality-pagination">
          <div className="manage-municipality-pagination-controls">
            <button>First</button>
            <button>Previous</button>
            <button>1</button>
            <button>Next</button>
            <button>Last</button>
          </div>
        </div> */}
      </div>

      <Modal show={showEditModal} onHide={handleCloseModal} dialogClassName="manage-add-employee-role">
        <div className="manage-modal-dialog">
          <div className="manage-modal-modal-header">
            <div className="manage-modal-modal-title">Update Country SubDivision</div>
            <Button onClick={handleCloseModal} className="manage-modal-employee-role-btn">X</Button>
          </div>
          <div className="manage-modal-modal-body">
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="subDivisionName">
                <Form.Label className="manage-modal-form-label">Sub Division Name:</Form.Label>
                <Form.Control
                  type="text"
                  value={selectedItem?.subDivision || ''}
                  onChange={(e) => setSelectedItem({ ...selectedItem, subDivision: e.target.value })}
                  placeholder="Sub Division Name"
                  className="manage-modal-form-control"
                />
              </Form.Group>

              <Form.Group controlId="isActive">
                <Form.Label className="manage-modal-form-label">Is Active:</Form.Label>
                <Form.Check
                  type="checkbox"
                  checked={selectedItem?.isActive || false}
                  onChange={(e) => setSelectedItem({ ...selectedItem, isActive: e.target.checked })}
                  className="manage-modal-form-check-input"
                />
              </Form.Group>

              <Button type="submit" className="manage-modal-employee-btn">Update</Button>
            </Form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ManageMunicipalityCom;
