import React from 'react';

import NavBar from '../components/NavBar.js';

export default function PageNotFound() {
    return (
        <div>
            <NavBar />
            
            <div className="top-of-page">
                <p style={{fontSize: "120px"}}>
                    404
                </p>
                <p style={{fontSize: "22px"}}>
                    Page not found
                </p>
            </div>

            <div className="top-of-page">
                Looks like this page does not exist. Check the url path
            </div>
            
        </div>
    );
};