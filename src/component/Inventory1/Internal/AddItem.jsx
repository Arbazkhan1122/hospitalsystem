import React, { useState, useEffect } from "react";
import Popup from "reactjs-popup";
import AddItemSubCategory from "./AddItemSubCategory"; // Popup component for Item SubCategory
import UnitOfMeasurement from "./UnitOfMeasurement"; // Popup component for Unit of Measurement
import ItemCompany from "./ItemCompany"; // Popup component for Item Company
import PackagingFile from "./PackagingFile"; // Popup component for Packaging Type
import "./AddItem.css"; // Import the CSS file
import { API_BASE_URL } from "../../api/api";

const AddItem = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [formValues, setFormValues] = useState({
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

  const [errors, setErrors] = useState({});
  const [subCategories, setSubCategories] = useState([]);
  const [unitMeasurements, setUnitMeasurements] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [packagingTypes, setPackagingTypes] = useState([]);

  // Modal visibility state
  const [isSubCategoryModalOpen, setIsSubCategoryModalOpen] = useState(false);
  const [isUnitModalOpen, setIsUnitModalOpen] = useState(false);
  const [isCompanyModalOpen, setIsCompanyModalOpen] = useState(false);
  const [isPackagingModalOpen, setIsPackagingModalOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormValues({
      ...formValues,
      [name]: type === "checkbox" ? checked : value,
    });
    setErrors({ ...errors, [name]: "" }); // Clear the error when the user starts typing
  };

  // Fetch functions for dropdown options
  useEffect(() => {
    fetchSubCategories();
    fetchUnitMeasurements();
    fetchCompanies();
    fetchPackagingTypes();
  }, []);

  const fetchSubCategories = async () => {
    try {
      const response = await fetch(
        "http://192.168.1.38:8080/api/subcategories/fetchAll"
      );
      const data = await response.json();
      setSubCategories(data);
    } catch (error) {
      console.error("Error fetching subcategories:", error);
    }
  };

  const fetchUnitMeasurements = async () => {
    try {
      const response = await fetch(
        `${API_BASE_URL}/unitofmeasurement/fetchAll`
      );
      const data = await response.json();
      setUnitMeasurements(data);
    } catch (error) {
      console.error("Error fetching unit measurements:", error);
    }
  };

  const fetchCompanies = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/company/allCompany`);
      const data = await response.json();
      setCompanies(data);
    } catch (error) {
      console.error("Error fetching companies:", error);
    }
  };

  const fetchPackagingTypes = async () => {
    try {
      const response = await fetch(
        `${API_BASE_URL}/packageType/getAllPackageType`
      );
      const data = await response.json();
      setPackagingTypes(data);
    } catch (error) {
      console.error("Error fetching packaging types:", error);
    }
  };

  const handleDropdownChange = (name, selectedOption) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: selectedOption,
    }));
    setErrors({ ...errors, [name]: "" }); // Clear the error on selection
  };

  const handleSubmit = async () => {
    const requiredFields = [
      "itemCategory",
      "itemName",
      "itemSubCategory",
      "itemCompany",
    ];
    const newErrors = {};

    requiredFields.forEach((field) => {
      if (!formValues[field]) {
        newErrors[field] = `${field.replace(/([A-Z])/g, " $1")} is required`;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Prepare the data object in the required format
      const requestData = {
        // Assuming `id` might be provided
        itemName: formValues.itemName,
        minStockQuantity: Number(formValues.minStockQuantity),
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
        isPatientConsumptionApplicable:
          formValues.isPatientConsumptionApplicable,
        isActive: formValues.isActive,
        packagingType: formValues.packagingType,
        unitOfMeasurement:
          formValues.unitOfMeasurement,
        subCategory: formValues.itemSubCategory,
        company: formValues.itemCompany,
      };
      console.log(requestData);

      try {
        const response = await fetch(`${API_BASE_URL}/items/create`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        });

        if (response.ok) {
          alert("Item added successfully!");
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
          onClose(); // Close the modal after submission
        } else {
          const errorData = await response.json();
          console.error("Error adding item:", errorData);
          alert("Failed to add item. Please try again.");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("An error occurred while adding the item.");
      }
    }
  };

  return (
    <div className="inventory-modal-overlay">
      <div className="inventory-aadddContainer">
        <button className="inventory-aadddCloseButton" onClick={onClose}>
          &times;
        </button>
        <h2 className="inventory-aadddHeading">Add Item</h2>
        <div className="inventory-aadddFormContainer">
          <div className="inventory-aadddColumn">
            <div className="inventory-aadddColumn-part">
              <AadddFormRow
                label="Item Category"
                name="itemCategory"
                required
                value={formValues.itemCategory}
                onChange={handleInputChange}
                placeholder="Item Category"
                error={errors.itemCategory}
              />
              <AadddFormRow
                label="Item Name"
                name="itemName"
                required
                value={formValues.itemName}
                onChange={handleInputChange}
                placeholder="Item Name"
                error={errors.itemName}
              />
              <AadddFormRow
                label="Item Sub Category"
                name="itemSubCategory"
                onChange={handleInputChange}
                required
                value={formValues.itemSubCategory}
                // onChange={(e) =>
                //   handleDropdownChange(
                //     "itemSubCategory",
                //     subCategories.find(
                //       (sub) => sub.subCategoryName === e.target.value
                //     )
                //   )
                // }
                // options={subCategories}
                placeholder="Item Sub Category"
                error={errors.itemSubCategory}
                onModalOpen={() => setIsSubCategoryModalOpen(true)}
              />

              <AadddFormRow
                label="Unit of Measurement"
                name="unitOfMeasurement"
                onChange={handleInputChange}
                value={
                  formValues.unitOfMeasurement
                }
                // onChange={(e) =>
                //   handleDropdownChange(
                //     "unitOfMeasurement",
                //     unitMeasurements.find(
                //       (unit) => unit.unitOfMeasurementName === e.target.value
                //     )
                //   )
                // }
                // options={unitMeasurements}
                placeholder="Unit of Measurement"
                onModalOpen={() => setIsUnitModalOpen(true)}
              />

              <AadddFormRow
                label="Item Company"
                name="itemCompany"
                required
                onChange={handleInputChange}
                value={formValues.itemCompany}
                // onChange={(e) =>
                //   handleDropdownChange(
                //     "itemCompany",
                //     companies.find(
                //       (comp) => comp.companyName === e.target.value
                //     )
                //   )
                // }
                // options={companies}
                placeholder="Item Company"
                error={errors.itemCompany}
                onModalOpen={() => setIsCompanyModalOpen(true)}
              />

              <AadddFormRow
                label="Packaging Type"
                name="packagingType"
        
                value={formValues.packagingType}
                onChange={handleInputChange}
                // onChange={(e) =>
                //   handleDropdownChange(
                //     "packagingType",
                //     packagingTypes.find(
                //       (pkg) => pkg.packagingTypeName === e.target.value
                //     )
                //   )
                // }
                // options={packagingTypes}
                placeholder="Packaging Type"
                onModalOpen={() => setIsPackagingModalOpen(true)}
              />
              <AadddFormRow
                label="Min Stock Quantity"
                name="minStockQuantity"
                value={formValues.minStockQuantity}
                onChange={handleInputChange}
                placeholder="Min Stock Quantity"
              />
              <AadddFormRow
                label="Is VAT Applicable"
                name="isVatApplicable"
                elementType="checkbox"
                checked={formValues.isVatApplicable}
                onChange={handleInputChange}
              />
              <AadddFormRow
                label="Description"
                name="description"
                value={formValues.description}
                onChange={handleInputChange}
                placeholder="Description"
              />
            </div>
            <div className="inventory-aadddColumn-part">
              <AadddFormRow
                label="Item Code"
                name="itemCode"
                value={formValues.itemCode}
                onChange={handleInputChange}
                placeholder="Item Code"
              />
              <AadddFormRow
                label="Re-Order Quantity"
                name="reOrderQuantity"
                value={formValues.reOrderQuantity}
                onChange={handleInputChange}
                placeholder="Re-Order Quantity"
              />
              <AadddFormRow
                label="Unit Quantity"
                name="unitQuantity"
                value={formValues.unitQuantity}
                onChange={handleInputChange}
                placeholder="Unit Quantity"
                error={errors.unitQuantity}
              />
              <AadddFormRow
                label="Vendor Name"
                name="vendorName"
                value={formValues.vendorName}
                onChange={handleInputChange}
                placeholder="Vendor Name"
                error={errors.vendorName}
              />
              <AadddFormRow
                label="Is Cssd Applicable"
                name="isCssdApplicable"
                elementType="checkbox"
                checked={formValues.isCssdApplicable}
                onChange={handleInputChange}
              />
              <AadddFormRow
                label="Is Cold Storage Applicable"
                name="isColdStorageApplicable"
                elementType="checkbox"
                checked={formValues.isColdStorageApplicable}
                onChange={handleInputChange}
              />
              <AadddFormRow
                label="Is Patient Consumption Applicable"
                name="isPatientConsumptionApplicable"
                elementType="checkbox"
                checked={formValues.isPatientConsumptionApplicable}
                onChange={handleInputChange}
              />
              <AadddFormRow
                label="Is Active"
                name="isActive"
                elementType="checkbox"
                checked={formValues.isActive}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        <div className="inventory-aadddFooter">
          <button className="inventory-aadddButton" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
      <Popup open={isSubCategoryModalOpen} onClose={() => setIsSubCategoryModalOpen(false)}>
  <AddItemSubCategory onClose={() => setIsSubCategoryModalOpen(false)} />
</Popup>

      <Popup  open={isUnitModalOpen} onClose={() => setIsUnitModalOpen(false)}>
        <UnitOfMeasurement onClose={() => setIsUnitModalOpen(false)} />
      </Popup>
      <Popup 
        open={isCompanyModalOpen}
        onClose={() => setIsCompanyModalOpen(false)}
      >
        <ItemCompany onClose={() => setIsCompanyModalOpen(false)} />
      </Popup>

      <Popup
      className="Inv-custom-popup"
        open={isPackagingModalOpen}
        onClose={() => setIsPackagingModalOpen(false)}
      >
        <PackagingFile onClose={() => setIsPackagingModalOpen(false)} />
      </Popup>
    </div>
  );
};

// Component to render form rows
const AadddFormRow = ({
  label,
  name,
  value,
  onChange,
  options = [],
  placeholder,
  required,
  elementType = "text",
  error,
  checked,
  onModalOpen,
}) => {
  return (
    <div className="inventory-aadddFormRow">
      <label className="inventory-aadddLabel">
        {label} {required && <span className="inventory-required">*</span>}
      </label>

      {elementType === "checkbox" && (
        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
          className="inventory-aadddCheckbox"
        />
      )}

      {elementType === "text" && (
        <input
          type="text"
          name={name}
          value={value} // Ensure you're using value here for text input
          onChange={onChange}
          placeholder={placeholder} // Optional: add placeholder
          className="inventory-aadddInput" // Changed to a more appropriate class name
        />
      )}

      {/* {["Unit of Measurement", "Item Company", "Packaging Type", "Item Sub Category"].includes(label) && (
        <div className="inventory-aadddInputContainer">
          <input
            type="text"
            name={name}
            value={value} // Use value for the text input
            onChange={onChange}
            placeholder={`Enter ${label}`} // Use label in placeholder
            className="inventory-aadddInput"
          />
          {/* <span className="inventory-aadddSelect-span" onClick={onModalOpen}>
            ?
          </span> */}
        {/* </div>
      )} */}

      {error && <span className="inventory-error">{error}</span>} {/* Optional: display error message */}
    </div>
  );
};

export default AddItem;
