import React, { useContext } from "react";
import { UserContext } from "../index.js";

export default function LevelDisplay() {
    const [ state, ] = useContext(UserContext);

    const getLevel = () => {
        if (state.seriesIndex === -1) {
            return;
        } else {
            switch (state.language) {
                case "English":
                    return "Level " + (state.seriesIndex + 1);
                case "Spanish":
                    return "Nivel " + (state.seriesIndex + 1);
                case "Italian":
                    return "Livello " + (state.seriesIndex + 1);
                case "Russian":
                    return "Уровень " + (state.seriesIndex + 1);
                default:
                    return "Level " + (state.seriesIndex + 1);
            }
        }
    };

    return (
        <div className="top-of-page">
            <p style={{fontSize: "24px", margin: 0}}>
                {getLevel()}
            </p>
        </div>
    );
};