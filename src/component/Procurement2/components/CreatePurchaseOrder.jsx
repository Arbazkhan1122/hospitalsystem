import React, { useState } from 'react';
import axios from 'axios';
import './CreatePurchaseOrder.css';

const CreatePurchaseOrder = () => {
  // State for form fields
  const [purchaseOrder, setPurchaseOrder] = useState({
    vendorName: '',
    poDate: '',
    deliveryDate: '',
    currencyCode: '',
    referenceNo: '',
    invoicingAddress: '',
    deliveryAddress: '',
    contactPerson: '',
    contactEmail: '',
    paymentMode: 'Credit',
    remarks: '',
    subTotal: 0,
    vat: 0,
    totalAmount: 0,
    status: 'Pending',
    items: []
  });

  // Handle input change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setPurchaseOrder((prev) => ({
      ...prev,
      [id]: value
    }));
  };

  // Handle item change
  const handleItemChange = (index, e) => {
    const { id, value } = e.target;
    const updatedItems = [...purchaseOrder.items];
    updatedItems[index] = {
      ...updatedItems[index],
      [id]: value
    };
    setPurchaseOrder((prev) => ({
      ...prev,
      items: updatedItems
    }));
    calculateTotals(updatedItems);
  };

  // Add new row to items
  const addItemRow = () => {
    setPurchaseOrder((prev) => ({
      ...prev,
      items: [
        ...prev.items,
        {
          category: '',
          itemName: '',
          vendorItemCode: '',
          mssNo: '',
          hsnCode: '',
          itemCode: '',
          unit: '',
          quantity: 0,
          standardRate: 0,
          vatPercentage: 0,
          totalAmount: 0,
          remarks: ''
        }
      ]
    }));
  };

  // Remove row from items
  const removeItemRow = (index) => {
    const updatedItems = purchaseOrder.items.filter((_, i) => i !== index);
    setPurchaseOrder((prev) => ({
      ...prev,
      items: updatedItems
    }));
    calculateTotals(updatedItems);
  };

  // Calculate totals
  const calculateTotals = (items) => {
    const subTotal = items.reduce((sum, item) => sum + (item.standardRate * item.quantity), 0);
    const vat = items.reduce((sum, item) => sum + ((item.standardRate * item.quantity) * (item.vatPercentage / 100)), 0);
    const totalAmount = subTotal + vat;
  
    setPurchaseOrder((prev) => ({
      ...prev,
      subTotal,
      vat,
      totalAmount
    }));
  };
  

  // Handle form submission
  const handleSubmit = async (e) => {
    console.log(purchaseOrder)
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/purchase-orders/savePurchaseOrder', purchaseOrder);
      console.log('Purchase Order created:', response.data);
    } catch (error) {
      console.error('Error creating Purchase Order:', error.response?.data || error.message);
    }
  };
  

  return (
    <div className="purchase-order">
      <h2>Add Purchase Order</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="vendorName">Vendor*:</label>
            <input type="text" id="vendorName" value={purchaseOrder.vendorName} onChange={handleChange} placeholder="Vendor Name" required />
          </div>
          <div className="form-group">
            <label htmlFor="poDate">PO Date:</label>
            <input type="date" id="poDate" value={purchaseOrder.poDate} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="deliveryDate">Delivery Date:</label>
            <input type="date" id="deliveryDate" value={purchaseOrder.deliveryDate} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="currencyCode">Currency Code*:</label>
            <input type="text" id="currencyCode" value={purchaseOrder.currencyCode} onChange={handleChange} placeholder="Currency Code" required />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="referenceNo">Reference No.</label>
            <input type="text" id="referenceNo" value={purchaseOrder.referenceNo} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="invoicingAddress">Invoicing Address</label>
            <input type="text" id="invoicingAddress" value={purchaseOrder.invoicingAddress} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="deliveryAddress">Delivery Address</label>
            <input type="text" id="deliveryAddress" value={purchaseOrder.deliveryAddress} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="contactPerson">Contact Person</label>
            <input type="text" id="contactPerson" value={purchaseOrder.contactPerson} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="contactEmail">Contact Email</label>
            <input type="email" id="contactEmail" value={purchaseOrder.contactEmail} onChange={handleChange} />
          </div>
        </div>
        <table className="item-table">
          <thead>
            <tr>
              <th>Category</th>
              <th>Item Name</th>
              <th>Vendor's Item Code</th>
              <th>MSS No.</th>
              <th>HSN Code</th>
              <th>Item Code</th>
              <th>Unit</th>
              <th>Quantity</th>
              <th>Standard Rate</th>
              <th>VAT %</th>
              <th>Total Amount</th>
              <th>Remarks</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {purchaseOrder.items.map((item, index) => (
              <tr key={index}>
                <td>
                  <select id="category" value={item.category} onChange={(e) => handleItemChange(index, e)}>
                    <option>Consumables</option>
                    <option>ELectronics</option>
                    {/* Add more options as needed */}
                  </select>
                </td>
                <td><input type="text" id="itemName" value={item.itemName} onChange={(e) => handleItemChange(index, e)} placeholder="Item Name" /></td>
                <td><input type="text" id="vendorItemCode" value={item.vendorItemCode} onChange={(e) => handleItemChange(index, e)} /></td>
                <td><input type="text" id="mssNo" value={item.mssNo} onChange={(e) => handleItemChange(index, e)} /></td>
                <td><input type="text" id="hsnCode" value={item.hsnCode} onChange={(e) => handleItemChange(index, e)} /></td>
                <td><input type="text" id="itemCode" value={item.itemCode} onChange={(e) => handleItemChange(index, e)} /></td>
                <td><input type="text" id="unit" value={item.unit} onChange={(e) => handleItemChange(index, e)} /></td>
                <td><input type="number" id="quantity" value={item.quantity} onChange={(e) => handleItemChange(index, e)} /></td>
                <td><input type="number" id="standardRate" value={item.standardRate} onChange={(e) => handleItemChange(index, e)} /></td>
                <td><input type="number" id="vatPercentage" value={item.vatPercentage} onChange={(e) => handleItemChange(index, e)} /></td>
                <td><input type="number" id="totalAmount" value={item.totalAmount} onChange={(e) => handleItemChange(index, e)} /></td>
                <td><input type="text" id="remarks" value={item.remarks} onChange={(e) => handleItemChange(index, e)} /></td>
                <td>
                  <button type="button" className="delete-btn" onClick={() => removeItemRow(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button type="button" className="add-row-btn" onClick={addItemRow}>+ Add New Row</button>
        <div className="items-count">Items Count: {purchaseOrder.items.length}</div>
        <div className="terms-conditions">
          <label>Select Terms & Conditions:</label>
          <textarea id="termsConditions" value={purchaseOrder.remarks} onChange={handleChange}></textarea>
        </div>
        <div className="totals">
          <div className="total-row">
            <span>SubTotal:</span>
            <input type="number" readOnly value={purchaseOrder.subTotal} />
          </div>
          <div className="total-row">
            <span>VAT:</span>
            <input type="number" readOnly value={purchaseOrder.vat} />
          </div>
          <div className="total-row">
            <span>Total Amount:</span>
            <input type="number" readOnly value={purchaseOrder.totalAmount} />
          </div>
          <div className="total-row">
            <span>Payment Mode:*</span>
            <select id="paymentMode" value={purchaseOrder.paymentMode} onChange={handleChange}>
              <option>Credit</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="total-row">
            <span>Remarks:</span>
            <textarea id="remarks" value={purchaseOrder.remarks} onChange={handleChange}></textarea>
          </div>
          <div className="total-row">
            <span>In Words:</span>
            <span>Only</span>
          </div>
        </div>
        <div className="form-actions">
          <button type="submit" className="submit-btn">ADD Purchase Order</button>
          <button type="button" className="discard-btn">Discard Changes</button>
        </div>
      </form>
    </div>
  );
};

export default CreatePurchaseOrder;
