import React from 'react';
import { Router, Link, RouteComponentProps } from '@reach/router';

import styles from './App.module.css';

import Home from 'pages/Home';
import Wedding from 'pages/Wedding';
import Lodging from 'pages/Lodging';
import Travel from 'pages/Travel';
import Todo from 'pages/Todo';
import Registry from 'pages/Registry';

/**
 * utility HoC to wrap given component with `className` & `RouteComponentProps`
 *
 * `RouteComponentProps` interface is for leveraging @reach/router `path` prop on component
 * https://github.com/reach/router/blob/master/website/src/markdown/pages/typescript.md
 * https://github.com/reach/router/issues/141#issuecomment-481472656
 */
type ViewProps = {
	component: React.ReactElement;
	className?: string;
} & RouteComponentProps;
const View: React.FC<ViewProps> = ({ component, className }) => {
	return <div className={className}>{component}</div>;
};

/**
 * component definition
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
							<Link to="wedding">The Wedding</Link>
						</li>
						<li>
							<Link to="lodging">Lodging</Link>
						</li>
						<li>
							<Link to="travel">Travel</Link>
						</li>
						<li>
							<Link to="todo">TO DO</Link>
						</li>
						<li>
							<Link to="/">RSVP</Link>
						</li>
						<li>
							<Link to="registry">Registry</Link>
						</li>
					</ol>
				</nav>
			</header>
			<Router className={styles.viewport}>
				<View component={<Home />} path="/" />
				<View component={<Wedding />} path="wedding" />
				<View component={<Lodging />} path="lodging" />
				<View component={<Travel />} path="travel" />
				<View component={<Todo />} path="todo" />
				<View component={<Registry />} path="registry" />
			</Router>
			<footer />
		</div>
	);
};

export default App;
