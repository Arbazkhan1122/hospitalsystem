import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Ot_machine from './settingsubfils/ot_machine/ot_machine';
import Ot_personnelType from './settingsubfils/ot_PersonnelType/Ot_personal_type';
import ManageOtChecklist from './settingsubfils/Manage_ot_checklist/manage_checklist';
import './setting.css';

const Setting = ({ onNavClick }) => {
  const [activeNav, setActiveNav] = useState(null);

  const handleNavClick = (navType) => {
    setActiveNav(activeNav === navType ? null : navType);
  };

  return (
    <>
      <header className="setting-header">
        <nav>
          <ul className="setting-header-nav">
            <Link to={"ot-machine"}><li onClick={() => handleNavClick('Ot_machine')}>Manage OT Machine</li></Link>
            <Link to={"Ot_personnelType"}><li onClick={() => handleNavClick('Ot_personnelType')}>Manage OT Personnel Type</li></Link>
            <Link to={"ManageOtChecklist"}><li onClick={() => handleNavClick('ManageOtChecklist')}>Manage Ot Checklist</li></Link>

            {/* <li onClick={() => handleNavClick('otChecklist')}>Manage OT Checklist</li> */}
          </ul>
        </nav>
      </header>
  <div>
    <Routes>
      <Route path="ot-machine" element={<Ot_machine/>} ></Route>
      <Route path="Ot_personnelType" element={<Ot_personnelType/>} ></Route>
      <Route path="ManageOtChecklist" element={<ManageOtChecklist/>} ></Route>
    </Routes>
  </div>

     
    </>
  );
};

export default Setting;
