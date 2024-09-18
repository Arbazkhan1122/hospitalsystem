import React, { useState, useEffect } from 'react';
import './patientDashboard_Action_Order.css';   // Import the MedicationOrder component
import MedicationOrder from './MedicationOrder ';
import { API_BASE_URL } from '../api/api';

const ActionRecordPage = ({patientId,newPatientVisitId}) => {
  const [selectedOrderType, setSelectedOrderType] = useState('');
  const [orderData, setOrderData] = useState([]);
  const [selectedOrders, setSelectedOrders] = useState([]);
  const [selectedOrderId, setSelectedOrderId] = useState('');
  const [showMedicationOrder, setShowMedicationOrder] = useState(false); // Toggle to show MedicationOrder page

  // API endpoints
  const apiEndpoints = {
    lab: `${API_BASE_URL}`,
    imaging: 'https://api.example.com/imagingOrders',
    medication: `${API_BASE_URL}/add-items`,
    others: 'https://api.example.com/otherOrders',
  };

  useEffect(() => {
    const fetchOrders = async () => {
      const apiUrl = apiEndpoints[selectedOrderType];

      if (apiUrl) {
        try {
          const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });

          if (response.ok) {
            const data = await response.json();
            setOrderData(data);
          } else {
            console.error('Error fetching data:', response.status);
          }
        } catch (error) {
          console.error('Error fetching orders:', error);
        }
      }
    };

    fetchOrders();
  }, [selectedOrderType]);

  const handleOrderTypeChange = (e) => {
    setSelectedOrderType(e.target.value);
  };

  const handleOrderSelect = (e) => {
    const orderId = e.target.value;
    setSelectedOrderId(orderId);

    if (orderId) {
      const selectedOrder = orderData.find(order => order.id == orderId);

      if (selectedOrder) {
        setSelectedOrders(prevOrders => [...prevOrders, selectedOrder]);
        setSelectedOrderId('');
      }
    }
  };

  const removeOrder = (index) => {
    const updatedOrders = selectedOrders.filter((_, i) => i !== index);
    setSelectedOrders(updatedOrders);
  };

  const handleProceed = () => {
    if (selectedOrders.length > 0) {
      setShowMedicationOrder(true); // Show the MedicationOrder component when "Proceed" is clicked
    } else {
      alert('Please select an order to proceed.');
    }
  };

  if (showMedicationOrder) {
    return <MedicationOrder selectedOrders={selectedOrders}  patientId={patientId} newPatientVisitId={newPatientVisitId}/>;  // Pass selected orders to MedicationOrder
  }

  return (
    <div className="action_record_container">
      <div className="action_record_orders">
        
        <div className='action-records-selected-container'>
          <div className="selected_orders">
            <div className='selected-order-header'>
              <h2>Selected Orders</h2>
              <div className='selected-order-header-right'>
                <span className='remove_order_button' onClick={() => setSelectedOrders([])}>Cancel</span>
                <span className='proceed_order_button' onClick={handleProceed}>Proceed</span>
              </div>
            </div>
            <div>
              <ul>
                {selectedOrders.length === 0 && <p>No orders selected.</p>}
                {selectedOrders.map((order, index) => (
                  <li key={index} className="selected_order_item">
                    <span>{order.itemName}</span> {/* Display selected order name */}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Active Orders Section */}
          <div className="action_record_active_orders">
            <h2>🔍 Active Orders</h2>
            <table className="action_record_table">
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Name</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Medication</td>
                  <td>OSMOLAX 0 times a day Start Date - 04.09.2024</td>
                  <td>active</td>
                </tr>
                <tr>
                  <td>MRI</td>
                  <td>Brain 03.09.2024 13:20</td>
                  <td>active</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        {/* New Orders Section */}
        <div className="action_record_new_orders">
          <h2>➕ New Orders</h2>
          <div className="action_record_new_order_controls">
            
            <div className="action-dropdown-container">
              <label htmlFor="orderType">Order Type:</label>
              <select 
                id="orderType"
                className="action_record_dropdown"
                value={selectedOrderType}
                onChange={handleOrderTypeChange}
              >
                <option value="">------</option>
                <option value="lab">Lab</option>
                <option value="imaging">Imaging</option>
                <option value="medication">Medication</option>
                <option value="others">Others</option>
              </select>
            </div>

            {selectedOrderType && (
              <div className="action-dropdown-container">
                <label htmlFor="orderItem">Order Item:</label>
                <select 
                  id="orderItem"
                  className="action_record_dropdown"
                  value={selectedOrderId}
                  onChange={handleOrderSelect}
                >
                  <option value="">Select an order item</option>
                  {orderData.map((order) => (
                    <option key={order.id} value={order.id}>
                      {order.itemName}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>
        </div>
      </div>

      <button className="action_record_print_button">Print Medication</button>
    </div>
  );
};

export default ActionRecordPage;
