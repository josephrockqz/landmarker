import React, { useContext } from 'react';
import GlobeStart from '../components/GlobeStart.js';
import LanguageDropdown from '../components/LanguageDropdown.js';
import NavBar from '../components/NavBar.js';

import BootstrapSwitchButton from 'bootstrap-switch-button-react';

import { UserContext } from "../index.js";

export default function Settings() {
    const [ state, dispatch ] = useContext(UserContext);
    
    return (
        <div>
            <NavBar />

            <div className="top-of-page">

                <div className="settings-row">
                    <span>
                        Language
                    </span>
                    <span>
                        <LanguageDropdown />
                    </span>
                </div>

                <div className="settings-row">
                    <span>
                        Borders
                    </span>
                    <span>
                        <BootstrapSwitchButton
                            checked={state.bordersBool}
                            onlabel="On"
                            offlabel="Off"
                            offstyle="secondary"
                            onChange={() => {
                                dispatch({ type: "update_borders" })
                            }}
                            width="98"
                        />
                    </span>
                </div>

                <div className="settings-row">
                    <span>
                        Theme
                    </span>
                    <span>
                        <BootstrapSwitchButton
                            checked={state.darkModeBool}
                            onlabel="Dark"
                            offlabel="Light"
                            offstyle="secondary"
                            onChange={() => {
                                dispatch({ type: "update_theme" })
                            }}
                            width="98"
                        />
                    </span>
                </div>

                <div className="settings-row">
                    <span>
                        Units
                    </span>
                    <span>
                        <BootstrapSwitchButton
                            checked={state.metricSystemBool}
                            onlabel="Metric"
                            offlabel="Imperial"
                            offstyle="secondary"
                            onChange={() => {
                                dispatch({ type: "update_units" })
                            }}
                            width="98"
                        />
                    </span>
                </div>

            </div>

            <GlobeStart />

        </div>
    );
};
