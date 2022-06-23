import React, { useContext } from "react";
import { UserContext } from "../index.js";

export default function LevelDisplay() {
    const [ state, ] = useContext(UserContext);

    const getLevel = () => {
        if (state.seriesIndex == -1) {
            return;
        } else {
            return "Level " + (state.seriesIndex + 1);
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