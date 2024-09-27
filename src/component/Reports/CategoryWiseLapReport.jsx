import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './UserCollectionReport.css';

const CategoryWiseLapReport = () => {
  const [showReport, setShowReport] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Manage checkbox states
  const [checkboxStates, setCheckboxStates] = useState({
    all: true,
    samplePending: false,
    resultPending: false,
    resultAdded: true,
    reportFinalized: true,
  });

  const handlePrint = () => {
    window.print(); // Simple print functionality using the browser's print dialog
  };

  const handleExport = () => {
    console.log('Export function not yet implemented');
    // Implement your export logic here
  };

  const handlePopupToggle = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const handleDateRangeSelection = (range) => {
    console.log('Selected Range:', range);
    // Implement the logic to filter data based on the selected range
    setIsPopupOpen(false); // Close the popup after selection
  };

  const reportsData = [
    { serialNo: 1, category: 'Biochemistry', count: 46 },
    { serialNo: 2, category: 'Serology', count: 4 },
    { serialNo: 3, category: 'Microbiology', count: 2 },
    { serialNo: 4, category: 'Hematology', count: 2 },
  ];

  const handleShowReport = () => {
    setShowReport(true);
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setCheckboxStates((prevStates) => {
      if (name === 'all') {
        // Set all checkboxes based on 'All' checkbox
        return {
          all: checked,
          samplePending: checked,
          resultPending: checked,
          resultAdded: checked,
          reportFinalized: checked,
        };
      } else {
        // Set individual checkboxes
        const newState = {
          ...prevStates,
          [name]: checked,
        };
        // If any checkbox is unchecked, uncheck 'All'
        const allChecked = Object.values(newState).every((value) => value);
        return {
          ...newState,
          all: allChecked,
        };
      }
    });
  };

  return (
    <div className="user-collection-report">
      <div className="user-collection-report-header">
        <h3 className="user-collection-report-title">⚛ Category Wise Lab Report</h3>
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
          <div className='order-status-filter'>
            <div className="order-status-checkboxes">
              <label>
                <input
                  type="checkbox"
                  name="all"
                  checked={checkboxStates.all}
                  onChange={handleCheckboxChange}
                /> All
              </label>
              <label>
                <input
                  type="checkbox"
                  name="samplePending"
                  checked={checkboxStates.samplePending}
                  onChange={handleCheckboxChange}
                /> Sample Pending
              </label>
              <label>
                <input
                  type="checkbox"
                  name="resultPending"
                  checked={checkboxStates.resultPending}
                  onChange={handleCheckboxChange}
                /> Result Pending
              </label>
              <label>
                <input
                  type="checkbox"
                  name="resultAdded"
                  checked={checkboxStates.resultAdded}
                  onChange={handleCheckboxChange}
                /> Result Added
              </label>
              <label>
                <input
                  type="checkbox"
                  name="reportFinalized"
                  checked={checkboxStates.reportFinalized}
                  onChange={handleCheckboxChange}
                /> Report-Finalized
              </label>
            </div>
          </div>
          <button className="user-collection-report-show-btn" onClick={handleShowReport}>Show Report</button>
        </div>
      </div>

      {showReport && (
        <>
          <div className="user-collection-report-controls">
            <input
              type="text"
              className="user-collection-report-search"
              placeholder="Search..."
              onChange={(e) => handleSearch(e.target.value)} // Ensure the handleSearch function is defined
            />
            <div className="user-collection-page-results-info">
              Showing {reportsData.length}/{reportsData.length} results
            </div>
            <button className="user-collection-report-print-btn" onClick={handlePrint}>Print</button>
            <button className="user-collection-report-print-btn" onClick={handleExport}>Export</button>
          </div>
          <div className='user-collection-report-tab'>
            <table className="user-collection-report-table">
              <thead>
                <tr>
                  <th>S.N</th>
                  <th>Category</th>
                  <th>Count</th>
                </tr>
              </thead>
              <tbody>
                {reportsData.map((row, index) => (
                  <tr key={index}>
                    <td>{row.serialNo}</td>
                    <td>{row.category}</td>
                    <td>{row.count}</td>
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
        </>
      )}
    </div>
  );
};

export default CategoryWiseLapReport;
