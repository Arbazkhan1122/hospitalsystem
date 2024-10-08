/* Ajhar Tamboli RadiologyReportPopup.jsx 19-09-24 */

import React, { useState, useEffect } from "react";
// import AddReportForm from "./AddReportForm";
import "./RadiologyReport.css";
import UpdateReportForm from "./UpdateReportForm";

const RadiologyReportPopup = ({ onClose, selectedRequest }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [showHeaderImage, setShowHeaderImage] = useState(false);
  const [reportData, setReportData] = useState(null);

  useEffect(() => {
    if (selectedRequest) {
      console.log(selectedRequest);

      setReportData(selectedRequest);
    }
  }, [selectedRequest]);

  const handlePrint = () => {
    const printWindow = window.open("", "", "height=600,width=800");
    printWindow.document.write("<html><head><title>Print Report</title>");
    printWindow.document.write(
      '<link rel="stylesheet" type="text/css" href="./RadiologyReport.css">'
    );
    printWindow.document.write("</head><body>");
    printWindow.document.write(
      document.querySelector(".RadiologyReportPopup-report-content").innerHTML
    );
    printWindow.document.write("</body></html>");
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  };
  //   const handlePrint = () => {
  //     window.print();
  //   };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCheckboxChange = () => {
    setShowHeaderImage(!showHeaderImage);
  };

  const handleFormSubmit = (updatedData) => {
    // Handle form submission logic, e.g., save the updated report
    setReportData(updatedData);
    setIsEditing(false);
  };

  if (!reportData) {
    return null; // Or a loading spinner if needed
  }

  return (
    <>
      {isEditing ? (
        <div className="rDLListRequest-modal-overlay">
          <div className="rDLListRequest-modal-content">
            <button
              className="rDLListRequest-close-modal"
              onClick={() => setIsEditing(false)}
            >
              &times;
            </button>
            <UpdateReportForm selectedRequest={selectedRequest} />
          </div>
        </div>
      ) : (
        <div className="RadiologyReportPopup">
          <div className="RadiologyReportPopup-popup-content">
            <button
              className="RadiologyReportPopup-close-btn"
              onClick={onClose}
            >
              &times;
            </button>
            <h2>Radiology Report</h2>
            <div className="RadiologyReportPopup-actions">
              <button
                className="RadiologyReportPopup-print-report"
                onClick={handlePrint}
              >
                Print Report
              </button>
              <button
                className="RadiologyReportPopup-edit"
                onClick={handleEditClick}
              >
                Edit
              </button>
            </div>

            <div className="RadiologyReportPopup-report-content">
              <div className="RadiologyReportPopup-patient-info">
                <div className="RadiologyReportPopup-patient-info-group">
                  <span>
                    Name:{" "}
                    {reportData.patientDTO?.firstName ||
                      reportData.newPatientVisitDTO?.firstName}{" "}
                    {reportData.patientDTO?.lastName ||
                      reportData.newPatientVisitDTO?.lastName}
                  </span>
                  <span>
                    Age/Sex:{" "}
                    {reportData.patientDTO?.age ||
                      reportData.newPatientVisitDTO?.age}{" "}
                    Y /{" "}
                    {reportData.patientDTO?.gender ||
                      reportData.newPatientVisitDTO?.gender}
                  </span>
                  <span>
                    Rep. Date:{" "}
                    {new Date(reportData.imagingDate).toDateString() || "N/A"}
                  </span>
                </div>
                <div className="RadiologyReportPopup-patient-info-group">
                  <span>
                    Address/Contact No:{" "}
                    {reportData.patientDTO?.address ||
                      reportData.newPatientVisitDTO?.address}
                    /{" "}
                    {reportData.patientDTO?.phoneNumber ||
                      reportData.newPatientVisitDTO?.phoneNumber}
                  </span>
                  <span>
                    Prescriber Name:{" "}
                    {reportData.prescriberDTO?.employeeName || "self"}
                  </span>
                  <span>Date: {reportData.imagingDate}</span>
                </div>
              </div>
              <div className="RadiologyReportPopup-report-body">
                {/* <p>{reportData.reportText || "No report text available"}</p> */}
                {reportData.uploadFile && (
                  <img
                    src={`data:image/jpeg;base64,${reportData?.uploadFile}`}
                    alt="Radiology scan"
                    className="RadiologyReportPopup-image"
                  />
                )}
              </div>
            </div>

            <div className="RadiologyReportPopup-footer-actions">
              <button
                className="RadiologyReportPopup-print-report"
                onClick={handlePrint}
              >
                Print Report
              </button>
              <button className="RadiologyReportPopup-close" onClick={onClose}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RadiologyReportPopup;
