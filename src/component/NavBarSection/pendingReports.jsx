import React, { useState } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import "../NavBarSection/pendingReports.css";

function PendingReports() {
  const [dateFrom, setDateFrom] = useState('08/08/2024');
  const [dateTo, setDateTo] = useState('08/08/2024');
  const [category, setCategory] = useState('');

  const handlePrint = () => {
    const doc = new jsPDF();

    doc.text('Pending Reports', 14, 16);
    doc.text(`Reporting Date: From ${dateFrom} To ${dateTo}`, 14, 22);

    const tableColumn = ["Hospital No.", "Patient Name", "Age/Sex", "Phone Number", "Test Name", "Requesting Dept.", "Run No.", "Bar Code"];
    const tableRows = [];

    // Example row data; you would replace this with your actual data
    const rowData = ["12345", "John Doe", "25/M", "123-456-7890", "Blood Test", "ER", "001", "123456"];
    tableRows.push(rowData);

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 30,
    });

    // Generate the PDF and open it in a new tab
    const pdfData = doc.output('dataurlstring');
    const newWindow = window.open();
    if (newWindow) {
      newWindow.document.write(
        `<iframe src="${pdfData}" width="100%" height="100%" style="border:none;"></iframe>`
      );
    }
  };

  return (
    <div className="pendingReports-work-list">
      <h4>Pending Reports</h4>
      <div className="pendingReports-header">
    
        <div className="pendingReports-controls">
        {/* Your date range and button controls */}
          <div className="pendingReports-date-range">
            <label>
              From:
              <input type="date" defaultValue="2024-08-09" />
            </label>
            <label>
              To:
              <input type="date" defaultValue="2024-08-16" />
            </label>
            <button className="pendingReports-star-button">☆</button>
            <button className="pendingReports-ok-button">OK</button>
          </div>
      </div>
        <div className="pendingReports-category-select">
          <label>Category:</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">--Select Lab Category--</option>
            <option value="all"><input type="checkbox" /> Select All</option>
            <option value="biochemistry"><input type="checkbox" /> Biochemistry</option>
            <option value="hematology"><input type="checkbox" /> Hematology</option>
            <option value="microbiology"><input type="checkbox" /> Microbiology</option>
            <option value="parasitology"><input type="checkbox" /> Parasitology</option>
            <option value="serology"><input type="checkbox" /> Serology</option>
            <option value="immunoassay"><input type="checkbox" /> Immunoassay</option>
            <option value="pathology"><input type="checkbox" /> Pathology</option>
            <option value="virology"><input type="checkbox" /> Virology</option>
            {/* Add more options here */}
          </select>
        </div>
        <button className="pendingReports-load-button">Load <i className="fa fa-refresh" /></button>
      </div>
      <div className="pendingReports-searchbar-N-showing">
        
        <div className="pendingReports-search-bar">
              <i className="fa-solid fa-magnifying-glass"></i>
              <input
                type="text"
                placeholder="Search"
                className="pendingReports-search-input"
              />
            </div>
        <div className="pendingReports-results-info">
          <span>Showing 0 / 0 results</span>
          <button className="pendingReports-print-button" onClick={handlePrint}><i className="fa-solid fa-print"></i> Print</button>
        </div>
      </div>
      <div className="pendingReports-work-table">
        <table className="pendingReports-work-table">
          <thead>
            <tr>
              <th>Hospital No.</th>
              <th>Patient Name</th>
              <th>Age/Sex</th>
              <th>Phone Number</th>
              <th>Test Name</th>
              <th>Requesting Dept.</th>
              <th>Run No.</th>
              <th>Bar Code</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="9">Loading...</td>
            </tr>
          </tbody>
        </table>
        {/* <div className="pendingReports-pagination">
          <span>0 to 0 of 0</span>
          <button>First</button>
          <button>Previous</button>
          <span>Page 0 of 0</span>
          <button>Next</button>
          <button>Last</button>
        </div> */}
      </div>
    </div>
  );
}

export default PendingReports;
