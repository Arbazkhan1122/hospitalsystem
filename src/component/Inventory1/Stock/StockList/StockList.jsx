import React, { useState } from 'react';
import "./StockList.css"

const StockList = () => {
  const [subcategory, setSubcategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubcategoryChange = (e) => setSubcategory(e.target.value);
  const handleSearchChange = (e) => setSearchQuery(e.target.value);

  return (
    <div className="stock-list">
      <div className="filters">
        <label>
          SubCategory *:
          <select value={subcategory} onChange={handleSubcategoryChange}>
            <option value="">Select SubCategory</option>
            <option value="furniture">Furniture</option>
            <option value="soap">Soap</option>
            <option value="tissue">Tissue</option>
          </select>
        </label>
        <label>
          <input type="checkbox" />
          Show Fixed Assets Applicable Item
        </label>
        <label>
          <input type="checkbox" />
          Show only cold storage item
        </label>
        <label>
          <input type="checkbox" />
          Show Zero Quantity
        </label>
        <div className="legends">
          <span className="zero-quantity">● Zero Quantity</span>
          <span className="below-min-stock">● Below MinStockQuantity</span>
        </div>
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
      <table className="stock-table">
        <thead>
          <tr>
            <th>Item Type</th>
            <th>Sub Category</th>
            <th>Item Name</th>
            <th>Item Code</th>
            <th>Unit</th>
            <th>Available Quantity</th>
            <th>Minimum Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Capital Goods</td>
            <td>Furniture</td>
            <td>Chair</td>
            <td>0005001</td>
            <td>Piece</td>
            <td>279</td>
            <td>10</td>
            <td>
              <button className="view-button">View</button>
              <button className="manage-button">Manage Stock</button>
            </td>
          </tr>
          <tr>
            <td>Consumables</td>
            <td>Soap</td>
            <td>Soap</td>
            <td>0004001</td>
            <td>Piece</td>
            <td>9340</td>
            <td>1000</td>
            <td>
              <button className="view-button">View</button>
              <button className="manage-button">Manage Stock</button>
            </td>
          </tr>
          <tr>
            <td>Consumables</td>
            <td>Tissue</td>
            <td>Tissue</td>
            <td>0002001</td>
            <td>Piece</td>
            <td>6398</td>
            <td>100</td>
            <td>
              <button className="view-button">View</button>
              <button className="manage-button">Manage Stock</button>
            </td>
          </tr>
          <tr>
            <td>Capital Goods</td>
            <td>Some Sub Category</td>
            <td>Towel</td>
            <td>0001001</td>
            <td>Piece</td>
            <td>1000</td>
            <td>100</td>
            <td>
              <button className="view-button">View</button>
              <button className="manage-button">Manage Stock</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="pagination">
        <span>1 to 4 of 4</span>
        <button disabled>First</button>
        <button disabled>Previous</button>
        <span>Page 1 of 1</span>
        <button disabled>Next</button>
        <button disabled>Last</button>
      </div>
    </div>
  );
};

export default StockList;
