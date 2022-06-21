import React, { useContext } from 'react';
import Globe from 'react-globe.gl';

import GameHeader from '../components/GameHeader.js';
import NavBar from '../components/NavBar.js';
import SeriesStats from '../components/SeriesStats.js';

import { UserContext } from "../index.js";

export default function Game() {
	const [ state, dispatch ] = useContext(UserContext);

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
					alert("game is done");
				}
			}, "1000");

			// next landmark
			dispatch({ type: "increment_landmark_index" });
		}
	};

  	return (
		<div>

            <NavBar />

			<GameHeader />

			<div className="globe-container">
				<Globe
					backgroundColor='rgba(255,0,0,0)'
					globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
					onGlobeClick={handleGlobeClick}
					height={600}
					width={600}
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
					labelColor={d => d.color}
					labelResolution={5}
					// arc stuff
					arcsData={state.arcs}
					arcColor={d => d.arcColor}
					arcLabel={d => !state.metricSystemBool ? Math.round(d.distance * 0.6213711922) + ' miles' : d.distance + ' km'}
					// arcDashAnimateTime={() => Math.random() * 20 + 50}
					// ring stuff
					ringsData={state.rings}
					ringLat={d => d.lat}
					ringLng={d => d.lng}
					ringColor={'blue'}
				/>
			</div>

			<SeriesStats />
				
		</div>
	);
};
