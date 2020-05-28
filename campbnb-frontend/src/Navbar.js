import React from  'react';
import { withRouter,Redirect } from 'react-router-dom';


class Navbar extends React.Component {
    constructor(){
        super()
        this.state = {
            active: "/",
            
        }
    
    }

    componentDidMount(){
       let a = this.state.active
       let b = this.props.history.location.pathname
        if(b.split("/")[1] === "communities"){
          this.setState({active: "community"})
          document.getElementById("community").className = "active item"
        }else{
          if (b.split("/")[0] === b.split("/")[1] || b.split("/").length > 2){
            document.getElementById("/").className = "active item"
            this.setState({active: "/"})
           }else{
            this.logicalFunction()
           }
        }
      //  if (b.split("/")[0] === b.split("/")[1] || b.split("/").length > 2){
      //   document.getElementById("/").className = "active item"
      //   this.setState({active: "/"})
      //  }else{
      //   this.logicalFunction()
      //  }
       
    //    document.getElementById(a).className = "active item"
    }

    logicalFunction = () => {
      let b = this.props.history.location.pathname
      if(b.split("/")[1] === "login"){
        document.getElementById(this.state.active).className = "active item"
        this.setState({active: this.state.active})
      }else if(b.split("/").length > 2){
        if(b.split("/")[1] === "communities"){
          this.setState({active: "community"})
        }else{
          this.setState({active: "/"})

        }
      }else{
        document.getElementById(b.split("/")[1]).className = "active item"
        this.setState({active: b.split("/")[1]})
      }
    }

    makeActive = (event) => {
       
       
        document.getElementById(this.state.active).className = "item"
        event.target.className = 'active item'
        this.setState({active: event.target.id})
        this.props.history.location.pathname = "/"
        this.props.history.push(`${event.target.id}`)
        
        
    }

    logged = (event) => {
      if(event.target.innerText === "Log In"){
        this.props.history.location.pathname = "/"
        this.props.history.push("profile")
      }else{
        localStorage.clear()
        this.props.updateCurrentUser(null)
        this.props.changeLog()
        this.props.history.location.pathname = "/"

        // this.setState({active: "/"})
        
      }
    }
   
  
    render(){
        

        return (<div>
            <div className="ui secondary pointing menu">
  <a className="item" onClick={this.makeActive}id="/">
    Home
  </a>
  <a className="item" onClick={this.makeActive} id="reservations">
    Reservations
  </a>
  <a className="item" onClick={this.makeActive} id="community">
    Community
  </a>
  <a className="item" onClick={this.makeActive} id="about">
    About
  </a>
  <a className="item" onClick={this.makeActive} id="profile">
    Profile
  </a>
  <div className="right menu">
    <a className="ui item" onClick={(event) =>  {this.logged(event)}}>
        {this.props.loggedIn === false ? "Log In": "Log Out"}
    </a>
  </div>
</div>
        </div>)
    }
}

 export default withRouter(Navbar);