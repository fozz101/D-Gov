import { useEffect, useState } from 'react';
import useGetBalance from '../../utils/Talinium/useBalanceOf';
import { ethers } from 'ethers';

const Balance = ({ tokenAddress, accountAddress }) => {
  const balance = useGetBalance(tokenAddress, accountAddress);


  if (balance === null) {
    return <p  style={{display:"inline-block" ,fontSize:"14px"}}>Loading balance...</p>;
  }

  return <p style={{display:"inline-block" ,fontSize:"14px"}}>{ethers.BigNumber.from(balance).toNumber() / 10**8}</p>;
};

export default Balance;
