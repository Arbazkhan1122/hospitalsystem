import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import "./clinical.css";
import ClinicalAssesment from "./ClinicalAssesmentAndPlan/ClinicalAssesment";
function Clinical() {
  return (
    <div className="clinical-component">
      <header className="clinical-component-header">
        <nav className="clinical-component-header-nav">
          <ul>
            <li>
              <NavLink
                to="ClinicalAssessmentAndPlan"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Clinical Assesments And Plan
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <div className="clinical-component-content">
        <Routes>
          <Route
            path="ClinicalAssessmentAndPlan"
            element={<ClinicalAssesment />}
          />
          <Route
            path="clinical/ClinicalAssessmentAndPlan"
            element={<ClinicalAssesment />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default Clinical;
