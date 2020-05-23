import React from  'react';
import 'semantic-ui-css/semantic.min.css'
// import { Icon } from 'semantic-ui-react'


class Reservation extends React.Component {

    

    render(){
        return (
            <div className="ui card">
                <div className="image">
                    <img src={this.props.reservation.property.img_url} />
                </div>
                <div className="content">
                    <a className="header">
                            {this.props.reservation.property.name}
                    </a>
                    <div className="meta">
                        {this.props.reservation.property.city},{this.props.reservation.property.state}
                    </div>
                    <div className="description">
                        Check In: {this.props.reservation.start_date} <br />
                        Check Out: {this.props.reservation.end_date}
                    </div>
                    <div className="extra content">
                        <span className="right floated">
                            ${this.props.reservation.property.price_per_night} per night 
                        </span>
                        <span><i clssName="edit icon"></i> </span>
                    </div>
                    <div className="bottom">
                        
                        <i clssName="edit icon"></i>
                        <i class="trash alternate icon"></i>
                    </div>
                </div>
            </div>
            )
    }
}

export default Reservation