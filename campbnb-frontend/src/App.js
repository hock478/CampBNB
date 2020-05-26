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


class App extends React.Component {

  constructor(){
    super();
    this.state = {
      currentUser: JSON.parse(localStorage.user),
      properties: [],
      reservations: [],
      loggedIn: JSON.parse(localStorage.user) === null ? false : true
    
  
    }
  }

  componentDidMount(){

    this.setState({currentUser: JSON.parse(localStorage.user)})
  

  }

  createReservation = (reservationObj) => {
    console.log(reservationObj) 
  }

  createProperty = (propertyObj) => {
    console.log(propertyObj)
  }


  
  updateCurrentUser = (user) => {
    console.log(user)
    localStorage.user = JSON.stringify(user)
    
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
          <Navbar currentUser={this.state.currentUser} changeLog={this.changeLog} loggedIn={this.state.loggedIn}/>
        <Switch>
          
          <Route exact path="/" render={() => <PropertiesPage /> } />
          <Route exact path="/reservations" render={() =>  localStorage.user !== "null" ?  <ReservationsPage user={this.state.currentUser}/> : <Redirect to="/login"/> } />
          <Route exact path="/properties/:id" render= {(routerProps) => { 
            let id = routerProps.match.params.id
            
            let property = JSON.parse(localStorage.properties).find(p => p.id === parseInt(id))
    
            localStorage.property = JSON.stringify(property)
          return <PropertyDetails userId={localStorage.user} property={JSON.parse(localStorage.property)} createReservation={this.createReservation} />
          }  }/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/profile" render={() => localStorage.user !== "null" ? <Profile /> : <Redirect to="/login"/> } />

          <Route exact path="/login" render={() => localStorage.user !== "null" ? <Redirect to="/profile"/> : <Login updateCurrentUser={this.updateCurrentUser} changeLog={this.changeLog} /> }/>



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