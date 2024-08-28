import React, { useState, useRef } from "react";
import "./AssetsMaintain.css"; // Assuming you'll create a CSS file for styling

const AssetsMaintainence = () => {
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
    <div className="assetsMaintainance">
      <section className="assetsMaintainance-addCostCenter">
        <form className="assetsMaintainance-form">
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
      </section>

      <section className="assetsMaintainance-costCenterList">
        <div className="assetsMaintainance-search-bar">
          <div className="assetsMaintainance-search-container">
            <input type="text" placeholder="Search" />
            <i className="fas fa-search"></i>
          </div>
          <div>
            <span className="assetsMaintainance-results-count">
              Showing 0 / 0 results &nbsp;&nbsp;
            </span>
            <button className="assetsMaintainance-print-btn">Print</button>
          </div>
        </div>
        <table className="assetsMaintainance-table" ref={tableRef}>
          <thead>
            <tr>
              {[
                "Bar Code",
                "Asset Code",
                "Item Name",
                "Total life In Year",
                "Year Of Use",
                "Remaining Life",
                "Manufacture Date",
                "Warranty",
                "Remaining Days For Service",
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
              <td className="no-show-assetsMaintainance" colSpan={10}>
                No Row To Show
              </td>
            </tr>
          </tbody>
        </table>
        {/* <div className="assetsMaintainance-pagination">
          <button className="assetsMaintainance-paginationButton">First</button>
          <button className="assetsMaintainance-paginationButton">
            Previous
          </button>
          <span className="assetsMaintainance-paginationInfo">Page 1 of 1</span>
          <button className="assetsMaintainance-paginationButton">Next</button>
          <button className="assetsMaintainance-paginationButton">Last</button>
        </div> */}
      </section>
    </div>
  );
};

export default AssetsMaintainence;
