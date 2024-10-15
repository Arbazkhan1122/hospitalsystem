import React, { useState, useRef, useEffect } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import "../NavBarSection/pendingReports.css";
import { startResizing } from "../../TableHeadingResizing/ResizableColumns";
import { useNavigate } from "react-router-dom";

function PendingReports() {
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [category, setCategory] = useState("");
  const [labResult, setLabResult] = useState(null);
  const [columnWidths, setColumnWidths] = useState({});
  const tableRef = useRef(null);

  const navigate = useNavigate();

  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed, so add 1
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

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
    let link;

    if (dateFrom != "" && dateTo != "") {
      link = `http://localhost:1415/api/lab-result/by-verify-dateRange?isVerified=No&startDate=${dateFrom}&endDate=${dateTo}`;
    } else {
      let TodaysDate = new Date().toISOString().split("T")[0];
      link = `http://localhost:1415/api/lab-result/by-verify-dateRange?isVerified=No&startDate=${TodaysDate}&endDate=${TodaysDate}`;
    }
    fetch(link)
      .then((res) => res.json())
      .then((data) => setLabResult(data))
      .catch((err) => {
        console.log(err);
      });
  }, [dateFrom, dateTo]);

  const handlePrint = () => {
    const doc = new jsPDF();
    doc.text("Pending Reports", 14, 16);
    doc.text(`Reporting Date: From ${dateFrom} To ${dateTo}`, 14, 22);

    const tableColumn = [
      "Hospital No.",
      "Patient Name",
      "Age/Sex",
      "Phone Number",
      "Test Name",
      "Requesting Dept.",
      "Run No.",
      "Bar Code",
    ];
    const tableRows = [];

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 30,
    });

    // Generate the PDF and open it in a new tab
    const pdfData = doc.output("dataurlstring");
    const newWindow = window.open();
    if (newWindow) {
      newWindow.document.write(
        `<iframe src="${pdfData}" width="100%" height="100%" style="border:none;"></iframe>`
      );
    }
  };

  return (
    <div className="pendingReports-work-list">
      <h4>Pending Reports</h4>
      <div className="pendingReports-header">
        <div className="pendingReports-controls">
          {/* Your date range and button controls */}
          <div className="pendingReports-date-range">
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
            <button className="pendingReports-star-button">☆</button>
            <button className="pendingReports-ok-button">OK</button>
          </div>
        </div>
        <div className="pendingReports-category-select">
          <label>Category:</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">--Select Lab Category--</option>
            <option value="all">
              <input type="checkbox" /> Select All
            </option>
            <option value="biochemistry">
              <input type="checkbox" /> Biochemistry
            </option>
            <option value="hematology">
              <input type="checkbox" /> Hematology
            </option>
            <option value="microbiology">
              <input type="checkbox" /> Microbiology
            </option>
            <option value="parasitology">
              <input type="checkbox" /> Parasitology
            </option>
            <option value="serology">
              <input type="checkbox" /> Serology
            </option>
            <option value="immunoassay">
              <input type="checkbox" /> Immunoassay
            </option>
            <option value="pathology">
              <input type="checkbox" /> Pathology
            </option>
            <option value="virology">
              <input type="checkbox" /> Virology
            </option>
            {/* Add more options here */}
          </select>
        </div>
        <button className="pendingReports-load-button">
          Load <i className="fa fa-refresh" />
        </button>
      </div>
      <div className="pendingReports-searchbar-N-showing">
        <div className="pendingReports-search-bar">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            type="text"
            placeholder="Search"
            className="pendingReports-search-input"
          />
        </div>
        <div className="pendingReports-results-info">
          <span>Showing 0 / 0 results</span>
          <button className="pendingReports-print-button" onClick={handlePrint}>
            <i className="fa-solid fa-print"></i> Print
          </button>
        </div>
      </div>
      <div className="table-container">
        <table ref={tableRef}>
          <thead>
            <tr>
              {[
                "Sr No.",
                "Patient Name",
                "Age/Sex",
                "Phone Number",
                "Test Name",
                "Requesting Dept.",
                "Run No.",
                "Bar Code",
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
            {labResult != null ? (
              labResult.map((result, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    {result.labRequestDTO?.newPatientVisitDTO?.firstName ||
                      result.labRequestDTO?.patientDTO?.firstName}{" "}
                    {result.labRequestDTO?.newPatientVisitDTO?.lastName ||
                      result.labRequestDTO?.patientDTO?.lastName}
                  </td>
                  <td>
                    {result.labRequestDTO?.newPatientVisitDTO?.age ||
                      result?.labRequestDTO?.patientDTO?.age}
                    {" Y / "}
                    {result.labRequestDTO?.newPatientVisitDTO?.gender ||
                      result.labRequestDTO?.patientDTO?.gender}
                  </td>
                  <td>
                    {result.labRequestDTO?.newPatientVisitDTO?.phoneNumber ||
                      result.labRequestDTO?.patientDTO?.phoneNumber}
                  </td>
                  <td>{result.labRequestDTO?.labTestName}</td>
                  <td>
                    {result.labRequestDTO?.patientDTO != null
                      ? "InPatient"
                      : "Outpatient"}
                  </td>
                  <td>{result.labRequestDTO?.runNumber}</td>
                  <td>{result.labRequestDTO?.barcode}</td>
                  <td>
                    <button
                      className="pendingReports-table-btn"
                      onClick={() =>
                        navigate("/labResult", {
                          state: {
                            labRequestId: result.labRequestDTO?.labRequestId,
                          },
                        })
                      }
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={"9"}>Loading</td>
              </tr>
            )}
          </tbody>
        </table>
        {/* <div className="pendingReports-pagination">
          <span>0 to 0 of 0</span>
          <button>First</button>
          <button>Previous</button>
          <span>Page 0 of 0</span>
          <button>Next</button>
          <button>Last</button>
        </div> */}
      </div>
    </div>
  );
}

export default PendingReports;
