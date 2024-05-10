import Web3 from "web3";
import { SAUC_CONTRACT_ABI, SAUC_CONTRACT_ADDRESS } from "./SAUC_config";

const web3 = new Web3(window.ethereum);

const saucContract = new web3.eth.Contract(SAUC_CONTRACT_ABI, SAUC_CONTRACT_ADDRESS);

export function sendSAUC(recipient, amount, currentAccount, onError, onSuccess) {
    const weiAmount = web3.utils.toWei(amount.toString(), 'ether');

    saucContract.methods.transfer(recipient, weiAmount).send({
        from: currentAccount
    })
   .on('transactionHash', hash => {
        console.log('Transaction Hash:', hash);
    })
   .on('receipt', receipt => {
       console.log('Transaction Receipt:', receipt);
       if (receipt.status === 1n) {
        onSuccess && onSuccess("Transaction Successful!"); 
    }
    })
   .on('error', error => {
    console.error(error);
    const errorMessage = error.message.split('\n')[0];
    onError && onError(errorMessage); 
    });
};


export function getSAUC(currentAccount) {

    saucContract.methods.mint1000Tokens().send({
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