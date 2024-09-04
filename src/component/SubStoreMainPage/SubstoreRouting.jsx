import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SubStoreMain from './subStoreMain'
import SSIStock from "./SBAccountsNav/SSInventory/sSIStock"
import SSPStock from "./SBAccountsNav/SSPharmacy/sSPStock"
const SubstoreRouting = () => {
  return (
    <div>
      <Routes>
        <Route path="/subStore" element={<SubStoreMain />} />
        <Route path="/sSPStock/:store" element={<SSPStock />} />
        <Route path="/SSIStock/:store" element={<SSIStock />} /> {/* Route for SSIStock */}
        </Routes> 
    </div>
  )
}

export default SubstoreRouting
