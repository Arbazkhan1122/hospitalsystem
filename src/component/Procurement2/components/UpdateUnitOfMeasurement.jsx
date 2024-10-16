import React from 'react';
import './UpdateUnitOfMeasurement.css';

const UpdateUnitOfMeasurement = () => {
  return (
    <div className="MeasssAddItemSubcategory">
      <h2>Update Unit of Measurement</h2>
      <form>
        <div className="MeasssFormGroup">
          <label>Unit of Measurement Name<span className="MeasssRequired">*</span></label>
          <input type="text" placeholder="Unit of Measurement Name" />
        </div>
       
        <div className="MeasssFormGroup">
          <label>Description</label>
          <input type="text" placeholder="Description" />
        </div>
       
        <div className="MeasssFormGroup">
          <label>Is Active</label>
          <input type="checkbox" defaultChecked />  
        </div>
        <button type="submit" className="MeasssBtnAdd">Update Unit of Measurement</button>
      </form>
    </div>
  );
}


export default UpdateUnitOfMeasurement;
