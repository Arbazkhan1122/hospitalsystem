import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
// import './ManageBedPriceCategory.css';

const ManageBedPriceCategory = () => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // Sample data
  const data = [
    { bedFeature: 'Male Ward', scheme: 'NHIF CAPITATION', priceCategory: 'NHIF CAPITATION', isActive: true },
    { bedFeature: 'Electronic', scheme: 'General', priceCategory: 'MTIBA', isActive: true },
    { bedFeature: 'Electronic', scheme: 'Astra', priceCategory: 'MTIBA', isActive: true },
  ];

  const handleEditClick = (item) => {
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
    console.log('Updated:', selectedItem);
    handleCloseModal();
  };

  return (
    <div className="manage-add-ward-page">
      <div className="manage-add-ward-table-container">
        <div className="manage-add-ward-manage-section">
          <Button className="manage-add-ward-btn">+ Add Bed Feature Scheme And Price Category</Button>
        </div>
        <input type="text" placeholder="Search" className="manage-add-ward-search-input" />
        <div className="manage-add-ward-results-info">Showing {data.length} / {data.length} results</div>

        <div className='manage-ward-ta'>
          <table className="manage-add-ward-table">
            <thead>
              <tr>
                <th>Bed Feature</th>
                <th>Scheme</th>
                <th>Price Category</th>
                <th>Is Active</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.bedFeature}</td>
                  <td>{item.scheme}</td>
                  <td>{item.priceCategory}</td>
                  <td>{item.isActive ? 'true' : 'false'}</td>
                  <td>
                    <Button className="manage-add-ward-edit-btn" onClick={() => handleEditClick(item)}>Edit</Button>
                    <Button className="manage-add-ward-edit-btn">Deactivate</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="manage-add-ward-pagination">
            <Button className="manage-add-ward-pagination-btn">First</Button>
            <Button className="manage-add-ward-pagination-btn">Previous</Button>
            <span>Page 1 of 3</span>
            <Button className="manage-add-ward-pagination-btn">Next</Button>
            <Button className="manage-add-ward-pagination-btn">Last</Button>
          </div>
        </div>
      </div>

      <Modal show={showEditModal} onHide={handleCloseModal} dialogClassName="manage-add-employee-role">
        <div className="manage-modal-dialog">
          <div className="manage-modal-modal-header">
            <div className="manage-modal-modal-title">Update Bed Feature Scheme And Price Category</div>
            <Button onClick={handleCloseModal} className="manage-modal-employee-role-btn">X</Button>
          </div>
          <div className="manage-modal-modal-body">
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="bedFeature">
                <Form.Label className="manage-modal-form-label">
                  Bed Feature <span className="manage-modal-text-danger">*</span>:
                </Form.Label>
                <Form.Control
                  type="text"
                  value={selectedItem?.bedFeature || ''}
                  onChange={(e) => setSelectedItem({ ...selectedItem, bedFeature: e.target.value })}
                  placeholder="Bed Feature"
                  required
                  className="manage-modal-form-control"
                />
              </Form.Group>

              <Form.Group controlId="scheme">
                <Form.Label className="manage-modal-form-label">Scheme:</Form.Label>
                <Form.Control
                  type="text"
                  value={selectedItem?.scheme || ''}
                  onChange={(e) => setSelectedItem({ ...selectedItem, scheme: e.target.value })}
                  placeholder="Scheme"
                  className="manage-modal-form-control"
                />
              </Form.Group>

              <Form.Group controlId="priceCategory">
                <Form.Label className="manage-modal-form-label">Price Category:</Form.Label>
                <Form.Control
                  type="text"
                  value={selectedItem?.priceCategory || ''}
                  onChange={(e) => setSelectedItem({ ...selectedItem, priceCategory: e.target.value })}
                  placeholder="Price Category"
                  className="manage-modal-form-control"
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

export default ManageBedPriceCategory;
