import React, { useState } from 'react';
import './UpdateDepartmentForm.css';

const UpdateDepartmentForm = ({ onClose }) => {
  const [departmentCode, setDepartmentCode] = useState('ACC');
  const [departmentName, setDepartmentName] = useState('Account');
  const [parentDepartment, setParentDepartment] = useState('');
  const [departmentDescription, setDepartmentDescription] = useState('');
  const [departmentNoticeText, setDepartmentNoticeText] = useState('');
  const [departmentHead, setDepartmentHead] = useState('');
  const [roomNumber, setRoomNumber] = useState('');
  const [isActive, setIsActive] = useState('Yes');
  const [isAppointmentApplicable, setIsAppointmentApplicable] = useState('No');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log({
      departmentCode,
      departmentName,
      parentDepartment,
      departmentDescription,
      departmentNoticeText,
      departmentHead,
      roomNumber,
      isActive,
      isAppointmentApplicable,
    });
  };

  return (
    <div className="update-setting-department-form-container">
      <button className="update-setting-form-close-btn" onClick={onClose}>X</button>
      <form className="update-setting-department-form" onSubmit={handleSubmit}>
        <h2>Update Department</h2>

        <div className="update-setting-form-group">
          <label>Department Code<span>*</span></label>
          <span>:</span>
          <input
            type="text"
            value={departmentCode}
            onChange={(e) => setDepartmentCode(e.target.value)}
            disabled
          />
        </div>

        <div className="update-setting-form-group">
          <label>Department Name<span>*</span></label>
          <span>:</span>
          <input
            type="text"
            value={departmentName}
            onChange={(e) => setDepartmentName(e.target.value)}
          />
        </div>

        <div className="update-setting-form-group">
          <label>Parent Department Name</label>
          <span>:</span>
          <select
            value={parentDepartment}
            onChange={(e) => setParentDepartment(e.target.value)}
          >
            <option value="">--select--</option>
            {/* Add options here */}
          </select>
        </div>

        <div className="update-setting-form-group">
          <label>Department Description</label>
          <span>:</span>
          <textarea
            value={departmentDescription}
            onChange={(e) => setDepartmentDescription(e.target.value)}
          ></textarea>
        </div>

        <div className="update-setting-form-group">
          <label>Department Notice Text</label>
          <span>:</span>
          <textarea
            value={departmentNoticeText}
            onChange={(e) => setDepartmentNoticeText(e.target.value)}
          ></textarea>
        </div>

        <div className="update-setting-form-group">
          <label>Department Head</label>
          <span>:</span>
          <input
            type="text"
            value={departmentHead}
            onChange={(e) => setDepartmentHead(e.target.value)}
          />
        </div>

        <div className="update-setting-form-group">
          <label>Room Number</label>
          <span>:</span>
          <input
            type="text"
            value={roomNumber}
            onChange={(e) => setRoomNumber(e.target.value)}
          />
        </div>

        <div className="update-setting-form-group">
          <label>Is Active</label>
          <span>:</span>
          <select
            value={isActive}
            onChange={(e) => setIsActive(e.target.value)}
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="update-setting-form-group">
          <label>Is Appointment Applicable</label>
          <span>:</span>
          <select
            value={isAppointmentApplicable}
            onChange={(e) => setIsAppointmentApplicable(e.target.value)}
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="update-setting-form-group submit-btn">
          <button type="submit">Update</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateDepartmentForm;
