import React from  'react';
import { withRouter } from 'react-router-dom';

class Navbar extends React.Component {
    constructor(){
        super()
        this.state = {
            active: "/"
        }
    
    }

    componentDidMount(){
       let a = this.state.active
       
       if (a === "/"){
        document.getElementById(a).className = "active item"
       }else{
        document.getElementById(a.split("/")[1]).className = "active item"
       }
       
    //    document.getElementById(a).className = "active item"

    }
    makeActive = (event) => {
    
        document.getElementById(this.state.active).className = "item"
        event.target.className = 'active item'
        this.setState({active: event.target.id})
        this.props.history.location.pathname = "/"
        this.props.history.push(`${event.target.id}`)
        
        
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
  <a className="item" onClick={this.makeActive} id="friends">
    Friends
  </a>
  <a className="item" onClick={this.makeActive} id="about">
    About
  </a>
  <div className="right menu">
    <a className="ui item">
      Logout
    </a>
  </div>
</div>
<div className="ui segment">
  <p></p>
</div>
        </div>)
    }
}

 export default withRouter(Navbar);