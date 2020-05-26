import React from 'react'
import { Button, Comment, Form, Header } from 'semantic-ui-react'

export default class Review extends React.Component {
    render(){
        return(
            
            <div className="comment">
    <a className="avatar">
      <img src={this.props.content.image_url}/>
    </a>
    <div className="content">
      <a className="author">{this.props.content.fullname}</a>
      <div className="metadata">
        <span className="date">Today at 5:42PM</span>
      </div>
      <div className="text">
        {this.props.review.content}
      </div>
      <div className="actions">
        <a className="reply">Reply</a>
      </div>
    </div>
  </div>
  
        )
    }
}