
import React, { useState } from 'react';
import '../Nursing/InPatientMainContent.css';
import { useNavigate } from 'react-router-dom';

function MainContent() {

    const [activeTab, setActiveTab] = useState('My Patients'); // Default tab
    
    const navigate = useNavigate();
    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
       
    };
    return (
        <>
        <div className="inpatient-component-container">
        <button 
            className={`inpatient-component-tab ${activeTab === 'My Patients' ? 'active' : ''}`} 
            onClick={() => handleTabClick('My Patients')}
        >
            My Patients
        </button>
        <button 
            className={`inpatient-component-tab ${activeTab === 'All Patients' ? 'active' : ''}`} 
            onClick={() => handleTabClick('All Patients')}
        >
            All Patients
        </button>
        <button 
            className={`inpatient-component-tab ${activeTab === 'Consumptions' ? 'active' : ''}`} 
            onClick={() => handleTabClick('Consumptions')}
        >
            Consumptions
        </button>
        <button 
            className={`inpatient-component-tab ${activeTab === 'Diet Sheet' ? 'active' : ''}`} 
            onClick={() => handleTabClick('Diet Sheet')}
        >
            Diet Sheet
        </button>
    </div>
        {
           activeTab === 'My Patients' && (

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
                  <th>Doctor Name</th>
                  <th>Hospital Num</th>
                  <th>IP Number</th>
                  <th>Name</th>
                  <th>Phone Number</th>
                  <th>Age/Sex</th>
                  <th>Bed Detail</th>
                  <th>Scheme</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
              <tr className="TableRow-tableRow">
                  <td>2024-05-17 21:44</td>
                  <td>INNOCENT TENGO</td>
                  <td>2402003692</td>
                  <td>H2400006</td>
                  <td>LUCY NJAMBI</td>
                  <td>726356972</td>
                  <td>24 Y/F</td>
                  <td>Male Ward/Male Ward-003</td>
                  <td>General</td>
                  <div className="Actions-actions">
                      <button className="Actions-btn Actions-consumption">Consumption</button>
                      <button className="Actions-btn Actions-wardRequest">Ward Request</button>
                      <button className="Actions-btn Actions-transfer">Transfer</button>
                      <button className="Actions-btn Actions-vitals">Vitals</button>
                  </div>
               </tr>
              </tbody>
            </table>
          </div>

           ) 

        }



        {
            activeTab === 'All Patients' && (

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
                      <th>Doctor Name</th>
                      <th>Hospital Num</th>
                      <th>IP Number</th>
                      <th>Name</th>
                      <th>Phone Number</th>
                      <th>Age/Sex</th>
                      <th>Bed Detail</th>
                      <th>Scheme</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                  <tr className="TableRow-tableRow">
                      <td>2024-05-17 21:44</td>
                      <td>INNOCENT TENGO</td>
                      <td>2402003692</td>
                      <td>H2400006</td>
                      <td>LUCY NJAMBI</td>
                      <td>726356972</td>
                      <td>24 Y/F</td>
                      <td>Male Ward/Male Ward-003</td>
                      <td>General</td>
                      <div className="Actions-actions">
                          <button className="Actions-btn Actions-consumption">Consumption</button>
                          <button className="Actions-btn Actions-wardRequest">Ward Request</button>
                          <button className="Actions-btn Actions-transfer">Transfer</button>
                          <button className="Actions-btn Actions-vitals">Vitals</button>
                      </div>
                   </tr>
                   <tr className="TableRow-tableRow">
                      <td>2024-05-17 21:44</td>
                      <td>SHRUTI PUROHIT</td>
                      <td>2402003692</td>
                      <td>H2400006</td>
                      <td>ARNAV SALUNKHE</td>
                      <td>726356972</td>
                      <td>24 Y/F</td>
                      <td>female Ward-023</td>
                      <td>General</td>
                      <div className="Actions-actions">
                          <button className="Actions-btn Actions-consumption">Consumption</button>
                          <button className="Actions-btn Actions-wardRequest">Ward Request</button>
                          <button className="Actions-btn Actions-transfer">Transfer</button>
                          <button className="Actions-btn Actions-vitals">Vitals</button>
                      </div>
                   </tr>
                   <tr className="TableRow-tableRow">
                      <td>2024-05-17 21:44</td>
                      <td>SHREE SAWANT</td>
                      <td>2402003692</td>
                      <td>H2400006</td>
                      <td>LUCY NJAMBI</td>
                      <td>726356972</td>
                      <td>24 Y/F</td>
                      <td>Male Ward/Male Ward-003</td>
                      <td>General</td>
                      <div className="Actions-actions">
                          <button className="Actions-btn Actions-consumption">Consumption</button>
                          <button className="Actions-btn Actions-wardRequest">Ward Request</button>
                          <button className="Actions-btn Actions-transfer">Transfer</button>
                          <button className="Actions-btn Actions-vitals">Vitals</button>
                      </div>
                   </tr>
                  </tbody>
                </table>
              </div>
    
               ) 
            
        }

{
            activeTab === 'Consumptions' && (

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
                      <th>Request Date</th>
                      <th>Hospital Number</th>
                      <th>DialysisCode</th>
                      <th>Patient Name</th>
                      <th>Phone Number</th>
                      <th>Age</th>
                      <th>Sex</th>
                      <th>Service Name</th>
                      <th>Performer Name</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                  
                  </tbody>
                </table>
              </div>
    
               ) 
            
        }

        {
           activeTab === 'Diet Sheet' && (

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
                      <th>SN</th>
                      <th>Unit/Address</th>
                      <th>Hospital No.</th>
                      <th>Scheme</th>
                      <th>Patient Name</th>
                      <th>Age/Sex</th>
                      <th>DOA(BS)</th>
                      <th>Bed No.</th>
                      <th>Diet Type</th>
                      <th>Extra Diet</th>
                      <th>Remarks</th>
                      <th>Last Updated On</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                  <tr className="TableRow-tableRow">
                      <td>1</td>
                      <td>INNOCENT TENGO</td>
                      <td>2402003692</td>
                      <td>General</td>
                      <td>Ravi Singh</td>
                      <td></td>
                      <td>003</td>
                      <td>Liquid Diet</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>23/01/2023</td>
                      <div className="Actions-actions">
                          <button className="Actions-btn Actions-consumption">Edit Diet</button>
                          <button className="Actions-btn Actions-wardRequest">Diet History</button>
                          
                      </div>
                   </tr>
                   <tr className="TableRow-tableRow">
                      <td>1</td>
                      <td>INNOCENT TENGO</td>
                      <td>2402003692</td>
                      <td>General</td>
                      <td>Ravi Singh</td>
                      <td></td>
                      <td>003</td>
                      <td>Liquid Diet</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>23/01/2023</td>
                      <div className="Actions-actions">
                          <button className="Actions-btn Actions-consumption">Edit Diet</button>
                          <button className="Actions-btn Actions-wardRequest">Diet History</button>
                          
                      </div>
                   </tr>
                  </tbody>
                </table>
              </div>
    
               ) 
            
        }
    </>
    );
}

export default MainContent;
