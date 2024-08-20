import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
// import './DepositeSettings.css';

const DepositeSettings = () => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // Sample data
  const data = [
    { bedFeature: 'FEMALE WARD', scheme: 'NHIF CAPITATION', depositHead: 'Normal Deposit', minimumDeposit: 1000, isOnlyMinimum: true, isActive: true },
    { bedFeature: 'Male Ward', scheme: 'NHIF CAPITATION', depositHead: 'Normal Deposit', minimumDeposit: 25, isOnlyMinimum: true, isActive: false },
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
          <Button className="manage-add-ward-btn">+ Add Minimum Deposit Setting</Button>
        </div>
        <input type="text" placeholder="Search" className="manage-add-ward-search-input" />
        <div className="manage-add-ward-results-info">Showing {data.length} / {data.length} results</div>

        <div className='manage-ward-ta'>
          <table className="manage-add-ward-table">
            <thead>
              <tr>
                <th>Bed Features</th>
                <th>Schemes</th>
                <th>Deposit Head</th>
                <th>Minimum Deposit</th>
                <th>Is Only Minimum</th>
                <th>Is Active</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.bedFeature}</td>
                  <td>{item.scheme}</td>
                  <td>{item.depositHead}</td>
                  <td>{item.minimumDeposit}</td>
                  <td>{item.isOnlyMinimum.toString()}</td>
                  <td>{item.isActive.toString()}</td>
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
            <div className="manage-modal-modal-title">Update Minimum Deposit Setting</div>
            <Button onClick={handleCloseModal} className="manage-modal-employee-role-btn">X</Button>
          </div>
          <div className="manage-modal-modal-body">
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="bedFeature">
                <Form.Label className="manage-modal-form-label">
                  Bed Features <span className="manage-modal-text-danger">*</span>:
                </Form.Label>
                <Form.Control
                  type="text"
                  value={selectedItem?.bedFeature || ''}
                  onChange={(e) => setSelectedItem({ ...selectedItem, bedFeature: e.target.value })}
                  placeholder="Bed Features"
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

              <Form.Group controlId="depositHead">
                <Form.Label className="manage-modal-form-label">Deposit Head:</Form.Label>
                <Form.Control
                  type="text"
                  value={selectedItem?.depositHead || ''}
                  onChange={(e) => setSelectedItem({ ...selectedItem, depositHead: e.target.value })}
                  placeholder="Deposit Head"
                  className="manage-modal-form-control"
                />
              </Form.Group>
              
              <Form.Group controlId="minimumDeposit">
                <Form.Label className="manage-modal-form-label">Minimum Deposit Amount:</Form.Label>
                <Form.Control
                  type="number"
                  value={selectedItem?.minimumDeposit || ''}
                  onChange={(e) => setSelectedItem({ ...selectedItem, minimumDeposit: e.target.value })}
                  placeholder="Minimum Deposit Amount"
                  className="manage-modal-form-control"
                />
              </Form.Group>

              <Form.Group controlId="isOnlyMinimum">
                <Form.Label className="manage-modal-form-label">Is Only Minimum Deposit:</Form.Label>
                <Form.Check
                  type="checkbox"
                  checked={selectedItem?.isOnlyMinimum || false}
                  onChange={(e) => setSelectedItem({ ...selectedItem, isOnlyMinimum: e.target.checked })}
                  className="manage-modal-form-check-input"
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

export default DepositeSettings;
