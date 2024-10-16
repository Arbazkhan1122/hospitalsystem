import React, { useState, useEffect, useRef } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import AddUnitOfMeasurement from '../components/AddUnitOfMeasurement'; // Ensure these imports are correct
import UpdateUnitOfMeasurement from '../components/UpdateUnitOfMeasurement';
import { useReactToPrint } from 'react-to-print';
import './UnitOfMeasurement.css';

Modal.setAppElement('#root');

const UnitOfMeasurementComponent = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [unitOfMeasurements, setUnitOfMeasurements] = useState([]);
  const [loading, setLoading] = useState(true);

  const tableRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/unitofmeasurement/fetchAll');
        setUnitOfMeasurements(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const openAddModal = () => setShowAddModal(true);
  const closeAddModal = () => setShowAddModal(false);
  const openEditModal = (unit) => {
    setSelectedUnit(unit);
    setShowEditModal(true);
  };
  const closeEditModal = () => setShowEditModal(false);

  const handlePrint = useReactToPrint({
    content: () => tableRef.current,
    documentTitle: 'Unit of Measurement',
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="unit-of-measurement-container">
      <div className="uom-header">
        <button className="uom-add-button" onClick={openAddModal}>
          Add Unit of Measurement
        </button>
        <div className="uom-search-bar">
          <input type="text" placeholder="Search" />
          <button className="uom-search-button">🔍</button>
        </div>
        <div className="uom-results-info">
          Showing {unitOfMeasurements.length} / {unitOfMeasurements.length} results
          <button className="uom-print-button" onClick={handlePrint}>
            Print
          </button>
        </div>
      </div>

      <div ref={tableRef}>
      <table className="uom-table">
  <thead>
    <tr>
      <th>Unit of Measurement Name</th>
      <th>Description</th>
      <th>Is Active</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {unitOfMeasurements.map((unit, index) => (
      <tr key={index}>
        <td>{unit.unitOfMeasurementName}</td>
        <td>{unit.description}</td>
        <td>{unit.isActive ? 'true' : 'false'}</td>
        <td>
          <button
            className="uom-edit-button"
            onClick={() => openEditModal(unit)}
          >
            Edit
          </button>
        </td>
      </tr>
    ))}
  </tbody>
</table>
      </div>

      <div className="uom-pagination">
        <span>1 to {unitOfMeasurements.length} of {unitOfMeasurements.length}</span>
        <button disabled>First</button>
        <button disabled>Previous</button>
        <span>Page 1 of 1</span>
        <button disabled>Next</button>
        <button disabled>Last</button>
      </div>

      {/* Modal for Adding Unit of Measurement */}
      <Modal
        isOpen={showAddModal}
        onRequestClose={closeAddModal}
        contentLabel="Add Unit of Measurement Modal"
        className="Modal"
        overlayClassName="Overlay"
      >
        <AddUnitOfMeasurement closeModal={closeAddModal} /> {/* Ensure closeModal prop is passed */}
        <button onClick={closeAddModal} className="close-button">Close</button>
      </Modal>

      {/* Modal for Editing Unit of Measurement */}
      <Modal
        isOpen={showEditModal}
        onRequestClose={closeEditModal}
        contentLabel="Edit Unit of Measurement Modal"
        className="Modal"
        overlayClassName="Overlay"
      >
        {selectedUnit && <UpdateUnitOfMeasurement unit={selectedUnit} closeModal={closeEditModal} />} {/* Pass necessary props */}
        <button onClick={closeEditModal} className="close-button">Close</button>
      </Modal>
    </div>
  );
};

export default UnitOfMeasurementComponent;
