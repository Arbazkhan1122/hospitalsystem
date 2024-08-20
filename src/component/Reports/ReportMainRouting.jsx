import { useState } from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from '../Reports/Layout';
// import ReportsMain from './Reports/ReportsMain';
import Admission from '../Reports/Admission';
import BillingReports from '../Reports/BillingReports';
import AppointmentReport from '../Reports/AppointmentReport';
import RadiologyReport from '../Reports/RadiologyReports';
import LabReport from '../Reports/LabReport';
import DoctorReport from '../Reports/DoctorsReport';
import PatientReport from '../Reports/PatientReport';
import PoliceCase from '../Reports/PoliceCase';

function ReportMainRouting() {
 

  return (
    <>
   
            <Layout>
                <Routes>
                  {/* <Route path='/' element={<ReportsMain/>}></Route> */}
                  <Route path='/admission' element={<Admission/>}></Route>
                  <Route path='/BillingReports' element={<BillingReports/>}></Route>
                  <Route path='/AppointmentReport' element={<AppointmentReport/>}></Route>
                  <Route path='/RadiologyReport' element={<RadiologyReport/>}></Route>
                  <Route path='/LabReport' element={<LabReport/>}></Route>
                  <Route path='/DoctorReport' element={<DoctorReport/>}></Route>
                  <Route path='/PatientReport' element={<PatientReport/>}></Route>
                  <Route path='/PoliceCase' element={<PoliceCase/>}></Route>
                  
                  </Routes>
            </Layout>
      
    </>
  )
}

export default ReportMainRouting
