/* // neha-ADT-homepage-19/09/24 */
import React, { useRef, useState } from 'react';
import './homepage.css';
import * as XLSX from "xlsx";
import { startResizing } from '../../TableHeadingResizing/ResizableColumns';

const Home = () => {
  const tableRef = useRef(null);
  const [columnWidths, setColumnWidths] = useState(0);

  const tableData = [
    { wardName: 'Brain Ward', occupied: 0, vacant: 1, reserved: 0, total: 1 },
    { wardName: 'Female Ward', occupied: 4, vacant: 2, reserved: 0, total: 6 },
    { wardName: 'ICU', occupied: 1, vacant: 5, reserved: 0, total: 6 },
    { wardName: 'Male Ward', occupied: 5, vacant: 0, reserved: 0, total: 5 },
    { wardName: 'MATERNITY WARD', occupied: 3, vacant: 5, reserved: 0, total: 8 },
    { wardName: 'Private Ward', occupied: 1, vacant: 4, reserved: 0, total: 5 },
    { wardName: 'Total', occupied: 14, vacant: 17, reserved: 0, total: 31 },
  ];

  const printTable = () => {
    if (tableRef.current) {
      window.print(); // Trigger the print function for the table
    }
  };

  return (
    <div>
      <div className="home-page-dashboard-cards">
        <div className="home-page-dashboard-card" style={{ backgroundColor: '#007bff' }}>
          <div className="home-page-card-content">
            <span className="home-page-card-icon">🛏️</span>
            <div className="home-page-card-text">
              <h5>Total No. of Beds</h5>
              <h5>31</h5>
            </div>
          </div>
        </div>
        <div className="home-page-dashboard-card" style={{ backgroundColor: '#20c997' }}>
          <div className="home-page-card-content">
            <span className="home-page-card-icon">🛏️</span>
            <div className="home-page-card-text">
              <h5>Available No. of Beds</h5>
              <h5>17</h5>
            </div>
          </div>
        </div>
        <div className="home-page-dashboard-card" style={{ backgroundColor: '#fd7e14' }}>
          <div className="home-page-card-content">
            <span className="home-page-card-icon">🛏️</span>
            <div className="home-page-card-text">
              <h5>Occupied No. of Beds</h5>
              <h5>14</h5>
            </div>
          </div>
        </div>
      </div>

      <div className="home-page-bed-feature-table">
        <div className="home-page-table-header">
          <h5>Bed Feature Details</h5>
          <div className="home-page-table-actions">
            <button onClick={printTable}>Print</button>
            <button>Export</button>
          </div>
        </div>

        <div className="table-container">
          <table ref={tableRef} className="adt-main-table">
            <thead>
              <tr>
                {["Ward Name", "Occupied", "Vacant", "Reserved", "Total"].map((header, index) => (
                  <th
                    key={index}
                    style={{ width: columnWidths[index] }}
                    className="rd-resizable-th"
                  >
                    <div className="rd-header-content">
                      <span>{header}</span>
                      <div
                        className="rd-resizer"
                        onMouseDown={startResizing(tableRef, setColumnWidths)(index)}
                      ></div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index}>
                  <td>{row.wardName}</td>
                  <td>{row.occupied}</td>
                  <td>{row.vacant}</td>
                  <td>{row.reserved}</td>
                  <td>{row.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
