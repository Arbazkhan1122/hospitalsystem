import React, { useState } from 'react';
import './sampleCollection.css'; // Import CSS module
import { useNavigate } from 'react-router-dom';
import CollectSample from './CollectSample';

const tableData = [
  {
    date: "2024-09-02 18:22",
    number: "2408003819",
    name: "S Suresh",
    ageSex: "45 Y/M",
    phone: "1234567899",
    dept: "outpatient",
    type: "OP",
    run: "normal",
  },
  {
    date: "2024-08-08 17:12",
    number: "2408003810",
    name: "hamza waheed",
    ageSex: "21 Y/M",
    phone: "3207642712",
    dept: "outpatient",
    type: "OP",
    run: "normal",
  },
  {
    date: "2024-07-26 15:01",
    number: "2406003783",
    name: "Monicah Juma",
    ageSex: "34 Y/F",
    phone: "0764565656",
    dept: "MATERNITY WARD",
    type: "IP",
    run: "normal",
  },
  {
    date: "2024-06-27 17:36",
    number: "2406003789",
    name: "Test Patient",
    ageSex: "25 Y/M",
    phone: "123456789",
    dept: "ICU",
    type: "IP",
    run: "normal",
  },
  {
    date: "2024-06-18 14:12",
    number: "2406003767",
    name: "Joseph Wambui",
    ageSex: "34 Y/M",
    phone: "0745634536",
    dept: "outpatient",
    type: "OP",
    run: "normal",
  },
  {
    date: "2024-05-13 19:16",
    number: "2402003690",
    name: "ROSEMARY KATHANJI",
    ageSex: "24 Y/F",
    phone: "715641995",
    dept: "outpatient",
    type: "OP",
    run: "normal",
  },
  {
    date: "2024-02-16 15:34",
    number: "2402000025",
    name: "Favour Mercy",
    ageSex: "24 Y/F",
    phone: "0720000122",
    dept: "outpatient",
    type: "OP",
    run: "normal",
  },
  {
    date: "2023-12-15 15:39",
    number: "2312000010",
    name: "Sonia Chebii",
    ageSex: "9 M/F",
    phone: "987456321",
    dept: "outpatient",
    type: "OP",
    run: "normal",
  },
  {
    date: "2023-12-04 12:33",
    number: "2311000033",
    name: "Titus Kipsang",
    ageSex: "32 Y/M",
    phone: "20202020",
    dept: "outpatient",
    type: "OP",
    run: "normal",
  },
  {
    date: "2023-12-01 12:40",
    number: "2312000009",
    name: "Raphael Kipruto",
    ageSex: "50 Y/M",
    phone: "123456752",
    dept: "outpatient",
    type: "OP",
    run: "normal",
  },
  {
    date: "2023-11-29 10:06",
    number: "2311000004",
    name: "Jane Boke",
    ageSex: "20 Y/F",
    phone: "222222222",
    dept: "outpatient",
    type: "OP",
    run: "normal",
  },
  {
    date: "2023-11-28 17:40",
    number: "2311000003",
    name: "Titus Kipsang",
    ageSex: "32 Y/M",
    phone: "20202020",
    dept: "Female Ward",
    type: "IP",
    run: "normal",
  },
];



const SampleCollection = () => {

  const [selectedSample, setSelectedSample] = useState(null);

  // Handle collecting the sample
  const handleCollectSample = (sample) => {
    setSelectedSample(sample); // Store the selected row's data
  };

  // Render the CollectSample page if a sample is selected
  if (selectedSample) {
    return <CollectSample sample={selectedSample} />;
  }
  return (
    <div className="labContainer">
      <div className="labHeader">
        <h1 className="labTitle">List Requisition</h1>
        <button className="labButton labButtonGreen">Samples Collected List</button>
      </div>
      <div className="labDateFilters">
        <div className="flex items-center gap-2">
          <label htmlFor="from-date" className="labDateFilterLabel">
            From:
          </label>
          <input type="date" id="from-date" defaultValue="2023-09-06" className="labInput" />
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="to-date" className="labDateFilterLabel">
            To:
          </label>
          <input type="date" id="to-date" defaultValue="2024-09-06" className="labInput" />
        </div>
        <button className="labButton">OK</button>
      </div>
      <div className="labSearchPrint">
        <input type="search" placeholder="Search" className="labSearchInput" />
        <button className="labButton labButtonPrint">Print</button>
      </div>
      <div className="labTableWrapper">
        <table className="labTable">
          <thead>
            <tr>
              <th className="labTableHeader">Requisition Date</th>
              <th className="labTableHeader">Hospital Number</th>
              <th className="labTableHeader">Patient Name</th>
              <th className="labTableHeader">Age/Sex</th>
              <th className="labTableHeader">Phone Number</th>
              <th className="labTableHeader">Requesting Dept.</th>
              <th className="labTableHeader">Visit Type</th>
              <th className="labTableHeader">Run Number ...</th>
              <th className="labTableHeader">Action</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index}>
                <td className="labTableCell">{row.date}</td>
                <td className="labTableCell">{row.number}</td>
                <td className="labTableCell">{row.name}</td>
                <td className="labTableCell">{row.ageSex}</td>
                <td className="labTableCell">{row.phone}</td>
                <td className="labTableCell">{row.dept}</td>
                <td className="labTableCell">{row.type}</td>
                <td className="labTableCell">{row.run}</td>
                <td className="labTableCell">
                  <button
                    className="labButton labButtonPrint"
                    onClick={() => handleCollectSample(row)} // Pass the row's data
                  >
                    View Details
                  </button>            </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="labPagination">
        <span>Showing 12 / 12 results</span>
        <div className="labPaginationControls">
          <button className="labButton labPaginationButton">First</button>
          <button className="labButton labPaginationButton">Previous</button>
          <span>1 to 12 of 12</span>
          <button className="labButton labPaginationButton">Next</button>
          <button className="labButton labPaginationButton">Last</button>
        </div>
      </div>
    </div>
  );
}

export default SampleCollection;
