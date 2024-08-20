
import React, { useState } from 'react';
import '../Reports/Admission.css';
import { useNavigate } from 'react-router-dom';

function MainContent() {

    const [activeTab, setActiveTab] = useState('Inpatient Census Report'); // Default tab
    const [AdmittedPatient,setAdmittedPatient]=useState(false);
    const [dischargedPatient,setdischargedPatient]=useState(false);
    const [transferedPatient,settransferedPatient]=useState(false);
    const [diagnosisWisePatient,setdiagnosisWisePatient]=useState(false);
    const [admissionDischargeList,setadmissionDischargeList]=useState(false);
    const [RankMembershipwise,setRankMembershipwise]=useState(false);
    const [inPatientOutstanding,setinPatientOutstanding]=useState(false);
    const [RankMembershipwiseDischarged,setRankMembershipwiseDischarged]=useState(false);

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

      const transferedPatientReport=()=>{
        settransferedPatient(!transferedPatient)
      }

      const diagnosisWisePatientReport=()=>{
        setdiagnosisWisePatient(!diagnosisWisePatient)
      }
      const admissionDischargeListReport=()=>{
        setadmissionDischargeList(!admissionDischargeList)
      }

      const RankMembership=()=>{
        setRankMembershipwise(!RankMembershipwise)
      }

      const inPatientOutstandingReport=()=>{
        setinPatientOutstanding(!inPatientOutstanding)
      }

      const RankMembershipwiseDischargedReport=()=>{
        setRankMembershipwiseDischarged(!RankMembershipwiseDischarged)
      }

    return (
        <>
        <div className="admission-component-container">
        <button 
            className={`admission-component-tab ${activeTab === 'Inpatient Census Report' ? 'active' : ''}`} 
            onClick={() => handleTabClick('Inpatient Census Report')}
        >
          Inpatient Census Report
        </button>
        <button 
            className={`admission-component-tab ${activeTab === 'Admitted Patient' ? 'active' : ''}`} 
            onClick={() => handleTabClick('Admitted Patient')}
        >
            Admitted Patient
        </button>
        <button 
            className={`admission-component-tab ${activeTab === 'Discharged Patient' ? 'active' : ''}`} 
            onClick={() => handleTabClick('Discharged Patient')}
        >
            Discharged Patient
        </button>
        <button 
            className={`admission-component-tab ${activeTab === 'Transferred Patient' ? 'active' : ''}`} 
            onClick={() => handleTabClick('Transferred Patient')}
        >
            Transferred Patient
        </button>
    
        <button 
            className={`admission-component-tab ${activeTab === 'DiagnosisWise Patient' ? 'active' : ''}`} 
            onClick={() => handleTabClick('DiagnosisWise Patient')}
        >
            DiagnosisWise Patient
        </button>
        <button 
            className={`admission-component-tab ${activeTab === 'Admission And Discharge List' ? 'active' : ''}`} 
            onClick={() => handleTabClick('Admission And Discharge List')}
        >
           Admission And Discharge List
        </button>
        <button 
            className={`admission-component-tab ${activeTab === 'Rank-Membershipwise Admitted Patient Report' ? 'active' : ''}`} 
            onClick={() => handleTabClick('Rank-Membershipwise Admitted Patient Report')}
        >
           Rank-Membershipwise Admitted Patient Report
        </button>
        <button 
            className={`admission-component-tab ${activeTab === 'InPatient Outstanding Report' ? 'active' : ''}`} 
            onClick={() => handleTabClick('InPatient Outstanding Report')}
        >
            InPatient Outstanding Report
        </button>
        <button 
            className={`admission-component-tab ${activeTab === 'Rank-Membershipwise Discharged Patient Report' ? 'active' : ''}`} 
            onClick={() => handleTabClick('Rank-Membershipwise Discharged Patient Report')}
        >
            Rank-Membershipwise Discharged Patient Report
        </button>
    </div>
        {
           activeTab === 'Inpatient Census Report' && (

            <div className="Admission-tableContainer">
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
                <button style={{ marginLeft: '15px' }} onClick={InpatientCensusReport}>Show Report</button>
              </div>
                
            <table className="Admission-patientsTable">
              <thead>
                <tr>
                  <th>Total Admitted:0 </th>
                  <th>Total Discharged:0</th>
                  
                </tr>
              </thead>
              
            </table>
          </div>

           ) 

        }

        {
           activeTab === 'Admitted Patient' && (

            <div className="Admission-tableContainer">
             <h3>Total Admitted Patients Report</h3>
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
                <button style={{ marginLeft: '15px' }} onClick={AdmittedPatientReport}>Show Report</button>
              </div>
                
           
          </div>

           ) 

        }



        {
           activeTab === 'Inpatient Census Report' && 
           InpatientCensus && (

        <div className="MyPatientsTable-tableContainer">
                <div className='Inpatient-Census-Header'>
                <h3>Inpatient Census(All Wards) for the selected dates</h3>
                <h3>From: 2024-08-14 to 2024-08-14</h3>
            </div>
        <table className="InpatientCensus-report-table">
            <thead>
            <tr>
            <th>Ward Name</th>
          <th>In Bed <span className="info-icon">ℹ</span></th>
          <th>New Admission</th>
          <th>Trans IN</th>
          <th>Trans OUT</th>
          <th>Discharged</th>
          <th>Total Pt. <span className="info-icon">ℹ</span></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Brain Ward</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
        </tr>
        <tr>
          <td>Female Ward</td>
          <td>4</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>4</td>
        </tr>
        <tr>
          <td>ICU</td>
          <td>1</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>1</td>
        </tr>
        <tr>
          <td>Male Ward</td>
          <td>4</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>4</td>
        </tr>
        <tr>
          <td>Maternity Ward</td>
          <td>3</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>3</td>
        </tr>
        <tr>
          <td>Private Ward</td>
          <td>1</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>1</td>
        </tr>
        <tr className="total-row">
          <td>All Wards</td>
          <td>13</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>13</td>
        </tr>
      </tbody>
    </table>
        <div className='print-button-container'>
        <button className="print-button">
        <span className="print-icon">🖨</span> Print
        </button>

        </div>
    
              </div>
    
               ) 
            
        }


        

        
{
    activeTab==='Admitted Patient'  && (
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
          <th> Date &#x2193;</th>
          <th>Time</th>
          <th>Hospital Number</th>
          <th>Patient Name</th>
          <th>Age/Sex</th>
          <th>Phone Number</th>
         
          <th>Doctor Name</th>
          <th>Appointment Type</th>
         
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr className="OutPatient_PastDays-tableRow">
          <td>2024-08-13T00:00:00</td>
          <td>10:31 AM</td>
          <td>2408003819</td>
          <td>S Suresh</td>
          <td>45Y/M</td>
          <td>3456789021</td>
          <td>Mrs Prachi</td>
          <td>New</td>
          <div className="Actions-actions">
                      <button className="Actions-btn Actions-consumption">Add Triage</button>
                      <button className="Actions-btn Actions-wardRequest">&#x1F5A5;</button>
                      <button className="Actions-btn Actions-transfer">Clinical</button>
                      <button className="Actions-btn Actions-vitals">&#x21E7;</button>
          </div>
        </tr>
        <tr className="OutPatient_PastDays-tableRow">
          <td>2024-08-13T00:00:00</td>
          <td>10:31 AM</td>
          <td>2408003819</td>
          <td>S Suresh</td>
          <td>45Y/M</td>
          <td>3456789021</td>
          <td>Mrs Prachi</td>
          <td>New</td>
          <div className="Actions-actions">
                      <button className="Actions-btn Actions-consumption">Add Triage</button>
                      <button className="Actions-btn Actions-wardRequest">&#x1F5A5;</button>
                      <button className="Actions-btn Actions-transfer">Clinical</button>
                      <button className="Actions-btn Actions-vitals">&#x21E7;</button>
                    </div>
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

{
           activeTab === 'Discharged Patient' && (

            <div className="Admission-tableContainer">
             <h3>Total Admitted Patients Report</h3>
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
                <button style={{ marginLeft: '15px' }} onClick={dischargedPatientReport}>Show Report</button>
              </div>
                
           
          </div>

           ) 

        }

{
    activeTab==='Discharged Patient'  && (
      dischargedPatient &&(
     
      

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
          <th> Date &#x2193;</th>
          <th>Time</th>
          <th>Hospital Number</th>
          <th>Patient Name</th>
          <th>Age/Sex</th>
          <th>Phone Number</th>
         
          <th>Doctor Name</th>
          <th>Appointment Type</th>
         
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr className="OutPatient_PastDays-tableRow">
          <td>2024-08-13T00:00:00</td>
          <td>10:31 AM</td>
          <td>2408003819</td>
          <td>S Suresh</td>
          <td>45Y/M</td>
          <td>3456789021</td>
          <td>Mrs Prachi</td>
          <td>New</td>
          <div className="Actions-actions">
                      <button className="Actions-btn Actions-consumption">Add Triage</button>
                      <button className="Actions-btn Actions-wardRequest">&#x1F5A5;</button>
                      <button className="Actions-btn Actions-transfer">Clinical</button>
                      <button className="Actions-btn Actions-vitals">&#x21E7;</button>
          </div>
        </tr>
        <tr className="OutPatient_PastDays-tableRow">
          <td>2024-08-13T00:00:00</td>
          <td>10:31 AM</td>
          <td>2408003819</td>
          <td>S Suresh</td>
          <td>45Y/M</td>
          <td>3456789021</td>
          <td>Mrs Prachi</td>
          <td>New</td>
          <div className="Actions-actions">
                      <button className="Actions-btn Actions-consumption">Add Triage</button>
                      <button className="Actions-btn Actions-wardRequest">&#x1F5A5;</button>
                      <button className="Actions-btn Actions-transfer">Clinical</button>
                      <button className="Actions-btn Actions-vitals">&#x21E7;</button>
                    </div>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="Report-pagination">
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


{
           activeTab === 'Transferred Patient' && (

            <div className="Admission-tableContainer">
             <h3>Total Transferred Patients Report</h3>
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
                <button style={{ marginLeft: '15px' }} onClick={transferedPatientReport}>Show Report</button>
              </div>
                
           
          </div>

           ) 

        }

{
    activeTab==='Transferred Patient'  && (
      transferedPatient &&(
     
      

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
          <th> Date &#x2193;</th>
          <th>Time</th>
          <th>Hospital Number</th>
          <th>Patient Name</th>
          <th>Age/Sex</th>
          <th>Phone Number</th>
         
          <th>Doctor Name</th>
          <th>Appointment Type</th>
         
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr className="OutPatient_PastDays-tableRow">
          <td>2024-08-13T00:00:00</td>
          <td>10:31 AM</td>
          <td>2408003819</td>
          <td>S Suresh</td>
          <td>45Y/M</td>
          <td>3456789021</td>
          <td>Mrs Prachi</td>
          <td>New</td>
          <div className="Actions-actions">
                      <button className="Actions-btn Actions-consumption">Add Triage</button>
                      <button className="Actions-btn Actions-wardRequest">&#x1F5A5;</button>
                      <button className="Actions-btn Actions-transfer">Clinical</button>
                      <button className="Actions-btn Actions-vitals">&#x21E7;</button>
          </div>
        </tr>
        <tr className="OutPatient_PastDays-tableRow">
          <td>2024-08-13T00:00:00</td>
          <td>10:31 AM</td>
          <td>2408003819</td>
          <td>S Suresh</td>
          <td>45Y/M</td>
          <td>3456789021</td>
          <td>Mrs Prachi</td>
          <td>New</td>
          <div className="Actions-actions">
                      <button className="Actions-btn Actions-consumption">Add Triage</button>
                      <button className="Actions-btn Actions-wardRequest">&#x1F5A5;</button>
                      <button className="Actions-btn Actions-transfer">Clinical</button>
                      <button className="Actions-btn Actions-vitals">&#x21E7;</button>
                    </div>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="Report-pagination">
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



{
           activeTab === 'DiagnosisWise Patient' && (

            <div className="Admission-tableContainer">
             <h3>DiagnosisWise Patients Report</h3>
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
                <button style={{ marginLeft: '15px' }} onClick={diagnosisWisePatientReport}>Show Report</button>
              </div>
                
           
          </div>

           ) 

        }

{
    activeTab==='DiagnosisWise Patient'  && (
      diagnosisWisePatient &&(
     
      

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
          <th> Date &#x2193;</th>
          <th>Time</th>
          <th>Hospital Number</th>
          <th>Patient Name</th>
          <th>Age/Sex</th>
          <th>Phone Number</th>
         
          <th>Doctor Name</th>
          <th>Appointment Type</th>
         
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr className="OutPatient_PastDays-tableRow">
          <td>2024-08-13T00:00:00</td>
          <td>10:31 AM</td>
          <td>2408003819</td>
          <td>S Suresh</td>
          <td>45Y/M</td>
          <td>3456789021</td>
          <td>Mrs Prachi</td>
          <td>New</td>
          <div className="Actions-actions">
                      <button className="Actions-btn Actions-consumption">Add Triage</button>
                      <button className="Actions-btn Actions-wardRequest">&#x1F5A5;</button>
                      <button className="Actions-btn Actions-transfer">Clinical</button>
                      <button className="Actions-btn Actions-vitals">&#x21E7;</button>
          </div>
        </tr>
        <tr className="OutPatient_PastDays-tableRow">
          <td>2024-08-13T00:00:00</td>
          <td>10:31 AM</td>
          <td>2408003819</td>
          <td>S Suresh</td>
          <td>45Y/M</td>
          <td>3456789021</td>
          <td>Mrs Prachi</td>
          <td>New</td>
          <div className="Actions-actions">
                      <button className="Actions-btn Actions-consumption">Add Triage</button>
                      <button className="Actions-btn Actions-wardRequest">&#x1F5A5;</button>
                      <button className="Actions-btn Actions-transfer">Clinical</button>
                      <button className="Actions-btn Actions-vitals">&#x21E7;</button>
                    </div>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="Report-pagination">
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




{
           activeTab === 'Admission And Discharge List' && (

            <div className="Admission-tableContainer">
             <h3>DiagnosisWise Patients Report</h3>
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
                <div>
                <input type='text' placeholder='Search' className='Admitted-Patient-searchInput'/>
                
                </div>
                <button style={{ marginLeft: '15px' }} onClick={admissionDischargeListReport}>Show Report</button>
              </div>
                
           
          </div>

           ) 

        }

{
    activeTab==='Admission And Discharge List'  && (
      admissionDischargeList &&(
     
      

  <>
    <div className="Admitted-Patient-tableContainer">
             
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
          <th> Date &#x2193;</th>
          <th>Time</th>
          <th>Hospital Number</th>
          <th>Patient Name</th>
          <th>Age/Sex</th>
          <th>Phone Number</th>
         
          <th>Doctor Name</th>
          <th>Appointment Type</th>
         
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr className="OutPatient_PastDays-tableRow">
          <td>2024-08-13T00:00:00</td>
          <td>10:31 AM</td>
          <td>2408003819</td>
          <td>S Suresh</td>
          <td>45Y/M</td>
          <td>3456789021</td>
          <td>Mrs Prachi</td>
          <td>New</td>
          <div className="Actions-actions">
                      <button className="Actions-btn Actions-consumption">Add Triage</button>
                      <button className="Actions-btn Actions-wardRequest">&#x1F5A5;</button>
                      <button className="Actions-btn Actions-transfer">Clinical</button>
                      <button className="Actions-btn Actions-vitals">&#x21E7;</button>
          </div>
        </tr>
        <tr className="OutPatient_PastDays-tableRow">
          <td>2024-08-13T00:00:00</td>
          <td>10:31 AM</td>
          <td>2408003819</td>
          <td>S Suresh</td>
          <td>45Y/M</td>
          <td>3456789021</td>
          <td>Mrs Prachi</td>
          <td>New</td>
          <div className="Actions-actions">
                      <button className="Actions-btn Actions-consumption">Add Triage</button>
                      <button className="Actions-btn Actions-wardRequest">&#x1F5A5;</button>
                      <button className="Actions-btn Actions-transfer">Clinical</button>
                      <button className="Actions-btn Actions-vitals">&#x21E7;</button>
                    </div>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="Report-pagination">
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




{
           activeTab === 'Rank-Membershipwise Admitted Patient Report' && (

            <div className="Admission-tableContainer">
             {/* <h3>DiagnosisWise Patients Report</h3> */}
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
                <div>
                <input type='text' placeholder='Search' className='Admitted-Patient-searchInput'/>
                
                </div>
                <button style={{ marginLeft: '15px' }} onClick={RankMembership}>Show Report</button>
              </div>
                
           
          </div>

           ) 

        }

{
    activeTab==='Rank-Membershipwise Admitted Patient Report'  && (
      RankMembershipwise &&(
     
      

  <>
    <div className="Admitted-Patient-tableContainer">
             
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
          <th> Date &#x2193;</th>
          <th>Time</th>
          <th>Hospital Number</th>
          <th>Patient Name</th>
          <th>Age/Sex</th>
          <th>Phone Number</th>
         
          <th>Doctor Name</th>
          <th>Appointment Type</th>
         
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr className="OutPatient_PastDays-tableRow">
          <td>2024-08-13T00:00:00</td>
          <td>10:31 AM</td>
          <td>2408003819</td>
          <td>S Suresh</td>
          <td>45Y/M</td>
          <td>3456789021</td>
          <td>Mrs Prachi</td>
          <td>New</td>
          <div className="Actions-actions">
                      <button className="Actions-btn Actions-consumption">Add Triage</button>
                      <button className="Actions-btn Actions-wardRequest">&#x1F5A5;</button>
                      <button className="Actions-btn Actions-transfer">Clinical</button>
                      <button className="Actions-btn Actions-vitals">&#x21E7;</button>
          </div>
        </tr>
        <tr className="OutPatient_PastDays-tableRow">
          <td>2024-08-13T00:00:00</td>
          <td>10:31 AM</td>
          <td>2408003819</td>
          <td>S Suresh</td>
          <td>45Y/M</td>
          <td>3456789021</td>
          <td>Mrs Prachi</td>
          <td>New</td>
          <div className="Actions-actions">
                      <button className="Actions-btn Actions-consumption">Add Triage</button>
                      <button className="Actions-btn Actions-wardRequest">&#x1F5A5;</button>
                      <button className="Actions-btn Actions-transfer">Clinical</button>
                      <button className="Actions-btn Actions-vitals">&#x21E7;</button>
                    </div>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="Report-pagination">
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




            

{
           activeTab === 'InPatient Outstanding Report' && (

            <div className="Admission-tableContainer">
             {/* <h3>DiagnosisWise Patients Report</h3> */}
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
                <div>
                <input type='text' placeholder='Search' className='Admitted-Patient-searchInput'/>
                
                </div>
                <button style={{ marginLeft: '15px' }} onClick={inPatientOutstandingReport}>Show Report</button>
              </div>
                
           
          </div>

           ) 

        }

{
    activeTab==='InPatient Outstanding Report'  && (
      inPatientOutstanding &&(
     
      

  <>
    <div className="Admitted-Patient-tableContainer">
             
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
          <th> Date &#x2193;</th>
          <th>Time</th>
          <th>Hospital Number</th>
          <th>Patient Name</th>
          <th>Age/Sex</th>
          <th>Phone Number</th>
         
          <th>Doctor Name</th>
          <th>Appointment Type</th>
         
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr className="OutPatient_PastDays-tableRow">
          <td>2024-08-13T00:00:00</td>
          <td>10:31 AM</td>
          <td>2408003819</td>
          <td>S Suresh</td>
          <td>45Y/M</td>
          <td>3456789021</td>
          <td>Mrs Prachi</td>
          <td>New</td>
          <div className="Actions-actions">
                      <button className="Actions-btn Actions-consumption">Add Triage</button>
                      <button className="Actions-btn Actions-wardRequest">&#x1F5A5;</button>
                      <button className="Actions-btn Actions-transfer">Clinical</button>
                      <button className="Actions-btn Actions-vitals">&#x21E7;</button>
          </div>
        </tr>
        <tr className="OutPatient_PastDays-tableRow">
          <td>2024-08-13T00:00:00</td>
          <td>10:31 AM</td>
          <td>2408003819</td>
          <td>S Suresh</td>
          <td>45Y/M</td>
          <td>3456789021</td>
          <td>Mrs Prachi</td>
          <td>New</td>
          <div className="Actions-actions">
                      <button className="Actions-btn Actions-consumption">Add Triage</button>
                      <button className="Actions-btn Actions-wardRequest">&#x1F5A5;</button>
                      <button className="Actions-btn Actions-transfer">Clinical</button>
                      <button className="Actions-btn Actions-vitals">&#x21E7;</button>
                    </div>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="Report-pagination">
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



            
            

{
           activeTab === 'Rank-Membershipwise Discharged Patient Report' && (

            <div className="Admission-tableContainer">
             {/* <h3>DiagnosisWise Patients Report</h3> */}
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
                <div>
                <input type='text' placeholder='Search' className='Admitted-Patient-searchInput'/>
                
                </div>
                <button style={{ marginLeft: '15px' }} onClick={RankMembershipwiseDischargedReport}>Show Report</button>
              </div>
                
           
          </div>

           ) 

        }

{
    activeTab==='Rank-Membershipwise Discharged Patient Report'  && (
      RankMembershipwiseDischarged &&(
     
      

  <>
    <div className="Admitted-Patient-tableContainer">
             
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
          <th> Date &#x2193;</th>
          <th>Time</th>
          <th>Hospital Number</th>
          <th>Patient Name</th>
          <th>Age/Sex</th>
          <th>Phone Number</th>
         
          <th>Doctor Name</th>
          <th>Appointment Type</th>
         
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr className="OutPatient_PastDays-tableRow">
          <td>2024-08-13T00:00:00</td>
          <td>10:31 AM</td>
          <td>2408003819</td>
          <td>S Suresh</td>
          <td>45Y/M</td>
          <td>3456789021</td>
          <td>Mrs Prachi</td>
          <td>New</td>
          <div className="Actions-actions">
                      <button className="Actions-btn Actions-consumption">Add Triage</button>
                      <button className="Actions-btn Actions-wardRequest">&#x1F5A5;</button>
                      <button className="Actions-btn Actions-transfer">Clinical</button>
                      <button className="Actions-btn Actions-vitals">&#x21E7;</button>
          </div>
        </tr>
        <tr className="OutPatient_PastDays-tableRow">
          <td>2024-08-13T00:00:00</td>
          <td>10:31 AM</td>
          <td>2408003819</td>
          <td>S Suresh</td>
          <td>45Y/M</td>
          <td>3456789021</td>
          <td>Mrs Prachi</td>
          <td>New</td>
          <div className="Actions-actions">
                      <button className="Actions-btn Actions-consumption">Add Triage</button>
                      <button className="Actions-btn Actions-wardRequest">&#x1F5A5;</button>
                      <button className="Actions-btn Actions-transfer">Clinical</button>
                      <button className="Actions-btn Actions-vitals">&#x21E7;</button>
                    </div>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="Report-pagination">
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
