/* // neha-ADT-admittedpatient-19/09/24 */
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './AdmittedPatient.css';
import { FaSearch } from 'react-icons/fa';
import { Modal, Button, Form, Row, Col, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { startResizing } from '../../TableHeadingResizing/ResizableColumns';

const AdmittedPatient = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [patients, setPatients] = useState([]);
  const patientDataRef = useRef();
  const tableRef = useRef(null);
  const [columnWidths, setColumnWidths] = useState(0);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

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

  const handlePrint = () => {
    const printContent = patientDataRef.current.innerHTML;
    const printWindow = window.open('', '', 'height=500, width=800');
    printWindow.document.write('<html><head><title>Print Patient Data</title>');
    printWindow.document.write('</head><body>');
    printWindow.document.write(printContent);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
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

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleSubmit = () => {
    console.log('Start Date:', startDate);
    console.log('End Date:', endDate);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:1415/api/admissions/fetch');
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
                      <button onClick={handleShow} className='admitbtn'>Transfer</button>
                      <button onClick={handlePrint} className='admitbtn'>Print</button>
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
     

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Transfer Admission</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col>
                <Form.Group controlId="formDepartment">
                  <Form.Label>Department</Form.Label>
                  <Form.Control
                    type="text"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    placeholder="Enter department"
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formPrimaryDoctor">
                  <Form.Label>Primary Doctor</Form.Label>
                  <Form.Control
                    type="text"
                    name="primaryDoctor"
                    value={formData.primaryDoctor}
                    onChange={handleChange}
                    placeholder="Enter primary doctor"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="formSecondaryDoctor">
                  <Form.Label>Secondary Doctor</Form.Label>
                  <Form.Control
                    type="text"
                    name="secondaryDoctor"
                    value={formData.secondaryDoctor}
                    onChange={handleChange}
                    placeholder="Enter secondary doctor"
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formWard">
                  <Form.Label>Ward</Form.Label>
                  <Form.Control
                    type="text"
                    name="ward"
                    value={formData.ward}
                    onChange={handleChange}
                    placeholder="Enter ward"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="formBedFeature">
                  <Form.Label>Bed Feature</Form.Label>
                  <Form.Control
                    type="text"
                    name="bedFeature"
                    value={formData.bedFeature}
                    onChange={handleChange}
                    placeholder="Enter bed feature"
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formPrice">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    placeholder="Enter price"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="formBed">
                  <Form.Label>Bed</Form.Label>
                  <Form.Control
                    type="text"
                    name="bed"
                    value={formData.bed}
                    onChange={handleChange}
                    placeholder="Enter bed"
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formTransferDate">
                  <Form.Label>Transfer Date</Form.Label>
                  <Form.Control
                    type="date"
                    name="transferDate"
                    value={formData.transferDate}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="formTransferRemarks">
                  <Form.Label>Transfer Remarks</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="transferRemarks"
                    value={formData.transferRemarks}
                    onChange={handleChange}
                    placeholder="Enter remarks"
                  />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handlemodelSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AdmittedPatient;


