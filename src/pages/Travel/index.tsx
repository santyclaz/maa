import React from 'react';

import styles from './Travel.module.css';

import splashImg from 'assets/travel-2-1920.jpg';

const Travel: React.FC = () => {
	return (
		<div>
			<section className="splash img-container">
				<img
					src={splashImg}
					alt="splash"
					className="img-container__img--fill-height img-container__img--vertical-center img-container__img--horizontal-center"
				/>
			</section>

			<section className={styles.content}>
				<h1>By Plane</h1>

				<section>
					<h2>Shannon Airport</h2>
					<p>
						Closest airport to the hotel venue, only an hour drive away. But
						flights might be more expensive..
					</p>
					<p>
						<a href="#map">Map Route</a>
					</p>
				</section>

				<section>
					<h2>Dublin Airport</h2>
					<p>
						Fly into the capital city of Ireland and drive for about 3 hours.
						Travelers from Asia will most likely be flying into this airport.
					</p>
					<p>
						<a href="#map">Map Route</a>
					</p>
				</section>
			</section>

			<hr />

			<section className={styles.content}>
				<h1>By Plane</h1>

				<p>
					We highly recommend renting a car to drive through the countryside.
					Most cars in Ireland are manual, if you need an automatic one, book as
					early as possible before they run out.
				</p>

				<p>
					If you do not drive, please email us at{' '}
					<a
						href="mailto:maryandalanwedding@gmail.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						maryandalanwedding@gmail.com
					</a>{' '}
					so we can coordinate transportation.
				</p>
			</section>
		</div>
	);
};

export default Travel;
