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

        fetch(`http://localhost:3000/reservations/${this.props.user.id}`)
        .then(resp => resp.json())
        .then(resos => {
        // localStorage.reservations = JSON.stringify(resos)
        this.setState({ reservations: resos })
    })
    }

    onReservationDelete = (reservation) => {
        alert("Confirming that this reservation has been deleted!")

        fetch(`http://localhost:3000/reservations/${reservation.id}`, {
            method: "DELETE",
            headers: {'Content-Type': 'application/json'},
        })
        .then(res => res.json() )
        .then( res => {
            let newArray = this.state.reservations.filter(reservationObj => reservationObj.id !== reservation.id) 
            this.setState({
                 reservations: newArray 
           })
        })
    }


    render(){
        return <div className="reservations-container">
            <ReservationsContainer reservations={this.state.reservations}  onDelete={this.onReservationDelete} /> 
        </div>
    }
}

export default ReservationPage