/* Mohini_AddGRItemForm_WholePage_14/sep/2024 */
import React from 'react';
import './AddGRItemForm.css';

const AddGRItemForm = ({ onClose }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted");
    onClose();
  };
  return (
    <div className="add-gr-item-modal-form-com">
      <div className="add-gr-item-modal-content">
        <button className="add-gr-item-close-btn" onClick={onClose}>×</button>
        <h5>Add GR Item</h5>
        <form onSubmit={handleSubmit}>
          <div className="add-gritem-form-row">
            <div className="add-gritem-form-field">
              <label>Generic Name:</label>
              <select>
                <option>Select Generic Name</option>
              </select>
              <span className="add-supplier-help-icon">?</span>

            </div>
            <div className="add-gritem-form-field">
              <label>Item Name*:</label>
              <select>
                <option>Select an Item</option>
              </select>
              <span className="add-supplier-help-icon">?</span>

            </div>
            <div className="add-gritem-form-field">
              <label>Batch No:</label>
              <input type="text" placeholder="Enter Batch No" />
            </div>
          </div>

          <div className="add-gritem-form-row">
            <div className="add-gritem-form-field">
              <label>Rack No:</label>
              <input type="text" placeholder="Enter Rack No" />
            </div>
            <div className="add-gritem-form-field">
              <label>Exp. Date:</label>
              <input type="date" />
            </div>
            <div className="add-gritem-form-field">
              <label>Item Qty*:</label>
              <input type="number" placeholder="Enter Item Quantity" />
            </div>
          </div>

          <div className="add-gritem-form-row">
            <div className="add-gritem-form-field">
              <label>Total Qty:</label>
              <input type="number" placeholder="Enter Total Quantity" />
            </div>
            <div className="add-gritem-form-field">
              <label>Rate*:</label>
              <input type="number" placeholder="Enter Rate" />
            </div>
            <div className="add-gritem-form-field">
              <label>Margin%:</label>
              <input type="number" placeholder="Enter Margin Percentage" />
            </div>
          </div>

          <div className="add-gritem-form-row">
            <div className="add-gritem-form-field">
              <label>MRP:</label>
              <input type="number" placeholder="Enter MRP" />
            </div>
            <div className="add-gritem-form-field">
              <label>CC Charge%:</label>
              <input type="number" placeholder="Enter CC Charge Percentage" />
            </div>
            <div className="add-gritem-form-field">
              <label>CC Amount:</label>
              <input type="number" placeholder="Enter CC Amount" />
            </div>
          </div>

          <div className="add-gritem-form-row">
            <div className="add-gritem-form-field">
              <label>Sub-Total:</label>
              <input type="number" placeholder="Enter Sub-Total" />
            </div>
            <div className="add-gritem-form-field">
              <label>Discount%:</label>
              <input type="number" placeholder="Enter Discount Percentage" />
            </div>
            <div className="add-gritem-form-field">
              <label>Discount Amount:</label>
              <input type="number" placeholder="Enter Discount Amount" />
            </div>
          </div>

          <div className="add-gritem-form-row">
            <div className="add-gritem-form-field">
              <label>VAT%:</label>
              <input type="number" placeholder="Enter VAT Percentage" />
            </div>
            <div className="add-gritem-form-field">
              <label>VAT Amount:</label>
              <input type="number" placeholder="Enter VAT Amount" />
            </div>
            <div className="add-gritem-form-field">
              <label>Total Amount:</label>
              <input type="number" placeholder="Enter Total Amount" />
            </div>
          </div>

          <div className="add-gritem-form-actions">
            <button type="submit" className="add-gritem-submit-btn">Add Item</button>
            <button type="button" className="add-gritem-cancel-btn" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddGRItemForm;
/* Mohini_AddGRItemForm_WholePage_14/sep/2024 */
