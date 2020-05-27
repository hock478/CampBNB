import React from  'react';

class About extends React.Component {


    render(){
        return (
        <div className="about-page">

            <div className="ui grid">
                <div className="sixteen wide column" id="banner-image" >
                    <img className="header-image" src="https://news.airbnb.com/wp-content/uploads/sites/4/2016/10/about-us-header-2.jpg?w=2048" />
                </div>
            </div>

            <div className="ui grid">
                <div className="five wide column"></div>
                <div className="six wide column">
                    <h1>About</h1>
                    <p>"Airbnb is one of the world’s largest marketplaces for unique, authentic places to 
                        stay and things to do, offering over 7 million accommodations and 50,000 handcrafted activities, 
                        all powered by local hosts. An economic empowerment engine, Airbnb has helped millions of hospitality 
                        entrepreneurs monetize their spaces and their passions while keeping the financial benefits of 
                        tourism in their own communities. With more than three quarters of a billion guest arrivals to date, 
                        and accessible in 62 languages across 220+ countries and regions, Airbnb promotes people-to-people connection, 
                        community and trust around the world.
                    </p>

                </div>
                <div className="five wide column"></div>
            </div>


        </div> 

        )
    }
}

export default About