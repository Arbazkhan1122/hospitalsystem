import React, { useState, useEffect } from 'react';
import './transferpatientlist.css';

function Tansferedpatientlist() {
  // State to hold patients data and loading/error states
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from API when the component mounts
  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await fetch('http://localhost:9093/api/transport/all');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPatients(data); // Update state with fetched data
      } catch (error) {
        setError(error.message); // Handle any errors
      } finally {
        setLoading(false); // End loading state
      }
    };

    fetchPatients(); // Call the fetch function
  }, []); // Empty dependency array to run only once on mount

  // Loading and error handling UI
  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error}</div>;

  return (
    <div className="tansportpatientalllist-container">
      <h2 className="tansportpatientalllist-header">All Patient Transport List</h2>
      <table className="tansportpatientalllist-table">
        <thead>
          <tr>
            <th className="tansportpatientalllist-th">Patient Name</th>
            <th className="tansportpatientalllist-th">Transport Mode</th>
            <th className="tansportpatientalllist-th">Ambulance Driver</th>
            <th className="tansportpatientalllist-th">Status</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patientTransport) => (
            <tr key={patientTransport.id} className="tansportpatientalllist-tr">
              <td className="tansportpatientalllist-td">{patientTransport.patient.name}</td>
              <td className="tansportpatientalllist-td">{patientTransport.modeOfTransport}</td>
              <td className="tansportpatientalllist-td">{patientTransport.modeOfTransport === 'Ambulance' ? patientTransport.transportStaffAssigned : 'N/A'}</td>
              <td className={`tansportpatientalllist-td ${patientTransport.transportStatus === 'Transported' ? 'transported' : 'not-transported'}`}>
                {patientTransport.transportStatus || 'N/A'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Tansferedpatientlist;
