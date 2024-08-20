import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './EditIncentiveTxnItem.css'; // Import the CSS file for styles

const EditIncentiveTxnItem = ({ txnItemToEdit = {}, allEmpList = [], onClose }) => {
  const [item, setItem] = useState(txnItemToEdit);
  const [showAddFractionDiv, setShowAddFractionDiv] = useState(false);
  const [fractionTransactionItems, setFractionTransactionItems] = useState([]);
  const [isFractionValid, setIsFractionValid] = useState(true);
  const [isPercentagesValid, setIsPercentagesValid] = useState(true);

  useEffect(() => {
    if (txnItemToEdit) {
      setItem({ ...txnItemToEdit });
      setFractionTransactionItems([
        {
          EmployeeId: txnItemToEdit.AssignedToEmpId,
          EmployeeName: txnItemToEdit.AssignedToEmpName,
          FinalPercent: txnItemToEdit.AssignedToPercent,
          FinalAmount: txnItemToEdit.AssignedToAmount
        }
      ]);
    }
  }, [txnItemToEdit]);

  const checkIfPercentValid = () => {
    const assignedToPercent = item.AssignedToPercent || 0;
    const referredByPercent = item.ReferredByPercent || 0;
    const totalPercent = assignedToPercent + referredByPercent;
    setIsPercentagesValid(totalPercent <= 100);
  };

  const onReferredByPercentChange = (event) => {
    const value = event.target.value;
    setItem(prevState => ({
      ...prevState,
      ReferredByPercent: value,
      ReferralAmount: prevState.TotalAmount * value / 100
    }));
    checkIfPercentValid();
  };

  const onAssignedToPercentChange = (event) => {
    const value = event.target.value;
    setItem(prevState => ({
      ...prevState,
      AssignedToPercent: value,
      AssignedToAmount: prevState.TotalAmount * value / 100
    }));
    checkIfPercentValid();
  };

  const addFraction = () => {
    setFractionTransactionItems(prevState => [
      ...prevState,
      {
        EmployeeId: item.AssignedToEmpId,
        EmployeeName: item.AssignedToEmpName,
        FinalPercent: item.AssignedToPercent,
        FinalAmount: item.AssignedToAmount
      }
    ]);
    setShowAddFractionDiv(true);
  };

  const deleteRow = (index) => {
    setFractionTransactionItems(prevState => {
      const updatedItems = [...prevState];
      updatedItems.splice(index, 1);
      onFinalPercentChange();
      return updatedItems;
    });
  };

  const onFractionEmpChange = (index, event) => {
    const value = event.target.value;
    setFractionTransactionItems(prevState => {
      const updatedItems = [...prevState];
      updatedItems[index].EmployeeId = value;
      updatedItems[index].hasError = false;
      if (value === '0') {
        updatedItems[index].hasError = true;
      } else {
        updatedItems.forEach((item, idx) => {
          if (idx !== index && item.EmployeeId === value) {
            updatedItems[index].hasError = true;
          }
        });
      }
      return updatedItems;
    });
  };

  const onFinalPercentChange = (index) => {
    let totalPercent = 0;
    fractionTransactionItems.forEach((item, idx) => {
      if (idx > 0) {
        totalPercent += item.FinalPercent;
      }
    });
    if (totalPercent > item.AssignedToPercent) {
      setIsFractionValid(false);
    } else {
      setIsFractionValid(true);
      setFractionTransactionItems(prevState => {
        const updatedItems = [...prevState];
        updatedItems[0].FinalPercent = item.AssignedToPercent - totalPercent;
        updatedItems[0].FinalAmount = item.TotalAmount * updatedItems[0].FinalPercent / 100;
        if (index !== undefined) {
          updatedItems[index].FinalAmount = item.TotalAmount * updatedItems[index].FinalPercent / 100;
        }
        return updatedItems;
      });
    }
  };

  const addFractionRow = () => {
    setFractionTransactionItems(prevState => [
      ...prevState,
      {
        EmployeeId: '0',
        EmployeeName: '',
        FinalPercent: 0,
        FinalAmount: 0
      }
    ]);
  };

  const checkIfFractionValid = () => {
    let isValid = true;
    if (showAddFractionDiv) {
      if (!isFractionValid) {
        isValid = false;
      }
      fractionTransactionItems.forEach(a => {
        if (a.EmployeeId === '0') {
          a.hasError = true;
        }
      });
      if (fractionTransactionItems.some(a => a.hasError)) {
        isValid = false;
      }
    }
    return isValid;
  };

  const handleSave = () => {
    // Add your save logic here
  };

  return (
    <div className="popup-static portlet box portlet-fullscreen">
      <div className="portlet-body form">
        <div className="modelbox-div">
          <div className="header">
            <div className="col-md-12">
              <p>
                <label className="title">Edit Items</label>
                <button className="btn btn-danger close-button" onClick={onClose}>X</button>
              </p>
            </div>
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-4">
                  <label>Patient Name:</label>
                  <b>{item.PatientName}</b>
                </div>
                <div className="col-md-4">
                  <label>Hospital Number:</label>
                  <b>{item.PatientCode}</b>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-4">
                    <label>Transaction Date</label>
                    <b>{item.TransactionDate}</b>
                  </div>
                  <div className="col-md-4">
                    <label>Item Name:</label>
                    <b>{item.ItemName}</b>
                  </div>
                  <div className="col-md-4">
                    <label>Service Department:</label>
                    <b>{item.ItemName}</b>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <br />
            <div className="col-md-12 pat-hdr">
              <div className="row">
                <div className="col-md-12">
                  <label>Amount:</label>
                  <b>{item.TotalAmount}</b>
                </div>
              </div>
            </div>
            <div className="col-md-12 pat-hdr">
              <div className="row">
                <div className="col-md-4">
                  <label>Assigned To</label>
                  <select
                    className="form-control"
                    onChange={(e) => setItem({ ...item, AssignedToEmpId: e.target.value })}
                    value={item.AssignedToEmpId}
                  >
                    <option value="" disabled>Select Employee</option>
                    {allEmpList.map(emp => (
                      <option key={emp.EmployeeId} value={emp.EmployeeId}>
                        {emp.FullName}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-md-4">
                  <label>Assigned To Percent</label>
                  <input
                    type="number"
                    className="form-control"
                    min="0"
                    max="100"
                    step="0.01"
                    value={item.AssignedToPercent}
                    onChange={onAssignedToPercentChange}
                  />
                </div>
                <div className="col-md-4">
                  <label>Assigned To Amount</label>
                  <input
                    type="number"
                    className="form-control"
                    value={item.AssignedToAmount}
                    readOnly
                  />
                </div>
              </div>
            </div>
            {showAddFractionDiv && (
              <div className="col-md-12 pat-hdr">
                <div className="row">
                  <div className="col-md-6">
                    <label>Fraction Details</label>
                    {fractionTransactionItems.map((item, index) => (
                      <div key={index} className="fraction-item">
                        <div className="form-group">
                          <label>Employee</label>
                          <select
                            className="form-control"
                            value={item.EmployeeId}
                            onChange={(e) => onFractionEmpChange(index, e)}
                          >
                            <option value="0">Select Employee</option>
                            {allEmpList.map(emp => (
                              <option key={emp.EmployeeId} value={emp.EmployeeId}>
                                {emp.FullName}
                              </option>
                            ))}
                          </select>
                          {item.hasError && <span className="error">Duplicate or invalid employee</span>}
                        </div>
                        <div className="form-group">
                          <label>Final Percent</label>
                          <input
                            type="number"
                            className="form-control"
                            min="0"
                            max="100"
                            step="0.01"
                            value={item.FinalPercent}
                            onChange={(e) => {
                              const value = parseFloat(e.target.value) || 0;
                              setFractionTransactionItems(prevState => {
                                const updatedItems = [...prevState];
                                updatedItems[index].FinalPercent = value;
                                updatedItems[index].FinalAmount = item.TotalAmount * value / 100;
                                onFinalPercentChange(index);
                                return updatedItems;
                              });
                            }}
                          />
                        </div>
                        <div className="form-group">
                          <label>Final Amount</label>
                          <input
                            type="number"
                            className="form-control"
                            value={item.FinalAmount}
                            readOnly
                          />
                        </div>
                        {index > 0 && (
                          <button type="button" className="btn btn-danger" onClick={() => deleteRow(index)}>
                            Delete
                          </button>
                        )}
                      </div>
                    ))}
                    <button type="button" className="btn btn-primary" onClick={addFractionRow}>
                      Add Fraction
                    </button>
                  </div>
                </div>
                {!isFractionValid && <span className="error">Total fraction percent exceeds assigned percent</span>}
              </div>
            )}
            <br />
            <div className="col-md-12">
              <button
                type="button"
                className="btn btn-success"
                disabled={!checkIfFractionValid() || !isPercentagesValid}
                onClick={handleSave}
              >
                Save
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

EditIncentiveTxnItem.propTypes = {
  txnItemToEdit: PropTypes.object,
  allEmpList: PropTypes.array.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default EditIncentiveTxnItem;
