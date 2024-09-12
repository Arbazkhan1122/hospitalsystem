import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import "../NavLIS/navLIS-MachineResults.css"



function NavLISMachineResults() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div className="labLIS-MachineResults-upload-page">
      <div className="labLIS-MachineResults-filters">
        <div className="labLIS-MachineResults-date-range">
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
        <div className="labLIS-MachineResults-buttons">
            <input type="text" name="" id="" />
          <button className="labLIS-MachineResults-load-data">Load  <i className="fa-solid fa-rotate"></i></button>
        </div>
      </div>



      
    </div>
  );
}

export default NavLISMachineResults;