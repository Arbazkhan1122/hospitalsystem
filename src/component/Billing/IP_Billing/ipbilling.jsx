/* neha-Billing-IPD-billing-20/09/24 */
import React, { useState } from 'react';
import { FaUser, FaMale, FaCalendarCheck, FaAddressBook, FaPhone } from 'react-icons/fa';
import './ip_billing.css'
import { jsPDF } from "jspdf";
function Ipbilling() {
    const [inputValueIpd, setInputValueIpd] = useState('');
    const [isIpdTableVisible, setIsIpdTableVisible] = useState(true);
    const [discountPercentage, setDiscountPercentage] = useState(0);
    const [pdfBlob, setPdfBlob] = useState(null);

    const handleIpdButtonClick = () => {
       
    };

    const handlePrintTable = () => {
        const printWindow = window.open('', '', 'height=600,width=800');
        printWindow.document.write('<html><head><title>Print</title>');
        printWindow.document.write('<style>table {width: 100%; border-collapse: collapse;} th, td {border: 1px solid #ddd; padding: 8px;} th {background-color: #f4f4f4;}</style>');
        printWindow.document.write('</head><body >');
        printWindow.document.write(document.querySelector('.print-content').innerHTML);
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        printWindow.focus();
        printWindow.print();
    };

    // Dummy data
    const roomCharges = [
        { date: '2024-09-01', roomNo: '101', days: 5, rate: '2000 Rs/day', total: '10000 Rs', billstatus: 'Paid' },
    ];

    const doctorFees = [
        { date: '2024-09-01', doctorName: 'Dr. Smith', visitType: 'Surgery', charges: '5000 Rs', billstatus: 'Paid' },
    ];

    const medications = [
        { date: '2024-09-01', medicineName: 'Paracetamol', quantity: 10, price: '5 Rs', total: '50 Rs', billstatus: 'Unpaid' },
    ];

    const otherServices = [
        { date: '2024-09-02', service: 'Blood Test', price: '500 Rs', billstatus: 'Unpaid' },
    ];

    // Patient details (example data)
    const patientDetails = {
        name: 'Jane Doe',
        ageSex: '30Y/Female',
        visitType: 'Inpatient',
        address: 'Mumbai',
        contactNo: '9876543210',
    };

    // Calculate totals
    const calculateTotalAmount = (data) => {
        return data.reduce((acc, item) => {
            const totalValue = item.total ? item.total.replace(' Rs', '') : '0'; // Ensure the total field exists
            return acc + parseFloat(totalValue);
        }, 0);
    };

    const totalRoomCharges = calculateTotalAmount(roomCharges);
    const totalDoctorFees = calculateTotalAmount(doctorFees);
    const totalMedications = calculateTotalAmount(medications);
    const totalOtherServices = calculateTotalAmount(otherServices);

    const grandTotal = totalRoomCharges + totalDoctorFees + totalMedications + totalOtherServices;
    const discountAmount = (grandTotal * discountPercentage) / 100;
    const finalTotal = grandTotal - discountAmount;



    const handleGeneratePDF = () => {
      const doc = new jsPDF();
      doc.text("Patient Billing Details", 10, 10);
      doc.text("Name: Jane Doe", 10, 20);
      doc.text("Room Charges: 10000 Rs", 10, 30);

      // Generate the PDF and get the Blob
      const pdfOutput = doc.output('blob');
      setPdfBlob(pdfOutput); // Store the blob in state
  };

  const handleShareBill = () => {
      if (navigator.share) {
          if (pdfBlob) {
              // Convert blob to a file
              const file = new File([pdfBlob], "billing_details.pdf", { type: "application/pdf" });
              
              // Use the Web Share API
              navigator.share({
                  title: 'Patient Billing Details',
                  text: 'Here is the billing information for the patient.',
                  files: [file], // Attach the PDF file here
              })
              .then(() => console.log('Bill shared successfully!'))
              .catch(error => console.error('Error sharing bill:', error));
          } else {
              alert("Generate the bill first before sharing.");
          }
      } else {
          alert('Web Share API is not supported in your browser.');
      }
  };

    return (
        <div className="ipd_billing-container">
            <div className="ipd_billing-input-group">
                <div className="ipd_billing-input-container">
                    <input
                        type="text"
                        placeholder="Search IPD Patient"
                        value={inputValueIpd}
                        onChange={(e) => setInputValueIpd(e.target.value)}
                    />
                    <button onClick={handleIpdButtonClick}>
                        Search
                    </button>
                </div>
            </div>

            {isIpdTableVisible && (
                <div className="ipd_billing-section print-content">
                    <div className='ipd-patientdetails'>
                        <span>
                            &nbsp;&nbsp;<FaUser size={14} color="#000" />&nbsp;Name:&nbsp;{patientDetails.name}&nbsp;&nbsp;&nbsp;&nbsp;
                        </span>
                        <span>
                            <FaMale size={14} color="#000" title="Age" />&nbsp;Age/Sex:&nbsp;{patientDetails.ageSex}&nbsp;&nbsp;&nbsp;
                        </span>
                        <span><FaCalendarCheck size={14} color={"#000"} />&nbsp;Visit Type:&nbsp;{patientDetails.visitType}</span>&nbsp;&nbsp;&nbsp;&nbsp;
                        <span><FaAddressBook size={14} color={"#000"} />&nbsp;Address:&nbsp;{patientDetails.address}</span>&nbsp;&nbsp;&nbsp;&nbsp;
                        <span><FaPhone size={14} color={"#000"} />&nbsp;Contact No:&nbsp;{patientDetails.contactNo}</span>&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>

                    <div className='ipd-billing-tables'>
                        <h6>Room Charges</h6>
                        <table>
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Room No</th>
                                    <th>Days</th>
                                    <th>Rate</th>
                                    <th>Total</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {roomCharges.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.date}</td>
                                        <td>{item.roomNo}</td>
                                        <td>{item.days}</td>
                                        <td>{item.rate}</td>
                                        <td>{item.total}</td>
                                        <td>{item.billstatus}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <h6>Doctor Fees</h6>
                        <table>
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Doctor Name</th>
                                    <th>Visit Type</th>
                                    <th>Charges</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {doctorFees.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.date}</td>
                                        <td>{item.doctorName}</td>
                                        <td>{item.visitType}</td>
                                        <td>{item.charges}</td>
                                        <td>{item.billstatus}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <h6>Medications</h6>
                        <table>
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Medicine Name</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Total</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {medications.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.date}</td>
                                        <td>{item.medicineName}</td>
                                        <td>{item.quantity}</td>
                                        <td>{item.price}</td>
                                        <td>{item.total}</td>
                                        <td>{item.billstatus}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <h6>Other Services</h6>
                        <table>
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Service</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {otherServices.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.date}</td>
                                        <td>{item.service}</td>
                                        <td>{item.price}</td>
                                        <td>{item.billstatus}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <h6>Summary</h6>
                        <table>
                            <thead>
                                <tr>
                                    <th>Table Name</th>
                                    <th>Subtotal</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Room Charges</td>
                                    <td>{totalRoomCharges} Rs</td>
                                    <td>{totalRoomCharges} Rs</td>
                                </tr>
                                <tr>
                                    <td>Doctor Fees</td>
                                    <td>{totalDoctorFees} Rs</td>
                                    <td>{totalDoctorFees} Rs</td>
                                </tr>
                                <tr>
                                    <td>Medications</td>
                                    <td>{totalMedications} Rs</td>
                                    <td>{totalMedications} Rs</td>
                                </tr>
                                <tr>
                                    <td>Other Services</td>
                                    <td>{totalOtherServices} Rs</td>
                                    <td>{totalOtherServices} Rs</td>
                                </tr>
                                <tr>
                                    <th>Grand Total</th>
                                    <th>{grandTotal} Rs</th>
                                    <th>{grandTotal} Rs</th>
                                </tr>
                                <tr>
                                    <th>Discount (%)</th>
                                    <th>
                                        <input
                                            type="number"
                                            value={discountPercentage}
                                            onChange={(e) => setDiscountPercentage(e.target.value)}
                                            placeholder="Discount %"
                                        />
                                    </th>
                                    <th>- {discountAmount} Rs</th>
                                </tr>
                                <tr>
                                    <th>Final Total</th>
                                    <th>{finalTotal} Rs</th>
                                    <th>{finalTotal} Rs</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='ipd-opd-printsection'>
                    <button  className='ipdbill-printbtn' onClick={handlePrintTable}>Print</button>
                    <button className='ipdbill-printbtn' onClick={handleGeneratePDF}>Generate Bill</button>
                    <button className='ipdbill-printbtn' onClick={handleShareBill}>Share Bill</button>
                    </div>
                </div>
            )}

            
        </div>
    );
}

export default Ipbilling;
