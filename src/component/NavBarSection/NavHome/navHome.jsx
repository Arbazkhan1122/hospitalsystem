import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import 'react-datepicker/dist/react-datepicker.css';
import '../NavHome/navHome.css';

const Dashboard = () => {
  const [startDate, setStartDate] = useState(new Date('2024-07-26'));
  const [endDate, setEndDate] = useState(new Date('2024-08-02'));

  const data = [
    { name: 'Test 1', value: 10 },
    { name: 'Test 2', value: 10 },
    { name: 'Test 3', value: 10 },
  ];

  return (
    <div className="labNavHome-dashboard">
      <div className="labNavHome-date-range">
        <span>From:</span>
        <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
        <span>To:</span>
        <DatePicker selected={endDate} onChange={date => setEndDate(date)} />
        <button className="labNavHome-ok-button"> <i class="fa-regular fa-square-check"></i> Ok</button>
      </div>
      
      <div className="labNavHome-stats-container">
        <div className="labNavHome-stat-box-dengue">
          <h4>Dengue Overall Stats</h4>
          <p>Total: 0 Positive: 0 Negative: 0 Pending: 0</p>
          <h5>Dengue Today's Stats</h5>
          <p>Total: 0 Positive: 0 Negative: 0 Pending: 0</p>
        </div>
        
        <div className="labNavHome-stat-box-covid">
          <h4>Covid Overall Stats</h4>
          <p>Total: 0 Positive: 0 Negative: 0 Pending: 0</p>
          <h5>Covid Today's Stats</h5>
          <p>Total: 0 Positive: 0 Negative: 0 Pending: 0</p>
        </div>
        
        <div className="labNavHome-stat-box-test-requests-today">
          <h4>Test Requests Today</h4>
          <p>Total: 0 Positive: 0 Negative: 0 Pending: 0</p>
          <p>New: 0 Result Pending: 0 Completed: 0</p>
          <p>Cancelled: 0 Returned: 0</p>
        </div>
        
        <div className="labNavHome-stat-box-test-requests-till-date">
          <h4>Test Requests Till Date</h4>
          <p>Total: 45 Positive: 0 Negative: 0 Pending: 31</p>
          <p>New: 76 Result Pending: 9 Completed: 35</p>
          <p>Cancelled: 0 Returned: 0</p>
        </div>
      </div>
      
      <div className="labNavHome-charts-container">
        <div className="labNavHome-chart trending-tests">
          <h4>Trending Lab Tests (Top 10)</h4>
          <BarChart width={400} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#82ca9d" />
          </BarChart>
        </div>
        
        <div className="labNavHome-chart abnormal-test-result">
          <h4>Abnormal Test Result</h4>
          <select>
            <option>--Select Test Name--</option>
          </select>
        </div>
      </div>
      <div className="labNavHome-test-dashboard">
      <div className="labNavHome-dashboard-item rank-wise">
        <h4>Rank Wise Test Count</h4>
        <div className="labNavHome-no-data">
          <span className="labNavHome-dot orange"></span>
          No Data Available for DateRange
        </div>
      </div>
      <div className="labNavHome-dashboard-item test-completed">
        <h4>Test Completed Today</h4>
        <div className="labNavHome-test-count">
          <span className="labNavHome-count">0</span>
          <span className="labNavHome-label">Total Test</span>
        </div>
      </div>
      <div className="labNavHome-dashboard-item membership-wise">
        <h4>Membership Wise Test Count</h4>
        <div className="labNavHome-no-data">
          <span className="labNavHome-green"></span>
          No Data Available for DateRange
        </div>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;