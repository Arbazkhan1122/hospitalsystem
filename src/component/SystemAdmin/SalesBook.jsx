import React, { useState, useRef } from 'react';
import './SalesBook.css';
import DetailsSalesReport from '../SystemAdmin/ShowReport'; // Adjust path as necessary
import { useReactToPrint } from 'react-to-print';

const SalesBookDetails = () => {
  const [showReport, setShowReport] = useState(false);
  const printRef = useRef();

  const handleShowReport = () => {
    setShowReport(true);
  };

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
  });

  return (
    <div className="sales-book-container-">
      <div className="sales-book-details">
        <h2 className="sales-book-header">SALES BOOK DETAILS</h2>
        <div className="sales-book-date-range">
          <div className="sales-book-date-input">
            <label>From:</label>
            <input type="date" defaultValue="2024-08-13" />
          </div>
          <div className="sales-book-date-input">
            <label>To:</label>
            <input type="date" defaultValue="2024-08-13" />
          </div>
          <button className="sales-book-star-button">☆</button>
          <button className="sales-book-minus-button">-</button>
          <button className="sales-book-show-report-button" onClick={handleShowReport}>
            Show Report
          </button>
        </div>
      </div>

      {/* Render DetailsSalesReport and add print functionality */}
      {showReport && (
        <div>
          <DetailsSalesReport ref={printRef} />
          <button className="sales-book-print-button" onClick={() => handlePrint()}>
            Print
          </button>
        </div>
      )}
    </div>
  );
};

export default SalesBookDetails;
