import useInterval from 'common/hooks/useInterval';

/**
 * implementation
 */

export type TimeLeft = {
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
};

function useCountDownTo(
	date: Date | string,
	onTick: (timeleft: TimeLeft) => void
) {
	useInterval(
		() => {
			const toDate = convertToDate(date);
			const timeLeft = calculateTimeLeft(toDate);
			onTick(timeLeft);
		},
		1000,
		true
	);
}

export default useCountDownTo;

/**
 * helper functions
 */

function convertToDate(toDateVal: string | Date | undefined): Date {
	let toDate = new Date();

	if (typeof toDateVal === 'string') {
		toDate = new Date(toDateVal);
	} else if (toDateVal instanceof Date) {
		toDate = toDateVal;
	}

	return toDate;
}

function calculateTimeLeft(toDate: Date): TimeLeft {
	var now = new Date();
	var diff = Math.floor((toDate.getTime() - now.getTime()) / 1000);
	var past = diff < 0;

	var t = Math.abs(diff);
	var days = Math.floor(t / 86400);
	t -= days * 86400;
	var hours = Math.floor(t / 3600) % 24;
	t -= hours * 3600;
	var minutes = Math.floor(t / 60) % 60;
	t -= minutes * 60;
	var seconds = t % 60;

	var timeLeftObj: TimeLeft = {
		days,
		hours,
		minutes,
		seconds,
	};

	if (past) {
		// https://github.com/microsoft/TypeScript/pull/12253#issuecomment-353491951
		(Object.keys(timeLeftObj) as (keyof TimeLeft)[]).forEach(function(key) {
			timeLeftObj[key] = 0 - timeLeftObj[key];
		});
	}

	return timeLeftObj;
}
