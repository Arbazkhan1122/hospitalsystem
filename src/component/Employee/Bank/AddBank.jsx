import React, { useState, useEffect, useRef } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './AddBank.css';
import { startResizing } from '../../TableHeadingResizing/resizableColumns';
const AddBank = () => {
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  
  const [columnWidths,setColumnWidths] = useState({});
  const tableRef=useRef(null);
  const [formData, setFormData] = useState({
    bankName: '',
    bankShortName: '',
    description: '',
    isActive: true
  });

  const handleShowModal = (department = null) => {
    if (department) {
      setSelectedDepartment(department);
      setIsEditMode(true);
      setFormData({
        bankName: department.name,
        bankShortName: department.code,
        description: department.description,
        isActive: department.isActive
      });
    } else {
      setSelectedDepartment(null);
      setIsEditMode(false);
      setFormData({
        bankName: '',
        bankShortName: '',
        description: '',
        isActive: true
      });
    }
    setShowUpdateModal(true);
  };

  const handleCloseUpdateModal = () => {
    setShowUpdateModal(false);
    setSelectedDepartment(null);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    handleCloseUpdateModal();
  };

  // Example data
  const data = [
    {
      code: 'KCB',
      name: 'KENYA COMMERCIAL BANK',
      parent: 'N/A',
      description: 'Details about KCB',
      isActive: true,
      isAppointment: false,
    }
  ];

  return (
    <div className="manage-department-page">
      <div className="manage-department-table-container">
        <div className="manage-department-manage-section">
          <Button
            className="manage-add-department-btn"
            onClick={() => handleShowModal()} // Trigger modal in add mode
          >
            + Add New
          </Button>
        </div>
        <input type="text" placeholder="Search" className="manage-department-search-input" />
        <div className="bank-container">
  <div className="bank-span">Showing 1 / 1 result</div>
</div>

       <div className='table-container'>
       <table  ref={tableRef}>
          <thead>
            <tr>
              {[
               "Bank Short Name",
  "Bank Name",
  "Description",
  "Is Active",
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
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.code}</td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.isActive.toString()}</td>
                <td>
                  <Button
                    className="manage-edit-button"
                    onClick={() => handleShowModal(item)} // Trigger modal in edit mode
                  >
                    Edit
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
       </div>

        {/* <div className="manage-department-pagination">
          <Button className="manage-department-pagination-btn">First</Button>
          <Button className="manage-department-pagination-btn">Previous</Button>
          <span>Page 1 of 1</span>
          <Button className="manage-department-pagination-btn">Next</Button>
          <Button className="manage-department-pagination-btn">Last</Button>
        </div> */}
      </div>

      <Modal show={showUpdateModal}  className="add-bank-details-form">
      <Button className='add-bamk-details-close-btn-form' variant="secondary" onClick={handleCloseUpdateModal}>
            X
          </Button>
        <Modal.Header  className='add-bank-header-form'>
          <Modal.Title>{isEditMode ? 'Edit Bank Details' : 'Add New Bank'}</Modal.Title>
        </Modal.Header>
        
        <Modal.Body>
          <form onSubmit={handleSubmit} className="add-bank-details-form-body">
            <div className='add-bank-details-form-fields'>
              <div className="add-bank-details-form-row">
                <div className="add-bank-details-form-group">
                  <label>Bank Name</label>
                  <input
                    type="text"
                    name="bankName"
                    value={formData.bankName}
                    onChange={handleChange}
                    placeholder="Enter Bank Name"
                    required
                  />
                </div>
                <div className="add-bank-details-form-group">
                  <label>Bank Short Name</label>
                  <input
                    type="text"
                    name="bankShortName"
                    value={formData.bankShortName}
                    onChange={handleChange}
                    placeholder="Enter Bank Short Name"
                    required
                  />
                </div>
              </div>
              <div className="add-bank-details-form-group">
                <label>Description</label>
                <input
                  type="text"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Enter Description"
                  required
                />
              </div>
              <div className="add-bank-details-form-group">
                <label>
                  <input
                    type="checkbox"
                    name="isActive"
                    checked={formData.isActive}
                    onChange={handleChange}
                  />
                  Is Active
                </label>
              </div>
            </div>
            
             
           
          </form>
        </Modal.Body>
        <Modal.Footer>
         
          <Button  className="add-bamk-details-add-btn-form" type="submit" variant="primary">
                {isEditMode ? 'Update' : 'Add'}
              </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddBank;
