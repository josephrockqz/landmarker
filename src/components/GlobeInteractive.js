import React, { useContext, useEffect, useRef } from "react";
import Globe from 'react-globe.gl';
import { UserContext } from "../index.js";

import earthTopology from "../images/earth-topology.png";
import earthDay from "../images/earth-day.jpg";
import earthBlueMarble from "../images/earth-blue-marble.jpg";

import { Button } from "react-bootstrap";

export default function GlobeInteractive() {
    const [ state, dispatch ] = useContext(UserContext);
	const globeEl = useRef();

	useEffect(() => {
		// disable zoom if device is touch screen
			// this prevents unintended globe clicks when zooming with finger pinch
		if (state.isTouchDevice === true) {
			globeEl.current.controls().enableZoom = false;
		}

		// globeEl.current.controls().zoomSpeed = 4;
		// globeEl.current.controls().rotateSpeed = 4;

		// Auto-rotate
		// globeEl.current.controls().autoRotate = true;
		// globeEl.current.controls().autoRotateSpeed = 0.3;

		// Initial zoom in
		globeEl.current.pointOfView({ altitude: 2 }, 1500);
		globeEl.current.controls().update();
	}, [state.isTouchDevice]);

    const handleGlobeClick = click => {
		// Game view should not be here if seriesIndex is not 0-4
		if (state.seriesIndex < 0 || state.seriesIndex > 5) {
			return;
		}
		// if landmarkIndex is greater than 10, the series should be over
		if (state.landmarkIndex < 10) {
			const lat1 = click.lat;
			const lng1 = click.lng;
			const lat2 = state.landmarks[state.seriesIndex][state.landmarkIndex].latitude;
			const lng2 = state.landmarks[state.seriesIndex][state.landmarkIndex].longitude;

			let point = {
				lat: lat1,
				lng: lng1,
				size: 0.1,
				color: 'gold'
			};
			dispatch({ type: "add_point", payload: point });

			dispatch({ type: "add_label", payload: state.landmarks[state.seriesIndex][state.landmarkIndex] });

			// calculate great-circle distance using haversine formula
			const R = 6371e3; // metres
			const φ1 = lat1 * Math.PI/180; // φ, λ in radians
			const φ2 = lat2 * Math.PI/180;
			const Δφ = (lat2-lat1) * Math.PI/180;
			const Δλ = (lng2-lng1) * Math.PI/180;
			const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ/2) * Math.sin(Δλ/2);
			const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
			const d = Math.round(R * c / 1000); // in km
			dispatch({ type: "add_distance", payload: d });

			let arc = {
				arcLabel: state.landmarks[state.seriesIndex][state.landmarkIndex].name,
				startLat: lat1,
				startLng: lng1,
				endLat: lat2,
				endLng: lng2,
				color: 'blue',
				distance: d,
			};
			dispatch({ type: "add_arc", payload: arc });

			let ring = {
				lat: lat1,
				lng: lng1,
			};
			dispatch({ type: "add_ring", payload: ring });

			setTimeout(() => {
				dispatch({ type: "remove_rings" });
				// end series
				if (state.landmarkIndex === 9) {
					dispatch({ type: "open_stats_game_modal" });
				}
			}, "1000");

			// next landmark
			dispatch({ type: "increment_landmark_index" });
		}
	};

	const zoom = (num) => {
		const currentDistance = globeEl.current.controls().getDistance();
		let newDistance = 0;

		if (num === 0) {
			newDistance = (currentDistance - 50) / 100;
			globeEl.current.pointOfView({ altitude: newDistance }, 100);
		} else if (num === 1) {
			newDistance = (currentDistance - 150) / 100;
			globeEl.current.pointOfView({ altitude: newDistance }, 100);
		}
	};

    return (
		<div>
			<div className="globe-container">
				<Globe
					ref={globeEl}
					backgroundColor='rgba(255,0,0,0)'
					bumpImageUrl={earthTopology}
					globeImageUrl={state.darkModeBool ? earthBlueMarble : earthDay}
					onGlobeClick={handleGlobeClick}
					height={state.isSmall ? 320 : 600}
					width={state.isSmall ? 320 : 600}
					lineHoverPrecision={1}
					// point stuff
					pointsData={state.points}
					pointAltitude="size"
					pointColor="color"
					// label stuff
					labelsData={state.labels}
					labelLat={d => d.latitude}
					labelLng={d => d.longitude}
					labelText={d => d.name}
					labelSize={1.0}
					labelDotRadius={0.5}
					labelColor={() => state.darkModeBool ? 'rgba(255, 255, 255, 0.75)' : 'rgba(0, 0, 0, 0.75)'}
					labelResolution={5}
					// arc stuff
					arcsData={state.arcs}
					arcColor={() => state.darkModeBool ? "white" : "black"}
					arcLabel={d => !state.metricSystemBool ? Math.round(d.distance * 0.6213711922) + ' miles' : d.distance + ' km'}
					// ring stuff
					ringsData={state.rings}
					ringLat={d => d.lat}
					ringLng={d => d.lng}
					ringColor={'blue'}
				/>
			</div>
			<div className="zoom-controls">

				<Button
					className="zoom-button"
					onClick={() => { zoom(0); }}
					style={{
						backgroundColor: "#c9a330",
						border: "none",
						marginLeft: "20px"
					}}
				>
					-
				</Button>

				<Button
					className="zoom-button"
					onClick={() => { zoom(1); }}
					style={{
						backgroundColor: "#c9a330",
						border: "none",
						marginRight: "20px"
					}}
				>
					+
				</Button>

			</div>
		</div>
    );
};