import React, { useState } from 'react';
import SupplierWiseStock from './SupplierWiseStock'; // Import the SupplierWiseStock component
import SupplierInformationReport from './SupplierInformationReport'; // Import the SupplierInformationReport component
import './Supplier.css';

const Supplier = () => {
  const [selectedReport, setSelectedReport] = useState(null); // State to track the selected report

  const supplierReports = [
    { title: 'Supplier Wise Stock', icon: 'chart-line' },
    { title: 'Supplier Information Report', icon: 'folder' },
  ];

  const handleReportClick = (reportTitle) => {
    setSelectedReport(reportTitle); // Set the selected report when clicked
  };

  // Render the selected report or the list of reports
  return (
    <div className="supplier-reports-boxes">
      {selectedReport === 'Supplier Wise Stock' ? (
        <SupplierWiseStock /> // Render the SupplierWiseStock component when selected
      ) : selectedReport === 'Supplier Information Report' ? (
        <SupplierInformationReport /> // Render the SupplierInformationReport component when selected
      ) : (
        supplierReports.map((item, index) => (
          <div
            key={index}
            className="supplier-report-box"
            onClick={() => handleReportClick(item.title)} // Handle report click
          >
            <i className={`supplier-report-icon fas fa-${item.icon}`}></i>
            <div className="supplier-report-content">
              <h3>{item.title}</h3>
              <p>Report</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Supplier;
