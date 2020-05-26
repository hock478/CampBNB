import React from 'react'
import { Button, Comment, Form, Header } from 'semantic-ui-react'

export default class Review extends React.Component {
    render(){
        return(
            
  <Comment>
    <Comment.Avatar src={this.props.content.image_url} />
    <Comment.Content>
        <Comment.Author as='a'>{this.props.content.fullname}</Comment.Author>
        <Comment.Metadata>
          <div>Yesterday at 12:30AM</div>
        </Comment.Metadata>
        <Comment.Text>
          <p>{this.props.review.content}</p>
        </Comment.Text>
        {/* <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions> */}
  </Comment.Content>
  </Comment>
        )
    }
}