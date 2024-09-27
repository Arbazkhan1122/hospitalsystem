import React from 'react';
import './AddPackagingType.css';

const UpdatePackagingType = () => {
  return (
    <div className="MeasssAddItemSubcategory">
      <h2>Update Packaging Type</h2>
      <form>
        <div className="MeasssFormGroup">
          <label>Packaging Type Name<span className="MeasssRequired">*</span></label>
          <input type="text" placeholder="Some Packaging Type" />
        </div>
       
        <div className="MeasssFormGroup">
          <label>Description</label>
          <input type="text" placeholder="Description" />
        </div>
       
        <div className="MeasssFormGroup">
          <label>Is Active</label>
          <input type="checkbox" defaultChecked />
        </div>
        <button type="submit" className="MeasssBtnAdd">Update</button>
      </form>
    </div>
  );
}

export default UpdatePackagingType;
