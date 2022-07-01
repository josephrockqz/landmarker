import React, { useContext } from "react";
import { UserContext } from "../index.js";

export default function GameHeader() {
	const [ state, ] = useContext(UserContext);

	const toggleFinalScore = () => {
		switch (state.language) {
            case "English":
                return "Final Score:";
            case "Spanish":
                return "Puntuación final:";
            case "Italian":
                return "Punteggio finale:";
            case "Russian":
                return "Финальный счет:";
            default:
                return "Final Score:";
        }
	};

	const toggleGameOver = () => {
		switch (state.language) {
            case "English":
                return "GAME OVER";
            case "Spanish":
                return "JUEGO TERMINADO";
            case "Italian":
                return "GIOCO FINITO";
            case "Russian":
                return "ИГРА ЗАКОНЧЕНА";
            default:
                return "GAME OVER";
        }
	};

	const toggleLocateGlobe = () => {
		switch (state.language) {
            case "English":
                return "Locate on the Globe";
            case "Spanish":
                return "Ubicar en el Globo";
            case "Italian":
                return "Individua sul globo";
            case "Russian":
                return "Найдите на глобусе";
            default:
                return "Locate on the Globe";
        }
	};

	const toggleQuestion = () => {
        switch (state.language) {
            case "English":
                return (
					<span>Where is {state.landmarks[state.seriesIndex][state.landmarkIndex].the_bool ? "the" : ""} <span className="landmark-name">{state.landmarks[state.seriesIndex][state.landmarkIndex].name}</span>?</span>
				);
            case "Spanish":
                return (
					<span>¿Dónde está {state.landmarks[state.seriesIndex][state.landmarkIndex].the_bool ? "el" : ""} <span className="landmark-name">{state.landmarks[state.seriesIndex][state.landmarkIndex].name}</span>?</span>
				);
            case "Italian":
                return (
					<span>Dov'è {state.landmarks[state.seriesIndex][state.landmarkIndex].the_bool ? "il" : ""} <span className="landmark-name">{state.landmarks[state.seriesIndex][state.landmarkIndex].name}</span>?</span>
				);
            case "Russian":
                return (
					<span>Где {state.landmarks[state.seriesIndex][state.landmarkIndex].the_bool ? "el" : ""} <span className="landmark-name">{state.landmarks[state.seriesIndex][state.landmarkIndex].name}</span>?</span>
				);
            default:
                return (
					<span>Where is {state.landmarks[state.seriesIndex][state.landmarkIndex].the_bool ? "the" : ""} <span className="landmark-name">{state.landmarks[state.seriesIndex][state.landmarkIndex].name}</span>?</span>
				);
        }
    };

	const toggleUnits = () => {
		switch (state.language) {
            case "English":
                return !state.metricSystemBool ? ' miles' : ' km';
            case "Spanish":
                return !state.metricSystemBool ? ' millas' : ' km';
            case "Italian":
                return !state.metricSystemBool ? ' miglia' : ' km';
            case "Russian":
                return !state.metricSystemBool ? ' мили' : ' км';
            default:
                return !state.metricSystemBool ? ' miles' : ' km';
        }
	};

	const toggleWellDone = () => {
		switch (state.language) {
            case "English":
                return "Well Done!";
            case "Spanish":
                return "¡Bien hecho!";
            case "Italian":
                return "Ben fatto!";
            case "Russian":
                return "Отличная работа!";
            default:
                return "Well Done!";
        }
	};

	if (state.seriesIndex === -1) {
		return (
			<div></div>
		);
	}

	else if (state.landmarkIndex < 10) {
		return (
			<div className="top-of-page">
				<h2 className="header">
					{toggleQuestion()}
				</h2>
				<h2 className="header-middle">
					{toggleLocateGlobe()}
				</h2>
				<h4 className="header">
					{!state.metricSystemBool ? Math.round(state.totalKilometers * 0.6213711922) : state.totalKilometers} 
					{toggleUnits()}
				</h4>
			</div>
	
		);
	}

	else {
		return (
			<div className="top-of-page">
				<h2 className="header">
					{toggleGameOver()}
				</h2>
				<h2 className="header-middle">
					{toggleWellDone()}
				</h2>
				<h4 className="header">
					{toggleFinalScore()} {!state.metricSystemBool ? Math.round(state.totalKilometers * 0.6213711922) : state.totalKilometers} 
					{toggleUnits()}
				</h4>
			</div>
	
		);
	}
};