import React, { useState, useRef } from "react";
import "./fixedAssetsMovement.css";

const FixedAssetsMovement = () => {
  const [columnWidths, setColumnWidths] = useState({});
  const tableRef = useRef(null);

  const startResizing = (index) => (e) => {
    e.preventDefault();

    const startX = e.clientX;
    const startWidth = tableRef.current
      ? tableRef.current.querySelector(`th:nth-child(${index + 1})`).offsetWidth
      : 0;

    const onMouseMove = (e) => {
      const newWidth = startWidth + (e.clientX - startX);
      setColumnWidths((prevWidths) => ({
        ...prevWidths,
        [index]: `${newWidth}px`,
      }));
    };

    const onMouseUp = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  return (
    <div className="fixedAssetMovement-container">
      <h1>
        <i class="fas fa-money-bill-alt"></i> Fixed Assets Movement
      </h1>
      <div className="fixedAssetMovement-header">
        <select className="fixedAssetMovement-year-select">
          <option>2024</option>
        </select>
        <div className="fixedAssetMovement-date-range">
          <label>From:</label>
          <input
            type="date"
            value="2024-08-16"
            className="fixedAssetMovement-date-input"
          />
          <label>To:</label>
          <input
            type="date"
            value="2024-08-16"
            className="fixedAssetMovement-date-input"
          />
        </div>
        <button className="fixedAssetMovement-star-button">☆</button>
        <button className="fixedAssetMovement-show-report">Show Report</button>
      </div>
      <div className="fixedAssetMovement-filters">
        <div className="fixedAssetMovement-filter">
          <label>Select Employee:</label>
          <select className="fixedAssetMovement-select">
            <option>All Employees</option>
          </select>
        </div>
        <div className="fixedAssetMovement-filter">
          <label>Select Department:</label>
          <select className="fixedAssetMovement-select">
            <option>All Departments</option>
          </select>
        </div>
        <div className="fixedAssetMovement-filter">
          <label>Select Item:</label>
          <select className="fixedAssetMovement-select">
            <option>All Items</option>
          </select>
        </div>
        <div className="fixedAssetMovement-filter">
          <label>Search Via Reference No:</label>
          <input type="text" className="fixedAssetMovement-input" />
        </div>
      </div>

      <section className="fixedAssetMovement-costCenterList">
        <div className="fixedAssetMovement-search-bar">
          <div className="fixedAssetMovement-search-container">
            <input type="text" placeholder="Search" />
            <i className="fas fa-search"></i>
          </div>
          <div>
            <span className="fixedAssetMovement-results-count">
              Showing 0 / 0 results &nbsp;&nbsp;
            </span>
            <button className="fixedAssetMovement-print-btn">Print</button>
          </div>
        </div>
        <table className="fixedAssetMovement-table" ref={tableRef}>
          <thead>
            <tr>
              {[
                "Item Code",
                "Bar Code",
                "Asset Code",
                "Item Name",
                "Action",
              ].map((header, index) => (
                <th
                  key={index}
                  style={{ width: columnWidths[index] }}
                  className="resizable-th"
                >
                  <div className="header-content">
                    <span>{header}</span>
                    <div
                      className="resizer"
                      onMouseDown={startResizing(index)}
                    ></div>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="no-show-fixedAssetMovement" colSpan={5}>
                No Row To Show
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default FixedAssetsMovement;
