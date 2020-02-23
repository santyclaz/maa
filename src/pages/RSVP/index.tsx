import React, { useState } from 'react';

import { Grid, GridCell } from '@rmwc/grid';
import { TextField } from '@rmwc/textfield';
import { Radio } from '@rmwc/radio';
import { Select } from '@rmwc/select';
import { Button } from '@rmwc/button';

import config from 'config';
import splashImg from 'assets/todo-1920.jpg';

import styles from './RSVP.module.css';

/**
 * constants
 */

const RSVP_URL = config.RSVP_API_URL;

// guest count options
const MAX_GUESTS = 5;
const guestCountOptions: { value: string; label: string }[] = [];

for (let i = 0; i <= MAX_GUESTS; i++) {
	guestCountOptions.push({
		value: i.toString(),
		label: i === 0 ? 'Just me' : i === 1 ? '1 guest' : `${i} guests`,
	});
}

/**
 * implementation
 */

const RSVP: React.FC = () => {
	/**
	 * state
	 */

	const [hasClickedSubmit, setHasClickedSubmit] = useState(false);
	const [name, setName] = useState('');
	const [attending, setAttending] = useState<undefined | boolean>(undefined);
	const [guestCount, setGuestCount] = useState(0);
	const [guests, setGuests] = useState<string[]>([]);
	const [message, setMessage] = useState('');

	/**
	 * component definition
	 */

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
								invalid={hasClickedSubmit && !isNameValid()}
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

						{renderGuestListTextFields().map((textField, i) => (
							<GridCell key={i} span={12}>
								{textField}
							</GridCell>
						))}

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
									setHasClickedSubmit(true);

									if (isFormValid()) {
										submit({
											name,
											attending: attending === true,
											guests,
											message,
										});
									}

									e.preventDefault();
								}}
							/>
						</GridCell>
					</Grid>
				</form>
			</section>
		</div>
	);

	/**
	 * method definitions
	 */

	function isFormValid() {
		return [isNameValid, isAttendingValid].every(fn => fn());
	}
	function isNameValid() {
		return name.trim() !== '';
	}
	function isAttendingValid() {
		return typeof attending === 'boolean';
	}

	function renderGuestListTextFields() {
		let guestList = [];
		for (let i = 0; i < guestCount; i++) {
			guestList.push(
				<TextField
					key={i}
					className={`${styles.fullWidth} ${styles.backgroundOpacity}`}
					placeholder={`Guest #${i + 1} Full Name`}
					outlined
					value={guests[i] || ''} // doing this since given index may be undefined
					onChange={e => {
						const updatedGuests = [...guests];
						updatedGuests[i] = e.currentTarget.value;
						setGuests(updatedGuests);
					}}
				/>
			);
		}
		return guestList;
	}

	async function submit(payload: {
		name: string;
		attending: boolean;
		guests: string[];
		message: string;
	}) {
		const result = await fetch(RSVP_URL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(payload),
		});
		return result;
	}
};

export default RSVP;
