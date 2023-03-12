import React,{useState,useEffect,useCallback} from 'react';
import ABI from "../ABI.json"
import { Contract, ethers } from 'ethers';


const useGetAllDonations = (addr) => {
  const {CharityDaoAbi}= ABI
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const myContract = new Contract(addr,CharityDaoAbi,provider)
  const getdonations = async () => {
      let alldonations = await myContract.getAllContributions();
      return alldonations;

  }
  
return getdonations;
}


export default useGetAllDonations;
