import React, { useContext } from "react";
import { Button, Modal } from "react-bootstrap";
import { UserContext } from "../index.js";

import GameHeader from '../components/GameHeader.js';
import GlobeInteractive from '../components/GlobeInteractive.js';
import LevelDisplay from "../components/LevelDisplay.js";
import LevelSelect from "../components/LevelSelect.js";
import NavBar from '../components/NavBar.js';
import SeriesStats from '../components/SeriesStats.js';
import StatsDisplay from "../components/StatsDisplay";

import { AiFillCloseSquare } from "react-icons/ai";

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

	const toggleLevelModalHeader = () => {
		switch (state.language) {
            case "English":
                return "Choose a Level";
            case "Spanish":
                return "Elige un nivel";
            case "Italian":
                return "Scegli un livello";
            case "Russian":
                return "Выберите уровень";
            default:
                return "Choose a Level";
        }
	};

	const toggleStatsModalHeader = () => {
		switch (state.language) {
            case "English":
                return "Statistics";
            case "Spanish":
                return "Estadísticass";
            case "Italian":
                return "Statistiche";
            case "Russian":
                return "Статистика";
            default:
                return "Statistics";
        }
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

			<Modal 
				fullscreen
				show={state.levelsModalBool}
				onHide={handleLevelsModalClose}
				backdrop="static"
				className="modal"
			>
				<Modal.Header>
					<Modal.Title>{toggleLevelModalHeader()}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<LevelSelect />
				</Modal.Body>
			</Modal>

			<Modal
				show={state.statsModalGameBool}
				onHide={handleStatsModalClose}
				backdrop="static"
				className="modal"
			>
				<Modal.Header>
					<Modal.Title>{toggleStatsModalHeader()}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<StatsDisplay />
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleStatsModalClose}>
						<AiFillCloseSquare color="white" size="25px" />
					</Button>
				</Modal.Footer>
			</Modal>
				
		</div>
	);
};
