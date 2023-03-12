import React,{useState} from "react";
import SendTransaction from "./SendTransaction";
import { Input } from "@material-tailwind/react";
import {Textarea} from "@material-tailwind/react";





const Donate= () => {



    const [value, setValue] = useState(0);
    const [message, setMessage] = useState("");
    const handleChange = (e) => {
        if( e.target.name == "value"){
            setValue(e.target.value);
        }
        else{
            setMessage(e.target.value);
        }

    }
    return (
        <div className="py-20 px-96" id="add-container">
            <div id="add-charity"  className=" px-20 py-10">
                <h1 className="font-semibold text-2xl">Contribute</h1>  <br />   
                <label  className=" ">Amount</label>
                <Input onChange={handleChange} name="value" type="number" className="w-96" placeholder="Write the amount"  autoComplete="off"></Input><br /> 
                <label className="">Message</label>
                <Textarea onChange={handleChange}  className="w-96 h-40" placeholder="Write a message ..."  autoComplete="off" rows={7}></Textarea ><br /> 
                <SendTransaction value={value}  message={message} />
            </div>

        </div> 


    )
}
export default Donate