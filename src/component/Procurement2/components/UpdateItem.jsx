import React from 'react';
import './UpdateItem.css';

const UpdateItem = () => {
    return (
        <div className="form-container-updates">
            <h2>Update Item</h2>
            <form className="item-form-updates">
                <div className="form-row-updates">
                    <label>Item Category<span className="required-updates">*</span>:</label>
                    <select className="input-field-updates">
                        <option value=""></option>
                    </select>

                    <label>Item Code:</label>
                    <input type="text" className="input-field-updates" disabled />
                </div>

                <div className="form-row-updates">
                    <label>Item Name<span className="required-updates">*</span>:</label>
                    <input type="text" className="input-field-updates" placeholder="ItemName" />

                    <label>Inventory:</label>
                    <div className="radio-buttons-updates">
                        <label>
                            <input type="radio" name="inventory" value="common" checked /> Common
                        </label>
                        <label>
                            <input type="radio" name="inventory" value="general" /> GENERAL-INVENTORY
                        </label>
                    </div>
                </div>

                <div className="form-row-updates">
                    <label>Item Sub Category<span className="required-updates">*</span>:</label>
                    <input type="text" className="input-field-updates" />

                    <label>Item Company<span className="required-updates">*</span>:</label>
                    <input type="text" className="input-field-updates" />
                </div>

                <div className="form-row-updates">
                    <label>Unit of Measurement<span className="required-updates">*</span>:</label>
                    <input type="text" className="input-field-updates" />

                    <label>ReOrder Quantity:</label>
                    <input type="number" className="input-field-updates" defaultValue="0" />
                </div>

                <div className="form-row-updates">
                    <label>MinStock Quantity<span className="required-updates">*</span>:</label>
                    <input type="number" className="input-field-updates" />

                    <label>Unit Quantity:</label>
                    <input type="text" className="input-field-updates" />
                </div>

                <div className="form-row-updates">
                    <label>Is VAT Applicable:</label>
                    <input type="checkbox" className="checkbox-updates" />

                    <label>Packaging Type:</label>
                    <input type="text" className="input-field-updates" />
                </div>

                <div className="form-row-updates">
                    <label>Description:</label>
                    <textarea className="input-field-updates description-field-updates"></textarea>

                    <label>Vendor Name:</label>
                    <input type="text" className="input-field-updates" />
                </div>

                <div className="form-row-updates">
                    <label>Standard Rate:</label>
                    <input type="number" className="input-field-updates" defaultValue="0" />

                    <label>Is CSSD Applicable:</label>
                    <input type="checkbox" className="checkbox-updates" />
                </div>

                <div className="form-row-updates">
                    <label>Is Cold Storage Applicable:</label>
                    <input type="checkbox" className="checkbox-updates" />

                    <label>Is Patient Consumption Applicable:</label>
                    <input type="checkbox" className="checkbox-updates" />
                </div>

                <div className="form-row-updates">
                    <label>Is Active:</label>
                    <input type="checkbox" className="checkbox-updates" defaultChecked />
                </div>

                <button type="submit" className="save-button-updates">Save Item</button>
            </form>
        </div>
    );
};

export default UpdateItem;
