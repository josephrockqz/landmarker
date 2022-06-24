import React, { useContext } from "react";
import { Button, Modal } from "react-bootstrap";
import { UserContext } from "../index.js";

import GameHeader from '../components/GameHeader.js';
import GlobeInteractive from '../components/GlobeInteractive.js';
import LevelDisplay from "../components/LevelDisplay.js";
import LevelSelect from "../components/LevelSelect.js";
import NavBar from '../components/NavBar.js';
import SeriesStats from '../components/SeriesStats.js';

export default function Game() {
	const [ state, dispatch ] = useContext(UserContext);

	if (state.seriesIndex !== -1 && state.levelsModalBool === true) {
		dispatch({ type: "close_levels_modal" });
	}

	const handleLevelsModalClose = () => {
		dispatch({ type: "close_levels_modal" });
	};
    
    const handleStatsModalClose = () => {
        dispatch({ type: "close_stats_game_modal" });
    };

	return (
		<div>

            <NavBar />

			<GameHeader />

			<div className="globe-container">
				<GlobeInteractive />
			</div>

			<LevelDisplay />

			<SeriesStats />

			<Modal show={state.levelsModalBool} onHide={handleLevelsModalClose} backdrop="static" className="modal">
				<Modal.Header>
					<Modal.Title>Choose a Level</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<LevelSelect />
				</Modal.Body>
			</Modal>

			<Modal show={state.statsModalGameBool} onHide={handleStatsModalClose} backdrop="static" className="modal">
				<Modal.Header>
					<Modal.Title>Statistics</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					Average total distance
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleStatsModalClose}>
						Close
					</Button>
					<Button variant="primary" onClick={handleStatsModalClose}>
						Okay
					</Button>
				</Modal.Footer>
			</Modal>
				
		</div>
	);
};
