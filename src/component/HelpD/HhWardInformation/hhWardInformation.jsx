import React from 'react';
import "../HhWardInformation/hhWardInformation.css"
function HHWardInformation() {

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="wardInformation-container">

    <div className="wardInformation-heading">
        <h3>List Of Wards:</h3>
   </div>
      
       
        <table>
          <thead>
            <tr>
              <th>Ward Name</th>
              <th>Occupied</th>
              <th>Vacant</th>
              <th>Reserved</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='wardInformation-wardNameColumn'>Brain Ward</td>
              <td>0</td>
              <td>1</td>
              <td>0</td>
              <td>1</td>
            </tr>
            <tr>
              <td className='wardInformation-wardNameColumn'>Female Ward</td>
              <td>4</td>
              <td>2</td>
              <td>0</td>
              <td>6</td>
            </tr>
            <tr>
              <td className='wardInformation-wardNameColumn'>ICU</td>
              <td>1</td>
              <td>5</td>
              <td>0</td>
              <td>6</td>
            </tr>
            <tr>
              <td className='wardInformation-wardNameColumn'>Male Ward</td>
              <td>4</td>
              <td>1</td>
              <td>1</td>
              <td>6</td>
            </tr>
            <tr>
              <td className='wardInformation-wardNameColumn'>MATERNITY WARD</td>
              <td>3</td>
              <td>5</td>
              <td>0</td>
              <td>8</td>
            </tr>
            <tr>
              <td className='wardInformation-wardNameColumn'>Private Ward</td>
              <td>1</td>
              <td>4</td>
              <td>0</td>
              <td>5</td>
            </tr>
            <tr className="wardInformation-total-row">
              <td>Total</td>
              <td>13</td>
              <td>18</td>
              <td>1</td>
              <td>32</td>
            </tr>
          </tbody>
        </table>
    </div>
  );
}

export default HHWardInformation;
