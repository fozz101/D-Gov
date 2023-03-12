import * as React from 'react';
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

import useGetAllProposals from '../utils/dao/useGetAllProposals';
import useApproveAddCharity from '../utils/dao/useApproveAddCharity';
import useRejectAddCharity from '../utils/dao/useRejectAddCharity';
import { ethers } from 'ethers';
import { wallet } from './store/store';
import { Button } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
import useExecuteProposal from '../utils/dao/useExecuteProposal';



const columns = [
  { id: 'id', label: 'id', minWidth: 200 },
  { id: 'proposer', label: 'Proposed by', minWidth: 150 },
  { id: 'name', label: 'name', minWidth: 300 },
  { id: 'address', label: 'address', minWidth: 300 },
  { id: 'description', label: 'description', minWidth: 0 },
  { id: 'approvalCount', label: 'approvalCount', minWidth: 0 },
  { id: 'rejectionCount', label: 'rejectionCount', minWidth: 0 },



];


export default function StickyHeadTable() {
  let navigate = useNavigate();
  
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [proposals, setProposals] = React.useState([]);
  const {DaoContractAddr,signer} = React.useContext(wallet);
  const approveCharity = useApproveAddCharity(DaoContractAddr,signer);
  const rejectCharity = useRejectAddCharity(DaoContractAddr,signer);
  let getProposals = useGetAllProposals(DaoContractAddr);
  let executeProposal = useExecuteProposal(DaoContractAddr,signer);
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
      <h1 id='don' className='font-bold text-4xl py-10'>List of charities</h1>
      </div>

      <div className='border-solid border-2 px-20 py-2 drop-shadow-lg'>
      <AllCharitiesButton/>
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
            {proposals.length > 0 ?
            proposals
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  row.proposalType=="Add Charity"?<TableRow hover role="checkbox" tabIndex={-1} key={ethers.BigNumber.from(row.id).toString()}>
                   
                  <TableCell key={ethers.BigNumber.from(row.id).toString()} >
                    {ethers.BigNumber.from(row.id).toString()}
                    
                  </TableCell>
                  <TableCell key={row.proposer} >
                  {row.proposer}
                  </TableCell>
                  <TableCell key={row.name} >
                  {row.name}
                    
                  </TableCell>
                  <TableCell key={row.charityAddress} >
                  {row.charityAddress}
                  </TableCell>
                  <TableCell key={row.description} >
                  {row.description}
                  </TableCell>
                  <TableCell key={ethers.BigNumber.from(row.approvalCount).toString()} >
                  {ethers.BigNumber.from(row.approvalCount).toString()}
                  </TableCell>
                  <TableCell key={ethers.BigNumber.from(row.rejectionCount).toString()} >
                  {ethers.BigNumber.from(row.rejectionCount).toString()}
                  </TableCell>
              
              <div className='flex py-10 pr-5 justify-center'>

              <Button variant="decline" className=" flex  bg-green-500" onClick={()=>{approveCharity(ethers.BigNumber.from(row.id).toString())}}><img src={require('./assets/approve.png')} alt="approve" className=" w-16"/></Button>
              <div className='w-5'></div>
              <Button variant="decline" className=" flex  bg-red-500" onClick={()=>{rejectCharity(ethers.BigNumber.from(row.id).toString())}}><img src={require('./assets/decline.png')} alt="decline" className=" w-16"/></Button>
              <div className='w-5'></div>
              {row.executed?<p>executed</p>:<Button variant="success" className=" flex  bg-blue-500" onClick={()=>{executeProposal(ethers.BigNumber.from(row.id).toString())}}><img src={require('./assets/execute.png')} alt="execute" className=" w-16"/></Button>}
              </div>
              
            </TableRow>: null
                  
                );
              }):null}
          </TableBody>
        </Table>
      </TableContainer>
      <div className=' py-5' id='addCharityButton'>      
        <AddCharityButton/>
      </div>
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