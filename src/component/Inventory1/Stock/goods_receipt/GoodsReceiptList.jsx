import React, { useState } from 'react';
import "./GoodsReceiptList.css"

const GoodsReceiptList = () => {
  const [dateFrom, setDateFrom] = useState('2024-08-01');
  const [dateTo, setDateTo] = useState('2024-08-08');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => setSearchQuery(e.target.value);
  const handleDateFromChange = (e) => setDateFrom(e.target.value);
  const handleDateToChange = (e) => setDateTo(e.target.value);

  return (
    <div className="goods-receipt-list">
      <div className="filters">
        <label>
          From:
          <input
            type="date"
            value={dateFrom}
            onChange={handleDateFromChange}
            className="date-input"
          />
        </label>
        <label>
          To:
          <input
            type="date"
            value={dateTo}
            onChange={handleDateToChange}
            className="date-input"
          />
        </label>
        <button className="ok-button">OK</button>
      </div>
      <div className="search-export">
        <div>
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchChange}
            aria-label="Search"
          />
          <button aria-label="Search Button">🔍</button>
        </div>
        <div>
          <button className="export" aria-label="Export Data">Export</button>
          <button className="print" aria-label="Print Data">Print</button>
        </div>
      </div>
      <table className="receipt-table">
        <thead>
          <tr>
            <th>GR No.</th>
            <th>GR Date</th>
            <th>PO...</th>
            <th>Vendor ...</th>
            <th>Vendor Name</th>
            <th>Vendor ...</th>
            <th>Bill No.</th>
            <th>Total Amount</th>
            <th>Pay. Mode</th>
            <th>Remarks</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="11" className="no-rows">No Rows To Show</td>
          </tr>
        </tbody>
      </table>
      <div className="pagination">
        <span>0 to 0 of 0</span>
        <button disabled>First</button>
        <button disabled>Previous</button>
        <span>Page 0 of 0</span>
        <button disabled>Next</button>
        <button disabled>Last</button>
      </div>
    </div>
  );
};

export default GoodsReceiptList;
