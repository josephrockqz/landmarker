import React from 'react';

import LevelSelect from '../components/LevelSelect.js';
import NavBar from '../components/NavBar.js';

class Home extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                
                <div className="top-of-page">
                    <p className="home-text">
                        Click on the globe where you think each prompted landmark is located. 
                        The closer you are, the better your score.
                    </p>
                </div>

                
                <LevelSelect />
            </div>
        );
    }
}

export default Home;