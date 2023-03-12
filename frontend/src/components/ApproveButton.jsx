import React from 'react';
import { Button } from '@material-tailwind/react';

const ApproveButton = (props) => {
  return (
    <Button className=" flex  bg-green-500"><img src={require('./assets/approve.png')} alt="approve" className=" w-16"/></Button>
  );
};

export default ApproveButton;