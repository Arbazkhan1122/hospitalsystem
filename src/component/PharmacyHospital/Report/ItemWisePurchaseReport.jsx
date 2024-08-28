import React from 'react';
import './ItemWisePurchaseReport.css';

const ItemWisePurchaseReportCom = () => {
  return (
    <div className="iten-purchase-container">
      <h2 className="iten-purchase-header">⚛ Item Wise Purchase Report</h2>
      <div className="iten-purchase-filterRow">
        <div>
          <span>From: </span>
          <input type="date" defaultValue="2024-08-22" />
          <span> To: </span>
          <input type="date" defaultValue="2024-08-22" />
        </div>
        <div>
          <span>Select Item: </span>
          <select>
            <option>--Select Item--</option>
          </select>
        </div>
        <div>
          <span>Select Generic: </span>
          <select>
            <option>--Select Generic--</option>
          </select>
        </div>
      </div>
      <div className="iten-purchase-filterRow">
        <div>
          <span>Bill No.: </span>
          <input type="text" />
        </div>
        <div>
          <span>GR No.: </span>
          <input type="text" />
        </div>
        <div>
          <span>Supplier Name: </span>
          <select>
            <option>--Select Supplier--</option>
          </select>
        </div>
        <button className="iten-purchase-showReportButton">Show Report</button>
      </div>
      <div className="iten-purchase-searchRow">
        <input type="text" placeholder="Search" className="iten-purchase-searchInput" />
       
      </div>
      <div className='item-purchase-btn'>
      <span>Showing 0 / 0 results</span>
        <button className="iten-purchase-button">Export</button>
        <button className="iten-purchase-button">Print</button>
      </div>
      <div className='item-purchase-ta'>
      <table className="iten-purchase-table">
        <thead>
          <tr>
            <th>GR Date</th>
            <th>GR NO.</th>
            <th>Supplier</th>
            <th>Bill ...</th>
            <th>Generic Name</th>
            <th>Item</th>
            <th>Batch</th>
            <th>Expiry</th>
            <th>Qua...</th>
            <th>Purchase Rate</th>
            <th>SubTotal</th>
            <th>VAT Amt.</th>
            <th>TotalAmount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="13" className="iten-purchase-noRows">No Rows To Show</td>
          </tr>
        </tbody>
      </table>
      <div className="iten-purchase-pagination">
        <button className="iten-purchase-paginationButton">First</button>
        <button className="iten-purchase-paginationButton">Previous</button>
        <span>Page 0 of 0</span>
        <button className="iten-purchase-paginationButton">Next</button>
        <button className="iten-purchase-paginationButton">Last</button>
      </div>
      </div>
      {/* <div className="iten-purchase-summary">
        <h3>Summary</h3>
        <div>Total Purchase Quantity: 0</div>
        <div>Total Purchase Value (Excluding VAT): 0</div>
        <div>Total VAT Amount: 0</div>
        <div>Total Purchase Value: 0</div>
      </div>
      */}
    </div>
  );
};

export default ItemWisePurchaseReportCom;
