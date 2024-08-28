
import React, { useState } from 'react';
import '../Nursing/InPatientMainContent.css';
import { useNavigate } from 'react-router-dom';
import DischargeFromNurse from './DistchargeFromNurse';

function MainContent() {

    const [activeTab, setActiveTab] = useState('Discharged Patients'); // Default tab
    const [isdischarge,isSetDischarge ]=useState(false);
    
    const navigate = useNavigate();
    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
       
    };
    const openDischargeModal=()=>{
        isSetDischarge(true);
    }
    const closeDischargeModal=()=>{
        isSetDischarge(false);
    }


 
    return (
        <>
        <div className="discharge-summary-component-container">
            <button 
                className={`inpatient-component-tab ${activeTab === 'Discharged Patients' ? 'active' : ''}`} 
                onClick={() => handleTabClick('Discharged Patients')}
            >
                Discharged Patients
            </button>
            <button 
                className={`inpatient-component-tab ${activeTab === 'Admitted Patients' ? 'active' : ''}`} 
                onClick={() => handleTabClick('Admitted Patients')}
            >
                Admitted Patients
            </button>
        
         </div>
        {
           activeTab === 'Discharged Patients' && (

            <div className="MyPatientsTable-tableContainer">
            <div className='Nephrology-Header'>
                <input type='text' placeholder='Search' className='Nephrology-searchInput'/>
                <div className="Nephrology-actions">
                    <span className="Nephrology-results">Showing 0/0 results</span>
                    <button className="Nephrology-button">Export</button>
                    <button className="Nephrology-button">Print</button>
                </div>
            </div>
                
                
            <table className="MyPatientsTable-patientsTable">
              <thead>
                <tr>
                  <th>Admitted On</th>
                  <th>Discharged On</th>
                  <th>Hospital Number</th>
                  <th>IP Number</th>
                  <th>Name</th>
                  <th>Phone Number</th>
                  <th>Age/Sex</th>
                  <th>Bill Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
              <tr className="TableRow-tableRow">
                  <td>2024-05-17 21:44</td>
                  <td>2024-03-17 11:44</td>
                  <td>2402003692</td>
                  <td>H2400006</td>
                  <td>Sanika Sawant</td>
                  <td>726356972</td>
                  <td>24 Y/F</td>
                  <td>paid</td>
                 
                  <div className="Actions-actions">
                      <button className="Actions-btn Actions-consumption" onClick={openDischargeModal}>Addddddddd</button>
                     
                  </div>
               </tr>
              </tbody>
            </table>
          </div>

           ) 

        }



{
           activeTab === 'Admitted Patients' && (

            <div className="MyPatientsTable-tableContainer">
            <div className='Nephrology-Header'>
                <input type='text' placeholder='Search' className='Nephrology-searchInput'/>
                <div className="Nephrology-actions">
                    <span className="Nephrology-results">Showing 0/0 results</span>
                    <button className="Nephrology-button">Export</button>
                    <button className="Nephrology-button">Print</button>
                </div>
            </div>
                
                
            <table className="MyPatientsTable-patientsTable">
              <thead>
                <tr>
                  <th>Admitted Date</th>
                  <th>Hospital Number</th>
                  <th>IP Number</th>
                  <th>Name</th>
                  <th>Phone Number</th>
                  <th>Age/Sex</th>
                  <th>Admitting Doctor</th>
                  <th>Bed Feature</th>
                  <th>Bed Code</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
              <tr className="TableRow-tableRow">
                  <td>2024-05-17 21:44</td>
                  <td>2402003692</td>
                  <td>H2400006</td>
                  <td>Sanika Sawant</td>
                  
                  <td>24 Y/F</td>
                  <td>726356972</td>
                  <td>Admitting Doctor</td>
                  <td>Bed Feature</td>
                  <td>Bed Code</td>
                 
                  <div className="Actions-actions">
                      <button className="Actions-btn Actions-consumption">Add</button>
                     
                  </div>
               </tr>
              </tbody>
            </table>
          </div>

           ) 

        }
        {
            isdischarge &&
            <DischargeFromNurse closeModal={closeDischargeModal} show={openDischargeModal}/>
            

        }
         


    </>
    );
}

export default MainContent;
