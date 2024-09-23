import React from "react";
import './MedicalRecordReport.css';
import { useNavigate } from "react-router-dom";


const LabReport=()=>{
  const navigate=useNavigate();
  const handleReportClick = (title) => {
    if (title === "Hospital Service Summary Report") {
      navigate('/HospitalServiceSummaryReport'); // Navigate to the desired route
    } 
    if(title=== "Inpatient Morbidity Report'"){
      navigate('/InpatientMorbidityReport');
    }
    if (title === "Hospital Mortality Report") {
      navigate('/HospitalMortalityReport'); // Navigate to the desired route
    } 
    if (title === "Emergency Patient Morbidity Report") {
      navigate('/EmergencyPMReport'); // Navigate to the desired route
    } 
    if (title === "Outpatient Morbidity Report") {
      navigate('/OutPatientMorbidityReport'); // Navigate to the desired route
    } 
    if (title === "Lab Services Report") {
      navigate('/LabServiceReport'); // Navigate to the desired route
    } 
  };


    const ReportCard=({icon,title,subtitle})=>{
        return(
            <div className="report-card" onClick={() => handleReportClick(title)}>
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