import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './UserCollectionReport.css';

const DischargedPatient = () => {
  const [showReport, setShowReport] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleExport = () => {
    console.log('Export function not yet implemented');
  };

  const handlePopupToggle = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const handleDateRangeSelection = (range) => {
    console.log('Selected Range:', range);
    setIsPopupOpen(false);
  };

  const reportsData = [
    {
      ipNumber: 'H2400023',
      patientName: 'ANGEL VARGAS MONTE...',
      hospitalNo: '2407003799',
      admittedDate: '2024-07-30',
      dischargedDate: '2024-08-28',
      admittingDoc: 'Dr VICTOR OCHIENG OKECH',
    },
    {
      ipNumber: 'H2400028',
      patientName: 'Shubham Potawade',
      hospitalNo: '2408003832',
      admittedDate: '2024-08-27',
      dischargedDate: '2024-08-27',
      admittingDoc: 'Mrs BRENDA MWANIA WANJIRI',
    },
  ];

  const handleShowReport = () => {
    setShowReport(true);
  };

  return (
    <div className="user-collection-report">
      <div className="user-collection-report-header">
        <h3 className="user-collection-report-title">⚛  Discharged Patients Report</h3>
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

      {showReport && (
        <>
          <div className="user-collection-report-controls">
            <input
              type="text"
              className="user-collection-report-search"
              placeholder="Search..."
              onChange={(e) => console.log(e.target.value)} // Implement handleSearch if needed
            />
            <div className="user-collection-page-results-info">
              Showing {reportsData.length}/{reportsData.length} results
            </div>
            <button className="user-collection-report-print-btn" onClick={handlePrint}>Print</button>
            <button className="user-collection-report-print-btn" onClick={handleExport}>Export</button>
          </div>

          <div className="user-collection-report-tab">
            <table className="user-collection-report-table">
              <thead>
                <tr>
                  <th>IP Number</th>
                  <th>Patient Name</th>
                  <th>Hospital No</th>
                  <th>Admitted On</th>
                  <th>Discharged On</th>
                  <th>Admitting Doctor</th>
                </tr>
              </thead>
              <tbody>
                {reportsData.map((row, index) => (
                  <tr key={index}>
                    <td>{row.ipNumber}</td>
                    <td>{row.patientName}</td>
                    <td>{row.hospitalNo}</td>
                    <td>{row.admittedDate}</td>
                    <td>{row.dischargedDate}</td>
                    <td>{row.admittingDoc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="user-collection-report-page-no">
              <Button className="user-collection-report-pagination-btn">First</Button>
              <Button className="user-collection-report-pagination-btn">Previous</Button>
              <span>Page 1 of 1</span>
              <Button className="user-collection-report-pagination-btn">Next</Button>
              <Button className="user-collection-report-pagination-btn">Last</Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DischargedPatient;
