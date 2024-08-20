import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import "../NavLIS/navLIS-MachineResults.css"



function NavLISMachineResults() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div className="navLIS-upload-page">
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
            <input type="text" name="" id="" />
          <button className="load-data">Load </button>
        </div>
      </div>



      
    </div>
  );
}

export default NavLISMachineResults;