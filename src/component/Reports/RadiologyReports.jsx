
import React, { useState } from 'react';
import '../Reports/RadiologyReports.css';
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
            className={`admission-component-tab ${activeTab === 'Total Revenue' ? 'active' : ''}`} 
            onClick={() => handleTabClick('Total Revenue')}
        >
          Total Revenue
        </button>
        <button 
            className={`admission-component-tab ${activeTab === 'Category Wise Report' ? 'active' : ''}`} 
            onClick={() => handleTabClick('Category Wise Report')}
        >
            Category Wise Report
        </button>
        <button 
            className={`admission-component-tab ${activeTab === 'FilmType Count' ? 'active' : ''}`} 
            onClick={() => handleTabClick('FilmType Count')}
        >
            FilmType Count
        </button>
       
    </div>
        {
           activeTab === 'Total Revenue' && (

            <div className="Admission-tableContainer">
                <h3>Revenue enerated Report</h3>
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
                
           
          </div>

           ) 

        }

        {
           activeTab === 'Category Wise Report' && (

            <div className="Admission-tableContainer">
             <h3>Category Wise Imaging Report</h3>
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
           activeTab === 'Total Revenue' && 
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
            <th>Date</th>
          <th>Total Price</th>
          <th>Total Paid Amount</th>
          <th>Total None(0%)</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>25-Nov-2023</td>
          <td>1000</td>
          <td>1000</td>
          <td>0</td>
          
        </tr>
        <tr>
        <td>25-Nov-2023</td>
          <td>1000</td>
          <td>1000</td>
          <td>0</td>
        </tr>
        <tr>
        <td>30-Jul-2024</td>
          <td>1000</td>
          <td>1000</td>
          <td>0</td>
        </tr>
        <tr>
        <td>26-Jul-2024</td>
          <td>1000</td>
          <td>1000</td>
          <td>0</td>
        </tr>
        <tr>
        <td>14-Jun-2024</td>
          <td>1000</td>
          <td>1000</td>
          <td>0</td>
        </tr>
        <tr>
        <td>10-Jun-2024</td>
          <td>1000</td>
          <td>1000</td>
          <td>0</td>
        </tr>
        <tr>
        <td>12-Dec-2023</td>
          <td>1000</td>
          <td>1000</td>
          <td>0</td>
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
    activeTab==='Category Wise Report'  && (
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
          <th>Date </th>
          <th>CT-SCAN</th>
          <th>MRI</th>
          <th>X-RAY</th>
    
        </tr>
      </thead>
      <tbody>
        <tr className="OutPatient_PastDays-tableRow">
          <td>2024-08-13</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          
          
        </tr>
        <tr className="OutPatient_PastDays-tableRow">
        <td>2024-08-13</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
        
         
        </tr>
        <tr className="OutPatient_PastDays-tableRow">
        <td>2024-08-13</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          
         
        </tr>
        <tr className="OutPatient_PastDays-tableRow">
        <td>2024-08-13</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          
         
        </tr>
        <tr className="OutPatient_PastDays-tableRow">
        <td>2024-08-13</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>

         
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
           activeTab === 'FilmType Count' && (

            <div className="Admission-tableContainer">
             <h3>FilmType Report</h3>
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
    activeTab==='FilmType Count'  && (
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
          <th> Film Type</th>
          <th>Film Quantity Used</th>
         
        </tr>
      </thead>
      <tbody>
        <tr className="OutPatient_PastDays-tableRow">
          
          <td>C.T. SCAN(14*17)</td>
          <td>5</td>
          
        </tr>
        <tr className="OutPatient_PastDays-tableRow">
       
          <td>C.T. SCAN(14*17)</td>
          <td>5</td>
          
        </tr>
        <tr className="OutPatient_PastDays-tableRow">
     
          <td>X-RAY(14*17)</td>
          <td>5</td>
          
        </tr>
        <tr className="OutPatient_PastDays-tableRow">
     
        <td>X-RAY(8*10)</td>
        <td>5</td>
        
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
