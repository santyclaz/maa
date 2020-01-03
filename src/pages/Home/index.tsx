import React from 'react';

import styles from './Home.module.css';

import splashImg from 'assets/homepage-2000.jpg';

const Home: React.FC = () => {
	return (
		<div>
			<section className="splash img-container">
				<img
					src={splashImg}
					alt="splash"
					className="img-container__img--vertical-center img-container__img--horizontal-center"
				/>
			</section>
			<section className={styles.content}>
				<p>Please join us for our wedding celebration in:</p>
				<h2>County Clare, Ireland</h2>
				<ol className={`${styles.countdown} inline`}>
					<li>300 days</li>
					<li>22 hours</li>
					<li>32 mins</li>
					<li>32 secs</li>
				</ol>
			</section>
		</div>
	);
};

export default Home;
