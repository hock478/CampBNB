import React from  'react';
import PropertiesContainer from './PropertiesContainer'

class PropertiesPage extends React.Component {


    render(){
        return (
            
            <div className="properties-container">
            <h1>Explore Properties</h1>
            <PropertiesContainer properties={this.props.properties} />
            </div>
        )
    }
}

export default PropertiesPage