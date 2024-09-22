/* Mohini_ReturnInvestment_WholePage_14/sep/2024 */
import React, { useState, useEffect, useRef } from 'react';
import './ItemWiseSalesReport.css';
import { startResizing } from '../../TableHeadingResizing/resizableColumns';
const ReturnInvestment = () => {
    const [columnWidths,setColumnWidths] = useState({});
    const tableRef=useRef(null);
    return (
        <div className="item-wise-sales-report-container">
            <h2 className="item-wise-sales-report-title"> ⚛ Return On Investment Report</h2>
            <div className="item-wise-sales-filter-section">
                <div className="item-wise-sales-filter-group">
                    <label>From:</label>
                    <input type="date" value="2024-08-23" />
                    <label>To:</label>
                    <input type="date" value="2024-08-23" />
                </div>
                <div className="item-wise-sales-filter-group">
                    <label>Generic Name:</label>
                    <select>
                        <option>--Select Generic--</option>
                    </select>
                    <label>Item Name:</label>
                    <select>
                        <option>--Select Item--</option>
                    </select>
                </div>
                
              
                <div className="item-wise-sales-filter-group">
                    <label>Dispensary:</label>
                    <input type="text" placeholder="Enter Dispensary Name" />
                </div>
                <div className="item-wise-sales-filter-group">
                    <label>Counter:</label>
                    <select>
                        <option>Select Counter</option>
                    </select>
                </div>
                <div className="item-wise-sales-filter-group">
                    <label>User:</label>
                    <input type="text" placeholder="Enter User Name" />
                </div>
                <div className="item-wise-sales-action-buttons">
                <button className="item-wise-sales-btn show-report-btn">Show Report</button>
                <button className="item-wise-sales-btn summary-details-btn">Summary Details</button>
            </div>
            </div>

           

            <div className="item-wise-sales-report-table">
                <input type="text" placeholder="Search" className="item-wise-sales-search-bar" />
                </div>
                {/* <div className='item-wise-sales-table'> */}
                <div className='table-container'>
                <table  ref={tableRef}>
          <thead>
            <tr>
              {[
                 "Txn Date",
                 "GR No",
                 "Supplier Name",
                 "Item Name",
                 "Batch No",
                 "Item Rate",
                 "Rate After Dis",
                 "InvoiceQty",
                 "FreeQty",
                 "TotalQty",
                 "TotalTax",
                 "Other Charges",
                 "DisAmt",
                 "Total Amount",
                 "C.P/Unit",
                 "StockValue",
                 "Sales Value",
                 "Profit",
                 "Profit100%",
                 "ROI%"
              ].map((header, index) => (
                <th
                  key={index}
                  style={{ width: columnWidths[index] }}
                  className="resizable-th"
                >
                  <div className="header-content">
                    <span>{header}</span>
                    <div
                      className="resizer"
                      onMouseDown={startResizing(
                        tableRef,
                        setColumnWidths
                      )(index)}
                    ></div>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
    <tbody>
      <tr>
        <td colSpan="20" className="item-wise-sales-no-rows">No Rows To Show</td>
      </tr>
    </tbody>
  </table>
</div>

                {/* <div className="item-wise-sales-pagination">
                    <button>First</button>
                    <button>Previous</button>
                    <span>Page 0 of 0</span>
                    <button>Next</button>
                    <button>Last</button>
                </div> */}
                {/* </div> */}

            <div className="item-wise-sales-summary-section">
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
            </div>
        </div>
    );
};

export default ReturnInvestment;
/* Mohini_ReturnInvestment_WholePage_14/sep/2024 */
