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

    fetch(`http://localhost:3000/reservations/${JSON.parse(localStorage.user).id}`)
    .then(resp => resp.json())
    .then(resos => {
    localStorage.reservations = JSON.stringify(resos)
    this.setState({ reservations: JSON.parse(localStorage.reservations) })
  })

}
    render(){
        return <div className="reservations-container">
            <ReservationsContainer reservations={this.state.reservations} /> 
        </div>
    }
}

export default ReservationPage