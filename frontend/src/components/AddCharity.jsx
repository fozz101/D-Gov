import React,{useContext,useState} from "react";

import AddButton from "./AddButton";
import { Button } from "@material-tailwind/react";
import useProposeCharity from "../utils/dao/useProposeCharity";
import { wallet } from "./store/store";

import { Input, Textarea } from "@material-tailwind/react";
import useGetAllCharities from "../utils/dao/useGetAllCharities";

const AddCharity= () => {
    
    const {DaoContractAddr,signer} = useContext(wallet)
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [description, setDescription] = useState("");
    const addCharityProposal = useProposeCharity(DaoContractAddr,signer);
    const handleChange = (e) => {
        if (e.target.name == "name"){
            setName(e.target.value);
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
                <h1 className="font-semibold text-2xl">Propose New Charity</h1>  <br />   
                <label className=" ">Name</label>
                <Input name="name" onChange={handleChange} className="w-96"></Input><br /> 
                <label className="">Address</label> 
                <Input name="address" onChange={handleChange} className="w-96"></Input><br /> 
                <label className="">Description</label>
                <Textarea onChange={handleChange} name="description" className="w-96 h-32"></Textarea ><br /> 
                <Button onClick={()=>{ addCharityProposal(address,name,description)}}size="md" className=" bg-blue-900 center">Propose</Button><br />
            </div>
        </div> 
    )
}
export default AddCharity