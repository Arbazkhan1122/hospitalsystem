import React, { useState } from 'react';
import Modal from 'react-modal';
import './Quotation.css';
import RequestForQuotation from '../components/RequestForQuotation';
import RFQDetails from '../components/RFQDetails';

Modal.setAppElement('#root'); // Required for accessibility

function QuotationRequest() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [detailsModalIsOpen, setDetailsModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const openDetailsModal = () => {
    setDetailsModalIsOpen(true);
  };

  const closeDetailsModal = () => {
    setDetailsModalIsOpen(false);
  };

  return (
    <div className="QuotationRequest-container">
      <button className="QuotationRequest-request-quotation" onClick={openModal}>
        Request For Quotation
      </button>

      {/* Modal for Request For Quotation */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Request For Quotation"
        className="QuotationRequest-modal"
        overlayClassName="QuotationRequest-overlay"
      >
        <RequestForQuotation />
        <button onClick={closeModal} className="QuotationRequest-close-modal">Close</button>
      </Modal>

      <div className="QuotationRequest-search-bar">
        <input type="text" placeholder="Search" />
        <button className="QuotationRequest-search-button">Q</button>
      </div>

      <div className="QuotationRequest-results-info">
        <span>Showing 1 / 1 results</span>
        <button className="QuotationRequest-print-button">Print</button>
      </div>

      <table className="QuotationRequest-data-table">
        <thead>
          <tr>
            <th>RFQ No</th>
            <th>Requested Date</th>
            <th>Subject</th>
            <th>Description</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>2023-11-29</td>
            <td>napkins</td>
            <td>test</td>
            <td>active</td>
            <td>
              <button className="QuotationRequest-action-button" onClick={openDetailsModal}>
                RFQ Details
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      {/* <div className="QuotationRequest-pagination">
        <span>1 to 1 of 1</span>
        <button className="QuotationRequest-page-button">First</button>
        <button className="QuotationRequest-page-button">Previous</button>
        <span>Page 1 of 1</span>
        <button className="QuotationRequest-page-button">Next</button>
        <button className="QuotationRequest-page-button">Last</button>
      </div> */}

      {/* Modal for RFQ Details */}
      <Modal
        isOpen={detailsModalIsOpen}
        onRequestClose={closeDetailsModal}
        contentLabel="RFQ Details"
        className="QuotationRequest-modal"
        overlayClassName="QuotationRequest-overlay"
      >
        <RFQDetails />
        <button onClick={closeDetailsModal} className="QuotationRequest-close-modal">Close</button>
      </Modal>
    </div>
  );
}

export default QuotationRequest;
