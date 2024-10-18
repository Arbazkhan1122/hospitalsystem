import React, { useState, useEffect, useRef } from "react";
import "./PurchaseRequest.css";
import AddVendor from "./AddVendor";
import AddItem from "./AddItem";
import { startResizing } from "../../TableHeadingResizing/resizableColumns";
import { API_BASE_URL } from "../../api/api";

const PurchaseRequest = () => {
  // State variables for the component
  const [columnWidths, setColumnWidths] = useState({});
  const tableRef = useRef(null);
  const [isCreatingRequest, setIsCreatingRequest] = useState(false);
  const [isVendorModalOpen, setIsVendorModalOpen] = useState(false);
  const [openAddItem, setOpenAddItem] = useState(false);
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [vendor, setVendor] = useState("");
  const [requestDate, setRequestDate] = useState("");
  const [prCategory, setPrCategory] = useState("Consumables");
  const [itemName, setItemName] = useState("");
  const [itemCode, setItemCode] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [availableQty, setAvailableQty] = useState(0);
  const [quantityVerifiedOn, setQuantityVerifiedOn] = useState("");
  const [uom, setUom] = useState("Units");
  const [remarks, setRemarks] = useState("");
  const [requestedBy, setRequestedBy] = useState("Mr.admin");
  const [purchaseRequests, setPurchaseRequests] = useState([]);
  const [vendorList, setVendorList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [item,setItem] = useState([]);
  const [error, setError] = useState(null);

  // Fetch purchase requests when the component mounts
  useEffect(() => {
    fetch(`${API_BASE_URL}/purchase-requests/fetchAllPurchase`)
      .then((response) => response.json())
      .then((data) => {
        setPurchaseRequests(data);      
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch(`${API_BASE_URL}/vendors/getAllVendors`)
      .then((response) => response.json())
      .then((data) => {
        setVendorList(data);        
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);


  useEffect(() => {
    fetch(`${API_BASE_URL}/items/all`)
      .then((response) => response.json())
      .then((data) => {
        setItem(data);
        console.log(data);
        
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  const handleItemSelect = (e) => {
    const selectedItemName = e.target.value;
    setItemName(selectedItemName);

    // Find the selected item details
    const selectedNewitem = item.find((items) => items.itemName === selectedItemName);
    if (selectedNewitem) {
      setItemCode(selectedNewitem.itemCode);  // Auto-fill item code
      setUom(selectedNewitem.unitOfMeasurement);            // Auto-fill UOM
      setAvailableQty(selectedNewitem.minStockQuantity);  // Auto-fill available quantity     // Set selected item to track it if needed
    }
  };

  // Handle search functionality
  const handleSearch = () => {
    console.log("Searching for:", searchQuery);
    // Implement search logic here
  };

  // Handle print functionality
  const handlePrint = () => {
    console.log("Printing...");
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
      quantityVerifiedOn,
      uom,
      status: "pending",
      remarks,
      requestedBy,
    };

    console.log(requestPayload);
    

    fetch(`${API_BASE_URL}/purchase-requests/addPurchase`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestPayload),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        // Handle success (e.g., show a success message or redirect)
      })
      .catch((error) => {
        console.error("Error:", error);
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

  return (
    <div className="purchase-request-content">
      {isCreatingRequest ? (
        <div className="purchase-request-create-purchase-form">
          <h2 className="purchase-request-header">Purchase Request</h2>
          <div>
            <div className="purchase-request-pur-subContent">
              <div>
                <label>Vendor:</label>
                <select
                 value={vendor}
                 className="purchase-request-select"
                 onChange={(e) => setVendor(e.target.value)}>
                  {vendorList.map((vendor) => (
                    <option key={vendor.id} value={vendor.vendorName}>
                      {vendor.vendorName}
                    </option>
                  ))}
                </select>
                <button className="pur-subButton" onClick={openVendorModal}>
                  Add Vendor
                </button>
              </div>
              <div>
                <label>Request Date:</label>
                <input
                  type="date"
                  value={requestDate}
                  onChange={(e) => setRequestDate(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="purchase-request-table-container">
            <table className="patientList-table" ref={tableRef}>
              <thead>
                <tr>
                  {[
                    "PR Category",
                    "Item Name",
                    "Code",
                    "UOM",
                    "Quantity",
                    "Available Qty",
                    "Quantity Verified On",
                    "Supply required before",
                    "Item Remark",
                  ].map((header, index) => (
                    <th
                      key={index}
                      style={{ width: columnWidths[index] }}
                      className="resizable-th"
                    >
                      <div className="header-content">
                        <span>{header}</span>
                        <div
                          className="resizer"
                          onMouseDown={startResizing(
                            tableRef,
                            setColumnWidths
                          )(index)}
                        ></div>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <select
                      value={prCategory}
                      onChange={(e) => setPrCategory(e.target.value)}
                      className="Inv-purchase-request-input"
                    >
                      <option>Consumables</option>
                      <option>Capital Goods</option>
                      {/* Add more options as needed */}
                    </select>
                  </td>
                  <td className="purchase-request-add-Item-container">
                    <div className="Inv-purchase-request-input">
                    <select
                    value={itemName}
                    onChange={handleItemSelect}
                    className="Inv-purchase-request-input-subDiv"
                  >
                    <option value="">Select Item</option>
                    {item.map((item) => (
                      <option key={item.id} value={item.itemName}>
                        {item.itemName}
                      </option>
                    ))}
                  </select>
                  <button className="add-Item" onClick={openAddItemModel}>
                    ?
                  </button>
                    </div>
                  </td>
                  <td>
                    <input
                      type="text"
                      value={itemCode}
                      onChange={(e) => setItemCode(e.target.value)}
                      placeholder="Item Code"
                      className="Inv-purchase-request-input"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={uom}
                      onChange={(e) => setUom(e.target.value)}
                      placeholder="Unit of Measure"
                      className="Inv-purchase-request-input"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      className="Inv-purchase-request-input"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={availableQty}
                      onChange={(e) => setAvailableQty(e.target.value)}
                      placeholder="Available Qty"
                      className="Inv-purchase-request-input"
                    />
                  </td>
                  <td>
                    <input
                      type="date"
                      value={quantityVerifiedOn}
                      onChange={(e) => setQuantityVerifiedOn(e.target.value)}
                      className="Inv-purchase-request-input"
                    />
                  </td>
                  <td>
                    <select className="Inv-purchase-request-input">
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
                      className="Inv-purchase-request-input"
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
                className="purchase-remark"
                onChange={(e) => setRemarks(e.target.value)}
                placeholder="Enter any remarks"
              ></textarea>
            </div>
            <button
              className="purchase-request-request-button"
              onClick={handleCreateRequest}
            >
              Request
            </button>
            <button
              className="purchase-request-discard-button"
              onClick={handleBackToList}
            >
              Discard
            </button>
          </div>
        </div>
      ) : (
        <div>
          <button
            className="purchase-request-create-purchase-request"
            onClick={() => setIsCreatingRequest(true)}
          >
            Create Purchase Request
          </button>
          <div className="purchase-request-filter">
            <div className="purchase-request-date-range">
              <label>
                From:{" "}
                <input
                  type="date"
                  value={dateFrom}
                  onChange={(e) => setDateFrom(e.target.value)}
                />
              </label>
              <label>
                To:{" "}
                <input
                  type="date"
                  value={dateTo}
                  onChange={(e) => setDateTo(e.target.value)}
                />
              </label>
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
              <button
                className="purchase-request-search-bar-button"
                onClick={handleSearch}
              >
                🔍
              </button>
            </div>
          </div>
          <div className="purchase-request-purchase-results">
            <div>
              <span className="purchase-request-purchase-results-span">
                Showing {purchaseRequests.length} results
              </span>
              <button
                className="purchase-request-purchase-results-button"
                onClick={handlePrint}
              >
                Print
              </button>
            </div>
          </div>
          <table className="patientList-table" ref={tableRef}>
            <thead>
              <tr>
                {[
                  "Vendor",
                  "Request Date",
                  "Category",
                  "Item Name",
                  "Quantity",
                  "Status",
                ].map((header, index) => (
                  <th
                    key={index}
                    style={{ width: columnWidths[index] }}
                    className="resizable-th"
                  >
                    <div className="header-content">
                      <span>{header}</span>
                      <div
                        className="resizer"
                        onMouseDown={startResizing(
                          tableRef,
                          setColumnWidths
                        )(index)}
                      ></div>
                    </div>
                  </th>
                ))}
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
      <AddVendor isOpen={isVendorModalOpen} onClose={closeVendorModal} />
      <AddItem isOpen={openAddItem} onClose={closeAddItemModel} />
    </div>
  );
};

export default PurchaseRequest;
