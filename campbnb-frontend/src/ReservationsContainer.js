import React from  'react';
import Reservation from './Reservation'
import { Card } from 'semantic-ui-react'

class ReservationContainer extends React.Component {


    render(){
        
        if(this.props.reservations.length > 0) {

        return (
        
            <Card.Group className="ui link cards" itemsPerRow ={5} > 
            {
                this.props.reservations.map(reso => <Reservation reservation={reso} key={reso.id} onReservationEdit={this.props.onReservationEdit} onDelete={this.props.onDelete} />)
          
        

            }
    
            </Card.Group>
            )
        }else{
            return (
                <>
                <h4>No reservations at this time!</h4>
                <p>Time to start traveling. </p>
                </>
            )
        }
    }
    
}

export default ReservationContainer