import Web3 from "web3";
import { GIMI_CONTRACT_ABI, GIMI_CONTRACT_ADDRESS } from "./GIMI_config";

const web3 = new Web3(window.ethereum);

const gimiContract = new web3.eth.Contract(GIMI_CONTRACT_ABI, GIMI_CONTRACT_ADDRESS);

export function sendGIMI(recipient, amount, currentAccount, onError, onSuccess) {
    const weiAmount = web3.utils.toWei(amount.toString(), 'ether');

    gimiContract.methods.transfer(recipient, weiAmount).send({
        from: currentAccount
    })
   .on('transactionHash', hash => {
        console.log('Transaction Hash:', hash);
    })
   .on('receipt', receipt => {
       console.log('Transaction Receipt:', receipt);
       if (receipt.status === 1n) {
        onSuccess && onSuccess("Transaction was successful!"); 
    }
    })
   .on('error', error => {
        console.error(error);
        const errorMessage = error.message.split('\n')[0];
        onError && onError(errorMessage); 
    });
};

export function getGIMI(currentAccount) {

    gimiContract.methods.mint1000Tokens().send({
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