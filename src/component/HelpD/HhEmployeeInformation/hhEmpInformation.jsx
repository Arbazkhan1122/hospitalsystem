
import React from 'react';
import "../HhEmployeeInformation/hhEmpInformation.css"

const HHEmpInformation = () => {
  const employees = [
    { name: "Dr PHRM Anonymous Doctor", designation: "Doctor", department: "ADMINISTRATION", phone: "0", ext: "", speedDial: "", room: "", hours: "0" },
    { name: "Dr VICTOR OCHIENG OKECH", designation: "", department: "Pathology", phone: "0711000116", ext: "", speedDial: "", room: "", hours: "0" },
    { name: "Mrs Dorcas MUMBUA KITUTA", designation: "", department: "NURSING STATION", phone: "0711000119", ext: "", speedDial: "", room: "", hours: "0" },
    { name: "Mrs Dorine AWUOR OWIYO", designation: "", department: "NURSING STATION", phone: "0711000122", ext: "", speedDial: "", room: "", hours: "0" },
    { name: "Mrs Beatrice MUTHONI KIIO", designation: "", department: "Pathology", phone: "0711000124", ext: "", speedDial: "", room: "", hours: "0" },
    { name: "Mr DENNIS MURANGIRI NJUE", designation: "", department: "Peaditric", phone: "0711000128", ext: "", speedDial: "", room: "", hours: "0" },
    { name: "Mr KEPHA OPIYO ODINDO", designation: "Doctor", department: "Dermatology & C...", phone: "0711000135", ext: "", speedDial: "", room: "", hours: "0" },
    { name: "Mrs BRENDA MWANIA WANJI...", designation: "", department: "Operation Thetre", phone: "0711000137", ext: "", speedDial: "", room: "", hours: "0" },
    { name: "Mr COLLINS GIKUNGU MAINA", designation: "", department: "Laboratory", phone: "0711000138", ext: "", speedDial: "", room: "", hours: "0" },
    { name: "Mrs CAROLINE wanjiru WAN...", designation: "", department: "Dispensary", phone: "0711000139", ext: "", speedDial: "", room: "", hours: "0" },
    { name: "Mrs BERTHA WANGARI WAIR...", designation: "", department: "Orthopedic/Spine", phone: "0711000141", ext: "", speedDial: "", room: "", hours: "0" },
  ];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="hh-employee-list">
      <h4>List of Employees:</h4>
      
      <div className="hh-search-container-N-search">
        <div className="hh-search-container">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="Search" className="hh-search-input" />
        </div>
        <div className="hh-results-info">
          <span>Showing 34 / 34 results</span>
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
            {employees.map((employee, index) => (
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
