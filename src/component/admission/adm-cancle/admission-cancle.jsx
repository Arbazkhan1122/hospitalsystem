// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import moment from 'moment';
// import DatePicker from 'react-datepicker';
// import "react-datepicker/dist/react-datepicker.css";

// const AdmissionCancel = ({ patientId, ipVisitId, onCancelClosed }) => {
//   const [admissionInfo, setAdmissionInfo] = useState(null);
//   const [admissionCancel, setAdmissionCancel] = useState({ CancelledOn: moment().format('YYYY-MM-DD'), PatientVisitId: ipVisitId, PatientId: patientId });
//   const [showReceipt, setShowReceipt] = useState(false);
//   const [showReceiptPopUp, setShowReceiptPopUp] = useState(false);
//   const [showpatientInfoPopUp, setShowpatientInfoPopUp] = useState(false);
//   const [returnDepositInfo, setReturnDepositInfo] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [calType, setCalType] = useState('');

//   useEffect(() => {
//     loadCalendarTypes();
//     if (ipVisitId && patientId) {
//       loadCancelPatientInfo(patientId, ipVisitId);
//     } else {
//       closePopUp(false);
//     }
//   }, [patientId, ipVisitId]);

//   const loadCalendarTypes = async () => {
//     // Assuming loadCalendarTypes fetches the necessary calendar types
//     const response = await axios.get('/api/parameters'); // Change the endpoint as needed
//     const parameter = response.data.Parameters.filter(parms => parms.ParameterName === "CalendarTypes");
//     const calendarTypeObject = JSON.parse(parameter[0].ParameterValue);
//     setCalType(calendarTypeObject.PatientRegistration);
//   };

//   const loadCancelPatientInfo = async (patientId, patientVisitId) => {
//     try {
//       const response = await axios.get(`/api/Admission/AdmissionInfo?patientId=${patientId}&ipVisitId=${patientVisitId}`);
//       if (response.data.Status === "OK" && response.data.Results) {
//         setAdmissionInfo(response.data.Results);
//         setShowpatientInfoPopUp(true);
//       } else {
//         alert("Unable to get the details.");
//         console.log(response.data.ErrorMessage);
//       }
//     } catch (error) {
//       console.error("Error fetching patient info:", error);
//     }
//   };

//   const cancelAdmission = async () => {
//     if (moment(admissionCancel.CancelledOn).diff(moment().add(10, 'minutes').format('YYYY-MM-DD HH:mm')) > 0) {
//       alert("Enter valid Cancelled date");
//       return;
//     }
//     if (!admissionCancel.CancelledRemark) {
//       alert("Remarks are mandatory");
//       return;
//     }
//     setLoading(true);
//     try {
//       const response = await axios.post('/api/Admission/CheckAdmissionCancelled', admissionCancel);
//       if (response.data.Status === 'OK') {
//         setShowpatientInfoPopUp(false);
//         if (response.data.Results) {
//           setReturnDepositInfo(response.data.Results);
//           setShowReceiptPopUp(true);
//           setShowReceipt(true);
//         } else {
//           closePopUp(false);
//         }
//         alert(`Cancelled and Amount returned successfully.`);
//       } else {
//         alert(response.data.ErrorMessage);
//       }
//     } catch (error) {
//       console.error("Failed to cancel admission:", error);
//       alert('Failed to get credit details.. please check log for details.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const closePopUp = (showConfirmAlert = true) => {
//     onCancelClosed({ CloseWindow: true });
//   };

//   const handleCancelAdmission = () => {
//     if (window.confirm("Are you sure you want to cancel admission?")) {
//       cancelAdmission();
//     } else {
//       closePopUp();
//     }
//   };

//   const handleCloseAlertPopUp = () => {
//     if (!loading) {
//       setLoading(true);
//       setShowReceiptPopUp(false);
//       closePopUp(false);
//     }
//     setLoading(false);
//   };

