import React from 'react'
import CommunityDetails from './CommunityDetails'
export default class Community extends React.Component {

   handleClick = (event) => {
    window.location.href=`http://localhost:3001/communities/${this.props.community.id}`

   }
    render(){
        return(
            <>

            <div className="ui card">
            <div className="image">
                <img src="https://www.pngitem.com/pimgs/m/144-1447082_class-group-chat-group-chat-icon-white-png.png" />
            </div>
            <div className="content">
                <a className="header" onClick={this.handleClick}>
                        Topic: {this.props.community.topic}
                </a>
                <div className="meta">
                    Members: 2
                </div>
                <div className="description">
                    Created by {this.props.community.user ? this.props.community.user.username : null}
                    {/* <span className="right floated">
                        {null} per night 
                    </span> */}
                </div>
             </div>      
        </div>
            </>
        )
    }
}