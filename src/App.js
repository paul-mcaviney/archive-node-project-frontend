import './App.css';
import React, { useState } from 'react'; 

// Add web3.js and your Infura URL here

const App = () => {
    
    // State variables
    const [results, setResults] = useState(false);
    // Your state variables go here


    // set the address to user input
    const handleInput = event => {
        // Change this line
        console.log('This is our Ethereum Address');
    };


    // Reset the app
    const reset = () => {
        setResults(!results);
    };


    // Your JavaScript code will go here
   
    
    return (
        <div className='App'>
            <div className='container'>
                <div className='header-container'>
                    <h1 className='header gradient-text'>
                        ETH Year in Review
                    </h1>
                </div>

                <div className='formContainer'>
                    {!results ? (
                        <div>
                            <h2 className='sub-text'>
                                Enter an Ethereum wallet address to see your 2021 stats! 
                            </h2>
                            <p>If you don't have a wallet address, feel free to use <a href='https://etherscan.io/address/0xd8da6bf26964af9d7eed9e03e53415d37aa96045' target='_blank'>Vitalik's</a> ;)</p>
                            <p>0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045</p>
                            
                            <input onChange={handleInput} className='text-input' type='text' name='wallet' id='wallet' placeholder='0x...' required/>
                            <br />
        
                            {/* Change this button function */}
                            <button onClick={reset} className='form-button' type='submit' name='submit' id='submit'>
                                Submit
                            </button>
                        </div>
                    ) : <div>
                            <h2>Here are your results!</h2>

                            {/* Your HTML code will go here */}
                            

                            <button onClick={reset} className='form-button' id='restart' name='restart'>Enter New Address</button>
                        </div>} 
               </div>
               <p>Additional Resources: <a href='https://web3js.readthedocs.io/en/v1.7.0/web3.html' target='_blank'>Web3.js Docs</a>, <a href='https://docs.infura.io/infura/networks/ethereum' target='_blank'>Infura Docs</a></p> 
            </div>
        </div>
    )
}


export default App;
