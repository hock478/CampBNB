import React from 'react'
import NewReservationForm from './NewReservationForm'
import { Segment, Image, Grid } from 'semantic-ui-react'
import Breadcrumb from './Breadcrumb'
import Review from './Review'
import { Button, Comment, Form, Header } from 'semantic-ui-react'



class PropertyDetails extends React.Component {
    
    constructor(){
        super()
        this.state = {
            reviews: []

        }
    }

    componentDidMount(){
        fetch(`http://localhost:3000/reviews/${this.props.property.id}`)
        .then(resp => resp.json())
        .then(data => this.setState({reviews: data}))

        

    }
    render(){
        return (
            <>
        
                {/* <Breadcrumb property={this.props.property.name} />  */}
            <Segment.Group horizontal >
            <Segment>
            <div className="ui relaxed grid">
                <div className="two column row">
                <div className="five wide column">
                    <br />
                    <h1>{this.props.property.name}</h1>
                    <h3>
                    {this.props.property.city}, {this.props.property.state}
                    </h3>
                    <p>
                    {this.props.property.details}
                    <br />
                    <br />
                    <b>${this.props.property.price_per_night} per night</b>
                    </p>



                </div>
                <div className="eleven wide column">
                    <img claseName="property-page-image" src={this.props.property.img_url} />
                    </div>
                </div>
            </div>
            </Segment>
            </Segment.Group> 

            {/* <div className="ui relaxed grid">
                <div className="two column row">
                    <div className="five wide column">
                        <br />
                        <br />
                    </div>
                </div>
            </div> */}
            

            <br />

            <Segment.Group horizontal >
            <Segment>
            <h4 className="ui dividing header">ABOUT</h4>


                <div className="ui card">
                    <div className="image">
                        <img src={this.props.property.owner.image_url}/>
                    </div>
                    <div className="content">
                        <a className="header">{this.props.property.owner.fullname}</a>
                        <div className="description">
                        {this.props.property.owner.bio}
                        </div>
                    </div>
                    <div className="extra content">
                        <a>
                        <i className="user icon"></i>
                        @{this.props.property.owner.username}
                        </a>
                    </div>
                </div>
                <h4 className="ui dividing header">LOCATION</h4>
                    <p>some details about the location</p>

                <h4 className="ui dividing header">REVIEWS</h4>
                <Comment.Group>
                {this.state.reviews.map(review => {
                    let i = this.state.reviews.indexOf(review)
                    
                    return <Review review={this.props.property.reviews[i]} key={review.id} content={review}/>
                    
                }
                )
                }
                </Comment.Group>
            </Segment>
            <Segment>
                <NewReservationForm property={this.props.property} user={this.props.user} />
                

            </Segment>
            </Segment.Group>


        </>  
        )
}
    
}
export default PropertyDetails