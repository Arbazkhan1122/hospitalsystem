 /* Ajhar Tamboli transportMainRoute.jsx 25-09-24 */

import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';
import TransportNavBar from './transportNav';

import Transportsystem from './Transportsystem/transport';
import PatientTransportForm from './Transportsystem/PatientTransportation/patienttransport';
import Patienttrasferstatus from './Transportsystem/patienttransferstatus/patienttrasferstatus';
import Tansferedpatientlist from './Transportsystem/Transferlist/tansferedpatientlist';

import AmbulanceNavbar from './Ambulance/ambulanceNavbar';
import AmbulanceList from './Ambulance/AmbulanceList';
import DispatchForm from './Ambulance/DispatchForm';
import GPSMap from './Ambulance/GPSMap';
import EmergencyRequest from './Ambulance/EmergencyRequest';

import StaffTransNavbar from './StaffTransport/staffTransNavbar';
import StaffTransportTable from './StaffTransport/StaffInformation/StaffInformation';
import VehicleTable from './StaffTransport/TransportServiceDetails/TransportServiceDetails';
import RouteScheduleManagement from './StaffTransport/RouteScheduleManagement/RouteScheduleManagement';
import EmergencyLateNightArrangements from './StaffTransport/EmergencyLateNightArrangements/EmergencyLateNightArrangements';


import EmergencyTransportTable from './EmergencyTransport/emergencyTransportTable';
import TransportRequest from './TransportRequest/TransportRequest';
import AddEmergencyPageTransport from './EmergencyTransport/AddEmergencyPage';

import VehicleMaintenance from './VehicleMaintenance/vehicleMaintenance';

function TransportMain() {

  return (
    <>
        <TransportNavBar/>
        <div className="transportNavBar-content">
        <Routes>
         
          <Route path="/transportsystem" element={<Transportsystem />} />           
          <Route path="/patientTransportForm" element={<PatientTransportForm />} />           
          <Route path="/patienttrasferstatus" element={<Patienttrasferstatus />} />           
          <Route path="/tansferedpatientlist" element={<Tansferedpatientlist />} />


          <Route path="/ambulanceNavbar" element={<AmbulanceNavbar />} />
          <Route path="/ambulance-list" element={<AmbulanceList />} />
          <Route path="/dispatch" element={<DispatchForm />} />
          <Route path="/gps-map" element={<GPSMap />} />
          <Route path="/emergency-request" element={<EmergencyRequest />} />

          <Route path="/staffTransNavbar" element={<StaffTransNavbar />} />
          <Route path="/staff-information" element={<StaffTransportTable />} />
          <Route path="/transport-service-details" element={<VehicleTable />} />
          <Route path="/route-schedule-management" element={<RouteScheduleManagement />} />
          <Route path="/emergency-late-night-arrangements" element={<EmergencyLateNightArrangements />} />

          <Route path="/emergencyTransportTable" element={<EmergencyTransportTable />} />           
          <Route path="/addEmergencyPageTransport" element={<AddEmergencyPageTransport />} />           
          <Route path="/transportRequest" element={<TransportRequest />} />           

          
          <Route path="/vehicleMaintenance" element={<VehicleMaintenance />} />           
 

        </Routes>
      </div>
    </>
  )
}

export default TransportMain
