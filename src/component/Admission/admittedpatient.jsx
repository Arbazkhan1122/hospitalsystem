import React, { useState, useEffect, useRef } from 'react';
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
  const patientDataRef = useRef();

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
      <main className="adt-main">
        <div className='admitedmain-div' style={{display:"flex", gap:"500px",padding:"10px",alignItems:"center"}}>
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
          <table className='admittedtable'>
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
          </table>
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




// import React, { useState, useEffect } from 'react';


// function Admission() {


//   const [CurrentAdmission, setCurrentAdmission] = useState({
//     ClaimCode: '',
//     Ins_HasInsurance: false,
//     Ins_NshiNumber: '',
//     Ins_InsuranceBalance: 0,
//     AdmissionValidator: false,
//     // Add more fields as required
// });

// const [deptList, setDeptList] = useState([
//   { id: 1, name: 'Department 1' },
//   { id: 2, name: 'Department 2' },
//   { id: 3, name: 'Department 3' },
// ]);
// const [selectedPerformer, setSelectedPerformer] = useState('');
//     const [performerList, setPerformerList] = useState([
//         { id: 1, name: 'Performer 1' },
//         { id: 2, name: 'Performer 2' },
//         { id: 3, name: 'Performer 3' },
//     ]);

// const [showInsuranceCheckBox, setShowInsuranceCheckBox] = useState(false);
//   const [schemePriceCategoryFromVisit, setSchemePriceCategoryFromVisit] = useState({});
  
//   const [claimCodeType, setClaimCodeType] = useState('');
//   const [claimCode, setClaimCode] = useState(CurrentAdmission.ClaimCode);
//   const [isDirty, setIsDirty] = useState(false);
//   const [isValid, setIsValid] = useState(true);
//   const [admissionCase, setAdmissionCase] = useState('');
//   const [admissionCases, setAdmissionCases] = useState([]);
//   const [filteredOptions, setFilteredOptions] = useState([]);
//   const [selectedDept, setSelectedDept] = useState('');
//   const handleClaimCodeChange = (event) => {
//     setClaimCode(event.target.value);
//   };
//   const items = ['Item1', 'Item2', 'Item3'];
//   const formattedItems = myListFormatter(items);

//   const [docList, setDocList] = useState([
//     { id: 1, name: 'Document 1' },
//     { id: 2, name: 'Document 2' },
//     { id: 3, name: 'Document 3' },
// ]);
// const [filteredDocList, setFilteredDocList] = useState([]);

// useEffect(() => {
//     // Example filtering logic
//     const filtered = docList.filter(doc => doc.name.includes('1'));
//     setFilteredDocList(filtered);
// }, [docList]);

//   const handleClaimCodeTypeChange = (event) => {
//     setClaimCodeType(event.target.value);
//     GetClaimCode();
//   };

//   const handleAdmissionCaseChange = (event) => {
//     setAdmissionCase(event.target.value);
//   };

//   const GetClaimCode = () => {
//     // Implement your GetClaimCode logic here
//   };

//   const parseAmount = (amount) => {
//     // Implement your amount parsing logic here
//     return amount; // Placeholder return
//   };

//   const handleDeptChange = (event) => {
//     setSelectedDept(event.target.value);
// };
// const handleDeptSelect = (event) => {
//   setSelectedDept(event.target.value);
// };

// const handleDeptBlur = (event) => {
//   console.log('Dropdown lost focus');
//   // You can add any logic you want to execute when the dropdown loses focus
// };

// const handlePerformerSelect = (event) => {
//   setSelectedPerformer(event.target.value);
// };

// const handlePerformerChange = (event) => {
//   setSelectedPerformer(event.target.value);
// };

//     const handleInputChange = (event) => {
//         const inputValue = event.target.value;
//         onChange(event);

//         const filtered = options.filter(option =>
//             option.toLowerCase().includes(inputValue.toLowerCase())
//         );
//         setFilteredOptions(filtered);
//     };

//     const handlePerformerBlur = () => {
//       // Logic for handling blur event
//       console.log('Performer input lost focus');
//   };

//   const myListFormatter = (list) => {
//     return list.map(item => `Formatted: ${item}`);
// };

//   return (
//     <div className="">
//       <div className="col-md-6">
//         {showInsuranceCheckBox && (
//           <form className="form-horizontal hm-form">
//             <div className="form-body">
//               <div className="form-group">
//                 <label className="control-label col-md-5" style={{ color: 'orange' }} htmlFor="isGovInsuranceAdmission">
//                   Is Insurance admission? :
//                 </label>
//                 <div className="col-md-6">
//                   <input
//                     id="isGovInsuranceAdmission"
//                     style={{ zoom: 1.5, height: 'auto', marginLeft: '10px' }}
//                     name="isGovInsuranceAdmission"
//                     type="checkbox"
//                     value=""
//                     onChange={GovInsuranceAdmissionChange}
//                     checked={isGovInsuranceAdmission}
//                   />
//                 </div>
//               </div>
//             </div>
//           </form>
//         )}

//         {CurrentAdmission.Ins_HasInsurance && (
//           <form className="form-horizontal hm-form">
//             <div className="form-body">
//               <div className="form-group">
//                 <label className="control-label col-md-5" style={{ fontSize: 20, fontWeight: 'bold' }}>
//                   {GeneralFieldLabel.NSHINo}:
//                 </label>
//                 <label className="control-label col-md-6" style={{ fontSize: 20, fontWeight: 'bold' }}>
//                   {CurrentAdmission.Ins_NshiNumber}
//                 </label>
//               </div>
//             </div>
//           </form>
//         )}

