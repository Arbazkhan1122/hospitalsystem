// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useForm } from 'react-hook-form'; // or any form library of your choice

// const Admission = () => {
//   const [enableAutoGenerate, setEnableAutoGenerate] = useState(true);
//   const [isGovInsuranceAdmission, setIsGovInsuranceAdmission] = useState(false);
//   const [claimCodeType, setClaimCodeType] = useState("new");
//   const [currentAdmission, setCurrentAdmission] = useState({});
//   const [currentPatientBedInfo, setCurrentPatientBedInfo] = useState({});
//   const [currentBedReservation, setCurrentBedReservation] = useState({});
//   const [doctorList, setDoctorList] = useState([]);
//   const [filteredDocList, setFilteredDocList] = useState([]);
//   const [deptList, setDeptList] = useState([]);
//   const [wardList, setWardList] = useState([]);
//   const [selectedDept, setSelectedDept] = useState('');
//   const [selectedPerformer, setSelectedPerformer] = useState(null);
//   const [reservedBedIdByPat, setReservedBedIdByPat] = useState(null);
//   const [admitDateNP, setAdmitDateNP] = useState(null);
//   const [additionBillItemList, setAdditionBillItemList] = useState([]);
//   const [defaultBillItemList, setDefaultBillItemList] = useState([]);
//   const [currentDeposit, setCurrentDeposit] = useState({});
//   const [loading, setLoading] = useState(false);
//   const [admissionSettings, setAdmissionSettings] = useState({});
//   const [patientId, setPatientId] = useState(null);
//   const [patientVisitId, setPatientVisitId] = useState(null);
//   const [insuranceBalance, setInsuranceBalance] = useState(0);
//   const [admissionCases, setAdmissionCases] = useState([]);
//   const [selectedCase, setSelectedCase] = useState('');
//   const [claimCode, setClaimCode] = useState('');

//   const { register, handleSubmit, setValue, reset } = useForm(); // Initialize form library

//   useEffect(() => {
//     loadParameters();
//     getDocDptAndWardList();
//   }, []);

//   const loadParameters = async () => {
//     try {
//       const response = await axios.get('/api/parameters');
//       const parameters = response.data;

//       const claimCodeParam = parameters.find(parms => parms.ParameterGroupName === 'Insurance' && parms.ParameterName === 'ClaimCodeAutoGenerateSettings');
//       const claimParamObj = JSON.parse(claimCodeParam.ParameterValue);
//       setEnableAutoGenerate(claimParamObj.EnableAutoGenerate);

//       if (isGovInsuranceAdmission) {
//         setCurrentAdmission(prev => ({ ...prev, EnableClaimCodeInput: true }));
//         getClaimCode();
//       } else {
//         setCurrentAdmission(prev => ({ ...prev, EnableClaimCodeInput: false }));
//       }
//     } catch (error) {
//       console.error('Error loading parameters', error);
//     }
//   };

//   const handleGovInsuranceAdmissionChange = () => {
//     setIsGovInsuranceAdmission(!isGovInsuranceAdmission);
//     setCurrentAdmission(prev => ({
//       ...prev,
//       Ins_HasInsurance: !isGovInsuranceAdmission,
//       BillingTransaction: {
//         PaymentMode: 'credit',
//         Remarks: isGovInsuranceAdmission ? 'Government Insurance' : ''
//       }
//     }));
//   };

//   const getClaimCode = async () => {
//     if (claimCodeType === "new") {
//       await getNewClaimCode();
//     } else if (claimCodeType === "old") {
//       await getOldClaimCode();
//     }
//   };

//   const getNewClaimCode = async () => {
//     try {
//       const response = await axios.get('/api/new-claim-code');
//       if (response.data.Status === 'OK') {
//         setClaimCode(response.data.Results);
//         setCurrentAdmission(prev => ({ ...prev, ClaimCode: response.data.Results }));
//       } else {
//         handleError(response.data);
//       }
//     } catch (error) {
//       console.error('Error getting new claim code', error);
//     }
//   };

//   const getOldClaimCode = async () => {
//     try {
//       const response = await axios.get(`/api/old-claim-code/${currentAdmission.PatientId}`);
//       if (response.data.Status === 'OK') {
//         setClaimCode(response.data.Results);
//         setCurrentAdmission(prev => ({ ...prev, ClaimCode: response.data.Results }));
//       } else {
//         handleError(response.data);
//         setClaimCodeType("new");
//         await getNewClaimCode();
//       }
//     } catch (error) {
//       console.error('Error getting old claim code', error);
//     }
//   };

