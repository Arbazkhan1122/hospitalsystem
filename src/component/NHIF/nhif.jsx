import React, { useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import PatientList from '../NHIF/NHIFsubfiles/PatientList/PatientList';
import VisitList from '../NHIF/NHIFsubfiles/VisitList/VisitList';
import IPD_billing from '../NHIF/NHIFsubfiles/IPDBilling/IpD_Billing';
import Report from '../NHIF/NHIFsubfiles/report/report';
import './nhif.css'; 

const Nhif = () => {
  // const [activeNav, setActiveNav] = useState(null);

  // const handleNavClick = (navType) => {
  //   setActiveNav(activeNav === navType ? null : navType);
  // };

  return (
    <>
    
      <header className="nhif-header">
      
        <nav>
          <ul className="nhif-header-nav">

          
            <Link to="PatientList"><li>Patient List</li></Link>
            <Link to={"VisitList"}><li>Visit List</li></Link>
            <Link to={"IPD_billing"}><li>IPD Billing</li></Link>
            <Link to={"Report"}><li>Report</li></Link>
          </ul>
        </nav>
      </header>
      <div>
        <Routes>
          <Route path="/PatientList" element={<PatientList />} />
          <Route path="/VisitList" element={<VisitList />} />
           <Route path="/IPD_billing" element={<IPD_billing />} />
          <Route path="/Report" element={<Report />} /> 
        </Routes>
      </div>
      
    </>
  );
};

export default Nhif;
