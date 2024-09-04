import React, { useState, useEffect } from 'react';
import "./StockList.css";
import StockManage from './StockManage'; // Import StockManage component

const StockList = () => {
  const [subcategory, setSubcategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null); // Track selected item for StockManage

  useEffect(() => {
    fetch('http://192.168.1.39:8080/api/items/getAllItem')
      .then(response => response.json())
      .then(data => setItems(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleSubcategoryChange = (e) => setSubcategory(e.target.value);
  const handleSearchChange = (e) => setSearchQuery(e.target.value);

  const filteredItems = items.filter(item =>
    item.itemName.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (!subcategory || item.subCategory === subcategory)
  );

  const handleManageStockClick = (item) => {
    setSelectedItem(item); // Set the selected item to manage
  };

  const handleBackToList = () => {
    setSelectedItem(null); // Clear selected item to go back to the list
  };

  return (
    <div className="stock-stock-list">
      {selectedItem ? (
        <StockManage item={selectedItem} onBack={handleBackToList} />
      ) : (
        <>
          <div className="stock-filters">
            <label className='stock-list-label'>
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
            <div className="stock-legends">
              <span className="stock-zero-quantity">● Zero Quantity</span>
              <span className="stock-below-min-stock">● Below MinStockQuantity</span>
            </div>
          </div>
          <div className="stock-search-export">
            <div>
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={handleSearchChange}
                aria-label="Search"
              />
              <button className='stock-list-search-bar' aria-label="Search Button">🔍</button>
            </div>
            <div className='stock-button-list'>
              
              <span>{`Showing ${filteredItems.length} of ${items.length} results`}</span>

              <button className="stock-export" aria-label="Export Data">Export</button>
              <button className="stock-print" aria-label="Print Data">Print</button>
            </div>
          </div>
          <div className='stock-ta'>
          <table className="stock-stock-table">
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
              {filteredItems.map(item => (
                <tr key={item.id}>
                  <td>{item.inventory}</td>
                  <td>{item.subCategory}</td>
                  <td>{item.itemName}</td>
                  <td>{item.itemCode}</td>
                  <td>{item.unitOfMeasurement}</td>
                  <td>{item.unitQuantity}</td>
                  <td>{item.minStockQuantity}</td>
                  <td>
                    <button className="stock-view-button">View</button>
                    <button
                      className="stock-manage-button"
                      onClick={() => handleManageStockClick(item)}
                    >
                      Manage Stock
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="stock-pagination">
            <span>{`1 to ${filteredItems.length} of ${items.length}`}</span>
            <button disabled>First</button>
            <button disabled>Previous</button>
            <span>Page 1 of 1</span>
            <button disabled>Next</button>
            <button disabled>Last</button>
          </div>
          </div>
        </>
      )}
    </div>
  );
};

export default StockList;

