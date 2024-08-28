import React, { useState } from 'react';
import './GoodsReceiptForm.css';
import AddSupplierForm from './AddSupplierForm';
import AddGRItemForm from './AddGRItemForm';

const GoodsReceiptForm = () => {
  const [isFormOpen, setIsFormOpen] = useState(true);
  const [itemCount, setItemCount] = useState(0);
  const [isAddSupplierModalOpen, setIsAddSupplierModalOpen] = useState(false);
  const [isAddGRItemFormOpen, setIsAddGRItemFormOpen] = useState(false);

  const handleClose = () => {
    setIsFormOpen(false);
  };

  const handleOpenSupplierModal = () => {
    setIsAddSupplierModalOpen(true);
  };

  const handleCloseSupplierModal = () => {
    setIsAddSupplierModalOpen(false);
  };

  const handleOpenAddGRItemForm = () => {
    setIsAddGRItemFormOpen(true);
  };

  const handleCloseAddGRItemForm = () => {
    setIsAddGRItemFormOpen(false);
  };

  if (!isFormOpen) {
    return null;
  }

  return (
    <div className="goods-receipt-form-com">
      <button className="goods-receipt-close-btn" onClick={handleClose}>×</button>
      <h2>Add Good Receipt</h2>
      <form>
        <div className="goods-receipt-form-row">
          <div className="goods-receipt-form-group">
            <label>Supplier Bill Date:</label>
            <input type="date" defaultValue="2024-08-24" />
          </div>
          <div className="goods-receipt-form-group">
            <label>Goods Receipt Date:</label>
            <input type="date" defaultValue="2024-08-24" />
          </div>
        </div>
        <div className="goods-receipt-form-row">
          <div className="goods-receipt-form-group">
            <label>Supplier Name*:</label>
            <select>
              <option>Select Supplier</option>
            </select>
          </div>
          <div className="input-container-question-box">
            <input type="text" />
            <span className="question-icon" onClick={handleOpenSupplierModal}>?</span>
          </div>
          <div className="goods-receipt-form-group">
            <label>Invoice*:</label>
            <input type="text" placeholder="Invoice No" />
          </div>
          <div className="goods-receipt-form-group">
            <label>Payment Mode*:</label>
            <select>
              <option>Credit</option>
            </select>
          </div>
          <div className="goods-receipt-form-group">
            <label>Credit Period:</label>
            <input type="number" defaultValue="0" />
          </div>
        </div>
        <table className='goods-receipt-table'>
          <thead>
            <tr>
              <th>Generic Name</th>
              <th>Item Name</th>
              <th>Batch No</th>
              <th>Rack No</th>
              <th>Exp Date</th>
              <th>Item Qty</th>
              <th>Free Qty</th>
              <th>Total Qty</th>
              <th>Rate</th>
              <th>Margin%</th>
              <th>SalePrice</th>
              <th>Free Amt</th>
              <th>CC Charge%</th>
              <th>Sub Total</th>
              <th>Discount Amt</th>
              <th>VAT Amt</th>
              <th>Total Amount</th>
            </tr>
          </thead>
          <tbody>
            {/* Table rows would be dynamically added here */}
          </tbody>
        </table>
        <button
          type="button"
          className="goods-receipt-add-item-btn"
          onClick={handleOpenAddGRItemForm}
        >
          + Add New Item
        </button>
        <p>Items Count: {itemCount}</p>
        <div className="goods-receipt-totals-section">
          <div className="goods-receipt-totals-column">
            <div className="goods-receipt-total-row">
              <label>Taxable Sub Total:</label>
              <input type="number" defaultValue="0" readOnly />
            </div>
            <div className="goods-receipt-total-row">
              <label>Non-Taxable Sub Total:</label>
              <input type="number" defaultValue="0" readOnly />
            </div>
            <div className="goods-receipt-total-row">
              <label>Sub Total:</label>
              <input type="number" defaultValue="0" readOnly />
            </div>
            <div className="goods-receipt-total-row">
              <label>Discount Percent:</label>
              <input type="number" defaultValue="0" />
            </div>
          </div>
          <div className="goods-receipt-totals-column">
            <div className="goods-receipt-total-row">
              <label>Discount Amount:</label>
              <input type="number" defaultValue="0" readOnly />
            </div>
            <div className="goods-receipt-total-row">
              <label>VAT%:</label>
              <input type="number" defaultValue="0" />
            </div>
            <div className="goods-receipt-total-row">
              <label>VAT Total:</label>
              <input type="number" defaultValue="0" readOnly />
            </div>
            <div className="goods-receipt-total-row">
              <label>CC Charge:</label>
              <input type="number" defaultValue="0" readOnly />
            </div>
          </div>
          <div className="goods-receipt-totals-column">
            <div className="goods-receipt-total-row">
              <label>Adjustment:</label>
              <input type="number" defaultValue="0" />
            </div>
            <div className="goods-receipt-total-row">
              <label>Total Amount:</label>
              <input type="number" defaultValue="0" readOnly />
            </div>
            <div className="goods-receipt-total-row">
              <label>Remarks:</label>
              <input type="text" />
            </div>
            <div className="goods-receipt-total-row">
              <label>In Words:</label>
              <span>Only.</span>
            </div>
          </div>
        </div>
        <div className="goods-receipt-form-actions">
          <button className="goods-receipt-print-btn">Print Receipt</button>
          <button className="goods-receipt-discard-btn">Discard</button>
        </div>
      </form>
      {isAddSupplierModalOpen && <AddSupplierForm onClose={handleCloseSupplierModal} />}
      {isAddGRItemFormOpen && (
        <AddGRItemForm onClose={handleCloseAddGRItemForm} />
      )}
    </div>
  );
};

export default GoodsReceiptForm;
