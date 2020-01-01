import React from 'react';
import { Router, Link } from '@reach/router';

import './App.module.css';

import Home from 'pages/Home';
import Travel from 'pages/Travel';

/**
 * If adding @reach/router `path` prop to component w/ Typescript use `RouteComponentProps` interface
 * https://github.com/reach/router/blob/master/website/src/markdown/pages/typescript.md
 * https://github.com/reach/router/issues/141#issuecomment-481472656
 */
const App: React.FC = () => {
	return (
		<div className="app font-lato">
			<header>
				<nav>
					<ol>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/">The Wedding</Link>
						</li>
						<li>
							<Link to="travel">Lodging</Link>
						</li>
						<li>
							<Link to="/">Travel</Link>
						</li>
						<li>
							<Link to="/">TO DO</Link>
						</li>
						<li>
							<Link to="/">RSVP</Link>
						</li>
						<li>
							<Link to="/">Registry</Link>
						</li>
					</ol>
				</nav>
			</header>
			<Router className="viewport">
				<Home path="/" />
				<Travel path="travel" />
			</Router>
			<footer />
		</div>
	);
};

export default App;
