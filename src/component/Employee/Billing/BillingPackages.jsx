import React from 'react';
import './AdditionalServicesItems.css';

const BillingPackages = () => {
  return (
    <div className="additional-service-container">
      <div className="additional-service-header">
        <div className="additional-service-title">+ Add Package</div>
      </div>
      <div className="additional-service-search-box">
        <input type="text" placeholder="Search..." />
        {/* <button className='additional-ser'>🔍</button> */}
      </div>
      <div className='additional-service-ta'>
        <table className='additional-service-table'>
          <thead>
            <tr>
              <th>Package Name</th>
              <th>Package Code</th>
              <th>Description</th>
              <th>PriceCategory</th>
              <th>Total Price</th>
              <th>Discount Percent</th>
              <th>Active Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="8" className="additional-service-no-results">No Rows To Show</td>
            </tr>
          </tbody>
        </table>
        <div className="additional-service-pagination">
          <button>First</button>
          <button>Previous</button>
          <span>Page 0 of 0</span>
          <button>Next</button>
          <button>Last</button>
        </div>
        <div className="additional-service-results-info">
          0 to 0 of 0
        </div>
      </div>
    </div>
  );
};

export default BillingPackages;
