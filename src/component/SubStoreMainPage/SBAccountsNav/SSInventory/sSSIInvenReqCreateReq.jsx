/* Ajhar Tamboli sSSIInvenReqCreateReq.jsx 19-09-24 */


import React, { useEffect, useState } from "react";
import { Calendar } from "lucide-react";
import "../SSInventory/sSSIInvenReqCreateReq.css";
import { useParams } from "react-router-dom";

const SSSIInvenReqCreateReq = ({ onClose }) => {
  const { store } = useParams();

  // State for form fields
  const [inventoryName, setInventoryName] = useState("");
  const [requisitionDate, setRequisitionDate] = useState("");
  const [issueNo, setIssueNo] = useState("");
  const [rows, setRows] = useState([
    {
      itemCategory: "",
      itemName: "",
      specification: "",
      unit: "",
      availableQty: "",
      code: "",
      requiredQuantity: "",
      remark: "",
    },
  ]);
  const [needVerification, setNeedVerification] = useState(false);
  const [remarks, setRemarks] = useState("");
  const [checkedBy, setCheckedBy] = useState("Mr. admin admin");
  useEffect(() => {
    // Get the current date in the format 'YYYY-MM-DD'
    const today = new Date().toISOString().split("T")[0];
    setRequisitionDate(today);
  }, []); // Example, could be dynamic

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const requisitionData = {
      issueNo,
      requisitionDate,
      itemCategory: rows[0]?.itemCategory || '', // Taking the first row's value as an example
      itemName: rows[0]?.itemName || '',
      specification: rows[0]?.specification || '',
      unit: rows[0]?.unit || '',
      availableQty: rows[0]?.availableQty || '',
      code: rows[0]?.code || '',
      requiredQuantity: rows[0]?.requiredQuantity || '',
      remark: rows[0]?.remark || '',
      withdrawRemark: '', // Static or derived
      status: 'Pending', // Static for now
      verifyOrNot: needVerification ? 'Yes' : 'No',
      checkedBy,
      remarks,
      storeName: store, // From useParams
      verifiedBy: '' // Static for now
    };
    

    try {
      console.log(requisitionData);
      const response = await fetch(
        "http://localhost:8080/api/inventory-requisitions/add",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requisitionData),
        }
      );

      if (response.ok) {
        console.log("Form submitted successfully");
        onClose();
      } else {
        // Handle errors, e.g., show an error message
        console.error("Failed to submit the form");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };

  const handleRowChange = (index, field, value) => {
    const updatedRows = rows.map((row, i) =>
      i === index ? { ...row, [field]: value } : row
    );
    setRows(updatedRows);
  };

  const addRow = () => {
    setRows([
      ...rows,
      {
        itemCategory: "",
        itemName: "",
        specification: "",
        unit: "",
        availableQty: "",
        code: "",
        requiredQuantity: "",
        remark: "",
      },
    ]);
  };

  const removeRow = (index) => {
    setRows(rows.filter((_, i) => i !== index));
  };

  return (
    <div className="sSSIInvenReqCreateReq-form">
      <button
        className="sSSIInvenReqCreateReq-close-button"
        onClick={onClose}
      >
        X
      </button>{" "}
      {/* Close button */}
      <h2 className="sSSIInvenReqCreateReq-form-title">Create Requisition</h2>
      <form onSubmit={handleSubmit}>
        <div className="sSSIInvenReqCreateReq-form-row">
          <div className="sSSIInvenReqCreateReq-form-group">
            <label htmlFor="targetInventory">Target Inventory : *</label>
            <input
              type="text"
              id="targetInventory"
              placeholder="Enter Inventory Name"
              value={inventoryName}
              onChange={(e) => setInventoryName(e.target.value)}
              required
            />
          </div>
          <div className="sSSIInvenReqCreateReq-form-group">
            <label htmlFor="requisitionDate">Requisition Date :</label>
            <div className="sSSIInvenReqCreateReq-date-input">
              <input
                type="date"
                id="requisitionDate"
                value={requisitionDate}
                onChange={(e) => setRequisitionDate(e.target.value)}
                readOnly
              />
            </div>
          </div>
          <div className="sSSIInvenReqCreateReq-form-group">
            <label htmlFor="issueNo">Issue No :</label>
            <input
              type="text"
              id="issueNo"
              value={issueNo}
              onChange={(e) => setIssueNo(e.target.value)}
            />
          </div>
        </div>

        <table className="sSSIInvenReqCreateReq-inventory-table">
          <thead>
            <tr>
              <th>Item Category</th>
              <th>Item Name</th>
              <th>Specification</th>
              <th>Unit</th>
              <th>Available Qty</th>
              <th>Code</th>
              <th>Required Quantity</th>
              <th>Remark</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                <td>
                  <td>
                    <select className="sSSIInvenReqCreateReq-table-select"
                      value={row.itemCategory}
                      onChange={(e) =>
                        handleRowChange(index, "itemCategory", e.target.value)
                      }
                    >
                      <option value="">Select Category</option>
                      <option value="Consumable">Consumable</option>
                      <option value="Capital Goods">Capital Goods</option>
                    </select>
                  </td>
                </td>
                <td>
                  <input className="sSSIInvenReqCreateReq-table-input"
                    type="text"
                    value={row.itemName}
                    onChange={(e) =>
                      handleRowChange(index, "itemName", e.target.value)
                    }
                  />
                </td>
                <td>
                  <input className="sSSIInvenReqCreateReq-table-input"
                    type="text"
                    value={row.specification}
                    onChange={(e) =>
                      handleRowChange(index, "specification", e.target.value)
                    }
                  />
                </td>
                <td>
                  <input className="sSSIInvenReqCreateReq-table-input"
                    type="text"
                    value={row.unit}
                    onChange={(e) =>
                      handleRowChange(index, "unit", e.target.value)
                    }
                  />
                </td>
                <td>
                  <input className="sSSIInvenReqCreateReq-table-input"
                    type="number"
                    value={row.availableQty}
                    onChange={(e) =>
                      handleRowChange(index, "availableQty", e.target.value)
                    }
                  />
                </td>
                <td>
                  <input className="sSSIInvenReqCreateReq-table-input"
                    type="text"
                    value={row.code}
                    onChange={(e) =>
                      handleRowChange(index, "code", e.target.value)
                    }
                  />
                </td>
                <td>
                  <input className="sSSIInvenReqCreateReq-table-input"
                    type="number"
                    value={row.requiredQuantity}
                    onChange={(e) =>
                      handleRowChange(index, "requiredQuantity", e.target.value)
                    }
                  />
                </td>
                <td>
                  <input className="sSSIInvenReqCreateReq-table-input"
                    type="text"
                    value={row.remark}
                    onChange={(e) =>
                      handleRowChange(index, "remark", e.target.value)
                    }
                  />
                </td>
                <td>
                  <button className="sSSIInvenReqCreateReq-min-buttonFs" type="button" onClick={() => removeRow(index)}>
                    -
                  </button>
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan="9">
                <button className="sSSIInvenReqCreateReq-addrow-button" type="button" onClick={addRow}>
                  Add Row
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="sSSIInvenReqCreateReq-form-group-needVerification-N-Remark">
        <div className="sSSIInvenReqCreateReq-form-group-needVerification">
        <div className="sSSIInvenReqCreateReq-form-group checkbox-group">
          <input
            type="checkbox"
            id="needVerification"
            checked={needVerification}
            onChange={(e) => setNeedVerification(e.target.checked)}
          />
          <label htmlFor="needVerification">Need Verification</label>
        </div>

        <div className="sSSIInvenReqCreateReq-checked-by">
          <button className="sSSIInvenReqCreateReq-btn-remove">-</button>
          <button className="sSSIInvenReqCreateReq-btn-checked">Checked By</button>
          <input type="text" value={checkedBy} readOnly />
          <button className="sSSIInvenReqCreateReq-btn-add">+</button>
        </div>
        </div>

        <div className="sSSIInvenReqCreateReq-form-group">
          <label htmlFor="remarks">Remarks:</label>
          <textarea
            id="remarks"
            value={remarks}
            onChange={(e) => setRemarks(e.target.value)}
          ></textarea>
        </div>
        </div>

        <div className="sSSIInvenReqCreateReq-form-actions">
          <button type="submit" className="sSSIInvenReqCreateReq-btn-request">
            Request
          </button>
          <button type="button" className="sSSIInvenReqCreateReq-btn-discard">
            Discard Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default SSSIInvenReqCreateReq;
