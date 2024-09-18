/* Mohini_SettingItemComponent_WholePage_14/sep/2024 */
import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import './SettingSupplier.css'; // Ensure this contains relevant styles

const SettingItemComponent = () => {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [companies, setCompanies] = useState([]);
  const [categories, setCategories] = useState([]);
  const [unitsOfMeasurement, setUnitsOfMeasurement] = useState([]);
  const [itemTypes, setItemTypes] = useState([]);
  const [genericNames, setGenericNames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [itemsResponse, companiesResponse, categoriesResponse, unitsResponse, itemTypesResponse, genericNamesResponse] = await Promise.all([
          axios.get('http://192.168.1.39:1415/api/add-items'),
          axios.get('http://192.168.1.39:1415/api/companies'),
          axios.get('http://192.168.1.39:1415/api/categories'),
          axios.get('http://192.168.1.39:1415/api/units-of-measurement'),
          axios.get('http://192.168.1.39:1415/api/itemtypes'),
          axios.get('http://192.168.1.39:1415/api/generic-names'), // Fetch generic names
        ]);

        console.log('Items Response:', itemsResponse.data);
        console.log('Companies Response:', companiesResponse.data);
        console.log('Categories Response:', categoriesResponse.data);
        console.log('Units Response:', unitsResponse.data);
        console.log('Item Types Response:', itemTypesResponse.data);
        console.log('Generic Names Response:', genericNamesResponse.data);

        setItems(itemsResponse.data);
        setCompanies(companiesResponse.data);
        setCategories(categoriesResponse.data);
        setUnitsOfMeasurement(unitsResponse.data);
        setItemTypes(itemTypesResponse.data);
        setGenericNames(genericNamesResponse.data);
      } catch (error) {
        setError('Error fetching data');
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredItems = items.filter(item =>
    item.genericNameDTO?.genericName?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  console.log('Search Term:', searchTerm);
  console.log('Items:', items);
  console.log('Filtered Items:', filteredItems);

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
        discountPercentage: 0,
      });
      setIsEditMode(false);
    }
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedItem(null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const url = isEditMode
        ? `http://192.168.1.39:1415/api/add-items/${selectedItem.itemCode}`
        : 'http://192.168.1.39:1415/api/add-items';
      const method = isEditMode ? 'put' : 'post';

      const response = await axios({
        method,
        url,
        data: selectedItem,
      });

      if (isEditMode) {
        setItems(prevItems =>
          prevItems.map(item =>
            item.itemCode === selectedItem.itemCode ? response.data : item
          )
        );
      } else {
        setItems(prevItems => [...prevItems, response.data]);
      }

      handleCloseModal();
    } catch (error) {
      console.error('Error submitting data:', error);
      setError('Error submitting data');
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSelectedItem(prevItem => ({
      ...prevItem,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleDelete = async (itemCode) => {
    try {
      await axios.delete(`http://192.168.1.39:1415/api/add-items/${itemCode}`);
      setItems(prevItems =>
        prevItems.filter(item => item.itemCode !== itemCode)
      );
    } catch (error) {
      console.error('Error deleting item:', error);
      setError('Error deleting item');
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="setting-supplier-container">
      <div className="setting-supplier-header">
        <button
          className="setting-supplier-add-user-button"
          onClick={() => handleShowModal()}
        >
          + Add Item
        </button>
      </div>
      <input
        type="text"
        placeholder="Search"
        className="manage-users-search-input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="setting-supplier-span">
        <span>
          Showing {filteredItems.length} / {items.length} results
        </span>
      </div>
      <div className="setting-supplier-tab">
        <table className="setting-suppliers-users-table">
          <thead>
            <tr>
              <th>Generic Nameaaaaaaa</th>
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
            {filteredItems.length ? (
              filteredItems.map((item, index) => (
                <tr key={index}>
                  <td>{item.genericNameDTO?.genericName || 'N/A'}</td>
                  <td>{item.itemName || 'N/A'}</td>
                  <td>{item.companyDTO?.companyName || 'N/A'}</td>
                  <td>{item.itemTypeDTO?.type || 'N/A'}</td>
                  <td>{item.reOrderQuantity || 'N/A'}</td>
                  <td>{item.minStockQuantity || 'N/A'}</td>
                  <td>{item.rackNo || 'N/A'}</td>
                  <td>{item.active ? 'Active' : 'Inactive'}</td>
                  <td className="setting-supplier-action-buttons">
                    <button className="setting-supplier-action-button">
                      Add To Rack
                    </button>
                    <button
                      className="setting-supplier-action-button"
                      onClick={() => handleShowModal(item)}
                    >
                      Edit
                    </button>
                    <button
                      className="setting-supplier-action-button"
                      onClick={() => handleDelete(item.itemCode)}
                    >
                      Deactivate
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9">No items found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        className="supplier-setting-supplier-update-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>{isEditMode ? 'Update Item' : 'Add New Item'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="salesCategory" className="supplier-setting-form-group">
              <Form.Label>
                Select Sales Category<span className="supplier-setting-text-danger">*</span>:
              </Form.Label>
              <Form.Control
                as="select"
                name="salesCategory"
                value={selectedItem?.salesCategory || ''}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Sales Category</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </Form.Control>
              {error && <div className="supplier-setting-error">{error}</div>}
            </Form.Group>

            <Form.Group controlId="itemName" className="supplier-setting-form-group">
              <Form.Label>Item Name:</Form.Label>
              <Form.Control
                type="text"
                name="itemName"
                value={selectedItem?.itemName || ''}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="itemCode" className="supplier-setting-form-group">
              <Form.Label>Item Code:</Form.Label>
              <Form.Control
                type="text"
                name="itemCode"
                value={selectedItem?.itemCode || ''}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="companyName" className="supplier-setting-form-group">
              <Form.Label>Company Name:</Form.Label>
              <Form.Control
                as="select"
                name="companyName"
                value={selectedItem?.companyName || ''}
                onChange={handleInputChange}
              >
                <option value="">Select Company</option>
                {companies.map((company) => (
                  <option key={company.id} value={company.companyName}>
                    {company.companyName}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="itemType" className="supplier-setting-form-group">
              <Form.Label>Item Type:</Form.Label>
              <Form.Control
                as="select"
                name="itemType"
                value={selectedItem?.itemType || ''}
                onChange={handleInputChange}
              >
                <option value="">Select Item Type</option>
                {itemTypes.map((itemType) => (
                  <option key={itemType.id} value={itemType.type}>
                    {itemType.type}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="unitOfMeasurement" className="supplier-setting-form-group">
              <Form.Label>Unit of Measurement:</Form.Label>
              <Form.Control
                as="select"
                name="unitOfMeasurement"
                value={selectedItem?.unitOfMeasurement || ''}
                onChange={handleInputChange}
              >
                <option value="">Select Unit of Measurement</option>
                {unitsOfMeasurement.map((unit) => (
                  <option key={unit.id} value={unit.name}>
                    {unit.name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="genericName" className="supplier-setting-form-group">
              <Form.Label>Generic Name:</Form.Label>
              <Form.Control
                as="select"
                name="genericName"
                value={selectedItem?.genericName || ''}
                onChange={handleInputChange}
              >
                <option value="">Select Generic Name</option>
                {genericNames.map((genericName) => (
                  <option key={genericName.id} value={genericName.genericName}>
                    {genericName.genericName}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="isActive" className="supplier-setting-form-group">
              <Form.Check
                type="checkbox"
                name="isActive"
                label="Active"
                checked={selectedItem?.isActive || false}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="isInternationalBrand" className="supplier-setting-form-group">
              <Form.Check
                type="checkbox"
                name="isInternationalBrand"
                label="International Brand"
                checked={selectedItem?.isInternationalBrand || false}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="ccCharge" className="supplier-setting-form-group">
              <Form.Label>CC Charge:</Form.Label>
              <Form.Control
                type="number"
                name="ccCharge"
                value={selectedItem?.ccCharge || ''}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="isNarcotic" className="supplier-setting-form-group">
              <Form.Check
                type="checkbox"
                name="isNarcotic"
                label="Narcotic"
                checked={selectedItem?.isNarcotic || false}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="reOrderQuantity" className="supplier-setting-form-group">
              <Form.Label>ReOrder Quantity:</Form.Label>
              <Form.Control
                type="number"
                name="reOrderQuantity"
                value={selectedItem?.reOrderQuantity || ''}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="minStockQuantity" className="supplier-setting-form-group">
              <Form.Label>MinStock Quantity:</Form.Label>
              <Form.Control
                type="number"
                name="minStockQuantity"
                value={selectedItem?.minStockQuantity || ''}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="dosage" className="supplier-setting-form-group">
              <Form.Label>Dosage:</Form.Label>
              <Form.Control
                type="text"
                name="dosage"
                value={selectedItem?.dosage || ''}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="budgetedQuantity" className="supplier-setting-form-group">
              <Form.Label>Budgeted Quantity:</Form.Label>
              <Form.Control
                type="number"
                name="budgetedQuantity"
                value={selectedItem?.budgetedQuantity || ''}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="isVatApplicable" className="supplier-setting-form-group">
              <Form.Check
                type="checkbox"
                name="isVatApplicable"
                label="VAT Applicable"
                checked={selectedItem?.isVatApplicable || false}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="purchaseRate" className="supplier-setting-form-group">
              <Form.Label>Purchase Rate:</Form.Label>
              <Form.Control
                type="number"
                name="purchaseRate"
                value={selectedItem?.purchaseRate || ''}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="salesRate" className="supplier-setting-form-group">
              <Form.Label>Sales Rate:</Form.Label>
              <Form.Control
                type="number"
                name="salesRate"
                value={selectedItem?.salesRate || ''}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="purchaseDiscount" className="supplier-setting-form-group">
              <Form.Label>Purchase Discount:</Form.Label>
              <Form.Control
                type="number"
                name="purchaseDiscount"
                value={selectedItem?.purchaseDiscount || ''}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="discountPercentage" className="supplier-setting-form-group">
              <Form.Label>Discount Percentage:</Form.Label>
              <Form.Control
                type="number"
                name="discountPercentage"
                value={selectedItem?.discountPercentage || ''}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              {isEditMode ? 'Update' : 'Add'}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default SettingItemComponent;
/* Mohini_SettingItemComponent_WholePage_14/sep/2024 */
