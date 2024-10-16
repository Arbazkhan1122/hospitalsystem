 /* Ajhar Tamboli vehicleMaintenance.jsx 25-09-24 */

import React, { useState } from 'react';
import "../VehicleMaintenance/vehicleMaintenance.css"
import VMAddNewVehicle from './vMAddNewVehicle';
const labTests = [
  { vehicleId: "", vehicleType: "", vehicleNumbe: "", vehicelCompanyName: "", yearOfManufactur:"", fuelType:"",maintenanceType:"", completedDate:"", repairDetails:"", partsReplace:"", cost:"", },
  { vehicleId: "", vehicleType: "", vehicleNumbe: "", vehicelCompanyName: "", yearOfManufactur:"",fuelType:"",maintenanceType:"", completedDate:"", repairDetails:"", partsReplace:"", cost:"", },
  // Add more rows as needed
  
];

const VehicleMaintenance = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleAddNewLabTestClick = () => {
    setShowPopup(true); // Show the popup
  };

  const handleClosePopup = () => {
    setShowPopup(false); // Hide the popup
  };

  return (
    <div className="vehicleMaintenance-container">
    <div className="vehicleMaintenance-firstRow">
    <div className="vehicleMaintenance-addBtn">
      <button className="vehicleMaintenance-add-button" onClick={handleAddNewLabTestClick}>+Add New Vehicle</button>
      </div>
       
      </div>
      <div className='vehicleMaintenance-search-N-result'>
      <div className="vehicleMaintenance-search-bar">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input 
            type="text" 
            placeholder="Search..." 
            
          />
        </div>
        <div className="vehicleMaintenance-results-info">
          <span>Showing 0 / 0 results</span>
          <button className="vehicleMaintenance-print-button"><i class="fa-solid fa-print"></i> Print</button>
        </div>
        </div>
      <table >
        <thead>
          <tr>
            <th>Vehicle Id</th>
            <th>Vehicle Type</th>
            <th>Vehicle Number</th>
            <th>Vehicel Company Name</th>
            <th>Year Of Manufactur</th>
            <th>Fuel Type</th>
            <th>Maintenance Type</th>
            <th>Schedule Date</th>
            <th>Completed Date</th>
            <th>Service Provider</th>
            <th>Repair Details</th>
            <th>Parts Replace</th>
            <th>Cost</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {labTests.map((test, index) => (
            <tr key={index}>
              <td>{test.vehicleId}</td>
              <td>{test.vehicleType}</td>
              <td>{test.vehicleNumbe}</td>
              <td>{test.vehicelCompanyName}</td>
              <td>{test.yearOfManufactur}</td>
              <td>{test.fuelType}</td>
              <td>{test.maintenanceType}</td>
              <td>{test.scheduleDate}</td>
              <td>{test.completedDate}</td>
              <td>{test.serviceProvider}</td>
              <td>{test.repairDetails}</td>
              <td>{test.partsReplace}</td>
              <td>{test.cost}</td>
              {/* <td>{test.isActive ? 'True' : 'False'}</td> */}
              <td>
                <button className="vehicleMaintenance-edit-button"onClick={handleAddNewLabTestClick}>Edit</button>
                {/* <button className="vehicleMaintenance-deactivate-button">Deactivate</button> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <div className="vehicleMaintenance-pagination">
          <span>0 to 0 of 0</span>
          <button>First</button>
          <button>Previous</button>
          <span>Page 0 of 0</span>
          <button>Next</button>
          <button>Last</button>
        </div> */}
      {/* Modal Popup */}
      {showPopup && (
        <div className="vehicleMaintenance-modal">
          <div className="vehicleMaintenance-modal-content">
            <VMAddNewVehicle onClose={handleClosePopup} />
          </div>
        </div>
      )}
    </div>
  );
};

export default VehicleMaintenance;