//         <form className="form-horizontal hm-form">
//           <div className="form-group">
//             <label className="control-label col-md-5">
//               Claim code<sup className="color-red">*</sup>:
//             </label>
//             <div className="col-md-6">
//               <input
//                 id="ClaimCode"
//                 style={{ color: 'darkgreen', fontWeight: 'bold', fontSize: '20px', width: '147px' }}
//                 disabled
//                 className="form-control"
//                 type="text"
//                 value={claimCode}
//                 onChange={handleClaimCodeChange}
//                 placeholder="Claim Code"
//               />
//               <div className="tooltip list-tooltip" style={{ paddingLeft: '5px' }}>
//                 <span className="fa fa-info info-icon-wrapper"></span>
//                 <p className="tooltiptext ttptextdown no-print">Actual ClaimCode may be different than this after Save</p>
//               </div>
//               {isDirty && !isValid && <span className="color-red font-sm">Claim code is required.</span>}
//             </div>
//           </div>

//           <div className="form-body">
//             <div className="form-group">
//               <label className="control-label col-md-5" style={{ fontSize: '20px' }}>
//                 <b>Claim Code Type</b>
//               </label>
//               <div className="control-label col-md-6" style={{ fontSize: '20px' }}>
//                 <div className="input-group">
//                   <div className="icheck-inline">
//                     <label className="mt-checkbox mt-checkbox-outline mapped mapped-outline">
//                       <input
//                         name="claimCodeType"
//                         type="radio"
//                         value="new"
//                         checked={claimCodeType === 'new'}
//                         onChange={handleClaimCodeTypeChange}
//                       />
//                       <span></span>
//                       <b> New Code </b>
//                     </label>
//                     <label className="mt-checkbox mt-checkbox-outline mapped mapped-outline">
//                       <input
//                         name="claimCodeType"
//                         type="radio"
//                         value="old"
//                         checked={claimCodeType === 'old'}
//                         onChange={handleClaimCodeTypeChange}
//                       />
//                       <span></span>
//                       <b> Last Code </b>
//                     </label>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </form>

//         <form className="form-horizontal hm-form">
//           <div className="form-group">
//             <label className="control-label col-md-5">
//               Insurance Balance Amt<sup className="color-red">*</sup>:
//             </label>
//             {CurrentAdmission.AdmissionValidator && (
//               <label className="control-label col-md-6" style={{ fontSize: 20, color: 'darkgreen' }}>
//                 {parseAmount(CurrentAdmission.Ins_InsuranceBalance)}
//               </label>
//             )}
//           </div>
//         </form>

//         <form className="form-horizontal hm-form">
//           <div className="form-body">
//             <div className="form-group">
//               <label className="control-label col-md-5" htmlFor="admissionCase">
//                 Case<sup className="color-red">*</sup>:
//               </label>
//               <div className="col-md-6">
//                 <select
//                   id="admissionCase"
//                   value={admissionCase}
//                   onChange={handleAdmissionCaseChange}
//                   className="form-control"
//                 >
//                   <option value="">--Select--</option>
//                   {admissionCases.map((caseItem) => (
//                     <option key={caseItem.Name} value={caseItem.Name}>
//                       {caseItem.Name}
//                     </option>
//                   ))}
//                 </select>
//                 {isDirty && !isValid && <span className="color-red font-sm">Select Admission Case</span>}
//               </div>
//             </div>
//           </div>
//         </form>
//         <form className="form-horizontal hm-form">
//       <div className="form-body">
//         <div className="form-group">
//           <label className="control-label col-md-5">
//             Requesting Department<sup>*</sup>:
//           </label>
//           <div className="col-md-6">
//             <input
//               id="RequestingDeptId"
//               className="form-control"
//               value={selectedDept}
//               onChange={handleDeptChange}
//               onSelect={handleDeptSelect}
//               onBlur={handleDeptBlur}
             
//               list={deptList}
//               placeholder="Enter Department Name"
//               displayPropertyName="Value"
//               minChars={1}
//               maxNumList={10}
//               matchFormatted={true}
//               gridSort="Value"
//             />
//             {isDirty && !isValid && (
//               <span className="color-red font-sm">
//                 Select Admitting Department
//               </span>
//             )}
//           </div>
//         </div>
//       </div>
//     </form>
//     <form className="form-horizontal hm-form">
//       <div className="form-body">
//         <div className="form-group">
//           <label className="control-label col-md-5">
//             Admitting Doctor<sup
//               ngIf="AdmittingDoctorMandatory">*</sup>:
//           </label>
//           <div className="col-md-6">
//             <input
//               id="AdmittingDoctorId"
//               className="form-control"
//               value={selectedPerformer}
//               onChange={handlePerformerChange}
//               onSelect={handlePerformerSelect}
//               onBlur={handlePerformerBlur}
              
//               list={filteredDocList}
//               placeholder="Enter Doctor Name"
//               displayPropertyName="Value"
//               minChars={1}
//               maxNumList={10}
//               matchFormatted={true}
//               gridSort="Value"
//               valuePropertyName={null}
//               listFormatter={myListFormatter}
//             />
//             {AdmittingDoctorMandatory && isDirty && !isValid && (
//               <span className="color-red font-sm">Select Admitting Doctor</span>
//             )}
//           </div>
//         </div>
//       </div>
//     </form>
//       </div>
//     </div>
//   );
// }

// export default Admission;
