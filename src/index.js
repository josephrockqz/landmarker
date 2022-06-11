import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Globe from 'react-globe.gl';

class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			arcs: [],
			labels: [],
			landmarkIndex: 0,
			landmarks: [
				{
					properties: {
						latitude: 27.1751,
						longitude: 78.0421,
						name: 'Taj Mahal',
						color: 'black'
					}
				}
			],
			metricSystemBool: true,
			points: [],
			totalKilometers: 0,
		};
	}

	handleGlobeClick(click) {
		if (this.state.landmarkIndex < this.state.landmarks.length) {
			const lat1 = click.lat;
			const lat2 = this.state.landmarks[this.state.landmarkIndex].properties.latitude;
			const lng1 = click.lng;
			const lng2 = this.state.landmarks[this.state.landmarkIndex].properties.longitude;

			let point = {
				lat: lat1,
				lng: lng1,
				size: 0.1,
				color: 'gold'
			};
			let points = this.state.points.slice();
			points.push(point);
			this.setState({
				points: points
			});
			
			let labels = this.state.labels.slice();
			labels.push(this.state.landmarks[this.state.landmarkIndex]);
			this.setState({
				labels: labels
			});

			// calculate great-circle distance using haversine formula
			const R = 6371e3; // metres
			const φ1 = lat1 * Math.PI/180; // φ, λ in radians
			const φ2 = lat2 * Math.PI/180;
			const Δφ = (lat2-lat1) * Math.PI/180;
			const Δλ = (lng2-lng1) * Math.PI/180;
			const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ/2) * Math.sin(Δλ/2);
			const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
			const d = Math.round(R * c / 1000); // in km

			let arc = {
				arcLabel: this.state.landmarks[this.state.landmarkIndex].properties.name,
				startLat: lat1,
				startLng: lng1,
				endLat: lat2,
				endLng: lng2,
				color: 'blue',
				distance: d,
			};
			let arcs = this.state.arcs.slice();
			arcs.push(arc);
			this.setState({
				arcs: arcs,
				totalKilometers: this.state.totalKilometers + d,
			});

			if (this.state.landmarkIndex < this.state.landmarks.length - 1) {
				this.setState({
					landmarkIndex: this.state.landmarkIndex + 1
				});
			}
		}
		
	}

	handleLabelClick(label) {
		console.log(label);
	}

  	render() {
		return (
			<div>
				<div className="title">
					<h2>{this.state.landmarks[this.state.landmarkIndex].properties.name}</h2>
					<h4>{!this.state.metricSystemBool ? Math.round(this.state.totalKilometers * 0.6213711922) : this.state.totalKilometers}</h4>
				</div>
				<Globe
					backgroundColor='peachpuff'
					// bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
					globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
					onGlobeClick={click => this.handleGlobeClick(click)}
					// point stuff
					pointsData={this.state.points}
					pointAltitude="size"
					pointColor="color"
					// label stuff
					labelsData={this.state.labels}
					labelLat={d => d.properties.latitude}
					labelLng={d => d.properties.longitude}
					labelText={d => d.properties.name}
					labelSize={1.0}
					labelDotRadius={0.5}
					labelColor={d => d.properties.color}
					labelResolution={5}
					onLabelClick={label => this.handleLabelClick(label)}
					// arc stuff
					arcsData={this.state.arcs}
					arcColor={d => d.arcColor}
					arcLabel={d => !this.state.metricSystemBool ? Math.round(d.distance * 0.6213711922) : d.distance}
					// arcDashAnimateTime={() => Math.random() * 20 + 50}
				/>
			</div>
		);
  	}
}

document.body.style.background = "peachpuff";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Game />);