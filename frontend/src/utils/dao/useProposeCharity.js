import { ethers } from 'ethers';
import React,{useEffect} from 'react';
import ABI from '../ABI.json'
import { useNavigate } from 'react-router-dom';


const useProposeCharity = (contractAddr,signer) => {
    let navigate = useNavigate();
    const {CharityDaoAbi} = ABI
    const DaoContract = new ethers.Contract(contractAddr,CharityDaoAbi,signer);
    
    const addCharityProposal = async (addr,name,description) =>{
        try {
            
            await DaoContract.proposeAddCharity(addr,name,description).then(()=>{
                navigate('/proposedcharities');
            })
            
        } catch (error) {
            console.log(error.message)
            
        }

    }
  return addCharityProposal
}

export default useProposeCharity;
