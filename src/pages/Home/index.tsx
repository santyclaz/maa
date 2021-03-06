import React, { useState } from 'react';

import styles from './Home.module.css';

import useCountDownTo from 'common/hooks/useCountDownTo';

import splashImgXs from 'assets/homepage-2-1920.jpg';
import splashImg from 'assets/homepage-1920.jpg';

const Home: React.FC = () => {
	const [timeLeft, setTimeLeft] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	});
	// Ireland is GMT
	useCountDownTo('2020-06-13T00:00:00Z', timeleft => {
		setTimeLeft(timeleft);
	});

	return (
		<div>
			<section className="splash img-container">
				<img
					src={splashImgXs}
					alt="splash"
					className="img-container__img--fill-height img-container__img--vertical-center img-container__img--horizontal-center visible-xs-inline"
				/>
				<img
					src={splashImg}
					alt="splash"
					className="img-container__img--fill-height img-container__img--vertical-center img-container__img--horizontal-center hidden-xs"
				/>
			</section>
			<section className={`main-content ${styles.content}`}>
				<p>Please join us for our wedding celebration in:</p>
				<h2>County Clare, Ireland</h2>
				<ol className={`${styles.countdown} inline`}>
					<li>{timeLeft.days} days</li>
					<li>{timeLeft.hours} hours</li>
					<li>{timeLeft.minutes} mins</li>
					<li>{timeLeft.seconds} secs</li>
				</ol>
			</section>
		</div>
	);
};

export default Home;
