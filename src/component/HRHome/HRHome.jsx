/* Ravindra_Sanap_HRHome.jsx_04_10_2024_Start */


import React, { useState } from 'react';
import './HRHome.css';
import AllEmployee from './AllEmployee/AllEmployee';
import Attendance from './Attendance/Attendance';
import EmpSchedule from './EmpSchedule/EmpSchedule';
import EmpLeave from './EmpLeave/EmpLeave';
import PerformanceEvaluation from './PerformanceEvaluation/PerformanceEvaluation';

function HRHome() {
    const [activeSection, setActiveSection] = useState('section1');

    const handleSectionClick = (section) => {
        setActiveSection(section);
    };

    return (
        <>
            <div className='hrhome-navbar'>
                <div
                    className={activeSection === 'section1' ? 'section active' : 'section'}
                    onClick={() => handleSectionClick('section1')}
                >
                    Employee List
                </div>
                <div
                    className={activeSection === 'section2' ? 'section active' : 'section'}
                    onClick={() => handleSectionClick('section2')}
                >
                    Attendance
                </div>
                <div
                    className={activeSection === 'section3' ? 'section active' : 'section'}
                    onClick={() => handleSectionClick('section3')}
                >
                    Employee Schedule
                </div>
                <div
                    className={activeSection === 'section4' ? 'section active' : 'section'}
                    onClick={() => handleSectionClick('section4')}
                >
                    Employee Leave
                </div>
                <div
                    className={activeSection === 'section5' ? 'section active' : 'section'}
                    onClick={() => handleSectionClick('section5')}
                >
                    Performance Evaluation
                </div>
            </div>

            <div className="hrhome-content">
                {activeSection === 'section1' && <AllEmployee />}
                {activeSection === 'section2' && <Attendance />}
                {activeSection === 'section3' && <EmpSchedule />}
                {activeSection === 'section4' && <EmpLeave />}
                {activeSection === 'section5' && <PerformanceEvaluation />}

            </div>
        </>
    );
}

export default HRHome;



/* Ravindra_Sanap_HRHome.jsx_04_10_2024_End */
