import './TxnForm.css'

const TxnForm = () => {
    return ( 
        <div className="txn-form-container">

            <div className="txn-form-content">

                <form className='form'>
                    <input type="text" className='input'/>
                    <button className='button'>Send</button>
                </form>
            </div>
            
        </div>
     );
}
 
export default TxnForm;