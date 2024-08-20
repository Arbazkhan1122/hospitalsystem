import React from "react";
import './BillingReports.css';



const BillingReports=()=>{

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
        { icon: '👤', title: 'User Collection', subtitle: 'Report' },
        { icon: '📄', title: 'Income Segregation', subtitle: 'Report' },
        { icon: '👥', title: 'Patient Census', subtitle: 'Report' },
        { icon: '🗂', title: 'Department Summary', subtitle: 'Report' },
        { icon: '💰', title: 'Deposit Transaction', subtitle: 'Report' },
        { icon: '📃', title: 'EHS Bill', subtitle: 'Report' },
        { icon: '📦', title: 'Scheme Detail (Invoice)', subtitle: 'Report' },
        { icon: '🧾', title: 'Total Items Bill', subtitle: 'Report' },
        { icon: '🪙', title: 'Deposit Balance', subtitle: 'Report' },
        { icon: '🚫', title: 'Cancel Bill', subtitle: 'Report' },
        { icon: '🪙', title: 'Doctorwise Income Summary (OP + IP)', subtitle: 'Report' },
        { icon: '🩺', title: 'Dialysis Patient Details', subtitle: 'Report' },
        { icon: '💵', title: 'Discount Scheme', subtitle: 'Report' },
        { icon: '📝', title: 'Bill Detail', subtitle: 'Report' },
        { icon: '📊', title: 'Department Wise Discount Scheme', subtitle: 'Report' },
        { icon: '💳', title: 'Credit Settlement Report', subtitle: 'Report' },
        { icon: '💰', title: 'Patient Credit Summary', subtitle: 'Report' },
        { icon: '💸', title: 'Discount Report', subtitle: 'Report' },
        { icon: '🩺', title: 'Doctor Summary', subtitle: 'Report' },
        { icon: '📑', title: 'Items Summary', subtitle: 'Report' },
        { icon: '👥', title: 'User Wise Cash Collection', subtitle: 'Report' },
        { icon: '💲', title: 'Payment Mode Wise Report', subtitle: 'Report' },
        // Add more reports as necessary
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

export default BillingReports;