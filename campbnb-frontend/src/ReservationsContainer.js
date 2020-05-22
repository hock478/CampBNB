import React from  'react';
import Reservation from './Reservation'
import { Card } from 'semantic-ui-react'

class ReservationContainer extends React.Component {


    render(){
        return (
        
            <Card.Group className="ui link cards" itemsPerRow ={5} > 
            {
                this.props.reservations.map(reso => <Reservation reservation={reso} key={reso.id} />)
            }
    
            </Card.Group>
            )
    }
    
}

export default ReservationContainer