import React from 'react'

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
            this.props.updateCurrentUser(userData)
          }
        })
      };


    render(){
        return <form className="ui form" onSubmit={this.handleLoginSubmit}>
          <label>Username</label>
          <input type="text" name="username" placeholder="First Name" value={this.state.username} onChange={this.handleChange}/>
          <label>Password</label>
          <input type="password" name="password" placeholder="Last Name" value={this.state.password} onChange={this.handleChange}/>
        <button className="ui button" type="submit">Submit</button>
      </form>
    }
}