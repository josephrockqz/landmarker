import React, { useNavigate } from 'react';

export default function GlobeStart() {
    return (
        <div style={{textAlign: 'center'}}>
            <img
                src="https://freesvg.org/img/earth-globe-dan-gerhrad-05r.png"
                alt="Globe"
                height="200"
                width="200"
            >
            </img>
            <p style={{paddingTop: "20px"}}>
                Click the globe to play!
            </p>
        </div>
    );
}