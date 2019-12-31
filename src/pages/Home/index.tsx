import React from 'react';
import { RouteComponentProps } from '@reach/router';

import splashImg from 'assets/main1.jpg';

const Home: React.FC<RouteComponentProps> = () => {
	return (
		<section className="splash img-scaling">
			<img
				src={splashImg}
				alt="splash"
				className="img-scaling__img--fill-height img-scaling__img--horizontal-center"
			/>
		</section>
	);
};

export default Home;
