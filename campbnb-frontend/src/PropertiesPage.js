import React from  'react';
import PropertiesContainer from './PropertiesContainer'

class PropertiesPage extends React.Component {


    constructor(){
        super()
        this.state = {
            properties: []
        }
    }
    componentDidMount(){

        fetch("http://localhost:3000/properties")
    .then(resp => resp.json())
    .then(data => { 
    localStorage.properties = JSON.stringify(data)
    this.setState({ properties: JSON.parse(localStorage.properties) })
  })

    }

    render(){
        return (
            
            <div className="properties-container">
            <h1>Explore Properties</h1>
            <PropertiesContainer properties={this.state.properties} />
            </div>
        )
    }
}

export default PropertiesPage