import React, { useState, useRef } from 'react';
import ReactToPrint from 'react-to-print';
import './Materialized.css';

const MaterializedSalesView = () => {
  // State to control the visibility of the table
  const [showTable, setShowTable] = useState(false);
  
  // Reference to the table for printing
  const componentRef = useRef();

  // Dummy data for the table
  const dummyData = [
    {
      fiscalYear: '2024',
      billNo: 'B001',
      customerName: 'John Doe',
      customerPan: 'ABCDE1234F',
      billDate: '2024-08-13',
      amount: '1000',
      discount: '100',
      taxableAmount: '900',
      taxAmount: '180',
      totalAmount: '1080',
      syncWithIRD: 'Yes',
      isBillPrinted: 'No',
      isBillActive: 'Yes',
      printedTime: 'N/A',
      enteredBy: 'Admin',
      printedBy: 'N/A',
      isRealtime: 'Yes',
      paymentMethod: 'Credit Card',
      vatRefundAmount: '0',
      transactionId: 'TXN123456'
    },
    {
      fiscalYear: '2024',
      billNo: 'B002',
      customerName: 'Jane Smith',
      customerPan: 'XYZAB5678H',
      billDate: '2024-08-14',
      amount: '2000',
      discount: '200',
      taxableAmount: '1800',
      taxAmount: '360',
      totalAmount: '2160',
      syncWithIRD: 'No',
      isBillPrinted: 'Yes',
      isBillActive: 'Yes',
      printedTime: '2024-08-14 10:00',
      enteredBy: 'Admin',
      printedBy: 'John Doe',
      isRealtime: 'No',
      paymentMethod: 'Cash',
      vatRefundAmount: '0',
      transactionId: 'TXN654321'
    }
  ];

  // Handler to show the report
  const handleShowReport = () => {
    setShowTable(true);
  };

  return (
    <div className="materialized-sales-view">
      <h2 className="header">MATERIALIZED SALES VIEW</h2>
      
      <div className="date-range">
        <div className="date-input">
          <label>From:</label>
          <input type="date" value="2024-08-13" />
        </div>
        <div className="date-input">
          <label>To:</label>
          <input type="date" value="2024-08-13" />
        </div>
        <button className="star-button">☆</button>
        <button className="minus-button">-</button>
        <button className="show-report-button" onClick={handleShowReport}>Show Report</button>
      </div>
      
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <button className="search-button">🔍</button>
      </div>
      
      <div className="results-info">
        <span>Showing {showTable ? dummyData.length : 0} / {showTable ? dummyData.length : 0} results</span>
        <button className="export-btn">Export</button>
        <ReactToPrint
          trigger={() => <button className="print-btn" disabled={!showTable}>Print</button>}
          content={() => componentRef.current}
        />
      </div>
      
      {showTable && (
        <div className="sales-table-container">
          <table className="sales-table" ref={componentRef}>
            <thead>
              <tr>
                <th>Fiscal Year</th>
                <th>Bill_No</th>
                <th>Customer_Name</th>
                <th>Customer_Pan</th>
                <th>Bill_Date</th>
                <th>Amount</th>
                <th>Discount</th>
                <th>Taxable_Amount</th>
                <th>Tax_Amount</th>
                <th>Total_Amount</th>
                <th>Sync With IRD</th>
                <th>IS_Bill_Printed</th>  
                <th>IS_Bill_Active</th>
                <th>Printed_Time</th>
                <th>Entered_By</th>
                <th>Printed_By</th>
                <th>Is_realtime</th>
                <th>Payment_Method</th>
                <th>VAT_Refund_Aount</th>
                <th>Transaction_Id</th>
              </tr>
            </thead>
            <tbody>
              {dummyData.map((data, index) => (
                <tr key={index}>
                  <td>{data.fiscalYear}</td>
                  <td>{data.billNo}</td>
                  <td>{data.customerName}</td>
                  <td>{data.customerPan}</td>
                  <td>{data.billDate}</td>
                  <td>{data.amount}</td>
                  <td>{data.discount}</td>
                  <td>{data.taxableAmount}</td>
                  <td>{data.taxAmount}</td>
                  <td>{data.totalAmount}</td>
                  <td>{data.syncWithIRD}</td>
                  <td>{data.isBillPrinted}</td>
                  <td>{data.isBillActive}</td>
                  <td>{data.printedTime}</td>
                  <td>{data.enteredBy}</td>
                  <td>{data.printedBy}</td>
                  <td>{data.isRealtime}</td>
                  <td>{data.paymentMethod}</td>
                  <td>{data.vatRefundAmount}</td>
                  <td>{data.transactionId}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      
      <div className="pagination">
        <span>0 to {showTable ? dummyData.length : 0} of {showTable ? dummyData.length : 0}</span>
        <button className="page-btn" disabled={!showTable}>First</button>
        <button className="page-btn" disabled={!showTable}>Previous</button>
        <span>Page 1 of 1</span>
        <button className="page-btn" disabled={!showTable}>Next</button>
        <button className="page-btn" disabled={!showTable}>Last</button>
      </div>
    </div>
  );
};

export default MaterializedSalesView;
