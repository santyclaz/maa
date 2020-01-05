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
			</section>

			<section className="main-content">Placeholder</section>
		</div>
	);
};

export default Todo;
