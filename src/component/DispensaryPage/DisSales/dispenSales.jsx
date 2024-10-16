
import React, { useState } from 'react';
import "../DisSales/dispenSales.css";
import SalesSales from './dispenSalesSales';

const DispenSales = () => {
  const [selectedCounter, setSelectedCounter] = useState(null);

  const handleCounterClick = (counter) => {
    setSelectedCounter(counter);
  };

  if (selectedCounter === 'MORNING') {
    return <SalesSales />;
  }
  if (selectedCounter === 'EVENING') {
    return <SalesSales />;
  }
  if (selectedCounter === 'NIGHT') {
    return <SalesSales />;
  }

  return (
    <div className="dispenSales-counter-selection">
      <h4><i className="fa-solid fa-cash-register"></i> Counter Selection</h4>
      <div className="dispenSales-counter-options">

        <div className="dispenSales-counter-option" onClick={() => handleCounterClick('MORNING')}>
          <div className="dispenSales-counter-Sub-option">
          <i className="fa-solid fa-cash-register"></i>
          <h3>MORNING COUNTER</h3>
          </div>
          <p>Click To Activate</p>
        </div>

        <div className="dispenSales-counter-option" onClick={() => handleCounterClick('EVENING')}>
        <div className="dispenSales-counter-Sub-option">
          <i className="fa-solid fa-cash-register"></i>
          <h3>EVENING COUNTER</h3>
        </div>
          <p>Click To Activate</p>
        </div>

        <div className="dispenSales-counter-option" onClick={() => handleCounterClick('NIGHT')}>
        <div className="dispenSales-counter-Sub-option">
          <i className="fa-solid fa-cash-register"></i>
          <h3>NIGHT COUNTER</h3>
        </div>
          <p>Click To Activate</p>
        </div>

      </div>
    </div>
  );
};

export default DispenSales;
