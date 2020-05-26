import React from "react";
import { Button, Form } from 'semantic-ui-react'
import ConfirmReservation from './ConfirmReservation'


class NewReservationForm extends React.Component {

    constructor(){
        super();
        
        this.state = {
            startDate: '',
            endDate: '',
            propertyId: null,
            userId: null
        }
    }

    componentDidMount(){
        this.setState({
            propertyId: this.props.property.id,
            userId: this.props.userId 
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
            startDate: this.state.startDate,
            endDate: this.state.endDate,
            propertyId: this.state.propertyId, 
            userId: this.state.userId
        }

        // fetch POST new reservation
        this.props.createReservation(reservationObj)

        this.setState({
            startDate: '',
            endDate: '',
            propertyId: this.props.propertyId,
            userId: this.props.userId 
        })


    }

  
    render(){
        return (
            <Form className="ui form" onSubmit={this.onSubmitForm}>
                <h4 class="ui dividing header">Reserve This Property</h4>

                {/* <div class="ui form"> */}
                        <div class="field">
                            <label>Start date</label>
                            <div class="ui calendar" id="rangestart">
                            <div class="ui input left icon">
                                <i class="calendar icon"></i>
                                <input placeholder="Start" name="startDate" type="date" value={this.state.startDate} onChange={this.onFormChange} />
                            </div>
                            </div>
                        </div>
                        <div class="field">
                            <label>End date</label>
                            <div class="ui calendar" id="rangeend">
                            <div class="ui input left icon">
                                <i class="calendar icon"></i>
                                <input type="date" placeholder="End" name="endDate" value={this.state.endDate} onChange={this.onFormChange} />
                            </div>
                            </div>
                        </div>
                {/* </div> */}
                <br/>



                {/* <input name="startDate" type="date" value={this.state.startDate} onChange={this.onFormChange} />
                <input name="endDate" type="date" value={this.state.endDate} onChange={this.onFormChange} /> */}
                <ConfirmReservation reservation={this.state} createReservation={this.props.createReservation}/>
                <Button type="submit" value="Book Trip">Let's go!</Button>
            </Form>
        )
    }


}

export default NewReservationForm; 
