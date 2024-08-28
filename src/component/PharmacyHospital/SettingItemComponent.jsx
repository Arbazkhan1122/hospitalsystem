import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios'; // Import axios
import './SettingSupplier.css'; // Ensure this contains relevant styles

const SettingItemComponent = () => {
  const [suppliers, setSuppliers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);

  // State for dropdown data
  const [companies, setCompanies] = useState([]);
  const [categories, setCategories] = useState([]);
  const [unitsOfMeasurement, setUnitsOfMeasurement] = useState([]);
  const [itemTypes, setItemTypes] = useState([]);

  useEffect(() => {
    // Fetch initial data
    axios.get('http://localhost:1415/api/items')
      .then(response => setSuppliers(response.data))
      .catch(error => console.error('Error fetching items:', error));

    // Fetch dropdown data
    axios.get('http://localhost:1415/api/companies')
      .then(response => setCompanies(response.data))
      .catch(error => console.error('Error fetching companies:', error));

    axios.get('http://localhost:1415/api/categories')
      .then(response => setCategories(response.data))
      .catch(error => console.error('Error fetching categories:', error));

    axios.get('http://localhost:1415/api/units-of-measurement')
      .then(response => setUnitsOfMeasurement(response.data))
      .catch(error => console.error('Error fetching units of measurement:', error));

    axios.get('http://localhost:1415/api/itemtypes')
      .then(response => setItemTypes(response.data))
      .catch(error => console.error('Error fetching item types:', error));
  }, []);

  const filteredUsers = suppliers.filter(item =>
    item.genericName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleShowModal = (item = null) => {
    if (item) {
      setSelectedItem(item);
      setIsEditMode(true);
    } else {
      setSelectedItem({
        salesCategory: '',
        itemName: '',
        itemCode: '',
        companyName: '',
        itemType: '',
        unit: '',
        genericName: '',
        isActive: true,
        isInternationalBrand: false,
        ccCharge: 0,
        isNarcotic: false,
        reOrderQuantity: 0,
        minStockQuantity: 0,
        dosage: '',
        budgetedQuantity: 0,
        isVatApplicable: false,
        purchaseRate: 0,
        salesRate: 0,
        purchaseDiscount: 0,
        discountPercentage: 0
      });
      setIsEditMode(false);
    }
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedItem(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const url = isEditMode ? `http://localhost:1415/api/items/${selectedItem.itemCode}` : 'http://localhost:1415/api/items';
    const method = isEditMode ? 'put' : 'post';

    axios({ method, url, data: selectedItem })
      .then(response => {
        if (isEditMode) {
          setSuppliers(suppliers.map(item => item.itemCode === selectedItem.itemCode ? selectedItem : item));
        } else {
          setSuppliers([...suppliers, response.data]);
        }
        handleCloseModal();
      })
      .catch(error => console.error('Error submitting data:', error));
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSelectedItem(prevItem => ({
      ...prevItem,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="setting-supplier-container">
      <div className="setting-supplier-header">
        <button className="setting-supplier-add-user-button" onClick={() => handleShowModal()}>+ Add Item</button>
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
              <th>Medicine Name</th>
              <th>Company Name</th>
              <th>Item Type</th>
              <th>ReOrder Quantity</th>
              <th>MinStock Quantity</th>
              <th>Rack No</th>
              <th>IsActive</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((item, index) => (
              <tr key={index}>
                <td>{item.genericName}</td>
                <td>{item.itemName}</td>
                <td>{item.companyName}</td>
                <td>{item.itemType}</td>
                <td>{item.reOrderQuantity}</td>
                <td>{item.minStockQuantity}</td>
                <td>{item.rackNo}</td>
                <td>{item.isActive ? 'Active' : 'Inactive'}</td>
                <td className="setting-supplier-action-buttons">
                  <button className="setting-supplier-action-button">Add To Rack</button>
                  <button className="setting-supplier-action-button" onClick={() => handleShowModal(item)}>Edit</button>
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
          <Modal.Title>{isEditMode ? 'Update Item' : 'Add New Item'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="salesCategory" className="supplier-setting-form-group">
              <Form.Label>Select Sales Category<span className="supplier-setting-text-danger">*</span>:</Form.Label>
              <Form.Control
                as="select"
                name="salesCategory"
                value={selectedItem?.salesCategory || ''}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Sales Category</option>
                {categories.map(category => (
                  <option key={category.id} value={category.name}>{category.name}</option>
                ))}
              </Form.Control>
              <Form.Label>Item Name<span className="supplier-setting-text-danger">*</span>:</Form.Label>
              <Form.Control
                type="text"
                name="itemName"
                placeholder="Enter Item Name"
                required
                value={selectedItem?.itemName || ''}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="itemCode" className="supplier-setting-form-group">
              <Form.Label>Item Code:</Form.Label>
              <Form.Control
                type="text"
                name="itemCode"
                placeholder="Enter Item Code"
                value={selectedItem?.itemCode || ''}
                onChange={handleInputChange}
              />
              <Form.Label>Select Company<span className="supplier-setting-text-danger">*</span>:</Form.Label>
              <Form.Control
                as="select"
                name="companyName"
                value={selectedItem?.companyName || ''}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Company</option>
                {companies.map(company => (
                  <option key={company.id} value={company.companyName}>{company.companyName}</option>
                ))}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="itemType" className="supplier-setting-form-group">
              <Form.Label>Item Type<span className="supplier-setting-text-danger">*</span>:</Form.Label>
              <Form.Control
                as="select"
                name="itemType"
                value={selectedItem?.itemType || ''}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Item Type</option>
                {itemTypes.map(type => (
                  <option key={type.id} value={type.type}>{type.type}</option>
                ))}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="unit" className="supplier-setting-form-group">
              <Form.Label>Unit<span className="supplier-setting-text-danger">*</span>:</Form.Label>
              <Form.Control
                as="select"
                name="unit"
                value={selectedItem?.unit || ''}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Unit</option>
                {unitsOfMeasurement.map(unit => (
                  <option key={unit.id} value={unit.name}>{unit.name}</option>
                ))}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="genericName" className="supplier-setting-form-group">
              <Form.Label>Generic Name:</Form.Label>
              <Form.Control
                type="text"
                name="genericName"
                placeholder="Enter Generic Name"
                value={selectedItem?.genericName || ''}
                onChange={handleInputChange}
              />
              <Form.Label>IsActive:</Form.Label>
              <Form.Check
                type="checkbox"
                name="isActive"
                checked={selectedItem?.isActive || false}
                onChange={handleInputChange}
                label="Is Active"
              />
              <Form.Label>IsInternationalBrand:</Form.Label>
              <Form.Check
                type="checkbox"
                name="isInternationalBrand"
                checked={selectedItem?.isInternationalBrand || false}
                onChange={handleInputChange}
                label="Is International Brand"
              />
            </Form.Group>

            <Form.Group controlId="ccCharge" className="supplier-setting-form-group">
              <Form.Label>C.C Charge:</Form.Label>
              <Form.Control
                type="number"
                name="ccCharge"
                placeholder="Enter C.C Charge"
                value={selectedItem?.ccCharge || 0}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="isNarcotic" className="supplier-setting-form-group">
              <Form.Check
                type="checkbox"
                name="isNarcotic"
                checked={selectedItem?.isNarcotic || false}
                onChange={handleInputChange}
                label="Is Narcotic"
              />
              <Form.Label>ReOrder Quantity:</Form.Label>
              <Form.Control
                type="number"
                name="reOrderQuantity"
                placeholder="Enter ReOrder Quantity"
                value={selectedItem?.reOrderQuantity || 0}
                onChange={handleInputChange}
              />
              <Form.Label>MinStock Quantity:</Form.Label>
              <Form.Control
                type="number"
                name="minStockQuantity"
                placeholder="Enter MinStock Quantity"
                value={selectedItem?.minStockQuantity || 0}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="dosage" className="supplier-setting-form-group">
              <Form.Label>Dosage:</Form.Label>
              <Form.Control
                type="text"
                name="dosage"
                placeholder="Enter Dosage"
                value={selectedItem?.dosage || ''}
                onChange={handleInputChange}
              />
              <Form.Label>Budgeted Quantity:</Form.Label>
              <Form.Control
                type="number"
                name="budgetedQuantity"
                placeholder="Enter Budgeted Quantity"
                value={selectedItem?.budgetedQuantity || 0}
                onChange={handleInputChange}
              />
              <Form.Label>Is Vat Applicable:</Form.Label>
              <Form.Check
                type="checkbox"
                name="isVatApplicable"
                checked={selectedItem?.isVatApplicable || false}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="purchaseRate" className="supplier-setting-form-group">
              <Form.Label>Purchase Rate:</Form.Label>
              <Form.Control
                type="number"
                name="purchaseRate"
                placeholder="Enter Purchase Rate"
                value={selectedItem?.purchaseRate || 0}
                onChange={handleInputChange}
              />
              <Form.Label>Sales Rate:</Form.Label>
              <Form.Control
                type="number"
                name="salesRate"
                placeholder="Enter Sales Rate"
                value={selectedItem?.salesRate || 0}
                onChange={handleInputChange}
              />
              <Form.Label>Purchase Discount:</Form.Label>
              <Form.Control
                type="number"
                name="purchaseDiscount"
                placeholder="Enter Purchase Discount"
                value={selectedItem?.purchaseDiscount || 0}
                onChange={handleInputChange}
              />
              <Form.Label>Discount Percentage:</Form.Label>
              <Form.Control
                type="number"
                name="discountPercentage"
                placeholder="Enter Discount Percentage"
                value={selectedItem?.discountPercentage || 0}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              {isEditMode ? 'Update Item' : 'Add Item'}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default SettingItemComponent;
