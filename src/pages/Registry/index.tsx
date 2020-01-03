import React from 'react';

import styles from './Registry.module.css';

const Home: React.FC = () => {
	return (
		<div>
			<section className={styles.content}>
				<p>
					Your presence at our wedding is the greatest gift of all. However, if
					you wish to honour us with a gift, contributions to our honeymoon fund
					is highly appreciated.
				</p>

				<h2>You Can Make Your Gift At:</h2>

				<p>ZOLA</p>
			</section>
		</div>
	);
};

export default Home;
