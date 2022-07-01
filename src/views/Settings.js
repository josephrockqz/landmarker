import React, { useContext } from 'react';
import GlobeStart from '../components/GlobeStart.js';
import LanguageDropdown from '../components/LanguageDropdown.js';
import NavBar from '../components/NavBar.js';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import { UserContext } from "../index.js";

export default function Settings() {
    const [ state, dispatch ] = useContext(UserContext);

    const borders = () => {
        if (state.bordersBool) {
            return (
                <div className="top-of-page" style={{color: "red", paddingBottom: "20px"}}>
                    {toggleBordersUpdate()}
                </div>
            );
        } else {
            return;
        }
        
    };

    const toggleLanguage = () => {
        switch (state.language) {
            case "English":
                return "Language";
            case "Spanish":
                return "Idioma";
            case "Italian":
                return "Linguaggio";
            case "Russian":
                return "язык";
            default:
                return "Language";
        }
    };

    const toggleBorders = () => {
        switch (state.language) {
            case "English":
                return "Borders";
            case "Spanish":
                return "Fronteras";
            case "Italian":
                return "Frontiere";
            case "Russian":
                return "Границы";
            default:
                return "Borders";
        }
    };

    const toggleBordersUpdate = () => {
        switch (state.language) {
            case "English":
                return "Borders mode coming soon!";
            case "Spanish":
                return "¡El modo Fronteras llegará pronto!";
            case "Italian":
                return "Presto la modalità Confini!";
            case "Russian":
                return "Режим границ скоро появится!";
            default:
                return "Borders mode coming soon!";
        }
    };

    const toggleTheme = () => {
        switch (state.language) {
            case "English":
                return "Theme";
            case "Spanish":
                return "Tema";
            case "Italian":
                return "Tema";
            case "Russian":
                return "Тема";
            default:
                return "Theme";
        }
    };

    const toggleUnits = () => {
        switch (state.language) {
            case "English":
                return "Units";
            case "Spanish":
                return "Unidades";
            case "Italian":
                return "Unità";
            case "Russian":
                return "Единицы";
            default:
                return "Units";
        }
    };
    
    return (
        <div>
            <NavBar />

            <div className="top-of-page">

                <div className="settings-row">
                    <span>
                        {toggleLanguage()}
                    </span>
                    <span>
                        <LanguageDropdown />
                    </span>
                </div>

                <div className="settings-row">
                    <span>
                        {toggleBorders()}
                    </span>
                    <span>
                        <BootstrapSwitchButton
                            checked={state.bordersBool}
                            onlabel="❌"
                            offlabel="✅"
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
                        {toggleTheme()}
                    </span>
                    <span>
                        <BootstrapSwitchButton
                            checked={state.darkModeBool}
                            onlabel="🌚"
                            offlabel=" 🌝"
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
                        {toggleUnits()}
                    </span>
                    <span>
                        <BootstrapSwitchButton
                            checked={state.metricSystemBool}
                            onlabel="🇬🇧"
                            offlabel="🇺🇸"
                            offstyle="secondary"
                            onChange={() => {
                                dispatch({ type: "update_units" })
                            }}
                            width="98"
                        />
                    </span>
                </div>

            </div>

            {borders()}

            <GlobeStart />

        </div>
    );
};
