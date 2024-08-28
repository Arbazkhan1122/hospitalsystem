import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Nursing/InPatientMainContent.css';
import { useNavigate } from 'react-router-dom';
import { Modal, Button, Form, Table, Row, Col } from 'react-bootstrap';

function MainContent() {


    
      const [showConsumtion, setShowConsumption] = useState(false);
      const [secondaryDoctor, setSecondaryDoctor] = useState('');
  const [ward, setWard] = useState('');
  const [bedFeature, setBedFeature] = useState('');
  const [bed, setBed] = useState('');
  const [transferDate, setTransferDate] = useState('');
  const [transferRemarks, setTransferRemarks] = useState('');



  const handleCloseConsumption = () => setShowConsumption(false);
  const handleShowConsumption = () => setShowConsumption(true);

  const [showWard, setShowWard] = useState(false);

  const handleCloseWard = () => setShowWard(false);
  const handleShowWard = () => setShowWard(true);

  const [showTransfer, setShowTransfer] = useState(false);

  const handleCloseTransfer = () => setShowTransfer(false);
  const handleShowTransfer = () => setShowTransfer(true);



    const patientsDetail = [
        {
          "SN": 1,
          "Unit/Address": "Unit A, Room 101",
          "Bed Strength": 4,
          "Age/Sex": "65/M",
          "DOA(HD)": "2024-08-20",
          "DOD(BS)": "2024-08-22",
          "Diagnosis": "Hypertension",
          "Remarks": "Stable condition"
        },
        {
          "SN": 2,
          "Unit/Address": "Unit B, Room 202",
          "Bed Strength": 2,
          "Age/Sex": "72/F",
          "DOA(HD)": "2024-08-18",
          "DOD(BS)": "2024-08-21",
          "Diagnosis": "Diabetes",
          "Remarks": "Needs regular insulin check"
        },
        {
          "SN": 3,
          "Unit/Address": "Unit C, Room 303",
          "Bed Strength": 1,
          "Age/Sex": "58/M",
          "DOA(HD)": "2024-08-15",
          "DOD(BS)": "2024-08-19",
          "Diagnosis": "Asthma",
          "Remarks": "Improving"
        }
      ];

      const handleTransfer = () => {
        // Logic to handle the transfer action
        console.log({
          secondaryDoctor,
          ward,
          bedFeature,
          bed,
          transferDate,
          transferRemarks,
        });
    }


    const [activeTab, setActiveTab] = useState('My Patients'); // Default tab
    const [patients, setPatients] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch data from the API when the component mounts
        axios.get('http://localhost:8989/api/patients/getAllPatients')
            .then(response => {
                setPatients(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the data!', error);
            });
    }, []);

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };
    

    const filteredPatients = patients.filter(patient => 
        (patient.name && patient.name.tostring().toLowerCase().includes(searchTerm.toString().toLowerCase())) ||
        (patient.phoneNumber && patient.phoneNumber.includes(searchTerm))
    );

    return (
        <>
            <div className="inpatient-component-container">
                <button 
                    className={`inpatient-component-tab ${activeTab === 'My Patients' ? 'active' : ''}`} 
                    onClick={() => handleTabClick('My Patients')}
                >
                    My Patients
                </button>
                <button 
                    className={`inpatient-component-tab ${activeTab === 'All Patients' ? 'active' : ''}`} 
                    onClick={() => handleTabClick('All Patients')}
                >
                    All Patients
                </button>
                <button 
                    className={`inpatient-component-tab ${activeTab === 'Consumptions' ? 'active' : ''}`} 
                    onClick={() => handleTabClick('Consumptions')}
                >
                    Consumptions
                </button>
                <button 
                    className={`inpatient-component-tab ${activeTab === 'Diet Sheet' ? 'active' : ''}`} 
                    onClick={() => handleTabClick('Diet Sheet')}
                >
                    Diet Sheet
                </button>
            </div>

            {activeTab === 'My Patients' && (
                <div className="MyPatientsTable-tableContainer">
                    <div className='Nephrology-Header'>
                        <input 
                            type='text' 
                            placeholder='Search' 
                            className='Nephrology-searchInput'
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <div className="Nephrology-actions">
                            <span className="Nephrology-results">Showing {filteredPatients.length}/{patients.length} results</span>
                            <button className="Nephrology-button">Export</button>
                            <button className="Nephrology-button">Print</button>
                        </div>
                    </div>

                    <table className="MyPatientsTable-patientsTable">
                        <thead>
                            <tr>
                                <th>Admitted Date</th>
                                <th>Doctor Name</th>
                                <th>Hospital Num</th>
                                <th>IP Number</th>
                                <th>Name</th>
                                <th>Phone Number</th>
                                <th>Age/Sex</th>
                                <th>Bed Detail</th>
                                <th>Scheme</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredPatients.map((patient, index) => (
                                <tr key={index} className="TableRow-tableRow">
                                    <td>{patient.admittedDate} 1/15/2024 03:30:45</td>
                                    <td>{patient.doctorName}Aashish Sharma</td>
                                    <td>{patient.hospitalNo}234567</td>
                                    <td>{patient.ipNumber}#A1234</td>
                                    <td>{patient.firstName} {patient.lastName}</td>
                                    <td>{patient.phoneNumber}</td>
                                    <td>{patient.age}/{patient.gender}</td>
                                    <td>{patient.bedDetail}Ward No</td>
                                    <td>{patient.scheme}General</td>
                                    <td>
                                    <div className="Actions-actions">
                                            <button className="Actions-btn Actions-consumption"onClick={handleShowConsumption}>Consumption</button>
                                            <button className="Actions-btn Actions-wardRequest" onClick={handleShowWard}>Ward Request</button>
                                            <button className="Actions-btn Actions-transfer" onClick={handleShowTransfer}>Transfer</button>
                                            <button className="Actions-btn Actions-vitals">Vitals</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {activeTab === 'All Patients' && (
                <div className="MyPatientsTable-tableContainer">
                    <div className='Nephrology-Header'>
                        <input 
                            type='text' 
                            placeholder='Search' 
                            className='Nephrology-searchInput'
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <div className="Nephrology-actions">
                            <span className="Nephrology-results">Showing {filteredPatients.length}/{patients.length} results</span>
                            <button className="Nephrology-button">Export</button>
                            <button className="Nephrology-button">Print</button>
                        </div>
                    </div>

                    <table className="MyPatientsTable-patientsTable">
                        <thead>
                            <tr>
                                <th>Admitted Date</th>
                                <th>Doctor Name</th>
                                <th>Hospital Num</th>
                                <th>IP Number</th>
                                <th>Name</th>
                                <th>Phone Number</th>
                                <th>Age/Sex</th>
                                <th>Bed Detail</th>
                                <th>Scheme</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredPatients.map((patient, index) => (
                                <tr key={index} className="TableRow-tableRow">
                                    <td>{patient.admittedDate}1/15/2024 03:30:45</td>
                                    <td>{patient.doctorName}Shreya Sawant</td>
                                    <td>{patient.hospitalNo}</td>
                                    <td>{patient.ipNumber}#B678</td>
                                    <td>{patient.firstName} {patient.lastName}</td>
                                    <td>{patient.phoneNumber}</td>
                                    <td>{patient.age}/{patient.gender}</td>
                                    <td>{patient.bedDetail}Ward No</td>
                                    <td>{patient.scheme}General</td>
                                    <td>
                                        <div className="Actions-actions">
                                            <button className="Actions-btn Actions-consumption"onClick={handleShowConsumption}>Consumption</button>
                                            <button className="Actions-btn Actions-wardRequest" onClick={handleShowWard}>Ward Request</button>
                                            <button className="Actions-btn Actions-transfer" onClick={handleShowTransfer}>Transfer</button>
                                            <button className="Actions-btn Actions-vitals">Vitals</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {activeTab === 'Consumptions' && (
                <div className="MyPatientsTable-tableContainer">
                    <div className='Nephrology-Header'>
                        <input 
                            type='text' 
                            placeholder='Search' 
                            className='Nephrology-searchInput'
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <div className="Nephrology-actions">
                            <span className="Nephrology-results">Showing 0/0 results</span>
                            <button className="Nephrology-button">Export</button>
                            <button className="Nephrology-button">Print</button>
                        </div>
                    </div>

                    <table className="MyPatientsTable-patientsTable">
                        <thead>
                            <tr>
                                <th>Request Date</th>
                                <th>Hospital Number</th>
                                <th>DialysisCode</th>
                                <th>Patient Name</th>
                                <th>Phone Number</th>
                                <th>Age</th>
                                <th>Sex</th>
                                <th>Service Name</th>
                                <th>Performer Name</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Populate consumptions data here */}
                        </tbody>
                    </table>
                </div>
            )}

         {activeTab === 'Diet Sheet' && (
    <div className="MyPatientsTable-tableContainer">
        <div className='Nephrology-Header'>
            <input 
                type='text' 
                placeholder='Search' 
                className='Nephrology-searchInput'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="Nephrology-actions">
                <span className="Nephrology-results">Showing {patientsDetail.length}/0 results</span>
                <button className="Nephrology-button">Export</button>
                <button className="Nephrology-button">Print</button>
            </div>
        </div>

        <table className="MyPatientsTable-patientsTable">
            <thead>
                <tr>
                    <th>SN</th>
                    <th>Unit/Address</th>
                    <th>Bed Strength</th>
                    <th>Age/Sex</th>
                    <th>DOA(HD)</th>
                    <th>DOD(BS)</th>
                    <th>Diagnosis</th>
                    <th>Remarks</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {patientsDetail.map((patient, index) => (
                    <tr key={patient.id}>
                       <td>{index + 1}</td>
                        <td>{patient["Unit/Address"]}</td>
                        <td>{patient["Bed Strength"]}</td>
                        <td>{patient["Age/Sex"]}</td>
                        <td>{patient["DOA(HD)"]}</td>
                        <td>{patient["DOD(BS)"]}</td>
                        <td>{patient.Diagnosis}</td>
                        <td>{patient.Remarks}</td>
                        <td className="actions">
                            {Array.isArray(patient.actions) && patient.actions.includes('edit') && (
                                <i className="fas fa-edit" onClick={() => handleEdit(patient.id)}></i>
                            )}
                            {Array.isArray(patient.actions) && patient.actions.includes('delete') && (
                                <i className="fas fa-trash" onClick={() => handleDelete(patient.id)}></i>
                            )}
                            <button className='EditButton'>Edit</button>
                        </td>
                        </tr>
                ))}
            </tbody>
        </table>
    </div>
)}


<Modal show={showConsumtion}  onHide={handleCloseConsumption} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>New Consumption Entry</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col md={6}>
                <Form.Group controlId="formPrescriber">
                  <Form.Label>Prescriber:</Form.Label>
                  <Form.Control type="text" placeholder="Enter Name" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formStore">
                  <Form.Label>Store:</Form.Label>
                  <Form.Control type="text" placeholder="Enter Store" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Form.Group>
                  <Form.Label>Hospital No: 2408003807</Form.Label><br></br>
                  <Form.Label className="ml-3">Patient Name: Arbaz s Pathan</Form.Label><br></br>
                  <Form.Label className="ml-3">Age/Sex: 25Y/Male</Form.Label><br></br>
                  <Form.Label className="ml-3">Contact No: 8382838322</Form.Label>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formMembership">
                  <Form.Label>Membership:</Form.Label>
                  <Form.Control as="select">
                    <option>NHIF General</option>
                    {/* Add more options as needed */}
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formPriceCategory">
                  <Form.Label>Price Category:</Form.Label>
                  <Form.Control as="select">
                    <option>Normal</option>
                    {/* Add more options as needed */}
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>

            <Table bordered hover>
              <thead>
                <tr>
                  <th>Generic Name</th>
                  <th>Drug/Medicine Name</th>
                  <th>Expiry</th>
                  <th>Batch</th>
                  <th>AvlQty</th>
                  <th>C. Qty</th>
                  <th>SalePrice</th>
                  <th>SubTotal</th>
                  <th>Disc %</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><Form.Control type="text" placeholder="Generic Name" /></td>
                  <td>
                    <Form.Control as="select">
                      <option>--Select Medicine--</option>
                      {/* Add more options as needed */}
                    </Form.Control>
                  </td>
                  <td><Form.Control type="text" placeholder="0" disabled /></td>
                  <td><Form.Control type="text" placeholder="0" disabled /></td>
                  <td><Form.Control type="text" placeholder="0" disabled /></td>
                  <td><Button variant="secondary">Consur</Button></td>
                  <td><Form.Control type="text" placeholder="0" disabled /></td>
                  <td><Form.Control type="text" placeholder="0" disabled /></td>
                  <td><Form.Control type="text" placeholder="0" disabled /></td>
                  <td><Button variant="success">+</Button></td>
                </tr>
              </tbody>
            </Table>

            <Row>
              <Col md={4}>
                <Form.Group controlId="formSubTotal">
                  <Form.Label>SubTotal Amount:</Form.Label>
                  <Form.Control type="text" placeholder="0" disabled />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="formDiscountAmount">
                  <Form.Label>Discount Amount:</Form.Label>
                  <Form.Control type="text" placeholder="0" disabled />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="formTotalAmount">
                  <Form.Label>Total Amount:</Form.Label>
                  <Form.Control type="text" placeholder="0" disabled />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group controlId="formInWords">
              <Form.Label>In Words:</Form.Label>
              <Form.Control type="text" placeholder="In Words" />
            </Form.Group>
            <Form.Group controlId="formRemarks">
              <Form.Label>Remarks:</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Remarks" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleCloseConsumption}>
            Save Consumption
          </Button>
          <Button variant="danger" onClick={handleCloseConsumption}>
            Discard Changes
          </Button>
        </Modal.Footer>
      </Modal>



      


      <>
    

      <Modal show={showWard} onHide={handleCloseWard} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Ward Request of Arbaz s Pathan</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row className="mb-3">
              <Col md={3}>
                <Form.Label>Ward: Male Ward</Form.Label>
              </Col>
              <Col md={3}>
                <Form.Label>Bed: Male Ward/Male Ward-001</Form.Label>
              </Col>
              <Col md={3}>
                <Form.Label>Admitting Doctor: Mrs. BEATRICE WANGAI MUKOLWE</Form.Label>
              </Col>
              <Col md={3}>
                <Form.Label>Admitted On: 2024-08-24 02:51 PM</Form.Label>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={3}>
                <Form.Group controlId="formMembership">
                  <Form.Label>Membership:</Form.Label>
                  <Form.Control as="select">
                    <option>NHIF General</option>
                    {/* Add more options as needed */}
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group controlId="formPriceCategory">
                  <Form.Label>Price Category:</Form.Label>
                  <Form.Control as="select">
                    <option>Normal</option>
                    {/* Add more options as needed */}
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Label>Credit Limit: Not Specified</Form.Label>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={3}>
                <Form.Group controlId="formDepartment">
                  <Form.Label>Requesting Department:</Form.Label>
                  <Form.Control as="select">
                    <option>NEUROSURGERY</option>
                    {/* Add more options as needed */}
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>

            <Table bordered hover>
              <thead>
                <tr>
                  <th>Department</th>
                  <th>Prescriber</th>
                  <th>Performer</th>
                  <th>Item Name</th>
                  <th>Qty</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Form.Control type="text" placeholder="Enter Department" />
                  </td>
                  <td>
                    <Form.Control type="text" placeholder="Enter Name" />
                  </td>
                  <td>
                    <Form.Control type="text" placeholder="Enter Name" />
                  </td>
                  <td>
                    <Form.Control type="text" placeholder="Enter Item Name" />
                  </td>
                  <td>
                    <Form.Control type="number" min="1" defaultValue="1" />
                  </td>
                  <td>
                    <Form.Control type="text" placeholder="0" disabled />
                  </td>
                </tr>
              </tbody>
            </Table>

            <Row className="mb-3">
              <Col md={4}>
                <Form.Label>Total Amount:</Form.Label>
                <Form.Control type="text" placeholder="0" disabled />
              </Col>
              <Col md={4}>
                <Button variant="primary" className="mt-4">
                  Request
                </Button>
              </Col>
            </Row>
          </Form>

          <h5 className="mt-5">Orders of Arbaz s Pathan</h5>
          <Row className="mb-3">
            <Col md={12}>
              <Form.Control type="text" placeholder="Search" />
            </Col>
          </Row>

          <Table bordered hover>
            <thead>
              <tr>
                <th>Requested Date</th>
                <th>ProvisionalReceiptNo</th>
                <th>Department</th>
                <th>Item Name</th>
                <th>Performer</th>
                <th>Qty</th>
                <th>Sub Total</th>
                <th>Added By</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="10" style={{ backgroundColor: '#FFEB3B', textAlign: 'center' }}>
                  No Rows To Show
                </td>
              </tr>
            </tbody>
          </Table>
        </Modal.Body>
      </Modal>
    </>

    

    <Modal show={showTransfer} onHide={handleCloseTransfer} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Ward Transfer</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>
          {/* {patientData.name} ({patientData.patientId}) */}
          Ashwinee parkar
        </h5>
        <Row>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Requesting Department</Form.Label>
              {/* <Form.Control type="text" value={patientData.department} readOnly /> */}
              <Form.Control type="text" value="ICU" readOnly />
            </Form.Group>
            <Form.Group>
              <Form.Label>Primary Doctor</Form.Label>
              {/* <p>{patientData.primaryDoctor}</p> */}
              <p>Wasim Akhtar</p>
            </Form.Group>
            <Form.Group>
              <Form.Label>Secondary Doctor</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Secondary Doctor Name"
                // value={secondaryDoctor}
                onChange={(e) => setSecondaryDoctor(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Ward</Form.Label>
              <Form.Control
                as="select"
                // value={ward}
                onChange={(e) => setWard(e.target.value)}
              >
                <option value="">Select Ward</option>
                <option value="ward1">Ward 1</option>
                <option value="ward2">Ward 2</option>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Select Bed Feature</Form.Label>
              <Form.Control
                as="select"
                // value={bedFeature}
                onChange={(e) => setBedFeature(e.target.value)}
              >
                <option value="">Select Bed Feature</option>
                <option value="ac">AC</option>
                <option value="non-ac">Non-AC</option>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Price</Form.Label>
              <p>0</p>
            </Form.Group>
            <Form.Group>
              <Form.Label>Select Bed</Form.Label>
              <Form.Control
                as="select"
                // value={bed}
                onChange={(e) => setBed(e.target.value)}
              >
                <option value="">Select Bed</option>
                <option value="bed1">Bed 1</option>
                <option value="bed2">Bed 2</option>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Transfer Date</Form.Label>
              <Form.Control
                type="datetime-local"
                // value={transferDate}
                onChange={(e) => setTransferDate(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Transfer Remarks</Form.Label>
              <Form.Control
                as="textarea"
                rows={2}
                // value={transferRemarks}
                onChange={(e) => setTransferRemarks(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <h6>Admission Records</h6>
            <p>Current Ward/Bed: Male Ward / Male Ward-001</p>
            <h6>Ward History</h6>
            <table className="table">
              <thead>
                <tr>
                  <th>Started on</th>
                  <th>Ended on</th>
                  <th>Ward Name</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2024-08-24 03:10 PM</td>
                  <td>Till now</td>
                  <td>Male Ward</td>
                </tr>
                <tr>
                  <td>2024-08-24 02:51 PM</td>
                  <td>2024-08-24 03:10 PM</td>
                  <td>Private Ward</td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={handleCloseTransfer}>
          Transfer
        </Button>
      </Modal.Footer>
    </Modal>

        </>

        

    );
}

export default MainContent;
