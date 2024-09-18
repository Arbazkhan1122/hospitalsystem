import React, { useState, useEffect, useRef } from 'react';
import './CreateReturnToVendor.css';
import { startResizing } from '../../TableHeadingResizing/resizableColumns';
import { API_BASE_URL } from '../../api/api';

const CreateReturnToVendor = ({ onCancel }) => { 
  const [columnWidths,setColumnWidths] = useState({});
  const tableRef = useRef(null);
  const [formData, setFormData] = useState({
    fiscalYear: '2024',
    vendor: '',
    grNo: '',
    creditNoteNo: '',
    returnOn: new Date().toISOString().split('T')[0], 
    items: [{ 
      itemName: '',
      batchNo: '',
      goodReceiptNo: '',
      availableQty: 0,
      itemRate: 0,
      returnRate: 0,
      quantity: 0,
      subtotal: 0,
      returnDiscountAmt: 0,
      returnVATAmt: 0,
      returnCCAmt: 0,
      totalAmount: 0,
      remark: ''
    }]
  });

  const [totalSubTotal, setTotalSubTotal] = useState(0);
  const [totalVat, setTotalVat] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const calculateTotals = () => {
      const subTotal = formData.items.reduce((acc, item) => acc + parseFloat(item.subtotal || 0), 0);
      const vat = formData.items.reduce((acc, item) => acc + parseFloat(item.returnVATAmt || 0), 0);
      const amount = formData.items.reduce((acc, item) => acc + parseFloat(item.totalAmount || 0), 0);

      setTotalSubTotal(subTotal.toFixed(2));
      setTotalVat(vat.toFixed(2));
      setTotalAmount(amount.toFixed(2));
    };

    calculateTotals();
  }, [formData.items]);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const items = [...formData.items];
    items[index][name] = value;
    setFormData({
      ...formData,
      items
    });
  };

  const handleAddRow = () => {
    setFormData({
      ...formData,
      items: [...formData.items, { 
        itemName: '',
        batchNo: '',
        goodReceiptNo: '',
        availableQty: 0,
        itemRate: 0,
        returnRate: 0,
        quantity: 0,
        subtotal: 0,
        returnDiscountAmt: 0,
        returnVATAmt: 0,
        returnCCAmt: 0,
        totalAmount: 0,
        remark: ''
      }]
    });
  };

  const handleRemoveRow = (index) => {
    const items = [...formData.items];
    items.splice(index, 1);
    setFormData({
      ...formData,
      items
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_BASE_URL}/returnToVendor`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Data submitted successfully');
        onCancel();
      } else {
        alert('Submission failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="create-ReturnToVendor">
      <h2>Return To Vendor</h2>
      <form onSubmit={handleSubmit}>
        <div className="create-return-to-vendor-form-row">
          <label>Fiscal Year:</label>
          <select name="fiscalYear" value={formData.fiscalYear} onChange={e => setFormData({ ...formData, fiscalYear: e.target.value })}>
            <option value="2024">2024</option>
          </select>
          <label>Vendor:</label>
          <input type="text" name="vendor" value={formData.vendor} onChange={e => setFormData({ ...formData, vendor: e.target.value })} required />
          <label>GR No.:</label>
          <input type="text" name="grNo" value={formData.grNo} onChange={e => setFormData({ ...formData, grNo: e.target.value })} required />
          <label>Credit Note No.:</label>
          <input type="text" name="creditNoteNo" value={formData.creditNoteNo} onChange={e => setFormData({ ...formData, creditNoteNo: e.target.value })} required />
          <label>Return On:</label>
          <input type="date" name="returnOn" value={formData.returnOn} onChange={e => setFormData({ ...formData, returnOn: e.target.value })} required />
        </div>
        <div className="create-return-to-vendor-table-container">
        <table className="patientList-table" ref={tableRef}>
          <thead>
            <tr>
              {[
                 "",
                 "Item Name",
                 "Batch No",
                 "Good Receipt No",
                 "Available Qty",
                 "Item Rate",
                 "Return Rate",
                 "Quantity",
                 "Subtotal",
                 "Return Discount Amt",
                 "Return VAT Amt",
                 "Return CC Amt",
                 "Total Amount",
                 "Remark",
                 ""
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
              {formData.items.map((item, index) => (
                <tr key={index}>
                  <td><button type="button" className='create-render-to-remove' onClick={() => handleRemoveRow(index)}>X</button></td>
                  <td><input className='Inv-Return-Input' type="text" name="itemName" value={item.itemName} onChange={e => handleChange(e, index)} /></td>
                  <td><input className='Inv-Return-Input' type="text" name="batchNo" value={item.batchNo} onChange={e => handleChange(e, index)} /></td>
                  <td><input className='Inv-Return-Input' type="text" name="goodReceiptNo" value={item.goodReceiptNo} onChange={e => handleChange(e, index)} /></td>
                  <td><input className='Inv-Return-Input' type="number" name="availableQty" value={item.availableQty} onChange={e => handleChange(e, index)} /></td>
                  <td><input className='Inv-Return-Input' type="number" name="itemRate" value={item.itemRate} onChange={e => handleChange(e, index)} /></td>
                  <td><input className='Inv-Return-Input' type="number" name="returnRate" value={item.returnRate} onChange={e => handleChange(e, index)} /></td>
                  <td><input className='Inv-Return-Input' type="number" name="quantity" value={item.quantity} onChange={e => handleChange(e, index)} /></td>
                  <td><input className='Inv-Return-Input' type="number" name="subtotal" value={item.subtotal} onChange={e => handleChange(e, index)} /></td>
                  <td><input className='Inv-Return-Input' type="number" name="returnDiscountAmt" value={item.returnDiscountAmt} onChange={e => handleChange(e, index)} /></td>
                  <td><input className='Inv-Return-Input' type="number" name="returnVATAmt" value={item.returnVATAmt} onChange={e => handleChange(e, index)} /></td>
                  <td><input className='Inv-Return-Input' type="number" name="returnCCAmt" value={item.returnCCAmt} onChange={e => handleChange(e, index)} /></td>
                  <td><input className='Inv-Return-Input' type="number" name="totalAmount" value={item.totalAmount} onChange={e => handleChange(e, index)} /></td>
                  <td><input className='Inv-Return-Input' type="text" name="remark" value={item.remark} onChange={e => handleChange(e, index)} /></td>
                  <td><button type="button" className='create-render-to-add' onClick={handleAddRow}>+</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className='create-return-to-vendor-totals-container'>
          <div className="create-return-to-vendor-totals">
            <div className="create-return-to-vendor-total-field">
              <label>SubTotal:</label>
              <input type="text" value={totalSubTotal} readOnly />
            </div>
            <div className="create-return-to-vendor-total-field">
              <label>VAT:</label>
              <input type="text" value={totalVat} readOnly />
            </div>
            <div className="create-return-to-vendor-total-field">
              <label>Total Amount:</label>
              <input type="text" value={totalAmount} readOnly />
            </div>
            <div className="create-return-to-vendor-total-field">
            <label>In Words:</label>
          </div>
          </div>
        </div>
        <div className="create-return-to-vendor-form-row">
          <button className='create-return-to-vendor-form-row-submit-btn' type="submit">Submit</button>
          <button className='create-return-to-vendor-form-row-cancel' type="button" onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default CreateReturnToVendor;
