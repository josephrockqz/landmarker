import React from 'react';

import NavBar from '../components/NavBar.js';

class Settings extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <NavBar />
                Settings
            </div>
        );
    }
}

export default Settings;