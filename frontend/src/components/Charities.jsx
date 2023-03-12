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
import { wallet } from './store/store';
import useGetAllCharities from '../utils/dao/useGetAllCharities';
import { ethers } from 'ethers';

const columns = [
  { id: 'id', label: 'Id', minWidth: 50 },
  { id: 'address', label: 'Address', minWidth: 150 },
  { id: 'name', label: 'Name', minWidth: 150 },
  { id: 'description;', label: 'Description;', minWidth: 200 },
  { id: 'donationNumber;', label: 'Number of donations;', minWidth: 150 },
  { id: 'amountDonated', label: 'Amount donated', minWidth: 300 }
];

export default function StickyHeadTable() {
  const {DaoContractAddr} = React.useContext(wallet);
  let charities = useGetAllCharities(DaoContractAddr);
  console.log(charities,"charities here");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);


  };

  return (
    <div>
      <div>
      <h1 id='don' className='font-bold text-4xl py-10'>List of charities</h1>
      </div>

      <div className='border-solid border-2 px-20 py-2 drop-shadow-lg'>
      <ProposedCharitiesButton/>
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
            {charities
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                   
                        <TableCell key={ethers.BigNumber.from(row.id).toString()}>
                          {ethers.BigNumber.from(row.id).toString()}
                          
                        </TableCell>
                        <TableCell key={ethers.BigNumber.from(row.id).toString()}>
                          {"0x"+ethers.BigNumber.from(row.charityAddr).toString()}
                          
                        </TableCell>
                        <TableCell key={ethers.BigNumber.from(row.id).toString()}>
                          {row.description}
                          
                        </TableCell>
                        <TableCell key={ethers.BigNumber.from(row.id).toString()}>
                          {row.name}
                          
                        </TableCell>
                        
                        <TableCell key={ethers.BigNumber.from(row.id).toString()}>
                          {ethers.BigNumber.from(row.donationNumber).toString()}
                          
                        </TableCell>
                        <TableCell key={ethers.BigNumber.from(row.id).toString()}>
                          {ethers.BigNumber.from(row.amountDonated).toString()}
                          
                        </TableCell>
                    
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <div className=' py-5' id='addCharityButton'>      
        <AddCharityButton/>
      </div>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={charities.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage} 
        />
        
    </div>
  </div>
  );
}