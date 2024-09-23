import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';
import NavigationBar from './hospitalNav';
import Notification from './navNotification'
import SampleCollection from './sampleCollection';
import AddResults from './addResults';
import PendingReports from './pendingReports';

import FinalReports from './finalReports';
import NavSettings from './navSettings';
import NavWardBilling from './navWardBilling';
import NavExternalLabs from './navExternalLabs';
import NavReportDispatch from './navReportDispatch';
import NavLIS from './navLIS';
import NavHome from './NavHome/navHome'
import LabTest from './LabSetting/labTest';
import LabTestComponent from './LabSetting/labTestComponents';
import ReportTemplate from './LabSetting/reportTemplate';
import DefaultSignatories from './LabSetting/defaultSignatories';
import VendorsLab from './LabSetting/vendors-lab';
import LookUps from './LabSetting/looksUps';
import LabCategories from './LabSetting/labCategories';
import MapGovernmentItemxs from './LabSetting/mapGovernmentItems';
// import SampleCollection from './NavBarSection/sampleCollection';
import HospitalNav from "./hospitalNav"
import CollectSample from './CollectSample';
import Opdlab from './OPDBillingLab/opdlab';
const Lab = () => {

  return (
    <>


      <div className="content">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<HospitalNav />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/navHome" element={<NavHome />} />
          <Route path="/sampleCollection" element={<SampleCollection />} />
          <Route path="/add-results" element={<AddResults />} />
          <Route path="/pending-reports" element={<PendingReports />} />
          <Route path="/final-reports" element={<FinalReports />} />
          <Route path="/settings" element={<NavSettings />} />
          <Route path="/ward-billing" element={<NavWardBilling />} />
          <Route path="/external-labs" element={<NavExternalLabs />} />
          <Route path="/report-dispatch" element={<NavReportDispatch />} />
          <Route path="/lis" element={<NavLIS />} />
          <Route path="/labTest" element={<LabTest />} />
          <Route path="/labTestComponent" element={<LabTestComponent />} />
          <Route path="/reportTemplate" element={<ReportTemplate />} />
          <Route path="/defaultSignatories" element={<DefaultSignatories />} />
          <Route path="/vendorsLab" element={<VendorsLab />} />
          <Route path="/lookUps" element={<LookUps />} />
          <Route path="/labCategories" element={<LabCategories />} />
          <Route path="/mapGovernmentItemxs" element={<MapGovernmentItemxs />} />
          <Route path="/collect-sample/:id" element={<CollectSample />}></Route>
          <Route path="/OpdLadbilling" element={<Opdlab/>}></Route>


        </Routes>
      </div>
    </>
  )
}

export default Lab;
