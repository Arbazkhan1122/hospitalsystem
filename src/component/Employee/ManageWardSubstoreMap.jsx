import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './ManageWardSubstoreMap.css'; // Custom styles for this component

const ManageWardSubstoreMap = () => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedWard, setSelectedWard] = useState(null);

  const data = [
    { wardName: 'Male Ward', store: 'Operations Store, male ward SubStore' },
    { wardName: 'Female Ward', store: 'ICU Sub store, Female Ward Substore' },
    { wardName: 'Private Ward', store: 'Private Sub Store' },
    { wardName: 'ICU', store: 'ICU Sub store' },
    { wardName: 'MATERNITY WARD', store: 'Maternity Substore' },
  ];

  const handleEditClick = (ward) => {
    setSelectedWard(ward);
    setShowEditModal(true);
  };

  const handleCloseModal = () => {
    setShowEditModal(false);
    setSelectedWard(null);
  };

  return (
    <div className="manage-ward-substore-page">
      <div className="manage-ward--substore-table-container">
        <div className="manage-ward-substore-manage-section">
          <h1 className="ward-manage-add-substore-btn">+ Add Ward Substore Map</h1>
        </div>

        <input type="text" placeholder="Search" className="ward-manage-substore-search-input" />
        <div className="ward-manage-substore-results-info">Showing 5 / 5 results</div>

        <table className="manage-ward-substore-table">
          <thead>
            <tr>
              <th>WardName</th>
              <th>Store</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.wardName}</td>
                <td>{item.store}</td>
                <td>
                  <Button className="manage-ward-store-edit-btn" onClick={() => handleEditClick(item)}>
                    Edit
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="manage-ward-store-pagination">
          <Button className="manage-ward-store-pagination-btn">First</Button>
          <Button className="manage-ward-store-pagination-btn">Previous</Button>
          <span>Page 1 of 4</span>
          <Button className="manage-ward-store-pagination-btn">Next</Button>
          <Button className="manage-ward-store-pagination-btn">Last</Button>
        </div>
      </div>

      {showEditModal && (
        <Modal
          show={showEditModal}
          onHide={handleCloseModal} // Ensure modal closes when clicking outside or pressing the escape key
          size="lg"
          centered
          dialogClassName="manage-ward-modal"
        >
          <Modal.Header closeButton className="manage-ward-modal-header">
            {/* Optionally, you can include a title here if needed */}
          </Modal.Header>
          <Modal.Body className="manage-ward-modal-body">
            <WardSubstoreMap selectedWard={selectedWard} onClose={handleCloseModal} />
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
};

const WardSubstoreMap = ({ selectedWard, onClose }) => {
  const [substores, setSubstores] = useState([
    { id: 1, name: 'male ward SubStore', isDefault: true, isActive: true },
    { id: 2, name: 'Operations Store', isDefault: false, isActive: true },
  ]);

  const handleChange = (index, key) => {
    const updatedSubstores = [...substores];
    updatedSubstores[index][key] = !updatedSubstores[index][key];
    setSubstores(updatedSubstores);
  };

  return (
    <div className="manage-ward-modal-container">
      <div className="manage-ward-modal-header">
        <h2>Edit Ward Substore Map</h2>
        <h3>{selectedWard ? selectedWard.wardName : 'Ward'}</h3>
        <button className="manage-ward-close-button" onClick={onClose}>X</button>
      </div>
      <div className="manage-ward-modal-body">
        <table className="manage-ward-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>SubstoreName</th>
              <th>IsDefault</th>
              <th>IsActive</th>
            </tr>
          </thead>
          <tbody>
            {substores.map((store, index) => (
              <tr key={store.id}>
                <td>{index + 1}</td>
                <td>{store.name}</td>
                <td>
                  <input
                    type="checkbox"
                    checked={store.isDefault}
                    onChange={() => handleChange(index, 'isDefault')}
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    checked={store.isActive}
                    onChange={() => handleChange(index, 'isActive')}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="manage-ward-modal-footer">
        <button className="manage-ward-update-button" onClick={onClose}>Update</button>
      </div>
    </div>
  );
};

export default ManageWardSubstoreMap;
