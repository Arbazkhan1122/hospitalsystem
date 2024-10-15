import React, { useState } from 'react';
import './DynamicReport.css'; // Import the CSS file

const DynamicReport = () => {
  const [sqlQuery, setSqlQuery] = useState('');
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState('');
  const [handlequery,sethandlequery]=useState(false);

  const handleLoadReport = () => {
    // Here we simulate a query execution and display dummy data
    const dummyResults = [
      { id: 1, name: 'John Doe', age: 28 },
      { id: 2, name: 'Jane Smith', age: 34 },
    ];
    setResults(dummyResults);
  };

  const handleExport = () => {
    // Logic for exporting data (e.g., to CSV)
    alert('Export functionality not implemented.');
  };

  const handlePrint = () => {
    // Logic for printing the report
    alert('Print functionality not implemented.');
  };

  const filteredResults = results.filter(result =>
    result.name.toLowerCase().includes(search.toLowerCase())
  );
  const handleQueryHere=()=>{
    sethandlequery(!handlequery);
  }

  return (
    <div className="DynamicReport-container">
        <h2>Dynamic Report</h2>
      <div className="DynamicSQL-textarea">
        <button onClick={handleQueryHere}>Write SQL Query Here</button>
      </div>
      {
        handlequery &&(

        
            <div className='Dynamic-Load-Report-Outer'>
                <textarea
                rows="5"
                placeholder="Write SQL Query Here"
                value={sqlQuery}
                onChange={e => setSqlQuery(e.target.value)}
                />
                {/* <div className="Dynamic-Load-Report"> */}
                    <button onClick={handleLoadReport}>Load Report</button>
                {/* </div> */}
             </div>
    
        )
          
      }
    
    
      <div className="DynamicReport-search-group">
      <div className='Admitted-Patient-Header'>
        <input type='text' placeholder='Search' className='Admitted-Patient-searchInput'/>
        <div className="DynamicReport-button-group">
            <span className="Admitted-Patient-results">Showing 0/0 results</span>
            <button className="Admitted-Patient-button">Export</button>
            <button className="Admitted-Patient-button">Print</button>
        </div>
   </div>



     
      </div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {filteredResults.length > 0 ? (
            filteredResults.map((result, index) => (
              <tr key={index}>
                <td>{result.id}</td>
                <td>{result.name}</td>
                <td>{result.age}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="DynamicReport-text-center">No Rows To Show</td>
            </tr>
          )}
        </tbody>
      </table>
      {/* <div className="DynamicReport-pagination">
        <button>First</button>
        <button>Previous</button>
        <span>Page 1 of 1</span>
        <button>Next</button>
        <button>Last</button>
      </div> */}
    </div>
  );
};

export default DynamicReport;
