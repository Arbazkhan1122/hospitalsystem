// src/DepartmentTable.jsx

import React, { useState, useEffect, useRef } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { startResizing } from '../TableHeadingResizing/resizableColumns';

import './ManageSubstore.css';

const ManageSubstore = () => {
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedSubstore, setSelectedSubstore] = useState(null);
  const [columnWidths,setColumnWidths] = useState({});
  const tableRef=useRef(null);
  const data = [
    { name: 'Accounts', code: '0010', parentSubStore: '', email: '', phone: '', address: '', label: '', verification: 0, isActive: true },
    { name: 'Brain Operations Store', code: '2001', parentSubStore: '', email: '', phone: '', address: '', label: '', verification: 0, isActive: true },
    { name: 'Female Ward Substore', code: '', parentSubStore: '', email: '', phone: '', address: '', label: '', verification: 0, isActive: true },
    { name: 'ICU Sub store', code: '', parentSubStore: '', email: '', phone: '', address: '', label: '', verification: 0, isActive: true },
    { name: 'male ward SubStore', code: '', parentSubStore: '', email: '', phone: '', address: '', label: '', verification: 0, isActive: true },
    { name: 'Maternity Substore', code: 'Maternity', parentSubStore: '', email: '', phone: '', address: '', label: 'Maternity Substore', verification: 0, isActive: true },
    { name: 'Operations Store', code: '2000', parentSubStore: '', email: '', phone: '', address: '', label: '', verification: 0, isActive: true },
    { name: 'Private Sub Store', code: '', parentSubStore: '', email: '', phone: '', address: '', label: '', verification: 0, isActive: true },
    { name: 'SubStore1', code: '', parentSubStore: '', email: '', phone: '', address: 'ward', label: '', verification: 0, isActive: true },
    { name: 'SubStore3', code: '', parentSubStore: '', email: '', phone: '', address: '', label: '', verification: 0, isActive: true },
  ];
  const handleEditClick = (substore) => {
    setSelectedSubstore(substore);
    setShowUpdateModal(true);
  };

  const handleCloseUpdateModal = () => {
    setShowUpdateModal(false);
    setSelectedSubstore(null);
  };

  return (
    <div className="manage-substore-page">
    <div className="manage-substore-table-container">
      <div className="manage-substore-manage-section">
        <h1 className="manage-add-substore-btn">+ Add Substore</h1>
        <div className="manage-substore-results-info">Showing 10 / 10 results</div>
      </div>
      <input type="text" placeholder="Search" className="manage-substore-search-input" />

      <table  ref={tableRef}>
          <thead>
            <tr>
              {[
               "Name",
               "Code",
               "Parent Substore",
               "Email",
               "Phone",
               "Address",
               "Label",
               "Verification",
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
              <td>{item.name}</td>
              <td>{item.code}</td>
              <td>{item.parentSubStore}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.address}</td>
              <td>{item.label}</td>
              <td>{item.verification}</td>
              <td>{item.isActive.toString()}</td>
              <td>
                <Button className="manage-store-edit-btn" onClick={() => handleEditClick(item)}>
                  Edit
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="manage-store-pagination">
        <Button className="manage-store-pagination-btn">First</Button>
        <Button className="manage-store-pagination-btn">Previous</Button>
        <span>Page 1 of 4</span>
        <Button className="manage-store-pagination-btn">Next</Button>
        <Button className="manage-store-pagination-btn">Last</Button>
      </div>
    </div>

    {showUpdateModal && (
  <div className="used-substore-manage">
    <Modal show={showUpdateModal} onHide={handleCloseUpdateModal} size="lg" centered>
      {/* <Modal.Header closeButton> */}
        {/* <Modal.Title>Update SubStore</Modal.Title> */}
      {/* </Modal.Header> */}
      <Modal.Body>
        <UpdateSubStore substore={selectedSubstore} onClose={handleCloseUpdateModal} />
      </Modal.Body>
    </Modal>
  </div>
)}

  </div>
);
};

const UpdateSubStore = ({ substore, onClose }) => {
const handleSubmit = (e) => {
  e.preventDefault();
  // Handle form submission logic here
  onClose();
};

return (
  <div className="update-substore-modal-container">
    <div className="update-substore-modal-header">
      <h2>Update SubStore</h2>
      <button className="update-substore-close-btn" onClick={onClose}>&times;</button>
    </div>
    <form className="update-substore-form-container" onSubmit={handleSubmit}>
      <div className="update-substore-form-group">
        <label>SubStore Name<span className="update-substore-required">*</span>:</label>
        <input type="text" defaultValue={substore.name} className="update-substore-input-field" />
      </div>
      <div className="update-substore-form-group">
        <label>Code :</label>
        <input type="text" value={substore.code} readOnly className="update-substore-input-field" />
      </div>
      <div className="update-substore-form-group">
        <label>Email :</label>
        <input type="email" defaultValue={substore.email} className="update-substore-input-field" />
      </div>
      <div className="update-substore-form-group">
        <label>Contact No :</label>
        <input type="text" defaultValue={substore.phone} className="update-substore-input-field" />
      </div>
      <div className="update-substore-form-group">
        <label>Location :</label>
        <input type="text" defaultValue={substore.address} className="update-substore-input-field" />
      </div>
      <div className="update-substore-form-group">
        <label>SubStore Description :</label>
        <textarea defaultValue={substore.description} className="update-substore-textarea-field"></textarea>
      </div>
      <div className="update-substore-form-group">
        <label>Label :</label>
        <input type="text" defaultValue={substore.label} className="update-substore-input-field" />
      </div>
      <div className="update-substore-form-group">
        <label>Max Verification Level :</label>
        <input type="number" defaultValue={substore.verification} className="update-substore-input-field" />
      </div>
      <button type="submit" className="update-substore-update-btn">Update</button>
    </form>
  </div>
);
};

export default ManageSubstore;