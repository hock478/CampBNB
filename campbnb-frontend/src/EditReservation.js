import React, { Component } from 'react'
import { Button, Confirm, Modal } from 'semantic-ui-react'
import EditResoForm from './EditResoForm'


export default class EditReservation extends Component {

  state = { 
    open: false, 
    start_date: '',
    end_date: ''
    }  

  handleButtonClick = () => {
         this.setState({ 
           open: true
        })
  }

  componentDidMount(){
        
    this.setState({
        property_id: this.props.reservation.property_id,
        user_id: this.props.reservation.user_id,
        start_date: this.props.reservation.start_date,
        end_date: this.props.reservation.end_date
    })
  
  } 



  onFormChange = (event) => {
      this.setState({
      [event.target.name]: event.target.value 
    })
  }



  handleConfirm = (event) => {
    event.preventDefault()

    this.setState({ open: false })    
      // this.props.createReservation(event)
      // change this to a patch request form 

      let reservationObj = {
        user_id: this.state.user_id,
        property_id: this.state.property_id, 
        start_date: this.state.start_date,
        end_date: this.state.end_date
      }

      console.log("reservation updated!")
      console.log(reservationObj)


      fetch(`http://localhost:3000/reservations/`+ this.props.reservation.id, {
        method: 'PATCH',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(reservationObj)
        })
        .then(res => res.json())
        .then( data => {
        
            console.log(data)  
            this.props.onReservationEdit(data) 
            
            //change reservations array 

            // window.location.href = "http://localhost:3001/reservations"
           
        })
      


  }

  handleCancel = () => {
      //simply closes for edit reservation confirmation form
      this.setState({ open: false })

  }


    render() {
      console.log(this.props)
    
        return (
          <span>

          <i className="edit icon" onClick={this.handleButtonClick}></i>

          <Confirm
          header='Edit Reservation'
          content={<EditResoForm reservation={this.props.reservation}  onFormChange={this.onFormChange} />}
          open={this.state.open}
          onCancel={this.handleCancel }
          onConfirm={this.handleConfirm }
          size='large'
          />

          

          </span>
        )
    }

}