//   const handleError = (data) => {
//     console.error(data.ErrorMessage);
//     alert('Error: ' + data.ErrorMessage);
//   };

//   const getDocDptAndWardList = async () => {
//     try {
//       const response = await axios.get(`/api/doc-dpt-ward-list/${patientId}/${patientVisitId}`);
//       if (response.data.Status === 'OK') {
//         const results = response.data.Results;
//         setDoctorList(results.DoctorList);
//         setFilteredDocList(results.DoctorList);
//         setDeptList(results.DepartmentList);
//         setWardList(results.WardList);
//         setDeptList(prev => [{ Key: 0, Value: 'All' }, ...prev]);

//         if (results.BedReservedForCurrentPat?.ReservedBedInfoId > 0) {
//           setCurrentBedReservation(results.BedReservedForCurrentPat);
//           setParametersFromReservation();
//         }
//       } else {
//         alert('Error: ' + response.data.ErrorMessage);
//       }
//     } catch (error) {
//       console.error('Error getting doctor, department, and ward list', error);
//     }
//   };

//   const setParametersFromReservation = () => {
//     setReservedBedIdByPat(currentBedReservation.BedId);
//     const dept = deptList.find(d => d.Key === currentBedReservation.RequestingDepartmentId);
//     if (dept) {
//       setSelectedDept(dept.Value);
//       setFilteredDocList(doctorList.filter(doc => doc.DepartmentId === dept.Key));
//       const adtDoc = doctorList.find(dc => dc.Key === currentBedReservation.AdmittingDoctorId);
//       if (adtDoc) setSelectedPerformer(adtDoc.Value);
//     }
//     setCurrentPatientBedInfo(prev => ({
//       ...prev,
//       BedFeatureId: currentBedReservation.BedFeatureId,
//       BedId: currentBedReservation.BedId,
//       WardId: currentBedReservation.WardId,
//       RequestingDeptId: currentBedReservation.RequestingDepartmentId,
//       ReservedBedId: currentBedReservation.ReservedBedInfoId
//     }));
//     setCurrentAdmission(prev => ({
//       ...prev,
//       AdmissionDate: currentBedReservation.AdmissionStartsOn,
//       AdmittingDoctorId: currentBedReservation.AdmittingDoctorId
//     }));
//     // Convert date to Nepali calendar format if required
//     // setAdmitDateNP(...);
//   };

//   const handleDeptChange = async (wardId, isFromReservation) => {
//     if (currentBedReservation && !isFromReservation) {
//       setCurrentBedReservation(prev => ({ ...prev, WardId: wardId }));
//       setCurrentPatientBedInfo(prev => ({ ...prev, WardId: wardId }));
//     }
//     try {
//       const response = await axios.get(`/api/available-bed-list/${wardId}`);
//       if (response.data.Status === 'OK') {
//         setCurrentAdmission(prev => ({ ...prev, BedList: response.data.Results }));
//       } else {
//         alert('Error: ' + response.data.ErrorMessage);
//       }
//     } catch (error) {
//       console.error('Error getting available beds', error);
//     }
//   };

//   const admissionSave = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.post('/api/save-admission', currentAdmission);
//       if (response.data.Status === 'OK') {
//         alert('Admission saved successfully');
//         reset(); // Clear the form
//       } else {
//         alert('Error: ' + response.data.ErrorMessage);
//       }
//     } catch (error) {
//       console.error('Error saving admission', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleCheckboxChange = (e) => {
//     setIsGovInsuranceAdmission(e.target.checked);
//     handleGovInsuranceAdmissionChange();
//   };

//   const handleClaimCodeChange = (e) => {
//     setClaimCode(e.target.value);
//   };

