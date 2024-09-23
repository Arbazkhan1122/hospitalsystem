import React from 'react';
import './NewDraftList.css';

function PurchaseOrderDraftList() {
  return (
    <div className="purchase-order-draft-list">
      <div className="header">
        <h2>Purchase Order Draft List</h2>
        <button className="start-new-draft-button">+ Start New Draft</button>
      </div>

      <div className="search-bar">
        <input type="text" placeholder="Search Vendor Name" />
        <button className="search-button">Search</button>
      </div>

      <div className="draft-info">
        <span>Vendor Name</span>
        <span className="discarded-draft">Discarded Draft</span>
      </div>

      <div className="results-info">
        <span>Showing 0 / 0 results</span>
      </div>

      <table className="draft-table">
        <thead>
          <tr>
            <th>Vendor Co...</th>
            <th>Vendor Contact</th>
            <th>Draft Star...</th>
            <th>Draft Crea...</th>
            <th>Total Amt.</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="7" className="no-data">No Rows To Show</td>
          </tr>
        </tbody>
      </table>

      <div className="pagination">
        <span>0 to 0 of 0</span>
        <button>First</button>
        <button>Previous</button>
        <span>Page 0 of 0</span>
        <button>Next</button>
        <button>Last</button>
      </div>
    </div>
  );
}

export default PurchaseOrderDraftList;
