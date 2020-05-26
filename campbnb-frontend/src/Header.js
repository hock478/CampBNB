import React from  'react';
import { Header, Icon } from 'semantic-ui-react'


const HeaderWithIcon = () => (
    <Header as='h2' className="header-logo">
      <Icon name='bed' />
      <Header.Content>CampingBNB</Header.Content>
    </Header>
  )

  
  export default HeaderWithIcon