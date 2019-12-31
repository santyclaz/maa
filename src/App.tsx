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
						<li>Schedule</li>
						<li>
							<Link to="travel">Travel</Link>
						</li>
						<li>Lodging</li>
						<li>RSVP</li>
						<li>Registry</li>
					</ol>
				</nav>
			</header>
			<Router className="viewport">
				<Home path="/" />
				<Travel path="travel" />
			</Router>
		</div>
	);
};

export default App;
