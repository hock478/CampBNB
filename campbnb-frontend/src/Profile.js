import React from  'react';

class Profile extends React.Component {


    render(){
        return (
            <>
        <h1>Your Info</h1>
        <div className="ui centered card">
            <div className="image">
                <img src="https://www.pngitem.com/pimgs/m/144-1447082_class-group-chat-group-chat-icon-white-png.png" />
            </div>
            <div className="content">
                <a className="header" >
                        {this.props.user.fullname}
                </a>
                <div className="meta">
                    @{this.props.user.username}
                </div>
                <div className="description">
                     {this.props.user.bio}
                   
                </div>
             </div>      
        </div>
        </>
            )
    }
}

export default Profile