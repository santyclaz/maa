import React from 'react';

import './Travel.module.css';

import splashImg from 'assets/travel-1920.jpg';

const Travel: React.FC = () => {
	return (
		<div>
			<section className="splash img-container">
				<img
					src={splashImg}
					alt="splash"
					className="img-container__img--fill-height img-container__img--vertical-center img-container__img--horizontal-center"
				/>
				<span className="splash__text">Travel</span>
			</section>

			<section className="main-content">
				<h1>By Plane</h1>

				<section>
					<h2>Shannon Airport</h2>
					<p>
						Closest airport to the hotel venue, only an hour drive away. But
						flights might be more expensive. There are also limited direct flights to this airport.
					</p>
					<p>
						<a href="https://www.google.com/maps/dir/Shannon+Airport,+County+Clare,+Ireland/Armada+Hotel,+Breaffy+South,+County+Clare,+Ireland/@52.799845,-9.2961765,11z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x485b41dad0f8b40b:0x6bf3c305b024f8dc!2m2!1d-8.9146911!2d52.6996573!1m5!1m1!1s0x485b02d413389b5d:0xab5eb23e1dd63517!2m2!1d-9.4365209!2d52.8451737!3e0" target="_blank" rel="noopener noreferrer">Map Route</a>
					</p>
				</section>

				<section>
					<h2>Dublin Airport</h2>
					<p>
						Fly into the capital city of Ireland and drive for about 3 hours.
						Travelers from Asia will most likely be flying into this airport.
					</p>
					<p>
						<a href="https://www.google.com/maps/dir/Dublin+Airport+%28DUB%29,+Dublin,+Ireland/Armada+Hotel,+Breaffy+South,+County+Clare,+Ireland/@53.040609,-8.9543614,8z/data=!4m15!4m14!1m5!1m1!1s0x486711be6993192f:0x55121bb5b725f355!2m2!1d-6.2499098!2d53.4264481!1m5!1m1!1s0x485b02d413389b5d:0xab5eb23e1dd63517!2m2!1d-9.4365209!2d52.8451737!3e0!5i1" target="_blank" rel="noopener noreferrer">Map Route</a>
					</p>
				</section>
			</section>

			<hr />

			<section className="main-content">
				<h1>Car Rental</h1>

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
