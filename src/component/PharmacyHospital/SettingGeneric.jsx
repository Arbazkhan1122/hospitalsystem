/* Mohini_SettingGeneric_WholePage_14/sep/2024 */
import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import './SettingSupplier.css'; 

const genericApiUrl = 'http://localhost:1415/api/generic-names';
const categoryApiUrl = 'http://localhost:1415/api/categories';

const SettingGeneric = () => {
  const [suppliers, setSuppliers] = useState([]);
  const [categories, setCategories] = useState([]); // State to store fetched categories
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedGeneric, setSelectedGeneric] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    // Fetch initial data
    fetchSuppliers();
    fetchCategories(); // Fetch categories on component mount
  }, []);

  const fetchSuppliers = async () => {
    try {
      const response = await axios.get(genericApiUrl);
      setSuppliers(response.data);
    } catch (error) {
      console.error('Error fetching suppliers', error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get(categoryApiUrl);
      setCategories(response.data); // Store fetched categories in state
    } catch (error) {
      console.error('Error fetching categories', error);
    }
  };

  const filteredUsers = suppliers.filter(item =>
    item.genericName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleShowModal = (generic = null) => {
    if (generic) {
      setSelectedGeneric(generic);
      setIsEditMode(true);
    } else {
      setSelectedGeneric({
        genericName: '',
        category: '',
        generalCategoryNumber: '',
        therapeuticCategoryNumber: '',
        counselingNumber: '',
        isActive: true
      });
      setIsEditMode(false);
    }
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedGeneric(null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (isEditMode) {
        // Update existing item
        await axios.put(`${genericApiUrl}/${selectedGeneric.genericName}`, selectedGeneric);
      } else {
        // Add new item
        await axios.post(genericApiUrl, selectedGeneric);
      }
      fetchSuppliers(); // Refresh the list after adding or updating
      handleCloseModal();
    } catch (error) {
      console.error('Error submitting form', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSelectedGeneric({
      ...selectedGeneric,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  return (
    <div className="setting-supplier-container">
      <div className="setting-supplier-header">
        <button className="setting-supplier-add-user-button" onClick={() => handleShowModal()}>
          + Add Generic
        </button>
      </div>
      <input
        type="text"
        placeholder="Search"
        className="manage-users-search-input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className='setting-supplier-span'>
        <span>Showing {filteredUsers.length} / {suppliers.length} results</span>
      </div>
      <div className='setting-supplier-tab'>
        <table className="setting-suppliers-users-table">
          <thead>
            <tr>
              <th>Generic Name</th>
              <th>Generic Category</th>
              <th>Therapeutic Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((item, index) => (
              <tr key={index}>
                <td>{item.genericName}</td>
                <td>{item.category}</td>
                <td>{item.generalCategoryNumber}</td>
                <td className="setting-supplier-action-buttons">
                  <button className="setting-supplier-action-button" onClick={() => handleShowModal(item)}>Edit</button>
                  <button className="setting-supplier-action-button">Deactivate</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* <div className="setting-supplier-pagination">
          <div className="setting-supplier-pagination-controls">
            <button>First</button>
            <button>Previous</button>
            <button>1</button>
            <button>Next</button>
            <button>Last</button>
          </div>
        </div> */}
      </div>

      <Modal show={showModal} onHide={handleCloseModal} className="supplier-setting-supplier-update-modal">
        <Modal.Header closeButton>
          <Modal.Title>{isEditMode ? `Edit Generic Details` : 'Add New Generic'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="genericName" className="supplier-setting-form-group">
              <Form.Label className="supplier-setting-form-label">
                <span className="supplier-setting-text-danger">*</span> Generic Name:
              </Form.Label>
              <Form.Control
                type="text"
                name="genericName"
                value={selectedGeneric?.genericName || ''}
                onChange={handleInputChange}
                placeholder="Enter Generic Name"
                required
                className="supplier-setting-form-control"
              />
            </Form.Group>

            <Form.Group controlId="category" className="supplier-setting-form-group">
              <Form.Label className="supplier-setting-form-label">
                <span className="supplier-setting-text-danger">*</span> Category:
              </Form.Label>
              <Form.Control
                as="select"
                name="category"
                value={selectedGeneric?.category || ''}
                onChange={handleInputChange}
                required
                className="supplier-setting-form-control"
              >
                <option value="">Select Category</option>
                {categories.map((category) => (
                  <option key={category.name} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="generalCategoryNumber" className="supplier-setting-form-group">
              <Form.Label className="supplier-setting-form-label">
                General Category Number:
              </Form.Label>
              <Form.Control
                type="text"
                name="generalCategoryNumber"
                value={selectedGeneric?.generalCategoryNumber || ''}
                onChange={handleInputChange}
                placeholder="Enter General Category Number"
                className="supplier-setting-form-control"
              />
            </Form.Group>

            <Form.Group controlId="therapeuticCategoryNumber" className="supplier-setting-form-group">
              <Form.Label className="supplier-setting-form-label">
                Therapeutic Category Number:
              </Form.Label>
              <Form.Control
                type="text"
                name="therapeuticCategoryNumber"
                value={selectedGeneric?.therapeuticCategoryNumber || ''}
                onChange={handleInputChange}
                placeholder="Enter Therapeutic Category Number"
                className="supplier-setting-form-control"
              />
            </Form.Group>

            <Form.Group controlId="counselingNumber" className="supplier-setting-form-group">
              <Form.Label className="supplier-setting-form-label">
                Counseling Number:
              </Form.Label>
              <Form.Control
                type="text"
                name="counselingNumber"
                value={selectedGeneric?.counselingNumber || ''}
                onChange={handleInputChange}
                placeholder="Enter Counseling Number"
                className="supplier-setting-form-control"
              />
            </Form.Group>

            <Form.Group controlId="isActive" className="supplier-setting-form-group">
              <Form.Check
                type="checkbox"
                name="isActive"
                label="IsActive"
                checked={selectedGeneric?.isActive || false}
                onChange={handleInputChange}
                className="supplier-setting-form-control"
              />
            </Form.Group>

            <div className="supplier-setting-text-right">
              <Button variant="primary" type="submit">{isEditMode ? 'Update' : 'Add'}</Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default SettingGeneric;
/* Mohini_SettingGeneric_WholePage_14/sep/2024 */
