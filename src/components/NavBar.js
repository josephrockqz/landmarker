import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';
import { UserContext } from "../index.js";

import { TbHome } from 'react-icons/tb';
import { IoMdSettings } from 'react-icons/io';
import { TbChartPie3 } from 'react-icons/tb';
import StatsDisplay from './StatsDisplay';

import { AiFillCloseSquare } from "react-icons/ai";

export default function NavBar() {
    let navigate = useNavigate();
    const [ state, dispatch ] = useContext(UserContext);

    const handleStatsModalClose = () => {
        dispatch({ type: "close_stats_nav_modal" });
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
        <div className="navbar">
			<div className="nav-left">
				<button className="nav-button" onClick={() => { navigate("/"); }}>
                    <TbHome size={25} />
                </button>
			</div>
			<div className="nav-middle">
                <h3 className="nav-header" onClick={() => { navigate("/game"); }} style={{cursor: 'pointer'}}>LANDMARKER</h3>
			</div>
			<div className="nav-right">
				<button className="nav-button">
                    <TbChartPie3 size={25} onClick={() => { dispatch({ type: "open_stats_nav_modal" }) }} />
                </button>
				<button className="nav-button" onClick={() => { navigate("/settings"); }}>
                    <IoMdSettings size={25} />
                </button>
			</div>

            <Modal
                fullscreen={state.isSmall ? true : false}
                show={state.statsModalNavBool}
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