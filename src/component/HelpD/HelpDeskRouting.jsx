import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';
// import RadiologyNavBar from './RadiologyNav/RadiologyNavBar';

import HHEmpInformation from '../HelpD/HhEmployeeInformation/hhEmpInformation';
import HHBedInformation from '../HelpD/HhBedInformation/hhBedInformation';
import HHWardInformation from '../HelpD/HhWardInformation/hhWardInformation';
import HHQueueInformation from '../HelpD/HhQueueInformation/HhQueueInformation';
import HelpDeskNav from '../HelpD/helpDeskNav';

function HelpDeskRouting() {

  return (
    <>
    
      <HelpDeskNav />
      <div className="lab-content">
        <Routes>
          <Route path="/hHEmpInformation" element={<HHEmpInformation/>}/>
          <Route path="/hHBedInformation" element={<HHBedInformation/>}/>
          <Route path="/hHWardInformation" element={<HHWardInformation/>}/>
          <Route path="/hHQueueInformation" element={<HHQueueInformation/>}/>

          
        </Routes>
      </div>
    </>
  )
}

export default HelpDeskRouting
