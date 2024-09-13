import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Nursing/InPatientMainContent.css";
import { useNavigate } from "react-router-dom";
import { Modal, Button, Form, Table, Row, Col } from "react-bootstrap";

const numberToWordsInIndian = (num) => {
  const units = [
    '', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'
  ];
  const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
  const scales = ['', 'Thousand', 'Lakh', 'Crore'];

  if (num === 0) return 'Zero Rupees';

  let wordString = '';
  let remainder = num;

  const getChunk = (number, divisor, scale) => {
    let chunk = Math.floor(number / divisor);
    let remainder = number % divisor;
    
    if (chunk > 0) {
      let chunkString = '';
      if (chunk > 99) {
        chunkString += `${units[Math.floor(chunk / 100)]} Hundred `;
        chunk %= 100;
      }
      if (chunk > 19) {
        chunkString += `${tens[Math.floor(chunk / 10)]} `;
        chunk %= 10;
      }
      if (chunk > 0) {
        chunkString += `${units[chunk]} `;
      }
      return `${chunkString.trim()} ${scale}`;
    }
    return '';
  };

  // For Crores
  if (remainder >= 10000000) {
    const croreChunk = getChunk(remainder, 10000000, scales[3]);
    wordString += croreChunk + ' ';
    remainder %= 10000000;
  }

  // For Lakhs
  if (remainder >= 100000) {
    const lakhChunk = getChunk(remainder, 100000, scales[2]);
    wordString += lakhChunk + ' ';
    remainder %= 100000;
  }

  // For Thousands
  if (remainder >= 1000) {
    const thousandChunk = getChunk(remainder, 1000, scales[1]);
    wordString += thousandChunk + ' ';
    remainder %= 1000;
  }

  // For Hundreds and units (1-999)
  if (remainder > 0) {
    const hundredsChunk = getChunk(remainder, 1, scales[0]);
    wordString += hundredsChunk + ' ';
  }

  return wordString.trim() + ' Rupees';
};


