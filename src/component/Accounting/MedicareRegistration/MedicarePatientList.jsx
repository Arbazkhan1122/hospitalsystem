import React, { useRef, useState } from "react";
import "./MedicarePatientList.css";
import NewMemberPopup from "./NewMemberPopup";
import NewDependentPopup from "./NewDependentPopup";

function MedicarePatientList() {
  const [showNewMemberPopup, setShowNewMemberPopup] = useState(false);
  const [showNewDependentPopup, setShowNewDependentPopup] = useState(false);

  const handleNewMember = () => {
    setShowNewMemberPopup(true);
  };

  const handleNewDependent = () => {
    setShowNewDependentPopup(true);
  };

  const handleClosePopup = () => {
    setShowNewMemberPopup(false);
    setShowNewDependentPopup(false);
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
    <div className="mpl">
      <h1>Medicare Patient List</h1>
      <div className="mpl-top-filter">
        <div className="mpl-actions">
          <button className="mpl-new-member" onClick={handleNewMember}>
            + New Member
          </button>
          <button className="mpl-new-dependent" onClick={handleNewDependent}>
            + New Dependent
          </button>
        </div>
        <div className="mpl-filters">
          <label>
            <input type="checkbox" checked readOnly /> All
          </label>
          <label>
            <input type="checkbox" /> Active Only
          </label>
          <label>
            <input type="checkbox" /> InActive Only
          </label>
          <label>
            Category:
            <select>
              <option value="">All</option>
            </select>
          </label>
        </div>
      </div>
      <div className="mpl-search-container">
        <div className="mpl-search">
          <input type="text" placeholder="Search" />
          <i className="fas fa-search"></i>
        </div>
        <div className="mpl-results">
          Showing 0 / 0 results
          <button className="mpl-export">Export</button>
          <button className="mpl-print">Print</button>
        </div>
      </div>
      <table className="mpl-table" ref={tableRef}>
        <thead>
          <tr>
            {[
              "Category",
              "Medicare No",
              "Name",
              "Age/Sex",
              "HospitalNo",
              "Institution",
              "Is Dependent",
              "Employee",
              "Department",
              "Designation",
              "Relation",
              "Ins. No",
              "Remarks",
              "IsActive",
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
            <td className="no-show-mpl" colSpan="15">
              No Rows To Show
            </td>
          </tr>
        </tbody>
      </table>
      {/* <div className="mpl-pagination">
        <button>First</button>
        <button>Previous</button>
        <span>Page 0 of 0</span>
        <button>Next</button>
        <button>Last</button>
      </div> */}
      {showNewMemberPopup && <NewMemberPopup onClose={handleClosePopup} />}
      {showNewDependentPopup && (
        <NewDependentPopup onClose={handleClosePopup} />
      )}
    </div>
  );
}

export default MedicarePatientList;
