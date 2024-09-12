import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import './SettingSupplier.css'; // Make sure this contains relevant styles

const SettingItemType = () => {
  const [itemTypes, setItemTypes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [formMode, setFormMode] = useState('Add');
  const [selectedItem, setSelectedItem] = useState(null);

  // Fetch item types from API
  useEffect(() => {
    axios.get('http://192.168.1.37:1415/api/itemtypes')
      .then(response => {
        console.log('Data fetched successfully:', response.data); // Debugging line
        setItemTypes(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the item types!', error);
      });
  }, []);

  // Filtered item types based on search term
  const filteredItemTypes = itemTypes.filter(item =>
    item.type?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleShowModal = (mode, item = null) => {
    setFormMode(mode);
    setSelectedItem(item);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedItem(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const itemTypeData = {
      type: event.target.itemType.value,
      category: event.target.selectCategory.value,
      description: event.target.description.value,
      isActive: event.target.isActive.checked
    };

    if (formMode === 'Add') {
      axios.post('http://192.168.1.37:1415/api/itemtypes', itemTypeData)
        .then(response => {
          setItemTypes([...itemTypes, response.data]);
          handleCloseModal();
        })
        .catch(error => {
          console.error('There was an error adding the item type!', error);
        });
    } else if (formMode === 'Edit') {
      axios.put(`http://192.168.1.37:1415/api/itemtypes/${selectedItem.id}`, itemTypeData)
        .then(response => {
          const updatedItemTypes = itemTypes.map(item =>
            item.id === selectedItem.id ? response.data : item
          );
          setItemTypes(updatedItemTypes);
          handleCloseModal();
        })
        .catch(error => {
          console.error('There was an error updating the item type!', error);
        });
    }
  };

  return (
    <div className="setting-supplier-container">
      <div className="setting-supplier-header">
        <button className="setting-supplier-add-user-button" onClick={() => handleShowModal('Add')}>+ Add Item Type</button>
      </div>
      <input
        type="text"
        placeholder="Search"
        className="manage-users-search-input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className='setting-supplier-span'>
        <span>Showing {filteredItemTypes.length} / {itemTypes.length} results</span>
      </div>
      <div className='setting-supplier-tab'>
        <table className="setting-suppliers-users-table">
          <thead>
            <tr>
              <th>Item Type</th>
              <th>Category</th>
              <th>Description</th>
              <th>Is Active</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredItemTypes.map((item, index) => (
              <tr key={index}>
                <td>{item.type}</td>
                <td>{item.category}</td>
                <td>{item.description || 'N/A'}</td>
                <td>{item.isActive ? 'true' : 'false'}</td>
                <td className="setting-supplier-action-buttons">
                  <button className="setting-supplier-action-button" onClick={() => handleShowModal('Edit', item)}>Edit</button>
                  <button className="setting-supplier-action-button">Deactivate</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="setting-supplier-pagination">
          <div className="setting-supplier-pagination-controls">
            <button>First</button>
            <button>Previous</button>
            <button>1</button>
            <button>Next</button>
            <button>Last</button>
          </div>
        </div>
      </div>

      <Modal show={showModal} onHide={handleCloseModal} className="supplier-setting-supplier-update-modal">
        <Modal.Header closeButton>
          <Modal.Title>{formMode === 'Add' ? 'Add Item Type' : 'Update Item Type'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <div className="supplier-setting-form-row">
              <Form.Group controlId="itemType" className="supplier-setting-form-group col-md-6">
                <Form.Label>Type of Item<span className="supplier-setting-text-danger">*</span>:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Item Type"
                  required
                  defaultValue={formMode === 'Edit' ? selectedItem?.type : ''}
                />
              </Form.Group>
              <Form.Group controlId="selectCategory" className="supplier-setting-form-group col-md-6">
                <Form.Label>Select Category<span className="supplier-setting-text-danger">*</span>:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Category"
                  required
                  defaultValue={formMode === 'Edit' ? selectedItem?.category : ''}
                />
              </Form.Group>
            </div>
            <Form.Group controlId="description" className="supplier-setting-form-group">
              <Form.Label>Description:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Description"
                defaultValue={formMode === 'Edit' ? selectedItem?.description : ''}
              />
            </Form.Group>
            <Form.Group controlId="isActive" className="supplier-setting-form-group">
              <Form.Check
                type="checkbox"
                label="Is Active"
                defaultChecked={formMode === 'Edit' ? selectedItem?.isActive : false}
              />
            </Form.Group>
            <div className="supplier-setting-text-right">
              <Button variant="primary" type="submit">
                {formMode === 'Add' ? 'Add' : 'Update'}
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default SettingItemType;
