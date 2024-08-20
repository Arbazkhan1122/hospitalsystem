
// export default ReportsPage;
import React, { useState } from 'react';
import './ReportPage.css'; // Importing the CSS file

const ReportsPage = () => {
  const [activeReport, setActiveReport] = useState('payment');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [isFavorite, setIsFavorite] = useState(false);

  const renderReportContent = () => {
    switch (activeReport) {
      case 'payment':
        return <div>Payment Report Content</div>;
      case 'patientVsService':
        return <div>Patient Vs Service Report Content</div>;
      case 'referralSummary':
        return <div>Referral Summary Report Content</div>;
      case 'hospitalIncome':
        return <div>Hospital Income Content</div>;
      default:
        return null;
    }
  };

  const handleShowReport = () => {
    // Logic to show the report
  };

  return (
    <div className="reportPage">
      <nav className="reportPage__nav">
        <button className="reportPage__navButton" onClick={() => setActiveReport('payment')}>Payment Report</button>
        <button className="reportPage__navButton" onClick={() => setActiveReport('patientVsService')}>Patient Vs Service Report</button>
        <button className="reportPage__navButton" onClick={() => setActiveReport('referralSummary')}>Referral Summary Report</button>
        <button className="reportPage__navButton" onClick={() => setActiveReport('hospitalIncome')}>Hospital Income</button>
      </nav>

      <div className="reportPage__content">
        {renderReportContent()}

        <div className="reportPage__dateInputs">
          <label className="reportPage__dateLabel">
            From:
            <input
              className="reportPage__input"
              type="date"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
            />
          </label>
          <label className="reportPage__dateLabel">
            To:
            <input
              className="reportPage__input"
              type="date"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
            />
          </label>
        </div>

        <button
          className={`reportPage__favoriteButton ${isFavorite ? 'reportPage__favoriteButton--active' : ''}`}
          onClick={() => setIsFavorite(!isFavorite)}
        >
          ★
        </button>

        <button className="reportPage__showReportButton" onClick={handleShowReport}>Show Report</button>
      </div>
    </div>
  );
};

export default ReportsPage;
