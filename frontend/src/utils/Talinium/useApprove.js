import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import ABI from '../ABI.json';

const useApprove = (tokenAddress,signer) => {
  const { Erc20ABi } = ABI;
  
  const tokenContract = new ethers.Contract(tokenAddress, Erc20ABi, signer);
  const Approve = async (_to,_amount) => {
    await tokenContract.approve(_to,_amount);
  };
  useEffect(() => {
    Approve();
  }, [tokenAddress]);

  return Approve;
};

export default useApprove;