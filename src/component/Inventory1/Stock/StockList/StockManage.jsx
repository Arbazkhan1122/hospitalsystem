import React, { useState } from "react";
import "./StockManage.css";

const StockManage = ({ item, onBack }) => {
  const [minStockQuantity, setMinStockQuantity] = useState(item.minStockQuantity || 0);
  const [formValues, setFormValues] = useState(item); // Initialize with item data if needed
  const [errors, setErrors] = useState({});

  const handleSubmit = async () => {
    console.log("-----------------------");
    
    const requiredFields = ["itemCategory", "itemName", "itemSubCategory", "itemCompany"];
    const newErrors = {};

    requiredFields.forEach((field) => {
        if (!formValues[field]) {
            newErrors[field] = `${field.replace(/([A-Z])/g, " $1")} is required`;
        }
    });

    if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return; // Prevent submission if there are errors
    }

    // Prepare the data object in the required format
    const requestData = {
        itemName: item.itemName,
        minStockQuantity: minStockQuantity || Number(formValues.minStockQuantity), // Update with received value
        description: formValues.description,
        standardRate: parseFloat(formValues.standardRate),
        itemCode: formValues.itemCode,
        inventory: formValues.inventory,
        itemCompany: formValues.itemCompany.companyName || "",
        reOrderQuantity: Number(formValues.reOrderQuantity),
        unitQuantity: Number(formValues.unitQuantity),
        isVatApplicable: formValues.isVatApplicable,
        isCssdApplicable: formValues.isCssdApplicable,
        isColdStorageApplicable: formValues.isColdStorageApplicable,
        isPatientConsumptionApplicable: formValues.isPatientConsumptionApplicable,
        isActive: formValues.isActive,
        packagingType: formValues.packagingType.packagingTypeName || "",
        unitOfMeasurement: formValues.unitOfMeasurement.unitOfMeasurementName || "",
        subCategory: formValues.itemSubCategory.subCategoryName || "",
        company: formValues.itemCompany.companyName || "",
    };

    console.log("Request Data:", requestData);

    try {
        const response = await fetch(`http://192.168.1.39:8080/api/items/update/${item.Id}`, { // Use PUT method for update
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestData),
        });

        if (response.ok) {
            alert("Item updated successfully!");
            setFormValues({
                itemCategory: "",
                itemName: "",
                itemSubCategory: "",
                unitOfMeasurement: "",
                minStockQuantity: "",
                isVatApplicable: false,
                description: "",
                standardRate: 0,
                itemCode: "",
                inventory: "GENERAL-INVENTORY",
                itemCompany: "",
                reOrderQuantity: "",
                unitQuantity: 0,
                packagingType: "",
                vendorName: "",
                isCssdApplicable: false,
                isColdStorageApplicable: false,
                isPatientConsumptionApplicable: false,
                isActive: true,
            });
            onBack(); // Close the modal after submission
        } else {
            const errorData = await response.json();
            console.error("Error updating item:", errorData);
            alert("Failed to update item. Please try again.");
        }
    } catch (error) {
        console.error("Error submitting form:", error);
        alert("An error occurred while updating the item.");
    }
};


  return (
    <div className="StockManage-container">
      {/* <button onClick={onBack} className="back-button">
        Back to List
      </button> */}
      <h2 className="StockManage-title">Stock Manage {item.itemName}</h2>
      <div className="StockManage-item-name">
        Item Name: <strong>{item.itemName}</strong>
      </div>
      <table className="StockManage-table">
        <thead>
          <tr>
            <th></th>
            <th>GR No.</th>
            <th>Received Date</th>
            <th>Batch No.</th>
            <th>Expiry Date</th>
            <th>Remarks</th>
            <th>Received Qty</th>
            <th>Current Qty</th>
            <th>Adjustment Type (In/Out)</th>
            <th>Modified Qty</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>2</td>
            <td>
              <input type="checkbox" /> Date (B.S.)?
            </td>
            <td></td>
            <td>2024-11-01</td>
            <td></td>
            <td>10</td>
            <td>54</td>
            <td>
              <input type="checkbox" /> In
              <input type="checkbox" /> Out
            </td>
            <td>
              <input
                type="text"
                value={minStockQuantity}
                onChange={(e) => setMinStockQuantity(Number(e.target.value))}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div className="StockManage-totals">
  <div className="StockManage-item">
    <label>Current Total Available:</label>
    <input type="text" value={item.minStockQuantity} readOnly />
  </div>
  <div className="StockManage-item">
    <label>Modified Total Available:</label>
    <input
      type="text"
      value={minStockQuantity}
      onChange={(e) => setMinStockQuantity(Number(e.target.value))}
    />
  </div>
</div>

      <div className="StockManage-buttons">
        <button className="StockManage-update-button" onClick={handleSubmit}>Update Stock</button>
        <button className="StockManage-cancel-button" onClick={onBack}>Cancel</button>
      </div>
    </div>
  );
};

export default StockManage;
