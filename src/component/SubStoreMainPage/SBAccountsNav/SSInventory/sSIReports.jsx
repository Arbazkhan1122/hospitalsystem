/* Ajhar tamboli sSIReports.jsx 19-09-24 */


import React from 'react';
import { Link } from 'react-router-dom';
import "../SSInventory/sSIReports.css"

const SSIReports = () => {
  const reports = [
    { name: 'Requisition/Dispatch Report', type: 'Report' },
    { name: 'Transfer', type: 'Report' },
    { name: 'Cunsumption Report', type: 'Report' },
    
  ];

  return (
    <div className="ssI-dis-report-list">
      {reports.map((report, index) => (
        <div key={index} className="ssI-dis-report-item">
          <div className="ssI-dis-report-icon"></div>
          <div className="ssI-dis-report-info">
            <h3>
              {/* {report.name} */}
              <Link to={report.link}>{report.name}</Link>
              </h3>
            <p>{report.type}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SSIReports;