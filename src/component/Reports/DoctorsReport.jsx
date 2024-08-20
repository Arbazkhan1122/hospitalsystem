
import React, { useState } from 'react';
import '../Reports/DoctorsReport.css';
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
  
 
    
      const [filterOption, setFilterOption] = useState('All');
      const [fromDate, setFromDate] = useState('');
      const [toDate, setToDate] = useState('');
    
    
   
    const handleFilterData = () => {
        // Implement filter logic here
        console.log(`Filtering data from ${fromDate} to ${toDate} with option ${filterOption}`);
      };

      const DoctorShowReport=()=>{
        setDoctorReportData(!DoctorReportData);
      }
     

    return (
        <>
        
       

        {
           

            <div className="Admission-tableContainer">
             <h3>Doctor Wise Patients Report</h3>
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
                <button style={{ marginLeft: '15px' }} onClick={DoctorShowReport} >Show Report</button>
              </div>
                
           
          </div>

           

        }



        {
          
          DoctorReportData && (

        <div className="MyPatientsTable-tableContainer">
                <div className='Inpatient-Census-Header'>
                <h3>Inpatient Census(All Wards) for the selected dates</h3>
                <h3>From: 2024-08-14 to 2024-08-14</h3>
            </div>
        <table className="InpatientCensus-report-table">
            <thead>
            <tr>
            <th>Appointment Date</th>
          <th>Dr. Shrinivas Shelar</th>
          <th>Dr. Arnav Pawar</th>
          <th>Dr. Aarya Desai</th>
          <th>Dr. Meera Sawant</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>2023-11-24</td>
          <td>1</td>
          <td>3</td>
          <td>5</td>
          <td>6</td>
       
        </tr>
        <tr>
          <td>2023-3-11</td>
          <td>1</td>
          <td>3</td>
          <td>5</td>
          <td>6</td>
          
        </tr>
        <tr>
          <td>2022-03-10</td>
          <td>1</td>
          <td>3</td>
          <td>5</td>
          <td>6</td>
      
        </tr>
        <tr>
          <td>2024-1-24</td>
          <td>1</td>
          <td>3</td>
          <td>5</td>
          <td>6</td>
      
        </tr>
        <tr>
          <td>2023-3-24</td>
          <td>1</td>
          <td>3</td>
          <td>5</td>
          <td>6</td>
     
        </tr>
        <tr>
          <td>2023-8-24</td>
          <td>1</td>
          <td>3</td>
          <td>5</td>
          <td>6</td>
  
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
