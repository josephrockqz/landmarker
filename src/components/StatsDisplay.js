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
            switch (state.language) {
                case "English":
                    return "Note: statistics are kept using local storage";
                case "Spanish":
                    return "Nota: las estadísticas se mantienen utilizando el almacenamiento local";
                case "Italian":
                    return "Nota: le statistiche vengono conservate utilizzando l'archiviazione locale";
                case "Russian":
                    return "Примечание: статистика хранится в локальном хранилище";
                default:
                    return "Note: statistics are kept using local storage";
            }
        } catch (e) {
            switch (state.language) {
                case "English":
                    return "Enable local storage in order to keep track of your statistics";
                case "Spanish":
                    return "Habilite el almacenamiento local para realizar un seguimiento de sus estadísticas";
                case "Italian":
                    return "Abilita l'archiviazione locale per tenere traccia delle tue statistiche";
                case "Russian":
                    return "Включите локальное хранилище, чтобы отслеживать свою статистику";
                default:
                    return "Enable local storage in order to keep track of your statistics";
            }
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
                return displayDistance(average);
            }
        } catch (e) {
            console.log(e);
            console.log("local storage needs to be enabled in order for statistics to be tracked");
        }
    };

    const displayDistance = (average) => {
        switch (state.language) {
            case "English":
                return (!state.metricSystemBool ? Math.round(average * 0.6213711922) + ' miles' : average + ' km');
            case "Spanish":
                return (!state.metricSystemBool ? Math.round(average * 0.6213711922) + ' millas' : average + ' km');
            case "Italian":
                return (!state.metricSystemBool ? Math.round(average * 0.6213711922) + ' miglia' : average + ' km');
            case "Russian":
                return (!state.metricSystemBool ? Math.round(average * 0.6213711922) + ' мили' : average + ' km');
            default:
                return (!state.metricSystemBool ? Math.round(average * 0.6213711922) + ' miles' : average + ' км');
        }
    };

    const displayLevelBest = (index) => {
        try {
            const score = localStorage.getItem(index);
            if (score == null || score === -1) {
                return "N/A";
            } else {
                return displayDistance(score);
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

    const toggleAverageDistance = () => {
        switch (state.language) {
            case "English":
                return "Average Distance:";
            case "Spanish":
                return "Distancia promedio:";
            case "Italian":
                return "Distanza media:";
            case "Russian":
                return "Среднее расстояние:";
            default:
                return "Average Distance:";
        }
    };

    const toggleLevelBest = (level) => {
        switch (state.language) {
            case "English":
                return "Level " + level + " Best:";
            case "Spanish":
                return "Mejor Nivel " + level + ":";
            case "Italian":
                return "Livello " + level + " Migliore:";
            case "Russian":
                return "Уровень " + level + " Лучший:";
            default:
                return "Level " + level + " Best:";
        }
    };

    const toggleResetStats = () => {
        switch (state.language) {
            case "English":
                return "Reset Stats";
            case "Spanish":
                return "Restablecer estadísticas";
            case "Italian":
                return "Ripristina statistiche";
            case "Russian":
                return "Сбросить статистику";
            default:
                return "Reset Stats";
        }
    };

    return (
        <div>
            <div className="stats-row">
                <span>
                    {toggleAverageDistance()}
                </span>
                <span>
                    {displayAverageGuess()}
                </span>
            </div>
            <div className="stats-row">
                <span>
                    {toggleLevelBest(1)}
                </span>
                <span>
                    {displayLevelBest(0)}
                </span>
            </div>
            <div className="stats-row">
                <span>
                    {toggleLevelBest(2)}
                </span>
                <span>
                    {displayLevelBest(1)}
                </span>
            </div>
            <div className="stats-row">
                <span>
                    {toggleLevelBest(3)}
                </span>
                <span>
                    {displayLevelBest(2)}
                </span>
            </div>
            <div className="stats-row">
                <span>
                    {toggleLevelBest(4)}
                </span>
                <span>
                    {displayLevelBest(3)}
                </span>
            </div>
            <div className="stats-row">
                <span>
                    {toggleLevelBest(5)}
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
                        {toggleResetStats()}
                </Button>
            </div>
            <div style={{paddingTop: "20px", textAlign: 'center'}}>
                <p>{checkLocalStorageAvailability()}</p>
            </div>

        </div>
    );
};