
import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';


function AllCharitiesButton() {

  return <Button className='md bg-blue-300 mr-5 mb-5'><Link to="/charities">Show All Charities</Link></Button>;
}

export default AllCharitiesButton;