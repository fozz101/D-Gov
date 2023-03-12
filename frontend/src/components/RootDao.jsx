import React from 'react'
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";
import Proposals from './Proposals';
import Members from './Members';
import Details from './Details';

function RootDao() {
  return (
    <Tabs value="Proposals">
  <TabsHeader>
    
      <Tab key="Proposals" value="Proposals">
      Proposals
      </Tab>
      <Tab key="Members" value="Members">
      Members
      </Tab>
      <Tab key="Details" value="Details">
      Details
      </Tab>

  </TabsHeader>
  <TabsBody>
  <TabPanel key="Proposals" value="Proposals">
        <Proposals />
      </TabPanel>
      <TabPanel key="Members" value="Members">
      <Members />
      </TabPanel>
      <TabPanel key="Details" value="Details">
      <Details />
      </TabPanel>


  </TabsBody>
</Tabs>
); }

export default RootDao
