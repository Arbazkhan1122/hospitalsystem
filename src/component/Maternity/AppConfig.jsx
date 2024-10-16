// AppRoutes.jsx
import React from "react";
import { Route, Routes } from "react-router-dom";
import MaternityComponent from "./MaternityList";
import ReportComponent from "./Reports";
import PatientComponent from "./PatientList";
import MaternityAllowanceReportComponent from "./MaternityAllowanceReport ";
import MaternityHeader from "./MaternityHeader";
<<<<<<< HEAD
import AntenatalCare from './AntenatalCare/antenatalCare';
import PostnatalCareManagement from './PostnatalCare/postnatalcare';
import Labourmgnt from './LaborRoomManagement/labourmgnt';
import BreastfeedingSupportManagement from './BreastfeedingSupportManagement/breastfeedingSupportmgnt';
import FamilyPlanningSupportManagement from './FamilySupportService/familysupportservice';
=======

>>>>>>> e5850bbfdb9398281441ed2e20586b5375c904eb

const AppConfig = () => {
  return (
    <>
    <MaternityHeader/>
    <Routes>
      <Route path="/maternity-list" element={<MaternityComponent />} />
      <Route path="/reports" element={<ReportComponent />} />
      <Route path="/patient-form" element={<PatientComponent />} />
<<<<<<< HEAD
      
      <Route path="/maternity-allowance-report" element={<MaternityAllowanceReportComponent />} />
              <Route path="/AntenatalCare" element={<AntenatalCare />} />
              <Route path='/PostnatalCare' element={<PostnatalCareManagement/>}></Route>
              <Route path='/Labourmgnt/*' element={<Labourmgnt/>}></Route>
              <Route path='/BreastfeedingSupport' element={<BreastfeedingSupportManagement/>}></Route>
              <Route path='/FamilyPlanningService' element={<FamilyPlanningSupportManagement/>}></Route>
=======
      <Route path="/maternity-allowance-report" element={<MaternityAllowanceReportComponent />} />
      {/* Add more routes as needed */}
>>>>>>> e5850bbfdb9398281441ed2e20586b5375c904eb
    </Routes>
    </>
  );
};

export default AppConfig;
