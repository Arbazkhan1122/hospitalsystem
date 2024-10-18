import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';
import BloodBankNavBar from './bloodBankNav';

import BloodDonationForm from './BloodDonation/bloodDonationForm';
import Bloodcollectionmain from './Blood Collection/bloodCollectionMain';
import HIMSSampleDataTable from './BloodTestingNScreening/SampleTable';
import BloodStorageDashboard from './BloodStorageDashboard/bloodStorageDashboard';
import BloodReq from './BloodRequest/bloodReq';
import BloodIssue from './BloodIssue/bloodIssue';
import BBReport from './BBReport/bBReport';
import Donarlist from './Blood Collection/DonationList/donationList';
import Colletionlist from './Blood Collection/CollectionList/collectionList';
function BloodBankRoute() {

  return (
    <>
        <BloodBankNavBar/>
        <div className="bloodBank-content">
        <Routes>
          <Route path="/bloodDonationForm" element={<BloodDonationForm />} />          
          <Route path="/bloodcollectionmain/*" element={<Bloodcollectionmain />} /> 
          <Route path="/hIMSSampleDataTable/*" element={<HIMSSampleDataTable />} /> 
          <Route path="/bloodStorageDashboard" element={<BloodStorageDashboard />} />          
          <Route path="/bloodReq" element={<BloodReq />} />          
          <Route path="/bloodIssue" element={<BloodIssue />} />          
          <Route path="/bBReport" element={<BBReport />} />   
          <Route path="/donarlist" element={<Donarlist />} />   
          <Route path="/collectionlist" element={<Colletionlist />} />   

                 
 

        </Routes>
      </div>
    </>
  )
}

export default BloodBankRoute
