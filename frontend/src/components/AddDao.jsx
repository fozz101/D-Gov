
import React,{useContext,useState} from "react";

import AddButton from "./AddButton";
import { Button } from "@material-tailwind/react";
import useProposeFundCharity from "../utils/dao/useProposeFundCharity";
import { wallet } from "./store/store";

import { Input, Textarea } from "@material-tailwind/react";
import ProposeDaoButton from "./ProposeDaoButton";


const AddDao = () => {
    const {DaoContractAddr,signer} = useContext(wallet)
    const [amount, setAmount] = useState(0);
    const [address, setAddress] = useState("");
    const [description, setDescription] = useState("");
    const fundCharityProposal = useProposeFundCharity(DaoContractAddr,signer);
    const handleChange = (e) => {
        if (e.target.name == "amount"){
            setAmount(e.target.value);
        }
        else if (e.target.name == "address"){
            setAddress(e.target.value);
        }
        else if (e.target.name == "description"){
            setDescription(e.target.value);
        }
        
    }
    
  
  
    return (
        
        <div className="py-20 px-96" id="add-container">    
        <div id="add-charity"  className=" px-20 py-10">
            <h1 className="font-semibold text-2xl">Propose new DAO</h1>  <br />    
            <label className="">Address</label> 
            <Input name="address" onChange={handleChange} className="w-96"></Input><br /> 
            <label className="">Description</label>
            <Textarea onChange={handleChange} name="description" className="w-96 h-32"></Textarea ><br /> 
            <label className=" ">Amount in Ether</label>
            <Input name="amount" onChange={handleChange} className="w-96"></Input><br />
            <Button onClick={()=>{ fundCharityProposal(address,description,amount)}}size="md" className=" bg-blue-900 center">Propose</Button><br />
        </div>
    </div> 
  );
}

export default AddDao;
