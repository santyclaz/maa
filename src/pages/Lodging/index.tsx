import React from 'react';

import styles from './Lodging.module.css';

import splashImg from 'assets/main2.jpg';

const Lodging: React.FC = () => {
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
				<h1>Armada Hotel</h1>

				<section>
					<h2>Miltown Malbay, Co. Clare</h2>
					<p>
						Our ceremony and reception will be held at this boutique hotel,
						perched on a cliffside overlooking the Atlantic ocean.
					</p>
					<p>
						We have blocked out rooms for Friday and Saturday night -
						<br />
						<strong>first come first serve.</strong>
					</p>
					<p>Bed & Breakfast Rates:</p>
					<ol>
						<li>1 night - 205/night</li>
						<li>2 nights - 195/night</li>
						<li>3 nights - 185/night</li>
					</ol>
					<p>
						Our Irish wedding celebration can last till dawn! You will thank
						yourself if your rooms are just a flight of stairs away!
					</p>
					<p>
						<a href="#">Visit Website</a>
					</p>
				</section>

				<p>* * *</p>

				<section>
					<h2>How to Reserve Rooms:</h2>
					<p>
						Send an email to{' '}
						<a href="mailto:reservations@armadahotel.com" target="_blank">
							reservations@armadahotel.com
						</a>{' '}
						with the following details:
					</p>
					<ol>
						<li>
							1) Name, phone number, address, credit card info (no pre-payment
							required)
						</li>
						<li>2) Mention you are there for Alan & Mary's wedding</li>
					</ol>
					<p>
						<em>Free cancellation up to 48 hours in advance.</em>
					</p>
				</section>
			</section>

			<hr />

			<section className={styles.content}>
				<h1>Other Nearby Options</h1>

				<section>
					<h2>Spanish Point House</h2>

					<p>Breaffy South, Spanish Point, Co. Clare, V95 E942, Ireland</p>

					<p>
						<a href="#">Visit Website</a>
					</p>
				</section>

				<section>
					<h2>Spanish Point House</h2>

					<p>Armada Holiday Cottages, Co. Clare, Ireland</p>

					<p>
						<a href="#">Visit Website</a>
					</p>
				</section>
			</section>
		</div>
	);
};

export default Lodging;
