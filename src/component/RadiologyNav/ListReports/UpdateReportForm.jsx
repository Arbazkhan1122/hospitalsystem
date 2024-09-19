import React, { useState, useEffect } from "react";
import "../ListRequest/rdlAddReport.css";

function UpdateReportForm({ onClose, selectedRequest }) {
  const [formData, setFormData] = useState({
    indication: selectedRequest?.indication || "",
    mriNumber: selectedRequest?.mriNumber || "",
    uploadFile: selectedRequest?.uploadFile || "",
    selectedSignatory: selectedRequest?.signatureList,
    patientVisitId: selectedRequest?.patientVisitId || 0,
    patientId: selectedRequest?.patientId || 0,
    prescriberName: selectedRequest?.prescriberName || "",
    imagingTypeId: selectedRequest?.imagingItemId || 0,
    imagingTypeName: selectedRequest?.imagingTypeName || "",
    imagingItemId: selectedRequest?.imagingItemId || 0,
    imagingItemName: selectedRequest?.imagingItemName || "",
    procedureCode: selectedRequest?.procedureCode || "",
    requisitionRemark: selectedRequest?.requisitionRemark || "",
    orderStatus: selectedRequest?.orderStatus || "",
    imagingDate: selectedRequest?.imagingDate || "",
    prescriberId: selectedRequest?.prescriberId || 0,
    billingStatus: selectedRequest?.billingStatus || "",
    urgency: selectedRequest?.urgency || "",
    createdOn: selectedRequest?.createdOn || "",
    createdBy: "",
    modifiedOn: "",
    modifiedBy: "",
    diagnosisId: 0,
    hasInsurance: false,
    wardName: "",
    isActive: true,
    isScanned: false,
    scannedBy: "",
    scannedOn: "",
    scanRemark: "",
    filmType: 0,
    quantity: 0,
    remark: "",
    type: "",
    status: "",
    signatureList: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevState) => ({
      ...prevState,
      imageFile: file,
      imagePreview: URL.createObjectURL(file),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { imageFile, ...restData } = formData;
    const formDataToSend = new FormData();
    formDataToSend.append("file", imageFile);
    formDataToSend.append("requisition", JSON.stringify(restData));

    fetch(
      `http://localhost:8888/api/patient-imaging-requisitions/update/${selectedRequest?.id}`,
      {
        method: "PUT",
        body: formDataToSend,
      }
    )
      .then((response) => {
        if (!response.ok)
          throw new Error(`HTTP error! Status: ${response.status}`);
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
      <h2>Update Report of USG Chest (X-RAY)</h2>
      <div className="rDLListRequest-add-report-patient-info">
        {/* Display patient information */}
        <div className="rDLListRequest-add-report-info-row">
          <span>
            <strong>Patient Name:</strong>{" "}
            {selectedRequest?.firstName + " " + selectedRequest?.lastName ||
              "N/A"}
          </span>
          <span>
            <strong>Prescriber:</strong>{" "}
            <input
              type="text"
              name="prescriberName"
              value={selectedRequest?.prescriberDTO?.employeeName || "self"}
              onChange={handleChange}
            />
          </span>
        </div>
        <div className="rDLListRequest-add-report-info-row">
          <span>
            <strong>Address:</strong>{" "}
            {selectedRequest?.addresses?.street1 +
              ", " +
              selectedRequest?.addresses?.street2 +
              " ," +
              selectedRequest?.addresses?.city || "N/A"}{" "}
          </span>
          <span>
            <strong>Phone No:</strong> {selectedRequest?.phoneNumber || "N/A"}
          </span>
          <span>
            <strong>Scanned On:</strong> {selectedRequest?.scannedOn || "N/A"}
          </span>
        </div>
      </div>
      <div className="rDLListRequest-add-report-report-details">
        <div className="rDLListRequest-add-report-info-row">
          <span>
            <strong>Report Template:</strong> USG Chest{" "}
            {/* <a href="#" className="rDLListRequest-add-report-link">
              Select Different Template?
            </a>
          </span>
          <span>
            <a href="#" className="rDLListRequest-add-report-link">
              Select DICOM Images?
            </a> */}
          </span>
        </div>
        <div className="rDLListRequest-add-report-info-row">
          <span>
            <strong>Indication:</strong>{" "}
            <input
              type="text"
              name="indication"
              placeholder="Indication"
              value={selectedRequest?.indication}
              onChange={handleChange}
            />
          </span>
          <span>
            <strong>MRI/CT/X-ray No:</strong>{" "}
            <input
              type="text"
              name="mriNumber"
              placeholder="MRI/CT/X-ray Number"
              value={selectedRequest?.mriNumber}
              onChange={handleChange}
            />
          </span>
        </div>
      </div>
      <div className="rDLListRequest-add-report-text-editor">
        <div className="rDLListRequest-add-report-toolbar">
          {/* Add toolbar buttons here */}
        </div>
        <textarea
          rows="10"
          name="remark"
          className="rDLListRequest-add-report-textarea"
          value={selectedRequest?.remark}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="rDLListRequest-add-report-form-actions">
        <div className="rDLListRequest-add-report-select-signatories">
          <strong>Select Signatories:</strong>
          <select
            name="selectedSignatory"
            value={formData.selectedSignatory}
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
          {selectedRequest?.uploadFile && (
            <div className="rDLListRequest-add-report-image-preview">
              <img
                src={`data:image/jpeg;base64,${selectedRequest?.uploadFile}`}
                alt="Image preview"
                width={"300px"}
              />
            </div>
          )}
        </div>
        <div className="rDLListRequest-add-report-submit-actions">
          <button
            className="rDLListRequest-add-report-save-btn"
            onClick={handleSubmit}
          >
            Save
          </button>
          <button
            className="rDLListRequest-add-report-submit-print-btn"
            onClick={handleSubmit}
          >
            Submit & Print
          </button>
        </div>
      </div>
    </div>
  );
}

export default UpdateReportForm;
