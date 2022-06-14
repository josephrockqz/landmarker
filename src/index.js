import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
	BrowserRouter,
	Route,
	Routes,
} from 'react-router-dom';
import Game from './views/Game.js';
import Home from './views/Home.js';
import Settings from './views/Settings.js';
import PageNotFound from './views/PageNotFound.js';

// document.body.style.background = "rgb(2,0,36)";
document.body.style.background = "linear-gradient(rgba(0,212,255,0.5) 0%, rgba(9,9,121,0.5) 35%, rgba(2,0,36,0.5) 100%)";
const root = ReactDOM.createRoot(
	document.getElementById('root')
);
root.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/game" element={<Game />} />
			<Route path="/settings" element={<Settings />} />
			<Route path="*" element={<PageNotFound/>} />
		</Routes>
	</BrowserRouter>
);
