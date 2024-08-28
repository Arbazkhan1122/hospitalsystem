import React, { useState } from 'react';
import './ReturnForm.css';

const ReturnForm = () => {
  const [formData, setFormData] = useState({
    itemName: 'tissue',
    batchNo: '',
    goodReceiptNo: '2',
    availableQty: '95',
    itemRate: '12',
    returnRate: '0',
    quantity: '0',
    subtotal: '0',
    returnDiscountAmt: '0',
    returnVATAmt: '0',
    returnCCAmt: '0',
    totalAmount: '0',
  });

  return (
    <div className="return-form-component">
      <table className="return-form-table">
        <thead>
          <tr>
            <th></th>
            <th>Item Name</th>
            <th>Batch No</th>
            <th>Good Receipt No</th>
            <th>Available Qty</th>
            <th>Item Rate</th>
            <th>Return Rate</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th>Return Discount Amt</th>
            <th>Return VAT Amt</th>
            <th>Return CC Amt</th>
            <th>Total Amount</th>
          </tr>
        </thead>
        <tr>
          <td>
            <button className="return-delete-btn">×</button>
          </td>
          <td>
            <input
              type="text"
              value={formData.itemName}
              onChange={(e) => setFormData({ ...formData, itemName: e.target.value })}
            />
          </td>
          <td>
            <select
              value={formData.batchNo}
              onChange={(e) => setFormData({ ...formData, batchNo: e.target.value })}
            >
              <option value=""></option>
              {/* Add options here */}
            </select>
          </td>
          <td>
            <input
              type="text"
              value={formData.goodReceiptNo}
              onChange={(e) => setFormData({ ...formData, goodReceiptNo: e.target.value })}
            />
          </td>
          <td>
            <input
              type="text"
              value={formData.availableQty}
              onChange={(e) => setFormData({ ...formData, availableQty: e.target.value })}
            />
          </td>
          <td>
            <input
              type="text"
              value={formData.itemRate}
              onChange={(e) => setFormData({ ...formData, itemRate: e.target.value })}
            />
          </td>
          <td>
            <input
              type="text"
              value={formData.returnRate}
              onChange={(e) => setFormData({ ...formData, returnRate: e.target.value })}
            />
          </td>
          <td>
            <input
              type="text"
              value={formData.quantity}
              onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
            />
          </td>
          <td>
            <input
              type="text"
              value={formData.subtotal}
              onChange={(e) => setFormData({ ...formData, subtotal: e.target.value })}
            />
          </td>
          <td>
            <input
              type="text"
              value={formData.returnDiscountAmt}
              onChange={(e) => setFormData({ ...formData, returnDiscountAmt: e.target.value })}
            />
          </td>
          <td>
            <input
              type="text"
              value={formData.returnVATAmt}
              onChange={(e) => setFormData({ ...formData, returnVATAmt: e.target.value })}
            />
          </td>
          <td>
            <input
              type="text"
              value={formData.returnCCAmt}
              onChange={(e) => setFormData({ ...formData, returnCCAmt: e.target.value })}
            />
          </td>
          <td>
            <input
              type="text"
              value={formData.totalAmount}
              onChange={(e) => setFormData({ ...formData, totalAmount: e.target.value })}
            />
          </td>
        </tr>
      </table>
      <div className="return-summary">
        <div className="summary-item-com">
          <label>SubTotal:</label>
          <input type="text" value="0" readOnly />
        </div>
        <div className="summary-item-com">
          <label>Discount:</label>
          <input type="text" value="0" readOnly />
        </div>
        <div className="summary-item-com">
          <label>VAT Amount:</label>
          <input type="text" value="0" readOnly />
        </div>
        <div className="summary-item-com">
          <label>CC Amount:</label>
          <input type="text" value="0" readOnly />
        </div>
        <div className="summary-item-com">
          <label>Total Amount:</label>
          <input type="text" value="0" readOnly />
        </div>
        <div className="summary-item-com-in-words">In Words : Only.</div>
      </div>
     
      <div className="summary-item-com-buttons">
        <button className="summary-item-com-return-btn">Return</button>
        <button className="summary-item-com-cancel-btn">Cancel</button>
      </div>
    </div>
  );
};

export default ReturnForm;
