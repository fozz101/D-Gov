import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import ABI from '../ABI.json';

const useGetMembers = (contractaddr) => {
  const { CharityDaoAbi } = ABI;
  const [members, setMembers] = useState(null);

  useEffect(() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const tokenContract = new ethers.Contract(contractaddr, CharityDaoAbi, provider);
    const getMembers = async () => {
      const Members = await tokenContract.getAllMembers();
      setMembers(Members.toString());
    };
    getMembers();
  }, [contractaddr]);

  return members;
};

export default useGetMembers;