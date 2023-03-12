
import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';


function AddDaoButton() {

  return <Button className='md bg-blue-900'><Link to="/addDao">Propose New DAO</Link></Button>;
}

export default AddDaoButton;
