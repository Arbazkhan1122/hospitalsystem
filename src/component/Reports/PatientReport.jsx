
import React, { useState } from 'react';
import '../Reports/PatientReport.css';
import { useNavigate } from 'react-router-dom';

function MainContent() {

    const [activeTab, setActiveTab] = useState('Inpatient Census Report'); // Default tab
    const [AdmittedPatient,setAdmittedPatient]=useState(false);
    const [dischargedPatient,setdischargedPatient]=useState(false);


    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 1; // Update this according to your data
  
    const handlePageChange = (page) => {
      if (page > 0 && page <= totalPages) {
        setCurrentPage(page);
      }
    };
    
    const navigate = useNavigate();
    const [InpatientCensus,setInpatientCensus]=useState(false);
    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
       
    };
 
    
      const [filterOption, setFilterOption] = useState('All');
      const [fromDate, setFromDate] = useState('');
      const [toDate, setToDate] = useState('');
    
    
   
    const handleFilterData = () => {
        // Implement filter logic here
        console.log(`Filtering data from ${fromDate} to ${toDate} with option ${filterOption}`);
      };
      const InpatientCensusReport=()=>{
        setInpatientCensus(!InpatientCensus);
      }
      const AdmittedPatientReport=()=>{
        setAdmittedPatient(!AdmittedPatient)
      }
      const dischargedPatientReport=()=>{
        setdischargedPatient(!dischargedPatient)
      }

    

    return (
        <>
        <div className="admission-component-container">
        <button 
            className={`admission-component-tab ${activeTab === 'Registeration Report' ? 'active' : ''}`} 
            onClick={() => handleTabClick('Registeration Report')}
        >
          Registration Report
        </button>
        <button 
            className={`admission-component-tab ${activeTab === 'Edited Patient Detail Report' ? 'active' : ''}`} 
            onClick={() => handleTabClick('Edited Patient Detail Report')}
        >
            Edited Patient Detail Report
        </button>
       
       
    </div>
        {
           activeTab === 'Registeration Report' && (

            <div className="Admission-tableContainer">
                <h3>Patient Registeration Report</h3>
            <div className="admission-date-filter">
                <label>
                  From:
                  <input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} />
                </label>
                <label>
                  To:
                  <input type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} />
                </label>
                <button onClick={handleFilterData}>OK</button>
                <button style={{ marginLeft: '5px' }}>★</button>
                <button style={{ marginLeft: '5px' }}> - </button>
                <label for="Country" className='DoctorNameClass'>Country:</label>

                <select name="Country" id="Country">
                <option>----Select-----</option>
                <option >India</option>
                <option >China</option>
                <option >Germany</option>
                <option >France</option>
                </select>

                <label for="gender" className='DoctorNameClass'>Gender:</label>

                <select name="gender" id="gender">

                <option >All</option>
                <option >Male</option>
                <option >Female</option>

                </select>
                <button style={{ marginLeft: '15px' }} onClick={InpatientCensusReport}>Show Report</button>
              </div>
                
           
          </div>

           ) 

        }

        {
           activeTab === 'Edited Patient Detail Report' && (

            <div className="Admission-tableContainer">
             <h3>Edited Patient Detail Report</h3>
            <div className="admission-date-filter">
                <label>
                  From:
                  <input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} />
                </label>
                <label>
                  To:
                  <input type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} />
                </label>
                <button onClick={handleFilterData}>OK</button>
                <button style={{ marginLeft: '5px' }}>★</button>
                <button style={{ marginLeft: '5px' }}> - </button>

                <label for="User" className='DoctorNameClass'>Select User:</label>

                <select name="User" id="User">
                <option>----All Users-----</option>
                <option >Dr. Arnav Pawar</option>
                <option >Dr. Aarya Desai</option>
                <option >Dr. Shriniwas Shelar</option>
                <option >Dr. Pooja Batra</option>
                </select>

          
                <button style={{ marginLeft: '15px' }} onClick={AdmittedPatientReport}>Show Report</button>
              </div>
                
           
          </div>

           ) 

        }



        {
           activeTab === 'Registeration Report' && 
           InpatientCensus && (

        <div className="MyPatientsTable-tableContainer">
                <div className='Admitted-Patient-Header'>
                <input type='text' placeholder='Search' className='Admitted-Patient-searchInput'/>
                <div className="Admitted-Patient-actions">
                    <span className="Admitted-Patient-results">Showing 0/0 results</span>
                    <button className="Admitted-Patient-button">Export</button>
                    <button className="Admitted-Patient-button">Print</button>
                </div>

            </div>
        <table className="InpatientCensus-report-table">
            <thead>
            <tr>
            <th>Registered Date</th>
          <th>Patient Name</th>
          <th>Date of Birth</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Phone Number</th>
          <th>Country</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>25-Nov-2023</td>
          <td>Shankar Patil</td>
          <td>17-Aug-2023</td>
          <td>1Y</td>
          <td>Male</td>
          <td>9049831010</td>
          <td>Germany</td>
      
        </tr>
        <tr>
          <td>12-Aug-2024</td>
          <td>S Suresh</td>
          <td>12-Aug-1979</td>
          <td>1Y</td>
          <td>Male</td>
          <td>9049831010</td>
          <td>France</td>
      
        </tr>
        <tr>
          <td>11-Aug-2024</td>
          <td>Shashank Salunkhe</td>
          <td>17-Aug-2023</td>
          <td>1Y</td>
          <td>Male</td>
          <td>9049831010</td>
          <td>India</td>
      
        </tr>
        <tr>
          <td>10-Aug-2024</td>
          <td>Sadhana More</td>
          <td>17-Aug-2023</td>
          <td>1Y</td>
          <td>Male</td>
          <td>9049831010</td>
          <td>Kenya</td>
      
        </tr>
        <tr>
          <td>25-Nov-2023</td>
          <td>Shankar Patil</td>
          <td>17-Aug-2023</td>
          <td>1Y</td>
          <td>Male</td>
          <td>9049831010</td>
          <td>Kenya</td>
      
        </tr>
        <tr>
          <td>25-Nov-2023</td>
          <td>Shankar Patil</td>
          <td>17-Aug-2023</td>
          <td>1Y</td>
          <td>Male</td>
          <td>9049831010</td>
          <td>Kenya</td>
      
        </tr>
        
      </tbody>
    </table>
    <div className="OutPatient_PastDays-pagination">
              <button 
                className="OutPatient_PastDays-pagination-btn" 
                onClick={() => handlePageChange(1)}
                disabled={currentPage === 1}
              >
                First
              </button>
              <button 
                className="OutPatient_PastDays-pagination-btn" 
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <span className="OutPatient_PastDays-pagination-info">
                {`Page ${currentPage} of ${totalPages}`}
              </span>
              <button 
                className="OutPatient_PastDays-pagination-btn" 
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
              <button 
                className="OutPatient_PastDays-pagination-btn" 
                onClick={() => handlePageChange(totalPages)}
                disabled={currentPage === totalPages}
              >
                Last
              </button>
            </div>
    
              </div>
    
               ) 
            
        }


        

        
{
    activeTab==='Edited Patient Detail Report'  && (
      AdmittedPatient &&(

  <>
    <div className="Admitted-Patient-tableContainer">

     {/* Filter Options */}
    

             
    <div className='Admitted-Patient-Header'>
        <input type='text' placeholder='Search' className='Admitted-Patient-searchInput'/>
        <div className="Admitted-Patient-actions">
            <span className="Admitted-Patient-results">Showing 0/0 results</span>
            <button className="Admitted-Patient-button">Export</button>
            <button className="Admitted-Patient-button">Print</button>
        </div>
   </div>
    <table className="OutPatient_PastDays-patientsTable">
      <thead>
        <tr>
          <th>Hospital Number </th>
          <th>Patient Old Name</th>
          <th>Patient New Name</th>
          <th>Registered By</th>
          <th>Edited By</th>
          <th>Registered Date</th>
          <th>Edited date</th>
    
        </tr>
      </thead>
      <tbody>
        <tr className="OutPatient_PastDays-tableRow">
          <td>2408003805          </td>
          <td>Shridhar Sathye</td>
          <td>Shri Nene</td>
          <td>Admin</td>
          <td>Admin</td>
          <td>2024-08-01T19:06:30.537</td>
          
          
        </tr>
        <tr className="OutPatient_PastDays-tableRow">
        <td>2408003805          </td>
          <td>Shridhar Sathye</td>
          <td>Shri Nene</td>
          <td>Admin</td>
          <td>Admin</td>
          <td>2024-08-01T19:06:30.537</td>
          
         
        </tr>
        <tr className="OutPatient_PastDays-tableRow">
        <td>2408003805          </td>
          <td>Shridhar Sathye</td>
          <td>Shri Nene</td>
          <td>Admin</td>
          <td>Admin</td>
          <td>2024-08-01T19:06:30.537</td>
          
          
         
        </tr>
        <tr className="OutPatient_PastDays-tableRow">
        <td>2408003805          </td>
          <td>Shridhar Sathye</td>
          <td>Shri Nene</td>
          <td>Admin</td>
          <td>Admin</td>
          <td>2024-08-01T19:06:30.537</td>
          
          
         
        </tr>
        <tr className="OutPatient_PastDays-tableRow">
        <td>2408003805          </td>
          <td>Shridhar Sathye</td>
          <td>Shri Nene</td>
          <td>Admin</td>
          <td>Admin</td>
          <td>2024-08-01T19:06:30.537</td>
          
         
        </tr>
    </tbody>
    </table>
            </div>
            <div className="OutPatient_PastDays-pagination">
              <button 
                className="OutPatient_PastDays-pagination-btn" 
                onClick={() => handlePageChange(1)}
                disabled={currentPage === 1}
              >
                First
              </button>
              <button 
                className="OutPatient_PastDays-pagination-btn" 
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <span className="OutPatient_PastDays-pagination-info">
                {`Page ${currentPage} of ${totalPages}`}
              </span>
              <button 
                className="OutPatient_PastDays-pagination-btn" 
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
              <button 
                className="OutPatient_PastDays-pagination-btn" 
                onClick={() => handlePageChange(totalPages)}
                disabled={currentPage === totalPages}
              >
                Last
              </button>
            </div>
</>

                
              ))
            }












       
    </>
    );
}

export default MainContent;
