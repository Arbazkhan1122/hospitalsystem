import React, { useState, useEffect } from "react";
import "./RequisitionDetail.css";

const RequisitionDetail = ({ requisition, onClose }) => {
  console.log(requisition.items[0].itemCategory);
  const [selectedItems, setSelectedItems] = useState([]);
  const [remarks, setRemarks] = useState({});
  const [editableItemId, setEditableItemId] = useState(null);

  // Handle checkbox change
  const handleCheckboxChange = (itemId) => {
    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.includes(itemId)
        ? prevSelectedItems.filter(id => id !== itemId)
        : [...prevSelectedItems, itemId]
    );
    setEditableItemId(itemId);
  };

  // Handle remark change
  const handleRemarkChange = (event) => {
    const { value } = event.target;
    setRemarks((prevRemarks) => ({
      ...prevRemarks,
      [editableItemId]: value,
    }));
  };

  // Handle close textarea
  const handleCloseTextarea = () => {
    setEditableItemId(null);
  };

  // Click outside to close textarea
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (editableItemId && !event.target.closest('.inventory-requi-table')) {
        handleCloseTextarea();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [editableItemId]);


  return (
    <div className="inventory-modal-overlay">
      <div className="inventory-modal-content">
        <button className="inventory-close-button" onClick={onClose}>
          &times;
        </button>
        <div className="inventory-requisition-details">
          <h2 className="inventory-requi-h2">Inventory Unit</h2>
          <p>
            Requisition No: <strong>{requisition.id}</strong>
          </p>
          <p>
            Request From: <strong>{requisition.storeName}</strong>
          </p>
          <hr />
          <table className="inventory-requi-table">
            <thead>
              <tr>
                <th></th>
                <th>Item Category</th>
                <th>Item Name</th>
                <th>Item Code</th>
                <th>Quantity</th>
                <th>Received Qty.</th>
                <th>Pending Qty.</th>
                <th>Status</th>
                <th>Remarks</th>
              </tr>
            </thead>
            <tbody>
                {requisition?.items.map((item) => (
                  <tr key={item.id}>
                    <td>
                    <input
                      type="checkbox"
                      checked={selectedItems.includes(item.id)}
                      onChange={() => handleCheckboxChange(item.id)}
                    />
                  </td>
                    <td>{item.itemCategory}</td>
                    <td>{item.itemName}</td>
                    <td>{item.code}</td>
                    <td>{item.availableQty}</td>
                    <td>{item.dispatchedQty}</td>
                    <td>{item.availableQty - item.dispatchedQty}</td>
                    <td>approved</td>
                    <td>{requisition.remarks}</td>
                  </tr>
                ))}
              </tbody>
          </table>
       

          <div className="inventory-remarks-section">
            <p>
              <strong>Dispatched By:</strong> <br />1 Mr. admin admin (Aug 26,
              2024, 10:54:07 AM)
            </p>
            <p>
              <strong>Rem:</strong> ok
            </p>
          </div>
          <div className="inventory-status-steps">
            <div className="inventory-step completed">
              <span>&#10004;</span>
              <p>Requested</p>
            </div>
            <div className="inventory-step completed">
              <span>&#10004;</span>
              <p>Dispatched</p>
            </div>
            <div className="inventory-step pending">
              <span>3</span>
              <p>Received</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequisitionDetail;
