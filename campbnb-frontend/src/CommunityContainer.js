import React from 'react'
import Community from './Community'
import { Card } from 'semantic-ui-react'

export default class CommunityContainer extends React.Component {

    componentDidMount(){
        console.log("cool")
    }
    render(){

        return(
            // <Card.Group className="ui link cards" itemsPerRow ={5}> <Card.Group/>
            // {this.props.communities.map(com => <Community community={com} key={com.id}/> )}

            <Card.Group className="ui link cards" itemsPerRow ={5} > 
            {this.props.communities.map(com => <Community community={com} key={com.id}/> )}
            </Card.Group>
       
        )
    }
}