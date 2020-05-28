import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import {Link} from 'react-router-dom'


export default class Property extends React.Component{
    render(){

         
        return (
        <div className="ui card">
            <div className="image">
                <img src={this.props.property.img_url} />
            </div>
            <div className="content">
                <a className="header">
                        {this.props.property.name}
                </a>
                <div className="meta">
                    {this.props.property.city}, {this.props.property.state}
                </div>
                <div className="description">
                    {this.props.property.details}
                    <br />
                    <br />
                    <p>
                        <b> ${this.props.property.price_per_night} per night </b>
                    </p>
                </div>

                {/* <div className="extra content">
                    <span className="right floated">
                        {this.props.property.price_per_night} per night 
                    </span>
                </div> */}
            </div>
                
                <div class="ui bottom attached button">
                    <Link to={`/properties/${this.props.property.id}`} > 
                        {/* <button property-id={this.props.property.id} > */}
                        <i className="plane icon"></i> VIEW PROPERTY
                        {/* </button> */}
                    </Link>
                </div>
           
        </div>
        )
    }
}
