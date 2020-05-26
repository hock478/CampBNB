import React, { Component } from 'react'
import { Button, Confirm } from 'semantic-ui-react'
// import { Redirect } from "react-router-dom";


class ConfirmReservation extends Component {

    state = { open: false  }

    handleButtonClick = () => this.setState({ open: true })
    handleConfirm = () => {


    //   let reservationObj = {
    //     startDate: this.props.startDate,
    //     endDate: this.props.endDate,
    //     propertyId: this.props.propertyId, 
    //     userId: this.props.userId
    // }

    //     // fetch POST new reservation
    //   this.props.createReservation(reservationObj)

        this.setState({ open: false })    
        window.location.href="http://localhost:3001/reservations"
             

        //fetch POST reservation
        //redirect to reservations page 
    }
    handleCancel = () => {
        //simply closes for reservation confirmation form
        this.setState({ open: false })

    }
  
    render() {
      return (
        <span>
          <Button onClick={this.handleButtonClick}>Book it!</Button>
          <Confirm
          header='Confirm Reservation'
          content='this is custom content'
          open={this.state.open}
          onCancel={this.handleCancel}
          onConfirm={this.handleConfirm}
          size='large'
          />
       
      </span>
      )
    }
}

export default ConfirmReservation
