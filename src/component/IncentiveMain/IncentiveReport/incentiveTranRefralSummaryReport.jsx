 /* Ajhar Tamboli incentiveTranRefralSummaryReport.jsx 18-09-2024 */

import React, { useState } from "react";
import "../IncentiveReport/incentiveTranRefralSummaryReport.css"



const IncentiveTranRefralSummaryReport = () => {
  return (
    <div className="incentiveTranRefralSummaryReport-container">
      <h3><i class="fa-solid fa-star-of-life"></i> Incentive Referral Summary Report</h3>
      <div className="incentiveTranRefralSummaryReport-filters">
        <div className="incentiveTranRefralSummaryReport-date-range">
          <label>From: </label>
          <input type="date" />
          <label>To: </label>
          <input type="date" />
          <button className="incentiveTranRefralSummaryReport-icon-button incentiveTranRefralSummaryReport-star">★</button>
          <button className="incentiveTranRefralSummaryReport-icon-button incentiveTranRefralSummaryReport-dash">-</button>
          <button className="incentiveTranRefralSummaryReport-ok-button">OK</button>

        </div>
      <div className="incentiveTranRefralSummaryReport-Select-Doctor">
        <label htmlFor="">Select Doctor:</label>
        <input type="text" name="" id="" placeholder="Search Doctor Name" />
      </div>
        <div>
        <button className="incentiveTranRefralSummaryReport-load-button"><i class="fa-solid fa-magnifying-glass"></i> Show Report</button>
      </div>
      </div>
      
    </div>
  );
};

export default IncentiveTranRefralSummaryReport;