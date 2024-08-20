import React from 'react';
// import './App.css';
import "../NavBarSection/navWardBilling.css"

const patients = [
  { hospitalNo: '2407003799', name: 'ANGEL VARGAS MONTERO', ageSex: '32 Y/F', contact: '0926641813', admittedDate: '2024-07-30 11:06', admittingDoctor: 'Mrs. BRENDA MWANIA W...', inpatientNo: 'H2400023', wardBed: 'ICU-02' },
  { hospitalNo: '2407003800', name: 'NORALINE SHIT PACQUIO', ageSex: '30 Y/F', contact: '0964823145', admittedDate: '2024-07-30 09:37', admittingDoctor: 'Dr. Emmanuel Bassy', inpatientNo: 'H2400022', wardBed: 'MATERNITY WA...' },
  { hospitalNo: '2406003781', name: 'Nancy Wahoma', ageSex: '78 Y/F', contact: '0784953627', admittedDate: '2024-06-24 12:04', admittingDoctor: 'Mr. COLLINS KIPKEMEI', inpatientNo: 'H2400017', wardBed: 'MATERNITY WA...' },
  { hospitalNo: '2406003766', name: 'Joseph Gathanga', ageSex: '16 Y/M', contact: '0735634231', admittedDate: '2024-06-18 12:50', admittingDoctor: 'Mrs. BRENDA MWANIA W...', inpatientNo: 'H2400016', wardBed: 'Private Ward-09' },
  { hospitalNo: '2406003772', name: 'Katherine Wanjiku', ageSex: '45 Y/F', contact: '0785563721', admittedDate: '2024-06-18 12:18', admittingDoctor: 'Dr. VICTOR OCHIENG OKE...', inpatientNo: 'H2400015', wardBed: 'Female Ward-...' },
  { hospitalNo: '2406003769', name: 'Joy Prudence', ageSex: '23 Y/F', contact: '0782563421', admittedDate: '2024-06-18 12:16', admittingDoctor: 'Dr. VICTOR OCHIENG OKE...', inpatientNo: 'H2400014', wardBed: 'Female Ward-...' },
  { hospitalNo: '2406003730', name: 'Ravi Singh', ageSex: '35 Y/M', contact: '9650727612', admittedDate: '2024-06-16 22:39', admittingDoctor: 'Dr. pooja Mishra', inpatientNo: 'H2400013', wardBed: 'Male Ward-004' },
  { hospitalNo: '2406003720', name: 'Yvette Kenaan', ageSex: '56 Y/F', contact: '0892638689', admittedDate: '2024-06-13 16:15', admittingDoctor: 'Mrs. BRENDA MWANIA W...', inpatientNo: 'H2400012', wardBed: 'Female Ward-...' },
  { hospitalNo: '2406003723', name: 'Taimi Jayde', ageSex: '23 Y/F', contact: '0789191273', admittedDate: '2024-06-13 16:14', admittingDoctor: 'Mr. COLLINS KIPKEMEI', inpatientNo: 'H2400011', wardBed: 'MATERNITY WA...' },
  { hospitalNo: '2406003726', name: 'Maddalen Maimu', ageSex: '65 Y/M', contact: '0738929191', admittedDate: '2024-06-13 16:13', admittingDoctor: 'Dr. Amit Shah', inpatientNo: 'H2400010', wardBed: 'Male Ward-002' },
  { hospitalNo: '2406003703', name: 'Stocazzo Coidenti', ageSex: '40 Y/F', contact: '0663666544', admittedDate: '2024-06-10 14:31', admittingDoctor: 'Prof. Dr. Hannah Benta', inpatientNo: 'H2400009', wardBed: 'Female Ward-...' },
  { hospitalNo: '2402003692', name: 'LUCY Ndolo', ageSex: '24 Y/F', contact: '726356972', admittedDate: '2024-05-17 21:44', admittingDoctor: 'INNOCENT TENGO', inpatientNo: 'H2400006', wardBed: 'Male Ward-003' },
  { hospitalNo: '2402000028', name: 'Joseph Stalin', ageSex: '34 Y/M', contact: '0876676676', admittedDate: '2024-03-01 08:19', admittingDoctor: 'INNOCENT TENGO', inpatientNo: 'H2400003', wardBed: 'Male Ward-005' },
];

function NavWardBilling() {
  return (
    <div className="app">
      <div className="search-container">
        <input type="text" placeholder="Search" className="search-input" />
        <button className="search-btn">🔍</button>
      </div>
      <div className="results-info">
        Showing 13 / 13 results
        <button className="print-btn">Print</button>
      </div>
      <table className="patient-table">
        <thead>
          <tr>
            <th>Hospital No.</th>
            <th>Patient Name</th>
            <th>Age/Sex</th>
            <th>Contact</th>
            <th>Admitted Date</th>
            <th>Admitting Doctor</th>
            <th>Inpatient No.</th>
            <th>Ward/Bed</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient, index) => (
            <tr key={index}>
              <td>{patient.hospitalNo}</td>
              <td>{patient.name}</td>
              <td>{patient.ageSex}</td>
              <td>{patient.contact}</td>
              <td>{patient.admittedDate}</td>
              <td>{patient.admittingDoctor}</td>
              <td>{patient.inpatientNo}</td>
              <td>{patient.wardBed}</td>
              <td><button className="view-btn">View Detail</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <span>1 to 13 of 13</span>
        <button disabled>First</button>
        <button disabled>Previous</button>
        <span>Page 1 of 1</span>
        <button disabled>Next</button>
        <button disabled>Last</button>
      </div>
    </div>
  );
}

export default NavWardBilling;