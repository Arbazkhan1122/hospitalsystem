import React, { useState, useEffect } from 'react';
import './WriteOffItemList.css';

const WriteOffItemsList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [writeOffGoods, setWriteOffGoods] = useState([]);
  const [filteredGoods, setFilteredGoods] = useState([]);
  
  useEffect(() => {
    // Fetch data from the API
    const fetchWriteOffGoods = async () => {
      try {
        const response = await fetch('http://192.168.1.39:8080/api/writeoffgoods/getAllWriteOffGoods');
        if (response.ok) {
          const data = await response.json();
          setWriteOffGoods(data);
          setFilteredGoods(data); // Initialize filtered goods
        } else {
          console.error('Failed to fetch Write-Off Goods');
        }
      } catch (error) {
        console.error('Error fetching Write-Off Goods:', error);
      }
    };

    fetchWriteOffGoods();
  }, []);

  useEffect(() => {
    // Filter goods based on the search query
    const results = writeOffGoods.filter(item =>
      item.itemName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredGoods(results);
  }, [searchQuery, writeOffGoods]);

  const handleSearch = () => {
    // Search logic handled by useEffect
  };

  const handlePrint = () => {
    console.log('Printing...');
    // Implement print logic here
  };

  return (
    <div className='writeOffList-inventory-content'>
      <div className="writeOffList-inventory-search-bar">
        <input 
          type="text" 
          placeholder="Search" 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>🔍</button>
      </div>
      <div className="writeOffList-inventory-results">
        <div>
          <span>Showing {filteredGoods.length} / {writeOffGoods.length} results</span>
          <button onClick={handlePrint}>Print</button>
        </div>
      </div>
      <div className='wite-off-tab'>
      <table className="writeOffList-inventory-write-off-list-table">
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Write Off Qty</th>
            <th>Unit</th>
            <th>Write Off Date</th>
            <th>Rate</th>
            <th>Total Amount</th>
            <th>Remark</th>
          </tr>
        </thead>
        <tbody>
          {filteredGoods.length > 0 ? (
            filteredGoods.map((item, index) => (
              <tr key={index}>
                <td>{item.itemName}</td>
                <td>{item.writeOffQty}</td>
                <td>piece</td> {/* Adjust if the field name is different */}
                <td>{item.writeOffDate}</td>
                <td>{item.itemRate}</td>
                <td>{item.totalAmount}</td>
                <td>{item.remark}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No Rows To Show</td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="writeOffList-inventory-writeOffList-pagination">
        <div className='writeOffList-inventory-writeOffList-pagination-div'>
          <span>0 to {filteredGoods.length} of {writeOffGoods.length}</span>
          <button>First</button>
          <button>Previous</button>
          <span>Page 0 of 0</span>
          <button>Next</button>
          <button>Last</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default WriteOffItemsList;
