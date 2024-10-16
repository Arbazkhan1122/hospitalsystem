import { useState } from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';

import Layout from '../MedicalRec/Layout';
import MROutPatientList from '../MedicalRec/MROutPatientList';
import MRInpatientList from '../MedicalRec/MRInpatientList';
import BirthList from '../MedicalRec/BirthList';
import DeathList from '../MedicalRec/DeathList';
import MedicalRecordReport from '../MedicalRec/MedicalRecordReport';
import EmergencyPatientList from '../MedicalRec/EmergencyPatientList';
import 'bootstrap/dist/css/bootstrap.min.css';
import HospitalServiceSummaryReport from '../MedicalRec/HospitalServiceSummaryReport';
import InpatientMorbidityReport from '../MedicalRec/InpatientMorbidityReport';
import HospitalMortalityReport from '../MedicalRec/HospitalMortalityReport';
import EmergencyPMReport from '../MedicalRec/EmergencyPMReport';
import OutPatientMorbidityReport from '../MedicalRec/OutPatientMorbidityReport';
import LabServiceReport from '../MedicalRec/LabServiceReport';
function MedicalReportRouting() {

  return (
    <>
        <Layout>
          <Routes>
            <Route path='/' element={<MROutPatientList/>}></Route>
            <Route path='/MROutPatientList' element={<MROutPatientList/>}></Route>
            <Route path='/MRInpatientList' element={<MRInpatientList/>}></Route>
            <Route path='/BirthList' element={<BirthList/>}></Route>
            <Route path='/DeathList' element={<DeathList/>}></Route>
            <Route path='/MedicalRecordReport' element={<MedicalRecordReport/>}></Route>
            <Route path='/EmergencyPatientList' element={<EmergencyPatientList/>}></Route>
            <Route path='/HospitalServiceSummaryReport' element={<HospitalServiceSummaryReport/>}></Route>
            <Route path='/InpatientMorbidityReport' element={<InpatientMorbidityReport/>}></Route>
            <Route path='/HospitalMortalityReport' element={<HospitalMortalityReport/>}></Route>
            <Route path='/EmergencyPMReport' element={<EmergencyPMReport/>}></Route>
            <Route path='/OutPatientMorbidityReport' element={<OutPatientMorbidityReport/>}></Route>
            <Route path='/LabServiceReport' element={<LabServiceReport/>}></Route>
          </Routes>
        </Layout>
      
    </>
  )
}

export default MedicalReportRouting
