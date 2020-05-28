import React from  'react';

class About extends React.Component {


    render(){
        return (
        <div className="about-page">

            <div className="ui grid">
                <div className="sixteen wide column" id="banner-image" >
                    <img className="header-image" src={require('./layout/about-scenic.png')} />
                </div>
            </div>

            <div className="ui grid">
                <div className="five wide column"></div>
                <div className="six wide column">
                    <br />
                    <h1>About</h1>
                    <p>Lorem ipsum dolor sit amet, tritani pericula ei mei, pri scaevola oportere conceptam an. Lorem etiam dissentiunt vix eu, modus intellegebat cu quo. Ius ad fugit nostro feugiat, et ius convenire liberavisse, tempor copiosae cum ex. Vis et prompta adipiscing. Ius ut hinc eruditi tacimates.
                        </p>
                        <p>
Reque partiendo no duo. At duo dicta officiis salutandi, salutatus tincidunt adversarium ex his. Veri omnis repudiandae an per. Ius tale aliquam ei. Pri euismod inermis signiferumque in, in primis iriure vix, ius an solet decore aliquam. Ea quaerendum referrentur qui.
                    </p>

                </div>
                <div className="five wide column"></div>
            </div>


        </div> 

        )
    }
}

export default About