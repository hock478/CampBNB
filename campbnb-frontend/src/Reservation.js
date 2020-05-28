import React from  'react';
import 'semantic-ui-css/semantic.min.css'
import EditReservation from './EditReservation'
// import { Icon } from 'semantic-ui-react'


class Reservation extends React.Component {

    constructor(){
        super()
        this.state = {
            reservation_id: null 
        }
    }

    componentDidMount(){
        this.setState({
            reservation_id: this.props.reservation.id 
        })
    }

    onEditClick = () => {
        console.log("clicking edit")
       

    }

    onDeleteClick = () => {
        console.log("clicking delete")
    }


    render(){
        console.log(this.props)

        return (
            <div className="ui card">
                <div className="image">
                    <img src={this.props.reservation.property.img_url} className="reso-image" />
                </div>
                <div className="content">
                    <a className="header">
                            {this.props.reservation.property.name}
                    </a>
                    <div className="meta">
                        {this.props.reservation.property.city}, {this.props.reservation.property.state}
                    </div>
                    <div className="description">
                        Check In:  {this.props.reservation.start_date} <br />
                        Check Out:  {this.props.reservation.end_date}
                    </div>
                    <div className="extra content">
                        <span className="center floated">
                            <br />

                            <b>${this.props.reservation.property.price_per_night} per night </b>
                        </span>
                    </div>
                    <br />
                    <div className="right floated">
                        <EditReservation reservation={this.props.reservation} onReservationEdit={this.props.onReservationEdit} />
                        
                        {/* <i className="edit icon" onClick={this.onEditClick} reservation={this.props.reservation} ></i> */}

                        <i className="trash alternate icon" onClick={() => this.props.onDelete(this.props.reservation) } ></i>
                    </div>
                </div>
            </div>
            )
    }
}

export default Reservation