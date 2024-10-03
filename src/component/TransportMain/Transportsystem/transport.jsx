import React from 'react';

import { Link, Route, Routes } from 'react-router-dom';

import PatientTransportForm from './PatientTransportation/patienttransport';
import Patienttrasferstatus from './patienttransferstatus/patienttrasferstatus';
import Tansferedpatientlist from './Transferlist/tansferedpatientlist';

import "../Transportsystem/transportsystem.css"

function Transportsystem() {
  return (
    <div>
      <header className="transportsystem-header">
        <nav>
          <ul className="transportsystem-nav-links">
            <Link to="/patientTransportForm" className="transportsystem-header-button"><li className='transportsystem-header-button'>Transport form</li></Link>
            <Link to="/patienttrasferstatus" className="transportsystem-header-button"><li className='transportsystem-header-button'>Transport status</li></Link>
            <Link to="/tansferedpatientlist" className="transportsystem-header-button"><li className='transportsystem-header-button'>All transport list</li></Link>
            
          </ul>
        </nav>
      </header>
      
      <Routes>
        <Route path="/patient-transport" element={< PatientTransportForm/>} />
        <Route path="/patienttrasferstatus" element={< Patienttrasferstatus/>} />
        <Route path="/All-patient-transport" element={<Tansferedpatientlist />} />
        
      </Routes>
    </div>
  );
}

export default Transportsystem;
