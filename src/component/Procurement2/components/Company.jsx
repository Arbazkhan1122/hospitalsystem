import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import AddCompany from '../components/AddCompany';
import UpdateSomeCompany from '../components/UpdateSomeCompany';
import './Company.css';

Modal.setAppElement('#root'); 

const CompanyTable = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [companies, setCompanies] = useState([]); 
  const [searchTerm, setSearchTerm] = useState(''); 


  useEffect(() => {
    fetch('http://localhost:8080/api/company/allCompany')
      .then((response) => response.json())
      .then((data) => setCompanies(data))
      .catch((error) => console.error('Error fetching companies:', error));
  }, []);

  const openAddModal = () => {
    setIsAddModalOpen(true);
  };

  const closeAddModal = () => {
    setIsAddModalOpen(false);
  };

  const openEditModal = (company) => {
    setSelectedCompany(company);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedCompany(null); // Clear selected company after closing the modal
  };

  // Filter companies based on search input
  // const filteredCompanies = companies.filter((company) =>
  //   company.name.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  return (
    <div>
      {/* Add Company Button */}
      <button className="add-company-button" onClick={openAddModal}>
        Add Company
      </button>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search"
        className="search-bar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Company Table */}
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Code</th>
            <th>Address</th>
            <th>Contact</th>
            <th>Email</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {companies.length > 0 ? (
            companies.map((company) => (
              <tr key={company.id}>
                <td>{company.companyName}</td>
                <td>{company.code}</td>
                <td>{company.address}</td>
                <td>{company.contactNo}</td>
                <td>{company.email}</td>
                <td>{company.description}</td>
                <td>
                  <button className="action-button" onClick={() => openEditModal(company)}>
                    Edit
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No companies found.</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="pagination">
        <button className="pagination-button">First</button>
        <button className="pagination-button">Previous</button>
        <span>Page 1 of 1</span>
        <button className="pagination-button">Next</button>
        <button className="pagination-button">Last</button>
      </div>

      {/* Modal for Adding Company */}
      <Modal
        isOpen={isAddModalOpen}
        onRequestClose={closeAddModal}
        contentLabel="Add Company Modal"
        className="Modal"
        overlayClassName="Overlay"
      >
        <AddCompany closeModal={closeAddModal} />
        <button className="close-modal-button" onClick={closeAddModal}>
          Close
        </button>
      </Modal>

      {/* Modal for Editing Company */}
      <Modal
        isOpen={isEditModalOpen}
        onRequestClose={closeEditModal}
        contentLabel="Edit Company Modal"
        className="Modal"
        overlayClassName="Overlay"
      >
        <UpdateSomeCompany company={selectedCompany} closeModal={closeEditModal} />
        <button className="close-modal-button" onClick={closeEditModal}>
          Close
        </button>
      </Modal>
    </div>
  );
};

export default CompanyTable;
