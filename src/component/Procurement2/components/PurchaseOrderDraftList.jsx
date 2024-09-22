import React, { useState } from 'react';
import PurchaseOrderStartNewDraft from '../components/PurchaseOrderStartNewDraft.jsx'; // Ensure correct component name
import './PurchaseOrderDraftList.jsx';

const PurchaseOrderDraftList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showDiscarded, setShowDiscarded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="purchase-order-draft-list">
      <h1>Purchase Order Draft List</h1>

      <div className="actions-bar">
        <button className="start-new-draft" onClick={openModal}>+ Start New Draft</button>
        <label className="discarded-draft-checkbox">
          <input
            type="checkbox"
            checked={showDiscarded}
            onChange={(e) => setShowDiscarded(e.target.checked)}
          />
          Discarded Draft
        </label>
      </div>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="search-button">🔍</button>
      </div>

      <div className="results-info">
        Showing 0 / 0 results
        <button className="export-button">Export</button>
        <button className="print-button">Print</button>
      </div>

      <table className="draft-table">
        <thead>
          <tr>
            <th>Vendor Name</th>
            <th>Vendor...</th>
            <th>Vendor Con...</th>
            <th>Draft S...</th>
            <th>Draft C...</th>
            <th>Last U...</th>
            <th>Last U...</th>
            <th>Total A...</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="10" className="no-rows">No Rows To Show</td>
          </tr>
        </tbody>
      </table>

      <div className="pagination">
        <span>0 to 0 of 0</span>
        <button className="first-page">First</button>
        <button className="previous-page">Previous</button>
        <span>Page 0 of 0</span>
        <button className="next-page">Next</button>
        <button className="last-page">Last</button>
      </div>

      {/* Custom Modal for Start New Draft */}
      {isModalOpen && (
        <div className="custom-modal-overlay">
          <div className="custom-modal">
            <PurchaseOrderStartNewDraft /> {/* Use the correct component name */}
            <button className="close-modal-button" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PurchaseOrderDraftList;
