import React, { useState, useEffect, useRef } from "react";
import "./SubLedger.css";
import CreateSubLedgerPopup from "./NewSubLedgerPopup";
import UpdateSubLedgerPopup from "./UpdateSubLedgerPopup";

const subledgerData = [
  {
    ledgerName: "Sales Ledger",
    subLedgerName: "Retail Sales",
    subLedgerCode: "RS001",
    openingBalance: 15000,
    description: "Retail sales account for the quarter",
    action: "Edit",
  },
  {
    ledgerName: "Purchase Ledger",
    subLedgerName: "Supplier A",
    subLedgerCode: "SUPA01",
    openingBalance: -8000,
    description: "Outstanding payments to Supplier A",
    action: "Edit",
  },
  {
    ledgerName: "Expense Ledger",
    subLedgerName: "Office Supplies",
    subLedgerCode: "EXP002",
    openingBalance: -1200,
    description: "Expenses for office supplies",
    action: "Edit",
  },
  {
    ledgerName: "Revenue Ledger",
    subLedgerName: "Consultancy Services",
    subLedgerCode: "CS003",
    openingBalance: 20000,
    description: "Revenue from consultancy services",
    action: "Edit",
  },
  {
    ledgerName: "Asset Ledger",
    subLedgerName: "Company Vehicle",
    subLedgerCode: "VEH004",
    openingBalance: 50000,
    description: "Depreciation of company vehicle",
    action: "Edit",
  },
];

function SubLedger() {
  const [showCreateSubLedgerPopup, setShowCreateSubLedgerPopup] =
    useState(false);
  const [showUpdateSubLedgerPopup, setShowUpdateSubLedgerPopup] =
    useState(false);
  const [selectedSubLedgerData, setSelectedSubLedgerData] = useState(null);

  const handleNewLedger = () => {
    setShowCreateSubLedgerPopup(true);
  };
  const handleUpdateLedger = (item) => {
    setSelectedSubLedgerData(item);
    setShowUpdateSubLedgerPopup(true);
  };

  const handleClosePopup = () => {
    setShowCreateSubLedgerPopup(false);
    setShowUpdateSubLedgerPopup(false);
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
    <div className="sub-ledger">
      <div className="sub-ledger-create">
        <button className="" onClick={handleNewLedger}>
          + Create Sub Ledger
        </button>
      </div>
      <div className="sub-ledger-search-bar">
        <div className="sub-ledger-search-container">
          <input type="text" placeholder="Search" />
          <i className="fas fa-search"></i>
        </div>
        <div>
          <span className="sub-ledger-results-count">
            Showing {subledgerData.length} / {subledgerData.length}
          </span>
          <button className="sub-ledger-print-btn">Print</button>
        </div>
      </div>
      <table className="sub-ledger-table" ref={tableRef}>
        <thead>
          <tr>
            {[
              "Ledger Name",
              "SubLedger Name",
              "SubLedger Code",
              "Opening Balance",
              "Description",
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
          {subledgerData?.map((item, index) => (
            <tr key={index}>
              <td>{item.ledgerName}</td>
              <td>{item.subLedgerName}</td>
              <td>{item.subLedgerCode}</td>
              <td>{item.openingBalance}</td>
              <td>{item.description}</td>
              <td>
                <button className="sub-ledger-table-btn" type="button">
                  Deactivate
                </button>
                <button
                  onClick={() => handleUpdateLedger(item)}
                  className="sub-ledger-table-btn"
                  type="button"
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}

          {/* <tr>
            <td className="no-show-coa" colSpan="15">
              No Rows To Show
            </td>
          </tr> */}
        </tbody>
      </table>
      {showCreateSubLedgerPopup && (
        <CreateSubLedgerPopup onClose={handleClosePopup} />
      )}
      {showUpdateSubLedgerPopup && (
        <UpdateSubLedgerPopup
          data={selectedSubLedgerData}
          closeupdate={handleClosePopup}
        />
      )}
    </div>
  );
}

export default SubLedger;
