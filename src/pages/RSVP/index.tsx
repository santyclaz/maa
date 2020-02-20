import React, { useState } from 'react';

import { Grid, GridCell } from '@rmwc/grid';
import '@material/layout-grid/dist/mdc.layout-grid.css';
import { TextField } from '@rmwc/textfield';
import '@material/textfield/dist/mdc.textfield.css';
import '@material/floating-label/dist/mdc.floating-label.css';
import '@material/notched-outline/dist/mdc.notched-outline.css';
import '@material/line-ripple/dist/mdc.line-ripple.css';
import { Radio } from '@rmwc/radio';
import '@material/radio/dist/mdc.radio.css';
import '@material/form-field/dist/mdc.form-field.css';
import { Select } from '@rmwc/select';
import '@material/select/dist/mdc.select.css';
import '@material/floating-label/dist/mdc.floating-label.css';
import '@material/notched-outline/dist/mdc.notched-outline.css';
import '@material/line-ripple/dist/mdc.line-ripple.css';
import '@material/list/dist/mdc.list.css';
import '@material/menu/dist/mdc.menu.css';
import '@material/menu-surface/dist/mdc.menu-surface.css';
import { Button } from '@rmwc/button';
import '@material/button/dist/mdc.button.css';

import styles from './RSVP.module.css';

import splashImg from 'assets/todo-1920.jpg';

/**
 * constants
 */

const MAX_GUESTS = 5;
const guestCountOptions: { value: string; label: string }[] = [];

for (let i = 0; i <= MAX_GUESTS; i++) {
	guestCountOptions.push({
		value: i.toString(),
		label: i === 0 ? 'Just myself' : i === 1 ? '1 guest' : `${i} guests`,
	});
}

/**
 * implementation
 */

const RSVP: React.FC = () => {
	const [name, setName] = useState('');
	const [attending, setAttending] = useState<undefined | boolean>(undefined);
	const [guestCount, setGuestCount] = useState(0);
	const [message, setMessage] = useState('');

	return (
		<div className={styles.container}>
			<section className="splash img-container">
				<img
					src={splashImg}
					alt="splash"
					className="img-container__img--fill-height img-container__img--vertical-center img-container__img--horizontal-center"
				/>
			</section>
			<section className="main-content">
				<h1>RSVP</h1>
				<form>
					<Grid>
						<GridCell span={12}>
							{/* can't use `fullWidth` prop w/ `outlined` (https://github.com/jamesmfriedman/rmwc/issues/530) */}
							<TextField
								name="name"
								className={`${styles.fullWidth} ${styles.backgroundOpacity}`}
								placeholder="Full Name"
								outlined
								value={name}
								onChange={e => setName(e.currentTarget.value)}
							/>
						</GridCell>
						<GridCell span={12}>
							<Radio
								name="attending"
								label="Attending"
								checked={attending === true}
								value="true"
								onChange={e => setAttending(e.currentTarget.value === 'true')}
							/>
							<Radio
								name="attending"
								label="Not Attending"
								checked={attending === false}
								value="false"
								onChange={e => setAttending(e.currentTarget.value === 'true')}
							/>
						</GridCell>

						<GridCell span={12}>
							<Select
								name="guestCount"
								className={`${styles.fullWidth} ${styles.backgroundOpacity}`}
								outlined
								enhanced
								options={guestCountOptions}
								value={guestCount.toString()}
								onChange={e =>
									setGuestCount(Number.parseInt(e.currentTarget.value))
								}
							/>
						</GridCell>

						<GridCell span={12}>
							<TextField
								name="comment"
								className={styles.backgroundOpacity}
								placeholder="Message"
								textarea
								outlined
								fullwidth
								rows={4}
								maxLength={200}
								characterCount
								value={message}
								onChange={e => setMessage(e.currentTarget.value)}
							/>
						</GridCell>

						<GridCell span={12} className={styles.textCenter}>
							<Button
								label="Submit"
								unelevated
								value={message}
								onClick={e => {
									console.log(name, attending, guestCount, message);
									e.preventDefault();
								}}
							/>
						</GridCell>
					</Grid>
				</form>
			</section>
		</div>
	);
};

export default RSVP;
