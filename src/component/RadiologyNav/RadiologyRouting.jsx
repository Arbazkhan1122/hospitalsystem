import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';
import RadiologyNavBar from '../RadiologyNav/RadiologyNavBar';
import RDLListRequest from '../RadiologyNav/ListRequest/rdlListRequest';

import RDLListReports from '../RadiologyNav/ListReports/rdlListReports';

import RDLEditDoctors from '../RadiologyNav/EditDoctors/relEditDoctors';
import RDLWardBilling from '../RadiologyNav/WardBilling/rdlWardBilling';
import RDopdbilling from './OPDBilling/reopdbilling';

// import MapGovernmentItemxs from './NavBarSection/LabSetting/mapGovernmentItems';

function RadiologyRouting() {

  return (
    <>
    
      <RadiologyNavBar />
      <div className="lab-content">
        <Routes>
          <Route path="/rDLListRequest" element={<RDLListRequest/>}/>
          <Route path="/rDLListReports" element={<RDLListReports/>}/>
          <Route path="/rDLEditDoctors" element={<RDLEditDoctors/>}/>
          <Route path="/rDLWardBilling" element={<RDLWardBilling/>}/>
          <Route path="/rDOpdbilling" element={<RDopdbilling/>}/>

          
        </Routes>
      </div>
    
    </>
  )
}

export default RadiologyRouting
