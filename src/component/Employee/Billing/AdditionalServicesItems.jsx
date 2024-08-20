import React from 'react';
import './AdditionalServicesItems.css';

const AdditionalServicesItems = () => {
  return (
    <div className="additional-service-container">
      <div className="additional-service-header">
        <div className="additional-service-title">+ Additional Service Item</div>
       
      </div>
      <div className="additional-service-search-box">
          <input type="text" placeholder="Search..." />
          {/* <button className='additional-ser'>🔍</button> */}
        </div>
     <div className='additional-service-ta'>
     <table className='additional-service-table'>
        <thead>
          <tr>
            <th>Group Name</th>
            <th>Price Category</th>
            <th>Service Item</th>
            <th>Minimum Charge A...</th>
            <th>Use Item Self Price?</th>
            <th>Percentage of Parent Ite...</th>
            <th>Percentage Of Parent Ite...</th>
            <th>With PreAnaesthe...</th>
            <th>IsPreAnaesthesia?</th>
            <th>IsUpServiceItem</th>
            <th>IsOpServiceItem</th>
            <th>IsActive</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="13" className="additional-service-no-results">No Rows To Show</td>
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

export default AdditionalServicesItems;
