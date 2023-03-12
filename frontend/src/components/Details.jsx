import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import AddCharityButton from './AddChartityButton';
import AllCharitiesButton from './AllCharitiesButton';
import ProposedCharitiesButton from './ProposedCharitiesButton';
import { wallet } from './store/store';
import useGetAllProposals from "../utils/dao/useGetAllProposals";
import { ethers } from 'ethers';
 import useApproveProposal from "../utils/dao/useApproveProposal";
 import useRejectProposal from "../utils/dao/useRejectProposal";
 import useApprove from "../utils/Talinium/useApprove";
 import DeclineButton from './DeclineButton';
import ApproveButton from './ApproveButton';
import { Button } from '@material-tailwind/react';
import AddFundingProposalButton from './AddFundingProposalButton'
import useExecuteProposal from "../utils/dao/useExecuteProposal";

const columns = [
  { id: 'id', label: 'Id', minWidth: 50 },
  { id: 'address', label: 'Proposer', minWidth: 150 },
  { id: 'charityaddress', label: 'Charity', minWidth: 150 },
  { id: 'name', label: 'name', minWidth: 200 },
  { id: 'description', label: 'description', minWidth: 150 },
  { id: 'amount', label: 'amount', minWidth: 300 },
  {id:"action",label:"Vote"}
];


const Details= () => {
    const {TokenAddress,DaoContractAddr,CharityDaoAbi,signer,setSigner} = React.useContext(wallet);
    const [proposals, setProposals] = React.useState([]);
  
  const approveProposal = useApproveProposal(DaoContractAddr,signer);
  const rejectProposal = useRejectProposal(DaoContractAddr,signer);
  const Approve = useApprove(TokenAddress,signer)
  const executeProposal = useExecuteProposal(DaoContractAddr,signer)

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  let getProposals = useGetAllProposals(DaoContractAddr);
  const fetchData=async()=>{
    let mydonation = await getProposals().then((res) =>{setProposals(res)
      
    console.log("yea m still trying",res)});
    console.log(proposals,"these are the proposals");
  }
  
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);


  };
  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div>
      <h1 id='don' className='font-bold text-4xl py-10'>List of Details</h1>
      </div>

      <div className='border-solid border-2 px-20 py-2 drop-shadow-lg'>
      
      <TableContainer  sx={{ maxHeight: 300 }} justifyContent="center">

        <Table  className='border-separate border-spacing-2 border border-slate-500'>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id} 
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {proposals
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  row.proposalType=="Fund Charity"?<TableRow hover role="checkbox" tabIndex={-1} key={ethers.BigNumber.from(row.id).toString()}>
                   
                  <TableCell key={ethers.BigNumber.from(row.id).toString()} >
                    {ethers.BigNumber.from(row.id).toString()}
                    
                  </TableCell>
                  <TableCell key={row.proposer} >
                  {row.proposer}
                  </TableCell>
                  <TableCell key={row.charityAddress} >
                  {row.charityAddress}
                  </TableCell>
                  <TableCell key={row.name} >
                  {row.name}
                  
                  </TableCell>
                  
                  <TableCell key={row.description} >
                  {row.description}
                  </TableCell>
                  <TableCell key={ethers.BigNumber.from(row.amount).toString()} >
                  {ethers.BigNumber.from(row.amount).toString()} Ether
                  </TableCell>
                  <TableCell key={ethers.BigNumber.from(row.approvalCount).toString()} >
                  {ethers.BigNumber.from(row.approvalCount).toString()}
                  </TableCell>
                  <TableCell key={ethers.BigNumber.from(row.rejectionCount).toString()} >
                  {ethers.BigNumber.from(row.rejectionCount).toNumber()}
                  </TableCell>
              
              <div className='flex py-10 pr-5 justify-center'>

              <Button variant="decline" className=" flex  bg-green-500" onClick={()=>{approveProposal(ethers.BigNumber.from(row.id).toString())}}><img src={require('./assets/approve.png')} alt="approve" className=" w-16"/></Button>
              <div className='w-5'></div>
              <Button variant="decline" className=" flex  bg-red-500" onClick={()=>{rejectProposal(ethers.BigNumber.from(row.id).toString())}}><img src={require('./assets/decline.png')} alt="decline" className=" w-16"/></Button>
              <div className='w-5'></div>
              {row.executed?<p>executed</p>:<Button variant="success" className=" flex  bg-blue-500" onClick={()=>{executeProposal(ethers.BigNumber.from(row.id).toString())}}><img src={require('./assets/execute.png')} alt="execute" className=" w-16"/></Button>}
              </div>
            </TableRow>: null
                  
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <div className=' py-5' id='addCharityButton'>
        <AddFundingProposalButton />  
        
      </div> */}
    
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={proposals.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage} 
        />
        
    </div>
  </div>
  );
}
export default Details





