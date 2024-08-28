import React from "react";
import "./PurchaseOrder.css"; // Ensure you have this CSS file

const SupplierLedgerComponent = () => {
    return (
        <div className="purchase-order-container">
            <div className="purchase-order-header">
               
              
            </div>
                   <div className="purchase-data-order">
                    <div className="purchase-order-date-range">
                      
                        <label htmlFor="from-date">From:</label>
                        <input type="date" id="from-date" />
                        <label htmlFor="to-date">To:</label>
                        <input type="date" id="to-date" />
                        <button className="purchase-order-favorite-btn">★</button>
                        <button className="purchase-order-reset-btn">-</button>
                        <button className="purchase-order-date-range-button">OK</button>
                    </div>
                 
         {/* <div className="purchase-order-aging-filter"> */}
             
            {/* </div>  */}
            </div>
                
                <div className="purchase-order-search-container">
    <input type="text" className="purchase-order-search-box" placeholder="Search" />
    <div className="purchase-order-button" >  
    <button className="purchase-order-print-button">Print</button >

</div>
<button className="purchase-order-print-button">Export</button>



</div>



            <div className="purchase-order-table-container">
                <table className='purchase-order-tab'>
                    <thead>
                        <tr>
                            <th>Supplier Name</th>
                            <th>PO Date</th>
                           
                           
                            <th>Discount Amount</th>
                            <th>VAT Amount</th>
                           
                            <th>Total Amount</th>
                         
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan="13" className="purchase-order-no-rows">No Rows To Show</td>
                        </tr>
                    </tbody>
                    
                </table>
                <div className="purchase-order-pagination">
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

export default SupplierLedgerComponent;
