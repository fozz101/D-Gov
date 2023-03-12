import { ethers } from 'ethers';
import React,{useEffect} from 'react';
import ABI from '../ABI.json'
import { useNavigate } from 'react-router-dom';


const useProposeFundCharity = (contractAddr,signer) => {
  const navigate =useNavigate();
    const {CharityDaoAbi} = ABI
    const DaoContract = new ethers.Contract(contractAddr,CharityDaoAbi,signer);
    
    const fundCharityProposal = async (addr,description,amount) =>{
        try {
            
            await DaoContract.proposeFundCharity(addr,description,ethers.BigNumber.from(amount).toString());
            navigate('/proposals')
            
        } catch (error) {
            console.log(error.message)
            
        }

    }
  return fundCharityProposal
}

export default useProposeFundCharity;
