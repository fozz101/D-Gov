import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import ABI from '../ABI.json';

const useGetBalance = (tokenAddress, accountAddress) => {
  const { Erc20ABi } = ABI;
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const tokenContract = new ethers.Contract(tokenAddress, Erc20ABi, provider);
    const getBalance = async () => {
      const balance = await tokenContract.balanceOf(accountAddress);
      setBalance(balance);
    };
    getBalance();
  }, [tokenAddress, accountAddress, Erc20ABi]);

  return balance;
};

export default useGetBalance;