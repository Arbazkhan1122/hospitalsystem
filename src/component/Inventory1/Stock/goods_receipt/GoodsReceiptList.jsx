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
      <div className="goods-receipt-filters">
        <label>
          From:
          <input
            type="date"
            value={dateFrom}
            onChange={handleDateFromChange}
            className="goods-receipt-date-input"
          />
        </label>
        <label>
          To:
          <input
            type="date"
            value={dateTo}
            onChange={handleDateToChange}
            className="goods-receipt-date-input"
          />
        </label>
        <button className="goods-receipt-ok-button">OK</button>
      </div>
      <div className="goods-receipt-search-export">
        <div>
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchChange}
            aria-label="Search"
          />
         
        </div>
       
        <div>
          <button className="goods-receipt-export-btn" aria-label="Export Data">Export</button>
          <button className="goods-receipt-print" aria-label="Print Data">Print</button>
        </div>
      </div>
      <div className='good-receipt-ta'>
      <table className="goods-receipt-receipt-table">
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
            <td colSpan="11" className="goods-receipt-no-rows">No Rows To Show</td>
          </tr>
        </tbody>
      </table>
      {/* <div className="goods-receipt-pagination">
        <span>0 to 0 of 0</span>
        <button disabled>First</button>
        <button disabled>Previous</button>
        <span>Page 0 of 0</span>
        <button disabled>Next</button>
        <button disabled>Last</button>
      </div> */}
      </div>
    </div>
  );
};

export default GoodsReceiptList;