//   const handleClaimCodeTypeChange = (e) => {
//     setClaimCodeType(e.target.value);
//     getClaimCode();
//   };

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     if (id === 'RequestingDeptId') {
//       setSelectedDept(value);
//     } else if (id === 'AdmittingDoctorId') {
//       setSelectedPerformer(value);
//     } else if (id === 'admissionCase') {
//       setSelectedCase(value);
//     }
//   };

//   const handleFocusOut = (e) => {
//     // Handle onBlur events
//   };

//   return (
//     <div className="wrapper">
//       <div className="margin-top-10">
//         <div className="caption lb-caption">
//           <span className="caption-subject">
//             <i className="glyphicon glyphicon-asterisk"></i>Create Admission
//           </span>
//         </div>

//         {/* START Scheme Select row */}
//         {(currentAdmission.SchemeId && currentAdmission.PriceCategoryId) || currentAdmission.DisplaySchemePriceCategorySelection ? (
//           <div className="form-group">
//             <div className="col-md-12" style={{ marginBottom: '15px' }}>
//               {/* Replace <registration-scheme-select> with React component */}
//               {/* Assuming `RegistrationSchemeSelect` is a custom React component */}
//               <RegistrationSchemeSelect
//                 onChange={handleSchemePriceCategoryChange}
//                 patientId={currentAdmission.PatientId}
//                 selectedSchemePriceCategory={currentAdmission.SchemePriceCategoryFromVisit}
//                 serviceBillingContext={currentAdmission.serviceBillingContext}
//                 policyNo={currentAdmission.PolicyNo}
//               />
//             </div>
//           </div>
//         ) : null}

//         {isGovInsuranceAdmission && (
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
//                     checked={isGovInsuranceAdmission}
//                     onChange={handleCheckboxChange}
//                   />
//                 </div>
//               </div>
//             </div>
//           </form>
//         )}

//         {currentAdmission.Ins_HasInsurance && (
//           <form className="form-horizontal hm-form">
//             <div className="form-body">
//               <div className="form-group">
//                 <label className="control-label col-md-5" style={{ fontSize: '20px', fontWeight: 'bold' }}>
//                   {GeneralFieldLabel.NSHINo}:
//                 </label>
//                 <label className="control-label col-md-6" style={{ fontSize: '20px', fontWeight: 'bold' }}>
//                   {currentAdmission.Ins_NshiNumber}
//                 </label>
//               </div>
//             </div>
//           </form>
//         )}

//         <form className="form-horizontal hm-form">
//           <div className="form-body">
//             <div className="form-group">
//               <label className="control-label col-md-5">
//                 Claim code<sup className="color-red">*</sup>:
//               </label>
//               <div className="col-md-6">
//                 <div style={{ width: '25%' }}>
//                   <input
//                     id="ClaimCode"
//                     style={{ color: 'darkgreen', fontWeight: 'bold', fontSize: '20px', width: '147px' }}
//                     disabled
//                     className="form-control"
//                     type="text"
//                     value={claimCode}
//                     onChange={handleClaimCodeChange}
//                     placeholder="Claim Code"
//                   />
//                 </div>
//                 <div style={{ width: '20px', paddingLeft: '5px' }}>
//                   <div className="tooltip list-tooltip">
//                     <span className="fa fa-info info-icon-wrapper"></span>
//                     <p className="tooltiptext ttptextdown no-print">
//                       Actual ClaimCode may be different than this after Save
//                     </p>
//                   </div>
//                 </div>
//                 {/* Validate ClaimCode */}
//                 {/* Replace isValid() with appropriate validation logic */}
//                 {isValid('ClaimCode') && (
//                   <span className="color-red font-sm">
//                     Claim code is required.
//                   </span>
//                 )}
//               </div>
//             </div>

//             <div className="form-body">
//               <div className="form-group">
//                 <label className="control-label col-md-5" style={{ fontSize: '20px' }}>
//                   <b></b>
//                 </label>
//                 <div className="control-label col-md-6" style={{ fontSize: '20px' }}>
//                   <div className="input-group">
//                     <div className="icheck-inline">
//                       <label className="mt-checkbox mt-checkbox-outline mapped mapped-outline">
//                         <input
//                           name="claimCodeType"
//                           type="radio"
//                           value="new"
//                           checked={claimCodeType === 'new'}
//                           onChange={handleClaimCodeTypeChange}
//                         />
//                         <span></span> <b>New Code</b>
//                       </label>
//                       <label className="mt-checkbox mt-checkbox-outline mapped mapped-outline">
//                         <input
//                           name="claimCodeType"
//                           type="radio"
//                           value="old"
//                           checked={claimCodeType === 'old'}
//                           onChange={handleClaimCodeTypeChange}
//                         />
//                         <span></span> <b>Last Code</b>
//                       </label>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </form>

//         <form className="form-horizontal hm-form">
//           <div className="form-body">
//             <div className="form-group">
//               <label className="control-label col-md-5">
//                 Insurance Balance Amt<sup className="color-red">*</sup>:
//               </label>
//               <label className="control-label col-md-6" style={{ fontSize: '20px', color: 'darkgreen' }}>
//                 {insuranceBalance}
//               </label>
//             </div>
//           </div>
//         </form>

//         <form className="form-horizontal hm-form">
//           <div className="form-body">
//             <div className="form-group">
//               <label className="control-label col-md-5">
//                 Case <sup className="color-red">*</sup>:
//               </label>
//               <div className="col-md-6">
//                 <select
//                   id="admissionCase"
//                   value={selectedCase}
//                   onChange={handleChange}
//                   className="form-control"
//                 >
//                   <option value="">--Select--</option>
//                   {admissionCases.map(caseItem => (
//                     <option key={caseItem.Name} value={caseItem.Name}>
//                       {caseItem.Name}
//                     </option>
//                   ))}
//                 </select>
//                 {currentAdmission.IsDirty('AdmissionCase') && !currentAdmission.IsValidCheck('AdmissionCase', 'required') && (
//                   <span className="color-red font-sm">Select Admission Case</span>
//                 )}
//               </div>
//             </div>
//           </div>
//         </form>

//         <form className="form-horizontal hm-form">
//           <div className="form-body">
//             <div className="form-group">
//               <label className="control-label col-md-5">
//                 Requesting Department<sup>*</sup>:
//               </label>
//               <div className="col-md-6">
//                 <input
//                   id="RequestingDeptId"
//                   className="form-control"
//                   type="text"
//                   value={selectedDept}
//                   onChange={handleChange}
//                   onBlur={handleFocusOut}
//                   placeholder="Enter Department Name"
//                 />
//               </div>
//             </div>
//           </div>
//         </form>

//         <form className="form-horizontal hm-form">
//           <div className="form-body">
//             <div className="form-group">
//               <label className="control-label col-md-5">
//                 Admitting Doctor
//               </label>
//               <div className="col-md-6">
//                 <input
//                   id="AdmittingDoctorId"
//                   className="form-control"
//                   type="text"
//                   value={selectedPerformer}
//                   onChange={handleChange}
//                   onBlur={handleFocusOut}
//                   placeholder="Enter Doctor Name"
//                 />
//               </div>
//             </div>
//           </div>
//         </form>

//         <button type="button" onClick={handleSubmit(admissionSave)} disabled={loading}>
//           {loading ? 'Saving...' : 'Save Admission'}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Admission;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import './admission.css';


// Dummy Data
const dummyDoctorList = [
  { Key: 1, Value: 'Dr. Smith', DepartmentId: 1 },
  { Key: 2, Value: 'Dr. Jones', DepartmentId: 2 }
];

const dummyDeptList = [
  { Key: 1, Value: 'Cardiology' },
  { Key: 2, Value: 'Neurology' }
];

const dummyWardList = [
  { Key: 1, Value: 'Ward A' },
  { Key: 2, Value: 'Ward B' }
];

const dummyAdmissionCases = [
  { Name: 'Case A' },
  { Name: 'Case B' }
];

const Admission = () => {
  const [enableAutoGenerate, setEnableAutoGenerate] = useState(true);
  const [isGovInsuranceAdmission, setIsGovInsuranceAdmission] = useState(false);
  const [claimCodeType, setClaimCodeType] = useState("new");
  const [currentAdmission, setCurrentAdmission] = useState({});
  const [doctorList, setDoctorList] = useState([]);
  const [filteredDocList, setFilteredDocList] = useState([]);
  const [deptList, setDeptList] = useState([]);
  const [wardList, setWardList] = useState([]);
  const [selectedDept, setSelectedDept] = useState('');
  const [selectedPerformer, setSelectedPerformer] = useState(null);
  const [insuranceBalance, setInsuranceBalance] = useState(0);
  const [admissionCases, setAdmissionCases] = useState([]);
  const [selectedCase, setSelectedCase] = useState('');
  const [claimCode, setClaimCode] = useState('');
  const [selectedWard, setSelectedWard] = useState('');

  const { register, handleSubmit, reset } = useForm(); // Initialize form library

  useEffect(() => {
    // Simulate API calls with dummy data
    setTimeout(() => {
      setDoctorList(dummyDoctorList);
      setFilteredDocList(dummyDoctorList);
      setDeptList(dummyDeptList);
      setWardList(dummyWardList);
      setAdmissionCases(dummyAdmissionCases);
      setInsuranceBalance(1000); // Set a dummy insurance balance
      // Initialize form fields if needed
    }, 1000);
  }, []);

  const loadParameters = async () => {
    // Simulate loading parameters
    setEnableAutoGenerate(true);
    setCurrentAdmission(prev => ({ ...prev, EnableClaimCodeInput: isGovInsuranceAdmission }));
  };

  const handleGovInsuranceAdmissionChange = () => {
    setIsGovInsuranceAdmission(!isGovInsuranceAdmission);
    setCurrentAdmission(prev => ({
      ...prev,
      Ins_HasInsurance: !isGovInsuranceAdmission,
      BillingTransaction: {
        PaymentMode: 'credit',
        Remarks: isGovInsuranceAdmission ? 'Government Insurance' : ''
      }
    }));
  };

  const getClaimCode = async () => {
    if (claimCodeType === "new") {
      setClaimCode('NEW-12345'); // Set a dummy claim code
      setCurrentAdmission(prev => ({ ...prev, ClaimCode: 'NEW-12345' }));
    } else if (claimCodeType === "old") {
      setClaimCode('OLD-67890'); // Set a dummy old claim code
      setCurrentAdmission(prev => ({ ...prev, ClaimCode: 'OLD-67890' }));
    }
  };

  const handleCheckboxChange = (e) => {
    setIsGovInsuranceAdmission(e.target.checked);
    handleGovInsuranceAdmissionChange();
  };

  const handleClaimCodeChange = (e) => {
    setClaimCode(e.target.value);
  };

  const handleClaimCodeTypeChange = (e) => {
    setClaimCodeType(e.target.value);
    getClaimCode();
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === 'RequestingDeptId') {
      setSelectedDept(value);
    } else if (id === 'AdmittingDoctorId') {
      setSelectedPerformer(value);
    } else if (id === 'admissionCase') {
      setSelectedCase(value);
    }
  };

  const handleFocusOut = (e) => {
    // Handle onBlur events
  };

  const admissionSave = async () => {
    // Simulate saving admission
    alert('Admission saved successfully');
    reset(); // Clear the form
  };


  const isValid = (fieldName) => {
    if (fieldName === 'ClaimCode') {
      return claimCode.trim() === ''; // Check if ClaimCode is empty
    }
    return false;
  };


  const handleWardChange = (e) => {
    setSelectedWard(e.target.value);
  };

  return (
    <div className="wrapper">
      <div className="margin-top-10">
        <div className="caption lb-caption">
          <span className="caption-subject">
            <i className="glyphicon glyphicon-asterisk"></i>Create Admission
          </span>
        </div>

        {/* START Scheme Select row */}
        {(currentAdmission.SchemeId && currentAdmission.PriceCategoryId) || currentAdmission.DisplaySchemePriceCategorySelection ? (
          <div className="form-group">
            <div className="col-md-12" style={{ marginBottom: '15px' }}>
              {/* Replace <registration-scheme-select> with React component */}
              {/* Assuming `RegistrationSchemeSelect` is a custom React component */}
              <RegistrationSchemeSelect
                onChange={handleSchemePriceCategoryChange}
                patientId={currentAdmission.PatientId}
                selectedSchemePriceCategory={currentAdmission.SchemePriceCategoryFromVisit}
                serviceBillingContext={currentAdmission.serviceBillingContext}
                policyNo={currentAdmission.PolicyNo}
              />
            </div>
          </div>
        ) : null}

        {isGovInsuranceAdmission && (
          <form className="form-horizontal hm-form">
            <div className="form-body">
              <div className="form-group">
                <label className="control-label col-md-5" style={{ color: 'orange' }} htmlFor="isGovInsuranceAdmission">
                  Is Insurance admission? :
                </label>
                <div className="col-md-6">
                  <input
                    id="isGovInsuranceAdmission"
                    style={{ zoom: 1.5, height: 'auto', marginLeft: '10px' }}
                    name="isGovInsuranceAdmission"
                    type="checkbox"
                    checked={isGovInsuranceAdmission}
                    onChange={handleCheckboxChange}
                  />
                </div>
              </div>
            </div>
          </form>
        )}

        {currentAdmission.Ins_HasInsurance && (
          <form className="form-horizontal hm-form">
            <div className="form-body">
              <div className="form-group">
                <label className="control-label col-md-5" style={{ fontSize: '20px', fontWeight: 'bold' }}>
                  {GeneralFieldLabel.NSHINo}:
                </label>
                <label className="control-label col-md-6" style={{ fontSize: '20px', fontWeight: 'bold' }}>
                  {currentAdmission.Ins_NshiNumber}
                </label>
              </div>
            </div>
          </form>
        )}

        <form className="form-horizontal hm-form">
          <div className="form-body">
            <div className="form-group">
              <label className="control-label col-md-5">
                Claim code<sup className="color-red">*</sup>:
              </label>
              <div className="col-md-6">
                <div style={{ width: '25%' }}>
                  <input
                    id="ClaimCode"
                    style={{ color: 'darkgreen', fontWeight: 'bold', fontSize: '20px', width: '147px' }}
                    disabled
                    className="form-control"
                    type="text"
                    value={claimCode}
                    onChange={handleClaimCodeChange}
                    placeholder="Claim Code"
                  />
                </div>
                <div style={{ width: '20px', paddingLeft: '5px' }}>
                  <div className="tooltip list-tooltip">
                    <span className="fa fa-info info-icon-wrapper"></span>
                    <p className="tooltiptext ttptextdown no-print">
                      Actual ClaimCode may be different than this after Save
                    </p>
                  </div>
                </div>
                {/* Validate ClaimCode */}
                {/* Replace isValid() with appropriate validation logic */}
                {isValid('ClaimCode') && (
                  <span className="color-red font-sm">
                    Claim code is required.
                  </span>
                )}
              </div>
            </div>

            <div className="form-body">
              <div className="form-group">
                <label className="control-label col-md-5" style={{ fontSize: '20px' }}>
                  <b></b>
                </label>
                <div className="control-label col-md-6" style={{ fontSize: '20px' }}>
                  <div className="input-group">
                    <div className="icheck-inline">
                      <label className="mt-checkbox mt-checkbox-outline mapped mapped-outline">
                        <input
                          name="claimCodeType"
                          type="radio"
                          checked={claimCodeType === "new"}
                          onChange={handleClaimCodeTypeChange}
                          value="new"
                        />
                        <span className="dark-grey"> New</span>
                      </label>
                      <label className="mt-checkbox mt-checkbox-outline mapped mapped-outline">
                        <input
                          name="claimCodeType"
                          type="radio"
                          checked={claimCodeType === "old"}
                          onChange={handleClaimCodeTypeChange}
                          value="old"
                        />
                        <span className="dark-grey"> Old</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>

        <div className="form-body">
          <div className="form-group">
            <label className="control-label col-md-5">
              Requesting Department<sup className="color-red">*</sup>:
            </label>
            <div className="col-md-6">
              <select
                id="RequestingDeptId"
                className="form-control"
                onChange={handleChange}
                value={selectedDept}
              >
                <option value="">Select Department</option>
                {deptList.map(dept => (
                  <option key={dept.Key} value={dept.Key}>{dept.Value}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-group">
            <label className="control-label col-md-5">
              Admitting Doctor<sup className="color-red">*</sup>:
            </label>
            <div className="col-md-6">
              <select
                id="AdmittingDoctorId"
                className="form-control"
                onChange={handleChange}
                value={selectedPerformer}
              >
                <option value="">Select Doctor</option>
                {doctorList.map(doctor => (
                  <option key={doctor.Key} value={doctor.Key}>{doctor.Value}</option>
                ))}
              </select>
            </div>
          </div>

          <form className="form-horizontal hm-form">
        <div className="form-body">
          <div className="form-group">
            <label className="control-label col-md-5">Ward:</label>
            <div className="col-md-6">
              <select
                id="Ward"
                className="form-control"
                value={selectedWard}
                onChange={handleWardChange}
              >
                <option value="">Select Ward</option>
                {wardList.map((ward) => (
                  <option key={ward.Key} value={ward.Value}>
                    {ward.Value}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </form>

      {selectedWard && (
        <div>
          <p>Selected Ward: {selectedWard}</p>
        </div>
      )}


          <div className="form-group">
            <label className="control-label col-md-5">
              Admission Case<sup className="color-red">*</sup>:
            </label>
            <div className="col-md-6">
              <select
                id="admissionCase"
                className="form-control"
                onChange={handleChange}
                value={selectedCase}
              >
                <option value="">Select Case</option>
                {admissionCases.map(caseItem => (
                  <option key={caseItem.Name} value={caseItem.Name}>{caseItem.Name}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-group">
            <label className="control-label col-md-5">
              Insurance Balance<sup className="color-red">*</sup>:
            </label>
            <div className="col-md-6">
              <input
                id="InsuranceBalance"
                type="text"
                className="form-control"
                disabled
                value={insuranceBalance}
              />
            </div>
          </div>

          <div className="form-group">
            <label className="control-label col-md-5">
              <b></b>
            </label>
            <div className="col-md-6">
              <button
                type="button"
                className="btn btn-primary"
                onClick={admissionSave}
              >
                Save Admission
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admission;
