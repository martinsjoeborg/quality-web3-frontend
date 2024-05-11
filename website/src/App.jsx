import './App.css'
import { useState } from 'react';

import TxnForm from './components/tnxForm/TxnForm';
import ConnectWallet from './components/connectBtn/ConnectWallet'
import GetTokens from './components/getTokens/GetTokens';

function App() {

  const [currentAccount, setCurrentAccount] = useState(null);
  const [txnState, setTxnState] = useState("Start");

  return (
    <div className='container'>

      <div className="content">
        <h1 className='logo-title'>SendSum</h1>

        {currentAccount === null ? 
          <div className='intro-container'>
            <h3>Welcome to the Swish of ERC20 tokens!!!</h3>
            <p>Connect your wallet to send tokens ↓</p>
            <ConnectWallet currentAccount={currentAccount} setCurrentAccount={setCurrentAccount} />
          </div> :
        <div>
            <GetTokens currentAccount={currentAccount} />
            <TxnForm currentAccount={currentAccount} txnState={txnState} setTxnState={setTxnState}  />
        </div>  
         }
        <div>{txnState}</div>
      </div>
      
   </div>
  )
}

export default App
