/* Ajhar Tamboli rdlListReports.jsx 19-09-24 */

import React, { useState, useEffect, useRef } from "react";
import "../ListReports/rdlListReports.css";
import * as XLSX from "xlsx"; // Import xlsx library
import RadiologyReportPopup from "./RadiologyReportPopup";
import { startResizing } from "../../../TableHeadingResizing/ResizableColumns";

const getCurrentDate = () => {
  return new Date().toISOString().split("T")[0];
};

function RDLListReports() {
  const [dateFrom, setDateFrom] = useState(getCurrentDate());
  const [dateTo, setDateTo] = useState(getCurrentDate());
  const [columnWidths, setColumnWidths] = useState({});
  const [showAddReport, setShowAddReport] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [reportsData, setReportsData] = useState([]);
  const [filteredReportsData, setFilteredReportsData] = useState([]);
  const [filter, setFilter] = useState("--All--");
  const tableRef = useRef(null);

  const handleDateFromChange = (event) => {
    setDateFrom(event.target.value);
  };

  const handleDateToChange = (event) => {
    setDateTo(event.target.value);
  };

  useEffect(() => {
    const currentDate = getCurrentDate();
    setDateFrom(currentDate);
    setDateTo(currentDate);
  }, []);

  const fetchImagingRequest = () => {
    let link;

    if (dateFrom && dateTo) {
      link = `http://localhost:1415/api/imaging-requisitions/by-status-date?status=Completed&startDate=${dateFrom}&endDate=${dateTo}`;
    } else {
      const todayDate = getCurrentDate();
      console.log(todayDate);

      link = `http://localhost:1415/api/imaging-requisitions/by-status-date?status=Completed&startDate=${todayDate}&endDate=${todayDate}`;
    }

    // Fetch the data
    fetch(link)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("Fetched data: ", data);
        setReportsData(data);
      })
      .catch((err) => {
        console.log("Fetch error: ", err);
      });
  };

  useEffect(() => {
    fetchImagingRequest();
  }, [dateFrom, dateTo]);

  useEffect(() => {
    // Apply the filter whenever the filter state changes
    if (filter === "--All--") {
      setFilteredReportsData(reportsData);
    } else {
      const filteredData = reportsData.filter(
        (report) =>
          report.imagingTypeDTO?.imagingTypeName.toUpperCase() === filter
      );
      setFilteredReportsData(filteredData);
    }
  }, [filter, reportsData]);

  const handleViewClick = (report) => {
    setSelectedRequest(report);
    setShowAddReport(true);
  };

  const closePopups = () => {
    setShowAddReport(false);
  };

  const printTable = () => {
    const printContents = document.getElementById("table-to-print").outerHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = `<html><head><title>Print</title></head><body>${printContents}</body></html>`;
    window.print();
    document.body.innerHTML = originalContents;
    window.location.reload(); // Reload the page to reset the state
  };

  const exportToExcel = () => {
    const tableData = [
      [
        "Sr No",
        "Date",
        "Patient Name",
        "Age/Sex",
        "Phone No",
        "Reporting Doctor",
        "Imaging Type",
        "Imaging Item",
      ],
      ...filteredReportsData.map((report, index) => [
        index + 1,
        report.imagingDate,
        report.patientId,
        report.patientDTO?.firstName + " " + report.patientDTO?.lastName ||
          report.newPatientVisitDTO?.firstName +
            " " +
            report.newPatientVisitDTO?.lastName ||
          "N/A",
        `${report.patientDTO?.age || "N/A"}Y / ${
          report.patientDTO?.gender || "N/A"
        }`,
        report.patientDTO?.phoneNumber || "N/A",
        report.prescriberDTO?.employeeName,
        report.imagingTypeDTO?.imagingTypeName,
        report.imagingItemDTO?.imagingItemName,
      ]),
    ];

    const ws = XLSX.utils.aoa_to_sheet(tableData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "ImagingReports");

    ws["!cols"] = [
      { wpx: 50 },
      { wpx: 100 },
      { wpx: 150 },
      { wpx: 150 },
      { wpx: 100 },
      { wpx: 120 },
      { wpx: 150 },
      { wpx: 120 },
      { wpx: 120 },
      { wpx: 80 },
    ];

    XLSX.writeFile(wb, "ImagingReports.xlsx");
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="rDLListReport-active-imaging-request">
      <header className="rDLListReport-header">
        <h4>* Imaging Reports of All Patients</h4>
        <div className="rDLListReport-filter">
          <label>
            Filter
            <select defaultValue={filter} onChange={handleFilterChange}>
              <option>--All--</option>
              <option value={"CT-SCAN"}>CT-SCAN</option>
              <option value={"USG"}>USG</option>
              <option value={"X-RAYS"}>X-RAY</option>
              <option value={"ECHO"}>ECHO</option>
            </select>
          </label>
        </div>
      </header>
      <div className="rDLListReport-controls">
        <div className="rDLListReport-date-range">
          <label>
            From:
            <input
              type="date"
              id="dateFrom"
              defaultValue={dateFrom}
              onChange={handleDateFromChange}
            />
          </label>
          <label>
            To:
            <input
              type="date"
              id="dateTo"
              defaultValue={dateTo}
              onChange={handleDateToChange}
            />
          </label>
          <button className="rDLListReport-star-button">☆</button>
          <button className="rDLListReport-more-btn">-</button>
          <button className="rDLListReport-ok-button">OK</button>
        </div>
      </div>
      <div className="rDLListReport-search-N-results">
        <div className="rDLListReport-search-bar">
          <input type="text" placeholder="Search" />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className="rDLListReport-results-info">
          Showing {filteredReportsData.length} / {reportsData.length} results
          <button
            className="rDLListReport-ex-pri-buttons"
            onClick={exportToExcel}
          >
            <i className="fa-regular fa-file-excel"></i> Export
          </button>
          <button className="rDLListReport-ex-pri-buttons" onClick={printTable}>
            <i class="fa-solid fa-print"></i> Print
          </button>
        </div>
      </div>
      <div className="table-container" id="table-to-print">
        <table ref={tableRef}>
          <thead>
            <tr>
              {[
                "Sr No",
                "Date",
                "Patient Name",
                "Age/Sex",
                "Phone No",
                "Reporting Doctor",
                "Imaging Type",
                "Imaging Item",
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
            {filteredReportsData.map((report, index) => (
              <tr key={report.imagingId}>
                <td>{index + 1}</td>
                <td>{report.imagingDate}</td>
                <td>
                  {report.patientDTO?.firstName ||
                    report.newPatientVisitDTO?.firstName}{" "}
                  {report.patientDTO?.lastName ||
                    report.newPatientVisitDTO?.lastName}
                </td>
                <td>
                  {report.patientDTO?.age || report.newPatientVisitDTO?.age} Y
                </td>
                <td>
                  {report.patientDTO?.phoneNumber ||
                    report.newPatientVisitDTO?.phoneNumber ||
                    "N/A"}
                </td>
                <td>{report.prescriberDTO?.employeeName || "Self"}</td>
                <td>{report.imagingTypeDTO?.imagingTypeName}</td>
                <td>{report.imagingItemDTO?.imagingItemName}</td>
                <td>
                  <button
                    className="rDLListReport-action-button-add-reports"
                    onClick={() => handleViewClick(report)}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showAddReport && (
        <RadiologyReportPopup
          onClose={closePopups}
          selectedRequest={selectedRequest}
        />
      )}
    </div>
  );
}

export default RDLListReports;
