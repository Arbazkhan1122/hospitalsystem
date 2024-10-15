import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./AdmittedPatient.css";
import { FaSearch } from "react-icons/fa";
import {
  Modal,
  Button,
  Form,
  Row,
  Col,
  Table,
  ModalDialog,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { startResizing } from "../../TableHeadingResizing/ResizableColumns";
import { API_BASE_URL } from "../api/api";
import WardTransfer from "./WardTransfer";
import CustomModal from "../Inventory1/CustomModel/CustomModal";
import PatientCard from "./PatientCard";
import PrintWristWindow from "./PrintWristWindow";
import PrintGenericSticker from "./PrintGenericSticker";
import ChangeDoctor from "./ChangeDoctor";
import CancelAdmission from "./CancelAdmission";
import PrintAdmissionSlip from "./PrintAdmissionSlip";

const AdmittedPatient = () => {
  const [showPrint, setShowPrint] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [patients, setPatients] = useState([]);
  const [selectPatient, setSelectPatient] = useState({});
  const tableRef = useRef(null);
  const [columnWidths, setColumnWidths] = useState(0);
  const [showOptionWindow, setShowOptionWindow] = useState(false);

  const handleShow = (item) => {
    setSelectPatient(item);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setShowPrint(false);
    setShowOptionWindow(false);
    setSelectedOption("");
  };

  const handlePrint = (item) => {
    setSelectPatient(item);
    setShowPrint(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/admissions/fetch`);
        setPatients(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [showOptionWindow]);

  // Function to handle dropdown selection
  const handledropdownChange = (event, patient) => {
    const option = event.target.value;
    setSelectedOption(option);
    setSelectPatient(patient);
    setShowOptionWindow(true); // Open modal when option is selected
  };

  // Function to render modal content based on selected option
  const renderModalContent = () => {
    switch (selectedOption) {
      case "PrintWristband":
        return <PrintWristWindow patient={selectPatient} />;
      case "PrintGenericStickers":
        return <PrintGenericSticker patient={selectPatient} />;
      case "ChangeDoctor":
        return (
          <ChangeDoctor
            patient={selectPatient}
            setShowOptionWindow={setShowOptionWindow}
          />
        );
      case "CancelAdmission":
        return (
          <CancelAdmission
            patient={selectPatient}
            setShowOptionWindow={setShowOptionWindow}
          />
        );
      case "AdmissionSlip":
        return (
          <PrintAdmissionSlip
            patient={selectPatient}
            setShowOptionWindow={setShowOptionWindow}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="adt-app-container">
      <div className="adt-search-container">
        <input
          type="text"
          placeholder="Search by Hospitalno/IpNumber/PatientName"
          className="admitted-search-input"
        />
        <button className="admitpatient-export-container-button">Print</button>
      </div>
      <div className="table-container">
        <table ref={tableRef}>
          <thead>
            <tr>
              {[
                "Refund Date",
                "Recipt No",
                "Scheme",
                "Patient",
                "Age/Sex",
                "Inpatient No",
                "Refund Amount",
                "Entered By",
                "Remarks",
                "Action",
              ].map((header, index) => (
                <th
                  key={index}
                  style={{ width: columnWidths[index] }}
                  className="rd-resizable-th"
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
            {patients.map((patient, index) => (
              <tr key={index}>
                <td>{patient.admissionDate || "N/A"}</td>
                <td>{patient.price || "N/A"}</td>
                <td>{patient.caseType || "N/A"}</td>
                <td>{`${patient.patientDTO?.firstName || ""} ${
                  patient.patientDTO?.lastName || ""
                }`}</td>
                <td>{`${patient.patientDTO?.age || "N/A"}/${
                  patient.patientDTO?.gender || "N/A"
                }`}</td>
                <td>{patient.manageBedDTO?.bedNumber || "N/A"}</td>
                <td>${patient.price || "N/A"}</td>
                <td>{patient.admittedDoctorDTO?.firstName || "N/A"}</td>
                <td>{patient.admissionNotes || "N/A"}</td>
                <td>
                  <div className="admit-actions">
                    <button
                      onClick={() => handleShow(patient)}
                      className="admitbtn"
                    >
                      Transfer
                    </button>
                    <button
                      onClick={() => handlePrint(patient)}
                      className="admitbtn"
                    >
                      Print
                    </button>
                    <select
                      id="admitpatient-dropdown"
                      value={selectedOption}
                      onChange={(event) => handledropdownChange(event, patient)}
                      className="admitbtn-select"
                    >
                      <option value="">Select...</option>
                      <option value="PrintWristband">Print Wristband</option>
                      <option value="ChangeDoctor">Change Doctor</option>
                      <option value="PrintGenericStickers">
                        Print Generic Stickers
                      </option>
                      <option value="CancelAdmission">Cancel Admission</option>
                      <option value="AdmissionSlip">Admission Slip</option>
                    </select>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for patient card */}
      <CustomModal isOpen={showPrint} onClose={handleClose}>
        <PatientCard patient={selectPatient} />
      </CustomModal>

      {/* Modal for ward transfer */}
      <CustomModal isOpen={showModal} onClose={handleClose}>
        <WardTransfer patient={selectPatient} setShowModal={setShowModal} />
      </CustomModal>

      {/* Modal for handling dropdown options */}
      <CustomModal isOpen={showOptionWindow} onClose={handleClose}>
        {renderModalContent()}
      </CustomModal>
    </div>
  );
};

export default AdmittedPatient;
