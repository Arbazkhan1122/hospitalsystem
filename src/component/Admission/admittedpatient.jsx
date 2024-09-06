import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdmittedPatient.css';
import { FaSearch } from 'react-icons/fa';
import { Modal, Button, Form, Row, Col, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const AdmittedPatient = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state

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
    const printContent = document.getElementById('patient-table').innerHTML;
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
        setLoading(true);
        const response = await axios.get('http://192.168.1.39:1415/api/admissions/fetch');
        if (Array.isArray(response.data)) {
          setPatients(response.data);
        } else {
          setPatients([response.data]); // If it's a single object, wrap it in an array
        }
      } catch (error) {
        setError('Error fetching data. Please try again later.');
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading data...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="adt-app-container">
      <main className="adt-main">
        <div className='admitedmain-div' style={{ display: "flex", gap: "500px", padding: "10px", alignItems: "center" }}>
          <div className="adt-search-container">
            <input
              type="text"
              placeholder="Search by Hospitalno/IpNumber/PatientName"
              className="admitted-search-input"
            />
            <button className='adt-admitted-patient-icon-btn'> <FaSearch style={{ color: 'gray', fontSize: '18px' }} /></button>

            <footer className="admitpatient-footer">
              <div className="admitpatient-results-container">
                <span className="admitpatient-results-container-span">Showing {patients.length}/{patients.length} results</span>
              </div>
              <div className="admitpatient-export-container">
                <button className='admitpatient-export-container-button'>Print</button>
              </div>
            </footer>
          </div>
        </div>

        <div className="adt-admitted-ptient-table-container">
          <Table className='admittedtable' id="patient-table">
            <thead>
              <tr>
                <th className='admittedtablehead'>Refund Date</th>
                <th className='admittedtablehead'>Recipt No</th>
                <th className='admittedtablehead'>Scheme</th>
                <th className='admittedtablehead'>Hospital No</th>
                <th className='admittedtablehead'>Patient</th>
                <th className='admittedtablehead'>Age/Sex</th>
                <th className='admittedtablehead'>Inpatient No</th>
                <th className='admittedtablehead'>Refund Amount</th>
                <th className='admittedtablehead'>Entered By</th>
                <th className='admittedtablehead'>Remarks</th>
                <th className='admittedtablehead'>Action</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient, index) => (
                <tr key={index}>
                  <td className='admittedtabledata'>{patient.admissionDate || 'N/A'}</td>
                  <td className='admittedtabledata'>{patient.price || 'N/A'}</td>
                  <td className='admittedtabledata'>{patient.caseType || 'N/A'}</td>
                  <td className='admittedtabledata'>{patient.patientDTO?.hospitalNo || 'N/A'}</td>
                  <td className='admittedtabledata'>{`${patient.patientDTO?.firstName || ''} ${patient.patientDTO?.lastName || ''}`}</td>
                  <td className='admittedtabledata'>{`${patient.patientDTO?.age || 'N/A'}/${patient.patientDTO?.gender || 'N/A'}`}</td>
                  <td className='admittedtabledata'>{patient.manageBedDTO?.bedNumber || 'N/A'}</td>
                  <td className='admittedtabledata'>${patient.price || 'N/A'}</td>
                  <td className='admittedtabledata'>{patient.admittedDoctorDTO?.firstName || 'N/A'}</td>
                  <td className='admittedtabledata'>{patient.admissionNotes || 'N/A'}</td>
                  <td className='admittedtabledata'>
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
          </Table>
        </div>
      </main>

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
