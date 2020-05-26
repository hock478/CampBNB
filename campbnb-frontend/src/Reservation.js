import React from  'react';
import 'semantic-ui-css/semantic.min.css'
// import { Icon } from 'semantic-ui-react'


class Reservation extends React.Component {


    onEditClick = () => {
        console.log("clicking edit")
    }

    onDeleteClick = () => {
        console.log("clicking delete")
    }


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
                    </div>
                    <br />
                    <div className="bottom">
                        
                        <i className="edit icon" onClick={this.onEditClick}></i>
                        <i className="trash alternate icon" onClick={this.onDeleteClick} ></i>
                    </div>
                </div>
            </div>
            )
    }
}

export default Reservation