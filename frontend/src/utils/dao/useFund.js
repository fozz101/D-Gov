import { ethers } from 'ethers';
import React,{useEffect} from 'react';
import ABI from '../ABI.json'


const useFund = (amount,message,addr,signer) => {
    const {CharityDaoAbi} = ABI
    const DaoContract = new ethers.Contract(addr,CharityDaoAbi,signer);
    
    const fund = async (msg,valueEth) =>{
        try {
            
            await DaoContract.fund(msg,{value:ethers.utils.formatEther(valueEth).toString()})
            
        } catch (error) {
            console.log(error.message)
            
        }

    }
  useEffect(() => {
    fund(message,amount)
    
  }, [amount,message,addr,signer]);
}

export default useFund;
