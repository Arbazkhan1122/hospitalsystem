/* // neha-ADT-admittedpatient-19/09/24 */
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './AdmittedPatient.css';
import { FaSearch } from 'react-icons/fa';
import { Modal, Button, Form, Row, Col, Table, ModalDialog } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { startResizing } from '../../TableHeadingResizing/ResizableColumns';
import { API_BASE_URL } from '../api/api';
import WardTransfer from './WardTransfer';
import CustomModal from '../Inventory1/CustomModel/CustomModal';
import PatientCard from './PatientCard';

const AdmittedPatient = () => {
  const [showPrint,setShowPrint] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [patients, setPatients] = useState([]);
  const [selectPatient,setSelectPatient] = useState({});
  const patientDataRef = useRef();
  const tableRef = useRef(null);
  const [columnWidths, setColumnWidths] = useState(0);

  const handleShow = (item) => {
    setSelectPatient(item);
    setShowModal(true)
  };
  const handleClose = () => {setShowModal(false)
    setShowPrint(false);
  };

  const [formData, setFormData] = useState({
    department: '',
    primaryDoctor: 'Mrs. BRENDA MWANIA WANJIRU',
    secondaryDoctor: '',
    ward: '',
    bedFeature: '',
    price: '0',
    bed: '',
    transferDate: '',
    transferRemarks: '',
  });

  const handlePrint = (item) => {
    setSelectPatient(item)
    setShowPrint(true)
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handledropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handlemodelSubmit = () => {
    console.log(formData);
    handleClose();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/admissions/fetch`);
        setPatients(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="adt-app-container">
          <div className="adt-search-container">
            <input
              type="text"
              placeholder="Search by Hospitalno/IpNumber/PatientName"
              className="admitted-search-input"
            />
            <button className='admitpatient-export-container-button'>Print</button>
          </div>
        <div className="table-container">
          <table ref={tableRef}>
            <thead>
              <tr>
             { [
                  'Refund Date',
                  'Recipt No',
                  'Scheme',
                  'Hospital No',
                  'Patient',
                  'Age/Sex',
                  'Inpatient No',
                  'Refund Amount',
                  'Entered By',
                  'Remarks',
                  'Action'
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
                      onMouseDown={startResizing(tableRef, setColumnWidths)(index)}
                    ></div>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
            <tbody>
              {patients.map((patient, index) => (
                <tr key={index}>
                  <td>{patient.admissionDate || 'N/A'}</td>
                  <td >{patient.price || 'N/A'}</td>
                  <td >{patient.caseType || 'N/A'}</td>
                  <td >{patient.patientDTO?.hospitalNo || 'N/A'}</td>
                  <td>{`${patient.patientDTO?.firstName || ''} ${patient.patientDTO?.lastName || ''}`}</td>
                  <td >{`${patient.patientDTO?.age || 'N/A'}/${patient.patientDTO?.gender || 'N/A'}`}</td>
                  <td >{patient.manageBedDTO?.bedNumber || 'N/A'}</td>
                  <td >${patient.price || 'N/A'}</td>
                  <td >{patient.admittedDoctorDTO?.firstName || 'N/A'}</td>
                  <td >{patient.admissionNotes || 'N/A'}</td>
                  <td >
                    <div className="admit-actions">
                      <button onClick={()=>handleShow(patient)} className='admitbtn'>Transfer</button>
                      <button onClick={()=>handlePrint(patient)} className='admitbtn'>Print</button>
                      <select id="admitpatient-dropdown" value={selectedOption} onChange={handledropdownChange} className='admitbtn-select'>
                        <option value="">Select...</option>
                        <option value="PrintWristband">Print Wristband</option>
                        <option value="BillHistory">Bill History</option>
                        <option value="ChangeDoctor">Change Doctor</option>
                        <option value="PrintGenericStickers">Print Generic Stickers</option>
                        <option value="Change Bed Feature">Change Bed Feature</option>
                        <option value="Cancel Admission">Cancel Admission</option>
                        <option value="ChangeDoctor">Admission Slip</option>
                      </select>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <CustomModal isOpen={showPrint} onClose={handleClose}>
          <PatientCard patient={selectPatient}/>
      </CustomModal>
        <CustomModal isOpen={showModal} onClose={handleClose}>
        <WardTransfer patient={selectPatient} />
      </CustomModal>
    </div>
  );
};

export default AdmittedPatient;


