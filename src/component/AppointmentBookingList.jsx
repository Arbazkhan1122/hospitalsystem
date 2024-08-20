import React from 'react';
import './AppointmentBookingList.css';
import { Link } from 'react-router-dom';

const AppointmentBookingList = () => {
  return (
    <div className="appointments__container">
      <div className="appointments__filter-section">
        <div className="appointments__filter-group">
          <label>Doctor <span className="appointments__required">*</span></label>
          <select className="appointments__dropdown">
            <option>All Doctors</option>
          </select>
        </div>
        <div className="appointments__filter-group">
          <label>Visit Type <span className="appointments__required">*</span></label>
          <select className="appointments__dropdown">
            <option>All</option>
          </select>
        </div>
        <div className="appointments__filter-group">
          <label>From Date <span className="appointments__required">*</span></label>
          <input className="appointments__date-picker" type="date" value="2024-08-12" />
        </div>
        <div className="appointments__filter-group">
          <label>To Date <span className="appointments__required">*</span></label>
          <input className="appointments__date-picker" type="date" value="2024-08-12" />
        </div>
        <button className="appointments__show-patient-btn">Show Patient</button>
      </div>

      <div className="appointments__upcoming-appointments">
        <h3 className="appointments__title">Upcoming Appointments</h3>
        <div className="appointments__search-bar">
          <input className="appointments__search-input" type="text" placeholder="Search" />
          <button className="appointments__search-btn">🔍</button>
        </div>

        <table className="appointments__table">
          <thead>
            <tr>
              <th>Status</th>
              <th>Date</th>
              <th>Time</th>
              <th>App...</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Doctor</th>
              <th>Visit Type</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="appointments__status--checkedin">CheckedIn</td>
              <td>2024-08-12</td>
              <td>02:30 PM</td>
              <td>42</td>
              <td>s Suresh</td>
              <td>1234567899</td>
              <td>Dr. Pooja Mishra</td>
              <td>followup</td>
              <td>
                <button className="appointments__action-btn">CheckIn</button>
                <button className="appointments__action-btn">Cancel</button>
                <button className="appointments__action-btn">Edit</button>
              </td>
            </tr>
            <tr>
              <td className="appointments__status--initiated">Initiated</td>
              <td>2024-08-12</td>
              <td>04:30 PM</td>
              <td>41</td>
              <td>Tino Werner</td>
              <td>8147591847</td>
              <td>Prof. Dr. Suresh Singh Singh</td>
              <td>New</td>
              <td>
                <button className="appointments__action-btn"><Link to="/checkIn">CheckIn</Link></button>
                <button className="appointments__action-btn">Cancel</button>
                <button className="appointments__action-btn">Edit</button>
              </td>
            </tr>
            {/* Repeat for other rows */}
          </tbody>
        </table>

        <div className="appointments__pagination-section">
          <p>Showing 5 / 5 results</p>
          <div className="appointments__pagination-buttons">
            <button>First</button>
            <button>Previous</button>
            <button>Next</button>
            <button>Last</button>
          </div>
        </div>

        <div className="appointments__summary-report">
          <h3 className="appointments__summary-title">Summary Report</h3>
          <table className="appointments__summary-table">
            <tbody>
              <tr>
                <td>Total Patient</td>
                <td>5</td>
              </tr>
              <tr>
                <td>New Patient</td>
                <td>4</td>
              </tr>
              <tr>
                <td>Follow-Up Patient</td>
                <td>1</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBookingList;
