import React from  'react';
import ReservationsContainer from './ReservationsContainer'

class ReservationPage extends React.Component {


    render(){
        return <div className="reservations-container">
            <ReservationsContainer reservations={this.props.reservations} /> 
        </div>
    }
}

export default ReservationPage