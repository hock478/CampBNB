import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Navbar from './Navbar'
import PropertiesPage from './PropertiesPage'
import PropertyDetails from './PropertyDetails'
import ReservationsPage from './ReservationsPage'
import {Route, Switch} from 'react-router-dom'
import { Redirect } from 'react-router-dom'


class App extends React.Component {

  constructor(){
    super();
    this.state = {
      currentUser: 2,
      properties: [],
      reservations: []
    }
  }

  componentDidMount(){

    localStorage.user = this.state.currentUser

  }

  createReservation = (reservationObj) => {
    console.log(reservationObj) 

  }

  createProperty = (propertyObj) => {
    console.log(propertyObj)
  }


  // onSelectProperty = (props) => {
  //   let propertyId = props.id
  //   let selectedProperty = this.state.properties.find(property => property.id === propertyId)
  //   this.setState({
  //     selectedProperty: selectedProperty 
  //   })
  //   return <Redirect push to={`/properties/${propertyId}`}/>
    
  // }


  render() {
    
      return (
        
        <div className="App">
          
          <Header className="App-header" />
          <Navbar />
        <Switch>
          <Route exact path="/" render={() => <PropertiesPage /> } />
          <Route exact path="/reservations" render={() =><ReservationsPage />} />
          <Route exact path="/properties/:id" render= {(routerProps) => { 
            let id = routerProps.match.params.id
            let property = JSON.parse(localStorage.properties).find(p => p.id === parseInt(id))
    
            localStorage.property = JSON.stringify(property)
          return <PropertyDetails userId={localStorage.user} property={JSON.parse(localStorage.property)} createReservation={this.createReservation} />
          }  }/>
          <Route exact path="/messages" render={() => <h2>Messages Page</h2> } />
          <Route exact path="/about" render={() => <h2>About Page</h2> } />



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
