import React from "react";
import { Button, Form } from 'semantic-ui-react'
import ConfirmReservation from './ConfirmReservation'


class NewReservationForm extends React.Component {

    constructor(){
        super();
        
        this.state = {
            start_date: '',
            end_date: ''
            // property_id: null,
            // user_id: null
        }
    }

    componentDidMount(){

        let x = parseInt(localStorage.userId)
        
        this.setState({
            property_id: this.props.property.id,
            user_id: x
        })
       
    }

    

    onFormChange = (event) => {
        this.setState({
        [event.target.name]: event.target.value 
      })
    }

    onSubmitForm = (event) => {
        event.preventDefault()
     
        let reservationObj = {
            start_date: this.state.start_date,
            end_date: this.state.end_date,
            property_id: this.state.property_id, 
            user_id: this.state.user_id 
        }

        
        // fetch POST new reservation
        fetch('http://localhost:3000/reservations', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(reservationObj)
            }).then(res => res.json())
            .then( data => {
                console.log("created new reservation")  
                window.location.href="http://localhost:3001/reservations"
                //redrect isn't working 
            }
            )

    }



  
    render(){

        return (

          
            <Form className="ui form" >
                <h3 className="ui dividing header">RESERVE THIS PROPERTY</h3>

                {/* <div class="ui form"> */}
                        <div className="field">
                            <label>Start date</label>
                            <div className="ui calendar" id="rangestart">
                            <div className="ui input left icon">
                                <i className="calendar icon"></i>
                                <input placeholder="Start" name="start_date" type="date" value={this.state.startDate} onChange={this.onFormChange} />
                            </div>
                            </div>
                        </div>
                        <div className="field">
                            <label>End date</label>
                            <div className="ui calendar" id="rangeend">
                            <div className="ui input left icon">
                                <i className="calendar icon"></i>
                                <input type="date" placeholder="End" name="end_date" value={this.state.endDate} onChange={this.onFormChange} />
                            </div>
                            </div>
                        </div>
                <br/>


                <ConfirmReservation reservation={this.state} property={this.props.property} createReservation={this.onSubmitForm} user={this.props.user}/>
            </Form>
         
        )
    }


}

export default NewReservationForm; 
