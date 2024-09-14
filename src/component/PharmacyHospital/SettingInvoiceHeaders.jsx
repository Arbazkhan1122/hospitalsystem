/* Mohini_SettingInvoiceHeaders_WholePage_14/sep/2024 */
import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import './SettingSupplier.css';

const apiEndpoint = 'http://192.168.1.39:1415/api/v1/invoice-headers';

const SettingInvoiceHeaders = () => {
  const [invoiceHeaders, setInvoiceHeaders] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedHeader, setSelectedHeader] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    fetchInvoiceHeaders();
  }, []);

  const fetchInvoiceHeaders = async () => {
    try {
      const response = await axios.get(apiEndpoint);
      setInvoiceHeaders(response.data);
    } catch (error) {
      console.error('Error fetching invoice headers:', error);
    }
  };

  const filteredHeaders = invoiceHeaders.filter(header =>
    header.hospitalName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    header.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
    header.telephone.toLowerCase().includes(searchTerm.toLowerCase()) ||
    header.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleShowModal = (header = null) => {
    if (header) {
      setSelectedHeader(header);
      setIsEditMode(true);
    } else {
      setSelectedHeader({
        hospitalName: '',
        address: '',
        telephone: '',
        email: '',
        kraPin: '',
        dda: '',
        headerDescription: '',
        logoImagePath: '',
        isActive: true
      });
      setIsEditMode(false);
    }
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedHeader(null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('invoiceHeaderDTO.hospitalName', event.target.hospitalName.value);
    formData.append('invoiceHeaderDTO.address', event.target.address.value);
    formData.append('invoiceHeaderDTO.telephone', event.target.telephone.value);
    formData.append('invoiceHeaderDTO.email', event.target.email.value);
    formData.append('invoiceHeaderDTO.kraPin', event.target.kraPin.value);
    formData.append('invoiceHeaderDTO.dda', event.target.dda.value);
    formData.append('invoiceHeaderDTO.headerDescription', event.target.headerDescription.value);
    formData.append('invoiceHeaderDTO.isActive', event.target.isActive.checked);

    if (event.target.logoImage.files[0]) {
        formData.append('logoImage', event.target.logoImage.files[0]);
    }

    try {
        if (isEditMode) {
            await axios.put(`${apiEndpoint}/${selectedUser.id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
        } else {
            await axios.post(apiEndpoint, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
        }
        fetchSuppliers();
        handleCloseModal();
    } catch (error) {
        console.error('Error saving invoice header:', error);
    }
};


  return (
    <div className="setting-supplier-container">
      <div className="setting-supplier-header">
        <Button className="setting-supplier-add-user-button" onClick={() => handleShowModal()}>
          + Add Invoice
        </Button>
      </div>
      <input
        type="text"
        placeholder="Search"
        className="manage-users-search-input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className='setting-supplier-span'>
        <span>Showing {filteredHeaders.length} / {invoiceHeaders.length} results</span>
      </div>
      <div className='setting-supplier-tab'>
        <table className="setting-suppliers-users-table">
          <thead>
            <tr>
              <th>Hospital Name</th>
              <th>Address</th>
              <th>Telephone</th>
              <th>Email</th>
              <th>KRA PIN</th>
              <th>DDA</th>
              <th>Header Description</th>
              <th>Created Date</th>
              <th>Is Active</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredHeaders.map((header, index) => (
              <tr key={index}>
                <td>{header.hospitalName}</td>
                <td>{header.address}</td>
                <td>{header.telephone}</td>
                <td>{header.email}</td>
                <td>{header.kraPin}</td>
                <td>{header.dda}</td>
                <td>{header.headerDescription}</td>
                <td>{header.createdDate}</td>
                <td>{header.isActive ? 'Active' : 'Inactive'}</td>
                <td className="setting-supplier-action-buttons">
                  <Button
                    className="setting-supplier-action-button"
                    onClick={() => handleShowModal(header)}
                  >
                    Edit
                  </Button>
                  <Button className="setting-supplier-action-button">Deactivate</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* <div className="setting-supplier-pagination">
          <div className="setting-supplier-pagination-controls">
            <Button>First</Button>
            <Button>Previous</Button>
            <Button>1</Button>
            <Button>Next</Button>
            <Button>Last</Button>
          </div>
        </div> */}
      </div>

      <Modal show={showModal} onHide={handleCloseModal} className="supplier-setting-supplier-update-modal">
        <Modal.Header closeButton>
          <Modal.Title>{isEditMode ? 'Update Invoice Header' : 'Add New Invoice Header'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="hospitalName" className="supplier-setting-form-group">
              <Form.Label>Hospital Name<span className="supplier-setting-text-danger">*</span>:</Form.Label>
              <Form.Control
                type="text"
                name="hospitalName"
                placeholder="Enter Hospital Name"
                required
                defaultValue={selectedHeader?.hospitalName || ''}
              />
            </Form.Group>

            <Form.Group controlId="address" className="supplier-setting-form-group">
              <Form.Label>Address<span className="supplier-setting-text-danger">*</span>:</Form.Label>
              <Form.Control
                type="text"
                name="address"
                placeholder="Enter Address"
                required
                defaultValue={selectedHeader?.address || ''}
              />
            </Form.Group>

            <Form.Group controlId="telephone" className="supplier-setting-form-group">
              <Form.Label>Telephone<span className="supplier-setting-text-danger">*</span>:</Form.Label>
              <Form.Control
                type="text"
                name="telephone"
                placeholder="Enter Telephone"
                required
                defaultValue={selectedHeader?.telephone || ''}
              />
            </Form.Group>

            <Form.Group controlId="email" className="supplier-setting-form-group">
              <Form.Label>Email<span className="supplier-setting-text-danger">*</span>:</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter Email"
                required
                defaultValue={selectedHeader?.email || ''}
              />
            </Form.Group>

            <Form.Group controlId="kraPin" className="supplier-setting-form-group">
              <Form.Label>KRA PIN:</Form.Label>
              <Form.Control
                type="text"
                name="kraPin"
                placeholder="Enter KRA PIN"
                defaultValue={selectedHeader?.kraPin || ''}
              />
            </Form.Group>

            <Form.Group controlId="dda" className="supplier-setting-form-group">
              <Form.Label>DDA:</Form.Label>
              <Form.Control
                type="text"
                name="dda"
                placeholder="Enter DDA"
                defaultValue={selectedHeader?.dda || ''}
              />
            </Form.Group>

            <Form.Group controlId="headerDescription" className="supplier-setting-form-group">
              <Form.Label>Header Description:</Form.Label>
              <Form.Control
                type="text"
                name="headerDescription"
                placeholder="Enter Header Description"
                defaultValue={selectedHeader?.headerDescription || ''}
              />
            </Form.Group>

            <Form.Group controlId="logoImage" className="supplier-setting-form-group">
              <Form.Label>Choose Logo Image<span className="supplier-setting-text-danger">*</span>:</Form.Label>
              <Form.Control
                type="file"
                name="logoImage"
                accept="image/*"
              />
              <Form.Text className="text-muted">
                {selectedHeader?.logoImagePath ? `File: ${selectedHeader.logoImagePath}` : 'No file chosen'}
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="isActive" className="supplier-setting-form-group">
              <Form.Check
                type="checkbox"
                name="isActive"
                label="Is Active"
                defaultChecked={selectedHeader?.isActive || false}
              />
            </Form.Group>

            <div className="supplier-setting-text-right">
              <Button variant="primary" onClick={handleCloseModal} className="supplier-setting-mr-2">Cancel</Button>
              <Button variant="primary" type="submit">{isEditMode ? 'Update Invoice Header' : 'Add Invoice Header'}</Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default SettingInvoiceHeaders;
/* Mohini_SettingInvoiceHeaders_WholePage_14/sep/2024 */
