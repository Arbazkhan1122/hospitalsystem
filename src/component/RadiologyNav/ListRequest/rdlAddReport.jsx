import React, { useState, useEffect } from "react";
import "../ListRequest/rdlAddReport.css";

function AddReportForm({ onClose, selectedRequest }) {
  const [formData, setFormData] = useState({
    mriXRayCTNo: "",
    requisitionRemark: "",
    orderStatus: "",
    imagingDate: "",
    urgency: "",
    hasInsurance: false,
    wardName: "",
    isActive: true,
    isScanned: true,
    scannedOn: "",
    scanRemark: "",
    quantity: 0,
    notes: "",
    indication: "",
    type: "",
    status: "",
    signatureList: "",
  });

  console.log(selectedRequest);

  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");

  useEffect(() => {
    if (selectedRequest) {
      setFormData({
        procedureCode: selectedRequest.procedureCode || "",
        requisitionRemark: selectedRequest.requisitionRemark || "",
        orderStatus: selectedRequest.orderStatus || "",
        imagingDate: selectedRequest.imagingDate || "",
        urgency: selectedRequest.urgency || "",
        isActive: selectedRequest.isActive || true,
        isScanned: selectedRequest.isScanned || true,
        scannedOn: selectedRequest.scannedOn || "",
        scanRemark: selectedRequest.scanRemark || "",
        quantity: selectedRequest.quantity || 0,
        indication: selectedRequest.indication || "",
        type: selectedRequest.type || "",
        status: selectedRequest.status || "",
        signatureList: selectedRequest.signatureList || "",
      });
    }
  }, [selectedRequest]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new FormData instance
    const formDataToSend = new FormData();

    // Append file if available
    if (imageFile) {
      formDataToSend.append("file", imageFile);
    }

    // Create a requisition object with only the desired fields
    const requisition = {
      imagingDate: formData.imagingDate
        ? new Date().toISOString().toString()
        : new Date().toISOString().toString(),
      notes: formData.notes,
      indication: formData.indication,
      status: "Completed",
      mriXRayCTNo: formData.mriXRayCTNo,
      signatureList: formData.signatureList,
      performerDTO: {
        employeeId: 2,
      },
    };

    formDataToSend.append("requisition", JSON.stringify(requisition));

    fetch(
      `http://localhost:8888/api/patient-imaging-requisitions/update/${selectedRequest.imagingId}`,
      {
        method: "PUT",
        body: formDataToSend, // Send the FormData object
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Update successful:", data);
        onClose(); // Close the modal on successful update
      })
      .catch((error) => console.error("Error updating report:", error));
  };

  return (
    <div className="rDLListRequest-add-report-form">
      <h2>Add report of USG Chest (X-RAY)</h2>
      <div className="rDLListRequest-add-report-patient-info">
        <div className="rDLListRequest-add-report-info-row">
          <span>
            <strong>Patient Name:</strong>{" "}
            {selectedRequest.patientDTO?.firstName}{" "}
            {selectedRequest.patientDTO?.lastName}
          </span>
          <span>
            <strong>Prescriber:</strong>{" "}
            <input
              type="text"
              name="prescriber"
              disabled="true"
              value={selectedRequest?.prescriberDTO?.employeeName || "self"}
              readOnly
            />
          </span>
        </div>
        <div className="rDLListRequest-add-report-info-row">
          <span>
            <strong>Address:</strong>{" "}
            {selectedRequest.patientDTO?.address || "N/A"}
          </span>
          <span>
            <strong>Phone No:</strong> {selectedRequest.patientDTO?.phoneNumber}
          </span>
          {/* <span>
            <strong>Req. On:</strong>{" "}
            {new Date(formData.createdOn).toLocaleString()}
          </span> */}
          <span>
            <strong>Scanned On:</strong> {formData.scannedOn}
          </span>
        </div>
      </div>
      <div className="rDLListRequest-add-report-report-details">
        {/* <div className="rDLListRequest-add-report-info-row">
          <span>
            <strong>Report Template:</strong> {formData.imagingTypeId}
            <a href="#" className="rDLListRequest-add-report-link">
              Select different template?
            </a>
          </span>
          <span>
            <a href="#" className="rDLListRequest-add-report-link">
              Select Dicom images?
            </a>
          </span>
        </div> */}
        <div className="rDLListRequest-add-report-info-row">
          <span>
            <strong>Indication:</strong>
            <input
              type="text"
              name="indication"
              placeholder="Indication"
              value={formData.indication}
              onChange={handleChange}
            />
          </span>
          <span>
            <strong>MRI/CT/X-ray No:</strong>
            <input
              type="text"
              name="mriXRayCTNo"
              placeholder="MRI/CT/X-ray Number"
              value={formData.mriXRayCTNo}
              onChange={handleChange}
            />
          </span>
        </div>
      </div>
      <div className="rDLListRequest-add-report-text-editor">
        <div className="rDLListRequest-add-report-toolbar">
          {/* Add toolbar buttons here */}
        </div>
        <textarea rows="10" style={{ width: "100%" }} name="notes"></textarea>
      </div>
      <div className="rDLListRequest-add-report-signature-section">
        <div className="rDLListRequest-add-report-signature-box active">
          {formData.signatureList}
        </div>
      </div>
      <div className="rDLListRequest-add-report-form-actions">
        <div className="rDLListRequest-add-report-select-signatories">
          <strong>Select Signatories:</strong>
          <select
            name="signatureList"
            value={formData.signatureList}
            onChange={handleChange}
          >
            <option>DR. ANN NJOKI THIONG'O</option>
            <option>Mr. Immam</option>
            <option>Prof. DR. Suresh</option>
          </select>
        </div>
        <div className="rDLListRequest-add-report-upload-images">
          <strong>Upload Images:</strong>
          <input
            type="file"
            id="file-upload"
            hidden
            onChange={handleFileChange}
          />
          <label
            htmlFor="file-upload"
            className="rDLListRequest-add-report-file-upload-btn"
          >
            Choose Files
          </label>
          {imagePreview && (
            <div className="rDLListRequest-add-report-image-preview">
              <img src={imagePreview} alt="Image preview" />
            </div>
          )}
        </div>
        <div className="rDLListRequest-add-report-form-buttons">
          <button type="button" onClick={onClose}>
            Cancel
          </button>
          <button type="submit" onClick={handleSubmit}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddReportForm;
