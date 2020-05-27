import React from 'react'
import NewReservationForm from './NewReservationForm'
import { Segment, Image } from 'semantic-ui-react'
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
            
            <Segment.Group horizontal>
                <Segment>{this.props.property.name}</Segment>
                <Segment><Image src={this.props.property.img_url} /></Segment>
        </Segment.Group>

            <Segment.Group horizontal>
            <Segment>
                About the Owner
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
                Location/Map 
                Reviews
                
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
                <NewReservationForm property={this.props.property} user={this.props.user}  />
                

            </Segment>
            </Segment.Group>


        </>  
        )
}
    
}
export default PropertyDetails