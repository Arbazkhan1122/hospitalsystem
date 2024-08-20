// src/ReportingItemsMapping.jsx

import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './MapSchemeAndPrice.css';

const usersData = [
  {
    name: 'Heart',
    report: 'Free Service to Impoverished Citizen',
    unit: '',
    isActive: true,
  },
  {
    name: 'Kidney',
    report: 'Free Service to Impoverished Citizen',
    unit: '',
    isActive: true,
  },
  {
    name: 'Free Dialysis',
    report: 'Free Service to Impoverished Citizen',
    unit: '',
    isActive: true,
  },
  {
    name: 'Cancer',
    report: 'Free Service to Impoverished Citizen',
    unit: '',
    isActive: true,
  },
  {
    name: 'Head Injury',
    report: 'Free Service to Impoverished Citizen',
    unit: '',
    isActive: true,
  },
  {
    name: 'Spinal Injury',
    report: 'Free Service to Impoverished Citizen',
    unit: '',
    isActive: true,
  },
  {
    name: 'Alzheimer',
    report: 'Free Service to Impoverished Citizen',
    unit: '',
    isActive: true,
  },
  {
    name: 'Sickle Cell Anaemia',
    report: 'Free Service to Impoverished Citizen',
    unit: '',
    isActive: true,
  },
  {
    name: 'X-Ray',
    report: 'Diagnostic & Other Services',
    unit: 'number',
    isActive: true,
  },
  {
    name: 'Ultrasonogram(USG)',
    report: 'Diagnostic & Other Services',
    unit: 'number',
    isActive: true,
  },
  {
    name: 'Magnetic Resonance Imaging(MRI)',
    report: 'Diagnostic & Other Services',
    unit: 'number',
    isActive: true,
  },
  {
    name: 'Computed Tomographic(CT) Scan',
    report: 'Diagnostic & Other Services',
    unit: 'number',
    isActive: true,
  },
  {
    name: 'Electro Encephalo Gram(EEG)',
    report: 'Diagnostic & Other Services',
    unit: 'number',
    isActive: true,
  },
  {
    name: 'Electrocardiogram(ECG)',
    report: 'Diagnostic & Other Services',
    unit: 'number',
    isActive: true,
  },
  {
    name: 'Trademill',
    report: 'Diagnostic & Other Services',
    unit: 'number',
    isActive: true,
  },
  {
    name: 'Echocardiogram (Echo)',
    report: 'Diagnostic & Other Services',
    unit: 'number',
    isActive: true,
  },
  {
    name: 'Endoscopy',
    report: 'Diagnostic & Other Services',
    unit: 'person',
    isActive: true,
  },
  {
    name: 'Colonoscopy',
    report: 'Diagnostic & Other Services',
    unit: 'person',
    isActive: true,
  },
  {
    name: 'Nuclear Medicine',
    report: 'Diagnostic & Other Services',
    unit: 'person',
    isActive: true,
  },
  {
    name: 'Bronchoscopy',
    report: 'Diagnostic & Other Services',
    unit: 'person',
    isActive: true,
},

];

const ReportingItemsMapping = () => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = usersData.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleShowEditModal = (item) => {
    setSelectedItem(item);
    setShowEditModal(true);
  };

  const handleCloseModal = () => {
    setShowEditModal(false);
    setSelectedItem(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Updated Item:', selectedItem);
    handleCloseModal();
  };

  return (
    <div className="map-scheme-reaction-container">
      <div className="map-scheme-reaction-header">
        <button className="map-scheme-reaction-add-button">+ Add New Report Item</button>
      </div>
      <input
        type="text"
        placeholder="Search"
        className="map-scheme-reaction-search-input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="map-scheme-reaction-span">
        <span>Showing {filteredData.length}/{usersData.length} results</span>
      </div>
      <div className="map-scheme-reaction-tab">
        <table className="map-scheme-reaction-users-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Report</th>
              <th>Unit</th>
              <th>Is Active</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.report}</td>
                <td>{item.unit}</td>
                <td>{item.isActive ? 'Yes' : 'No'}</td>
                <td className="manage-reaction-action-buttons">
                  <button className="map-scheme-reaction-action-button" onClick={() => handleShowEditModal(item)}>Edit</button>
                  <button className="map-scheme-reaction-action-button">Manage Services</button>
                  <button className="map-scheme-reaction-action-button">Deactivate</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="map-scheme-reaction-pagination">
          <div className="map-scheme-reaction-pagination-controls">
            <button>First</button>
            <button>Previous</button>
            <button>Next</button>
            <button>Last</button>
          </div>
        </div>
      </div>

      <Modal show={showEditModal} onHide={handleCloseModal} dialogClassName="manage-add-employee-role">
        <div className="manage-modal-dialog">
          <div className="manage-modal-modal-header">
            <div className="manage-modal-modal-title">Update Reporting Item</div>
            <Button onClick={handleCloseModal} className="manage-modal-employee-role-btn">X</Button>
          </div>
          <div className="manage-modal-modal-body">
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="name">
                <Form.Label className="manage-modal-form-label">Report Name:</Form.Label>
                <Form.Control
                  type="text"
                  value={selectedItem?.name || ''}
                  onChange={(e) => setSelectedItem({ ...selectedItem, name: e.target.value })}
                  placeholder="Report Name"
                  className="manage-modal-form-control"
                />
              </Form.Group>

              <Form.Group controlId="report">
                <Form.Label className="manage-modal-form-label">Report Description:</Form.Label>
                <Form.Control
                  type="text"
                  value={selectedItem?.report || ''}
                  onChange={(e) => setSelectedItem({ ...selectedItem, report: e.target.value })}
                  placeholder="Report Description"
                  className="manage-modal-form-control"
                />
              </Form.Group>

              <Form.Group controlId="unit">
                <Form.Label className="manage-modal-form-label">Report Count Unit:</Form.Label>
                <Form.Control
                  type="text"
                  value={selectedItem?.unit || ''}
                  onChange={(e) => setSelectedItem({ ...selectedItem, unit: e.target.value })}
                  placeholder="Report Count Unit"
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

export default ReportingItemsMapping;
