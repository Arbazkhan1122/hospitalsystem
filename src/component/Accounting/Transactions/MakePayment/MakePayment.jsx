import React, { useState, useRef } from "react";
import "./MakePayment.css";

function MakePayment() {
  const [module, setModule] = useState("Pharmacy");

  const handleModuleChange = (event) => {
    setModule(event.target.value);
  };

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
    <>
      <form className="mp-form">
        <div className="mp-form-row">
          <div className="mp-form-group">
            <label>Module</label>
            <select value={module} onChange={handleModuleChange}>
              <option value="Pharmacy">Pharmacy</option>
              <option value="Inventory">Inventory</option>
            </select>
          </div>
          <div className="mp-form-group">
            <label>{module === "Pharmacy" ? "Supplier" : "Vendor"}</label>
            <input
              type="text"
              placeholder={`Enter ${
                module === "Pharmacy" ? "Supplier" : "Vendor"
              } Name`}
            />
          </div>
          <div className="mp-form-group">
            <label>{module === "Pharmacy" ? "Invoice No" : "GR No"}</label>
            <input
              type="text"
              className="mp-invoice-input"
              placeholder={`Enter ${
                module === "Pharmacy" ? "Invoice" : "GR"
              } Number`}
            />
          </div>
          <div className="mp-form-group">
            <label>GR Date (Search by date?)</label>
            <input type="date" value="2024-08-12" />
          </div>
          <button className="mp-load-btn" type="button">
            Load
          </button>
        </div>
      </form>

      <div className="mp-results">
        <div className="mp-search-bar">
          <div className="mp-search-container">
            <input type="text" placeholder="Search" />
            <i className="fas fa-search"></i>
          </div>
          <div>
            <span className="mp-results-count">Showing 0 / 0 results</span>
            <button className="mp-print-btn">Print</button>
          </div>
        </div>
        <table className="mp-table" ref={tableRef}>
          <thead>
            <tr>
              {[
                "GR Date",
                "GR Number",
                "Vendor Name",
                "Total Amount",
                "Paid Amount",
                "Due Amount",
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
              <td colSpan="7" className="mp-no-row">
                No Rows To Show
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default MakePayment;