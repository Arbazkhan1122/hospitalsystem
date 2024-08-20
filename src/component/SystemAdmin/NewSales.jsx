import React, { useState, useRef } from 'react';
import './SalesBook.css';
import DetailsSalesReport from '../SystemAdmin/ShowReport'; // Adjust path as necessary
import { useReactToPrint } from 'react-to-print';

const NewSales = () => {
  const [showReport, setShowReport] = useState(false);
  const printRef = useRef();

  const handleShowReport = () => {
    setShowReport(true);
  };

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
  });

  return (
    <div className="sales-book-container">
      <div className="sales-book-details">
        <h2 className="header">SALES BOOK DETAILS</h2>
        <div className="date-range">
          <div className="date-input">
            <label>From:</label>
            <input type="date" defaultValue="2024-08-13" />
          </div>
          <div className="date-input">
            <label>To:</label>
            <input type="date" defaultValue="2024-08-13" />
          </div>
          <button className="star-button">☆</button>
          <button className="minus-button">-</button>
          <button className="show-report-button" onClick={handleShowReport}>
            Show Report
          </button>
        </div>
      </div>

      {/* Render DetailsSalesReport and add print functionality */}
      {showReport && (
        <div>
          <DetailsSalesReport ref={printRef} />
          <button className="print-button" onClick={() => handlePrint()}>
            Print
          </button>
        </div>
      )}
    </div>
  );
};

export default NewSales;
