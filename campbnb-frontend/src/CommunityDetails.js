import React from 'react'
// import Community from './Community'
export default class CommunityDetails extends React.Component {
    constructor(){
        super()
        this.state = { 
            messages: []
        }
    }

    componentDidMount(){
        fetch(`http://localhost:3000/messages/${this.props.id}`)
        .then(resp => resp.json())
        .then(data => this.setState({messages: data}))
    }
    render(){

        return(
            <>
            {this.state.messages.map(mes => {
                  return <div className="container" key={mes.id}>
                  <p className="left">{mes.user.fullname}</p>
        <p>{mes.content}</p> 
        <span className="time-right">11:00</span>
      </div>
            })}
           
</>
        )
    }
}