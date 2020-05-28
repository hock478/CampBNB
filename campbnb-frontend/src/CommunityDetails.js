import React from 'react'
import 'semantic-ui-css/semantic.min.css'
// import Community from './Community'
export default class CommunityDetails extends React.Component {
    constructor(){
        super()
        this.state = { 
            messages: [],
            input: ""
        }
    }

    componentDidMount(){
        // fetch(`http://localhost:3000/messages/${this.props.id}`)
        // .then(resp => resp.json())
        // .then(data => this.setState({messages: data}))

        this.getMachineAction()

        
    }

    getMachineAction = async () => {
        try {
            const response = await fetch( `http://localhost:3000/messages/${this.props.id}`);
            if (response.status === 200) {
                console.log("Machine successfully found.");
                const myJson = await response.json(); //extract JSON from the http response
                this.setState({messages: myJson})
                console.log(myJson);               
            } else {
                console.log("not a 200");
            }
        } catch (err) {
            // catches errors both in fetch and response.json
            console.log(err);
        } finally {
            // do it again in 2 seconds
            setTimeout(this.getMachineAction , 2000);
        }
    };
    

    handleClick = (event) => {
        fetch("http://localhost:3000/messages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user_id: this.props.user.id,
                community_id: this.props.id,
                content: this.state.input
            })
        })
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
         <div class="ui action input">
        <input type="text" placeholder="Send a message..." value={this.state.input} onChange={(event) => this.setState({input: event.target.value})}/>
        <button class="ui button" onClick={this.handleClick}>Send</button>
        </div>

           
</>
        )
    }
}