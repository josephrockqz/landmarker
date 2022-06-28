import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { UserContext } from "../index.js";

export default function StatsDisplay() {
    const [ state, ] = useContext(UserContext);
    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);

    const checkLocalStorageAvailability = () => {
        var test = 'test';
        try {
            localStorage.setItem(test, test);
            localStorage.removeItem(test);
            return "Note: statistics are kept using local storage";
        } catch (e) {
            return "Enable local storage in order to keep track of your statistics";
        }
    };

    const displayAverageGuess = () => {
        try {
            const total_distance = localStorage.getItem("total_distance_guessed");
            if (total_distance == null || total_distance === 0) {
                return "N/A";
            } else {
                const total_guesses = localStorage.getItem("num_landmarks_guessed");
                const average = Math.round(total_distance / total_guesses);
                return (!state.metricSystemBool ? Math.round(average * 0.6213711922) + ' miles' : average + ' km');
            }
        } catch (e) {
            console.log(e);
            console.log("local storage needs to be enabled in order for statistics to be tracked");
        }
    };

    const displayLevelBest = (index) => {
        try {
            const score = localStorage.getItem(index);
            if (score == null || score === -1) {
                return "N/A";
            } else {
                return (!state.metricSystemBool ? Math.round(score * 0.6213711922) + ' miles' : score + ' km');
            }
        } catch (e) {
            console.log(e);
            console.log("local storage needs to be enabled in order for statistics to be tracked");
        }
    };

    const resetStats = () => {
        localStorage.clear();
        forceUpdate();
    };

    return (
        <div>
            <div className="stats-row">
                <span>
                    Average Distance
                </span>
                <span>
                    {displayAverageGuess()}
                </span>
            </div>
            <div className="stats-row">
                <span>
                    Level 1 Best
                </span>
                <span>
                    {displayLevelBest(0)}
                </span>
            </div>
            <div className="stats-row">
                <span>
                    Level 2 Best
                </span>
                <span>
                    {displayLevelBest(1)}
                </span>
            </div>
            <div className="stats-row">
                <span>
                    Level 3 Best
                </span>
                <span>
                    {displayLevelBest(2)}
                </span>
            </div>
            <div className="stats-row">
                <span>
                    Level 4 Best
                </span>
                <span>
                    {displayLevelBest(3)}
                </span>
            </div>
            <div className="stats-row">
                <span>
                    Level 5 Best
                </span>
                <span>
                    {displayLevelBest(4)}
                </span>
            </div>
            <div style={{textAlign: 'center', margin: 'auto'}}>
                <Button
                    variant="danger"
                    onClick={() => {resetStats()}}
                >
                        Reset Stats
                </Button>
            </div>
            <div style={{paddingTop: "20px", textAlign: 'center'}}>
                <p>{checkLocalStorageAvailability()}</p>
            </div>

        </div>
    );
};