import React from  'react';
import ReservationsContainer from './ReservationsContainer'

class ReservationPage extends React.Component {
    constructor(){
        super()
        this.state = {
            reservations: []
        }
    }

componentDidMount(){

    fetch(`http://localhost:3000/reservations/${localStorage.user}`)
    .then(resp => resp.json())
    .then(resos => {this.setState({ reservations: resos })
    localStorage.reservations = JSON.stringify(resos)
  })

}
    render(){
        return <div className="reservations-container">
            <ReservationsContainer reservations={JSON.parse(localStorage.reservations)} /> 
        </div>
    }
}

export default ReservationPage