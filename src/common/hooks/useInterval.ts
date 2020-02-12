/**
 * hook version of setInterval
 * https://overreacted.io/making-setinterval-declarative-with-react-hooks/
 */

import { useRef, useEffect } from 'react';

/**
 * API
 */

export { useInterval as default };

/**
 * implementation
 */

const NOOP = () => {};

/**
 * @arg {function} callback - callback to invoke at given interval
 * @arg {number} delayMs - minimum delay between invocations
 * @arg {boolean} leadingCall - whether to start with immediate invocation of callback or not
 */
function useInterval(
	callback: () => void,
	delayMs: number,
	leadingCall: boolean = false
) {
	const initialLeadingCallVal = useRef<boolean>(leadingCall); // save initial value
	const callbackRef = useRef<() => void>(NOOP);

	useEffect(() => {
		callbackRef.current = callback;
	});

	// on mount only
	useEffect(() => {
		// using reference version so we don't need to include it in the dependency list
		// i.e. if referencing `leadingCall`, linter rule `react-hooks/exhaustive-deps`
		//   will complain
		if (initialLeadingCallVal) {
			callbackRef.current();
		}
	}, []);

	// setup/clean-up interval when delayMs changes
	useEffect(() => {
		function tick() {
			callbackRef.current();
		}

		const id = window.setInterval(tick, delayMs);
		return () => window.clearInterval(id);
	}, [delayMs]);
}
