// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './header';
import Home from './homepage';
import SearchPatient from './searchpatient';
import DischargedPatient from './dischargedpatient';
import ExchangeBed from './exchangebed';
import CancelReservation from './canclereservation';
//import SearchPatient from './Home-Pages/admittedpatient';
//import SearchPatient from '.\Home-Pages\searchpatient';
import AdmittedPatient from './admittedpatient';




const Adt = () => {
  return (
    <>
      <Navbar />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search-patient" element={<SearchPatient />} />
          <Route path="/admitted-patient" element={<AdmittedPatient />} />
          <Route path="/discharged-patient" element={<DischargedPatient />} />
          <Route path="/exchange-bed" element={<ExchangeBed />} />
          <Route path="/cancel-reservation" element={<CancelReservation />} />
        </Routes>
      </div>
    </>
  );
};

export default Adt;
