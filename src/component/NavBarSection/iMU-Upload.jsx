import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../NavBarSection/iMU-Upload.css';

function IMUUploadPage() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div className="imu-upload-page">
      <div className="filters">
        <div className="date-range">
          <span>From:</span>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            dateFormat="MM/dd/yyyy"
          />
          <span>To:</span>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            dateFormat="MM/dd/yyyy"
          />
        </div>
        <div className="buttons">
          <button className="load-data">🔄 Load Data</button>
          <button className="upload-to-imu">⬆️ Upload To IMU</button>
        </div>
      </div>

<div className='iMU-search-N-upload'>
      <div className="iMU-Upload-search-bar">
      <i className="fa-solid fa-magnifying-glass"></i>
        <input type="text" placeholder="Search" />
        {/* <button>🔍</button> */}
      </div>

      <div className="upload-status">
        <label className='iMUUpload-checkbx'><input type="radio" name="status" checked /> UploadPending</label>
        <label className='iMUUpload-checkbx'><input type="radio" name="status" /> UploadCompleted</label>
        <label className='iMUUpload-checkbx'><input type="radio" name="status" /> All</label>
      </div>
      </div>

      <table className="iMU-Uploade-data-table">
        <thead>
          <tr>
            <th><input type="checkbox" /></th>
            <th>Hospital No.</th>
            <th>Patient Name</th>
            <th>Age/Sex</th>
            <th>Phone Number</th>
            <th>TestName</th>
            <th>Sample Coll. On</th>
            <th>Result</th>
            <th>Upload Status</th>
          </tr>
        </thead>
        <tbody>
          {/* Table rows would go here */}
        </tbody>
      </table>

      <div className="pagination">
        <button>Previous</button>
        <button>Next</button>
      </div>
    </div>
  );
}

export default IMUUploadPage;