import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Mreport.css';

const Mreport = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from API
    axios.get('http://localhost:5000/api.MktReport/fetch-all-MktReport')
      .then(response => {
        setData(response.data); // Assuming response.data is an array of reports
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="mkrtref_report_main">
      <h1 className="mkrtref_report_title">Marketing Referral Detail Report</h1>
      
      {/* Filter Bar */}
      <div className="mkrtref_report_filter_bar">
        <div className="mkrtref_report_date_range">
          <label>From:</label>
          <input type="date" />
          <label>To:</label>
          <input type="date" />
        </div>
        <div className="mkrtref_report_filters">
          <label>Referring Party :</label>
          <input type="text" placeholder="Select Referring Party" />
          <label>Referring Group :</label>
          <input type="text" placeholder="Select Referring Group" />
          <label>Referring Org :</label>
          <input type="text" placeholder="Select Referring Org" />
          <label>Area Code :</label>
          <input type="text" />
          <button className="mkrtref_report_show_button">Show Report</button>
        </div>
      </div>
      
      {/* Report Table */}
      <div className="mkrtref_report_table_container">
        <table className="mkrtref_report_table">
          <thead className="mkrtref_report_table_head">
            <tr>
              <th className='mkrtref_report_table_head-th'>Referring Party</th>
              <th className='mkrtref_report_table_head-th'>Party Group</th>
              <th className='mkrtref_report_table_head-th'>Area Code</th>
              <th className='mkrtref_report_table_head-th'>Referring Organization</th>
              <th className='mkrtref_report_table_head-th'>Invoice Net Amount</th>
              <th className='mkrtref_report_table_head-th'>Referral Amount</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="6" className="mkrtref_report_no_data">Loading...</td>
              </tr>
            ) : data.length === 0 ? (
              <tr>
                <td colSpan="6" className="mkrtref_report_no_data">No Rows To Show</td>
              </tr>
            ) : (
              data.map((item, index) => (
                <tr key={index}>
                  <td className="mkrtref_report_no_data">{item.reffeingParty}</td>
                  <td className="mkrtref_report_no_data">{item.partyGroup}</td>
                  <td className="mkrtref_report_no_data">{item.areaCode}</td>
                  <td className="mkrtref_report_no_data">{item.refferingOrganisation}</td>
                  <td className="mkrtref_report_no_data">{item.invoiceNetAmt}</td>
                  <td className="mkrtref_report_no_data">{item.refferalAmt}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      
      {/* Pagination */}
      <div className="mkrtref_report_pagination">
        <span>Showing {data.length} results</span>
        <div className="mkrtref_report_pagination_controls">
          <button>First</button>
          <button>Previous</button>
          <span>Page 1 of 1</span>
          <button>Next</button>
          <button>Last</button>
        </div>
        <div className="mkrtref_report_export_print">
          <button className='mkrtref_report_export_print_btn'>Export</button>
          <button className='mkrtref_report_export_print_btn'>Print</button>
        </div>
      </div>
    </div>
  );
};

export default Mreport;
