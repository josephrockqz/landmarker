import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';
import { UserContext } from "../index.js";

import { TbHome } from 'react-icons/tb';
import { IoMdSettings } from 'react-icons/io';
import { TbChartPie3 } from 'react-icons/tb';
import StatsDisplay from './StatsDisplay';

export default function NavBar() {
    let navigate = useNavigate();
    const [ state, dispatch ] = useContext(UserContext);

    const handleStatsModalClose = () => {
        dispatch({ type: "close_stats_nav_modal" });
    };

    return (
        <div className="navbar">
			<div className="nav-left">
				<button className="nav-button" onClick={() => { navigate("/"); }}>
                    <TbHome size={30} />
                </button>
			</div>
			<div className="nav-middle">
				<button className="nav-button" onClick={() => { navigate("/game"); }}>
                    <h1 className="nav-header">LANDMARKER</h1>
                </button>
			</div>
			<div className="nav-right">
				<button className="nav-button">
                    <TbChartPie3 size={30} onClick={() => { dispatch({ type: "open_stats_nav_modal" }) }} />
                </button>
				<button className="nav-button" onClick={() => { navigate("/settings"); }}>
                    <IoMdSettings size={30} />
                </button>
			</div>

            <Modal show={state.statsModalNavBool} onHide={handleStatsModalClose} backdrop="static" className="modal">
				<Modal.Header>
					<Modal.Title>Statistics</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<StatsDisplay />
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