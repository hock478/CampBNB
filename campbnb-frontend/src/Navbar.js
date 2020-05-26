import React from  'react';
import { withRouter,Redirect } from 'react-router-dom';


class Navbar extends React.Component {
    constructor(){
        super()
        this.state = {
            active: "/"
            
        }
    
    }

    componentDidMount(){
       let a = this.state.active
       let b = this.props.history.location.pathname
       
       if (b.split("/")[0] === b.split("/")[1]){
        document.getElementById("/").className = "active item"
        this.setState({active: "/"})
       }else{
        this.logicalFunction()
       }
       
    //    document.getElementById(a).className = "active item"
    }

    logicalFunction = () => {
      let b = this.props.history.location.pathname
      if(b.split("/")[1] === "login"){
        document.getElementById(this.state.active).className = "active item"
        this.setState({active: this.state.active})
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
    <a className="ui item" onClick={() => {localStorage.user = null; return <Redirect to="/about"/>}}>
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