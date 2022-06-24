import React from "react";
import { Button } from "react-bootstrap";

export default function StatsDisplay() {
    const displayAverageGuess = () => {
        const total_distance = localStorage.getItem("total_distance_guesssed");
        if (total_distance == null) {
            return "N/A";
        } else {
            const total_guesses = localStorage.getItem("num_landmarks_guessed");
            return (total_distance / total_guesses);
        }
    };

    const resetStats = () => {
        console.log("reset stats");
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
                    40 km
                </span>
            </div>
            <div className="stats-row">
                <span>
                    Level 2 Best
                </span>
                <span>
                    40 km
                </span>
            </div>
            <div className="stats-row">
                <span>
                    Level 3 Best
                </span>
                <span>
                    40 km
                </span>
            </div>
            <div className="stats-row">
                <span>
                    Level 4 Best
                </span>
                <span>
                    40 km
                </span>
            </div>
            <div className="stats-row">
                <span>
                    Level 5 Best
                </span>
                <span>
                    40 km
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
            
        </div>
    );
};