
import React, { useState } from 'react';
import '../Reports/AppointmentReport.css';
import { useNavigate } from 'react-router-dom';

function AppointmentReport() {

    const [activeTab, setActiveTab] = useState('Inpatient Census Report'); // Default tab
    const [AdmittedPatient,setAdmittedPatient]=useState(false);
    const [dischargedPatient,setdischargedPatient]=useState(false);
    const [transferedPatient,settransferedPatient]=useState(false);
    const [diagnosisWisePatient,setdiagnosisWisePatient]=useState(false);
    const [admissionDischargeList,setadmissionDischargeList]=useState(false);
    const [RankMembershipwise,setRankMembershipwise]=useState(false);
    const [inPatientOutstanding,setinPatientOutstanding]=useState(false);
    const [RankMembershipwiseDischarged,setRankMembershipwiseDischarged]=useState(false);
    const [DayMonthwiseVisitReport,setDayMonthwiseVisitReport]=useState(false);
    const [RankwiseDailyAppointment,setRankwiseDailyAppointment]=useState(false);
    const [DoctorwiseStatReport,setDoctorwiseStatReport]=useState(false);
 
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

      const DayMonthwiseVisit=()=>{
        setDayMonthwiseVisitReport(!DayMonthwiseVisitReport)
      }

      const RankwiseDailyAppointmentReport=()=>{
        setRankwiseDailyAppointment(!RankwiseDailyAppointment)
      }
      const DoctorwiseStatReportData=()=>{
        setDoctorwiseStatReport(!DoctorwiseStatReport)
      }



    return (    
        <>
        <div className="admission-component-container">
        <button 
            className={`admission-component-tab ${activeTab === 'Inpatient Census Report' ? 'active' : ''}`} 
            onClick={() => handleTabClick('Inpatient Census Report')}
        >
          Detailed
        </button>
        <button 
            className={`admission-component-tab ${activeTab === 'Admitted Patient' ? 'active' : ''}`} 
            onClick={() => handleTabClick('Admitted Patient')}
        >
           Country Wise
        </button>
        <button 
            className={`admission-component-tab ${activeTab === 'Discharged Patient' ? 'active' : ''}`} 
            onClick={() => handleTabClick('Discharged Patient')}
        >
           Department Wise
        </button>
        <button 
            className={`admission-component-tab ${activeTab === 'Transferred Patient' ? 'active' : ''}`} 
            onClick={() => handleTabClick('Transferred Patient')}
        >
            Doctorwise OutPatient
        </button>
    
        {/* <button 
            className={`admission-component-tab ${activeTab === 'DiagnosisWise Patient' ? 'active' : ''}`} 
            onClick={() => handleTabClick('DiagnosisWise Patient')}
        >
            DiagnosisWise Patient
        </button> */}
        <button 
            className={`admission-component-tab ${activeTab === 'Admission And Discharge List' ? 'active' : ''}`} 
            onClick={() => handleTabClick('Admission And Discharge List')}
        >
           PhoneBook Appointment Report
        </button>
        <button 
            className={`admission-component-tab ${activeTab === 'Rank-Membershipwise Admitted Patient Report' ? 'active' : ''}`} 
            onClick={() => handleTabClick('Rank-Membershipwise Admitted Patient Report')}
        >
           Department Wise Rank Count
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
            Age Classified Stats Report(OP)
        </button>

        <button 
            className={`admission-component-tab ${activeTab === 'Day And Monthwise Visit Report' ? 'active' : ''}`} 
            onClick={() => handleTabClick('Day And Monthwise Visit Report')}
        >
            Day And Monthwise Visit Report
        </button>
        <button 
            className={`admission-component-tab ${activeTab === 'Geographical Stat Report' ? 'active' : ''}`} 
            onClick={() => handleTabClick('Geographical Stat Report')}
        >
            Geographical Stat Report
        </button>

        <button 
            className={`admission-component-tab ${activeTab === 'Rankwise Daily Appointment Report' ? 'active' : ''}`} 
            onClick={() => handleTabClick('Rankwise Daily Appointment Report')}
        >
            Rankwise Daily Appointment Report
        </button>
        <button 
            className={`admission-component-tab ${activeTab === 'Doctor Wise Statistics Report' ? 'active' : ''}`} 
            onClick={() => handleTabClick('Doctor Wise Statistics Report')}
        >
            Doctor Wise Statistics Report
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

                <label for="Doctor" className='DoctorNameClass'>Doctor Name:</label>

                    <select name="Doctor" id="Doctor">
                    <option>----Select-----</option>
                    <option >Dr. Shrinivas Shelar</option>
                    <option >Dr. Arnav Pawar</option>
                    <option >Dr. Aarya Desai</option>
                    <option >Dr. Meera Sawant</option>
                    </select>

                    <label for="Doctor" className='DoctorNameClass'>Appointment Type:</label>

                    <select name="Doctor" id="Doctor">
                    
                    <option >All</option>
                    <option >New</option>
                    <option >Transfer</option>
                    <option >Referral</option>
                    <option>FollowUp</option>
                    </select>
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
             <h3>Country Wise Appointment Report</h3>
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
                <label for="Doctor" className='DoctorNameClass'>Country:</label>

                    <select name="Country" id="Country">
                    <option>----Select-----</option>
                    <option >India</option>
                    <option >China</option>
                    <option >Germany</option>
                    <option >France</option>
                    </select>

                    <label for="Doctor" className='DoctorNameClass'>Gender:</label>

                    <select name="Doctor" id="Doctor">
                    
                    <option >All</option>
                    <option >Male</option>
                    <option >Female</option>
                    
                    </select>
                <button style={{ marginLeft: '15px' }} onClick={AdmittedPatientReport}>Show Report</button>
              </div>
                
           
          </div>

           ) 

        }

            

        {
           activeTab === 'Inpatient Census Report' && 
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
            <th>Date/time</th>
          <th>Hospital No. <span className="info-icon">ℹ</span></th>
          <th>Patient Name</th>
          <th>Phone</th>
          <th>Age</th>
          <th>Gender</th>
          <th>District</th>
          <th>Doctor</th>
          <th>Department</th>
          <th>Appointment Type</th>
          <th>IsInsurance</th>
         
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>2024-08-13T10:53:00</td>
          <td>2408003819</td>
          <td>S Suresh</td>
          <td>1234567899</td>
          <td>45Y</td>
          <td>Male</td>
          <td>Nashik</td>
          <td>Dr. Arnav Pawar </td>
          <td>Operation Thetre</td>
          <td>New</td>
          <td>No</td>
        </tr>
        <tr>
        <td>2024-08-13T10:53:00</td>
          <td>2408003819</td>
          <td>S Suresh</td>
          <td>1234567899</td>
          <td>45Y</td>
          <td>Male</td>
          <td>Nashik</td>
          <td>Dr. Arnav Pawar </td>
          <td>Operation Thetre</td>
          <td>New</td>
          <td>No</td>
        </tr>
        <tr>
        <td>2024-08-13T10:53:00</td>
          <td>2408003819</td>
          <td>S Suresh</td>
          <td>1234567899</td>
          <td>45Y</td>
          <td>Male</td>
          <td>Nashik</td>
          <td>Dr. Arnav Pawar </td>
          <td>Operation Thetre</td>
          <td>New</td>
          <td>No</td>
        </tr>
        <tr>
        <td>2024-08-13T10:53:00</td>
          <td>2408003819</td>
          <td>S Suresh</td>
          <td>1234567899</td>
          <td>45Y</td>
          <td>Male</td>
          <td>Nashik</td>
          <td>Dr. Arnav Pawar </td>
          <td>Operation Thetre</td>
          <td>New</td>
          <td>No</td>
        </tr>
        <tr>
        <td>2024-08-13T10:53:00</td>
          <td>2408003819</td>
          <td>S Suresh</td>
          <td>1234567899</td>
          <td>45Y</td>
          <td>Male</td>
          <td>Nashik</td>
          <td>Dr. Arnav Pawar </td>
          <td>Operation Thetre</td>
          <td>New</td>
          <td>No</td>
        </tr>
        <tr>
        <td>2024-08-13T10:53:00</td>
          <td>2408003819</td>
          <td>S Suresh</td>
          <td>1234567899</td>
          <td>45Y</td>
          <td>Male</td>
          <td>Nashik</td>
          <td>Dr. Arnav Pawar </td>
          <td>Operation Thetre</td>
          <td>New</td>
          <td>No</td>
        </tr>
        <tr>
        <td>2024-08-13T10:53:00</td>
          <td>2408003819</td>
          <td>S Suresh</td>
          <td>1234567899</td>
          <td>45Y</td>
          <td>Male</td>
          <td>Nashik</td>
          <td>Dr. Arnav Pawar </td>
          <td>Operation Thetre</td>
          <td>New</td>
          <td>No</td>
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
            <table className="InpatientCensus-report-table">
            <thead>
            <tr>
            
            <th>Insurance Patient</th>
            <th>Normal Patient</th>
            <th>Total Patient</th>
           
                    
                </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>12</td>
                    <td>217</td>
                   
                   
                    <td>231</td>
                    
                    </tr>
                    </tbody>
                </table>

    
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
        <th>Country</th>
          <th>New</th>
          <th>Followup</th>
          <th>Referral</th>
          <th>Total</th>
          

        </tr>
      </thead>
      <tbody>
      <tr>
          <td>India</td>
          <td>6</td>
          <td>11</td>
          <td>4</td>
         
          <td>28</td>
      
        </tr>
        <tr>
        <td>France</td>
          <td>6</td>
         
          <td>6</td>
          <td>7</td>
          <td>28</td>
      
        </tr>
        <tr>
        <td>Germany</td>
          <td>6</td>
          <td>11</td>
          <td>4</td>
         
          <td>28</td>
      
        </tr>
        <tr>
        <td>China</td>
          <td>6</td>
          <td>11</td>
          
          <td>7</td>
          <td>28</td>
      
        </tr>
        <tr>
        <td>Bhutan</td>
          
          <td>4</td>
          <td>6</td>
          <td>7</td>
          <td>28</td>
      
        </tr>
        <tr>
        <td>Ingland</td>
          <td>6</td>
          <td>11</td>
         
          <td>7</td>
          <td>28</td>
      
        </tr>
        <tr>
        <td>Italy</td>
          <td>6</td>
          <td>11</td>
          <td>4</td>
        
          <td>28</td>
      
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
            <h3>Summary</h3>
            <table className="InpatientCensus-report-table">
            <thead>
            <tr>
            
            <th>New</th>
            <th>Followup</th>
            <th>Referral</th>
            <th>Total</th>
           
                    
                </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>12</td>
                    <td>217</td>
                   <td>2</td>
                   
                    <td>231</td>
                    
                    </tr>
                    </tbody>
                </table>
</>

                
              ))
            }

