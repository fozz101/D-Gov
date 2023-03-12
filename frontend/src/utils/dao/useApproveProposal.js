import React from 'react';
import ABI from '../ABI.json'
import { ethers } from 'ethers';

const useApproveProposal = (contractAddr,signer) => {
    const {CharityDaoAbi} = ABI
    const DaoContract = new ethers.Contract(contractAddr,CharityDaoAbi,signer);
    
    const approveProposal = async (id) =>{
        try {
            
            await DaoContract.approveFundProposal(id);
            
        } catch (error) {
            console.log(error.message)
            
        }

    }
  return approveProposal
}


export default useApproveProposal;
