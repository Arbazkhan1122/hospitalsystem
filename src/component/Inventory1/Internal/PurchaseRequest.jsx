import React, { useState, useEffect } from 'react';
import './PurchaseRequest.css';
import AddVendor from './AddVendor';
import AddItem from './AddItem';

const PurchaseRequest = () => {
  // State variables for the component
  const [isCreatingRequest, setIsCreatingRequest] = useState(false);
  const [isVendorModalOpen, setIsVendorModalOpen] = useState(false);
  const [openAddItem, setOpenAddItem] = useState(false);
  const [dateFrom, setDateFrom] = useState('2024-08-07');
  const [dateTo, setDateTo] = useState('2024-08-07');
  const [searchQuery, setSearchQuery] = useState('');
  const [vendor, setVendor] = useState('');
  const [requestDate, setRequestDate] = useState('2024-08-21');
  const [prCategory, setPrCategory] = useState('Consumables');
  const [itemName, setItemName] = useState('');
  const [itemCode, setItemCode] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [availableQty, setAvailableQty] = useState(0);
  const [quantityVerifiedOn, setQuantityVerifiedOn] = useState('2024-08-21');
  const [uom, setUom] = useState('Units');
  const [remarks, setRemarks] = useState('');
  const [requestedBy, setRequestedBy] = useState('Mr.admin');
  const [purchaseRequests, setPurchaseRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch purchase requests when the component mounts
  useEffect(() => {
    fetch('http://192.168.1.39:8080/api/purchase-requests/fetchAllPurchase')
      .then(response => response.json())
      .then(data => {
        setPurchaseRequests(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []);

  // Handle search functionality
  const handleSearch = () => {
    console.log('Searching for:', searchQuery);
    // Implement search logic here
  };

  // Handle print functionality
  const handlePrint = () => {
    console.log('Printing...');
    // Implement print logic here
  };

  // Handle creation of a new purchase request
  const handleCreateRequest = () => {
    const requestPayload = {
      vendor,
      requestDate,
      prCategory,
      itemName,
      quantity,
      availableQty,
      quantityVerifiedOn,
      uom,
      status: 'active',
      remarks,
      requestedBy
    };

    fetch('http://192.168.1.39:8080/api/purchase-requests/addPurchase', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestPayload),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        // Handle success (e.g., show a success message or redirect)
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle error (e.g., show an error message)
      });

    setIsCreatingRequest(false); // Hide the form after submission
  };

  // Handle going back to the list view
  const handleBackToList = () => {
    setIsCreatingRequest(false);
  };

  // Open and close modal handlers
  const openVendorModal = () => setIsVendorModalOpen(true);
  const closeVendorModal = () => setIsVendorModalOpen(false);

  const openAddItemModel = () => setOpenAddItem(true);
  const closeAddItemModel = () => setOpenAddItem(false);

  // Display loading or error message if needed
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className='purchase-request-content'>
      {isCreatingRequest ? (
        <div className="purchase-request-create-purchase-form">
          <h2 className="purchase-request-header">Purchase Request</h2>
          <div>
            <div className='purchase-request-pur-subContent'>
              <label>Vendor:</label>
              <input
                type="text"
                value={vendor}
                onChange={(e) => setVendor(e.target.value)}
                placeholder="Vendor Name"
              />
              <button className='purchase-request-pur-subButton' onClick={openVendorModal}>?</button>

              <label>Request Date:</label>
              <input
                type="date"
                value={requestDate}
                onChange={(e) => setRequestDate(e.target.value)}
              />
            </div>
          </div>
          <div className="purchase-request-table-container">
            <table className="purchase-request-purchase-request-form-table">
              <thead>
                <tr>
                  <th>PR Category</th>
                  <th>Item Name</th>
                  <th>Code</th>
                  <th>UOM</th>
                  <th>Quantity</th>
                  <th>Available Qty</th>
                  <th>Quantity Verified On</th>
                  <th>Supply required before</th>
                  <th>Item Remark</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <select
                      value={prCategory}
                      onChange={(e) => setPrCategory(e.target.value)}
                    >
                      <option>Consumables</option>
                      <option>Capital Goods</option>
                      {/* Add more options as needed */}
                    </select>
                  </td>
                  <td className='purchase-request-add-Item-container'>
                    <input
                      type="text"
                      value={itemName}
                      onChange={(e) => setItemName(e.target.value)}
                      placeholder="Item Name"
                    />
                    <button className='purchase-request-add-Item' onClick={openAddItemModel}>?</button>
                  </td>
                  <td>
                    <input
                      type="text"
                      value={itemCode}
                      onChange={(e) => setItemCode(e.target.value)}
                      placeholder="Item Code"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={uom}
                      onChange={(e) => setUom(e.target.value)}
                      placeholder="Unit of Measure"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={availableQty}
                      onChange={(e) => setAvailableQty(e.target.value)}
                      placeholder="Available Qty"
                    />
                  </td>
                  <td>
                    <input
                      type="date"
                      value={quantityVerifiedOn}
                      onChange={(e) => setQuantityVerifiedOn(e.target.value)}
                    />
                  </td>
                  <td>
                    <select>
                      <option>Choose...</option>
                      {/* Add more options as needed */}
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      value={remarks}
                      onChange={(e) => setRemarks(e.target.value)}
                      placeholder="Item Remark"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <div>
              <label>Remarks:</label>
              <textarea
                rows="4"
                value={remarks}
                onChange={(e) => setRemarks(e.target.value)}
                placeholder="Enter any remarks"
              ></textarea>
            </div>
            <button className="purchase-request-request-button" onClick={handleCreateRequest}>
              Request
            </button>
            <button className="purchase-request-discard-button" onClick={handleBackToList}>
              Discard
            </button>
          </div>
        </div>
      ) : (
        <div>
          <button className="purchase-request-create-purchase-request" onClick={() => setIsCreatingRequest(true)}>
            Create Purchase Request
          </button>
          <div className="purchase-request-date-range">
            <label>From: <input type="date" value={dateFrom} onChange={(e) => setDateFrom(e.target.value)} /></label>
            <label>To: <input type="date" value={dateTo} onChange={(e) => setDateTo(e.target.value)} /></label>
            <button className="purchase-request-star">☆</button>
            <button className="purchase-request-minus">-</button>
            <button className="purchase-request-ok">✓ OK</button>
          </div>
          <div className="purchase-request-search-bar">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button onClick={handleSearch}>🔍</button>
          </div>
          <div className="purchase-request-purchase-results">
            <div>
              <span>Showing {purchaseRequests.length} results</span>
              <button onClick={handlePrint}>Print</button>
            </div>
          </div>
          <table className="purchase-request-results-table">
            <thead>
              <tr>
                <th>Vendor</th>
                <th>Request Date</th>
                <th>Category</th>
                <th>Item Name</th>
                <th>Quantity</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {purchaseRequests.map((request, index) => (
                <tr key={index}>
                  <td>{request.vendor}</td>
                  <td>{request.requestDate}</td>
                  <td>{request.prCategory}</td>
                  <td>{request.itemName}</td>
                  <td>{request.quantity}</td>
                  <td>{request.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Add Vendor Modal */}
      {isVendorModalOpen && <AddVendor onClose={closeVendorModal} />}

      {/* Add Item Modal */}
      {openAddItem && <AddItem onClose={closeAddItemModel} />}
    </div>
  );
};

export default PurchaseRequest;
