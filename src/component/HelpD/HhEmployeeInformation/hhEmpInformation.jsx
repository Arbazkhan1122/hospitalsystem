import React, { useEffect, useState } from 'react';
import "../HhEmployeeInformation/hhEmpInformation.css";

const HHEmpInformation = () => {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch('http://192.168.1.34:1415/api/employees');
        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorText}`);
        }
        const data = await response.json();
        console.log('Fetched data:', data);
        const formattedEmployees = data.map((employee) => ({
          name: `${employee.salutation || ''} ${employee.firstName || ''} ${employee.lastName || ''}`,
          designation: employee.employeeRoleDTO?.role || '',
          department: employee.departmentDTO?.departmentName || '',
          phone: employee.contactNumber || '',
          ext: employee.extension || '',
          speedDial: employee.speedDial || '',
          room: employee.roomNo || '',
          hours: employee.officeHour || '',
        }));
        setEmployees(formattedEmployees);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };
  
    fetchEmployees();
  }, []);
  


  const handlePrint = () => {
    window.print();
  };

  const filteredEmployees = employees.filter(employee =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.designation.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="hh-employee-list">
      <h4>List of Employees:</h4>

      <div className="hh-search-container-N-search">
        <div className="hh-search-container">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            type="text"
            placeholder="Search"
            className="hh-search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="hh-results-info">
          <span>Showing {filteredEmployees.length} / {employees.length} results</span>
          <button className="hh-print-button" onClick={handlePrint}>Print</button>
        </div>
      </div>

      <div className='hhEmpInfo-table-N-paginat'>
        <table>
          <thead>
            <tr>
              <th>Employee Name</th>
              <th>Designation</th>
              <th>Department</th>
              <th>Phone No.</th>
              <th>Ext.</th>
              <th>SpeedDial</th>
              <th>Room No.</th>
              <th>Office Hours</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.map((employee, index) => (
              <tr key={index}>
                <td>{employee.name}</td>
                <td>{employee.designation}</td>
                <td>{employee.department}</td>
                <td>{employee.phone}</td>
                <td>{employee.ext}</td>
                <td>{employee.speedDial}</td>
                <td>{employee.room}</td>
                <td>{employee.hours}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="hhEmpInfo-pagination">
          <span>0 to 0 of 0</span>
          <button>First</button>
          <button>Previous</button>
          <span>Page 0 of 0</span>
          <button>Next</button>
          <button>Last</button>
        </div>
      </div>
    </div>
  );
};

export default HHEmpInformation;
