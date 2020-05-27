import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment, Icon } from 'semantic-ui-react'

export default class Login extends React.Component{


    state = {
        username: "",
        password: ""
      };

    
      handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
      };
    
      //When form is submitted, make a fetch to "log in the user"
      handleLoginSubmit = (e) => {
          e.preventDefault()
        console.log("attempting to log in")
        fetch("http://localhost:3000/login", {
          method:"POST",
          headers: {
            "Content-Type" : "application/json",
          },
          body: JSON.stringify({
            username: this.state.username,
            password: this.state.password
          })
        }).then(res => res.json())
        .then(userData => {
          console.log("response from the server", userData)
          if(userData.error_message){
            alert(userData.error_message)
          }else{
            localStorage.setItem("token", userData.token)
            this.props.updateCurrentUser(userData.user_data)
            this.props.changeLog()
          }
        })
      };


    render(){
        return (
          <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
            <Icon name='bed' /> Log-in to your account
            </Header>

            <Form className="ui form" onSubmit={this.handleLoginSubmit} size='large'>
              <Segment stacked>
            
           
              <Form.Input fluid icon='user' iconPosition='left' name="username" placeholder='E-mail address' value={this.state.username} onChange={this.handleChange} />
              <Form.Input
                    fluid
                    icon='lock'
                    iconPosition='left'
                    placeholder='Password'
                    type='password'
                    name="password"
                    value={this.state.password} onChange={this.handleChange}
                  />
                    <Button color='teal' fluid size='large' type="submit">
                       Login
                    </Button>
              </Segment> 
            </Form>

            <Message>
               New to us? <a href='#'>Sign Up</a>
            </Message>

          </Grid.Column>
      </Grid> 

        )
    }
}