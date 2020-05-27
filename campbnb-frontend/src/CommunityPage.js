import React from 'react'
import CommunityContainer from './CommunityContainer'
export default class CommunityPage extends React.Component {
    constructor(){
        super()
        this.state = {
            communities: []

        }
    }
    componentDidMount(){
        console.log("cool")
        fetch("http://localhost:3000/communities")
        .then(res => res.json())
        .then(data => {
            this.setState({communities: data})
            // localStorage.communities = JSON.stringify(data)
        })
    }

    render(){
        return (
            <>
        <h1>Community</h1>
        <CommunityContainer communities={this.state.communities}/>
            </>
        )
    }
}