import React from 'react';

import './Wedding.module.css';

import splashImg from 'assets/wedding-1920.jpg';

const Wedding: React.FC = () => {
	return (
		<div>
			<section className="splash img-container">
				<img
					src={splashImg}
					alt="splash"
					className="img-container__img--fill-height img-container__img--vertical-center img-container__img--horizontal-center"
				/>
			</section>

			<section className="main-content">
				<h1>Ceremony & Reception</h1>
				<h2>Armada hotel</h2>
				<p>Spanish Point, Co. Clare, Ireland</p>
			</section>

			<section className="main-content">
				<h1>Event Schedule</h1>
				<section>
					<h2>Saturday - June 13, 2020</h2>
					<dl>
						<dt>2:00 pm</dt>
						<dd>Wedding Ceremony</dd>
						<dt>2:30 pm</dt>
						<dd>Cocktail Hour</dd>
						<dt>5:00 pm</dt>
						<dd>Reception</dd>
						<dt>12:00 am</dt>
						<dd>Afterparty</dd>
					</dl>
					<p>Attire: Cocktail</p>
				</section>
				<section>
					<h2>Sunday - June 14, 2020</h2>
					<dl>
						<dt>10 am - 12 pm</dt>
						<dd>Farewell Brunch</dd>
					</dl>
					<p>Attire: Casual</p>
				</section>
			</section>
		</div>
	);
};

export default Wedding;