//   return (
//     <>
//       {admissionInfo && showpatientInfoPopUp && (
//         <div className="popup-static portlet box portlet-fullscreen">
//           <div className="portlet-body form">
//             <div className="modelbox-div" style={{ marginLeft: "30%", marginRight: "25%", marginTop: "2%" }}>
//               <div style={{ margin: "20px" }}>
//                 <table className="table table-striped text-center">
//                   <tbody>
//                     <tr>
//                       <td><b>{admissionInfo.PatientName}</b></td>
//                       <td> Inpatient: <b>{admissionInfo.VisitCode}</b></td>
//                     </tr>
//                     <tr>
//                       <td>Hospital No: {admissionInfo.PatientCode}</td>
//                       <td> Age/Sex :{moment(admissionInfo.DateOfBirth).fromNow(true)} / {admissionInfo.Gender}</td>
//                     </tr>
//                     <tr>
//                       <td>Ward Name: {admissionInfo.WardName}</td>
//                       <td>Bed Code: {admissionInfo.BedCode}</td>
//                     </tr>
//                   </tbody>
//                 </table>
//                 <div className="text-center">
//                   <strong style={{ textAlign: "center", color: "red" }}>This will Cancel Admission and you won't be able to revert it.</strong><br />
//                   <strong style={{ textAlign: "center", color: "red" }}>Are you sure to cancel this admission for this patient?</strong><br />
//                 </div>
//                 <hr />
//                 <table className="table table-striped" style={{ width: "50%" }}>
//                   <tbody>
//                     {admissionInfo.DepositBalance && (
//                       <tr style={{ fontWeight: "bold" }}>
//                         <td style={{ fontSize: "14px" }}>To Be Refund :</td>
//                         <td style={{ fontSize: "15px", backgroundColor: "#c8c3df !important" }}><b>{admissionInfo.DepositBalance}</b></td>
//                       </tr>
//                     )}
//                   </tbody>
//                 </table>
//                 <table className="table">
//                   <tbody>
//                     <tr>
//                       <td>Admission Date:</td>
//                       <td>{admissionInfo.AdmissionDate}</td>
//                     </tr>
//                     <tr>
//                       <td>Cancelled On:</td>
//                       <td>
//                         <DatePicker
//                           selected={new Date(admissionCancel.CancelledOn)}
//                           onChange={date => setAdmissionCancel({ ...admissionCancel, CancelledOn: moment(date).format('YYYY-MM-DD') })}
//                           dateFormat="yyyy-MM-dd"
//                         />
//                       </td>
//                     </tr>
//                   </tbody>
//                 </table>
//                 <div> Remarks <b style={{ color: "red" }}>*</b>:
//                   <textarea className="form-control" maxLength="100" value={admissionCancel.CancelledRemark} onChange={e => setAdmissionCancel({ ...admissionCancel, CancelledRemark: e.target.value })} placeholder="Remarks"></textarea>
//                 </div>
//                 <hr />
//                 <div className="text-center">
//                   <button type="button" className="btn btn-danger btn-sm" style={{ marginTop: "5px" }} disabled={loading} onClick={handleCancelAdmission}> Cancel Admission </button>
//                   <button type="button" className="btn btn-cancel btn-sm" style={{ marginTop: "5px" }} disabled={loading} onClick={() => closePopUp(false)}> Close </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {showReceipt && showReceiptPopUp && (
//         <div className="popup-static portlet box portlet-fullscreen w3-modal-content w3-card-4 w3-animate-zoom">
//           <div className="portlet-body form" style={{ backgroundColor: "white" }}>
//             <div className="form-body">
//               <div className="col-md-12 col-md-offset-3">
//                 <div className="col-md-6 col-sm-6 col-xs-6 modelbox-div" style={{ marginRight: "24px" }}>
//                   <button style={{ float: "right" }} className="btn btn-danger" onClick={handleCloseAlertPopUp} title="Cancel">X</button>
//                   {/* Replace with your print deposit slip component */}
//                   {/* <BilPrintDepositSlip deposit={returnDepositInfo} showReceipt={showReceipt} /> */}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default AdmissionCancel;
 ///////////////using API //////////////////////////////////




 ///////not usingg API/////////////////////////////////////////



 import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const AdmissionCancel = ({ patientId, ipVisitId, onCancelClosed }) => {
  const [admissionInfo, setAdmissionInfo] = useState(null);
  const [admissionCancel, setAdmissionCancel] = useState({ CancelledOn: moment().format('YYYY-MM-DD'), PatientVisitId: ipVisitId, PatientId: patientId });
  const [showReceipt, setShowReceipt] = useState(false);
  const [showReceiptPopUp, setShowReceiptPopUp] = useState(false);
  const [showpatientInfoPopUp, setShowpatientInfoPopUp] = useState(false);
  const [returnDepositInfo, setReturnDepositInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [calType, setCalType] = useState('');

  useEffect(() => {
    loadCalendarTypes();
    if (ipVisitId && patientId) {
      loadCancelPatientInfo(patientId, ipVisitId);
    } else {
      closePopUp(false);
    }
  }, [patientId, ipVisitId]);

  const loadCalendarTypes = async () => {
    // Dummy data for calendar types
    const calendarTypeObject = { PatientRegistration: 'Gregorian' };
    setCalType(calendarTypeObject.PatientRegistration);
  };

  const loadCancelPatientInfo = async (patientId, patientVisitId) => {
    // Dummy data for admission information
    const dummyAdmissionInfo = {
      PatientName: 'John Doe',
      VisitCode: 'IP12345',
      PatientCode: 'HOSP56789',
      DateOfBirth: '1980-01-01',
      Gender: 'Male',
      WardName: 'General Ward',
      BedCode: 'B123',
      DepositBalance: 2000,
      AdmissionDate: '2024-08-01'
    };
    setAdmissionInfo(dummyAdmissionInfo);
    setShowpatientInfoPopUp(true);
  };

  const cancelAdmission = async () => {
    if (moment(admissionCancel.CancelledOn).diff(moment().add(10, 'minutes').format('YYYY-MM-DD HH:mm')) > 0) {
      alert("Enter valid Cancelled date");
      return;
    }
    if (!admissionCancel.CancelledRemark) {
      alert("Remarks are mandatory");
      return;
    }
    setLoading(true);
    // Dummy response for cancel admission
    const dummyResponse = {
      Status: 'OK',
      Results: {
        DepositRefund: 2000
      }
    };
    if (dummyResponse.Status === 'OK') {
      setShowpatientInfoPopUp(false);
      if (dummyResponse.Results) {
        setReturnDepositInfo(dummyResponse.Results);
        setShowReceiptPopUp(true);
        setShowReceipt(true);
      } else {
        closePopUp(false);
      }
      alert(`Cancelled and Amount returned successfully.`);
    } else {
      alert(dummyResponse.ErrorMessage);
    }
    setLoading(false);
  };

  const closePopUp = (showConfirmAlert = true) => {
    if (onCancelClosed && typeof onCancelClosed === 'function') {
      onCancelClosed({ CloseWindow: true });
    }
  };

  const handleCancelAdmission = () => {
    if (window.confirm("Are you sure you want to cancel admission?")) {
      cancelAdmission();
    } else {
      closePopUp();
    }
  };

  const handleCloseAlertPopUp = () => {
    if (!loading) {
      setLoading(true);
      setShowReceiptPopUp(false);
      closePopUp(false);
    }
    setLoading(false);
  };

  return (
    <>
      {admissionInfo && showpatientInfoPopUp && (
        <div className="popup-static portlet box portlet-fullscreen">
          <div className="portlet-body form">
            <div className="modelbox-div" style={{ marginLeft: "30%", marginRight: "25%", marginTop: "2%" }}>
              <div style={{ margin: "20px" }}>
                <table className="table table-striped text-center">
                  <tbody>
                    <tr>
                      <td><b>{admissionInfo.PatientName}</b></td>
                      <td> Inpatient: <b>{admissionInfo.VisitCode}</b></td>
                    </tr>
                    <tr>
                      <td>Hospital No: {admissionInfo.PatientCode}</td>
                      <td> Age/Sex :{moment(admissionInfo.DateOfBirth).fromNow(true)} / {admissionInfo.Gender}</td>
                    </tr>
                    <tr>
                      <td>Ward Name: {admissionInfo.WWardName}</td>
                      <td>Bed Code: {admissionInfo.BedCode}</td>
                    </tr>
                  </tbody>
                </table>
                <div className="text-center">
                  <strong style={{ textAlign: "center", color: "red" }}>This will Cancel Admission and you won't be able to revert it.</strong><br />
                  <strong style={{ textAlign: "center", color: "red" }}>Are you sure to cancel this admission for this patient?</strong><br />
                </div>
                <hr />
                <table className="table table-striped" style={{ width: "50%" }}>
                  <tbody>
                    {admissionInfo.DepositBalance && (
                      <tr style={{ fontWeight: "bold" }}>
                        <td style={{ fontSize: "14px" }}>To Be Refund :</td>
                        <td style={{ fontSize: "15px", backgroundColor: "#c8c3df !important" }}><b>{admissionInfo.DepositBalance}</b></td>
                      </tr>
                    )}
                  </tbody>
                </table>
                <table className="table">
                  <tbody>
                    <tr>
                      <td>Admission Date:</td>
                      <td>{admissionInfo.AdmissionDate}</td>
                    </tr>
                    <tr>
                      <td>Cancelled On:</td>
                      <td>
                        <DatePicker
                          selected={new Date(admissionCancel.CancelledOn)}
                          onChange={date => setAdmissionCancel({ ...admissionCancel, CancelledOn: moment(date).format('YYYY-MM-DD') })}
                          dateFormat="yyyy-MM-dd"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div> Remarks <b style={{ color: "red" }}>*</b>:
                  <textarea className="form-control" maxLength="100" value={admissionCancel.CancelledRemark} onChange={e => setAdmissionCancel({ ...admissionCancel, CancelledRemark: e.target.value })} placeholder="Remarks"></textarea>
                </div>
                <hr />
                <div className="text-center">
                  <button type="button" className="btn btn-danger btn-sm" style={{ marginTop: "5px" }} disabled={loading} onClick={handleCancelAdmission}> Cancel Admission </button>
                  <button type="button" className="btn btn-cancel btn-sm" style={{ marginTop: "5px" }} disabled={loading} onClick={() => closePopUp(false)}> Close </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {showReceipt && showReceiptPopUp && (
        <div className="popup-static portlet box portlet-fullscreen w3-modal-content w3-card-4 w3-animate-zoom">
          <div className="portlet-body form" style={{ backgroundColor: "white" }}>
            <div className="form-body">
              <div className="col-md-12 col-md-offset-3">
                <div className="col-md-6 col-sm-6 col-xs-6 modelbox-div" style={{ marginRight: "24px" }}>
                  <button style={{ float: "right" }} className="btn btn-danger" onClick={handleCloseAlertPopUp} title="Cancel">X</button>
                  {/* Replace with your print deposit slip component */}
                  {/* <BilPrintDepositSlip deposit={returnDepositInfo} showReceipt={showReceipt} /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AdmissionCancel;

