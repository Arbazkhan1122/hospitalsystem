import React, { useState } from 'react';
import './SettingTerm.css';
import ReturnForm from './ReturnForm';

const StoreBreakageItem = () => {
  const [showReturnForm, setShowReturnForm] = useState(false);

  const handleAddBreakageClick = () => {
    setShowReturnForm(true); // Show the ReturnForm component when the button is clicked
  };

  const handleCloseReturnForm = () => {
    setShowReturnForm(false); // Hide the ReturnForm component
  };
  return (
    <div className="setting-terms-container">
 <button className="setting-terms-add-terms-btn" onClick={handleAddBreakageClick}>
        Add Breakage Item
      </button>      
      <div className="setting-terms-search-container">
        <input type="text" placeholder="Search" className="search-input" />
        {/* <span className="search-icon">🔍</span> */}
      </div>
      
      <div className="setting-terms-results-print">
        <span>Showing 0 / 0 results</span>
        <button className="setting-terms-print-btn">Print</button>
      </div>
      
      <div className='setting-terms-setting-term-ta'>
      <table className="setting-terms-terms-table">
        <thead>
          <tr>
            <th>Breakage Date</th>
            <th>Breakage Id</th>
            <th>Total  Qty</th>
            <th>Sub total</th>
            <th>Discount Amount</th>
            <th>VAT Amount</th>
            <th>Totall Amount</th>
            <th>Remark</th>
            <th>Is Active</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="9" className="setting-terms-no-rows">No Rows To Show</td>
          </tr>
        </tbody>
      </table>
      
      <div className="setting-terms-pagination">
        <span>0 to 0 of 0</span>
        <button className="setting-terms-page-btn">First</button>
        <button className="setting-terms-page-btn">Previous</button>
        <span>Page 0 of 0</span>
        <button className="setting-terms-page-btn">Next</button>
        <button className="setting-terms-page-btn">Last</button>
      </div>
      </div>
      {showReturnForm && (
        <div className="return-form-overlay-model">
          <div className="return-form-container-com">
            <ReturnForm />
            <button className="return-form-com-close-btn" onClick={handleCloseReturnForm}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

  
export default StoreBreakageItem;
