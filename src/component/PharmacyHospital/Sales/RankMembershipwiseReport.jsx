import React, { useState } from "react";
import "./RankMembershipwiseReport.css"; // Make sure this CSS file exists

const RankMembershipwiseReport = () => {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [membership, setMembership] = useState("Astrax");
  const [rank, setRank] = useState("");

  const handleShowReport = () => {
    // Logic to show report can go here
    console.log("Show Report clicked!");
  };

  return (
    <div className="rank-wise-saales-report-page-container">
      <h3>⚛ Rank-Membershipwise Sales Report</h3>
      <div className="rank-wise-saales-filters-container">
        <div className="rank-wise-saales-filter-item">
          <label>From:</label>
          <input
            type="date"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
          />
        </div>
        <div className="rank-wise-saales-filter-item">
          <label>To:</label>
          <input
            type="date"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
          />
          
        </div>
       
        <button className="rank-membershipfavorite-btn">★</button>
        <button className="rank-membership-reset-btn">-</button>
      </div>
      <div className="rank-memeber-range">
      <div className="rank-wise-saales-filter-item">
          <label>Membership:</label>
          <select
            value={membership}
            onChange={(e) => setMembership(e.target.value)}
          >
            <option value="Astrax">Astrax</option>
            <option value="Other1">Other 1</option>
            <option value="Other2">Other 2</option>
            {/* Add other membership options as needed */}
          </select>
        </div>
        <div className="rank-wise-saales-filter-item">
          <label>Rank:</label>
          {/* <input
            type="text"
            value={rank}
            onChange={(e) => setRank(e.target.value)}
          /> */}


           <div className="rank-wise-saalesfilter-item">
          <button onClick={handleShowReport}>Show Report</button>
        </div>
        </div>


        </div>
       
    </div>
  );
};

export default RankMembershipwiseReport;
