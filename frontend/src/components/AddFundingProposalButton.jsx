import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';


function AddFundingProposalButton() {

  return <Button className='md bg-blue-900'><Link to="/addproposal">Propose New Fund Proposal</Link></Button>;
}

export default AddFundingProposalButton;