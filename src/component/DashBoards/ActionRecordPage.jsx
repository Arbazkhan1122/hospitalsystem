import React from 'react';
import './patientDashboard_Action_Order.css'; 

const ActionRecordPage = () => {
  return (
    <div className="action_record_container">
      <div className="action_record_orders">
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
                <td>.OSMOLAX 0 times a day Start Date - yesterday</td>
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

        <div className="action_record_new_orders">
          <h2>➕ New Orders</h2>
          <div className="action_record_new_order_controls">
            <select className="action_record_dropdown">
              <option value="">------</option>
              <option value="lab">Lab</option>
              <option value="lab">Imaging</option>
              <option value="lab">Medication</option>
              <option value="lab">Others</option>
            </select>
            <input
              type="text"
              placeholder="search order items"
              className="action_record_search_input"
            />
            <button className="action_record_search_button">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
      </div>

      <button className="action_record_print_button">Print Medication</button>
    </div>
  );
};

export default ActionRecordPage;