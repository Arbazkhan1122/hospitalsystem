import React, { useState } from 'react';
import './InvoiceHeaders.css';
import './AddInvoiceHeader.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import InvoiceHeaderForm from '../components/AddInvoiceHeader';

const InvoiceHeaders = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeHeader, setActiveHeader] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleHeaderClick = (header) => {
    setActiveHeader(header === activeHeader ? null : header);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="invoice-headers">
      <button className="add-invoice-btn" onClick={openModal}>
        Add New Invoice Header
      </button>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search"
          className="search-input"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button className="search-btn">🔍</button>
      </div>
      <div className="table-header">
        <span>Showing 0 / 0 results</span>
        <button className="print-btn">Print</button>
      </div>
      <table className="invoice-table">
        <thead>
          <tr>
            <th>
              Hospital Name
              <FontAwesomeIcon
                icon={faBars}
                className="header-icon"
                onClick={() => handleHeaderClick('Hospital Name')}
              />
              {activeHeader === 'Hospital Name' && (
                <div className="filter-section">
                  <input
                    type="text"
                    placeholder="Contains"
                    value={searchTerm}
                    onChange={handleSearchChange}
                  />
                </div>
              )}
            </th>
            {/* Repeat the same structure for other headers */}
            {/* ... */}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="10" className="no-data">No Rows To Show</td>
          </tr>
        </tbody>
      </table>
      <div className="pagination">
        <span>0 to 0 of 0</span>
        <button className="page-btn">First</button>
        <button className="page-btn">Previous</button>
        <span>Page 0 of 0</span>
        <button className="page-btn">Next</button>
        <button className="page-btn">Last</button>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-modal-btn" onClick={closeModal}>
              &times;
            </button>
            <InvoiceHeaderForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default InvoiceHeaders;
