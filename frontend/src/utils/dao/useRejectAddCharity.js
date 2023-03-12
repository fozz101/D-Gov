import React from 'react';
import ABI from '../ABI.json'
import { ethers } from 'ethers';
import { useNavigate } from 'react-router-dom';

const useRejectAddCharity = (contractAddr,signer) => {
    const navigate= useNavigate();
    const {CharityDaoAbi} = ABI
    const DaoContract = new ethers.Contract(contractAddr,CharityDaoAbi,signer);
    
    const rejectCharity = async (id) =>{
        try {
            
            await DaoContract.rejectCharityProposal(id);
            navigate("/proposedcharities")
            
        } catch (error) {
            console.log(error.message)
            
        }

    }
  return rejectCharity
}


export default useRejectAddCharity;
