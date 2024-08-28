
import React from 'react';
import "../HhQueueInformation/hhQueueInformation.css"

function HHQueueInformation() {
  return (
    <div className="queueInformation">
      <header className="queueInformation-header" >
        <div className="queueInformation-doctor-select">
          <span>Doctor:</span>
          <select defaultValue="">
            <option value="" disabled>--select--</option>
            <option value="" disabled>Dr. Sandeep Vaishya</option>
            <option value="" disabled>Dr Nidhi Rawal</option>
            <option value="" disabled>Dr Atul Mishra</option>
            <option value="" disabled>Dr. Veenu Kaul</option>
            <option value="" disabled>Dr Anand Misra</option>
            <option value="" disabled>Dr jayshree Sharad</option>
            <option value="" disabled>Dr Vinay Samuel Gaikwad</option>
            <option value="" disabled>Dr. Narmada Prasad Gupta</option>
            <option value="" disabled>Dr. Ashok Rajgopal</option>
            <option value="" disabled>Dr Naresh Trehan</option>
            <option value="" disabled>Dr Hitesh Garg</option>
            <option value="" disabled>Dr Ajay Swaroop</option>
            <option value="" disabled>Dr. Arun Saroha</option>
            <option value="" disabled>Dr. Manjinder Sandhu</option>
            <option value="" disabled>Dr. Vivek Vij </option>
            <option value="" disabled>Dr Rahul Bhargava</option>
            <option value="" disabled>Dr. Vinod Raina</option>
            <option value="" disabled>Dr As Bath</option>
            <option value="" disabled>Dr.Rakesh Mahajan</option>
          </select>
          <button className="queueInformation-proceed-btn">Proceed</button>
        </div>
      </header>
      
      <main>
        
        <div className="queueInformation-main-div">
        <div className="queueInformation-banner">
          <div className="queueInformation-logo">
            <img src="path-to-logo.png" alt="HIMS" />
            <span>HIMS </span>
          </div>
          <div className="queueInformation-title">Queue Management</div>
        </div>
        
          <div  className='queueInformation-tbl-div'>
        <table className="queueInformation-table">
          <thead>
            <tr className='queueInformation-tr'>
              <th>Doctor Name</th>
              <th>Current Serving</th>
              <th>Next Patients |</th>
              <th>Upcoming Patients |</th>
            </tr>
          </thead>
          <tbody>
            {/* Table content would go here */}
          </tbody>
        </table>
        </div>
        </div>
      </main>
      
      <footer className="queueInformation-footer">
        <div className="queueInformation-notice">Notice </div>
        {/* <div className="queueInformation-footer-icons"> */}
          <marquee > •   □</marquee>
        {/* </div> */}
      </footer>
    </div>
  );
}

export default HHQueueInformation;



