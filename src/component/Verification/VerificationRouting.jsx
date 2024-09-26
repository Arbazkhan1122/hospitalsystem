import React from 'react'
import RequisitionPage from './RequisitionPage';
import PurchaseRequest from '../Inventory1/Internal/PurchaseRequest';
import PurchaseOrder from '../PharmacyHospital/PurchaseOrder';
import NavigationBar from './NavigationBar';
import { Route, Routes } from 'react-router-dom';
import GRQualityInspection from "./GRQualityInspection"
import RequisitionPagePharmacy from './RequisitionPagePharmacy';

const VerificationRouting = () => {
  return (
      <>
      <NavigationBar />
      <Routes>
        <Route path="/requisition" element={<RequisitionPage />} />
        <Route path="/requisitionPharmacy" element={<RequisitionPagePharmacy />} />

        <Route path="/purchase-request" element={<PurchaseRequest />} />
        <Route path="/purchase-order" element={<PurchaseOrder />} />
        <Route path='/gr-quality-inspection' element={<GRQualityInspection/>}></Route>
        {/* Add other routes here for different pages */}
      </Routes>
      </>
  );
}


export default VerificationRouting