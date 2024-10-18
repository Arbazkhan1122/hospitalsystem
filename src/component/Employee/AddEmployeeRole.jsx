import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './AddEmployeeRole.css';
import { API_BASE_URL } from '../api/api';

const AddEmployeeRoleForm = ({ show, handleClose, roleData }) => {      
  const [role, setRole] = useState('');
  const [description, setDescription] = useState('');
  const [isActive, setIsActive] = useState(true);

  // Effect to populate form fields when roleData changes
  useEffect(() => {
    if (roleData && roleData.role) {
      console.log(roleData.employeeRoleId);
      
      setRole(roleData.role.role);
      setDescription(roleData.role.description);
      setIsActive(roleData.role.isActive !== undefined ? roleData.role.isActive : true); // Default to true if isActive is not provided
    } else {
      // Reset form when not editing
      setRole('');
      setDescription('');
      setIsActive(true);
    }
  }, [roleData, show]); // Run effect when roleData or show changes

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create an object to send
    const employeeRole = {
      role,
      description,
      isActive,
    };

    try {
      let response;
      if (roleData.role.employeeRoleId) {
        
        response = await fetch(`${API_BASE_URL}/employeeRoles/${roleData.role.employeeRoleId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(employeeRole),
        });
      } else {
        // Create new role
        response = await fetch(`${API_BASE_URL}/employeeRoles/create`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(employeeRole),
        });
      }

      if (response.ok) {
        const newEmployeeRole = await response.json();
        console.log(roleData ? 'Employee Role updated:' : 'New Employee Role added:', newEmployeeRole);
        handleClose(); // Close the modal after successful submission
      } else {
        console.error('Failed to add/update Employee Role:', response.statusText);
      }
    } catch (error) {
      console.error('Error while adding/updating Employee Role:', error);
    }
  };

  return (
    <Modal show={show} onHide={handleClose} dialogClassName="add-employee-role">
      <div className="emp-modal-dialog">
        <div className="emp-modal-header">
          <div className="emp-modal-title">{roleData && roleData.id ? 'Edit Employee Role' : 'Add Employee Role'}</div>
          <Button onClick={handleClose} className="add-employee-role-btn">X</Button>
        </div>
        <div className="emp-modal-body">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="role">
              <Form.Label className="emp-form-label">Role <span className="emp-text-danger">*</span> :</Form.Label>
              <Form.Control
                type="text"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                placeholder="Role"
                required
                className="emp-form-control"
              />
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label className="emp-form-label">Description :</Form.Label>
              <Form.Control
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
                className="emp-form-control"
              />
            </Form.Group>
            <Form.Group controlId="isActive" className='emp-form-group'>
              <Form.Label className="emp-form-label">Is Active :</Form.Label>
              <Form.Check
                type="checkbox"
                checked={isActive}
                onChange={(e) => setIsActive(e.target.checked)}
                className="emp-form-check-input"
              />
            </Form.Group>
            <Button type="submit" className="add-employee-btn">
              {roleData && roleData.id ? 'Update' : 'Add'}
            </Button>
          </Form>
        </div>
      </div>
    </Modal>
  );
};

export default AddEmployeeRoleForm;
