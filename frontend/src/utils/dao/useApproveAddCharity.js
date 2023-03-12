import React from 'react';
import ABI from '../ABI.json'
import { ethers } from 'ethers';
import { useNavigate } from 'react-router-dom';

const useApproveAddCharity = (contractAddr,signer) => {
    const navigate = useNavigate()
    const {CharityDaoAbi} = ABI
    const DaoContract = new ethers.Contract(contractAddr,CharityDaoAbi,signer);
    
    const approveCharity = async (id) =>{
        try {
            
            await DaoContract.approveCharityProposal(id);
            navigate("/proposedcharities")
            
        } catch (error) {
            console.log(error.message)
            
        }

    }
  return approveCharity
}


export default useApproveAddCharity;
