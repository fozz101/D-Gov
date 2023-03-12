import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Donations from "./components/Donations";
import  Charities from "./components/Charities"; 
import AddProposal from "./components/AddProposal";
import Donate from "./components/Donate";
import AddCharity from "./components/AddCharity";
import { wallet } from "./components/store/store";
import ProposedCharities from "./components/ProposedCharities";
import ABI from "./utils/ABI.json"
import Proposals from "./components/Proposals";
import RootDao from "./components/RootDao";
import SubDaos from "./components/SubDaos";
import AddDao from "./components/AddDao";
import { id } from "ethers/lib/utils";


function App() {
  const [signer,setSigner] = useState(null)
  const DaoContractAddr = "0xC5dFA60282039353f0C4843910Cd70F4822B9f45"
  const TokenAddress ="0xda0C34348DdC1Dd4c65De0b7dA6f55229467DbaB"
  const {CharityDaoAbi} = ABI

  return (
    <div className="App">
      <wallet.Provider value={{TokenAddress,DaoContractAddr,CharityDaoAbi,signer,setSigner}}>
    <Navbar />
    <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/RootDao" element={<RootDao/>} />
          <Route path="/SubDaos" element={<SubDaos/>} />
          <Route path="/SubDaos/:id" element={<RootDao id />} />
          <Route path="/addDao" element={<AddDao/>} />
          <Route path="/addcharity" element={<AddCharity/>} />
          <Route path="/addproposal" element={<AddProposal/>} />
          <Route path="/donations" element={<Donations/>} />
          <Route path="/proposedcharities" element={<ProposedCharities/>} />
          <Route path="/proposals" element={<Proposals />} />

    </Routes>
    </wallet.Provider>
    </div>
  );
}

export default App;
