import "./Modal.css"
import React from 'react';

// In your Modal component
const Modal = ({ handleClose, show, errorMessage, successMessage }) => { // Add errorMessage to the props
    const showHideClassName = show? "modal display-block" : "modal display-none";
    
    return (
      <div className={showHideClassName}>
          <section className="modal-main">
              <div className="modal-content">
                    {errorMessage && <p className="errorMessage">Error: {errorMessage}</p>}
                    {successMessage && <p>Success: {successMessage}</p>}
              </div>
                <button onClick={handleClose}>Close</button>
          </section>
      </div>
    );
  };
  

export default Modal;
