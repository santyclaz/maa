import React from 'react';

import './Registry.module.css';

import splashImg from 'assets/registry-1920.jpg';
import zolaLogo from 'assets/zola-logo.png';

const Home: React.FC = () => {
	return (
		<div>
			<section className="splash img-container">
				<img
					src={splashImg}
					alt="splash"
					className="img-container__img--fill-height img-container__img--vertical-center img-container__img--horizontal-center"
				/>
				<span className="splash__text splash__text--backdrop">Registry</span>
			</section>

			<section className="main-content">
				<p>
					Your presence at our wedding is the greatest gift of all. However, if
					you wish to honour us with a gift, contributions to our honeymoon fund
					is highly appreciated.
				</p>

				<h2>You Can Make Your Gift At:</h2>

				<p>
					<img src={zolaLogo} alt="zola-logo" style={{ width: '190px' }} />
				</p>
			</section>
		</div>
	);
};

export default Home;
