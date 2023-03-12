import React from 'react';
import ABI from '../ABI.json'
import { ethers } from 'ethers';

const useRejectProposal = (contractAddr,signer) => {
    const {CharityDaoAbi} = ABI
    const DaoContract = new ethers.Contract(contractAddr,CharityDaoAbi,signer);
    
    const rejectProposal = async (id) =>{
        try {
            
            await DaoContract.rejectFundProposal(id);
            
        } catch (error) {
            console.log(error.message)
            
        }

    }
  return rejectProposal
}


export default useRejectProposal;
