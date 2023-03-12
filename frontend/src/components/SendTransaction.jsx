import React from "react";
import { Button } from "@material-tailwind/react";

import { ethers } from "ethers";
import { useContext } from "react";

import { wallet } from "../components/store/store";
import ABI from "../utils/ABI.json"
import { useNavigate } from "react-router-dom";


const {CharityDaoAbi} = ABI







const SendTransaction= (props) => {
    const navigate = useNavigate();

    
    const {DaoContractAddr,signer,setSigner}=useContext(wallet)
    const DaoContract =  new ethers.Contract(DaoContractAddr,CharityDaoAbi,signer)
   
    const fundCharity = async (amount,message) =>{
        try{
        let toSend = amount * 10**18
        console.log(toSend);
        await DaoContract.fund(message,{value:toSend.toString()}).then(()=>{navigate('/donations')})
        

        }catch(error){
            alert("Payment is rejected or the wallet is not connected")
        }
    }
    return (
        <Button onClick={()=>{fundCharity(props.value,props.message);
            console.log(props.value,"haw el amount");
            console.log(props.message,"haw el message");
            }} size="md" className=" bg-blue-900 center">Send</Button>
    )

}
export default SendTransaction