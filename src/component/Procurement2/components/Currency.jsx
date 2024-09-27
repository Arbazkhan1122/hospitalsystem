import React, { useRef, useState, useEffect } from 'react';
import Modal from 'react-modal';
import axios from 'axios'; // Import axios for API requests
import AddCurrency from './AddCurrency';
import UpdateCurrency from './UpdateCurrency';
import ReactToPrint from 'react-to-print'; // Import ReactToPrint
import './Currency.css';

const CurrencyTable = () => {
  const [currencies, setCurrencies] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState(null);

  const tableRef = useRef(); // Reference to the table for printing

  // Fetch currencies from the API on component mount
  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/currency-codes/getAll');
        setCurrencies(response.data); // Assuming response.data is the list of currencies
        console.log('====================================');
        console.log(response.data);
        console.log('====================================');
      } catch (error) {
        console.error('Error fetching currencies:', error);
      }
    };

    fetchCurrencies();
  }, []);

  const openAddModal = () => {
    setIsAddModalOpen(true);
  };

  const closeAddModal = () => {
    setIsAddModalOpen(false);
  };

  const openEditModal = (currency) => {
    setSelectedCurrency(currency);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedCurrency(null);
  };

  return (
    <div className="container">
      <button className="add-currency" onClick={openAddModal}>Add Currency</button>

      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <button className="search-button" aria-label="Search">🔍</button>
      </div>

      <div className="results-info">
        <span>Showing {currencies.length} / {currencies.length} results</span>
        <ReactToPrint
          trigger={() => <button className="print-button" aria-label="Print">Print</button>}
          content={() => tableRef.current}
        />
      </div>

      <table ref={tableRef}> {/* Attach the ref to the table */}
        <thead>
          <tr>
            <th>Currency Code</th>
            <th>Description</th>
            <th>Is Active</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currencies.map((currency, index) => (
            <tr key={index}>
              <td>{currency.currencyCode}</td>
              <td>{currency.description}</td>
              <td>{currency.isActive ? 'Yes' : 'No'}</td>
              <td>
                <button
                  className="edit-button"
                  aria-label={`Edit ${currency.code}`}
                  onClick={() => openEditModal(currency)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <span>1 to {currencies.length} of {currencies.length}</span>
        <button disabled>First</button>
        <button disabled>Previous</button>
        <span>Page 1 of 1</span>
        <button disabled>Next</button>
        <button disabled>Last</button>
      </div>

      {/* Modal for Adding Currency */}
      <Modal
        isOpen={isAddModalOpen}
        onRequestClose={closeAddModal}
        contentLabel="Add Currency Modal"
        className="Modal-over"
        overlayClassName="Overlay"
      >
        <AddCurrency />
        <button onClick={closeAddModal}>Close</button>
      </Modal>

      {/* Modal for Updating Currency */}
      {selectedCurrency && (
        <Modal
          isOpen={isEditModalOpen}
          onRequestClose={closeEditModal}
          contentLabel="Edit Currency Modal"
          className="Modal"
          overlayClassName="Overlay"
        >
          <UpdateCurrency currency={selectedCurrency} />
          <button onClick={closeEditModal}>Close</button>
        </Modal>
      )}
    </div>
  );
};

export default CurrencyTable;

