import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../index.js";

export default function GlobeStart() {
    const [ state, ] = useContext(UserContext);
    let navigate = useNavigate();

    const toggleGlobeStart = () => {
        if (state.landmarkIndex > 0) {
            switch (state.language) {
                case "English":
                    return "Click the globe to play!";
                case "Spanish":
                    return "¡Haz clic en el globo para jugar!";
                case "Italian":
                    return "Fare clic sul globo per giocare!";
                case "Russian":
                    return "Нажмите на глобус, чтобы играть!";
                default:
                    return "Click the globe to play!";
            }
        } else {
            return ""
        }
    };

    const toggleMain = () => {
        if (state.landmarkIndex > 0) {
            return (
                <div style={{textAlign: 'center'}}>
                    <img
                        src="https://cdn.pixabay.com/photo/2013/07/12/19/03/earth-154279_1280.png"
                        alt="Globe"
                        height="200"
                        width="200"
                        onClick={() => { navigate("/game"); }}
                        style={{cursor: "pointer"}}
                    >
                    </img>
                    <p style={{paddingTop: "20px", color: '#ffb06a'}}>
                        {toggleGlobeStart()}
                    </p>
                </div>
            );
        } else {
            return (
                <div style={{textAlign: 'center'}}>
                    <img
                        src="https://cdn.pixabay.com/photo/2013/07/12/19/03/earth-154279_1280.png"
                        alt="Globe"
                        height="200"
                        width="200"
                    >
                    </img>
                    <p style={{paddingTop: "20px"}}>
                        {toggleGlobeStart()}
                    </p>
                </div>
            );
        }
    };

    return (
        toggleMain()
    );
}