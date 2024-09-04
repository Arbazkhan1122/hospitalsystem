import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';
// import RadiologyNavBar from './RadiologyNav/RadiologyNavBar';

import HHEmpInformation from './HhEmployeeInformation/hhEmpInformation';
import HHBedInformation from './HhBedInformation/hhBedInformation';
import HHWardInformation from './HhWardInformation/hhWardInformation';
import HHQueueInformation from './HhQueueInformation/HhQueueInformation';
import HelpDeskNav from './helpDeskNav';

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
