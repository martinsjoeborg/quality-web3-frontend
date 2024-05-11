import "./Modal.css"
import React from 'react';

const Modal = ({ txnState, handleClose, show, errorMessage, successMessage }) => { 
  const showHideClassName = show ? "modal display-block" : "modal display-none";
    
    return (
      <div className={showHideClassName}>
          <section className="modal-main">
            <div className="modal-content">
              {txnState === "Transaction failed" || txnState === "Transaction successful" ?
                <div>

                  {txnState === "Transaction failed" ? <p>Error: Transaction failed</p> : <p>Success: Transaction was successful!</p> }

                </div>
                : 
                <div>Transaction Pending...</div>
              }
            </div>
                <button onClick={handleClose}>Close</button>
          </section>
      </div>
    );
  };
  

export default Modal;
