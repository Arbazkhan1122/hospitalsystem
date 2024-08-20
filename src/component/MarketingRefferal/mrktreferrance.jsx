import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Transaction from './transaction/Transaction';
import Setting from './Setting/Setting';
import Mreport from './Report/Mreport';
import './mrktrefference.css'; // Ensure the CSS file is correctly named and linked

const Mkrtrefrrance = () => {
  return (
    <>
   
        <header className="mkrt_ref-header">
          <nav>
            <ul className="mkrt_ref-header-nav">
              <Link to="Transaction"><li className="mkrt_ref-header-button">Transaction</li></Link>
              <Link to="Setting"><li className="mkrt_ref-header-button">Setting</li></Link>
              <Link to="Mreport"><li className="mkrt_ref-header-button">Report</li></Link>
            </ul>
          </nav>
        </header>
        <div className="mkrt_ref-main-content">
          <Routes>
            <Route path="/Transaction" element={<Transaction />} />
            <Route path="/Setting/*" element={<Setting />} />
            <Route path="/Mreport" element={<Mreport />} />
          </Routes>
        </div>
      
    </>
  );
};

export default Mkrtrefrrance;