{
           activeTab === 'Discharged Patient' && (

            <div className="Admission-tableContainer">
             <h3>Department Wise Appointment Report</h3>
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
                <label for="Doctor" className='DoctorNameClass'>Country:</label>

                <select name="Country" id="Country">
                <option>----Select-----</option>
                <option >Anesthesia</option>
                <option >CT/MRI</option>
                <option >CTVS</option>
                <option >Cabin/Deluxe/Suite</option>
                <option>Cardiology</option>
                <option>Dental</option>
                <option>Dermotology & Cosmology</option>
                <option>Dialysis</option>
                <option>Dietary</option>
                <option>Dispensary</option>
                <option>Emergency / Casualty</option>
                <option>Ear-Nose-Throat</option>
                </select>

                <label for="Doctor" className='DoctorNameClass'>Gender:</label>

                <select name="Doctor" id="Doctor">

                <option >All</option>
                <option >Male</option>
                <option >Female</option>

                </select>
                
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
          <th> Department Name</th>
          <th>New</th>
          <th>Follow Up</th>
          <th>Referral</th>
          <th>Total</th>
      
        </tr>
      </thead>
      <tbody>
        <tr className="OutPatient_PastDays-tableRow">
          <td>Cardiology</td>
          <td>27</td>
          <td>2</td>
          <td>5</td>
          <td>34</td>
    
        </tr>
        <tr className="OutPatient_PastDays-tableRow">
        <td>Dental</td>
          <td>27</td>
          <td>2</td>
          <td>5</td>
          <td>34</td>
    
        </tr>
        <tr className="OutPatient_PastDays-tableRow">
        <td>Dermotology & Cosmology</td>
          <td>27</td>
          <td>2</td>
          <td>5</td>
          <td>34</td>
    
        </tr>
        <tr className="OutPatient_PastDays-tableRow">
        <td>Dispensary</td>
          <td>27</td>
          <td>2</td>
          <td>5</td>
          <td>34</td>
    
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
            <table className="InpatientCensus-report-table">
            <thead>
            <tr>
            
            <th>New</th>
            <th>Followup</th>
            <th>Referral</th>
            <th>Total</th>
                    
                </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>217</td>
                    <td>12</td>
                    <td>2</td>
                    <td>231</td>
                    
                    </tr>
                    </tbody>
                </table>

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
            <span className="Admitted-Patient-results">From Date :2023-08-14 </span>
            <span className="Admitted-Patient-results">To Date :2024-08-14 </span>
            <span className="Admitted-Patient-results">Doctor Wise Patient Count </span>
            <span className="Admitted-Patient-results">Print Date :2024-08-14 </span>
        </div>
   </div>
    <table className="OutPatient_PastDays-patientsTable">
      <thead>
        <tr>
          <th> Sr No. </th>
          <th>Doctor Name</th>
          <th>New Visit</th>
          <th>Follow Ups</th>
       
        </tr>
      </thead>
      <tbody>
        <tr className="OutPatient_PastDays-tableRow">
          <td>1</td>
          <td>Dr. Arnav Pawar</td>
          <td>24</td>
          <td>10</td>
          
        </tr>
        <tr className="OutPatient_PastDays-tableRow">
        <td>2</td>
          <td>Dr. Aarya Desai</td>
          <td>24</td>
          <td>10</td>

        </tr>
        <tr className="OutPatient_PastDays-tableRow">
        <td>2</td>
          <td>Dr. Shriniwas Shela</td>
          <td>24</td>
          <td>10</td>

        </tr>
        <tr className="OutPatient_PastDays-tableRow">
        <td colSpan={2}>Total Patients</td>
         
          <td>214</td>
          <td>30</td>

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
             <h3>Phonebook Appointment Report</h3>
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
                <label for="Doctor" className='DoctorNameClass'>Performer Name:</label>

                    <select name="Country" id="Country">
                    <option>----Enter Performer Name-----</option>
                    <option >Dr. Arnav Pawar</option>
                    <option >Dr. Aarya Desai</option>
                    <option >Dr. Shriniwas Shelar</option>
                    <option >Dr. Pooja Batra</option>
                    </select>

                    <label for="Doctor" className='DoctorNameClass'>Gender:</label>

                    <select name="Doctor" id="Doctor">

                    <option >All</option>
                    <option >Male</option>
                    <option >Female</option>

                    </select>           
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
             <h3>Age Classified Report</h3>
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

{
           activeTab === 'Day And Monthwise Visit Report' && (

            <div className="Admission-tableContainer">
            <h3> Day and Monthwise Visit Report </h3>  
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
                <button style={{ marginLeft: '15px' }} onClick={DayMonthwiseVisit}>Show Report</button>
              </div>
                
           
          </div>

           ) 

        }

{
    activeTab==='Day And Monthwise Visit Report'  && (
        DayMonthwiseVisitReport &&(
     
      

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
           activeTab === 'Geographical Stat Report' && (

            <div className="Admission-tableContainer">
            <h3> Geographical Stat Report </h3>  
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
                <button style={{ marginLeft: '15px' }} onClick={DayMonthwiseVisit}>Show Report</button>
              </div>
                
           
          </div>

           ) 

        }

{
    activeTab==='Geographical Stat Report'  && (
        DayMonthwiseVisitReport &&(
     
      

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
           activeTab === 'Rankwise Daily Appointment Report' && (

            <div className="Admission-tableContainer">
            <h3> Geographical Stat Report </h3>  
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
                <button style={{ marginLeft: '15px' }} onClick={RankwiseDailyAppointmentReport}>Show Report</button>
              </div>
                
           
          </div>

           ) 

        }

{
    activeTab==='Rankwise Daily Appointment Report'  && (
        RankwiseDailyAppointment &&(
     
      

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
           activeTab === 'Doctor Wise Statistics Report' && (

            <div className="Admission-tableContainer">
            <h3> Geographical Stat Report </h3>  
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
                <button style={{ marginLeft: '15px' }} onClick={DoctorwiseStatReportData}>Show Report</button>
              </div>
                
           
          </div>

           ) 

        }

{
    activeTab==='Doctor Wise Statistics Report'  && (
        DoctorwiseStatReport &&(
     
      

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

export default AppointmentReport;
