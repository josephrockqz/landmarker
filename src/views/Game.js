import React, { useCallback } from 'react';
import Globe from 'react-globe.gl';

import NavBar from '../components/NavBar.js';

import { UserContext } from "../index.js";

export default function Game() {
    const [ state, dispatch ] = React.useContext(UserContext)
	console.log(state);

	const handleGlobeClick = useCallback(({ lat: lat1, lng: lng1} ) => {
		if (state.landmarkIndex < state.landmarks.length) {
			const lat2 = state.landmarks[state.seriesIndex][state.landmarkIndex].latitude;
			const lng2 = state.landmarks[state.seriesIndex][state.landmarkIndex].longitude;
			console.log(state.points);

			let point = {
				lat: lat1,
				lng: lng1,
				size: 0.1,
				color: 'gold'
			};
			let points = state.points.slice();
			points.push(point);
			dispatch({ type: "add_point", payload: points });
			
			// let labels = state.labels.slice();
			// labels.push(state.landmarks[state.seriesIndex][state.landmarkIndex]);
			// dispatch({ type: "add_label", payload: labels });

			// // calculate great-circle distance using haversine formula
			// const R = 6371e3; // metres
			// const φ1 = lat1 * Math.PI/180; // φ, λ in radians
			// const φ2 = lat2 * Math.PI/180;
			// const Δφ = (lat2-lat1) * Math.PI/180;
			// const Δλ = (lng2-lng1) * Math.PI/180;
			// const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ/2) * Math.sin(Δλ/2);
			// const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
			// const d = Math.round(R * c / 1000); // in km

			// let arc = {
			// 	arcLabel: state.landmarks[state.seriesIndex][state.landmarkIndex].name,
			// 	startLat: lat1,
			// 	startLng: lng1,
			// 	endLat: lat2,
			// 	endLng: lng2,
			// 	color: 'blue',
			// 	distance: d,
			// };
			// let arcs = state.arcs.slice();
			// arcs.push(arc);
			// dispatch({ type: "add_arc", payload: arcs });

			// let ring = {
			// 	lat: lat1,
			// 	lng: lng1,
			// };
			// let rings = state.rings.slice();
			// rings.push(ring);
			// dispatch({ type: "add_ring", payload: rings });

			console.log(state.points);
			// setTimeout(() => {
			// 	rings = [];
			// 	dispatch({ type: "remove_rings", payload: rings });
			// }, "3000");

			// if (this.state.landmarkIndex < this.state.landmarks.length - 1) {
			// 	this.setState({
			// 		landmarkIndex: this.state.landmarkIndex + 1
			// 	});
			// }
		}
	}, []);

  	return (
		<div className="main">

            <NavBar />

			<div className="top-of-page">
				<h2 className="header">
					Where is the <span className="landmark-name">{state.landmarks[0][state.landmarkIndex].name}</span>?
				</h2>
				<h2 className="header-middle">
					Locate on the globe
				</h2>
				<h4 className="header">
					{!state.metricSystemBool ? Math.round(state.totalKilometers * 0.6213711922) : state.totalKilometers} 
					{!state.metricSystemBool ? ' miles' : ' km'}
				</h4>
			</div>

			<div className="globe-container">
				<Globe
					backgroundColor='rgba(255,0,0,0)'
					// bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
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

			<div className="stats-block">
				Stats
			</div>
				
		</div>
	);
}
