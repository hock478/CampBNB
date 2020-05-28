import React from 'react'
import CommunityContainer from './CommunityContainer'
export default class CommunityPage extends React.Component {
    constructor(){
        super()
        this.state = {
            communities: [],
            input: ""

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

    handleInput = (event) => {
        this.setState({input: event.target.value})
    }

    handleForm = (event) => {
        let user = this.props.user
        let input = this.state.input
        
        fetch("http://localhost:3000/communities", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                topic: input,
                user_id: user.id
            })
        }).then(res => res.json())
        .then(data => this.setState({communities: [data, ...this.state.communities]}))
    }

    render(){
        return (
            <>
        <h1>Community Groups</h1>
        <br />
        <div className="ui center aligned grid">
        <div className="ui form">
        <div className="fields">
        <div className="field">
        <h4>Create a Community</h4>
      <label>Topic: </label>
      <input type="text" placeholder="Choose a topic..." value={this.state.input} onChange={this.handleInput}/>
        <br />
        <br />
      <div className="ui button" tabIndex="0" onClick={this.handleForm}>Create Community</div>
    </div>
    </div>
    </div>
    </div>
     <br />
     <br />
    <h3 className="ui dividing header">Explore Communities</h3>
    <br />

        <CommunityContainer communities={this.state.communities}/>
        <br />
        <br />
        <br />
        <br />
            </>
        )
    }
}