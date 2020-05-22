import React from "react";

class NewPropertyForm extends React.Component {

    constructor(){
        super();
        
        this.state = {
            name: '',
            city: '',
            state: null,
            details: null,
            imgUrl: '',
            pricePerNight: null,
            ownerId: null
        }
    }

//     componentDidMount(){
//         this.setState({
//             ownerId: this.props.userId,
//         })
        
//     }

    

    onFormChange = (event) => {
        this.setState({
        [event.target.name]: event.target.value 
      })
    }

    onSubmitForm = (event) => {
        event.preventDefault()

         let propertyObj = {
                name: this.state.name,
                city: this.state.city,
                state: this.state.state,
                details: this.state.details,
                pricePerNight: this.state.pricePerNight,
                imgUrl: this.state.imgUrl,
                ownerId: this.state.ownerId
             }

//         // fetch POST new property
            //need to add this in 
        // this.props.createProperty(propertyObj)

        this.setState({
            name: '',
            city: '',
            state: '',
            details: '',
            pricePerNight: null,
            imgUrl: '',
            ownerId: null
        })
    }

  
    render(){
        return (
            <form className="new-property-form" onSubmit={this.onSubmitForm}>

                <input name="name" value={this.state.name} onChange={this.onFormChange} />
                <input name="city" value={this.state.city} onChange={this.onFormChange} />
                <input name="state" value={this.state.state} onChange={this.onFormChange} />
                <input name="details" value={this.state.details} onChange={this.onFormChange} />
                <input name="pricePerNight" value={this.state.pricePerNight} onChange={this.onFormChange} />
                <input name="imageUrl" value={this.state.imageUrl} onChange={this.onFormChange} />

                <input type="submit" value="Create Property" />

            </form>
        )
    }


}

export default NewPropertyForm; 
