import React, { useState, useRef } from 'react';
import './DataBaseBackup.css';
import { CSVLink } from 'react-csv';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import ReactToPrint from 'react-to-print';

const DatabaseBackup = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  // Reference to the table for printing
  const componentRef = useRef();

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const exportToCSV = () => {
    // Dummy data for CSV export
    const headers = ["Date", "File Name", "Database Name", "Database Version", "Action", "Status", "Action Detail"];
    const data = [
      ["2024-08-13", "backup1.sql", "my_database", "v1.0", "Backup", "Success", "Details"]
    ];

    setSuccessMessage('CSV export done successfully');
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);

    return { headers, data };
  };

  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.text("Database Backup Report", 10, 10);
    doc.autoTable({
      head: [["Date", "File Name", "Database Name", "Database Version", "Action", "Status", "Action Detail"]],
      body: [
        ["2024-08-13", "backup1.sql", "my_database", "v1.0", "Backup", "Success", "Details"]
      ]
    });
    doc.save('database-backup-report.pdf');

    setSuccessMessage('PDF export done successfully');
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const exportToXML = () => {
    const data = `<backup>
  <record>
    <date>2024-08-13</date>
    <fileName>backup1.sql</fileName>
    <databaseName>my_database</databaseName>
    <databaseVersion>v1.0</databaseVersion>
    <action>Backup</action>
    <status>Success</status>
    <actionDetail>Details</actionDetail>
  </record>
</backup>`;

    const blob = new Blob([data], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'database-backup-report.xml';
    a.click();
    URL.revokeObjectURL(url);

    setSuccessMessage('XML export done successfully');
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="database-backup-container">
      <div className="info-section">
        <h2><u>Database Information for Backup</u></h2>
        <div className="info-field">Database Name:</div>
        <div className="info-field">Database Version:</div>
        <div className="info-field">Backup File Name:</div>
        <div className="info-field">Last Backup Date:</div>
      </div>
      
      <div className="button-section">
        <div className="export-container">
          <div className="dropdown">
            <button className="export-button" onClick={handleDropdownToggle}>
              <span className="icon">↗</span> Database Export To ▼
            </button>
            {dropdownOpen && (
              <div className="dropdown-menu">
                <button onClick={exportToCSV}>Export to CSV</button>
                <button onClick={exportToPDF}>Export to PDF</button>
                <button onClick={exportToXML}>Export to XML</button>
              </div>
            )}
          </div>
          
          <button className="backup-button">
            <span className="icon">☰</span> Take Database Backup
          </button>
        </div>
      </div>
      
      <h3 className="details-header">DATABASE BACKUP/RESTORE DETAILS</h3>
      
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <button className="search-button">🔍</button>
      </div>
      
      <div className="results-info">
        <span>Showing 0 / 0 results</span>
        <button className="export-btn">Export</button>
        <ReactToPrint
          trigger={() => <button className="print-btn">Print</button>}
          content={() => componentRef.current}
        />
      </div>
      
      <table className="backup-table" ref={componentRef}>
        <thead>
          <tr>
            <th>Date</th>
            <th>File Name</th>
            <th>Database Name</th>
            <th>Database Version</th>
            <th>Action</th>
            <th>Status</th>
            <th>Action Detail</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="7" className="no-rows">No Rows To Show</td>
          </tr>
        </tbody>
      </table>
      
      <div className="pagination">
        <button className="disabled">First</button>
        <button className="disabled">Previous</button>
        <span>Page 0 of 0</span>
        <button className="disabled">Next</button>
        <button className="disabled">Last</button>
      </div>

      {/* Success Message Popup */}
      {showSuccess && (
        <div className="success-popup">
          <span className="success-icon">✔️</span> {successMessage}
        </div>
      )}
    </div>
  );
};

export default DatabaseBackup;
