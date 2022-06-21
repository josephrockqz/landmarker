import React from 'react';
import Globe from 'react-globe.gl';

import LevelSelect from '../components/LevelSelect.js';
import NavBar from '../components/NavBar.js';

import { DiGithubBadge } from "react-icons/di";
import { BiCopyright } from "react-icons/bi";

export default function Home() {
    const handleGlobeClick = () => {

    }

    const linkGithub = () => {
        console.log("hello");
        window.open('https://github.com/josephrockqz/landmarker', '_blank');
    };

    return (
        <div>
            <NavBar />
                
            <div className="top-of-page">
                <p className="home-text">
                    Click on the globe where you think each prompted landmark is located. 
                    The closer you are, the better your score. Choose one of the 5 levels.
                </p>
            </div>

            <LevelSelect />

            <div className="top-of-page">
                <p className="home-text">
                    Landmarker uses the Haversine formula to calculate the spherical distance 
                    between points on the globe.
                </p>
            </div>

            <div style={{textAlign: 'center'}}>
                <img
                    src="https://freesvg.org/img/earth-globe-dan-gerhrad-05r.png"
                    alt="Globe"
                    height="200"
                    width="200"
                >
                </img>
            </div>

            <div className="top-of-page">
                <p className="home-text">
                    Note: personal stats will not be saved if local storage is disabled.
                </p>
            </div>

            <div className="footer-div">
                <span className="footer-span">
                    Creator: Joseph Rock
                    <DiGithubBadge
                        color="black" 
                        size="20px" 
                        style={{cursor: 'pointer'}} 
                        onClick={() => linkGithub()}
                    />
                </span>
                <span className="footer-span">
                    <BiCopyright />
                    2022
                </span>
            </div>
        </div>
    );
};
