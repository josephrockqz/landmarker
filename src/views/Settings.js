import React from 'react';

import NavBar from '../components/NavBar.js';

export default function Settings() {
    return (
        <div>
            <NavBar />

            <div className="top-of-page">

                <div className="settings-row">
                    <span>
                        Language
                    </span>
                    <span>
                        hello
                    </span>
                </div>

                <div className="settings-row">
                    <span>
                        Borders
                    </span>
                    <span>
                        hello
                    </span>
                </div>

                <div className="settings-row">
                    <span>
                        Theme
                    </span>
                    <span>
                        hello
                    </span>
                </div>

                <div className="settings-row">
                    <span>
                        Metric System
                    </span>
                    <span>
                        hello
                    </span>
                </div>

            </div>
        </div>
    );
};
