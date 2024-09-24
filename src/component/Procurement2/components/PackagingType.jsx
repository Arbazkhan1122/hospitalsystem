import React, { useEffect, useRef, useState } from 'react';
import Modal from 'react-modal';
import { useReactToPrint } from 'react-to-print';
import AddPackagingType from './AddPackagingType';
import UpdatePackagingType from '../components/UpdatePackagingType';
import './PackagingType.css';

Modal.setAppElement('#root');

const PackagingType = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedPackagingType, setSelectedPackagingType] = useState(null);
  const [packagingTypes, setPackagingTypes] = useState([]);

  const tableRef = useRef();  

  useEffect(() => {
    const fetchPackagingTypes = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/packageType/getAllPackageType');
        const data = await response.json();
        setPackagingTypes(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching packaging types:', error);
      }
    };

    fetchPackagingTypes();
  }, []);

  const openAddModal = () => setShowAddModal(true);
  const closeAddModal = () => setShowAddModal(false);

  const openEditModal = (packagingType) => {
    setSelectedPackagingType(packagingType);
    setShowEditModal(true);
  };

  const closeEditModal = () => setShowEditModal(false);

  // Function to handle printing
  const handlePrint = useReactToPrint({
    content: () => tableRef.current, // Reference to the content to be printed
    documentTitle: 'Packaging Types', // Title for the print document
  });

  const handleAddPackagingType = (newPackagingType) => {
    setPackagingTypes([...packagingTypes, newPackagingType]);
    closeAddModal();
  };

  const handleUpdatePackagingType = (updatedPackagingType) => {
    setPackagingTypes(packagingTypes.map(type =>
      type.id === updatedPackagingType.id ? updatedPackagingType : type
    ));
    closeEditModal();
  };

  return (
    <div className="packaging-type-container">
      <div className="header">
        <div className="header-actions">
          <button className="add-button" onClick={openAddModal}>Add Packaging Type</button>
          <div className="search-bar">
            <input type="text" placeholder="Search" />
            <button className="search-button" aria-label="Search">🔍</button>
          </div>
        </div>
      </div>
      <div className="results-info">
        <span>Showing {packagingTypes.length} / {packagingTypes.length} results</span>
        <button className="print-button" onClick={handlePrint} aria-label="Print">Print</button>
      </div>

      {/* Table of packaging types */}
      <div ref={tableRef}>
        <table className="packaging-type-table">
          <thead>
            <tr>
              <th>Packaging Type Name</th>
              <th>Description</th>
              <th>Is Active</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {packagingTypes.map((type) => (
              <tr key={type.id}>
                <td>{type.packagingTypeName}</td>
                <td>{type.description}</td>
                <td>{type.isActive ? 'Yes' : 'No'}</td>
                <td>
                  <button
                    className="edit-button"
                    onClick={() => openEditModal(type)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pagination">
        <span>1 to {packagingTypes.length} of {packagingTypes.length}</span>
        <button className="page-button">First</button>
        <button className="page-button">Previous</button>
        <button className="page-button active">Page 1 of 1</button>
        <button className="page-button">Next</button>
        <button className="page-button">Last</button>
      </div>

      {/* Modal for Adding Packaging Type */}
      <Modal
        isOpen={showAddModal}
        onRequestClose={closeAddModal}
        contentLabel="Add Packaging Type Modal"
        className="Modal"
        overlayClassName="Overlay"
      >
        <AddPackagingType onAdd={handleAddPackagingType} onClose={closeAddModal} />
        <button onClick={closeAddModal} className="close-button">Close</button>
      </Modal>

      {/* Modal for Editing Packaging Type */}
      <Modal
        isOpen={showEditModal}
        onRequestClose={closeEditModal}
        contentLabel="Edit Packaging Type Modal"
        className="Modal"
        overlayClassName="Overlay"
      >
        <UpdatePackagingType packagingType={selectedPackagingType} onUpdate={handleUpdatePackagingType} />
        <button onClick={closeEditModal} className="close-button">Close</button>
      </Modal>
    </div>
  );
};

export default PackagingType;
