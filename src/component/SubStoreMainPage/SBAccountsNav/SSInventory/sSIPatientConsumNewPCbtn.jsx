/* Ajhar Tamboli sSIPatientConsumNewPCbtn.jsx 19-09-24 */


import React, { useState, useEffect } from 'react';
import '../SSInventory/sSIPatientConsumNewPCbtn.css';
import { useParams } from 'react-router-dom';

const SSIPatientConsumNewPCbtn = ({ onBack }) => {
  const {store} = useParams();
  const [consumptionDate, setConsumptionDate] = useState('');
  const [patient, setPatient] = useState('');
  const [itemName, setItemName] = useState('');
  const [availableQty, setAvailableQty] = useState(0);
  const [consumedQty, setConsumedQty] = useState(1);
  const [remark, setRemark] = useState('');
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [storeName, setStoreName] = useState('');
  const [units, setUnits] = useState('YourUnitValue'); // Replace with actual unit logic
  const [consumptionTypeName, setConsumptionTypeName] = useState('YourTypeName'); // Replace with actual type logic  
  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch('http://localhost:8080/api/inventory-requisitions/getAll');
      const data = await response.json();
      const completedItems = data.filter(item => item.status === 'completed');
      setItems(completedItems);
    };

    fetchItems();
  }, []);

  const handleItemChange = (e) => {
    const selectedItem = items.find(item => item.itemName === e.target.value);
    console.log(selectedItem);
    
    
    if (selectedItem) {
      setSelectedItem(selectedItem);
      setItemName(selectedItem.itemName);
      setAvailableQty(selectedItem.requiredQuantity);
      setStoreName(selectedItem.storeName);
      setUnits(selectedItem.unit || 'YourUnitValue'); // Replace if `unit` exists in the item
      setConsumptionTypeName(selectedItem.consumptionTypeName || 'YourTypeName'); // Replace if `consumptionTypeName` exists in the item
    }
  };

  const handleSave = async () => {
    try {
      if (!selectedItem) {
        alert('Please select an item.');
        return;
      }
  
      // Update the inventory requisition by subtracting the consumed quantity
      const updatedQty = selectedItem.requiredQuantity - parseFloat(consumedQty);
      
      await fetch(`http://localhost:8080/api/inventory-requisitions/update/${selectedItem.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          requiredQuantity: updatedQty,
        }),
      });
  
      const data = {
        hospitalNo: "h112",
        consumptionDate: consumptionDate,  // Map to consumedDate in backend
        itemName,
        availableQty, 
        patientName: patient,              // Map to consumedItem in backend
        consumedQty,                       // Map to consumedQty in backend
        unit: units,
        itemCode: `${selectedItem.code}`,  // Use the actual unit value
        consumptionTypeName,              // Use the actual consumption type name
        enteredBy: 'mr.admin',             // Map to enteredBy in backend
        remark,                            // Map to remarks in backend
        substoreName:store  
      };
  
      // Add the new consumption entry
      await fetch('http://localhost:8080/api/patient-consumption/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),  // Send the data object directly
      });
  
      alert('Saved successfully!');
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to save!');
    }
  };
  const handleDiscard = () => {
    alert('Discarded!');
  };

  return (
    <div className="sSIPatientConsumNewPCbtn-entry">
      <h2 className="sSIPatientConsumNewPCbtn-title"><i className="fa-solid fa-star-of-life"></i> Consumption Entry</h2>
      <div className="sSIPatientConsumNewPCbtn-form-section">
        <label>Consumption Date*:</label>
        <input className=''
          type="date"
          value={consumptionDate}
          onChange={(e) => setConsumptionDate(e.target.value)}
        />
        <button className="sSIPatientConsumNewPCbtn-back-btn" onClick={onBack}>
          <i className="fa-solid fa-backward"></i> Back
        </button>
      </div>
      <div className="sSIPatientConsumNewPCbtn-form-section">
        <label>Select Patient *</label>
        <input
          type="text"
          placeholder="Search By HospitalNo, Patient Name"
          value={patient}
          onChange={(e) => setPatient(e.target.value)}
        />
      </div>
      <div className="sSIPatientConsumNewPCbtn-table-section">
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
      <div className="sSIPatientConsumNewPCbtn-remark-section">
        <div className="sSIPatientConsumNewPCbtn-remark">
          <label>Remark:</label>
          <textarea value={remark} onChange={(e) => setRemark(e.target.value)} />
        </div>
        <div className="sSIPatientConsumNewPCbtn-button-section">
          <button className="sSIPatientConsumNewPCbtn-save-btn" onClick={handleSave}>Save</button>
          <button className="sSIPatientConsumNewPCbtn-discard-btn" onClick={handleDiscard}>Discard</button>
        </div>
      </div>
    </div>
  );
};

export default SSIPatientConsumNewPCbtn;
