import React, { Component } from 'react'
import { Button, Confirm } from 'semantic-ui-react'
import ResoDetailConfirm from './ResoDetailConfirm'


class ConfirmReservation extends Component {

    state = { open: false  }  

    handleButtonClick = () => {
      if(this.props.user && this.props.user !== "null"){
        this.setState({ open: true })
      }else{
        alert("You must be signed in to do this")
        window.location.href= "http://localhost:3001/login"      }
    }
    handleConfirm = (event) => {

      event.preventDefault()

        this.setState({ open: false })    
        this.props.createReservation(event)
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
          content={<ResoDetailConfirm property={this.props.property} reservation={this.props.reservation} />}
          open={this.state.open}
          onCancel={this.handleCancel }
          onConfirm={this.handleConfirm }
          size='large'
          />
       
      </span>
      )
    }
}

export default ConfirmReservation
