import React, { useContext } from "react";

import { UserContext } from "../index.js";

export default function GameHeader() {
	const [ state, ] = useContext(UserContext);

	if (state.landmarkIndex < 10) {
		return (
			<div className="top-of-page">
				<h2 className="header">
					Where is {state.landmarks[state.seriesIndex][state.landmarkIndex].the_bool ? "the" : ""} <span className="landmark-name">{state.landmarks[state.seriesIndex][state.landmarkIndex].name}</span>?
				</h2>
				<h2 className="header-middle">
					Locate on the globe
				</h2>
				<h4 className="header">
					{!state.metricSystemBool ? Math.round(state.totalKilometers * 0.6213711922) : state.totalKilometers} 
					{!state.metricSystemBool ? ' miles' : ' km'}
				</h4>
			</div>
	
		);
	}

	else {
		return (
			<div className="top-of-page">
				<h2 className="header">
					GAME OVER
				</h2>
				<h2 className="header-middle">
					Well Done!
				</h2>
				<h4 className="header">
					Final Score: {!state.metricSystemBool ? Math.round(state.totalKilometers * 0.6213711922) : state.totalKilometers} 
					{!state.metricSystemBool ? ' miles' : ' km'}
				</h4>
			</div>
	
		);
	}
};