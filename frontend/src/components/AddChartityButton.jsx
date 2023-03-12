
import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';


function AddCharityButton() {

  return <Button className='md bg-blue-900'><Link to="/addcharity">Propose New Charity</Link></Button>;
}

export default AddCharityButton;
