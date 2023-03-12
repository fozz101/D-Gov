import React from 'react';
import { ethers } from 'ethers';

const useGetContractInstance = (addr,abi,signer) => {
    const mycontract = new ethers.Contract(addr,abi,signer);
    
    return mycontract;
  
}

export default useGetContractInstance;
