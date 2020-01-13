import React from 'react';

import splashImg from 'assets/todo-1920.jpg';

const Todo: React.FC = () => {
	return (
		<div>
			<section className="splash img-container">
				<img
					src={splashImg}
					alt="splash"
					className="img-container__img--fill-height img-container__img--vertical-center img-container__img--horizontal-center"
				/>
				<span className="splash__text">To Do</span>
			</section>

			<section className="main-content">
				<p>Placeholder</p>
			</section>
		</div>
	);
};

export default Todo;
