import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';
import DispensaryNavBar from '../DispensaryPage/dispensaryNav';

import DisPrescription from '../DispensaryPage/DisPrescriptionMain/disPrescription';
import DispenSales from '../DispensaryPage/DisSales/dispenSales';

import SalesStockDetails from '../DispensaryPage/DisStocks/dispenSalesStockDetails';
import DispenTransfer from '../DispensaryPage/DisStocks/dispenTransfer';

import DispenCouter from '../DispensaryPage/DisCounter/dispenCounter';

import DispenReportList from '../DispensaryPage/DisReport/dispenReports';

import DispenPatientConsump from '../DispensaryPage/DisPatient/dispenPatientConsump';

import DispenPatientConsumption from '../DispensaryPage/DisPatientConsumption/dispenPatientConsumption';
function Disprensary() {

  return (
    <>
        <DispensaryNavBar/>
        <div className="dispensary-content">
        <Routes>
          <Route path="/disPrescription" element={<DisPrescription />} />          
          <Route path="/dispenSales" element={<DispenSales />} />   

          <Route path="/salesStockDetails" element={<SalesStockDetails />} />          
          <Route path="/dispenTransfer" element={<DispenTransfer />} />  

          <Route path="/dispenCouter" element={<DispenCouter />} />

          <Route path="/dispenReportList" element={<DispenReportList />} /> 
                   
          <Route path="/dispenPatientConsump" element={<DispenPatientConsump />} />   

          <Route path="/dispenPatientConsumption" element={<DispenPatientConsumption />} />          
        </Routes>
      </div>
    </>
  )
}

export default Disprensary