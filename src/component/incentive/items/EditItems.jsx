// export default EditItems;
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './EditItems.css';

function EditItems() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    department: '',
    itemName: '',
    price: 0,
    performerPercent: 0,
    prescriberPercent: 0,
    referralPercent: 0,
    priceCategory: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    // Add your save logic here
    console.log('Data saved:', formData);
    navigate('/settings');
  };

  const handleDiscard = () => {
    setFormData({
      department: '',
      itemName: '',
      price: 0,
      performerPercent: 0,
      prescriberPercent: 0,
      referralPercent: 0,
      priceCategory: '',
    });
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="EditItems">
      <h2 className='EditItems-headings'>Employee INCENTIVE setup for: <span>Dr. pooja Mishra</span> TDS: 5%</h2>
      <div className="form-row">
        <label>Price Category:</label>
        <select name="priceCategory" value={formData.priceCategory} onChange={handleInputChange}>
          <option value="">--select PriceCategory--</option>
          <option value="Category 1">Category 1</option>
          <option value="Category 2">Category 2</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <div className="form-row">
        <label>Department:</label>
        <input
          type="text"
          name="department"
          value={formData.department}
          onChange={handleInputChange}
          placeholder="Enter Department"
        />
        {!formData.department && <span className="no-result">No Result Found</span>}
      </div>
      <div className="form-row">
        <label>Item Name:</label>
        <input
          type="text"
          name="itemName"
          value={formData.itemName}
          onChange={handleInputChange}
          placeholder="Enter Item Name"
        />
      </div>
      <div className="form-row">
        <label>Price:</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-row">
        <label>Performer %:</label>
        <input
          type="number"
          name="performerPercent"
          value={formData.performerPercent}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-row">
        <label>Prescriber %:</label>
        <input
          type="number"
          name="prescriberPercent"
          value={formData.prescriberPercent}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-row">
        <label>Referral %:</label>
        <input
          type="number"
          name="referralPercent"
          value={formData.referralPercent}
          onChange={handleInputChange}
        />
      </div>
      <div className="buttons-row">
        <button className="save-button" onClick={handleSave}>Save</button>
        <button className="discard-button" onClick={handleDiscard}>Discard</button>
        <button className="print-button" onClick={handlePrint}>Print</button>
      </div>
      <div className="incentive-percentage-setting">
        <h3>Incentive Percentage Setting</h3>
        <input type="text" className="search-bar" placeholder="Search" />
        <table>
          <thead>
            <tr>
              <th>Department</th>
              <th>Item Name</th>
              <th>Price Category</th>
              <th>Performer %</th>
              <th>Prescriber %</th>
              <th>Referral %</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {/* Replace this with dynamic data as needed */}
            <tr>
              <td colSpan="7">No Rows To Show</td>
            </tr>
          </tbody>
        </table>
        <div className="pagination">
          <button>First</button>
          <button>Previous</button>
          <span>Showing 0 / 0 results</span>
          <button>Next</button>
          <button>Last</button>
        </div>
      </div>
    </div>
  );
}

export default EditItems;
