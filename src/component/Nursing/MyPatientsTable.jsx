import React from 'react';

import './MyPatientsTable.css';


const MyPatientsTable = () => {
  return (
    <>
  
    <div className="MyPatientsTable-tableContainer">
      <table className="MyPatientsTable-patientsTable">
        <thead>
          <tr>
            <th>Admitted Date</th>
            <th>Doctor Name</th>
            <th>Hospital Num</th>
            <th>IP Number</th>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Age/Sex</th>
            <th>Bed Detail</th>
            <th>Scheme</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        <tr className="TableRow-tableRow">
            <td>2024-05-17 21:44</td>
            <td>INNOCENT TENGO</td>
            <td>2402003692</td>
            <td>H2400006</td>
            <td>LUCY NJAMBI</td>
            <td>726356972</td>
            <td>24 Y/F</td>
            <td>Male Ward/Male Ward-003</td>
            <td>General</td>
            <div className="Actions-actions">
                <button className="Actions-btn Actions-consumption">Consumption</button>
                <button className="Actions-btn Actions-wardRequest">Ward Request</button>
                <button className="Actions-btn Actions-transfer">Transfer</button>
                <button className="Actions-btn Actions-vitals">Vitals</button>
            </div>
         </tr>
        </tbody>
      </table>
    </div>
    </>
  );
};

export default MyPatientsTable;
