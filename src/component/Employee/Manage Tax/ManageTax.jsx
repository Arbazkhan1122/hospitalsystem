import React from 'react';
import './ManageTax.css'; // Create this CSS file for styling

const ManageTax = () => {
  return (
    <div className="manage-tax-container">
     <div className='managetax-head'>
     <h2>Manage Tax</h2>
     </div>
      <div className="manage-tax-tax-options">
        <label>Select Tax :</label>
        <input type="checkbox" id="vat" name="vat" />
        <label htmlFor="vat">VAT @13%</label>
        <input type="checkbox" id="hst" name="hst" />
        <label htmlFor="hst">HST @5%</label>
        <input type="checkbox" id="none" name="none" defaultChecked />
        <label htmlFor="none">None @0%</label>
      </div>
      <button className="manage-tax-update-button">Update</button>
    </div>
  );
};

export default ManageTax;
