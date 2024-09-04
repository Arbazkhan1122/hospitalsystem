import React, { useEffect, useState } from 'react';
import '../SSInventory/sSIPatientConsumConsumEntry.css';
import { useLocation, useParams } from 'react-router-dom';

const SSIPatientConsumConsumEntry = ({ onBack }) => {
  const {store} = useParams();
  const [consumptionDate, setConsumptionDate] = useState('');
  const [patient, setPatient] = useState('');
  const [itemName, setItemName] = useState('');
  const [availableQty, setAvailableQty] = useState(0);
  const [consumedQty, setConsumedQty] = useState(1);
  const [remark, setRemark] = useState('');
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [storeName,setStoreName] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch('http://localhost:8080/api/inventory-requisitions/getAll');
      const data = await response.json();
      const completedItems = data.filter(item => item.status?.toLowerCase() === 'approved' && item.storeName===store);
      setItems(completedItems);
    };

    fetchItems();
  }, []);

  const handleItemChange = (e) => {
    const selectedItem = items.find(item => item.itemName === e.target.value);
    // console.log(selectedItem);
    
    setSelectedItem(selectedItem);
    setItemName(selectedItem.itemName);
    setAvailableQty(selectedItem.requiredQuantity);
  };

  const handleSave = async () => {
    try {
      // Update the inventory requisition by subtracting the consumed quantity

      const updatedQty = selectedItem.requiredQuantity - consumedQty;
      console.log(updatedQty);
      
      await fetch(`http://localhost:8080/api/inventory-requisitions/update/${selectedItem.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          requiredQuantity: updatedQty,
        }),
      });

      // Add the new consumption entry
      await fetch('http://localhost:8080/api/inventory-consumption/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          consumedDate: consumptionDate,      // Map to consumedDate in backend
          consumedItem: itemName,             // Map to consumedItem in backend
          consumedQty,                        // Map to consumedQty in backend
          units: selectedItem?.unit,             // Provide the unit value
          consumptionTypeName: 'YourTypeName', // Provide the consumption type name
          enteredBy: 'mr.admin',              // Map to enteredBy in backend
          remarks: remark,                    // Map to remarks in backend
          storeName: store                // Map to storeName in backend
        }),
      });
      alert('Saved successfully!');
    } catch (error) {
      alert('Failed to save!');
    }
  };

  const handleDiscard = () => {
    alert('Discarded!');
  };

  return (
    <div className="sSIPatientConsumConsumEntry-entry">
      <h2 className="sSIPatientConsumConsumEntry-title">
        <i className="fa-solid fa-star-of-life"></i> Consumption Entry
      </h2>
      <div className="sSIPatientConsumConsumEntry-form-section">
        <label>Consumption Date*:</label>
        <input
          type="date"
          value={consumptionDate}
          onChange={(e) => setConsumptionDate(e.target.value)}
        />
        <div className="sSIPatientConsumConsumEntry-form-section">
          <label>Consumption Type*:</label>
          <input
            type="text"
            placeholder="Search By HospitalNo, Patient Name"
            value={patient}
            onChange={(e) => setPatient(e.target.value)}
          />
        </div>
        <button className="sSIPatientConsumConsumEntry-back-btn">
          <i className="fa-solid fa-backward" onClick={onBack}></i> Back
        </button>
      </div>
      <div className="sSIPatientConsumConsumEntry-table-section">
        <table className="sSIPatientConsumConsumEntry-table">
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Code</th>
              <th>Unit</th>
              <th>Available Qty.</th>
              <th>Consumed Qty.</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <select value={itemName} onChange={handleItemChange}>
                  <option value="">--Select Item--</option>
                  {items.map((item) => (
                    
                    <option key={item.id} value={item.itemName}>
                      {item.itemName}
                    </option>
                  ))}
                </select>
              </td>
              <td>
                <input type="text" value={selectedItem?.code || ''} readOnly />
              </td>
              <td>
                <input type="text" value={selectedItem?.unit || ''} readOnly />
              </td>
              <td>
                <input type="text" value={availableQty} readOnly />
              </td>
              <td>
                <input
                  type="number"
                  value={consumedQty}
                  onChange={(e) => setConsumedQty(e.target.value)}
                />
              </td>
              <td>
                <button className="delete-btn">❌</button>
                <button className="add-btn">➕</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="sSIPatientConsumConsumEntry-remark-section">
        <div className="sSIPatientConsumConsumEntry-remark">
          <label>Remark:</label>
          <textarea value={remark} onChange={(e) => setRemark(e.target.value)} />
        </div>
        <div className="sSIPatientConsumConsumEntry-button-section">
          <button className="sSIPatientConsumConsumEntry-save-btn" onClick={handleSave}>
            Save
          </button>
          <button className="sSIPatientConsumConsumEntry-discard-btn" onClick={handleDiscard}>
            Discard
          </button>
        </div>
      </div>
    </div>
  );
};

export default SSIPatientConsumConsumEntry;
