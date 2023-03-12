import React,{useState,useEffect} from 'react';
import ABI from "../ABI.json"
import { Contract, ethers } from 'ethers';
const useGetAllCharities = (addr) => {
    const [charities, setCharities] = useState([]);
    const {CharityDaoAbi}= ABI
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const myContract = new Contract(addr,CharityDaoAbi,provider)
    const getCharities = async () => {
        let allcharities = await myContract.getAllCharities();
        setCharities(allcharities)

    }
    useEffect(() => {
        getCharities();
        
    }, [addr]);
  return charities;
}

export default useGetAllCharities;
