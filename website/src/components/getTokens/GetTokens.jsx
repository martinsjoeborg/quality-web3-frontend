import { getGALF } from "../../galfConfig/GALF_web3";
import { getSAUC } from "../../saucConfig/SAUC_web3";
import { getGIMI } from "../../gimiConfig/GIMI_web3";
import "./GetTokens.css"

const GetTokens = ({ currentAccount }) => {

    function handleGetGALF(e) {
        e.preventDefault();

        getGALF(currentAccount);
    }

    function handleGetSAUC(e) {
        e.preventDefault();

        getSAUC(currentAccount);
    }

    function handleGetGIMI(e) {
        e.preventDefault();

        getGIMI(currentAccount);
    }


    return ( 
        <div className="getTokens-container">
            <button onClick={handleGetGALF}>Get GALF</button>
            <button onClick={handleGetSAUC}>Get SAUC</button>
            <button onClick={handleGetGIMI}>Get GIMI</button>
            
        </div>
     );
}
 
export default GetTokens;