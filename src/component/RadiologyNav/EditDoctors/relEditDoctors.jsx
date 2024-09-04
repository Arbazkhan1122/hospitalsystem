import React, { useState, useEffect } from "react";
import "../EditDoctors/relEditDoctors.css";
import TransactionDetails from "./rdlEditDrEditBtn";
import * as XLSX from "xlsx";

function RDLEditDoctors() {
  const [showPopup, setShowPopup] = useState(false);
  const [imagingData, setImagingData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState("--All--"); // State for filter

  // Function to fetch data from API
  useEffect(() => {
    fetch("http://localhost:8888/api/patient-imaging-requisitions/all")
      .then((response) => response.json())
      .then((data) => {
        setImagingData(data);
        setFilteredData(data); // Initialize filteredData with full data
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Function to handle filter change
  const handleFilterChange = (e) => {
    const filterValue = e.target.value;
    setSelectedFilter(filterValue);
    if (filterValue === "--All--") {
      setFilteredData(imagingData);
    } else {
      const filtered = imagingData.filter(
        (item) =>
          item.imagingTypeDTO?.imagingTypeName.toUpperCase() === filterValue
      );
      setFilteredData(filtered);
    }
  };

  const handleEditDoctorClick = (item) => {
    setShowPopup(true);
    setSelectedRequest(item);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedRequest(null);
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
    const table = document.getElementById("table-to-print");
    const ws = XLSX.utils.table_to_sheet(table);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Edit Doctors");
    XLSX.writeFile(wb, "Edit_Doctors_Report.xlsx");
  };

  return (
    <div className="relEditDoctors-active-imaging-request">
      <header>
        <h4>* Edit Doctors</h4>
        <div className="relEditDoctors-filter">
          <label>
            Filter
            <select value={selectedFilter} onChange={handleFilterChange}>
              <option>--All--</option>
              <option>CT-SCAN</option>
              <option>USG</option>
              <option>X-RAYS</option>
              <option>ECHO</option>
            </select>
          </label>
        </div>
      </header>
      <div className="relEditDoctors-controls">
        <div className="relEditDoctors-date-range">
          <label>
            From:
            <input type="date" defaultValue="2024-08-09" />
          </label>
          <label>
            To:
            <input type="date" defaultValue="2024-08-16" />
          </label>
          <button className="relEditDoctors-star-button">☆</button>
          <button className="relEditDoctors-ok-button">OK</button>
        </div>
      </div>
      <div className="relEditDoctors-search-N-results">
        <div className="relEditDoctors-search-bar">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => {
              const searchTerm = e.target.value.toLowerCase();
              setFilteredData(
                imagingData.filter(
                  (item) =>
                    item.patientDTO.patientName
                      .toLowerCase()
                      .includes(searchTerm) ||
                    item.imagingItemDTO.imagingItemName
                      .toLowerCase()
                      .includes(searchTerm)
                )
              );
            }}
          />
        </div>
        <div className="relEditDoctors-results-info">
          Showing {filteredData.length} / {imagingData.length} results
          <button
            className="relEditDoctors-ex-pri-buttons"
            onClick={exportToExcel}
          >
            <i className="fa-regular fa-file-excel"></i> Export
          </button>
          <button
            className="relEditDoctors-ex-pri-buttons"
            onClick={printTable}
          >
            Print
          </button>
        </div>
      </div>
      <div className="relEditDoctors-table-N-paginat" id="table-to-print">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              {/* <th>Invoice Number</th> */}
              <th>Patient Name</th>
              <th>Age/Sex</th>
              <th>Type</th>
              <th>Imaging Name</th>
              <th>Prescriber Name</th>
              <th>Radiologist/Reporting Doctor</th>
              {/* <th>Bill Status</th> */}
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={index}>
                <td>{new Date(item.imagingDate).toDateString()}</td>
                {/* <td>{item.invoiceNumber}</td> */}
                <td>{item.patientDTO.firstName}</td>
                <td>{`${item.patientDTO.age} / ${item.patientDTO?.gender}`}</td>
                <td>{item.imagingTypeDTO?.imagingTypeName}</td>
                <td>{item.imagingItemDTO?.imagingItemName}</td>
                <td>{item.prescriberDTO?.employeeName}</td>
                <td>{item.performerDTO?.employeeName}</td>
                {/* <td>{item.billingStatus}</td> */}
                <td>
                  <button
                    className="relEditDoctors-action-button-add-report"
                    onClick={() => handleEditDoctorClick(item)}
                  >
                    Edit Doctor(s)
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showPopup && (
        <TransactionDetails
          onClose={closePopup}
          selectedRequest={selectedRequest}
        />
      )}
    </div>
  );
}

export default RDLEditDoctors;
