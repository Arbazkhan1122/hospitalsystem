// import React from 'react';
// import "../LabSetting/mapGovernmentItems.css"
// const labTests = [
//   { componentName: "2 hr PP Blood Sugar", displayName: "2 hr PP Blood Sugar", unit: "mg/dl", range: "70-140", controlType: "TextBox", valueType: "number" },
//   { componentName: "ALKALINE PHOSPHATASE", displayName: "ALKALINE PHOSPHATASE", unit: "IU/L", range: "30-260", controlType: "TextBox", valueType: "number" },
//   // Add more rows as needed
// ];

// const MapGovernmentItemxs = () => {
//   return (
//     <div className="lab-test-container">
//       <button className="add-button">+Add New Lab Test Component</button>
//       <input type="text" className="search-box" placeholder="Search" />
//       <table className="lab-test-table">
//         <thead>
//           <tr>
//             <th>ComponentName</th>
//             <th>Display Name</th>
//             <th>Unit</th>
//             <th>Range</th>
//             <th>Range Description</th>
//             <th>Method</th>
//             <th>ControlType</th>
//             <th>ValueType</th>
//             <th>Value Lookup</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {labTests.map((test, index) => (
//             <tr key={index}>
//               <td>{test.componentName}</td>
//               <td>{test.displayName}</td>
//               <td>{test.unit}</td>
//               <td>{test.range}</td>
//               <td></td>
//               <td></td>
//               <td>{test.controlType}</td>
//               <td>{test.valueType}</td>
//               <td></td>
//               <td><button className="edit-button">Edit</button></td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <div className="results-info">Showing 74 / 74 results</div>
//       <button className="print-button">Print</button>
//     </div>
//   );
// };

// export default MapGovernmentItemxs;

import React from 'react';
import "../LabSetting/mapGovernmentItems.css"
const mapGovernmentItemsData = [
  { id: 1, govTestName: 'Hb', groupName: 'HIV RDT Total', mappedLabTestN: '', isComponentBased: 'false' ,componentName:'',positiveIndicator:'' },
  { id: 2, govTestName: 'RBC Count', groupName: 'HIV RDT Positive', mappedLabTestN: '', isComponentBased: 'false',componentName:'' ,positiveIndicator:''},
  { id: 3, govTestName: 'TLC', groupName: 'HAV ELISA/CLIA Total', mappedLabTestN: '', isComponentBased: 'false',componentName:'' ,positiveIndicator:''},
  { id: 4, govTestName: 'Platelets Count', groupName: 'HAV ELISA/CLIA Positive', mappedLabTestN: '', isComponentBased: 'false',componentName:'' ,positiveIndicator:''},
  { id: 5, govTestName: 'DLC ', groupName: 'HBsAg ELISA/CLIA Total' , mappedLabTestN: '', isComponentBased: 'false', componentName:'',positiveIndicator:''},
  { id: 6, govTestName: 'ESR', groupName: 'HBsAg ELISA/CLIA Posit', mappedLabTestN: '', isComponentBased: 'false' ,componentName:'',positiveIndicator:''},
  { id: 7, govTestName: 'PCV/Hct', groupName: 'HCV RDT Total', mappedLabTestN: '', isComponentBased: 'false' ,componentName:'',positiveIndicator:''},
  { id: 8, govTestName: 'MCV', groupName: 'HCV RDT Positive', mappedLabTestN: '', isComponentBased: 'false' ,componentName:'',positiveIndicator:''},
  { id: 9, govTestName: 'MCH', groupName: 'HEV ELISA/CLIA Total', mappedLabTestN: '', isComponentBased: 'false',componentName:'' ,positiveIndicator:''},
  { id: 10, govTestName: 'MCHC', groupName: 'HEV ELISA/CLIA Positive', mappedLabTestN: '', isComponentBased: 'false',componentName:'' ,positiveIndicator:''},
  { id: 11, govTestName: 'RDW', groupName: 'Anti-HBs', mappedLabTestN: '', isComponentBased: 'false' ,componentName:'',positiveIndicator:''},
];

function MapGovernmentItemxs() {
  return (
    <div className="app">
      <button className="add-lookup-btn">+Add New Look-up</button>
      <div className="search-container">
        <input type="text" placeholder="Search" className="search-input" />
        <button className="search-btn">🔍</button>
      </div>
      <div className="results-info">
        Showing 29 / 29 results
        <button className="print-btn">Print</button>
      </div>
      <table className="lookup-table">
        <thead>
          <tr>
            <th>S.N</th>
            <th>Gov. Test Name</th>
            <th>Group Name</th>
            <th>Mapped Lab Test N...</th>
            <th>Is Component Based</th>
            <th>Component Name</th>
            <th>Positive Indicator</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {mapGovernmentItemsData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.govTestName}</td>
              <td>{item.groupName}</td>
              <td>{item.mappedLabTestN}</td>
              <td>{item.isComponentBased}</td>
              <td>{item.componentName}</td>
              <td>{item.positiveIndicator}</td>
              <td>
                <button className="edit-btn">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MapGovernmentItemxs;