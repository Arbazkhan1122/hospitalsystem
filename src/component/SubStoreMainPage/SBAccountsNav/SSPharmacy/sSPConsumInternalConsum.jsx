import React, { useState, useEffect } from 'react';
import '../SSPharmacy/sSPConsumInternalConsum.css';

function SSPConsumInternalConsum() {
  const [formData, setFormData] = useState({
    itemName: '',
    availableQuantity: 0,
    quantity: 0,
    batchNo: '',
    expiryDate: '',
    salePrice: 0.0,
    totalAmount: 0.0,
    consumedBy: '',
    remark: '',
    storeName: '' // Include storeName if needed
  });

  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/pharmacyRequisitions/getAll');
        const data = await response.json();
        setItems(data); // Adjust based on actual API response structure
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    if (name === 'quantity' || name === 'salePrice') {
      const totalAmount = formData.quantity * formData.salePrice;
      setFormData((prevData) => ({
        ...prevData,
        totalAmount
      }));
    }
  };

  const handleItemChange = (e) => {
    console.log("-----------------------------------------------");
    
    const selectedItem = items.find(item => item.itemName === e.target.value);  
    console.log(selectedItem)  
    setFormData({
      ...formData,
      itemName: e.target.value,
      availableQuantity: selectedItem ? selectedItem.availableQtyInStore : 0,
      salePrice: selectedItem ? selectedItem.salePrice : 0,
      batchNo: selectedItem ? selectedItem.batchNo : '',
      expiryDate: selectedItem ? selectedItem.expiryDate : '',
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/internal-consumption/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          expiryDate: new Date(formData.expiryDate).toISOString(), // Ensure date format compatibility
        })
      });

      if (response.ok) {
        alert('Internal Consumption entry saved successfully.');
        // Handle successful save
      } else {
        alert('Failed to save entry. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="sSPConsumInternalConsum-container">
      <div className="sSPConsumInternalConsum-header">
        <i className="fa fa-shopping-cart"></i> New Internal Consumption
        <button className="sSPConsumInternalConsum-close-button"></button>
      </div>
      <div className="sSPConsumInternalConsum-content">
        <form onSubmit={handleSubmit}>
          <table >
            <thead>
              <tr>
                <th>Item Name</th>
                <th>AvlQty</th>
                <th>Qty</th>
                <th>Batch No</th>
                <th>Expiry Date</th>
                <th>Sale Price</th>
                <th>Total Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <button type="button" className="delete-button">✖</button>
                  <select name="itemName" value={formData.itemName} onChange={handleItemChange}>
                    <option>--Select Item--</option>
                    {items.map((item) => (
                      <option key={item.itemName} value={item.itemName}>
                        {item.itemName}
                      </option>
                    ))}
                  </select>
                </td>
                <td>
                  <input
                  className='sSPConsumInternalConsum'
                    type="number"
                    name="availableQuantity"
                    value={formData.availableQuantity}
                    onChange={handleChange}
                    readOnly
                  />
                </td>
                <td>
                  <input
                    className='sSPConsumInternalConsum'
                    type="number"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    className='sSPConsumInternalConsum'
                    type="text"
                    name="batchNo"
                    value={formData.batchNo}
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                  className='sSPConsumInternalConsum'
                    type="date"
                    name="expiryDate"
                    value={formData.expiryDate}
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    className='sSPConsumInternalConsum'
                    type="number"
                    name="salePrice"
                    value={formData.salePrice}
                    onChange={handleChange}
                    readOnly
                  />
                </td>
                <td>
                  <input
                    className='sSPConsumInternalConsum'
                    type="number"
                    name="totalAmount"
                    value={formData.totalAmount}
                    readOnly
                  />
                </td>
              </tr>
            </tbody>
          </table>

          <div className="sSPConsumInternalConsum-details">
            <div className="sSPConsumInternalConsum-total-amount">
              <span>Total Amount:</span>
              <input type="number" value={formData.totalAmount} readOnly />
            </div>
            <div className="sSPConsumInternalConsum-in-words">
              <span>In Words:</span>
              <span>Only.</span>
            </div>
            <div className="sSPConsumInternalConsum-consumed-by">
              <span>Consumed By:</span>
              <input
                type="text"
                name="consumedBy"
                value={formData.consumedBy}
                onChange={handleChange}
              />
            </div>
            <div className="sSPConsumInternalConsum-remark">
              <span>Remark:</span>
              <textarea
                name="remark"
                value={formData.remark}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>

          <div className="sSPConsumInternalConsum-footer">
            <button type="submit" className="sSPConsumInternalConsum-save-button">Save</button>
            <button type="button" className="sSPConsumInternalConsum-cancel-button">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SSPConsumInternalConsum;
