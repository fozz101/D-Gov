import { ethers } from 'ethers';
import {useEffect} from 'react';
import ABI from '../ABI.json'
import { useNavigate } from 'react-router-dom';


const useExecuteProposal = (addr,signer) => {
  const navigate=useNavigate();
    const {CharityDaoAbi} = ABI
    const DaoContract = new ethers.Contract(addr,CharityDaoAbi,signer);
    
    const executeProposal = async (id) =>{
        try {
            
            await DaoContract.executeProposal(id);
            navigate('/charities')
            
        } catch (error) {
            console.log(error.message)
            
        }
        

    }
  return executeProposal
}

export default useExecuteProposal;
