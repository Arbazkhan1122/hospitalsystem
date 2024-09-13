// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./utilitiesNavbar";

import SchemeRefundList from './schema refund/list';
import Change_Visitscheme from './Change_Visit_Scheme/Change_Visitscheme';
import CounterInfo from './change_billing_counter/change_blling_counter/';
import OrganizationDeposit from './Organization_Deposit/organizationdeposit';
const Utilitiesmain = () => {
  return (
   <>
        <Navbar/>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<SchemeRefundList/>} />
          <Route path="/Change_Visitscheme" element={<Change_Visitscheme/>} />
          <Route path='/CounterInfo' element={<CounterInfo/>}/>
          <Route path='/organizationdeposit' element={<OrganizationDeposit/>}/>
         
        </Routes>
      </div>
   </>
  );
};

export default Utilitiesmain;
