import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

import './UserCollectionReport.css';

const PaymentModewiseReport = () => {
  const [showReport, setShowReport] = useState(false);


  
  const handlePrint = () => {
    window.print(); // Simple print functionality using the browser's print dialog
  };

  // Function to handle export (placeholder function)
  const handleExport = () => {
    console.log('Export function not yet implemented');
    // Implement your export logic here
  };

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handlePopupToggle = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const handleDateRangeSelection = (range) => {
    console.log('Selected Range:', range);
    // Implement the logic to filter data based on the selected range
    setIsPopupOpen(false); // Close the popup after selection
  };
  const reportsData = [
    { 
        date: "30-Aug-2023", 
        type: "Cash Sales", 
        paymentMode: "Cash", 
        receiptNo: "3L-230", 
        hospitalNo: "24080038-._", 
        patientName: "Test 1", 
        netTotal: 700, 
        user: "Mr. admin", 
        counter: "New-I" 
      },
      { 
        date: "30-Aug-2023", 
        type: "Cash Sales", 
        paymentMode: "Cash", 
        receiptNo: "3L-231", 
        hospitalNo: "24080038-._", 
        patientName: "Soumya Sharad Saxena", 
        netTotal: 1000, 
        user: "Mr. admin", 
        counter: "New-I" 
      },
      { 
        date: "30-Aug-2023", 
        type: "Cash Sales", 
        paymentMode: "Cash", 
        receiptNo: "3L.227", 
        hospitalNo: "24070037...", 
        patientName: "ANGEL VARGAS MONTERO", 
        netTotal: 375, 
        user: "Mr. admin", 
        counter: "New-I" 
      },
      { 
        date: "30-Aug-2023", 
        type: "Cash Sales", 
        paymentMode: "Cash", 
        receiptNo: "3L.228", 
        hospitalNo: "24060037...", 
        patientName: "Monicah Juma", 
        netTotal: 17000, 
        user: "Mr. admin", 
        counter: "Old-I" 
      },
      { 
        date: "30-Aug-2023", 
        type: "Deposit R...", 
        paymentMode: "Cash", 
        receiptNo: "24", 
        hospitalNo: "24070037...", 
        patientName: "ANGEL VARGAS MONTERO", 
        netTotal: 1222, 
        user: "Mr. admin", 
        counter: "New-I" 
      },
      { 
        date: "30-Aug-2023", 
        type: "Cash Sales", 
        paymentMode: "Cash", 
        receiptNo: "3L-22S", 
        hospitalNo: "24070037...", 
        patientName: "Erika Mae Cruz Dela Cruz", 
        netTotal: 2600, 
        user: "Mr. admin", 
        counter: "New-I" 
      },
      { 
        date: "30-Aug-2023", 
        type: "Maternity...", 
        paymentMode: "Cash", 
        receiptNo: "2", 
        hospitalNo: "24070037_._", 
        patientName: "Sajid Passa Shafin", 
        netTotal: 1000, 
        user: "Mr. admin", 
        counter: "Maternity Counter" 
      },
      { 
        date: "30-Aug-2023", 
        type: "Maternity...", 
        paymentMode: "Cash", 
        receiptNo: "31-222", 
        hospitalNo: "24070037_._", 
        patientName: "Sajid Passa Shafin", 
        netTotal: 1000, 
        user: "Mr. admin", 
        counter: "Maternity Counter" 
      },
      { 
        date: "30-Aug-2023", 
        type: "Cash Sales", 
        paymentMode: "Cash", 
        receiptNo: "31-223", 
        hospitalNo: "24060037..", 
        patientName: "Isaac John", 
        netTotal: 1000, 
        user: "Mr. admin", 
        counter: "New-I" 
      },
      { 
        date: "30-Aug-2023", 
        type: "Cash Sales", 
        paymentMode: "Cash", 
        receiptNo: "3L-224", 
        hospitalNo: "24070037..", 
        patientName: "Mathayo Mihangwa Mtebe", 
        netTotal: 14200, 
        user: "Mr. admin", 
        counter: "OPO-Counter" 
      },
      { 
        date: "30-Aug-2023", 
        type: "Cash Sales", 
        paymentMode: "Cash", 
        receiptNo: "3L-221", 
        hospitalNo: "24070037...", 
        patientName: "Mathayo Mihangwa Mtebe", 
        netTotal: 12700, 
        user: "Mr. admin", 
        counter: "New-I" 
      },
      { 
        date: "30-Aug-2023", 
        type: "Cash Sales", 
        paymentMode: "Cash", 
        receiptNo: "3L-217", 
        hospitalNo: "24070037...", 
        patientName: "Sample Sdf Gh", 
        netTotal: 1000, 
        user: "Mr. admin", 
        counter: "New-I" 
      },
      { 
        date: "30-Aug-2023", 
        type: "Cash Sales", 
        paymentMode: "Cash", 
        receiptNo: "3L-218", 
        hospitalNo: "24070037...", 
        patientName: "Sajid Passa Shafin", 
        netTotal: 2000, 
        user: "Mr. admin", 
        counter: "New-I" 
      },
      { 
        date: "30-Aug-2023", 
        type: "Cash Sales", 
        paymentMode: "Cash", 
        receiptNo: "31-219", 
        hospitalNo: "24070037...", 
        patientName: "Mathayo Mihangwa Mtebe", 
        netTotal: 1000, 
        user: "Mr. admin", 
        counter: "OPD-Counter" 
      },
      { 
        date: "30-Aug-2023", 
        type: "Cash Sales", 
        paymentMode: "Cash", 
        receiptNo: "31-220", 
        hospitalNo: "24070037...", 
        patientName: "Mathayo Mihangwa Mtebe", 
        netTotal: 1000, 
        user: "Mr. admin", 
        counter: "OPO-Counter" 
      },
      { 
        date: "30-Aug-2023", 
        type: "Cash Sales", 
        paymentMode: "Cash", 
        receiptNo: "31-215", 
        hospitalNo: "24070037...", 
        patientName: "Sample Sdf Ch", 
        netTotal: 11300, 
        user: "Mr. admin", 
        counter: "OPO-Counter" 
      },
      { 
        date: "30-Aug-2023", 
        type: "Cash Sales", 
        paymentMode: "Cash", 
        receiptNo: "31-216", 
        hospitalNo: "24070037...", 
        patientName: "Asdasd Asdasdas", 
        netTotal: 31200, 
        user: "Mr. admin", 
        counter: "OPO-Counter" 
      },
      { 
        date: "30-Aug-2023", 
        type: "Cash Sales", 
        paymentMode: "Cash", 
        receiptNo: "3L-210", 
        hospitalNo: "24070037...", 
        patientName: "Asdasd Asdasdas", 
        netTotal: 1000, 
        user: "Mr. admin", 
        counter: "OPD-Counter" 
      },
      { 
        date: "30-Aug-2023", 
        type: "Cash Sales", 
        paymentMode: "Cash", 
        receiptNo: "3L-211", 
        hospitalNo: "24070037...", 
        patientName: "Sajid Passa Shafin", 
        netTotal: 2000, 
        user: "Mr. admin", 
        counter: "New-I" 
      },
  ]

  const handleShowReport = () => {
    setShowReport(true);
  };

  return (
    <div className="user-collection-report">
      <div className="user-collection-report-header">
        <h3 className="user-collection-report-title"> ⚛ PaymentMode Wise Report</h3>
        <div className="user-collection-report-filters">
        <div className="user-collection-report-date-filter">
      <label>From:</label>
      <input type="date" />
      <label>To:</label>
      <input type="date" />
      <button className="user-collection-report-fav-btn">☆</button>
      <button className="user-collection-report-fav-btn" onClick={handlePopupToggle}>-</button>

      {isPopupOpen && (
        <div className="user-collection-popup">
          <ul className="user-collection-popup-list">
            <li onClick={() => handleDateRangeSelection('Today')}>Today</li>
            <li onClick={() => handleDateRangeSelection('Last 1 Week')}>Last 1 Week</li>
            <li onClick={() => handleDateRangeSelection('Last 1 Month')}>Last 1 Month</li>
            <li onClick={() => handleDateRangeSelection('Last 3 Months')}>Last 3 Months</li>
          </ul>
        </div>
      )}
    </div>
          <button className="user-collection-report-show-btn" onClick={handleShowReport}>Show Report</button>
        </div>
      </div>
      <div className='user-collection-report-counter'>
        <div className="user-collection-report-counter-filter">
          <label>Counter:</label>
          <select>
            <option value="All">All</option>
            <option value="All">Cash</option>
            <option value="All">M-PESA</option>

          </select>
        </div>
        <div className="user-collection-report-user-filter">
          <label>Type:</label>
          <select>
            <option value="All">All</option>
            <option value="All">Cash</option>
            <option value="All">Cash DiscountSale</option>

          </select>       
           </div>
           <div className="user-collection-report-user-filter">
          <label>User:</label>
          <select>
            <option value="All">All</option>
            <option value="All">Cash</option>
            <option value="All">Cash DiscountSale</option>

          </select>       
           </div>
      </div>

      {showReport && (
        <>
        <div className="user-collection-report-controls">
      {/* Search Input */}
      <input
        type="text"
        className="user-collection-report-search"
        placeholder="Search..."
        onChange={(e) => handleSearch(e.target.value)} // Ensure the handleSearch function is defined
      />
      
      {/* Print and Export Buttons */}
      <div className="user-collection-page-results-info">
          Showing 334/334 results
        </div>

      <button className="user-collection-report-print-btn" onClick={handlePrint}>Print</button>
      <button className="user-collection-report-print-btn" onClick={handleExport}>Export</button>
     
    </div>
<div className='user-collection-report-tab'>
  
<table className="user-collection-report-table">
            <thead>
              <tr>
                <th>Date</th>
              
                <th>Type</th>
                <th>PaymentMode</th>
                <th>Receipt No</th>
                <th>Hospital No</th>
                <th>Patient Name</th>
                <th>Net Total</th>
                <th>User</th>
                <th>Remarks</th>
                <th>Counter</th>
              </tr>
            </thead>
            <tbody>
              {reportsData.map((row, index) => (
                <tr key={index}>
                 <td>{row.date}</td>
                    <td>{row.type}</td>
                    <td>{row.paymentMode}</td>
                    <td>{row.receiptNo}</td>
                    <td>{row.hospitalNo}</td>
                    <td>{row.patientName}</td>
                    <td>{row.netTotal}</td>
                    <td>{row.user}</td>
                    <td>{row.counter}</td>
                </tr>
              ))}
            </tbody>
          

          </table>
          <div className="user-collection-report-page-no">
  <Button className="user-collection-report-pagination-btn">First</Button>
  <Button className="user-collection-report-pagination-btn">Previous</Button>
  <span>Page 1 of 4</span>
  <Button className="user-collection-report-pagination-btn">Next</Button>
  <Button className="user-collection-report-pagination-btn">Last</Button>
</div>
</div>
          <div className='net-cash-collection-header'>
          <h4 className="user-collection-report-net-collection">Net Cash Collection: (791,952.24)</h4>
          <div className="user-collection-report-summary">
 
  <table className="user-collection-report-summary-table">
 
  <tr>
    <th>Payment Modes</th>
    <th>Amount 1</th>
    <th>Amount 2</th>
  </tr>
  <tr>
    <td>Cash Sales</td>
    <td>458,250.00</td>
    <td>1,600.00</td>
  </tr>
  <tr>
    <td>Grand Total</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>Return Cash Sales</td>
    <td>0.00</td>
    <td>0.00</td>
  </tr>
  <tr>
    <td>Deposit Received</td>
    <td>237,122.00</td>
    <td>2371</td>
  </tr>
  <tr>
    <td>Deposit Refund</td>
    <td>14,300.00</td>
    <td>0.00</td>
  </tr>
  <tr>
    <td>Collection From Receivable</td>
    <td>0.00</td>
    <td>0.00</td>
  </tr>
  <tr>
    <td>Settlement Discount</td>
    <td>0.00</td>
    <td>0.00</td>
  </tr>
  <tr>
    <td>Other Payments Given</td>
    <td>0.00</td>
    <td>0.00</td>
  </tr>
  <tr>
    <td>Cash Collection</td>
    <td>681,072.00</td>
    <td>1,600.00</td>
  </tr>
</table>

  {/* Uncomment and use this button if needed */}
  <button className="user-collection-report-print-btn" onClick={handlePrint}>Print</button>
  </div>
          </div>

        </>
      )}
    </div>
  );
};

export default PaymentModewiseReport;
