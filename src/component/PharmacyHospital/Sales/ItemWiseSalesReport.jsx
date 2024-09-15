/* Mohini_ItemWiseSalesReport_WholePage_14/sep/2024 */
import React from 'react';
import './ItemWiseSalesReport.css';

const ItemWiseSalesReport = () => {
    return (
        <div className="item-wise-sales-report-container">
            <h2 className="item-wise-sales-report-title"> ⚛ Item-wise Sales Report</h2>
            <div className="item-wise-sales-filter-section">
                <div className="item-wise-sales-filter-group">
                    <label>From:</label>
                    <input type="date" value="2024-08-23" />
                    <label>To:</label>
                    <input type="date" value="2024-08-23" />
                    <button className="invoice-billing-favorite-btn">★</button>
                     <button className="invoice-billing-reset-btn">-</button>
                </div>
                <div className="item-wise-sales-filter-groups">
                    <label>Generic Name:</label>
                    <select>
                        <option>--Select Generic--</option>
                    </select>
                    <label>Item Name:</label>
                    <select>
                        <option>--Select Item--</option>
                    </select>
                </div>
                
              
                <div className="item-wise-sales-filter-groups">
                    <label>Dispensary:</label>
                    <input type="text" placeholder="Enter Dispensary Name" />
                </div>
                <div className="item-wise-sales-filter-groups">
                    <label>Counter:</label>
                    <select>
                        <option>Select Counter</option>
                    </select>
                </div>
                <div className="item-wise-sales-filter-groups">
                    <label>User:</label>
                    <input type="text" placeholder="Enter User Name" />
                </div>
                <div className="item-wise-sales-action-buttons">
                <button className="item-wise-sales-btn">Show Report</button>
                <button className="item-wise-sales-btn">Summary Details</button>
            </div>
            </div>

           

            <div className="item-wise-sales-report-table">
                <input type="text" placeholder="Search" className="item-wise-sales-search-bar" />
                <button className="invoice-billing-search-button"><i className="fa fa-search"></i></button>

                </div>
                <div className='item-wise-sales-table'>
                <table className='item-wise-sales-ta'>
                    <thead>
                        <tr>
                            <th>Bill No</th>
                            <th>Transaction Type</th>
                            <th>Date</th>
                            <th>Generic Name</th>
                            <th>Medicine Name</th>
                            <th>Patient</th>
                            <th>Batch No</th>
                            <th>Expiry</th>
                            <th>Sales Rate</th>
                            
                            <th>Sales Value</th>
                            <th>Stock Value </th>
                            <th>Store</th>
                            <th>Counter</th>
                            <th>User</th>
                            <th>Remark</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan="17" className="item-wise-sales-no-rows">No Rows To Show</td>
                        </tr>
                    </tbody>
                </table>
                {/* <div className="item-wise-sales-pagination">
                    <button>First</button>
                    <button>Previous</button>
                    <span>Page 0 of 0</span>
                    <button>Next</button>
                    <button>Last</button>
                </div> */}
                </div>

            {/* <div className="item-wise-sales-summary-section">
                <div className="item-wise-sales-summary-item">
                    <span>Total Sales Quantity</span>
                    <span>0</span>
                </div>
                <div className="item-wise-sales-summary-item">
                    <span>Total Sales Value</span>
                    <span>0</span>
                </div>
                <div className="item-wise-sales-summary-item">
                    <span>Total Stock Value</span>
                    <span>0</span>
                </div>
                <div className="item-wise-sales-summary-item">
                    <span>Net</span>
                    <span>0</span>
                </div>
            </div> */}
        </div>
    );
};

export default ItemWiseSalesReport;
/* Mohini_ItemWiseSalesReport_WholePage_14/sep/2024 */
