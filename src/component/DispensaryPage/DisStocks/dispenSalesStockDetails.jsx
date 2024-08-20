import React, { useState } from "react";
// import './SalesStockDetails.css';
import "../DisStocks/dispenSalesStockDetails.css"
import DispenTransfer from './dispenTransfer';

// const [selectedTab, setSelectedTab] = useState("StockDetailsList"); // State to keep track of the selected tab

const salesData = [
    { genericName: '.OSMOLAX', medicineName: '.OSMOLAX', unit: 'N/A', rackNo: 'bat278', batchNo: '2025-09-05', availableQuantity: 10042, salePrice: 700, totalValue: 7029400, storeName: 'Main Dispensary' },
    { genericName: 'ACECLOFENAC + PARACETAMOL TABS', medicineName: 'ACECLOFENAC + PARACETAMOL TABS', unit: 'N/A', rackNo: '123', batchNo: '2024-12-01', availableQuantity: 881, salePrice: 300, totalValue: 264300, storeName: 'Main Dispensary' },
    // Add more entries as needed
];

const SalesStockDetails = () => {
    return (
        
         <div className="stock-container">
            <div className="header-tabs">
                <span 
                className="tab active"
                
                >
                    Stock Details List</span>
                <span 
                className="tab"
                
                >
                    Transfer</span>
                <span className="tab">Requisition</span>
            </div>

            
      
              <div className="filter-bar">
                <input type="text" placeholder="Search" className="search-input" />
                <div className="filter-options">
                    <span>Filter by Store:</span>
                    <select>
                        <option>Main Dispensary</option>
                        {/* Add other options */}
                    </select>
                    <label>
                        <input type="checkbox" /> Show Zero Quantity
                    </label>
                </div>
                <div className="dSSD-results-info">
                    <span>Showing 543 / 543 results</span>
                    <button className="dSSD-export-btn">Export</button>
                    <button className="dSSD-print-btn">Print</button>
                </div>
            </div>
            <table className="dSSD-stock-table">
                <thead>
                    <tr>
                        <th>Generic Name</th>
                        <th>Medicine Name</th>
                        <th>Unit</th>
                        <th>Rack No</th>
                        <th>Batch No</th>
                        <th>Expiry Date</th>
                        <th>Available Quantity</th>
                        <th>Sale Price</th>
                        <th>Total Value</th>
                        <th>Store Name</th>
                    </tr>
                </thead>
                <tbody>
                    {salesData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.genericName}</td>
                            <td>{item.medicineName}</td>
                            <td>{item.unit}</td>
                            <td>{item.rackNo}</td>
                            <td>{item.batchNo}</td>
                            <td>{item.expiryDate}</td>
                            <td>{item.availableQuantity}</td>
                            <td>{item.salePrice}</td>
                            <td>{item.totalValue}</td>
                            <td>{item.storeName}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="dSSDetails-pagination-bar">
                <span>1 to 20 of 543</span>
                <button>First</button>
                <button>Previous</button>
                <span>Page 1 of 28</span>
                <button>Next</button>
                <button>Last</button>
            </div>
            <div className="dSSDetails-summary">
                <h4>Summary</h4>
                <strong>Total Stock Value: </strong>162,914.25
            </div>


                  
        </div>


    );
};

export default SalesStockDetails;
