import React,{useContext} from "react";
import { Button } from "@material-tailwind/react";
import { useState,useEffect } from "react";
import { wallet } from "./store/store";
import {ethers} from "ethers";

import Balance from "./token/Balance";

    


function ConnectWallet  () {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const {TokenAddress,setSigner}= useContext(wallet)

 
    const [walletAddress, setWalletAddress] = useState("");
    const [connected, setConnected] = useState(false);
  





// Requests access to the user's MetaMask Wallet
async function requestAccount() {
 
  
  
  
  if(window.ethereum) {
    

    try {
        const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
        });
        const signer = provider.getSigner()
        setWalletAddress(accounts[0]);
        localStorage.setItem('accountAddress',accounts[0]);
        setSigner(signer)
        
    } catch (error) {
        console.log('Error connecting...');
    }
  } else {
    alert('Meta Mask not detected');
  }
}
const checkConnections = async () => {
  const address = localStorage.getItem('accountAddress');
  console.log("was checking connection",address)
  if (address == null) {
    setConnected(false)
  }
  else{
    
    await requestAccount();
    setConnected(true)
  }

}

useEffect(() => {
  
  
  checkConnections();
}, [connected]);
 /* Create a provider to interact with a smart contract
  async function connectWallet() {
    if(typeof window.ethereum !== 'undefined') {
      await requestAccount();

      const provider = new ethers.providers.Web3Provider(window.ethereum);
    }
  }
*/

    return ( 
      <>
    <div>
      {!connected && (
        <Button size="sm" color='white' className="border-solid border-2 border-blue-900 flex items-center gap-3"
        onClick={requestAccount}
    >
        <img src={require('./assets/MetaMask.png')} alt="metamask" className="h-6 w-6" />
        Connect Wallet
    </Button>
      )}
      {connected && (
        <div className="">
        <h1 className="text-md my-auto "> Address : {walletAddress}</h1>
        <div className="flex ">
        <h1 className="text-md my-auto "> Balance : <Balance tokenAddress={TokenAddress} accountAddress={walletAddress}  /> TAL </h1>
        <img src={require('./assets/talanium.png')} alt="TAL" className="h-4 w-4 mx-2 my-auto" />
        </div>
      </div>
      )}


     </div>
     </>
    )
}
export default ConnectWallet