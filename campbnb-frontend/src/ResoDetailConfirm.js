import React from 'react'
// import { Segment } from 'semantic-ui-react'

export default class ResoDetailConfirm extends React.Component {


    render(){
        return(
            <div className="center aligned ui three column grid">
        
            <div className="column" id="property">
                <img className="medium ui image" src={this.props.property.img_url } />
            </div>

            <div className="column" id="details">
                <table className="ui celled table">
                    <thead>
                    <tr>
                        <th colspan="2">
                            <h5>{this.props.property.name} </h5> 
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            Check-in: 
                            </td>
                            <td className="right aligned">
                            {this.props.reservation.start_date}
                            </td>
                    </tr>
                    <tr>
                        <td>
                            Check-out:
                        </td>
                        <td className="right aligned">
                            {this.props.reservation.end_date}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            
                           Price Per Night:
                        </td>
                        <td className="right aligned">
                           ${this.props.property.price_per_night}
                        </td>
                    </tr>
                    </tbody>
                </table>

            </div>
       

            </div>
        )
    }
}