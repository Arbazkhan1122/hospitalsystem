import React, { useState } from 'react';
import './ItemWisePurchaseReport.css';

const usersData = [
  {
    purchase: 0,
    purchaseReturn: 0,
    balance: 0
  }
];

const PurchaseSummaryReport = () => {
  const [suppliers, setSuppliers] = useState(usersData);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = suppliers.filter((user) =>
    Object.values(user).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="iten-purchase-container">
      <h2 className="iten-purchase-header"> ⚛ Purchase Summary Report</h2>
      
      <div className="iten-purchase-filterRow">
        <div>
          <span>From: </span>
          <input type="date" defaultValue="2024-08-22" />
          <span> To: </span>
          <input type="date" defaultValue="2024-08-22" />
        </div>
        
       
      </div>
      <div className="iten-purchase-searchRow">
        <input
          type="text"
          placeholder="Search"
          className="iten-purchase-searchInput"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      <div className="item-purchase-btn">
        <span>Showing {filteredUsers.length} / {suppliers.length} results</span>
        <button className="item-purchase-button">Export</button>
        <button className="item-purchase-button">Print</button>
      </div>
      
      <div className="item-purchase-ta">
        <table className="iten-purchase-table">
          <thead>
            <tr>
              <th>Purchase</th>
              <th>Purchase Return</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user, index) => (
                <tr key={index}>
                  <td>{user.purchase}</td>
                  <td>{user.purchaseReturn}</td>
                  <td>{user.balance}</td>
                </tr>
              ))
            ) : (
              <tr className="iten-purchase-noRows">
                <td colSpan="3">No records found</td>
              </tr>
            )}
          </tbody>
        </table>
        
        {/* <div className="iten-purchase-pagination">
        <button className="iten-purchase-paginationButton">First</button>
        <button className="iten-purchase-paginationButton">Previous</button>
        <span>Page 0 of 0</span>
        <button className="iten-purchase-paginationButton">Next</button>
        <button className="iten-purchase-paginationButton">Last</button>
      </div> */}
      </div>
    </div>
  );
};

export default PurchaseSummaryReport;
