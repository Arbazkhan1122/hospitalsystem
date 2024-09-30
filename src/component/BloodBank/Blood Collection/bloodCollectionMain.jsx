import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './bloodCollectionMain.css';  // Import the CSS file
import Donarlist from './DonationList/donationList';
import Colletionlist from './CollectionList/collectionList';
// import Donarlist from './DonationList/donationList';
// import Colletionlist from './CollectionList/collectionList';

function Bloodcollectionmain() {
  return (
    <div>
      <header className="bloodcollection-header">
        <nav>
          <ul className="bloodcollection-nav-links">
            <Link to="/donarlist" className="bloodcollection-header-button">
              <li className='bloodcollection-header-button'>Donor List</li>
            </Link>
            <Link to="/collectionlist" className="bloodcollection-header-button">
              <li className='bloodcollection-header-button'>Collection List</li>
            </Link>
          </ul>
        </nav>
      </header>
      
      <Routes>
        <Route path="/donarlist" element={<Donarlist />} />
        <Route path="/collectionlist" element={<Colletionlist />} />
      </Routes>
    </div>
  );
}

export default Bloodcollectionmain;

