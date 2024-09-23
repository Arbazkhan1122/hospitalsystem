import React, { useState } from 'react';
import ReactModal from 'react-modal';
import './Terms.css';
import AddTermsAndConditions from '../components/AddTerms';

// Set the app element for accessibility
ReactModal.setAppElement('#root'); 

const Terms = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

  const handleOpenModal = () => {
    setIsModalOpen(true); // Open the modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <div className="erms-account-head-container">
      <header className="erms-account-head-header">
        <button className="erms-account-head-add-button" onClick={handleOpenModal}>
          Add Terms And Conditions
        </button>
        <div className="erms-account-head-search-bar">
          <input type="text" placeholder="Search" />
          <button className="erms-account-head-search-button">🔍</button>
        </div>
        <div className="erms-account-head-results-info">
          Showing 1 / 1 results
          <button className="erms-account-head-print-button">Print</button>
        </div>
      </header>
      
      <table className="erms-account-head-table">
        <thead>
          <tr>
            <th>Account Head Name</th>
            <th>Description</th>
            <th>Is Active</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="4">No Rows To Show</td>
          </tr>
        </tbody>
      </table>
      
      <div className="erms-account-head-pagination">
        <span>1 to 1 of 1</span>
        <button disabled>First</button>
        <button disabled>Previous</button>
        <span>Page 1 of 1</span>
        <button disabled>Next</button>
        <button disabled>Last</button>
      </div>

      {/* Modal Component */}
      <ReactModal 
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Add Terms And Conditions"
        className="cons-modal"
        overlayClassName="cons-modal-overlay"
      >
        <button onClick={handleCloseModal} className="cons-modal-close-button">✖</button>
        <AddTermsAndConditions />
      </ReactModal>
    </div>
  );
};

export default Terms;
