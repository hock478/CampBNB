import React from 'react'
import { Button, Comment, Form, Header, Rating } from 'semantic-ui-react'

export default class Review extends React.Component {
    render(){
        return(
            
              //      <Comment>
              //   <Comment.Avatar src={this.props.content.image_url} />
              //     <Comment.Content>
              //         <Comment.Author as='a'>{this.props.content.fullname}</Comment.Author>
              //         <Comment.Metadata>
              //           <div>Yesterday at 12:30AM</div>
              //         </Comment.Metadata>
              //         <Comment.Text>

              //           <Rating icon='star' defaultRating={3} maxRating={4} />

              //           <p>{this.props.review.content}</p>
              //         </Comment.Text>
              //         {/* <Comment.Actions>
              //           <Comment.Action>Reply</Comment.Action>
              //         </Comment.Actions> */}
              //   </Comment.Content>
              // </Comment>


              
              <div className="comment">
                <a className="avatar">
                  <img src={this.props.content.image_url} />
                </a>
              

                <div className="content">
                  <a className="author">{this.props.content.fullname}</a>

                    <div className="metadata">
                      <span className="date">Yesterday at 12:30AM</span>
                    </div>
                    <div className="text">

                      <Rating icon='star' defaultRating={3} maxRating={4} />

                      <p>{this.props.review.content}</p>
                      <br />
                    </div>
  
              </div>
              </div>










        )
    }
}