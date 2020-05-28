import React from 'react'
import { Form } from 'semantic-ui-react'

export default class EditResoForm extends React.Component {

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
             console.log(this.props)

             this.setState({
                 start_date: this.props.reservation.start_date,
                 end_date: this.props.reservation.end_date
             })
         }

         onFormChangeTwo = (event) => {
            this.setState({
            [event.target.name]: event.target.value 
          })
        }


    render(){
        console.log(this.props)

        return(
            <div className="center aligned ui three column grid">
        
                <div className="column" id="property">
                   
                    <img className="medium ui image" src={this.props.reservation.property.img_url } />
                </div>

                <div className="column" id="details">
                        
                <Form className="ui form" onChange={this.onFormChangeTwo} >
                <h4 className="ui dividing header">Reservation Dates</h4>

                            <div className="field">
                            <label>Start date</label>
                            <div className="ui calendar" id="rangestart">
                            <div className="ui input left icon">
                                <i className="calendar icon"></i>
                                <input placeholder="Start" name="start_date" type="date" value={this.state.start_date} onChange={this.props.onFormChange} />
                            </div>
                            </div>
                        </div>

                        <div className="field">
                            <label>End date</label>
                            <div className="ui calendar" id="rangeend">
                            <div className="ui input left icon">
                                <i className="calendar icon"></i>
                                <input type="date" placeholder="End" name="end_date" value={this.state.end_date} onChange={this.onFormChangeTwo} onChange={this.props.onFormChange} />
                            </div>
                            </div>
                        </div>

                <br/>


                  </Form>

                </div>
       

            </div>
        )
    }
}