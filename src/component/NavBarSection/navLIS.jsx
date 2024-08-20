import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NavLISMachineResults from "./NavLIS/navLIS-MachineResults";
import "../NavBarSection/navLIS.css"

function NavLIS() {
  const [selectedTab, setSelectedTab] = useState("SMS"); // State to keep track of the selected tab
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div className="lis-page">
      <div className="lis-N-imu-btn">
      <div className="navNote-tabs">
        <button
          className={`tab ${selectedTab === "SMS" ? "active" : ""}`}
          onClick={() => setSelectedTab("SMS")}
        >
          LIS
        </button>
        </div>
        <div className="tabs"> 
        <button
          className={`tab ${selectedTab === "IMU" ? "active" : ""}`}
          onClick={() => setSelectedTab("IMU")}
        >
          Machine Result
        </button>
      </div>
      </div>

      {selectedTab === "SMS" ? (
        <div className="navNote-sms-content">
          <div className="filters">
            

              <div>
              <button className="navLIS-show-data-btn">
                <i className="fa-solid fa-magnifying-glass"></i>
              Add New Mapping</button>

            </div>

            
          </div>

          <div className="nav-note-search-n-filter">

            <div className="navNot-search-bar">
              <i className="fa-solid fa-magnifying-glass"></i>
              <input
                type="text"
                placeholder="Search"
                className="navNot-search-input"
              />
            </div>

            

            <div className="filter-findings">
            <span>Showing Results </span>
              <button>Print</button>
            </div>
          </div>

          <table className="data-table">
            <thead>
              <tr>
                <th>Machine Name</th>
                <th>Component Name</th>
                <th>LIS Component Name</th>
                <th>Conversion Factor</th>
                <th>IsActive</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{/* Table rows would go here */}</tbody>
          </table>

          <div className="pagination">
            <button>Previous</button>
            <button>Next</button>
          </div>
        </div>
      ) : (
        <NavLISMachineResults />
      )}
    </div>
  );
}

export default NavLIS;
