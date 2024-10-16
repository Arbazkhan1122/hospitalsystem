import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.css";
import NavigationBar from "./hospitalNav";
import Notification from "./navNotification";
import SampleCollection from "./sampleCollection";
import AddResults from "./addResults";
import PendingReports from "./pendingReports";

import FinalReports from "./finalReports";
import NavSettings from "./navSettings";
// import NavWardBilling from "./navWardBilling";
// import NavExternalLabs from "./navExternalLabs";
// import NavReportDispatch from "./navReportDispatch";
// import NavLIS from "./navLIS";
import NavHome from "./NavHome/navHome";
import LabTestComponent from "./LabSetting/labTestComponents";
import ReportTemplate from "./LabSetting/reportTemplate";
import DefaultSignatories from "./LabSetting/defaultSignatories";
import VendorsLab from "./LabSetting/vendors-lab";
import LookUps from "./LabSetting/looksUps";
import LabCategories from "./LabSetting/labCategories";
import MapGovernmentItemxs from "./LabSetting/mapGovernmentItems";
// import SampleCollection from './NavBarSection/sampleCollection';
import HospitalNav from "./hospitalNav";
import CollectSample from "./CollectSample";
import Opdlab from "./OPDBillingLab/opdlab";
import AddResultForm from "./addResultForm";
import LabResult from "./labResult";

const Lab = () => {
  return (
    <>
      <div className="content">
        <NavigationBar />
        {/* <HospitalNav /> */}
        <Routes>
          <Route path="/navHome" element={<NavHome />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/sampleCollection" element={<SampleCollection />} />
          <Route path="/add-results" element={<AddResults />} />
          <Route path="/pending-reports" element={<PendingReports />} />
          <Route path="/final-reports" element={<FinalReports />} />
          <Route path="/settings/*" element={<NavSettings />} />
          {/* <Route path="/ward-billing" element={<NavWardBilling />} /> */}
          {/* <Route path="/external-labs" element={<NavExternalLabs />} /> */}
          {/* <Route path="/report-dispatch" element={<NavReportDispatch />} /> */}
          {/* <Route path="/lis" element={<NavLIS />} /> */}

          <Route path="/collect-sample/:id" element={<CollectSample />}></Route>
          <Route path="/OpdLadbilling" element={<Opdlab />}></Route>
          <Route path="/addResultForm" element={<AddResultForm />}></Route>
          <Route path="/labResult" element={<LabResult />}></Route>
        </Routes>
      </div>
    </>
  );
};

export default Lab;
