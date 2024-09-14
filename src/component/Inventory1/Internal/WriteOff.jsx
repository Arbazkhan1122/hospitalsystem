import React, { useRef, useState } from 'react';
import "./WriteOff.css";
import { startResizing } from '../../TableHeadingResizing/resizableColumns';

const WriteOff = () => {
  const [columnWidths,setColumnWidths] = useState({});
  const tableRef = useRef(null);
  const [rows, setRows] = useState([
    {
      itemName: '',
      code: '0',
      availableQty: '0',
      writeOffQty: '0',
      writeOffDate: '2024-08-08',
      remark: '',
      itemRate: '0',
      subTotal: '0',
      vat: '0',
      totalAmount: '0',
    },
  ]);

  const handleAddRow = () => {
    setRows([...rows, {
      itemName: '',
      code: '0',
      availableQty: '0',
      writeOffQty: '0',
      writeOffDate: '2024-08-08',
      remark: '',
      itemRate: '0',
      subTotal: '0',
      vat: '0',
      totalAmount: '0',
    }]);
  };

  const handleRemoveRow = (index) => {
    setRows(rows.filter((_, i) => i !== index));
  };

  const handleChange = (index, field, value) => {
    const updatedRows = rows.map((row, i) => {
      if (i === index) {
        const newRow = { ...row, [field]: value };

        // Recalculate fields when writeOffQty or itemRate changes
        if (field === 'writeOffQty' || field === 'itemRate') {
          const subTotal = parseFloat(newRow.itemRate) * parseFloat(newRow.writeOffQty);
          const vat = subTotal * 0.05; // Assuming 5% VAT
          const totalAmount = subTotal + vat;
          
          newRow.subTotal = subTotal.toFixed(2);
          newRow.vat = vat.toFixed(2);
          newRow.totalAmount = totalAmount.toFixed(2);
        }

        return newRow;
      }
      return row;
    });
    setRows(updatedRows);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://192.168.1.39:8080/api/writeoffgoods/createWriteOffGoods', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(rows), // Send all rows as an array
      });
    
      if (response.ok) {
        console.log('Write-Off Goods submitted successfully');
        // Handle success response
      } else {
        console.error('Failed to submit Write-Off Goods');
        // Handle error response
      }
    } catch (error) {
      console.error('Error submitting Write-Off Goods:', error);
      // Handle network error
    }
  };
  
  const totalSubTotal = rows.reduce((sum, row) => sum + parseFloat(row.subTotal), 0).toFixed(2);
  const totalVat = rows.reduce((sum, row) => sum + parseFloat(row.vat), 0).toFixed(2);
  const totalAmount = rows.reduce((sum, row) => sum + parseFloat(row.totalAmount), 0).toFixed(2);

  // Function to convert number to words
  const numberToWords = (num) => {
    // Simple implementation or use a library for converting numbers to words
    // Placeholder implementation
    return num; // Replace this with actual conversion logic
  };

  return (
    <div className='writeOff-content'>
    <div className="table-container ">
    <table className="patientList-table" ref={tableRef}>
          <thead>
            <tr>
              {[
                 "",
                 "Item Name *",
                 "Code",
                 "Available Qty",
                 "Write-Off Qty *",
                 "Write-Off Date *",
                 "",
                 "Remark *",
                 "Item Rate",
                 "Sub Total",
                 "VAT %",
                 "Total Amount"
              ].map((header, index) => (
                <th
                  key={index}
                  style={{ width: columnWidths[index] }}
                  className="resizable-th"
                >
                  <div className="header-content">
                    <span>{header}</span>
                    <div
                      className="resizer"
                      onMouseDown={startResizing(
                        tableRef,
                        setColumnWidths
                      )(index)}
                    ></div>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>
                <button className="writeOff-remove-row" onClick={() => handleRemoveRow(index)}>✖</button>
              </td>
              <td><input type="text" placeholder="Item Name" value={row.itemName} onChange={(e) => handleChange(index, 'itemName', e.target.value)} /></td>
              <td><input type="text" value={row.code} onChange={(e) => handleChange(index, 'code', e.target.value)} /></td>
              <td><input type="text" value={row.availableQty} onChange={(e) => handleChange(index, 'availableQty', e.target.value)} /></td>
              <td><input type="text" value={row.writeOffQty} onChange={(e) => handleChange(index, 'writeOffQty', e.target.value)} /></td>
              <td><input type="date" value={row.writeOffDate} onChange={(e) => handleChange(index, 'writeOffDate', e.target.value)} /></td>
              <td><button className="writeOff-add-row" onClick={handleAddRow}>+</button></td>
              <td><input type="text" value={row.remark} onChange={(e) => handleChange(index, 'remark', e.target.value)} /></td>
              <td><input type="text" value={row.itemRate} onChange={(e) => handleChange(index, 'itemRate', e.target.value)} /></td>
              <td><input type="text" value={row.subTotal} readOnly /></td>
              <td><input type="text" value={row.vat} readOnly /></td>
              <td><input type="text" value={row.totalAmount} readOnly /></td>
            </tr>
          ))}
          <tr>
            {/* <td colSpan="11"> */}
            {/* </td> */}
          </tr>
        </tbody>
      </table>
      <div className='writeOff-totals-container'>
        <div className="writeOff-totals">
          <div className="writeOff-total-field">
            <label>SubTotal:</label>
            <input type="text" value={totalSubTotal} readOnly />
          </div>
          <div className="writeOff-total-field">
            <label>VAT:</label>
            <input type="text" value={totalVat} readOnly />
          </div>
          <div className="writeOff-total-field">
            <label>Total Amount:</label>
            <input type="text" value={totalAmount} readOnly />
          </div>
          <div className="writeOff-total-field">
            <label>In Words:</label>
          </div>
        </div>
        <div className="writeOff-buttons">
          <button className="writeOff-write-off-request" onClick={handleSubmit}>Write-Off Request</button>
          <button className="writeOff-cancel">Cancel</button>
        </div>
      </div>
    </div>
  </div>
);
}

export default WriteOff;
