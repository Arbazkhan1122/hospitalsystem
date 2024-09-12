import React from "react";
import "../IncentiveReport/incentiveReportPaymentReport.css"

const IncentiveReportPaymentReport = () => {
  return (
    <div className="incentiveReportPaymentReport-container">
      <h3><i class="fa-solid fa-star-of-life"></i> Incentive Payment Summary Report</h3>
      <div className="incentiveReportPaymentReport-filters">
        <div className="incentiveReportPaymentReport-date-range">
          <label>From: </label>
          <input type="date" />
          <label>To: </label>
          <input type="date" />
          <button className="incentiveReportPaymentReport-icon-button incentiveReportPaymentReport-star">★</button>
          <button className="incentiveReportPaymentReport-icon-button incentiveReportPaymentReport-dash">-</button>
        </div>
        <button className="incentiveReportPaymentReport-load-button"><i class="fa-solid fa-rotate"></i> Sync Billing to Incentive</button>
      </div>

      
    </div>
  );
};

export default IncentiveReportPaymentReport;
