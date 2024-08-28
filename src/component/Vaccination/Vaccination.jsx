import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import "./vaccination.css";
import PatientList from "./PatientList/Patientlist";
import VaccinationReports from "./VaccinationReport/VaccinationReport";

function Vaccination() {
  return (
    <div className="vaccination-component">
      <header className="vaccination-component-header">
        <nav className="vaccination-component-header-nav">
          <ul>
            <li>
              <NavLink
                to="PatientList"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Patient List
              </NavLink>
            </li>
            <li>
              <NavLink
                to="Reports"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Reports
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <div className="vaccination-component-content">
        <Routes>
          <Route path="PatientList" element={<PatientList />} />
          <Route path="Reports/*" element={<VaccinationReports />} />
          <Route path="Vaccination/PatientList" element={<PatientList />} />
        </Routes>
      </div>
    </div>
  );
}

export default Vaccination;
