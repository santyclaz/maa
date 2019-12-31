import React from 'react';
import { RouteComponentProps } from '@reach/router';

import splashImg from 'assets/main1.jpg';

const Home: React.FC<RouteComponentProps> = () => {
	return (
		<section className="splash img-scaling">
			<img
				src={splashImg}
				alt="splash"
				className="img-scaling__img--horizontal-center img-scaling__img--vertical-center"
			/>
		</section>
	);
};

export default Home;
