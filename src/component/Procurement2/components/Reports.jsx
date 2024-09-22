import React, { useState } from 'react';
import './Reports.css'; // Import the CSS file
import ReportsBoxes from '../components/Stock'; // Import the ReportsBoxes component
import Purchase from '../components/PurchaseReport'; // Import the Purchase component
import Supplier from '../components/Supplier'; // Import the Supplier component
const HorizontalList = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="horizontal-list-container">
      <div className="horizontal-container">
        <div className="item" onClick={() => handleItemClick('Purchase')}>Purchase</div>
        <div className="item" onClick={() => handleItemClick('Stock')}>Stock</div>
        <div className="item" onClick={() => handleItemClick('Supplier')}>Supplier</div>
      </div>
      {selectedItem === 'Stock' && <ReportsBoxes />}
      {selectedItem === 'Purchase' && <Purchase />}
      {selectedItem === 'Supplier' && <Supplier />}
    </div>
  );
};

export default HorizontalList;
