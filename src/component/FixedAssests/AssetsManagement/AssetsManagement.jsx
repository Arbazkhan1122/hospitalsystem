import React, { useState, useRef } from "react";
import "./Assetsmanagement.css"; // Assuming you'll create a CSS file for styling

const CostCenterItemList = () => {
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
    <div className="assetsManagement">
      <section className="assetsManagement-addCostCenter">
        <form className="assetsManagement-form">
          <label>
            Selected:
            <select>
              <option value={"allassets"}>All Assets</option>
              <option value={"damagedassets"}>Damaged Assets</option>
              <option value={"warrantyexpiredassets"}>
                Warranty Expired Assets
              </option>
            </select>
          </label>
          <label>
            <input type="checkbox" />
            show only cold storage item
          </label>
          <label>
            <input type="checkbox" />
            show assets maintained by me
          </label>
          <label>
            Substore:
            <select>
              <option value={"allstore"}>All Store</option>
              <option value={"accounts"}>Accounts</option>
              <option value={"brainoperationstore"}>
                Brain Operations Store
              </option>
              <option value={"femalewardsubstore"}>Female Ward Substore</option>
              <option value={"icusubstore"}>ICU Sub Store</option>
              <option value={"malewardsubstore"}>Male Ward Substore</option>
              <option value={"maternitysubstore"}>Maternity Substore</option>
              <option value={"operationsubstore"}>Operations Substore</option>
              <option value={"privatesubstore"}>Private Substore</option>
            </select>
          </label>
        </form>
      </section>

      <section className="assetsManagement-costCenterList">
        <div className="assetsManagement-search-bar">
          <div className="assetsManagement-search-container">
            <input type="text" placeholder="Search" />
            <i className="fas fa-search"></i>
          </div>
          <div>
            <span className="assetsManagement-results-count">
              Showing 0 / 0 results &nbsp;&nbsp;
            </span>
            <button className="assetsManagement-print-btn">Print</button>
          </div>
        </div>
        <table className="assetsManagement-table" ref={tableRef}>
          <thead>
            <tr>
              {[
                "Bar Code",
                "Item Name",
                "Vendor Name",
                "Specification",
                "Model No",
                "Asset Location",
                "Sub Store",
                "Asset Holder",
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
              <td className="no-show-assetsManagement" colSpan={9}>
                No Row To Show
              </td>
            </tr>
          </tbody>
        </table>
        {/* <div className="assetsManagement-pagination">
          <button className="assetsManagement-paginationButton">First</button>
          <button className="assetsManagement-paginationButton">
            Previous
          </button>
          <span className="assetsManagement-paginationInfo">Page 1 of 1</span>
          <button className="assetsManagement-paginationButton">Next</button>
          <button className="assetsManagement-paginationButton">Last</button>
        </div> */}
      </section>
    </div>
  );
};

export default CostCenterItemList;