function MainContent() {
  const [showConsumtion, setShowConsumption] = useState(false);
  const [secondaryDoctor, setSecondaryDoctor] = useState("");
  const [ward, setWard] = useState("");
  const [bedFeature, setBedFeature] = useState("");
  const [bed, setBed] = useState("");
  const [transferDate, setTransferDate] = useState("");
  const [transferRemarks, setTransferRemarks] = useState("");
  const [showWardwise, setShowWardwise] = useState(false);
  // const [wardDepartmentId, setWardDepartmentId] = useState(null);
  const [patientConsumption,setpatientConsumption]=useState("");
  const handleCloseConsumption = () => setShowConsumption(false);
  const [medicines, setMedicines] = useState([]);
  const [selectedMedicine, setSelectedMedicine] = useState(null);


  const [medicineDetails, setMedicineDetails] = useState([]);
  const [prescriberName, setPrescriberName] = useState("");
  const [store, setStore] = useState("");
  const [subTotalAmount, setSubTotalAmount] = useState(0);
  const [discountAmount, setDiscountAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [remark, setRemark] = useState("");
  const [quantity, setQuantity] = useState(0); // User-entered quantity
  const [subTotal, setSubTotal] = useState(0); // Calculated subtotal
  const [rows, setRows] = useState([
    {genericName: '',medicineName: '', expiry: '', batch: '', availableQuantity: '',currentQuantity:'', salePrice: '', subTotal: '',discountPercentage:'' }
  ]);


  const handleShowConsumption = (patient) => {
    console.log(patient);
    setpatientConsumption(patient);
    setShowConsumption(true);
  };

  const handleMedicineChange = (index, value) => {
    const medicine = JSON.parse(value);
  
    const updatedRows = [...rows];
    updatedRows[index] = {
      ...updatedRows[index],
      medicineName: medicine.medicineName,
      genericName: medicine.genericName,
      expiry: medicine.expiry,
      batch: medicine.batch,
      availableQuantity: medicine.availableQuantity,
      currentQuantity: medicine.currentQuantity,
      salePrice: medicine.salePrice,
      discountPercentage: medicine.discountPercentage || 0, // Default to 0 if no discount
      subTotal: calculateSubTotal(medicine.currentQuantity, medicine.salePrice, medicine.discountPercentage)
    };
    setRows(updatedRows);
    calculateSubTotalForAllmedicine()
  };
  
  // Quantity change with discount calculation
  const handleQuantityChange = (index, event) => {
    const quantity = event.target.value;
    const updatedRows = [...rows];
    const salePrice = updatedRows[index]?.salePrice || 0;
    const discountPercentage = updatedRows[index]?.discountPercentage || 0;
  
    updatedRows[index] = {
      ...updatedRows[index],
      currentQuantity: quantity,
      subTotal: calculateSubTotal(quantity, salePrice, discountPercentage)
    };
    setRows(updatedRows);
    calculateSubTotalForAllmedicine()

  };
  
  // Function to calculate the subtotal based on quantity, sale price, and discount
  const calculateSubTotal = (quantity, salePrice, discountPercentage) => {
    const totalBeforeDiscount = quantity * salePrice;
    const discountAmount = (totalBeforeDiscount * discountPercentage) / 100;
    return totalBeforeDiscount - discountAmount;
  };

  const isRowValid = (row) => {
    return row.genericName && row.currentQuantity !== '';
  };

  const handleAddRow = () => {
    const lastRow = rows[rows.length - 1];
    if (isRowValid(lastRow)) {
      const newRowId = rows.length ? rows[rows.length - 1].id + 1 : 1;
      setRows([...rows, { genericName: '',medicineName: '', expiry: '', batch: '', availableQuantity: '',currentQuantity:'', salePrice: '', subTotal: '' }]);
    } else {
      alert('Please fill in the current row before adding a new one.');
    }
  };


// Calculate subtotal for all medicines
const calculateSubTotalForAllmedicine = () => {
  const sumOfSubtotals = rows.reduce((sum, row) => {
    const subTotal = parseFloat(row.subTotal) || 0; // Ensures subTotal is a number
    return sum + subTotal;
  }, 0);

  setSubTotal(sumOfSubtotals);
};

// Effect to recalculate total whenever rows change
useEffect(() => {
  calculateSubTotalForAllmedicine();
}, [rows]);

useEffect(() => {
  calculateTotal();
}, [discountAmount, subTotal]);

  const calculateTotal = () => {
    const totalAfterDiscount = subTotal - (subTotal * (discountAmount / 100));
    // alert(totalAfterDiscount);
    setTotalAmount(totalAfterDiscount)
  };

  // Update total amount when discount or rows change
  const handleDiscountChange = (e) => {
    setDiscountAmount(parseFloat(e.target.value) || 0);
    // calculateTotal()
  };



  // Convert the final amount to words
  const totalInWords = numberToWordsInIndian(totalAmount);

  const [showWard, setShowWard] = useState(false);  

  const handleCloseWard = () => setShowWard(false);
  const handleShowWard = () => setShowWard(true);

  const [showTransfer, setShowTransfer] = useState(false);

  const handleCloseTransfer = () => setShowTransfer(false);
  const handleShowTransfer = () => setShowTransfer(true);

  const patientsDetail = [
    {
      SN: 1,
      "Unit/Address": "Unit A, Room 101",
      "Bed Strength": 4,
      "Age/Sex": "65/M",
      "DOA(HD)": "2024-08-20",
      "DOD(BS)": "2024-08-22",
      Diagnosis: "Hypertension",
      Remarks: "Stable condition",
    },
    {
      SN: 2,
      "Unit/Address": "Unit B, Room 202",
      "Bed Strength": 2,
      "Age/Sex": "72/F",
      "DOA(HD)": "2024-08-18",
      "DOD(BS)": "2024-08-21",
      Diagnosis: "Diabetes",
      Remarks: "Needs regular insulin check",
    },
    {
      SN: 3,
      "Unit/Address": "Unit C, Room 303",
      "Bed Strength": 1,
      "Age/Sex": "58/M",
      "DOA(HD)": "2024-08-15",
      "DOD(BS)": "2024-08-19",
      Diagnosis: "Asthma",
      Remarks: "Improving",
    },
  ];

  const WardInfoCard = ({
    wardDepartmentId,
    name,
    patients,
    reserved,
    vacant,
    onWardClick,
  }) => (
    <div
      className="ward-info-card"
      onClick={() => onWardClick(wardDepartmentId)}
    >
      <div className="ward-info-header">
        <span>{wardDepartmentId} </span>
        <span className="ward-info-name">{name}</span>
        <span className="ward-info-patients">{patients} Patients</span>
      </div>
      <div className="ward-info-occupancy">
        <span className="ward-info-occupied">{reserved} Beds Occupied</span>
        <span className="ward-info-vacant">{vacant} Beds Vacant</span>
      </div>
    </div>
  );

  const handleTransfer = () => {
    // Logic to handle the transfer action
    // console.log({
    //   secondaryDoctor,
    //   ward,
    //   bedFeature,
    //   bed,
    //   transferDate,
    //   transferRemarks,
    // });
  };

  // const handleQuantityChange=(index,e)=>{
  //   const quantity = e.target.value;
  //   setQuantity(quantity);
  //   const updatedRows = [...rows];
  //   updatedRows[index] = {
  //     ...updatedRows[index],
  //     availableQuantity: quantity,
  //     setSubTotal: quantity * (updatedRows[index].selectedMedicine?.salePrice || 0)
  //   };
  //   setRows(updatedRows);

  // }



  const [activeTab, setActiveTab] = useState("My Patients"); // Default tab
  const [patients, setPatients] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  const showPatientwardwise = () => {
    setShowWardwise(true);
  };

  useEffect(() => {
    const fetchMedicines = async () => {
      try {
        const response = await axios.get("http://192.168.1.37:1415/api/medicine/find-all-medicine-details");
        setMedicines(response.data);
        console.log(response.data+"Med");
      } catch (error) {
        console.error("Error fetching medicine data:", error);
      }
    };
    fetchMedicines();
  }, []);

  // const handleMedicineChange = (selectedMedicineString) => {
  //   const selectedMedicine = JSON.parse(selectedMedicineString);
    
  //   // Update the specific row
  //   const updatedRows = rows.map((row, i) =>
  //     i === index ? {
  //       ...row,
  //       selectedMedicine,
  //       expiry: selectedMedicine.expiry,
  //       batch: selectedMedicine.batch,
  //       availableQuantity: selectedMedicine.availableQuantity,
  //       salePrice: selectedMedicine.salePrice,
  //       subTotal: (row.availableQuantity || 0) * selectedMedicine.salePrice
  //     } : row
  //   );
    
  //   setRows(updatedRows);
  //   console.log(selectedMedicine);
  // };
  
  
  



  const filteredPatients = patients.filter(
    (patient) =>
      (patient.name &&
        patient.name
          .tostring()
          .toLowerCase()
          .includes(searchTerm.toString().toLowerCase())) ||
      (patient.phoneNumber && patient.phoneNumber.includes(searchTerm))
  );

  const [wards, setWards] = useState([]);

  useEffect(() => {
    axios
      .get("http://192.168.1.37:1415/api/ward-department/get-all-ward")
      .then((response) => {
        const data = response.data;

        const wardMap = data.reduce((acc, ward) => {
          if (!acc[ward.wardName]) {
            acc[ward.wardName] = {
              wardDepartmentId: ward.wardDepartmentId,
              name: ward.wardName,
              patients: 0,
              reserved: 0,
              vacant: 0,
            };
          }
          acc[ward.wardName].patients += ward.reserved;
          acc[ward.wardName].reserved += ward.reserved;
          acc[ward.wardName].vacant += ward.vacant;
          return acc;
        }, {});
        const wardData = Object.values(wardMap);
        setWards(wardData);
        // console.log(wardData);
      })
      .catch((error) => {
        console.error("There was an error fetching the ward data!", error);
      });
  }, []);

  useEffect(() => {
    const fetchMedicines = async () => {
      try {
        const response = await axios.get("http://192.168.1.37:1415/api/medicine/find-all-medicine-details");
        setMedicines(response.data); // assuming response.data contains the list of medicines
      } catch (error) {
        console.error("Error fetching medicine data:", error);
      }
    };

    fetchMedicines();
  }, []);

  const handleAddMedicine = () => {
    if (selectedMedicine) {
      const newMedicine = {
        genericName: selectedMedicine.genericName,
        medicineName: selectedMedicine.name,
        expiry: selectedMedicine.expiry,
        batch: selectedMedicine.batch,
        availableQuantity: selectedMedicine.availableQuantity,
        currentQuantity: 1, // Example value, modify as needed
        salePrice: selectedMedicine.salePrice,
        subTotal: selectedMedicine.salePrice, // Example calculation
        discountPercentage: 0, // Example value
      };

      setMedicineDetails([...medicineDetails, newMedicine]);
    }
  };


  const handleSaveConsumption = async () => {
    const payload = {
      medicineDetails: [...rows],
      medicineBill: {
        prescriberName: prescriberName,
        store: store,
        subTotalAmount: subTotalAmount,
        discountAmount: discountAmount,
        totalAmount: totalAmount,
        remark: remark,
      },
    };
    console.log(payload);
    
    let id=1;
    let patientType="Patient"
      try {
     
      const response = await axios.post(`http://192.168.1.37:1415/api/medicine/save-medicine-details/${id}/${patientType}`, payload);
      console.log("Payload:", payload);
      alert("Consumption added successfully");
      
        setRows([
      { genericName: '', medicineName: '', expiry: '', batch: '', availableQuantity: '', currentQuantity: '', salePrice: '', subTotal: '', discountPercentage: '' }
    ]);
    setPrescriberName('');  // Reset prescriber name
    setStore('');  // Reset store
    setSubTotalAmount('');  // Reset sub-total amount
    setDiscountAmount('');  // Reset discount amount
    setTotalAmount('');  // Reset total amount
    setRemark('');  // Reset remark
    totalInWords('');
    

      // Handle success (e.g., close modal, show success message)
    } catch (error) {
      console.error("Error saving medicine details:", error);
    }
  };

  const showTableData = async(wardDepartmentId) => {
    if (!wardDepartmentId) {
      console.error("wardDepartmentId is undefined");
      return;
    }

    await axios
      .get(
        `http://192.168.1.37:1415/api/admissions/ward-data/${wardDepartmentId}`
      )
      .then((response) => {
        setPatients(response.data); // Assuming setPatients is part of your state
      })
      .catch((error) => {
        console.error("There was an error fetching the patient data!", error);
      });
  };


  // const handleAddRow = () => {
  //   if (selectedMedicine && quantity > 0) {
  //     const newMedicineDetail = {
  //       ...selectedMedicine,
  //       currentQuantity: quantity,
  //       subTotal,
  //     };
  //     // Append new medicine detail to the existing array
  //     setMedicineDetails(prevDetails => [...prevDetails, newMedicineDetail]);

  //     // Reset form
  //     setSelectedMedicine(null);
  //     setQuantity(0);
  //     setSubTotal(0);
  //   }
  // };



  return (
    <>
      <div className="hospital-wards-container" onClick={showPatientwardwise}>
        <h2>Select your Ward</h2>
        <div className="ward-info-grid">
          {wards.map((ward, index) => (
            <WardInfoCard
              key={index}
              wardDepartmentId={ward.wardDepartmentId}
              name={ward.name}
              patients={ward.patients}
              reserved={ward.reserved}
              vacant={ward.vacant}
              onWardClick={() => showTableData(ward.wardDepartmentId)}
            />
          ))}
        </div>
      </div>

      {showWardwise && (
        <>
          <div className="inpatient-component-container">
            <button
              className={`inpatient-component-tab ${
                activeTab === "My Patients" ? "active" : ""
              }`}
              onClick={() => handleTabClick("My Patients")}
            >
              All Patients
            </button>
            {/* <button 
                    className={`inpatient-component-tab ${activeTab === 'All Patients' ? 'active' : ''}`} 
                    onClick={() => handleTabClick('All Patients')}
                >
                    All Patients
                </button> */}
            <button
              className={`inpatient-component-tab ${
                activeTab === "Consumptions" ? "active" : ""
              }`}
              onClick={() => handleTabClick("Consumptions")}
            >
              Consumptions
            </button>
            <button
              className={`inpatient-component-tab ${
                activeTab === "Diet Sheet" ? "active" : ""
              }`}
              onClick={() => handleTabClick("Diet Sheet")}
            >
              Diet Sheet
            </button>
          </div>
          {activeTab === "My Patients" && (
            <div className="MyPatientsTable-tableContainer">
              <div className="Nephrology-Header">
                <input
                  type="text"
                  placeholder="Search"
                  className="Nephrology-searchInput"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="Nephrology-actions">
                  <span className="Nephrology-results">
                    Showing {filteredPatients.length}/{patients.length} results
                  </span>
                  <button className="Nephrology-button">Export</button>
                  <button className="Nephrology-button">Print</button>
                </div>
              </div>

              <table className="MyPatientsTable-patientsTable">
                <thead>
                  <tr>
                    <th>Serial No</th>
                    <th>Admitted Date</th>
                    <th>Doctor Name</th>
                    {/* <th>Hospital Num</th> */}
                    <th>IP Number</th>
                    <th>Name</th>
                    <th>Phone Number</th>
                    <th>Age</th>
                    <th>Bed Detail </th>
                    <th>Scheme</th>
                    <th>Patient Type</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {patients && patients.length > 0 ? (
                    patients.map((patient, index) => (
                      <tr key={patient.admissionId || index}>
                        <td>{patient.admissionId}</td> {/* Row numbers */}
                        <td>{patient.admissionDate}</td>
                        <td>{patient.doctorName}</td>
                        <td>{patient.admissionId}</td>
                        <td>
                          {patient.firstName} {patient.lastName}
                        </td>
                        <td>{patient.contactNumber}</td>
                        <td>{patient.age}</td>
                        <td>{patient.wardCode}</td>
                        <td>{patient.scheme}</td>
                        <td>{patient.patientType}</td>
                        <td>
                          <div className="Actions-actions">
                            <button
                              className="Actions-btn Actions-consumption"
                              onClick={() =>
                                handleShowConsumption(patient)
                              }
                            >
                              Consumption
                            </button>
                            <button
                              className="Actions-btn Actions-wardRequest"
                              onClick={handleShowWard}
                            >
                              Ward Request
                            </button>
                            <button
                              className="Actions-btn Actions-transfer"
                              onClick={handleShowTransfer}
                            >
                              Transfer
                            </button>
                            <button className="Actions-btn Actions-vitals">
                              Vitals
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="10">No patient data available</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === "All Patients" && (
            <div className="MyPatientsTable-tableContainer">
              <div className="Nephrology-Header">
                <input
                  type="text"
                  placeholder="Search"
                  className="Nephrology-searchInput"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="Nephrology-actions">
                  <span className="Nephrology-results">
                    Showing {filteredPatients.length}/{patients.length} results
                  </span>
                  <button className="Nephrology-button">Export</button>
                  <button className="Nephrology-button">Print</button>
                </div>
              </div>

              <table className="MyPatientsTable-patientsTable">
                <thead>
                  <tr>
                    <th>Serial No</th>
                    <th>Admitted Date</th>
                    <th>Doctor Name</th>
                    <th>Hospital Num</th>
                    <th>IP Number</th>
                    <th>Name</th>
                    <th>Phone Number</th>
                    <th>Age/Sex</th>
                    <th>Bed Detail</th>
                    <th>Scheme</th>
                    {/* <th>Actions</th> */}
                  </tr>
                </thead>
                <tbody>
                  {patients && patients.length > 0 ? (
                    patients.map((patient, index) => (
                      <tr key={patient.id || index}>
                        <td>{index + 1}</td>{" "}
                        {/* This will give you row numbers */}
                        <td>{patient.admissionDate}</td>
                        <td>{patient.doctorName}</td>
                        {/* <td>{patient.hospitalNo}</td> */}
                        <td>{patient.admissionId}</td>
                        <td>
                          {patient.firstName} {patient.lastName}
                        </td>
                        <td>{patient.contactNumber}</td>
                        <td>{patient.age}</td>
                        <td>{patient.wardCode}</td>
                        <td>{patient.scheme}</td>
                        <td>
                          <div className="Actions-actions">
                            <button
                              className="Actions-btn Actions-consumption"
                              onClick={handleShowConsumption(patient.admissionId)}
                            >
                              Consumption hh
                            </button>
                            <button
                              className="Actions-btn Actions-wardRequest"
                              onClick={handleShowWard}
                            >
                              Ward Request
                            </button>
                            <button
                              className="Actions-btn Actions-transfer"
                              onClick={handleShowTransfer}
                            >
                              Transfer
                            </button>
                            <button className="Actions-btn Actions-vitals">
                              Vitals
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="10">No patient data available</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === "Consumptions" && (
            <div className="MyPatientsTable-tableContainer">
              <div className="Nephrology-Header">
                <input
                  type="text"
                  placeholder="Search"
                  className="Nephrology-searchInput"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="Nephrology-actions">
                  <span className="Nephrology-results">
                    Showing 0/0 results
                  </span>
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
                    {/* <th>Actions</th> */}
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
                        {Array.isArray(patient.actions) &&
                          patient.actions.includes("edit") && (
                            <i
                              className="fas fa-edit"
                              onClick={() => handleEdit(patient.id)}
                            ></i>
                          )}
                        {Array.isArray(patient.actions) &&
                          patient.actions.includes("delete") && (
                            <i
                              className="fas fa-trash"
                              onClick={() => handleDelete(patient.id)}
                            ></i>
                          )}
                        {/* <button className='EditButton'>Edit</button> */}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === "Diet Sheet" && (
            <div className="MyPatientsTable-tableContainer">
              <div className="Nephrology-Header">
                <input
                  type="text"
                  placeholder="Search"
                  className="Nephrology-searchInput"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="Nephrology-actions">
                  <span className="Nephrology-results">
                    Showing {patientsDetail.length}/0 results
                  </span>
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
                    {/* <th>Actions</th> */}
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
                        {Array.isArray(patient.actions) &&
                          patient.actions.includes("edit") && (
                            <i
                              className="fas fa-edit"
                              onClick={() => handleEdit(patient.id)}
                            ></i>
                          )}
                        {Array.isArray(patient.actions) &&
                          patient.actions.includes("delete") && (
                            <i
                              className="fas fa-trash"
                              onClick={() => handleDelete(patient.id)}
                            ></i>
                          )}
                        {/* <button className='EditButton'>Edit</button> */}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      )}

      <Modal
        show={showConsumtion}
        onHide={handleCloseConsumption}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>New Consumption Entry</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col md={6}>
                {/* <Form.Group controlId="formPrescriber">
                  <Form.Label>Prescriber:</Form.Label>
                  <Form.Control type="text" placeholder="Enter Name" />
                </Form.Group> */}
                 <Form.Group controlId="formPrescriber">
                <Form.Label>Prescriber:</Form.Label>
                <Form.Control as="select">
                  <option value="">Select Prescriber</option>
                  <option value="dr-john-doe">Dr. John Doe</option>
                  <option value="dr-jane-smith">Dr. Jane Smith</option>
                  <option value="dr-alex-jones">Dr. Alex Jones</option>
                  <option value="dr-emma-wilson">Dr. Emma Wilson</option>
                </Form.Control>
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
                  {/* <Form.Label>Hospital No: 2408003807</Form.Label> */}
                  <br></br>
                  <Form.Label className="ml-3">
                    {patientConsumption?.firstName || "John Sen"}
                  </Form.Label>
                  <br></br>
                  <Form.Label className="ml-3">
                    {patientConsumption?.age || "23Y"} /{patientConsumption?.gender}Male
                  </Form.Label>
                  <br></br>
                  <Form.Label className="ml-3">
                  {patientConsumption?.contactNumber || "8765432456"} 
                  </Form.Label>
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
                  {/* <th>Generic Name</th> */}
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
              {rows.map((row, index) => (
          <tr key={index}>
            <td>
              <Form.Control
                as="select"
                onChange={(e) => handleMedicineChange(index, e.target.value)}
               
              >
                <option>--Select Medicine--</option>
                {medicines.map(medicine => (
                  <option key={medicine.genericId} value={JSON.stringify(medicine)}>
                    {medicine.genericName}
                  </option>
                ))}
              </Form.Control>
            </td>
            <td>
              <Form.Control type="text" placeholder="0" value={row?.expiry || ''} disabled />
            </td>
            <td>
              <Form.Control type="text" placeholder="0" value={row?.batch || ''} disabled />
            </td>
            <td>
             
              <Form.Control type="text" placeholder="0" value={row?.availableQuantity} disabled />
            </td>
            <td>
            <Form.Control
                type="text"
                placeholder="0"
                value={row.currentQuantity}
                onChange={(e) => handleQuantityChange(index, e)}
              />
            </td>
            <td>
              <Form.Control type="text" placeholder="0" value={row?.salePrice || ''} disabled />
            </td>
            <td>
              <Form.Control type="text" placeholder="0" value={row.subTotal} disabled />
            </td>
            <td>
              <Form.Control type="text" placeholder="0" value={row.discountPercentage} disabled />
            </td>
            <td>
              <Button variant="success" onClick={handleAddRow}>+</Button>
            </td>
          </tr>
        ))}
            </tbody>
          </Table>

          <Row>
        <Col md={4}>
          <Form.Group controlId="formSubTotal">
            <Form.Label>SubTotal Amount:</Form.Label>
            <Form.Control
              type="text"
              value={subTotal}
              onChange={calculateTotal}
              placeholder="0"
              disabled
            />
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group controlId="formDiscountAmount">
            <Form.Label>Discount Amount:</Form.Label>
            <Form.Control
              type="number"
              onChange={handleDiscountChange}
              placeholder="0"
            />
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group controlId="formTotalAmount">
            <Form.Label>Total Amount:</Form.Label>
            <Form.Control
              type="text"
              value={totalAmount}
              placeholder="0"
              disabled
            />
          </Form.Group>
        </Col>
      </Row>
      <Form.Group controlId="formInWords">
        <Form.Label>In Words:</Form.Label>
        <Form.Control
          type="text"
          value={totalInWords}
          placeholder="In Words"
          disabled
        />
      </Form.Group>
          <Form.Group controlId="formRemarks">
            <Form.Label>Remarks:</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={remark}
              onChange={(e) => setRemark(e.target.value)}
              placeholder="Remarks"
            />
          </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="success" onClick={handleSaveConsumption}>
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
                  <Form.Label>
                    Admitting Doctor: Mrs. BEATRICE WANGAI MUKOLWE
                  </Form.Label>
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
                      <Form.Control
                        type="text"
                        placeholder="Enter Department"
                      />
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
                  <td
                    colSpan="10"
                    style={{ backgroundColor: "#FFEB3B", textAlign: "center" }}
                  >
                    No Rows To Show
                  </td>
                </tr>
              </tbody>
            </Table>
          </Modal.Body>
        </Modal>
      </>

      <Modal
        show={showTransfer}
        onHide={handleCloseTransfer}
        centered
        size="lg"
      >
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
