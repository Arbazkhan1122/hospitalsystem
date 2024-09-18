import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
    const [isPatientSubNavOpen, setPatientSubNavOpen] = useState(false);
    const [isRadiologySubNavOpen, setRadiologySubNavOpen] = useState(false);
    const [isAdmissionSubNavOpen, setAdmissionSubNavOpen] = useState(false); 
    const [isAppointmentSubNavOpen, setAppointmentSubNavOpen] = useState(false); // State for Appointment sub-nav
    const location = useLocation();

    const handlePatientClick = () => {
        setPatientSubNavOpen(prevState => !prevState);
        if (isRadiologySubNavOpen) setRadiologySubNavOpen(false);
        if (isAdmissionSubNavOpen) setAdmissionSubNavOpen(false); 
        if (isAppointmentSubNavOpen) setAppointmentSubNavOpen(false); // Close Appointment sub-nav if open
    };

    const handleRadiologyClick = () => {
        setRadiologySubNavOpen(prevState => !prevState);
        if (isPatientSubNavOpen) setPatientSubNavOpen(false);
        if (isAdmissionSubNavOpen) setAdmissionSubNavOpen(false); 
        if (isAppointmentSubNavOpen) setAppointmentSubNavOpen(false); // Close Appointment sub-nav if open
    };

    const handleAdmissionClick = () => { 
        setAdmissionSubNavOpen(prevState => !prevState);
        if (isPatientSubNavOpen) setPatientSubNavOpen(false);
        if (isRadiologySubNavOpen) setRadiologySubNavOpen(false);
        if (isAppointmentSubNavOpen) setAppointmentSubNavOpen(false); // Close Appointment sub-nav if open
    };

    const handleAppointmentClick = () => { // New handler for Appointment click
        setAppointmentSubNavOpen(prevState => !prevState);
        if (isPatientSubNavOpen) setPatientSubNavOpen(false);
        if (isRadiologySubNavOpen) setRadiologySubNavOpen(false);
        if (isAdmissionSubNavOpen) setAdmissionSubNavOpen(false); // Close Admission sub-nav if open
    };

    return (
        <div>
            <nav className="reports-tabs-nav">
                <NavLink 
                    to="/Admission" 
                    className={`reports-nav-link ${location.pathname.startsWith('/Admission') ? 'active' : ''}`}
                    onClick={handleAdmissionClick}
                >
                    Admission
                </NavLink>
                <NavLink to="/BillingReports" className="reports-nav-link">Billing Reports</NavLink>
                <NavLink 
                    to="/AppointmentReport" 
                    className={`reports-nav-link ${location.pathname.startsWith('/AppointmentReport') ? 'active' : ''}`}
                    onClick={handleAppointmentClick} // Toggle Appointment sub-nav on click
                >
                    Appointment
                </NavLink>
                <NavLink 
                    to="/RadiologyReport" 
                    className={`reports-nav-link ${location.pathname.startsWith('/RadiologyReport') ? 'active' : ''}`}
                    onClick={handleRadiologyClick}
                >
                    Radiology
                </NavLink>
                <NavLink to="/LabReport" className="reports-nav-link">Lab</NavLink>
                <NavLink to="/DoctorReport" className="reports-nav-link">Doctors</NavLink>
                <NavLink 
                    to="/PatientReport" 
                    className={`reports-nav-link ${location.pathname.startsWith('/PatientReport') ? 'active' : ''}`}
                    onClick={handlePatientClick}
                >
                    Patient
                </NavLink>
                <NavLink to="/PoliceCase" className="reports-nav-link">Police Case</NavLink>
            </nav>

            {isAdmissionSubNavOpen && ( 
                <div className="patient-sub-nav-container">
                    <div className="Appointment-sub-nav">
                        <Link 
                            to="/Admission/InPatientCensusReport" 
                            className={`patient-nav-link ${location.pathname === '/Admission/InPatientCensusReport' ? 'active' : ''}`}
                        >
                            InPatient Census Report
                        </Link>
                        <Link 
                            to="/Admission/AdmittedPatient" 
                            className={`patient-nav-link ${location.pathname === '/Admission/AdmittedPatient' ? 'active' : ''}`}
                        >
                            Admitted Patient
                        </Link>
                        <Link 
                            to="/Admission/DischargedPatient" 
                            className={`patient-nav-link ${location.pathname === '/Admission/DischargedPatient' ? 'active' : ''}`}
                        >
                            Discharged Patient
                        </Link>
                        <Link 
                            to="/Admission/TransferredPatient" 
                            className={`patient-nav-link ${location.pathname === '/Admission/TransferredPatient' ? 'active' : ''}`}
                        >
                            Transferred Patient
                        </Link>
                        <Link 
                            to="/Admission/DiagnosisWisePatient" 
                            className={`patient-nav-link ${location.pathname === '/Admission/DiagnosisWisePatient' ? 'active' : ''}`}
                        >
                            DiagnosisWise Patient
                        </Link>
                        <Link 
                            to="/Admission/AdmissionDischargeList" 
                            className={`patient-nav-link ${location.pathname === '/Admission/AdmissionDischargeList' ? 'active' : ''}`}
                        >
                            Admission Discharge List
                        </Link>
                        <Link 
                            to="/Admission/RankMembershipWiseAdmittedPatient" 
                            className={`patient-nav-link ${location.pathname === '/Admission/RankMembershipWiseAdmittedPatient' ? 'active' : ''}`}
                        >
                            Rank-MembershipWise Admitted Patient Report
                        </Link>
                        <Link 
                            to="/Admission/InPatientOutstanding" 
                            className={`patient-nav-link ${location.pathname === '/Admission/InPatientOutstanding' ? 'active' : ''}`}
                        >
                            InPatient Outstanding Report
                        </Link>
                        <Link 
                            to="/Admission/RankMembershipWiseDischargedPatient" 
                            className={`patient-nav-link ${location.pathname === '/Admission/RankMembershipWiseDischargedPatient' ? 'active' : ''}`}
                        >
                            Rank-MembershipWise Discharged Patient Report
                        </Link>
                    </div>
                </div>
            )}

            {isPatientSubNavOpen && (
                <div className="patient-sub-nav-container">
                    <div className="Appointment-sub-nav">
                        <Link 
                            to="/PatientReport/Registration" 
                            className={`patient-nav-link ${location.pathname === '/PatientReport/Registration' ? 'active' : ''}`}
                        >
                            Registration Report
                        </Link>
                        <Link 
                            to="/PatientReport/EditedDetails" 
                            className={`patient-nav-link ${location.pathname === '/PatientReport/EditedDetails' ? 'active' : ''}`}
                        >
                            Edited Patient Detail Report
                        </Link>
                    </div>
                </div>
            )}

            {isRadiologySubNavOpen && (
                <div className="patient-sub-nav-container">
                    <div className="Appointment-sub-nav">
                        <Link 
                            to="/RadiologyReport/TotalRevenue" 
                            className={`patient-nav-link ${location.pathname === '/RadiologyReport/TotalRevenue' ? 'active' : ''}`}
                        >
                            Total Revenue
                        </Link>
                        <Link 
                            to="/RadiologyReport/CategoryWise" 
                            className={`patient-nav-link ${location.pathname === '/RadiologyReport/CategoryWise' ? 'active' : ''}`}
                        >
                            Category Wise Report
                        </Link>
                        <Link 
                            to="/RadiologyReport/FilmTypeCount" 
                            className={`patient-nav-link ${location.pathname === '/RadiologyReport/FilmTypeCount' ? 'active' : ''}`}
                        >
                            FilmType Count
                        </Link>
                    </div>
                </div>
            )}

{isAppointmentSubNavOpen && ( 
    <div className="patient-sub-nav-container">
        <div className="Appointment-sub-nav">
            <Link 
                to="/AppointmentReport/Details" 
                className={`patient-nav-link ${location.pathname === '/AppointmentReport/Details' ? 'active' : ''}`}
            >
                Details
            </Link>
            <Link 
                to="/AppointmentReport/CountyWise" 
                className={`patient-nav-link ${location.pathname === '/AppointmentReport/CountyWise' ? 'active' : ''}`}
            >
                County Wise
            </Link>
            <Link 
                to="/AppointmentReport/DepartmentWise" 
                className={`patient-nav-link ${location.pathname === '/AppointmentReport/DepartmentWise' ? 'active' : ''}`}
            >
                Department Wise
            </Link>
            <Link 
                to="/AppointmentReport/DoctorWiseOutPatient" 
                className={`patient-nav-link ${location.pathname === '/AppointmentReport/DoctorWiseOutPatient' ? 'active' : ''}`}
            >
                DoctorWise OutPatient
            </Link>
            <Link 
                to="/AppointmentReport/PhoneBookAppointmentReport" 
                className={`patient-nav-link ${location.pathname === '/AppointmentReport/PhoneBookAppointmentReport' ? 'active' : ''}`}
            >
                PhoneBook Appointment Report
            </Link>
            
            <Link 
                to="/AppointmentReport/DepartmentWiseRankCount" 
                className={`patient-nav-link ${location.pathname === '/AppointmentReport/DepartmentWiseRankCount' ? 'active' : ''}`}
            >
                Department Wise Rank Count
            </Link>
            <Link 
                to="/AppointmentReport/DepartmentWiseStatReport" 
                className={`patient-nav-link ${location.pathname === '/AppointmentReport/DepartmentWiseStatReport' ? 'active' : ''}`}
            >
                Department Wise Stat Report
            </Link>
            <Link 
                to="/AppointmentReport/GeographicalStatReport" 
                className={`patient-nav-link ${location.pathname === '/AppointmentReport/GeographicalStatReport' ? 'active' : ''}`}
            >
                Geographical Stat Report
            </Link>
            <Link 
                to="/AppointmentReport/RankwiseDailyAppointmentReport" 
                className={`patient-nav-link ${location.pathname === '/AppointmentReport/RankwiseDailyAppointmentReport' ? 'active' : ''}`}
            >
                Rankwise Daily Appointment Report
            </Link>
            <Link 
                to="/AppointmentReport/AgeClassifiedStatsReport" 
                className={`patient-nav-link ${location.pathname === '/AppointmentReport/AgeClassifiedStatsReport' ? 'active' : ''}`}
            >
                Age Classified Stats Report (OP)
            </Link>
            <Link 
                to="/AppointmentReport/DoctorWiseStatisticsReport" 
                className={`patient-nav-link ${location.pathname === '/AppointmentReport/DoctorWiseStatisticsReport' ? 'active' : ''}`}
            >
                Doctor Wise Statistics Report
            </Link>
            <Link 
                to="/AppointmentReport/DayAndMonthwiseVisitReport" 
                className={`patient-nav-link ${location.pathname === '/AppointmentReport/DayAndMonthwiseVisitReport' ? 'active' : ''}`}
            >
                Day And Monthwise Visit Report
            </Link>
        </div>
    </div>
)}

        </div>
    );
}

export default Navigation;
