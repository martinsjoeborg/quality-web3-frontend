import Web3 from "web3";
import { GALF_CONTRACT_ABI, GALF_CONTRACT_ADDRESS } from "./GALF_config";

const web3 = new Web3(window.ethereum);

const galfContract = new web3.eth.Contract(GALF_CONTRACT_ABI, GALF_CONTRACT_ADDRESS);

export function sendGALF(recipient, amount, currentAccount, onError, onSuccess, setTxnState, txnState) {
    const weiAmount = web3.utils.toWei(amount.toString(), 'ether');

    galfContract.methods.transfer(recipient, weiAmount).send({
        from: currentAccount
    })
   .on('transactionHash', hash => {
        console.log('Transaction Hash:', hash);
    })
   .on('receipt', receipt => {
       console.log('Transaction Receipt:', receipt);
       if (receipt.status === 1n) {
           onSuccess && onSuccess("Transaction was successful!");
           setTxnState("Transaction successful");
           localStorage.setItem('Transaction State', JSON.stringify("Transaction successful"));
    }
    })
   .on('error', error => {
        console.error(error);
        const errorMessage = error.message.split('\n')[0];
        onError && onError(errorMessage);
       setTxnState("Transaction failed");
       localStorage.setItem('Transaction State', JSON.stringify("Transaction failed"));
    });
};

export function getGALF(currentAccount) {

    galfContract.methods.mint1000Tokens().send({
        from: currentAccount
    })
    .on('transactionHash', hash => {
        console.log('Transaction Hash:', hash);
    })
    .on('receipt', receipt => {
        console.log('Transaction Receipt:', receipt);
    })
    .on('error', error => {
        console.error(error);
    });
}