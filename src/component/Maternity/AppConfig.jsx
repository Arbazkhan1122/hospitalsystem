// AppRoutes.jsx
import React from "react";
import { Route, Routes } from "react-router-dom";
import MaternityComponent from "./MaternityList";
import ReportComponent from "./Reports";
import PatientComponent from "./PatientList";
import MaternityAllowanceReportComponent from "./MaternityAllowanceReport ";
import MaternityHeader from "./MaternityHeader";


const AppConfig = () => {
  return (
    <>
    <MaternityHeader/>
    <Routes>
      <Route path="/maternity-list" element={<MaternityComponent />} />
      <Route path="/reports" element={<ReportComponent />} />
      <Route path="/patient-form" element={<PatientComponent />} />
      <Route path="/maternity-allowance-report" element={<MaternityAllowanceReportComponent />} />
      {/* Add more routes as needed */}
    </Routes>
    </>
  );
};

export default AppConfig;
