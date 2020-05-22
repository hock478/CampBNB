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
    fetch("http://localhost:3000/properties")
    .then(resp => resp.json())
    .then(data => this.setState({ properties: data }))

    fetch(`http://localhost:3000/reservations/${this.state.currentUser}`)
    .then(resp => resp.json())
    .then(resos => this.setState({ reservations: resos }))

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
          <Route exact path="/" render={() => <PropertiesPage properties={this.state.properties} /> } />
          <Route exact path="/reservations" render={() =><ReservationsPage reservations={this.state.reservations} />} />
          <Route exact path="/properties/:id" render= {(routerProps) => { 
            let id = routerProps.match.params.id
            let property = this.state.properties.find(p => p.id == id)
          return <PropertyDetails userId={this.state.currentUser.id} property={property} />
          }  }/>

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
