import React,{useContext, useContexte} from "react";
import { Link } from 'react-router-dom';

import ConnectWallet from "./ConnectWallet";
import DonationButton from "./DonationButton";



const Navbar = () => {



    return (
        <div className="drop-shadow-lg flex justify-between items-center h-20  mx-auto px-20 sticky top-0" id="navbar">
            <Link to="/"><img src={require('./assets/Logo.png')} alt="logoo" id="logo" width={120}/></Link>
            <ul className="flex  text-[#000000]">
                <li className=" font-semibold text-large p-4 "><Link to="/">Home</Link></li>
                <li className=" font-semibold text-large p-4 "><Link to="/RootDao">RootDao</Link></li>
                <li className=" font-semibold text-large p-4 "><Link to="/SubDaos">SubDaos</Link></li>
            </ul>
            <div className=" flex w-max gap-4">
            <ConnectWallet/>
            </div>
        </div> 
    )
}
export default Navbar 