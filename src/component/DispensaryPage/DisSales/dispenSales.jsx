import React from 'react';
import "../DisSales/dispenSales.css"

const DispenSales = () => {
  return (
    <div className="counter-selection">
      <h3><i className="fa-solid fa-cash-register"></i> Counter Selection</h3>
      <div className="counter-options">

        <div className="counter-option">
          <i className="fa-solid fa-cash-register"></i>
          <h3>MORNING COUNTER</h3>
          <p>Click To Activate</p>
        </div>

        <div className="counter-option">
          <i className="fa-solid fa-cash-register"></i>
          <h3>EVENING COUNTER</h3>
          <p>Click To Activate</p>
        </div>

        <div className="counter-option">
          <i className="fa-solid fa-cash-register"></i>
          <h3>NIGHT COUNTER</h3>
          <p>Click To Activate</p>
        </div>
        
      </div>
    </div>
  );
};

export default DispenSales;
