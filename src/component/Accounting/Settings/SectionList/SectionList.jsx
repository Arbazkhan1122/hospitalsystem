import React, { useState, useRef } from "react";
import "./Section.css";

const SectionList = () => {
  const sectionData = [
    {
      sectionId: 1,
      sectionName: "Inventory",
      sectionCode: "INV",
    },
    {
      sectionId: 2,
      sectionName: "Billing",
      sectionCode: "BL",
    },
    {
      sectionId: 3,
      sectionName: "Pharmacy",
      sectionCode: "PH",
    },
    {
      sectionId: 1,
      sectionName: "Manual_Voucher",
      sectionCode: "MV",
    },
    {
      sectionId: 1,
      sectionName: "Incentive",
      sectionCode: "INCTV",
    },
  ];
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
    <div className="sectionList-management">
      <div className="sectionList-search-bar">
        <div className="sectionList-search-container">
          <input type="text" placeholder="Search" />
          <i className="fas fa-search"></i>
        </div>
        <div>
          <span className="sectionList-results-count">
            Showing {sectionData.length} / {sectionData.length}
          </span>
          <button className="sectionList-print-btn">Print</button>
        </div>
      </div>
      <table className="sectionList-table" ref={tableRef}>
        <thead>
          <tr>
            {["Section Id", "Section Name", "Section Code"].map(
              (header, index) => (
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
              )
            )}
          </tr>
        </thead>
        <tbody>
          {sectionData?.map((item, index) => (
            <tr key={index}>
              <td>{item.sectionId}</td>
              <td>{item.sectionName}</td>
              <td>{item.sectionCode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SectionList;
