import React, { useState, useEffect } from "react";
import "./Requisition.css";
import DirectDispatch from "./DirectDispatch";
import DispatchTable from "./DispatchTable";
import RequisitionDetail from "./RequisitionDetail";
import axios from "axios";

const Requisition = () => {
  const [dateFrom, setDateFrom] = useState("2024-08-07");
  const [dateTo, setDateTo] = useState("2024-08-07");
  const [searchQuery, setSearchQuery] = useState("");
  const [showDirect, setShowDirect] = useState(false);
  const [status, setStatus] = useState("All");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showDispatchTable, setShowDispatchTable] = useState(false);
  const [selectedDispatch, setSelectedDispatch] = useState(null);
  const [showRequisitionDetail, setShowRequisitionDetail] = useState(false);
  const [selectedRequisition, setSelectedRequisition] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://192.168.1.39:8080/api/dispatch/getAllDispatches"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSearch = () => {
    console.log("Searching for:", searchQuery);
  };

  const handlePrint = () => {
    console.log("Printing...");
  };

  const handleDispatchListClick = (dispatch) => {
    setSelectedDispatch(dispatch);
    setShowDispatchTable(true);
  };

  const handleRequisitionViewClick = (requisition) => {
    setSelectedRequisition(requisition);
    setShowRequisitionDetail(true);
  };

  const closeRequisitionDetail = () => {
    setShowRequisitionDetail(false);
    setSelectedRequisition(null);
  };

  const closeDispatchTable = () => {
    setShowDispatchTable(false);
    setSelectedDispatch(null);
  };

  return (
    <div className="requisition-inventory-content">
      {!showDirect ? (
        <>
          {!showDispatchTable ? (
            <>
              <button
                className="requisition-inventory-direct-dispatch"
                onClick={() => setShowDirect(true)}
              >
                Direct Dispatch ➚
              </button>
              <div className="requisition-inventory-status-filter">
                <span>List by Requisition Status:</span>
                {["Pending", "Complete", "Cancelled", "All"].map((s) => (
                  <label key={s}>
                    <input
                      type="radio"
                      name="status"
                      checked={status === s}
                      onChange={() => setStatus(s)}
                    />{" "}
                    {s}
                  </label>
                ))}
              </div>
              <div className="requisition-inventory-date-range">
                <label>
                  From:{" "}
                  <input
                    type="date"
                    value={dateFrom}
                    onChange={(e) => setDateFrom(e.target.value)}
                  />
                </label>
                <label>
                  To:{" "}
                  <input
                    type="date"
                    value={dateTo}
                    onChange={(e) => setDateTo(e.target.value)}
                  />
                </label>
                <button className="requisition-inventory-star">☆</button>
                <button className="requisition-inventory-minus">-</button>
                <button className="requisition-inventory-ok">✓ OK</button>
              </div>
              <div className="requisition-inventory-search-bar">
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button onClick={handleSearch}>🔍</button>
              </div>
              <div className="requisition-inventory-results">
                <span>Showing {data.length} results</span>
                <button onClick={handlePrint}>Print</button>
              </div>
              <div className="requisition-ta">
                <table className="requisition-inventory-requisition-table">
                  <thead>
                    <tr>
                      <th>Req.No</th>
                      <th>StoreName</th>
                      <th>Req.Date</th>
                      <th>Requested By</th>
                      <th>Received By</th>
                      <th>Status</th>
                      <th>Verification Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.length > 0 ? (
                      data.map((item, index) => (
                        <tr key={index}>
                          <td>{item.id}</td>
                          <td>{item.storeName}</td>
                          <td>{item.dispatchDate}</td>
                          <td>Mr.admin</td>
                          <td>{item.receivedBy}</td>
                          <td>Complete</td>
                          <td>N/A</td>
                          <td>
                            <button
                              className="requisition-inventory-direct-button"
                              onClick={() => handleDispatchListClick(item)}
                            >
                              Dispatch List
                            </button>
                            <button
                              className="requisition-inventory-direct-button"
                              onClick={() => handleRequisitionViewClick(item)}
                            >
                              Requisition View
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="8">No Rows To Show</td>
                      </tr>
                    )}
                  </tbody>
                </table>
                <div className="requisition-inventory-requisition-pagination">
                  <div className="requisition-inventory-requisition-pagination-div">
                    <span>0 to 0 of 0</span>
                    <button>First</button>
                    <button>Previous</button>
                    <span>Page 0 of 0</span>
                    <button>Next</button>
                    <button>Last</button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="requisition-dispatch-modal-overlay">
              <div className="requisition-dispatch-modal-content">
                <DispatchTable dispatch={selectedDispatch} />
                <button className="requisition-dispatch-modal-close" onClick={closeDispatchTable}>Close</button>
              </div>
            </div>
          )}
        </>
      ) : (
        <DirectDispatch />
      )}

      {showRequisitionDetail && selectedRequisition && (
        <RequisitionDetail
          requisition={selectedRequisition}
          onClose={closeRequisitionDetail}
        />
      )}
    </div>
  );
};

export default Requisition;
