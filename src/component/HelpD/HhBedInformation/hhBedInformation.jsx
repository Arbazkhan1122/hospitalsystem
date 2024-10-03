import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';
import "../HhBedInformation/hhBedInformation.css";

function HHBedInformation() {
  const [wardData, setWardData] = useState([]);

  useEffect(() => {
    // Fetch data from API
    fetch("http://localhost:1415/api/ward-department/getAllWardDepartment")
      .then(response => response.json())
      .then(data => setWardData(data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const handleExport = () => {
    const table = document.querySelector("table");

    const ws = XLSX.utils.table_to_sheet(table);

    const wb = XLSX.utils.book_new();

    const createdDate = `Created Date: ${new Date().toLocaleDateString()}`;
    XLSX.utils.sheet_add_aoa(ws, [[createdDate]], { origin: 'A1' });
    XLSX.utils.sheet_add_aoa(ws, [["Ward wise Bed Occupancy"]], { origin: 'A2' });

    XLSX.utils.sheet_add_aoa(ws, [[""]], { origin: 'A4' });

    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

    XLSX.writeFile(wb, "BedInformation.xlsx");
  };

  const calculateTotals = () => {
    return wardData.reduce((totals, ward) => {
      totals.occupied += ward.occupied;
      totals.vacant += ward.vacant;
      totals.reserved += ward.reserved;
      totals.total += ward.numberOfBeds;
      return totals;
    }, { occupied: 0, vacant: 0, reserved: 0, total: 0 });
  };

  const totals = calculateTotals();

  return (
    <div className="bedInformation-container">
      <div className="bedInformation-stats-container">
        <div className="hhBedInformation-stat-card total">
          <h2>Total No. of Beds</h2>
          <span className="hhBedInformation-number">{totals.total}</span>
        </div>
        <div className="hhBedInformation-stat-card available">
          <h2>Available No. of Beds</h2>
          <span className="hhBedInformation-number">{totals.vacant}</span>
        </div>
        <div className="hhBedInformation-stat-card occupied">
          <h2>Occupied No. of Beds</h2>
          <span className="hhBedInformation-number">{totals.occupied}</span>
        </div>
      </div>
      
      <div className="bedInformation-table-container">
        <h4>BED OCCUPANCY STATUS</h4>
        <div className="bedInformation-button-container">
          <button className="bedInformation-print-btn" onClick={handlePrint}>
            <i className="fa-solid fa-print"></i> Print
          </button>
          <button className="bedInformation-export-btn" onClick={handleExport}>
            <i className="fa-regular fa-file-excel"></i> Export
          </button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Ward Name</th>
              <th>Occupied</th>
              <th>Vacant</th>
              <th>Reserved</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {wardData.map((ward, index) => (
              <tr key={index}>
                <td className='hhBedInformation-wardNameColumn'>{ward.wardName}</td>
                <td>{ward.occupied}</td>
                <td>{ward.vacant}</td>
                <td>{ward.reserved}</td>
                <td>{ward.numberOfBeds}</td>
              </tr>
            ))}
            <tr className="bedInformation-total-row">
              <td>Total</td>
              <td>{totals.occupied}</td>
              <td>{totals.vacant}</td>
              <td>{totals.reserved}</td>
              <td>{totals.total}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default HHBedInformation;
