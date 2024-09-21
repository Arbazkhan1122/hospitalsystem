import React, { useState, useEffect, useRef } from "react";
import "../ListRequest/rdlListRequest.css";
import AddReportForm from "./rdlAddReport";
import RDLAddScanDoneDetails from "./rdlScanDone";
import { startResizing } from "../../../TableHeadingResizing/ResizableColumns";

function RDLListRequest() {
  const [columnWidths, setColumnWidths] = useState({});
  const [showAddReport, setShowAddReport] = useState(false);
  const [showScanDone, setShowScanDone] = useState(false);
  const [imagingRequests, setImagingRequests] = useState([]);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState("--All--");
  const [searchQuery, setSearchQuery] = useState("");
  const tableRef = useRef(null);

  useEffect(() => {
    // Fetch imaging requests and patients data
    fetch("http://localhost:1415/api/patient-imaging-requisitions/all")
      .then((response) => response.json())
      .then((data) => {
        setImagingRequests(data);
        console.log(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const updateStatus = (id, filmTypeId, quantity, status, scannedOn) => {
    fetch(
      `http://localhost:1415/api/patient-imaging-requisitions/update-film-type-and-quantity?filmTypeId=${filmTypeId}&quantity=${quantity}&imagingId=${id}&status=${status}&scannedOn=${scannedOn}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        // Update local state to reflect changes
        setImagingRequests((prevRequests) =>
          prevRequests.map((request) =>
            request.imagingId === id ? { ...request, ...data } : request
          )
        );
        setShowScanDone(false);
      })
      .catch((error) => {
        console.error("Error updating status:", error);
      });
  };

  const handleAddReportClick = (request) => {
    setSelectedRequest(request);
    setShowAddReport(true);
  };

  const handleScanDoneClick = (request) => {
    setSelectedRequest(request);
    setShowScanDone(true);
  };

  const closePopups = () => {
    setShowAddReport(false);
    setShowScanDone(false);
  };

  const handleFilterChange = (e) => {
    setSelectedFilter(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const applyFilters = () => {
    return imagingRequests.filter((request) => {
      const matchesFilter =
        selectedFilter === "--All--" ||
        request.imagingTypeDTO?.imagingTypeName.toUpperCase() ===
          selectedFilter;
      const matchesSearch =
        request.patientDTO?.firstName.toLowerCase().includes(searchQuery) ||
        request.patientDTO?.lastName.toLowerCase().includes(searchQuery) ||
        request.prescriberDTO?.employeeName
          .toLowerCase()
          .includes(searchQuery) ||
        request.imagingItemDTO?.imagingItemName
          .toLowerCase()
          .includes(searchQuery);

      return matchesFilter && matchesSearch;
    });
  };

  const filteredRequests = applyFilters().filter(
    (request) => request.status?.toLowerCase() !== "completed"
  );

  return (
    <div className="rDLListRequest-active-imaging-request">
      <header className="rDLListRequest-header">
        <h4>* ACTIVE IMAGING REQUEST</h4>
        <div className="rDLListRequest-filter">
          <label>
            Filter
            <select value={selectedFilter} onChange={handleFilterChange}>
              <option>--All--</option>
              <option>CT-SCAN</option>
              <option>USG</option>
              <option>X-RAY</option>
              <option>ECHO</option>
            </select>
          </label>
        </div>
      </header>
      <div className="rDLListRequest-controls">
        <div className="rDLListRequest-date-range">
          <label>
            From:
            <input type="date" defaultValue="2024-08-09" />
          </label>
          <label>
            To:
            <input type="date" defaultValue="2024-08-16" />
          </label>
          <button className="rDLListRequest-star-button">☆</button>
          <button className="rDLListRequest-ok-button">OK</button>
        </div>
      </div>
      <div className="rDLListRequest-search-N-results">
        <div className="rDLListRequest-search-bar">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className="rDLListRequest-results-info">
          {filteredRequests.length > 0
            ? `Showing ${filteredRequests.length} result(s)`
            : "No rows to show"}
        </div>
      </div>
      <div className="table-container">
        <table ref={tableRef}>
          <thead>
            <tr>
              {[
                "Id",
                "Patient Name",
                "Age/Sex",
                "Prescriber",
                "Type",
                "Imaging Name",
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
                      onMouseDown={startResizing(
                        tableRef,
                        setColumnWidths
                      )(index)}
                    ></div>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredRequests.length > 0 ? (
              filteredRequests.map((request, index) => (
                <tr key={request.imagingId}>
                  <td>{index + 1}</td>
                  <td>{request.patientDTO?.firstName}</td>
                  <td>{request.patientDTO?.age}</td>
                  <td>{request.prescriberDTO?.employeeName || "self"}</td>
                  <td>{request.imagingTypeDTO?.imagingTypeName}</td>
                  <td>{request.imagingItemDTO?.imagingItemName}</td>
                  <td>
                    {request.status?.toLowerCase() === "pending" && (
                      <button
                        className="rDLListRequest-scan-done"
                        onClick={() => handleScanDoneClick(request)}
                      >
                        Scan Done
                      </button>
                    )}
                    {request.status?.toLowerCase() === "active" && (
                      <button
                        className="rDLListRequest-add-report"
                        onClick={() => handleAddReportClick(request)}
                      >
                        Add Report
                      </button>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="rDLListRequest-no-rows">
                  No rows to show
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* AddReportForm as a modal */}
      {showAddReport && (
        <div className="rDLListRequest-modal-overlay">
          <div className="rDLListRequest-modal-content">
            <button
              className="rDLListRequest-close-modal"
              onClick={closePopups}
            >
              &times;
            </button>
            <AddReportForm
              onClose={closePopups}
              selectedRequest={selectedRequest}
            />
          </div>
        </div>
      )}

      {/* ScanDoneDetails as a modal */}
      {showScanDone && (
        <div className="rDLListRequest-modal-overlay">
          <div className="rDLListRequest-modal-content">
            <RDLAddScanDoneDetails
              onClose={closePopups}
              onUpdateStatus={(scannedOn, filmType, quantity, remarks) => {
                updateStatus(
                  selectedRequest.imagingId,
                  filmType,
                  quantity,
                  "active",
                  scannedOn
                );
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default RDLListRequest;
