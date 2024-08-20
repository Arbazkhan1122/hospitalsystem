// src/components/ReportList.jsx
import React from 'react';
import "../DisReport/dispenReports.css"
// import './ReportList.css';

const DispenReportList = () => {
  const reports = [
    { name: 'User Collection Report', type: 'Report' },
    { name: 'Narcotics Daily Sales', type: 'Report' },
    { name: 'Daily Sales Report', type: 'Report' },
    { name: 'Settlement Summary Report', type: 'Report' },
    { name: 'PaymentMode Wise Report', type: 'Report' },
    { name: 'Stock Summary', type: 'Report' },
  ];

  return (
    <div className="dis-report-list">
      {reports.map((report, index) => (
        <div key={index} className="dis-report-item">
          <div className="dis-report-icon"></div>
          <div className="dis-report-info">
            <h3>{report.name}</h3>
            <p>{report.type}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DispenReportList;