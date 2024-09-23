// Dhanashree_AccountHead_19/09
import React, { useState, useEffect, useRef } from 'react';
import Modal from 'react-modal'; // Import react-modal
import AddHeadCount from '../components/AddHeadCount'; // Import AddHeadCount component
import axios from 'axios'; // Import axios for HTTP requests
import { useReactToPrint } from 'react-to-print'; // Import for print functionality
import './AccountHead.css';
Modal.setAppElement('#root'); // Set the app element for accessibility


const AccountHead = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [accountHeads, setAccountHeads] = useState([]);
  const [selectedAccountHead, setSelectedAccountHead] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const tableRef = useRef(); // Ref for the table to be printed
  

  useEffect(() => {
    console.log("hello");
      
    // Fetch account heads from the API
    const fetchAccountHeads = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/account-heads/findAll');
        setAccountHeads(response.data);
        console.log(response.data);


      } catch (error) {
        console.error('Error fetching account heads:', error);
      }
    };


    fetchAccountHeads();
  }, []); // Empty dependency array means this effect runs once on mount

  const handlePrint = useReactToPrint({
    content: () => tableRef.current, // Reference to the content to be printed
    documentTitle: 'Account Heads', // Title for the print document
  });

  const openAddModal = () => setShowAddModal(true);
  const closeAddModal = () => setShowAddModal(false);

  const openEditModal = (accountHead) => {
    setSelectedAccountHead(accountHead);
    setShowEditModal(true);
  };

  const closeEditModal = () => {
    setSelectedAccountHead(null);
    setShowEditModal(false);
  };

  return (
    <div className="account-head-container">
      <div className="account-head-header">
        <button className="account-head-add-button" onClick={openAddModal}>
          Add Account Head
        </button>
        <div className="account-head-search-bar">
          <input type="text" placeholder="Search" />
          <button className="account-head-search-button">🔍</button>
        </div>
        <div className="account-head-results-info">
          Showing {accountHeads.length} / {accountHeads.length} results
          <button className="account-head-print-button" onClick={handlePrint}>
            Print
          </button>
        </div>
      </div>
      
      {/* Table of account heads */}
      <div ref={tableRef}>
        <table className="account-head-table">
          <thead>
            <tr>
              <th>Account Head Name</th>
              <th>Description</th>
              <th>Is Active</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {accountHeads.length > 0 ? (
              accountHeads.map((accountHead, index) => (
                <tr key={index}>
                  <td>{accountHead.accountHeadName}</td>
                  <td>{accountHead.description}</td>
                  <td>{accountHead.isActive ? 'true' : 'false'}</td>
                  <td>
                    <button
                      className="account-head-edit-button"
                      onClick={() => openEditModal(accountHead)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No Rows To Show</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      
      <div className="account-head-pagination">
        <span>1 to {accountHeads.length} of {accountHeads.length}</span>
        <button disabled>First</button>
        <button disabled>Previous</button>
        <span>Page 1 of 1</span>
        <button disabled>Next</button>
        <button disabled>Last</button>
      </div>

      {/* Modal for Adding Account Head */}
      <Modal
        isOpen={showAddModal}
        onRequestClose={closeAddModal}
        contentLabel="Add Account Head Modal"
        className="Modal"
        overlayClassName="Overlay"
      >
        <AddHeadCount />
        <button onClick={closeAddModal} className="close-button">Close</button>
      </Modal>

      {/* Modal for Editing Account Head */}
      {/* <Modal
        isOpen={showEditModal}
        onRequestClose={closeEditModal}
        contentLabel="Edit Account Head Modal"
        className="Modal"
        overlayClassName="Overlay"
      > */}
        {/* Implement UpdateAccountHead component for editing */}
        {/* <UpdateAccountHead accountHead={selectedAccountHead} />
        <button onClick={closeEditModal} className="close-button">Close</button>
      </Modal> */}
    </div>
  );
};

export default AccountHead;
