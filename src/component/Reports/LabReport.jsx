import React from "react";
import './BillingReports.css';



const LabReport=()=>{

    const ReportCard=({icon,title,subtitle})=>{
        return(
            <div className="report-card">
                <div className="icon"> {icon}</div>
                <div className="content">
                    <h3>{title}</h3>
                    <p>{subtitle}</p>
                </div>

            </div>
        );

    };

    const reports = [
        { icon: '📄', title: 'Category Wise Report', subtitle: 'Report' },
        { icon: '📄', title: 'Total Revenue', subtitle: 'Report' },
        { icon: '📄', title: 'Item Wise Lab', subtitle: 'Report' },
        { icon: '📄', title: 'Test Status Detail Report', subtitle: 'Report' },
        { icon: '📄', title: 'Covid Cases Detail Report', subtitle: 'Report' },
        { icon: '📄', title: 'Covid-Country Wise', subtitle: 'Report' },
        { icon: '📄', title: 'HIV Test Details Report', subtitle: 'Report' },
        { icon: '📄', title: 'Lab Culture Details Report', subtitle: 'Report' },
        { icon: '📄', title: 'LabType Wise Test Count Report', subtitle: 'Report' },
        { icon: '📄', title: 'Category And Test Count', subtitle: 'Report' },
        { icon: '📄', title: 'Doctor Wise Patient Count Lab ', subtitle: 'Report' },

      ];
     


      return(
        <div className="dashboard">
      {reports.length > 0 ? (
        reports.map((report, index) => (
          <ReportCard
            key={index}
            icon={report.icon}
            title={report.title}
            subtitle={report.subtitle}
          />
        ))
      ) : (
        <p>No reports available</p>
      )}
    </div>
      )


}

export default LabReport;