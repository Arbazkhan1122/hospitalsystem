import React, { useState, useRef } from "react";
import "./DAD.css"; // Assuming you'll create a CSS file for styling

const DepreciationAndDiscarding = () => {
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
    <div className="DAD">
      {/* <section className="DAD-addCostCenter">
        <form className="DAD-form">
          <div>
            <label>
              <input type="checkbox" />
              Show assets maintained by me
            </label>
          </div>
          <div>
            <label>
              <strong>List by Status:</strong>
            </label>
            <label htmlFor="all">
              <input name="status" id="all" defaultChecked type="radio" /> All
            </label>
            <label htmlFor="underrepair">
              <input name="status" id="underrepair" type="radio" /> Under Repair
            </label>
            <label htmlFor="faulty">
              <input name="status" id="faulty" type="radio" /> Faulty
            </label>
            <label htmlFor="service">
              <input name="status" id="service" type="radio" /> Service
            </label>
          </div>
        </form>
      </section> */}

      <section className="DAD-costCenterList">
        <div className="DAD-search-bar">
          <div className="DAD-search-container">
            <input type="text" placeholder="Search" />
            <i className="fas fa-search"></i>
          </div>
          <div>
            <span className="DAD-results-count">
              Showing 0 / 0 results &nbsp;&nbsp;
            </span>
            <button className="DAD-print-btn">Print</button>
          </div>
        </div>
        <table className="DAD-table" ref={tableRef}>
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
              <td className="no-show-DAD" colSpan={5}>
                No Row To Show
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default DepreciationAndDiscarding;
