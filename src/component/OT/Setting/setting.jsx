// neha-OT-OT-setting-14-9-24
import React, { useState } from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import Ot_machine from './settingsubfils/ot_machine/ot_machine';
import Ot_personnelType from './settingsubfils/ot_PersonnelType/Ot_personal_type';
import ManageOtChecklist from './settingsubfils/Manage_ot_checklist/manage_checklist';
import './setting.css';

const Setting = () => {
  const location = useLocation(); // get the current path
  const [activeNav, setActiveNav] = useState(null);

  const handleNavClick = (navType) => {
    setActiveNav(navType);
  };

  const isActive = (path) => location.pathname.includes(path); // check active path

  return (
    <>
      <header className="setting-header">
        <nav>
          <ul className="setting-header-nav">
            <Link to="ot-machine">
              <li
                className={isActive('ot-machine') ? 'active-nav' : ''}
                onClick={() => handleNavClick('Ot_machine')}
              >
                Manage OT Machine
              </li>
            </Link>
            <Link to="Ot_personnelType">
              <li
                className={isActive('Ot_personnelType') ? 'active-nav' : ''}
                onClick={() => handleNavClick('Ot_personnelType')}
              >
                Manage OT Personnel Type
              </li>
            </Link>
            <Link to="ManageOtChecklist">
              <li
                className={isActive('ManageOtChecklist') ? 'active-nav' : ''}
                onClick={() => handleNavClick('ManageOtChecklist')}
              >
                Manage Ot Checklist
              </li>
            </Link>
          </ul>
        </nav>
      </header>
      <div>
        <Routes>
          <Route path="ot-machine" element={<Ot_machine />} />
          <Route path="Ot_personnelType" element={<Ot_personnelType />} />
          <Route path="ManageOtChecklist" element={<ManageOtChecklist />} />
        </Routes>
      </div>
    </>
  );
};

export default Setting;
