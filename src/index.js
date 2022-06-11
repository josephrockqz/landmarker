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
			points: [],
		};
	}

	handleGlobeClick(click) {
		if (this.state.landmarkIndex < this.state.landmarks.length) {
			let point = {
				lat: click.lat,
				lng: click.lng,
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

			let arc = {
				arcLabel: this.state.landmarks[this.state.landmarkIndex].properties.name,
				startLat: click.lat,
				startLng: click.lng,
				endLat: this.state.landmarks[this.state.landmarkIndex].properties.latitude,
				endLng: this.state.landmarks[this.state.landmarkIndex].properties.longitude,
				color: 'blue'
			};
			let arcs = this.state.arcs.slice();
			arcs.push(arc);
			this.setState({
				arcs: arcs
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
				<div className="title"><h2>{this.state.landmarks[this.state.landmarkIndex].properties.name}</h2></div>
				<Globe
					backgroundColor='peachpuff'
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
					// arcDashAnimateTime={() => Math.random() * 4000 + 500}
				/>
			</div>
			
		);
  	}
}

document.body.style.background = "peachpuff";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Game />);
