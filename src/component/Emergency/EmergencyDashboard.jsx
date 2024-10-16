 /* Dhanashree_EmergencyDashboard_19/09 */


import React from 'react';
import './EmergencyDashboard.css';

const EmergencyDashboard = () => {
  return (
    <div className="emergency-dashboard">
      <div className="dashboard-card blue-dashboard-card">
        <div className="dashboard-title">Total Emergency Patients Registered Today</div>
        <div className="dashboard-number">0</div>
      </div>
      <div className="dashboard-card red-dashboard-card">
        <div className="dashboard-title">Total Patients Triaged Today</div>
        <div className="dashboard-subtitle">Mild : 0 Moderate : 0 Critical : 0</div>
        <div className="dashboard-number">0</div>
      </div>
      <div className="dashboard-card green-dashboard-card">
        <div className="dashboard-title">Total Patients Finalized Today</div>
        <div className="dashboard-subtitle">LAMA : 0 Admitted : 0 Transferred : 0</div>
        <div className="dashboard-subtitle">Discharged : 0 Death : 0</div>
        <div className="dashboard-number">0</div>
      </div>
    </div>
  );
};

export default EmergencyDashboard;

 /* Dhanashree_EmergencyDashboard_19/09 */
