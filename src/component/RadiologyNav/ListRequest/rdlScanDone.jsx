// import React from 'react';
// import "../ListRequest/rdlScanDone.css"

// function RDLAddScanDoneDetails() {
//   return (
//     <div className="modal-backdrop">
//       <div className="modal">
//         <h2>Add Scan Done Details of Sachin Ramesh</h2>
//         <form>
//           <div className="form-group">
//             <label htmlFor="scannedOn">Scanned On</label>
//             <input type="date" id="scannedOn" defaultValue="2024-08-18" />
//           </div>
//           <div className="form-group">
//             <label htmlFor="filmType">Film Type *</label>
//             <select id="filmType" required>
//               <option value="">Select The Film Type</option>
//             </select>
//           </div>
//           <div className="form-group">
//             <label htmlFor="quantity">Quantity</label>
//             <input type="number" id="quantity" />
//           </div>
//           <div className="form-group">
//             <label htmlFor="remarks">Remarks</label>
//             <textarea id="remarks"></textarea>
//           </div>
//           <div className="form-actions">
//             <button type="submit" className="done-btn">Done</button>
//             <button type="button" className="cancel-btn">Cancel</button>
//           </div>
//         </form>
//         <button className="close-btn" aria-label="Close">&times;</button>
//       </div>
//     </div>
//   );
// }

// export default RDLAddScanDoneDetails;


import React from 'react';
import "../ListRequest/rdlScanDone.css";

function RDLAddScanDoneDetails({ onClose }) {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>Add Scan Done Details of Sachin Ramesh</h2>
        <form>
          <div className="form-group">
            <label htmlFor="scannedOn">Scanned On</label>
            <input type="date" id="scannedOn" defaultValue="2024-08-18" />
          </div>
          <div className="form-group">
            <label htmlFor="filmType">Film Type *</label>
            <select id="filmType" required>
              <option value="">Select The Film Type</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="quantity">Quantity</label>
            <input type="number" id="quantity" />
          </div>
          <div className="form-group">
            <label htmlFor="remarks">Remarks</label>
            <textarea id="remarks"></textarea>
          </div>
          <div className="form-actions">
            <button type="submit" className="done-btn">Done</button>
            <button type="button" className="cancel-btn" onClick={onClose}>Cancel</button>
          </div>
        </form>
        <button className="close-btn" aria-label="Close" onClick={onClose}>&times;</button>
      </div>
    </div>
  );
}

export default RDLAddScanDoneDetails;
