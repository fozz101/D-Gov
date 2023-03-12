
import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';


function DonationButton() {

  return <Link to="/donate"><Button className='md bg-blue-900'>Donate Now</Button></Link>
}

export default DonationButton;
