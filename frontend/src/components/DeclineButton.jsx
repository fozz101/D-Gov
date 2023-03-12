import React from 'react';
import { Button } from '@material-tailwind/react';



const DeclineButton = (props) => {
  return (
    <Button className="flex bg-red-500"><img src={require('./assets/decline.png')} alt="decline" className="w-16"/></Button>
  );
};

export default DeclineButton;