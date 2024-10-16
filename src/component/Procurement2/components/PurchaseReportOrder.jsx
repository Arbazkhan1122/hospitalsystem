import React from 'react';
import './PurchaseReportOrder.css'; // Updated CSS file name to match the component

const Pur = () => {
  return (
    <div className="pur">
      <h2>🛒 Purchase Order Report</h2>
      <div className="pur-filters">
        <div className="pur-date-range">
          <label>From:</label>
          <input type="date" defaultValue="2024-07-11" />
          <label>To:</label>
          <input type="date" defaultValue="2024-07-29" />
          <button className="pur-star-button">★</button>
          <button className="pur-more-button">-</button>
        </div>
        <div className="pur-vendor-item-filters">
          <div>
            <label>Vendor Name:</label>
            <select>
              <option>Select Vendor Name</option>
            </select>
          </div>
          <div>
            <label>Item Name:</label>
            <select>
              <option>Select Item Name</option>
            </select>
          </div>
        </div>
        <div className="pur-item-subcategory-filters">
          <div>
            <label>Item Code:</label>
            <input type="text" placeholder="Enter Item Code" />
          </div>
          <div>
            <label>Sub-Category:</label>
            <input type="text" placeholder="Enter Sub-Category" />
          </div>
        </div>
        <div className="pur-item-type-filter">
          <input type="radio" id="all" name="itemType" defaultChecked />
          <label htmlFor="all">All</label>
          <input type="radio" id="consumables" name="itemType" />
          <label htmlFor="consumables">Consumables</label>
          <input type="radio" id="capitalGoods" name="itemType" />
          <label htmlFor="capitalGoods">Capital Goods</label>
        </div>
        <div className="pur-search-bar">
          <input type="text" placeholder="Search" />
          <button>🔍</button>
        </div>
        <button className="pur-report-button">🔍 Report</button>
      </div>
      <div className="pur-results">
        <div className="pur-results-header">
          <span>Showing 0 / 0 results</span>
          <button className="pur-export-button">⤓ Export</button>
          <button className="pur-print-button">Print</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>PO Number</th>
              <th>PO Date</th>
              <th>Vendor Name</th>
              <th>Item Code</th>
              <th>Item Name</th>
              <th>Category</th>
              <th>Sub-Category</th>
              <th>Quantity</th>
              <th>Standard Rate</th>
              <th>VAT</th>
              <th>Total Amount</th>
              <th>Remarks</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="12">No Rows To Show</td>
            </tr>
          </tbody>
        </table>
        <div className="pur-pagination">
          <span>0 to 0 of 0</span>
          <button disabled>First</button>
          <button disabled>Previous</button>
          <span>Page 0 of 0</span>
          <button disabled>Next</button>
          <button disabled>Last</button>
        </div>
      </div>
    </div>
  );
};

export default Pur;
