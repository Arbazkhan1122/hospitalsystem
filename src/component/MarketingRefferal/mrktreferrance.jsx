/* neha-mktreffaral-19/09/24 */
import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
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
            <NavLink
              to="Transaction"
              className={({ isActive }) => isActive ? 'mkrt_ref-header-button active' : 'mkrt_ref-header-button'}
            >
              <li>Transaction</li>
            </NavLink>
            <NavLink
              to="Setting"
              className={({ isActive }) => isActive ? 'mkrt_ref-header-button active' : 'mkrt_ref-header-button'}
            >
              <li>Setting</li>
            </NavLink>
            <NavLink
              to="Mreport"
              className={({ isActive }) => isActive ? 'mkrt_ref-header-button active' : 'mkrt_ref-header-button'}
            >
              <li>Report</li>
            </NavLink>
          </ul>
        </nav>
      </header>
      <div className="mkrt_ref-main-content">
        <Routes>
          <Route path="Transaction" element={<Transaction />} />
          <Route path="Setting/*" element={<Setting />} />
          <Route path="Mreport" element={<Mreport />} />
        </Routes>
      </div>
    </>
  );
};

export default Mkrtrefrrance;
