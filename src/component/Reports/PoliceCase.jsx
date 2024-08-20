
import React, { useState } from 'react';
import '../Reports/PoliceCase.css';
import { useNavigate } from 'react-router-dom';

function MainContent() {

    const [activeTab, setActiveTab] = useState('Inpatient Census Report'); // Default tab
   

    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 1; // Update this according to your data
  
    const handlePageChange = (page) => {
      if (page > 0 && page <= totalPages) {
        setCurrentPage(page);
      }
    };
    
    const navigate = useNavigate();
    const [DoctorReportData,setDoctorReportData]=useState(false);
    const [PolicecaseData,setPolicecaseData]=useState(false);
  
 
    
      const [filterOption, setFilterOption] = useState('All');
      const [fromDate, setFromDate] = useState('');
      const [toDate, setToDate] = useState('');
    
    
   
    const handleFilterData = () => {
        // Implement filter logic here
        console.log(`Filtering data from ${fromDate} to ${toDate} with option ${filterOption}`);
      };

      const DoctorShowReport=()=>{
        setPolicecaseData(!PolicecaseData);
      }
     

    return (
        <>
        
       

        {
           

            <div className="Admission-tableContainer">
             <h3>Police Case Report</h3>
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
                Discharged Only: <input type='checkbox'></input>
             
                <button style={{ marginLeft: '15px' }} onClick={DoctorShowReport} >Show Report</button>
              </div>
                
           
          </div>

           

        }



        {
          
          PolicecaseData && (

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
            <th>IP Number</th>
          <th>Patient Name</th>
          <th>Hospital No.</th>
          <th>Admitted On</th>
          <th>Discharged on</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>H2400009</td>
          <td>Stocazzo Coidenti</td>
          <td>2406003703</td>
          <td>2024-06-10</td>
          <td>    N/A    </td>
       
        </tr>
        <tr>
          <td>H2400005</td>
          <td>Sonia Chebii</td>
          <td>2406003703</td>
          <td>2024-06-10</td>
          <td>2023-12-11</td>
          
        </tr>
        <tr>
        <td>H2400005</td>
          <td>Sonia Chebii</td>
          <td>2406003703</td>
          <td>2024-06-10</td>
          <td>2023-12-11</td>
      
        </tr>
        <tr>
        <td>H2400005</td>
          <td>Sonia Chebii</td>
          <td>2406003703</td>
          <td>2024-06-10</td>
          <td>2023-12-11</td>
        </tr>
        <tr>
        <td>H2400005</td>
          <td>Sonia Chebii</td>
          <td>2406003703</td>
          <td>2024-06-10</td>
          <td>2023-12-11</td>
     
        </tr>
        <tr>
        <td>H2400005</td>
          <td>Sonia Chebii</td>
          <td>2406003703</td>
          <td>2024-06-10</td>
          <td>2023-12-11</td>
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


        



       
    </>
    );
}

export default MainContent;
