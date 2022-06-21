import React from 'react';

import NavBar from '../components/NavBar.js';

export default function PageNotFound() {
    return (
        <div>
            <NavBar />
            Uh Oh ... looks like this page does not exist
            Check the url path :/
        </div>
    );
};