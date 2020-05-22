import React from  'react';
import Property from './Property'
import { Card } from 'semantic-ui-react'

class PropertiesContainer extends React.Component {


    render(){
        return (
        <Card.Group className="ui link cards" itemsPerRow ={5} > 
            {
                this.props.properties.map(property => <Property property={property} key={property.id} />)
            }

        </Card.Group>
            

        )
    }
}

export default PropertiesContainer