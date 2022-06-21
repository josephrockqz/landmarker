import React from 'react';

import GameHeader from '../components/GameHeader.js';
import GlobeInteractive from '../components/GlobeInteractive.js';
import NavBar from '../components/NavBar.js';
import SeriesStats from '../components/SeriesStats.js';

export default function Game() {
	return (
		<div>

            <NavBar />

			<GameHeader />

			<div className="globe-container">
				<GlobeInteractive />
			</div>

			<SeriesStats />
				
		</div>
	);
};
