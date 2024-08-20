import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import IMUUploadPage from "../NavBarSection/iMU-Upload";
import "../NavBarSection/navNotification.css";

function NavNotification() {
  const [selectedTab, setSelectedTab] = useState("SMS"); // State to keep track of the selected tab
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div className="sms-page">
      <div className="sms-N-imu-btn">
      <div className="navNote-tabs">
        <button
          className={`tab ${selectedTab === "SMS" ? "active" : ""}`}
          onClick={() => setSelectedTab("SMS")}
        >
          SMS
        </button>
        </div>
        <div className="tabs"> 
        <button
          className={`tab ${selectedTab === "IMU" ? "active" : ""}`}
          onClick={() => setSelectedTab("IMU")}
        >
          IMU Upload
        </button>
      </div>
      </div>

      {selectedTab === "SMS" ? (
        <div className="navNote-sms-content">
          <div className="filters">
            <div className="date-filters">
            <span>From:</span>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                className="date-picker"
              />
              <span>To:</span>
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                className="date-picker"
              />

              </div>

              <div>
              <button className="navNote-show-data-btn">
                <i className="fa-solid fa-magnifying-glass"></i>
              Show Data</button>

            </div>

            <div className="filter-options">
              <span>Filter SMS:</span>
              <label className="navNote-checkbx">
                <input type="checkbox" /> Sent
              </label>
              <label className="navNote-checkbx">
                <input type="checkbox" checked readOnly /> NotSent
              </label>
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

            

            <div className="navNote-filter-findings">
              <span>Filter Findings:</span>
              <label className="navNote-checkbx">
                <input type="checkbox" /> Positive
              </label>
              <label className="navNote-checkbx">
                <input type="checkbox" /> Negative
              </label>
              <label className="navNote-checkbx">
                <input type="checkbox" /> All
              </label>
            </div>
          </div>

          <table className="navNote-data-table">
            <thead>
              <tr>
                <th>Hospital No.</th>
                <th>Patient Name</th>
                <th>Age/Sex</th>
                <th>Phone Number</th>
                <th>TestName</th>
                <th>Sample Coll. On</th>
                <th>Result</th>
                <th>Uploaded ?</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{/* Table rows would go here */}</tbody>
          </table>

          <div className="navNote-pagination">
            <button>Previous</button>
            <button>Next</button>
          </div>
        </div>
      ) : (
        <IMUUploadPage />
      )}
    </div>
  );
}

export default NavNotification;
