import React, { useState, useRef } from "react";
import "./Vaccinationreports.css";

function VaccinationsReports() {
  const [columnWidths, setColumnWidths] = useState({});
  const tableRef = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [fromDate, setFromDate] = useState("2024-08-12");
  const [toDate, setToDate] = useState("2024-08-12");

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

  const handleDashClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (option) => {
    const currentDate = new Date();
    let newFromDate = new Date();

    if (option === "Last 1 Week") {
      newFromDate.setDate(currentDate.getDate() - 7);
    } else if (option === "Last 1 Month") {
      newFromDate.setMonth(currentDate.getMonth() - 1);
    } else if (option === "Last 3 Months") {
      newFromDate.setMonth(currentDate.getMonth() - 3);
    }

    setFromDate(newFromDate.toISOString().split("T")[0]);
    setToDate(currentDate.toISOString().split("T")[0]);
    setIsDropdownOpen(false);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedVaccines, setSelectedVaccines] = useState([]);

  const vaccines = ["BCG", "DPT", "Rotavirus", "HBV", "IPV", "OPV", "PCV"];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSearch = (e) => setSearchTerm(e.target.value);

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedVaccines(vaccines);
    } else {
      setSelectedVaccines([]);
    }
  };

  const handleVaccineSelect = (vaccine) => {
    if (selectedVaccines.includes(vaccine)) {
      setSelectedVaccines(selectedVaccines.filter((v) => v !== vaccine));
    } else {
      setSelectedVaccines([...selectedVaccines, vaccine]);
    }
  };

  const filteredVaccines = vaccines.filter((vaccine) =>
    vaccine.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="vaccinationsReports-main">
      <form className="">
        <div className="vaccinationsReports-header">
          <h4>Vaccination Details</h4>
          <div className="vaccinationsReports-dropfilter">
            <select>
              <option value={""}>--All--</option>
              <option value={""}>Male</option>
              <option value={""}>Female</option>
              <option value={""}>Other</option>
            </select>

            <div
              className="vaccinationsReports__dropdown"
              onClick={toggleDropdown}
            >
              <span>--Select Vaccine--</span>
              <span
                className={`vaccinationsReports__arrow ${isOpen ? "open" : ""}`}
              >
                ▼
              </span>
            </div>
            {isOpen && (
              <div className="vaccinationsReports__content">
                <label className="vaccinationsReports__selectAll">
                  <input
                    type="checkbox"
                    checked={selectedVaccines.length === vaccines.length}
                    onChange={handleSelectAll}
                  />
                  Select All
                </label>
                <div className="vaccinationsReports__search">
                  <input
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={handleSearch}
                  />
                </div>
                <div className="vaccinationsReports__list">
                  {filteredVaccines.map((vaccine) => (
                    <label key={vaccine} className="vaccinationsReports__item">
                      <input
                        type="checkbox"
                        checked={selectedVaccines.includes(vaccine)}
                        onChange={() => handleVaccineSelect(vaccine)}
                      />
                      {vaccine}
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="vaccinationsReports-form">
          <div className="vaccinationsReports-form-input-group">
            <label>From:</label>
            <input
              type="date"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
            />
            <label>To:</label>
            <input
              type="date"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
            />
            <button
              type="button"
              className="vaccinationsReports-dash-btn"
              onClick={handleDashClick}
            >
              -
            </button>
            {isDropdownOpen && (
              <div className="vaccinationsReports-dropdown">
                <div onClick={() => handleOptionClick("Last 1 Week")}>
                  Last 1 Week
                </div>
                <div onClick={() => handleOptionClick("Last 1 Month")}>
                  Last 1 Month
                </div>
                <div onClick={() => handleOptionClick("Last 3 Months")}>
                  Last 3 Months
                </div>
              </div>
            )}
            <button className="vaccinationsReports-star-btn">☆</button>
            <button className="vaccinationsReports-ok-btn">Ok</button>
          </div>
        </div>
      </form>

      <div className="vaccinationsReports-search">
        <div className="vaccinationsReports-search-bar">
          <input type="text" placeholder="Search" />
          <i className="fas fa-search"></i>
        </div>
        <div className="vaccinationsReports-results">
          <span>Showing 0 / 0 results</span>
          <button className="vaccinationsReports-export-btn">Export</button>
          <button className="vaccinationsReports-print-btn">Print</button>
        </div>
      </div>

      <table className="vaccinationsReports-table" ref={tableRef}>
        <thead>
          <tr>
            {[
              "Vacc. Date",
              "Vacc. Regd. No.",
              "Baby's Name",
              "Age/Sex",
              "Hospital No.",
              "Mother's Name",
              "Father's Name",
              "Date Of Birth",
              "Religion",
              "Address",
              "Phone Number",
              "Vacc. Name",
              "Dose",
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
            <td colSpan="13" className="vaccinationsReports-no-rows">
              No Rows To Show
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default VaccinationsReports;
