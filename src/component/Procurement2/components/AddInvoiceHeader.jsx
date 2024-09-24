import React from 'react';
import './AddInvoiceHeader.css';

const InvoiceHeaderForm = () => {
  return (
    <div className="invoice-header-form">
      <h2>Add Invoice Header</h2>
      <form>
        <div className="form-row">
          <label htmlFor="hospitalName">
            Hospital Name<span className="required">*</span>
          </label>
          <input
            type="text"
            id="hospitalName"
            placeholder="Enter Hospital Name.."
            required
          />
        </div>

        <div className="form-row">
          <label htmlFor="address">
            Address<span className="required">*</span>
          </label>
          <input
            type="text"
            id="address"
            placeholder="Enter Address.."
            required
          />
        </div>

        <div className="form-row">
          <label htmlFor="telephone">
            Telephone<span className="required">*</span>
          </label>
          <input
            type="tel"
            id="telephone"
            placeholder="Enter Telephone.."
            required
          />
        </div>

        <div className="form-row">
          <label htmlFor="email">
            Email<span className="required">*</span>
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter Email.."
            required
          />
        </div>

        <div className="form-row">
          <label htmlFor="kraPin">KRA PIN</label>
          <input
            type="text"
            id="kraPin"
            placeholder="Enter KRA PIN.."
          />
        </div>

        <div className="form-row">
          <label htmlFor="dda">DDA</label>
          <input
            type="text"
            id="dda"
            placeholder="Enter DDA.."
          />
        </div>

        <div className="form-row">
          <label htmlFor="headerDescription">Header Description</label>
          <input
            type="text"
            id="headerDescription"
            placeholder="Enter Header Description.."
          />
        </div>

        <div className="form-row">
          <label htmlFor="isActive">IsActive</label>
          <input
            type="checkbox"
            id="isActive"
            defaultChecked
          />
        </div>

        <div className="form-row file-upload">
          <label htmlFor="logo">
            Choose Logo Image<span className="required">*</span>
          </label>
          <div className="file-input-wrapper">
            <input
              type="file"
              id="logo"
              accept="image/*"
              required
            />
            <span className="file-input-text">Choose Files</span>
            <span className="file-input-no-file">No file chosen</span>
          </div>
        </div>

        <button type="submit" className="save-button">Save</button>
      </form>
    </div>
  );
};

export default InvoiceHeaderForm;
