import React from "react";

class NewReservationForm extends React.Component {

    constructor(){
        super();
        this.state = {
            startDate: '',
            endDate: '',
            propertyId: this.props.property.id,
            userId: this.props.userId 
        }
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
            <form className="new-reservation-form" onSubmit={this.onSubmitForm}>
                <input name="startDate" value="this.state.startDate" onChange={this.onFormChange} />
                <input name="endDate" value="this.state.endDate" onChange={this.onFormChange} />
                <input type="submit" value="Book Trip" />
            </form>
        )
    }


}

export default NewReservationForm; 
