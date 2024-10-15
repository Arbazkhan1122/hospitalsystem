import React, { useEffect, useState } from 'react';
import "./ConsumtionEntry.css";
import { API_BASE_URL } from '../api/api';

const ConsumptionEntry = ({patient}) => {
    console.log(patient);
        
    const [formData, setFormData] = useState({
        prescriber: '',
        store: '',
        membership: 'General',
        selectedMedicine: null,
        quantity: 0,
        subtotal: 0,
        discount: 0,
        totalAmount: 0,
      });
    
      const [addedItems, setAddedItems] = useState([]);
      const [grandTotal, setGrandTotal] = useState(0);
      const [medicines,setMedicines] =useState([]);
      const [doctors,setDoctors] =useState([]);


      useEffect(() => {
        const fetchDoctors = async () => {
          try {
            const response = await fetch(
              `${API_BASE_URL}/employees/findAllDoctors`
            );
            const data = await response.json();
            setDoctors(data);
            console.log(data);
          } catch (error) {
            console.error("Error fetching admitting doctors:", error);
          }
        };
    
        fetchDoctors();
      }, []);
      

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };

      const handleStoreChange = async (e) => {
        const selectedStore = e.target.value;
        console.log(selectedStore);
        setFormData((prevData) => ({
          ...prevData,
          store: selectedStore,
        }));
        await fetchStockData(selectedStore);
      };

      const fetchStockData = async (store) => {
        try {
          const response = await fetch(`${API_BASE_URL}/pharmacyRequisitions/getAll`);
          if (!response.ok) {
            throw new Error('Failed to fetch stock data');
          }
          const data = await response.json();
          console.log(data);
          const filteredData = data.filter((item) => item.storeName === store); 
          console.log(filteredData);
          setMedicines(filteredData);
        } catch (error) {
          console.log(error);
          
        }
      };
    
      // Handle medicine selection
      const handleMedicineSelect = (e) => {
        const selectedMedicine = medicines.find(med => med.pharmacyRequisitionId === parseInt(e.target.value));
        setFormData((prevData) => ({
          ...prevData,
          selectedMedicine,
          quantity: 0,
          subtotal: 0,
          totalAmount: 0,
        }));
      };
    
      // Handle quantity change
      const handleQuantityChange = (e) => {
        const quantity = parseInt(e.target.value) || 0;
        const subtotal = quantity * (formData.selectedMedicine?.salePrice || 0);
        setFormData((prevData) => ({
          ...prevData,
          quantity,
          subtotal,
          totalAmount: subtotal - formData.discount,
        }));
      };
    
      const handleAddItem = () => {
        if (formData.selectedMedicine && formData.quantity > 0) {
          const newItem = {
            ...formData.selectedMedicine,
            quantity: formData.quantity,
            subtotal: formData.subtotal,
            totalAmount: formData.subtotal - formData.discount,
            discount: formData.discount
          };
    
          setAddedItems([...addedItems, newItem]);
    
          // Update grand total with new item
          const newGrandTotal = addedItems.reduce((total, item) => total + item.totalAmount, newItem.totalAmount);
          setGrandTotal(newGrandTotal);
    
          // Reset form fields
          setFormData((prevData) => ({
            ...prevData,
            selectedMedicine: null,
            quantity: 0,
            subtotal: 0,
            totalAmount: 0,
          }));
        }
      };

  return (
    <div className="consumption-entry">
      <h2>New Consumption Entry</h2>
      <div className="consumption-entry-form-section">
        <label>
          Prescriber:
          <select name="prescriber" onChange={handleInputChange}>
            <option value="">Select Doctor</option>
            {doctors.map((doctor) => (
              <option
                key={doctor.employeeId}
                value={`${doctor.salutation} ${doctor.firstName} ${doctor.lastName}`}
              >
                {doctor.salutation} {doctor.firstName} {doctor.lastName}
              </option>
            ))}
          </select>
        </label>
        <label>
          Store:
          <select
            name="store"
            className='consumption-entry-input-main'
            value={formData.store}
            onChange={handleStoreChange} // Call the updated function on change
          >
            <option value="Accounts">Accounts</option>
            <option value="Brain Operations Store">Brain Operations Store</option>
            <option value="Female Ward Substore">Female Ward Substore</option>
            <option value="ICU Sub store">ICU Sub store</option>
            <option value="Male ward SubStore">Male ward SubStore</option>
            <option value="Maternity Substore">Maternity Substore</option>
            <option value="Operations Store">Operations Store</option>
            <option value="Private Sub Store">Private Sub Store</option>
            <option value="SubStore1">SubStore1</option>
            <option value="SubStore3">SubStore3</option>
          </select>
        </label>
      </div>
      <div className="consumption-entry-details-section">
        <p>Patient Name:{patient.patientFirstName} {patient.patientLastName}</p>
        <p>Membership: {formData.membership}</p>
      </div>
      <div className="consumption-entry-medicine-section">
        <div className='consumption-entry-table-section'>
          <table>
            <thead>
              <tr>
                <th>Generic Name</th>
                <th>Drug/Medicine Name</th>
                <th>Expiry</th>
                <th>Batch</th>
                <th>Avl Qty</th>
                <th>Qty</th>
                <th>Sale Price</th>
                <th>Subtotal</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{formData.selectedMedicine?.genericName || 'Generic Name'}</td>
                <td>
                  <select onChange={handleMedicineSelect} className='consumption-entry-input-main'>
                    <option value="">--Select Medicine--</option>
                    {medicines.map((med) => (
                      <option key={med.pharmacyRequisitionId} value={med.pharmacyRequisitionId}>
                        {med.itemName}
                      </option>
                    ))}
                  </select>
                </td>
                <td>{formData.selectedMedicine?.expiry || 'Expiry'}</td>
                <td>{formData.selectedMedicine?.batch || 'Batch'}</td>
                <td>{formData.selectedMedicine?.availableQtyInStore || 0}</td>
                <td>
                  <input
                    type="number"
                    name="quantity"
                    value={formData.quantity}
                    className='consumption-entry-input-main'
                    onChange={handleQuantityChange}
                    placeholder="Qty"
                  />
                </td>
                <td>{formData.selectedMedicine?.salePrice || 0}</td>
                <td>{formData.subtotal}</td>
                <td>
                  <button className='consumption-entry-save-button-add' onClick={handleAddItem}>+</button>
                </td>
              </tr>
            </tbody>
          </table>
          <div className='table-container'>
          <table>
            <thead>
              <tr>
                <th>Generic Name</th>
                <th>Drug/Medicine Name</th>
                <th>Expiry</th>
                <th>Batch</th>
                <th>Avl Qty</th>
                <th>Qty</th>
                <th>Sale Price</th>
                <th>Subtotal</th>
                <th>Dis Amt</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {addedItems.map((item, index) => (
                <tr key={index}>
                  <td>{item.genericName}</td>
                  <td>{item.itemName}</td>
                  <td>{item.expiry}</td>
                  <td>{item.batch}</td>
                  <td>{item.availableQuantity}</td>
                  <td>{item.quantity}</td>
                  <td>{item.salePrice}</td>
                  <td>{item.subtotal}</td>
                  <td>{item.discount}</td>
                  <td>{item.totalAmount}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </div>
        <div className="consumption-entry-totals-section">
          <label className='consumption-entry-subdiv'>
            SubTotal Amount:
            <input type="number" className='consumption-entry-input' value={formData.subtotal} readOnly />
          </label>
          <label className='consumption-entry-subdiv'>
            Discount Amount:
            <input
              type="number"
              name="discount"
              className='consumption-entry-input'
              value={formData.discount}
              onChange={handleInputChange}
            />
          </label>
          <label className='consumption-entry-subdiv'>
            Grand Total:
            <input type="number" className='consumption-entry-input' value={grandTotal} readOnly />
          </label>
          <div className="consumption-entry-actions">
            <button className="consumption-entry-save-button">Save Consumption</button>
            <button className="consumption-entry-discard-button">Discard Changes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsumptionEntry;
