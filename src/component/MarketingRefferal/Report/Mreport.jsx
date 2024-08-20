import React from 'react';
import './Mreport.css'

const Mreport = () => {
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
              <th>Referring Party</th>
              <th>Party Group</th>
              <th>Area Code</th>
              <th>Referring Organization</th>
              <th>Invoice Net Amount</th>
              <th>Referral Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="6" className="mkrtref_report_no_data">No Rows To Show</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      {/* Pagination */}
      <div className="mkrtref_report_pagination">
        <span>Showing 0 / 0 results</span>
        <div className="mkrtref_report_pagination_controls">
          <button>First</button>
          <button>Previous</button>
          <span>Page 0 of 0</span>
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
