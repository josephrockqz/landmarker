import React from 'react';

import { useNavigate } from 'react-router-dom';

import { TbHome } from 'react-icons/tb';
import { IoMdSettings } from 'react-icons/io';
import { TbChartPie3 } from 'react-icons/tb';

// import { UserContext } from "../index.js";

export default function NavBar() {
    let navigate = useNavigate();
    // const [ state, dispatch ] = React.useContext(UserContext)
	// console.log(state);
    // dispatch({ type: "toggle_metric_system_bool" });

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
                    <TbChartPie3 size={30} />
                </button>
				<button className="nav-button" onClick={() => { navigate("/settings"); }}>
                    <IoMdSettings size={30} />
                </button>
			</div>
		</div>
    );
}