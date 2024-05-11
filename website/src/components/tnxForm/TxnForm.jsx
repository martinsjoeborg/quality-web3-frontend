import { useEffect, useState } from 'react';
import './TxnForm.css'

import { sendGALF } from '../../galfConfig/GALF_web3';
import { sendSAUC } from '../../saucConfig/SAUC_web3';
import { sendGIMI } from '../../gimiConfig/GIMI_web3';
import Modal from './Modal';

const TxnForm = ({ currentAccount, txnState, setTxnState }) => {

    const [recipient, setRecipient] = useState("");
    const [amount, setAmount] = useState("");
    const [token, setToken] = useState("");

    const [showModal, setShowModal] = useState(false);

    const handleClose = () => {
        setShowModal(false);
        localStorage.clear();
    }
    const handleShow = () => setShowModal(true);

    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");


    useEffect(() => {
        const lsTxnState = JSON.parse(localStorage.getItem('Transaction State'));
        if (lsTxnState !== null) {
            setShowModal(true)
        }
    })

    function handleSend(e) {
        e.preventDefault();
        handleShow();
        setRecipient("");
        setAmount("");
        setToken("");
        setErrorMessage("");
        setSuccessMessage("");
        setTxnState("Transaction pending");

        if (token === "GALF") {
            sendGALF(recipient, amount, currentAccount, (err) => setErrorMessage(err), (msg) => setSuccessMessage(msg), setTxnState, txnState);
        } else if (token === "SAUC") {
            sendSAUC(recipient, amount, currentAccount, (err) => setErrorMessage(err), (msg) => setSuccessMessage(msg));
        } else if (token === "GIMI") {
            sendGIMI(recipient, amount, currentAccount, (err) => setErrorMessage(err), (msg) => setSuccessMessage(msg));
        }

        localStorage.setItem('Transaction State', JSON.stringify("Transaction pending"));
    }

    return ( 
        <div className="txn-form-container">

            <div className="txn-form-content">

                <form className='form' onSubmit={handleSend}>
                    <input type="text" value={recipient} required className='input-recipient' placeholder='Recipient' onChange={(e) => setRecipient(e.target.value)} />
                    <br />
                    <input type="text" value={amount} required className='input-amount' placeholder='Amount' onChange={(e) => setAmount(e.target.value)}/>
                    <br />

                    <select id="simple-dropdown" required value={token} onChange={(e) => setToken(e.target.value)}>
                        <option value="">Select token</option>
                        <option value="GALF">GALF</option>
                        <option value="SAUC">SAUC</option>
                        <option value="GIMI">GIMI</option>
                    </select>
                    <br /><br />
                    <button className='button'>Send</button>
                </form>

                <Modal txnState={txnState} show={showModal} handleClose={handleClose} errorMessage={errorMessage} successMessage={successMessage} />
                    
                
            </div>
            
        </div>
     );
}
 
export default TxnForm;