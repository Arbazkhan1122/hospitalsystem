/* Ravindra_Sanap_HRHome.jsx_04_10_2024_Start */



import AllEmployee from '../HRHome/AllEmployee/AllEmployee';
import Attendance from '../HRHome/Attendance/Attendance';
import EmpSchedule from '../HRHome/EmpSchedule/EmpSchedule';
import EmpLeave from '../HRHome/EmpLeave/EmpLeave';
import PerformanceEvaluation from '../HRHome/PerformanceEvaluation/PerformanceEvaluation';
import Payroll from '../HRHome/Payroll/Payroll';
import RecrutierMng from '../HRHome/Recruitment/RecrutierMng';


import React from "react";
import { Route, Routes, useLocation, BrowserRouter, NavLink } from "react-router-dom";
import './HRHome.css'; // Importing the CSS file for styling

function HRHome() {
    const location = useLocation(); // Get the current route

    return (
        <div className="HRHome-container">
            <nav className="HRHome-navbar">
                <ul className="HRHome-nav-links">
                    <li>
                        <NavLink
                            to="/employee-list"
                            className={`HRHome-button ${location.pathname === '/asset-tracking' ? 'active' : ''}`}
                        >
                            Employee List
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/employee-attendance"
                            className={`HRHome-button ${location.pathname === '/asset-maintenance' ? 'active' : ''}`}
                        >
                            Attendance
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/employee-schedule"
                            className={`HRHome-button ${location.pathname === '/depreciation-calculation' ? 'active' : ''}`}
                        >
                            Employee Schedule
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/employee-leave"
                            className={`HRHome-button ${location.pathname === '/asset-disposal' ? 'active' : ''}`}
                        >
                            Employee Leave
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/employee-performance"
                            className={`HRHome-button ${location.pathname === '/asset-report' ? 'active' : ''}`}
                        >
                            Performance Evaluation
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/employee-payroll"
                            className={`HRHome-button ${location.pathname === '/asset-report' ? 'active' : ''}`}
                        >
                            Payroll
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/employee-recruitment"
                            className={`HRHome-button ${location.pathname === '/asset-report' ? 'active' : ''}`}
                        >
                            Recruitment Management
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <div className="HRHome-content">
                <Routes>
                    <Route path="employee-list" element={<AllEmployee />} />
                    <Route path="employee-attendance" element={<Attendance />} />
                    <Route path="employee-schedule" element={<EmpSchedule />} />
                    <Route path="employee-leave" element={<EmpLeave />} />
                    <Route path="employee-performance" element={<PerformanceEvaluation />} />
                    <Route path="employee-payroll" element={<Payroll />} />
                    <Route path="employee-recruitment" element={<RecrutierMng />} />
                </Routes>
            </div>
        </div>
    );
}

export default HRHome;


/* Ravindra_Sanap_HRHome.jsx_04_10_2024_End */


