
import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';


function ProposedCharitiesButton() {

  return <Button className='md bg-blue-300 mr-5 mb-5'><Link to="/proposedcharities">Show Proposed Charities</Link></Button>;
}

export default ProposedCharitiesButton;