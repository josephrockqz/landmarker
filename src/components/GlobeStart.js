import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function GlobeStart() {
    let navigate = useNavigate();

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
            <p style={{paddingTop: "20px"}}>
                Click the globe to play!
            </p>
        </div>
    );
}