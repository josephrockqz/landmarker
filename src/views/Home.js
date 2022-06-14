import React from 'react';

import NavBar from '../components/NavBar.js';

class Home extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                
                <div className="top-of-page">
                    <h2 className="header">
                        Instructions
                    </h2>
                    <p className="home-text">
                        The world is full of landmarks from many time periods. How good are you at identifying where these
                        landmarks are on the globe? Click on the globe where you think each prompted landmark is located. 
                        The closer you are, the better your score.
                    </p>
                </div>
            </div>
        );
    }
}

export default Home;