/* Ajhar tamboli sSPharmacyReqCreateReq.jsx 19-09-24 */

import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import "../SSPharmacy/sSPharmacyReqCreateReq.css";
import { API_BASE_URL } from '../../../api/api';
import { useParams } from 'react-router-dom';

const SSPharmacyReqCreateReq = ({ onClose }) => {
  // General Form States
  const { store } = useParams();
  const [requisitionDate, setRequisitionDate] = useState('2024-08-29');
  const [issueNo, setIssueNo] = useState('');
  const [remarks, setRemarks] = useState('');
  const [needVerification, setNeedVerification] = useState(true);
  const [checkedBy, setCheckedBy] = useState('Mr. admin admin');

  // Inventory Item State (single object)
  const [item, setItem] = useState({
    itemName: '',
    unit: '',
    availableQtyInStore: '',
    requiredQuantity: '',
    remark: '',
    genericName: '',
    batchNo: '',
    expiryDate: '',
    salePrice: ''
  });

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form fields as needed
    if (!issueNo) {
      alert('Issue No is required.');
      return;
    }

    // Validate the single item
    // if (!item.itemName || !item.unit || !item.requestingQuantity) {
    //   alert('Please fill all required fields for the item.');
    //   return;
    // }

    // Prepare data for API
    const requisitionData = {
      itemName: item.itemName,
      unit: item.unit,
      availableQtyInStore: Number(item.availableQtyInStore),
      requiredQuantity: Number(item.requiredQuantity),
      requestedBy: 'Dr. Smith', // This can be dynamic based on your application
      remark: item.remark,
      requestedDate: requisitionDate,
      storeName: store, 
      genericName: item.genericName,
      batchNo: item.batchNo,
      expiryDate: item.expiryDate,
      salePrice: parseFloat(item.salePrice),
      isVerify: needVerification ? 'Yes' : 'No',
      verifiedBy: 'N/A', // Update as necessary
      needsVerification: needVerification ? 'Yes' : 'No',
      status: 'Pending',
      dispatchQty: 0
    };

    try {
      console.log(requisitionData);

      const response = await fetch(`${API_BASE_URL}/pharmacyRequisitions/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requisitionData)
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Requisition submitted successfully:', result);
        alert('Requisition submitted successfully!');
        onClose(); // Close the form/modal
      } else {
        const errorData = await response.json();
        console.error('Failed to submit requisition:', errorData);
        alert('Failed to submit requisition. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting requisition:', error);
      alert('An error occurred while submitting the requisition.');
    }
  };

  // Handle changes in the inventory item
  const handleItemChange = (field, value) => {
    setItem(prevItem => ({
      ...prevItem,
      [field]: value
    }));
  };

  return (
    <div className="sSPharmacyReqCreateReq-form">
      {/* <button className="sSPharmacyReqCreateReq-close-button" onClick={onClose}>X</button> */}
      <h2 className="sSPharmacyReqCreateReq-form-title">Add Requisition</h2>
      <form onSubmit={handleSubmit}>
        {/* General Information */}
        <div className="sSPharmacyReqCreateReq-form-row">
          <div className="sSPharmacyReqCreateReq-form-group">
            <label htmlFor="issueNo">Issue No : *</label>
            <input
              type="text"
              id="issueNo"
              placeholder="Enter Issue Number"
              value={issueNo}
              onChange={(e) => setIssueNo(e.target.value)}
              required
            />
          </div>
          <div className="sSPharmacyReqCreateReq-form-group">
            <label htmlFor="requisitionDate">Requisition Date :</label>
            <div className="sSPharmacyReqCreateReq-date-input">
              <input
                type="date"
                id="requisitionDate"
                value={requisitionDate}
                onChange={(e) => setRequisitionDate(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Inventory Item Fields */}
        <table className="sSPharmacyReqCreateReq-inventory-table">
          <thead>
            <tr>
              <th>Item Name *</th>
              <th>Unit *</th>
              <th>Available Qty in Store</th>
              <th>Required Quantity *</th>
              <th>Generic Name</th>
              <th>Batch No</th>
              <th>Expiry Date</th>
              <th>Sale Price</th>
              <th>Remark</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input
                  type="text"
                  value={item.itemName}
                  onChange={(e) => handleItemChange('itemName', e.target.value)}
                  required
                />
              </td>
              <td>
                <input
                  type="text"
                  value={item.unit}
                  onChange={(e) => handleItemChange('unit', e.target.value)}
                  required
                />
              </td>
              <td>
                <input
                  type="number"
                  value={item.availableQtyInStore}
                  onChange={(e) => handleItemChange('availableQtyInStore', e.target.value)}
                  min="0"
                />
              </td>
              <td>
                <input
                  type="number"
                  value={item.requiredQuantity}
                  onChange={(e) => handleItemChange('requiredQuantity', e.target.value)}
                  min="1"
                  required
                />
              </td>
              <td>
                <input
                  type="text"
                  value={item.genericName}
                  onChange={(e) => handleItemChange('genericName', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={item.batchNo}
                  onChange={(e) => handleItemChange('batchNo', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="date"
                  value={item.expiryDate}
                  onChange={(e) => handleItemChange('expiryDate', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  step="0.01"
                  value={item.salePrice}
                  onChange={(e) => handleItemChange('salePrice', e.target.value)}
                  min="0"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={item.remark}
                  onChange={(e) => handleItemChange('remark', e.target.value)}
                />
              </td>
            </tr>
          </tbody>
        </table>

        <div className="sSPharmacyReqCreateReq-nedd-N-textarea">
        <div className="sSPharmacyReqCreateReq-nedd-N-btn">
        <div className="sSPharmacyReqCreateReq-form-group sSPharmacyReqCreateReq-checkbox-group">
          <input
            type="checkbox"
            id="needVerification"
            checked={needVerification}
            onChange={(e) => setNeedVerification(e.target.checked)}
          />
          <label htmlFor="needVerification">Need Verification</label>
        </div>

        {/* Checked By Section */}
        <div className="sSPharmacyReqCreateReq-checked-by">
          <button
            type="button"
            className="sSPharmacyReqCreateReq-btn sSPharmacyReqCreateReq-btn-remove"
            onClick={() => { /* Handle if needed */ }}
          >
            -
          </button>
          <button
            type="button"
            className="sSPharmacyReqCreateReq-btn-checked"
            onClick={() => { /* Handle if needed */ }}
          >
            Chief Pharmaceutical Service
          </button>
          <input
            type="text"
            value={checkedBy}
            onChange={(e) => setCheckedBy(e.target.value)}
          />
          <button
            type="button"
            className="sSPharmacyReqCreateReq-btn sSPharmacyReqCreateReq-btn-add"
            onClick={() => { /* Handle if needed */ }}
          >
            +
          </button>
        </div>
        </div>

        {/* Remarks */}
        <div className="sSPharmacyReqCreateReq-form-group">
          <label htmlFor="remarks">Remarks:</label>
          <textarea
            id="remarks"
            value={remarks}
            onChange={(e) => setRemarks(e.target.value)}
            rows="4"
          ></textarea>
        </div>
        </div>

        {/* Form Actions */}
        <div className="sSPharmacyReqCreateReq-form-actions">
          <button type="submit" className="sSPharmacyReqCreateReq-submit-button">Request</button>
          <button
            type="button"
            className="sSPharmacyReqCreateReq-cancel-button"
            onClick={onClose}
          >
            Discard Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default SSPharmacyReqCreateReq;
