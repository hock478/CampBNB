import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Navbar from './Navbar'
import PropertiesPage from './PropertiesPage'
import PropertyDetails from './PropertyDetails'
import ReservationsPage from './ReservationsPage'
import {Route, Switch, NavLink} from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import Login from './Login';
import About from './About'
import Profile from './Profile'
import Community from './Community'
import CommunityPage from './CommunityPage'
import CommunityDetails from './CommunityDetails'


class App extends React.Component {

  constructor(){
    super();
    this.state = {
      currentUser: null,   //JSON.parse(localStorage.user)
      properties: [],
      reservations: [],
      loggedIn: false
      // JSON.parse(localStorage.user) === null ? false : true
    
  
    }
  }

  componentDidMount(){

    // this.setState({currentUser: JSON.parse(localStorage.user)})

    if(localStorage.getItem("token") && localStorage.getItem("token") !== "null"){
      fetch("http://localhost:3000/decode_token", {
        headers: {
          "Authenticate": localStorage.token
        }
      })
      .then(res => res.json())
      .then(userData => {
        this.updateCurrentUser(userData)
        this.changeLog()
        //if error, don't update the state
      })
    }else{
      console.log("No token found, user is not authenticated")
    }


  

  }

 

  createProperty = (propertyObj) => {
    console.log(propertyObj)
  }


  
  updateCurrentUser = (user) => {
    console.log(user)
    // localStorage.user = JSON.stringify(user)
    
    this.setState({currentUser: user})
  }

  // onSelectProperty = (props) => {
  //   let propertyId = props.id
  //   let selectedProperty = this.state.properties.find(property => property.id === propertyId)
  //   this.setState({
  //     selectedProperty: selectedProperty 
  //   })
  //   return <Redirect push to={`/properties/${propertyId}`}/>
    
  // }
  changeLog = () => {
    this.setState({loggedIn: !this.state.loggedIn})
  }


  render() {
    
      return (
        
        <div className="App">
          
          <Header className="App-header" />
          <Navbar currentUser={this.state.currentUser} changeLog={this.changeLog} loggedIn={this.state.loggedIn} updateCurrentUser={this.updateCurrentUser}/>
        <Switch>
          
          <Route exact path="/" render={() => <PropertiesPage /> } />
          <Route exact path="/reservations" render={() =>  this.state.currentUser ? <ReservationsPage user={this.state.currentUser}/> : <Login updateCurrentUser={this.updateCurrentUser} changeLog={this.changeLog} /> } />
          <Route exact path="/properties/:id" render= {(routerProps) => { 
            let id = routerProps.match.params.id
           
            // need to change this so it doesn't rely on local storage but on state. 
            let property = JSON.parse(localStorage.properties).find(p => p.id === parseInt(id))
    
            localStorage.property = JSON.stringify(property)
          return <PropertyDetails user={this.state.currentUser} property={JSON.parse(localStorage.property)}  />
          }  }/>
          <Route exact path="/about" component={About}/>
        <Route exact path="/profile" render={() => this.state.currentUser ? <Profile /> : <Login updateCurrentUser={this.updateCurrentUser} changeLog={this.changeLog } /> } />
        <Route exact path="/community" render={() => <CommunityPage/>}/>
        <Route exact path="/communities/:id" render= {(routerProps) => {
      
          let id = routerProps.match.params.id
         return <CommunityDetails id={id} user={this.state.currentUser}/>

          

        }}/>
          {/* <Route exact path="/login" render={() => this.state.currentUser ? <Redirect to="/"/> : <Login updateCurrentUser={this.updateCurrentUser} changeLog={this.changeLog} /> }/> */}



          <Route render={() => <div>404 Not Found</div>}/>
        </Switch>

        
          {/* <h4>Available Properties</h4>
          <PropertiesPage properties={this.state.properties} />
          <h4>My Reservations</h4>
          <ReservationsPage reservations={this.state.reservations} /> */}
        </div>
      );
  }


}

export default App;