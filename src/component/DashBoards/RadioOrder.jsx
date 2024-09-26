import React, { useState, useEffect } from 'react';
import { API_BASE_URL } from '../api/api';

const RadioOrder = ({ selectedOrders, setActiveSection, patientId, newPatientVisitId, employeeId }) => {
  const [labTestName, setLabTestName] = useState('');
  const [urgency, setUrgency] = useState('Normal');
  const [note, setNote] = useState('');

  // Use useEffect to autofill form fields based on selected orders
  useEffect(() => {
    if (selectedOrders.length > 0) {
      const firstOrder = selectedOrders[0]; // Assuming you're autofilling from the first selected order
      setLabTestName(firstOrder.imagingItemName || ''); // Autofill labTestName from the first selected order
      setUrgency(firstOrder.urgency || 'Normal'); // Autofill urgency if available
      setNote(firstOrder.requisitionRemark || ''); // Autofill note from requisition remark
    }
  }, [selectedOrders]); // Dependency on selectedOrders

  const handleSign = async () => {
    const requisitionData = selectedOrders.map((order) => ({
      requisitionDTO: {
        patientDTO: {
          patientId: patientId,
        },
        newPatientVisitDto:{
          newPatientVisitId:newPatientVisitId
        },
        imagingTypeDTO: {
          imagingTypeId: order.imagingTypeId,
        },
        imagingItemDTO: {
          imagingItemId: order.imagingItemId,
        },
        procedureCode: order.procedureCode,
        requisitionRemark: note,
        orderStatus: 'PENDING',
        prescriberDTO: {
          employeeId: employeeId,
        },
        urgency: urgency,
        requestedDate: new Date().toISOString().split('T')[0],
        requestedTime: new Date().toISOString().split('T')[1].split('.')[0],
        hasInsurance: '',
        wardName: '',
        isActive: 'Yes',
        isScanned: '',
        type: labTestName,
        status: 'Pending',
        signatureList: '',
      },
      serviceBilling: {
        serviceName: order.serviceName,
        serviceFee: order.serviceFee,
        discount: 0.0,
        totalServiceFee: order.serviceFee,
        department: 'Radiology',
        patient: {
          patientId: patientId,
        },
        services: {
          serviceId: order.serviceId,
        },
      },
    }));

    try {
      const response = await fetch(`${API_BASE_URL}/imaging-requisitions/createMultiple`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requisitionData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Submission successful:', result);
        handleCancel(); // Reset form
      } else {
        console.error('Error submitting form:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleCancel = () => {
    setActiveSection(true);
    setLabTestName('');
    setUrgency('Normal');
    setNote('');
  };

  return (
    <div className="RadioOrder-container">
      <h2>Image Order</h2>
      <table className="RadioOrder-table">
        <thead>
          <tr>
            <th>Imaging Name</th>
            <th>Urgency</th>
            <th>Note</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input
                type="text"
                value={labTestName}
                onChange={(e) => setLabTestName(e.target.value)}
                className="RadioOrder-input"
              />
            </td>
            <td>
              <div className="RadioOrder-radio-group">
                <label>
                  <input
                    type="radio"
                    value="Normal"
                    checked={urgency === 'Normal'}
                    onChange={(e) => setUrgency(e.target.value)}
                  />
                  Normal
                </label>
                <label>
                  <input
                    type="radio"
                    value="Urgent"
                    checked={urgency === 'Urgent'}
                    onChange={(e) => setUrgency(e.target.value)}
                  />
                  Urgent
                </label>
                <label>
                  <input
                    type="radio"
                    value="STAT"
                    checked={urgency === 'STAT'}
                    onChange={(e) => setUrgency(e.target.value)}
                  />
                  STAT
                </label>
              </div>
            </td>
            <td>
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="table-textarea"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div className="RadioOrder-action-container">
        <button className="RadioOrder-action-container-btn RadioOrder-action-container-btn-sign" onClick={handleSign}>
          Sign
        </button>
        <button className="RadioOrder-action-container-btn RadioOrder-action-container-btn-cancel" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default RadioOrder;
