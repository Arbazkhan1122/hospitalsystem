import React from 'react';
import "../LabSetting/looksUps.css"
const lookupData = [
  { id: 1, module: 'Lab', name: 'Urine-Color', data: '["Light Yellow","Yellow","Red","Deep Yellow","Milky","Straw","Whitish","Greenish...', description: '' },
  { id: 2, module: 'Lab', name: 'Turbidity', data: '["Clear","Turbid","Slightly Turbid"]', description: '' },
  { id: 3, module: 'Lab', name: 'Urine-Reaction', data: '["Acidic","Alkaline"]', description: '' },
  { id: 4, module: 'Lab', name: 'Nil-Trace', data: '["Nil","Trace","+","++","+++","++++"]', description: '' },
  { id: 5, module: 'Lab', name: 'Nil-Plenty', data: '["Nil","Plenty"]', description: '' },
  { id: 6, module: 'Lab', name: 'Negative-Positive', data: '["Negative","Positive"]', description: '' },
  { id: 7, module: 'Lab', name: 'Culture-Sensitivity', data: '["Sensitive","Intermediate","Resistant"]', description: '' },
  { id: 8, module: 'Lab', name: 'Stool-Color', data: '["Brown","Yellow","Black","Red","Greenish Yellow"]', description: '' },
  { id: 9, module: 'Lab', name: 'Stool-Consistency', data: '["Soft","Semi Loose","Loose","Solid","Diarrhoeal"]', description: '' },
  { id: 10, module: 'Lab', name: 'Absent-Present', data: '["Present","Absent"]', description: '' },
  { id: 11, module: 'Lab', name: 'Seen-NotSeen', data: '["Seen","Not Seen"]', description: '' },
];

function LookUps() {
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
            <th>1.</th>
            <th>Module ...</th>
            <th>Look-up Name</th>
            <th>Look-up Data</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {lookupData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.module}</td>
              <td>{item.name}</td>
              <td>{item.data}</td>
              <td>{item.description}</td>
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

export default LookUps;