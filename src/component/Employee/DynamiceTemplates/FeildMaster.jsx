// src/ManageUsers.jsx

import React from 'react';
import './Templates.css';

const templatesData = [
    {
      "Template Type Name": "Discharge Summary",
      "Filed Name": "Discharge Type",
      "Description": "Discharge type of patient",
      "IsActive": "true"
    },
    {
      "Template Type Name": "Discharge Summary",
      "Filed Name": "DischargeCondition",
      "Description": "Condition of patient while discharging",
      "IsActive": "true"
    },
    {
      "Template Type Name": "Discharge Summary",
      "Filed Name": "Consultant",
      "Description": "Consultant name",
      "IsActive": "true"
    },
    {
      "Template Type Name": "Discharge Summary",
      "Filed Name": "DoctorIncharge",
      "Description": "Doctor incharge name",
      "IsActive": "true"
    },
    {
      "Template Type Name": "Discharge Summary",
      "Filed Name": "Anesthetists",
      "Description": "Anesthetists name",
      "IsActive": "true"
    },
    {
      "Template Type Name": "Discharge Summary",
      "Filed Name": "ResidentDr",
      "Description": "Residence Doctor name",
      "IsActive": "true"
    },
    {
      "Template Type Name": "Discharge Summary",
      "Filed Name": "BabyWeight",
      "Description": "Baby weight in gm",
      "IsActive": "true"
    },
    {
      "Template Type Name": "Discharge Summary",
      "Filed Name": "SelectDiagnosis",
      "Description": "Select ICD",
      "IsActive": "true"
    },
    {
      "Template Type Name": "Discharge Summary",
      "Filed Name": "Provisonal Diagnosis",
      "Description": "ICD for provisonal Diagnosis",
      "IsActive": "true"
    },
    {
      "Template Type Name": "Discharge Summary",
      "Filed Name": "Other Diagnosis",
      "Description": "For other Diagnosis",
      "IsActive": "true"
    },
    {
      "Template Type Name": "Discharge Summary",
      "Filed Name": "ClinicalFindings",
      "Description": "Clinical findings",
      "IsActive": "true"
    },
    {
      "Template Type Name": "Discharge Summary",
      "Filed Name": "CheifComplain",
      "Description": "Chief complaint",
      "IsActive": "true"
    },
    {
      "Template Type Name": "Discharge Summary",
      "Filed Name": "HistoryOfPresentingillness",
      "Description": "Presenting illness",
      "IsActive": "true"
    },
    {
      "Template Type Name": "Discharge Summary",
      "Filed Name": "PastHistory",
      "Description": "Past History",
      "IsActive": "true"
    },
    {
      "Template Type Name": "Discharge Summary",
      "Filed Name": "CaseSummery",
      "Description": "Case summary",
      "IsActive": "true"
    },
    {
      "Template Type Name": "Discharge Summary",
      "Filed Name": "Procedure",
      "Description": "ProcedureNts",
      "IsActive": "true"
    },
    {
      "Template Type Name": "Discharge Summary",
      "Filed Name": "OperativeFindings",
      "Description": "Operative findings",
      "IsActive": "true"
    },
    {
      "Template Type Name": "Discharge Summary",
      "Filed Name": "HospitalReport",
      "Description": "Hospital reports",
      "IsActive": "true"
    },
    {
      "Template Type Name": "Discharge Summary",
      "Filed Name": "Hospital Course",
      "Description": "Hospital course",
      "IsActive": "true"
    },
    {
      "Template Type Name": "Discharge Summary",
      "Filed Name": "TreatmentDuringHospitalStay",
      "Description": "Treatment During hospitaal stay",
      "IsActive": "true"
    }
  ]

const FeildMaster = () => {
    return (
        <div className="template-users-container">
          <div className="template-users-header">
            {/* Uncomment if you need this button */}
            {/* <button className="template-users-add-user-button">+ Add Template</button> */}
          </div>
          <input type="text" placeholder="Search" className="manage-users-search-input" />
          <div className='template-user-span'>
            <span>Showing {templatesData.length} / {templatesData.length} results</span>
          </div>
          <div className='template-user-tab'>
            <table className="template-users-users-table">
              <thead>
                <tr>
                  <th>Template Type Name</th>
                  <th>Field Name</th>
                  <th>Description</th>
                  <th>Is Active</th>
                  {/* <th>Action</th> Remove if no action buttons needed */}
                </tr>
              </thead>
              <tbody>
                {templatesData.map((template, index) => (
                  <tr key={index}>
                    <td>{template["Template Type Name"]}</td>
                    <td>{template["Filed Name"]}</td> {/* Check the key for correct spelling */}
                    <td>{template.Description}</td>
                    <td>{template.IsActive === "true" ? "true" : "False"}</td>
                    {/* <td className="template-users-action-buttons">
                      <button className="template-users-action-button">Edit</button>
                      <button className="template-users-action-button">Delete</button>
                    </td> Remove if not needed */}
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="template-users-pagination">
              <div className="template-users-pagination-controls">
                <button>First</button>
                <button>Previous</button>
                <button>Next</button>
                <button>Last</button>
              </div>
            </div>
          </div>
        </div>
      );
    };
    
export default FeildMaster;