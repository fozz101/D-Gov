import React,{useState,useEffect,useContext} from 'react';
import moment from 'moment';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import DonationButton from './DonationButton';

import { wallet } from './store/store';
import { ethers } from 'ethers';
import { parseEther } from 'ethers/lib/utils';
import useGetAllDonations from '../utils/dao/useGetAllDonations';
import ABI from '../utils/ABI.json'



const columns = [
  { id: 'donor', label: 'Donor', minWidth: 200 },
  { id: 'amount', label: 'Amount', minWidth: 50 },
  {
    id: 'message',
    label: 'Message',
    minWidth: 180,
    align: 'left',
  },
  {
    id: 'date',
    label: 'Date',
    minWidth: 70,

  }
];



export default function StickyHeadTable() {
  const [fetched, setFetched] = useState(false);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [alldonations, setAlldonations] = useState([]);
  let {CharityDaoAbi} = ABI
  const {DaoContractAddr,signer} = useContext(wallet);
  
  let getDonations = useGetAllDonations(DaoContractAddr);
  const fetchData=async()=>{
    let mydonation = await getDonations().then((res) =>{setAlldonations(res)
    console.log("yea m still trying",res)});
  }
  
  
  


 useEffect(() => {
  fetchData();
 }, []);
 

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  

 
  return (
    <>
      <div>
      <h1 id='don' className='font-bold text-4xl py-10'>Donations Received</h1>
      </div>
      <div className='border-solid border-2 px-20 py-2 drop-shadow-lg'>
      <TableContainer  sx={{ maxHeight: 440 }} justifyContent="center">
        <Table  className='border-separate border-spacing-2 border border-slate-500' stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {
              columns.map((column) => (
                <TableCell
                  key={column.id}
                  
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {alldonations!== []?alldonations
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} >
                   
                        <TableCell key={row.donator} >
                        {row.donor}
                          
                        </TableCell>
                        <TableCell key={ethers.BigNumber.from(row.amount).toString()} >
                        {ethers.BigNumber.from(row.amount).toString() / 10**18} Ether
                        </TableCell>
                        
                        <TableCell key={row.message}>
                        {row.message}
                        </TableCell>
                        <TableCell key={ethers.BigNumber.from(row.date).toString()} >
                          
                          {moment(new Date(ethers.BigNumber.from(row.date).toNumber() * 1000)).format(
								'MMMM Do YYYY, h:mm:ss a',
							)}
                        </TableCell>
                        
                      
                  </TableRow>
                );
              }):<h4>loading your data</h4>}
          </TableBody>
        </Table>
      </TableContainer>
      <DonationButton/>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={alldonations.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage} />
    </div></>
  );
}