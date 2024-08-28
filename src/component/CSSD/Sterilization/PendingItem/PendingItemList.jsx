import React, { useState, useRef } from "react";
import "./pendingItem.css";

function PendingItemList() {
  const [columnWidths, setColumnWidths] = useState({});
  const tableRef = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [fromDate, setFromDate] = useState("2024-08-12");
  const [toDate, setToDate] = useState("2024-08-12");

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

  const handleDashClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (option) => {
    const currentDate = new Date();
    let newFromDate = new Date();

    if (option === "Last 1 Week") {
      newFromDate.setDate(currentDate.getDate() - 7);
    } else if (option === "Last 1 Month") {
      newFromDate.setMonth(currentDate.getMonth() - 1);
    } else if (option === "Last 3 Months") {
      newFromDate.setMonth(currentDate.getMonth() - 3);
    }

    setFromDate(newFromDate.toISOString().split("T")[0]);
    setToDate(currentDate.toISOString().split("T")[0]);
    setIsDropdownOpen(false);
  };

  return (
    <div className="pendingItem-main">
      <form className="pendingItem-form">
        <div className="pendingItem-form-input-group">
          <label>From:</label>
          <input
            type="date"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
          />
          <label>To:</label>
          <input
            type="date"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
          />
          <button
            type="button"
            className="pendingItem-dash-btn"
            onClick={handleDashClick}
          >
            -
          </button>
          {isDropdownOpen && (
            <div className="pendingItem-dropdown">
              <div onClick={() => handleOptionClick("Last 1 Week")}>
                Last 1 Week
              </div>
              <div onClick={() => handleOptionClick("Last 1 Month")}>
                Last 1 Month
              </div>
              <div onClick={() => handleOptionClick("Last 3 Months")}>
                Last 3 Months
              </div>
            </div>
          )}
          <button className="pendingItem-star-btn">☆</button>
          <button className="pendingItem-ok-btn">Ok</button>
        </div>
      </form>

      <div className="pendingItem-search">
        <div className="pendingItem-search-bar">
          <input type="text" placeholder="Search" />
          <i className="fas fa-search"></i>
        </div>
        <div className="pendingItem-results">
          <span>Showing 0 / 0 results</span>
          <button className="pendingItem-export-btn">Export</button>
          <button className="pendingItem-print-btn">Print</button>
        </div>
      </div>

      <table className="pendingItem-table" ref={tableRef}>
        <thead>
          <tr>
            {[
              "Request Date",
              "Item Name",
              "Code",
              "Tag Number",
              "Request From",
              "Requested By",
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
            <td colSpan="7" className="pendingItem-no-rows">
              No Rows To Show
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default PendingItemList;
