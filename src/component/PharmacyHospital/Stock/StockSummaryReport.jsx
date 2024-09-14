  /* Mohini_StockSummaryReport_WholePage_14/sep/2024 */
  import React, { useState } from 'react';
import './StockSummaryReport.css';

const StockSummaryReport = () => {
  const [year, setYear] = useState('2024');
  const [fromDate, setFromDate] = useState('24-08-2024');
  const [toDate, setToDate] = useState('24-08-2024');
  const [selectStore, setSelectStore] = useState('');
  const [selectItem, setSelectItem] = useState('');
  const [selectGeneric, setSelectGeneric] = useState('');
  const [openingValue, setOpeningValue] = useState('+0');
  const [includeProvisionalSales, setIncludeProvisionalSales] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="stock-summary-report-component">
      <h1>⚛ Stock Summary Report</h1>
      
      <div className="stock-summary-report-report-controls">
        <select value={year} onChange={(e) => setYear(e.target.value)}>
          <option value="2024">2024</option>
        </select>
        <div className="stock-summary-report-date-range">
          <label>From:</label>
          <input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} />
          <label>To:</label>
          <input type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} />
        </div>
        <button className="stock-summary-report-star-btn">☆</button>
      </div>
      <div className="stock-summary-report-include-provisional">
        <input
          type="checkbox"
          checked={includeProvisionalSales}
          onChange={(e) => setIncludeProvisionalSales(e.target.checked)}
        />
        <label>Include Provisional Sales?</label>
      </div>
      <div className="stock-summary-report-filters">
  <label>
    Store:
    <input 
      type="text" 
      placeholder="Select Store" 
      value={selectStore} 
      onChange={(e) => setSelectStore(e.target.value)} 
      className="stock-summary-input-stock"
    />
  </label>
  <label>
    Item:
    <input 
      type="text" 
      placeholder="Select Item" 
      value={selectItem} 
      onChange={(e) => setSelectItem(e.target.value)} 
      className="stock-summary-input-stock"
    />
  </label>
  <label>
    Opening Value:
    <select 
      value={openingValue} 
      onChange={(e) => setOpeningValue(e.target.value)} 
      className="stock-summary-input-stock"
    >
      <option value="+0">Opening Value +0</option>
    </select>
  </label>
  <label>
    Generic:
    <input 
      type="text" 
      placeholder="Select Generic" 
      value={selectGeneric} 
      onChange={(e) => setSelectGeneric(e.target.value)} 
      className="stock-summary-input-stock"
    />
  </label>
  <button className="stock-summary-report-show-report-btn">Show Report</button>
</div>


      <div className="stock-summary-report-search-bar">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button>🔍</button>
      </div>

      <div className="stock-summary-report-results-info">
        <span>Showing 0 / 0 results</span>
        <button className="stock-summary-report-export-btn">⬇ Export</button>
        <button className="stock-summary-report-print-btn">Print</button>
      </div>

      <div className="stock-summary-report-table-container">
      <div className="stock-summary-report-stock-table-container">
  <table className="stock-summary-report-stock-table">
    <thead>
      <tr>
        <th>Store</th>
        <th>Generic Name</th>
        <th>Item Name</th>
        <th>Unit</th>
        <th>Batch</th>
        <th>Expiry</th>
        <th>CP</th>
        <th>SP</th>
        <th>Opening Value</th>
        <th>Purchase Value</th>
        <th>Purchase Return Value</th>
        <th>Sales Value</th>
        <th>Provisional Value</th>
        <th>Sale Return value</th>
        <th>Write-off Value</th>
        <th>Consumption Value</th>
        <th>closing value</th>



      </tr>
    </thead>
    <tbody>
      <tr>
        <td colSpan="17" className="stock-summary-report-no-rows">No Rows To Show</td>
      </tr>
    </tbody>
  </table>
</div>

     
      {/* <div className="stock-summary-report-pagination">
        <span>0 to 0 of 0</span>
        <button>First</button>
        <button>Previous</button>
        <span>Page 0 of 0</span>
        <button>Next</button>
        <button>Last</button>
      </div> */}
      </div>

      <div className="stock-summary-report-summary">
        <h2>Summary</h2>
        <div className="stock-summary-report-summary-content">
          <div className="stock-summary-report-summary-column">
            <div>Opening Value</div>
            <div>Purchase Value</div>
            <div>Purchase Return Value</div>
            <div>Sale</div>
            <div>Sale Return</div>
            <div>Provisional Sale</div>
            <div>Write-off</div>
            <div>StockManage In-Value</div>
            <div>StockManage OUT-Value</div>
            <div>Consumption</div>
            <div>Transfer In Value</div>
            <div>Transfer Out Value</div>
            <div>Closing Value</div>
          </div>
          <div className="stock-summary-report-summary-column">
            <div>Opening Quantity</div>
            <div>Purchase Quantity</div>
            <div>Purchase Return Quantity</div>
            <div>Sale Quantity</div>
            <div>Sale Return Quantity</div>
            <div>Sale Return Quantity</div>
            <div>Write-off Quantity</div>
            <div>StockManage In-Quantity</div>
            <div>StockManage OUT-Quantity</div>
            <div>Consumption Quantity</div>
            <div>Transfer In Quantity</div>
            <div>Transfer Out Quantity</div>
            <div>Closing Quantity</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockSummaryReport;
  /* Mohini_StockSummaryReport_WholePage_14/sep/2024 */
