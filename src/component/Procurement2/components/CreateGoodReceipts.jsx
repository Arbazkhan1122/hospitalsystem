// AddGoodsReceipt.js
import React, { useState } from 'react';
import './CreateGoodReceipts.css';

const AddGoodsReceipt = () => {
  const [formData, setFormData] = useState({
    vendorBillDate: '25-08-2024',
    goodsReceiptDate: '25-08-2024',
    vendorName: '',
    billNo: '',
    paymentMode: 'Credit',
    creditPeriod: '0',
    addQualityInspection: false,
    checkedBy: 'Mr. admin admin',
    items: [
      {
        category: 'Consumables',
        itemName: '',
        batchNo: '',
        expiryDate: '',
        quantity: '0',
        freeQty: '0',
        rate: '0',
        dis: '0',
        vat: '0',
        ccCharge: '0',
        otherCharge: '0',
        totalAmount: '0',
        remarks: ''
      }
    ],
    subTotal: '0',
    ccCharge: '0',
    discountAmount: '0',
    vat: '0',
    otherCharges: '0',
    totalAmount: '0',
    remarks: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleItemChange = (index, field, value) => {
    const updatedItems = [...formData.items];
    updatedItems[index][field] = value;
    setFormData({ ...formData, items: updatedItems });
  };

  const addNewRow = () => {
    setFormData({
      ...formData,
      items: [...formData.items, { /* Initialize with default values */ }]
    });
  };

  const removeRow = (index) => {
    const updatedItems = formData.items.filter((_, i) => i !== index);
    setFormData({ ...formData, items: updatedItems });
  };

  return (
    <div className="add-goods-receipt">
      <h2>Add Goods Receipt</h2>
      
      <div className="date-fields">
        <div className="form-group">
          <label>Vendor Bill Date:</label>
          <input type="date" name="vendorBillDate" value={formData.vendorBillDate} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Goods Receipt Date:</label>
          <input type="date" name="goodsReceiptDate" value={formData.goodsReceiptDate} onChange={handleInputChange} />
        </div>
      </div>

      <div className="vendor-details">
        <div className="form-group">
          <label>Vendor Name*:</label>
          <input type="text" name="vendorName" value={formData.vendorName} onChange={handleInputChange} placeholder="Search Vendor Name" />
          <button className="info-button">?</button>
        </div>
        <div className="form-group">
          <label>Bill No*:</label>
          <input type="text" name="billNo" value={formData.billNo} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Payment Mode*:</label>
          <select name="paymentMode" value={formData.paymentMode} onChange={handleInputChange}>
            <option value="Credit">Credit</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="form-group">
          <label>Credit Period:</label>
          <input type="number" name="creditPeriod" value={formData.creditPeriod} onChange={handleInputChange} />
        </div>
      </div>

      <table className="items-table">
        <thead>
          <tr>
            <th>Category</th>
            <th>ItemName</th>
            <th>BatchNo</th>
            <th>Expiry Date</th>
            <th>Quantity</th>
            <th>FreeQty</th>
            <th>Rate</th>
            <th>Dis(%)</th>
            <th>VAT(%)</th>
            <th>CcCharge(%)</th>
            <th>Other Charge</th>
            <th>TotalAmount</th>
            <th>Remarks</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {formData.items.map((item, index) => (
            <tr key={index}>
              <td>
                <select
                  value={item.category}
                  onChange={(e) => handleItemChange(index, 'category', e.target.value)}
                >
                  <option value="Consumables">Consumables</option>
                  {/* Add more options as needed */}
                </select>
              </td>
              <td>
                <input
                  type="text"
                  value={item.itemName}
                  onChange={(e) => handleItemChange(index, 'itemName', e.target.value)}
                />
                <button className="info-button">?</button>
              </td>
              {/* Add more table cells for other item fields */}
              <td>
                <button className="remove-button" onClick={() => removeRow(index)}>X</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="add-row-button" onClick={addNewRow}>+ Add New Row</button>
      <div className="items-count">Items Count: {formData.items.length}</div>

      <div className="quality-inspection">
        <label>
          <input
            type="checkbox"
            checked={formData.addQualityInspection}
            onChange={(e) => setFormData({ ...formData, addQualityInspection: e.target.checked })}
          />
          Add Quality Inspection
        </label>
      </div>

      <div className="checked-by">
        <button className="remove-button">-</button>
        <span className="checked-label">Checked By</span>
        <input type="text" value={formData.checkedBy} onChange={(e) => setFormData({ ...formData, checkedBy: e.target.value })} />
        <button className="add-button">+</button>
      </div>

      <div className="totals">
        <div className="form-group">
          <label>SubTotal:</label>
          <input type="number" name="subTotal" value={formData.subTotal} readOnly />
        </div>
        {/* Add more total fields */}
      </div>

      <div className="remarks">
        <label>Remarks:</label>
        <textarea name="remarks" value={formData.remarks} onChange={handleInputChange}></textarea>
        <div>In Words: Only.</div>
      </div>

      <div className="action-buttons">
        <button className="receipt-button">Receipt</button>
        <button className="discard-button">Discard Changes</button>
      </div>
    </div>
  );
};

export default AddGoodsReceipt;