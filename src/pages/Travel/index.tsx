import React from 'react';
import { RouteComponentProps } from '@reach/router';

import styles from './Travel.module.css';

// `React.FC<RouteComponentProps>` to allow for @reach/router `path` property
const Travel: React.FC<RouteComponentProps> = () => {
	return <div className={styles.red}>This is the travel page</div>;
};

export default Travel;
