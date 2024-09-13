import React, { useState } from 'react';
import { Table, Form, Button } from 'react-bootstrap';

const MedicineTable = ({ medicines }) => {
  const [rows, setRows] = useState([{ selectedMedicine: null, availableQuantity: 0, salePrice: 0, subTotal: 0 }]);
  const [selectedMedicine, setSelectedMedicine] = useState(null);

  

  const handleAddRow = () => {
    setRows([...rows, { selectedMedicine: null, availableQuantity: 0, salePrice: 0, subTotal: 0 }]);
  };

  return (
    <Table bordered hover>
      <thead>
        <tr>
          <th>Drug/Medicine Name</th>
          <th>Expiry</th>
          <th>Batch</th>
          <th>AvlQty</th>
          <th>C. Qty</th>
          <th>SalePrice</th>
          <th>SubTotal</th>
          <th>Disc %</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>
            <td>
              <Form.Control
                as="select"
                onChange={(e) => handleMedicineChange(index, e.target.value)}
                value={row.selectedMedicine ? JSON.stringify(row.selectedMedicine) : ''}
              >
                <option>--Select Medicine--</option>
                {medicines.map(medicine => (
                  <option key={medicine.genericId} value={JSON.stringify(medicine)}>
                    {medicine.genericName}
                  </option>
                ))}
              </Form.Control>
            </td>
            <td>
              <Form.Control type="text" placeholder="0" value={row.selectedMedicine?.expiry || ''} disabled />
            </td>
            <td>
              <Form.Control type="text" placeholder="0" value={row.selectedMedicine?.batch || ''} disabled />
            </td>
            <td>
              <Form.Control
                type="text"
                placeholder="0"
                value={row.availableQuantity}
                onChange={(e) => handleQuantityChange(index, e)}
              />
            </td>
            <td>
              <Form.Control type="text" placeholder="0" value={row.availableQuantity} disabled />
            </td>
            <td>
              <Form.Control type="text" placeholder="0" value={row.selectedMedicine?.salePrice || ''} disabled />
            </td>
            <td>
              <Form.Control type="text" placeholder="0" value={row.subTotal} disabled />
            </td>
            <td>
              <Form.Control type="text" placeholder="0" disabled />
            </td>
            <td>
              <Button variant="success" onClick={handleAddRow}>+</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default MedicineTable;
