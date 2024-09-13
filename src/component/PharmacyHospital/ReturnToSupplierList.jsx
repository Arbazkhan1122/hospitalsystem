import React from 'react';
import './ReturnToSupplier.css';

const ReturnToSupplier = () => {
  return (
    <div className="return-to-supplier-container">
      
      <div className="return-to-supplier-filters-container">
        <button className="return-to-supplier-search-button">Search</button>
      </div>
      
      <div className="return-to-supplier-date-filter-container">
        <div className="return-to-supplier-date-filter">
          <label>From:</label>
          <input type="date" className="return-to-supplier-input-date" defaultValue="2024-08-15" />
        </div>
        
        <div className="return-to-supplier-date-filter">
          <label>To:</label>
          <input type="date" className="return-to-supplier-input-date" defaultValue="2024-08-22" />
        </div>
        
        <div className="return-to-supplier-date-filter-actions">
          <button className="return-to-supplier-star-button">★</button>
          <button className="return-to-supplier-minus-button">-</button>
          <button className="return-to-supplier-ok-button">OK</button>
        </div>
      </div>
      
      <div className="return-to-supplier-search-bar">
        <input type="text" placeholder="Search" className="return-to-supplier-search-input" />
        <button className="return-to-supplier-search-icon-button">
          <i className="fa fa-search"></i>
        </button>
      </div>
      <div className="return-to-supplier-print-container">
        <span>Showing 0 / 0 results</span>
        <button className="return-to-supplier-print-button">Print</button>
      </div>
      <div className='return-to-supplier-retuurn-store-supplier'>
      <table className="return-to-supplier-data-table">
        <thead>
          <tr>
            <th>CreaditNote No</th>
            
            <th>Supplier Name</th>
            <th>Return date</th>
            <th>TotalQty</th>
            <th>Sub Total</th>
            <th>Discount Amount</th>
            <th>VAT Amount</th>
            <th>CC Amount</th>
            <th>Total Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="10" className="return-to-supplier-no-rows">
              No Rows To Show
            </td>
          </tr>
        </tbody>
      </table>

      {/* <div className="return-to-supplier-pagination-container">
        <span>0 to 0 of 0</span>
        <button className="return-to-supplier-pagination-button" disabled>
          First
        </button>
        <button className="return-to-supplier-pagination-button" disabled>
          Previous
        </button>
        <span>Page 0 of 0</span>
        <button className="return-to-supplier-pagination-button" disabled>
          Next
        </button>
        <button className="return-to-supplier-pagination-button" disabled>
          Last
        </button>
      </div> */}
      </div>

      
    </div>
  );
};

export default ReturnToSupplier;
