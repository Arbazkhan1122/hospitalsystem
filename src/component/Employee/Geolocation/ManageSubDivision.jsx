import React, { useState, useEffect, useRef } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './ManageMunicipality.css'; 
import { startResizing } from '../../TableHeadingResizing/resizableColumns';


const usserData = [
  {
    "Sub Division Name": "Athi River sub county",
    "Is Active": "true",
    "Action": "Edit"
  },
  {
    "Sub Division Name": "Awendo sub county",
    "Is Active": "true",
    "Action": "Edit"
  },
  {
    "Sub Division Name": "Balambala sub county",
    "Is Active": "true",
    "Action": "Edit"
  },
  {
    "Sub Division Name": "Banisa sub county",
    "Is Active": "true",
    "Action": "Edit"
  },
  {
    "Sub Division Name": "Baringo central sub county",
    "Is Active": "true",
    "Action": "Edit"
  },
  {
    "Sub Division Name": "Baringo north sub county",
    "Is Active": "true",
    "Action": "Edit"
  },
  {
    "Sub Division Name": "Belgut sub county",
    "Is Active": "true",
    "Action": "Edit"
  },
  {
    "Sub Division Name": "Bomet central sub county",
    "Is Active": "true",
    "Action": "Edit"
  },
  {
    "Sub Division Name": "Bomet East sub county",
    "Is Active": "true",
    "Action": "Edit"
  },
  {
    "Sub Division Name": "Bondo sub county",
    "Is Active": "true",
    "Action": "Edit"
  },
  {
    "Sub Division Name": "Borabu sub county",
    "Is Active": "true",
    "Action": "Edit"
  },
  {
    "Sub Division Name": "Bumula sub county",
    "Is Active": "true",
    "Action": "Edit"
  },
  {
    "Sub Division Name": "Buna sub county",
    "Is Active": "true",
    "Action": "Edit"
  },
  {
    "Sub Division Name": "Bungoma central sub county",
    "Is Active": "true",
    "Action": "Edit"
  },
  {
    "Sub Division Name": "Bungoma east sub county",
    "Is Active": "true",
    "Action": "Edit"
  },
  {
    "Sub Division Name": "Bungoma north sub county",
    "Is Active": "true",
    "Action": "Edit"
  },
  {
    "Sub Division Name": "Bungoma south sub county",
    "Is Active": "true",
    "Action": "Edit"
  },
  {
    "Sub Division Name": "Bungoma west sub county",
    "Is Active": "true",
    "Action": "Edit"
  },
  {
    "Sub Division Name": "Bunyala sub county",
    "Is Active": "true",
    "Action": "Edit"
  },
  {
    "Sub Division Name": "Bureti sub county",
    "Is Active": "true",
    "Action": "Edit"
}
]


const ManageSubDivision = () => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [columnWidths,setColumnWidths] = useState({});
  const tableRef=useRef(null);

  const handleCloseModal = () => setShowEditModal(false);

  // Correct the parameter name to match the data being passed
  const handleShowModal = (subDivision) => {
      setSelectedItem(subDivision);
      setShowEditModal(true);
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission logic here
      handleCloseModal();
  };
    return (
      <div className="manage-municipality-container">
      <div className="manage-municipality-header">
        <button className="manage-municipality-add-button">+ Add Sub Division</button>
      </div>
      <input type="text" placeholder="Search" className="manage-municipality-search-input" />
      <div className="manage-municipality-span">
        <span>Showing {usserData.length} / {usserData.length} results</span>
      </div>
      <div className="table-container">
      <table  ref={tableRef}>
          <thead>
            <tr>
              {[
'Sub Division Name', 'Is Active', 'Action'            
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
            {usserData.map((subDivision, index) => (
              <tr key={index}>
                <td>{subDivision["Sub Division Name"]}</td>
                <td>{subDivision["Is Active"]}</td>
                <td className="manage-municipality-action-buttons">
                  <button 
                    className="manage-municipality-action-button" 
                    onClick={() => handleShowModal(subDivision)} // Pass the correct parameter
                  >
                    Edit
                  </button>
                  {/* <button className="manage-municipality-action-button">Delete</button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="manage-municipality-pagination">
          <div className="manage-municipality-pagination-controls">
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
            <div className="manage-modal-modal-title">Update Country SubDivision</div>
            <Button onClick={handleCloseModal} className="manage-modal-employee-role-btn">X</Button>
          </div>
          <div className="manage-modal-modal-body">
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="countryName">
                <Form.Label className="manage-modal-form-label">Country Name:</Form.Label>
                <Form.Control
                  type="text"
                  value={selectedItem?.Name || ''}
                  onChange={(e) => setSelectedItem({ ...selectedItem, Name: e.target.value })}
                  placeholder="Country Name"
                  className="manage-modal-form-control"
                />
              </Form.Group>

              <Form.Group controlId="countrySymbol">
                <Form.Label className="manage-modal-form-label">Country Sub-Division Name:</Form.Label>
                <Form.Control
                  type="text"
                  value={selectedItem?.["Country Symbol"] || ''}
                  onChange={(e) => setSelectedItem({ ...selectedItem, "Country Symbol": e.target.value })}
                  placeholder="Country Symbol"
                  className="manage-modal-form-control"
                />
              </Form.Group>

              <Form.Group controlId="isActive">
                <Form.Label className="manage-modal-form-label">Is Active:</Form.Label>
                <Form.Check
                  type="checkbox"
                  checked={selectedItem?.["Is Active"] === "true"}
                  onChange={(e) => setSelectedItem({ ...selectedItem, "Is Active": e.target.checked.toString() })}
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

export default ManageSubDivision;
