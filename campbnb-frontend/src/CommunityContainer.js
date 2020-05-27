import React from 'react'
import Community from './Community'
export default class CommunityContainer extends React.Component {

    componentDidMount(){
        console.log("cool")
    }
    render(){

        return(
            <div id="com-container">

                {this.props.communities.map(com => <Community community={com} key={com.id}/> )}

            </div>
        )
    }
}