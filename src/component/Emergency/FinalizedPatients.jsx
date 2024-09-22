 /* Dhanashree_FinalizedPatients_19/09 */


import React, { useState, useEffect, useRef } from 'react';
import ReactToPrint from 'react-to-print';
import './FinalizedPatients.css';
import LAMA from './LAMA'; 
import Transferred from './Transferred'; 
import Discharge from './Discharge'; 
import Admitted from './Admitted'; 
import Death from './Death'; 
import DOR from './DOR'; 

// Reusable NavTab component
const NavTab = ({ tabName, selectedTab, setSelectedTab }) => (
  <a 
    href={`http://localhost:5174/finalizedPatients/${tabName}`}
    className={selectedTab === tabName ? 'FinalizedPatients-active' : ''}
    onClick={(e) => {
      e.preventDefault();
      setSelectedTab(tabName);
    }}
  >
    {tabName}
  </a>
);

const FinalizedPatients = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');
  const [selectedTab, setSelectedTab] = useState('LAMA');
  const [patients, setPatients] = useState([]);
  const printRef = useRef();

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await fetch(`http://localhost:3107/api/finalize/finalize-patient/${selectedTab}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setPatients(data);
      } catch (error) {
        console.error('Error fetching patients:', error.message);
      }
    };

    fetchPatients();
  }, [selectedTab]);

  return (
    <div className="FinalizedPatients-finalized-patients">
      <nav className="FinalizedPatients-tab-nav">
        {/* Render NavTabs dynamically */}
        {['LAMA', 'Transferred', 'Discharged', 'Admitted', 'Death', 'DOR'].map((tab) => (
          <NavTab key={tab} tabName={tab} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        ))}
      </nav>

      <div className="FinalizedPatients-content">
        {/* Conditionally render the correct component based on the selected tab */}
        {selectedTab === 'LAMA' ? (
          <LAMA />  
        ) : selectedTab === 'Transferred' ? (
          <Transferred />  
        ) : selectedTab === 'Discharged' ? (
          <Discharge />  
        ) : selectedTab === 'Admitted' ? (
          <Admitted />  
        ) : selectedTab === 'Death' ? (
          <Death />  
        ) : selectedTab === 'DOR' ? (
          <DOR />  
        ) : (
          <div>
            <div className="FinalizedPatients-search-filter">
              <div className="FinalizedPatients-search-bar">
                <input 
                  type="text" 
                  placeholder="Search" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="FinalizedPatients-search-icon">🔍</button>
              </div>
              <select 
                value={filter} 
                onChange={(e) => setFilter(e.target.value)}
                className="FinalizedPatients-filter-dropdown"
              >
                <option value="All">All</option>
                <option value="General">General</option>
                <option value="Dog Bite">Dog Bite</option>
                <option value="Snake Bite">Snake Bite</option>
                <option value="Animal Bite">Animal Bite</option>
                <option value="Emergency Labour">Emergency Labour</option>
                <option value="Medico-Legal">Medico-Legal</option>
              </select>
            </div>

            <div className="FinalizedPatients-results-info">
              <span>Showing {patients.length} results</span>
              <ReactToPrint
                trigger={() => <button className="FinalizedPatients-print-btn">Print</button>}
                content={() => printRef.current}
              />
            </div>

            {/* Print Table component can go here */}
          </div>
        )}
      </div>
    </div>
  );
};

export default FinalizedPatients;

 /* Dhanashree_FinalizedPatients_19/09 */
