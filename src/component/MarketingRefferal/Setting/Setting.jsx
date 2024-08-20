import React from 'react';
import { Link, Route, Routes, BrowserRouter } from 'react-router-dom';
import RefringOrg from './reffering_organization/RefringOrg';
import ReferringParty from './refferint_party/Reffering_part';
import './mkt_settin.css'; // Import the CSS file

const Settings = () => {
  return (
    <div className="mkt_setting-container">
      <header className="mkt_setting-header">
        <nav className="mkt_setting-nav">
          <ul className="mkt_setting-nav-list">
            <li className="mkt_setting-nav-item">
              <Link to="RefringOrg" className="mkt_setting-nav-link">Referring Organization</Link>
            </li>
            <li className="mkt_setting-nav-item">
              <Link to="ReferringParty" className="mkt_setting-nav-link">Referring Party</Link>
            </li>
            {/* Other settings links */}
          </ul>
        </nav>
      </header>

      <div className="mkt_setting-content">
        <Routes>
          <Route path="RefringOrg" element={<RefringOrg />} />
          <Route path="ReferringParty" element={<ReferringParty />} />
          {/* Add other routes for different settings here */}
        </Routes>
      </div>
    </div>
  );
};

export default Settings;
