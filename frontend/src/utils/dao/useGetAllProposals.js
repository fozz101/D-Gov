import React,{useState,useEffect} from 'react';
import ABI from "../ABI.json"
import { Contract, ethers } from 'ethers';
const useGetAllProposals = (addr) => {
    const {CharityDaoAbi}= ABI
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const myContract = new Contract(addr,CharityDaoAbi,provider)
    const getProposals = async () => {
        let allProposals = await myContract.getAllProposals();
        return allProposals;

    }
    
  return getProposals;
}

export default useGetAllProposals;
