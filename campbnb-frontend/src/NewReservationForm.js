import React from "react";
import { Button, Form } from 'semantic-ui-react'
import ConfirmReservation from './ConfirmReservation'


class NewReservationForm extends React.Component {

    constructor(){
        super();
        
        this.state = {
            start_date: '',
            end_date: '',
            property_id: null,
            user_id: null
        }
    }

    componentDidMount(){
        this.setState({
            property_id: this.props.property.id,
            user_id: this.props.userId
        })
    }

    

    onFormChange = (event) => {
        this.setState({
        [event.target.name]: event.target.value 
      })
    }

    onSubmitForm = () => {
        // event.preventDefault()

        let reservationObj = {
            start_date: this.state.start_date,
            end_date: this.state.end_date,
            property_id: this.state.property_id, 
            user_id: this.state.user_id
        }

        debugger

        // fetch POST new reservation
        fetch('https://localhost:3000/reservations', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(reservationObj)
            }).then(res => res.json())
            .then( data => {
                console.log("created new reservation")  
                window.location.href="http://localhost:3001/reservations"
            }
            )

        this.setState({
            start_date: '',
            end_date: '',
            property_id: this.props.property_id,
            user_id: this.props.user_id 
        })


    }

  
    render(){
        return (
          
            <Form className="ui form" onSubmit={this.onSubmitForm}>
                <h4 className="ui dividing header">Reserve This Property</h4>

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
                {/* </div> */}
                <br/>



                {/* <input name="startDate" type="date" value={this.state.startDate} onChange={this.onFormChange} />
                <input name="endDate" type="date" value={this.state.endDate} onChange={this.onFormChange} /> */}
                <ConfirmReservation reservation={this.state} createReservation={this.onSubmitForm} user={this.props.user}/>
            </Form>
         
        )
    }


}

export default NewReservationForm; 
