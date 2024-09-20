import React from "react";
import './MedicalRecordReport.css';



const LabReport=()=>{

    const ReportCard=({icon,title,subtitle})=>{
        return(
            <div className="report-card">
                <div className="icon-css"> {icon}</div>
                <div className="content-md">
                    <h3>{title}</h3>
                    <p>{subtitle}</p>
                </div>

            </div>
        );

    };

    const reports = [
        { icon: '📄', title: 'Hospital Service Summary Report', subtitle: 'Report' },
        { icon: '📄', title: 'Inpatient Morbidity Report', subtitle: 'Report' },
        { icon: '📄', title: 'Hospital Mortality Report', subtitle: 'Report' },
        { icon: '📄', title: 'Religion Group Statistics Report', subtitle: 'Report' },
        { icon: '📄', title: 'Emergency Patient Morbidity Report', subtitle: 'Report' },
        { icon: '📄', title: 'Inpatient Service Report', subtitle: 'Report' },
        { icon: '📄', title: 'Lab Services Report', subtitle: 'Report' },
        { icon: '📄', title: 'Outpatient Morbidity Report', subtitle: 'Report' },
    ];
     


      return(
        <div className="dashboard-medical-record">
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